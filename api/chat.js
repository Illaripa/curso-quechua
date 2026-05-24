const SYSTEM_PROMPTS = {
  q: "Eres un amigo quechua de Cusco. REGLA MAS IMPORTANTE: Responde CORTO. Maximo 2 frases en Quechua con su traduccion y 1 pregunta. NUNCA escribas parrafos largos. Ejemplo perfecto de respuesta: Allinmi! = Que bien! Imatam mikhuranki? = Que comiste? FORMATO: Frase en Quechua = traduccion. ESTILO: Habla como persona real, no como profesor. Si el estudiante escribe en Quechua: responde en Quechua puro, sin traduccion. Si hay error: agrega FEEDBACK: correccion breve. PROHIBIDO: listas, bullets, negritas, asteriscos, parrafos largos.",
  a: "Eres un amigo aymara del altiplano. REGLA MAS IMPORTANTE: Responde CORTO. Maximo 2 frases en Aymara con su traduccion y 1 pregunta. NUNCA escribas parrafos largos. Ejemplo perfecto de respuesta: Walikiwa! = Que bien! Kunasa manq'ta? = Que comiste? FORMATO: Frase en Aymara = traduccion. ESTILO: Habla como persona real, no como profesor. Si el estudiante escribe en Aymara: responde en Aymara puro, sin traduccion. Si hay error: agrega FEEDBACK: correccion breve. PROHIBIDO: listas, bullets, negritas, asteriscos, parrafos largos.",
  en: "Eres un tutor de ingles para hispanohablantes. Las traducciones siempre son al espanol. REGLA MAS IMPORTANTE: Responde CORTO. Maximo 2 frases en ingles con su traduccion al espanol y 1 pregunta. Ejemplo: That's great! = Que bien! What did you eat today? = Que comiste hoy? FORMATO: Frase en ingles = traduccion en espanol. ESTILO: Natural, como una conversacion real. Si el estudiante escribe en ingles: responde en ingles puro. Si hay error: agrega FEEDBACK: correccion breve. PROHIBIDO: listas, negritas, asteriscos, parrafos largos.",
  fr: "Eres un tutor de frances para hispanohablantes. Las traducciones siempre son al espanol. REGLA MAS IMPORTANTE: Responde CORTO. Maximo 2 frases en frances con su traduccion al espanol y 1 pregunta. Ejemplo: C'est super! = Que genial! Qu'est-ce que tu as mange? = Que comiste? FORMATO: Frase en frances = traduccion en espanol. ESTILO: Natural, como una conversacion real. Si el estudiante escribe en frances: responde en frances puro. Si hay error: agrega FEEDBACK: correccion breve. PROHIBIDO: listas, negritas, asteriscos, parrafos largos."
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  var body = req.body;
  if (!body || !Array.isArray(body.messages)) {
    return res.status(400).json({ error: 'Missing messages' });
  }

  // System prompt is server-controlled — ignore any client-supplied value
  var lang = ['q','a','en','fr'].indexOf(body.lang) >= 0 ? body.lang : 'q';
  var system = SYSTEM_PROMPTS[lang];

  // Limit message history to last 8, each message text to 500 chars
  var messages = body.messages.slice(-8).map(function(m) {
    return { role: m.role === 'assistant' ? 'assistant' : 'user', content: String(m.content || '').slice(0, 500) };
  });

  // Try OpenAI first
  var openaiKey = process.env.OPENAI_API_KEY;
  if (openaiKey) {
    try {
      var oaResp = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + openaiKey },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          max_tokens: 200,
          messages: [{ role: 'system', content: system }, ...messages]
        })
      });
      var oaData = await oaResp.json();
      if (oaResp.ok && oaData.choices && oaData.choices[0].message.content) {
        return res.status(200).json({ content: oaData.choices[0].message.content });
      }
    } catch (e) {}
  }

  // Fallback: Anthropic
  var anthropicKey = process.env.ANTHROPIC_API_KEY;
  if (anthropicKey) {
    var models = ['claude-sonnet-4-20250514', 'claude-3-5-haiku-20241022', 'claude-3-haiku-20240307'];
    for (var m = 0; m < models.length; m++) {
      try {
        var response = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': anthropicKey,
            'anthropic-version': '2023-06-01'
          },
          body: JSON.stringify({
            model: models[m],
            max_tokens: 150,
            system: system,
            messages: messages
          })
        });
        var data = await response.json();
        if (response.ok && data.content && data.content[0] && data.content[0].text) {
          return res.status(200).json({ content: data.content[0].text });
        }
        // If 404 (model not found), try next model
        if (response.status === 404) continue;
        // Other errors: return the error
        return res.status(response.status).json({ error: data.error ? data.error.message : 'Anthropic error', model: models[m] });
      } catch (e) {
        continue;
      }
    }
  }

  // Fallback: OpenRouter free models
  var orKey = process.env.OPENROUTER_API_KEY;
  if (!orKey && !anthropicKey) {
    return res.status(500).json({ error: 'No API key configured' });
  }
  if (!orKey) {
    return res.status(502).json({ error: 'Anthropic models unavailable' });
  }

  var models = [
    'google/gemma-3-27b-it:free',
    'google/gemma-3n-e4b-it:free',
    'qwen/qwen3-4b:free'
  ];
  var orMsgs = [
    { role: 'user', content: '[INSTRUCCIONES] ' + system + ' [/INSTRUCCIONES]' },
    { role: 'assistant', content: 'Entendido, soy tu tutor.' }
  ].concat(messages);

  for (var i = 0; i < models.length; i++) {
    try {
      var resp = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + orKey,
          'HTTP-Referer': 'https://yachay-tutor.vercel.app/',
          'X-Title': 'Yachay Tutor'
        },
        body: JSON.stringify({ model: models[i], max_tokens: 150, messages: orMsgs })
      });
      var d = await resp.json();
      if (resp.ok && d.choices && d.choices[0] && d.choices[0].message && d.choices[0].message.content) {
        return res.status(200).json({ content: d.choices[0].message.content });
      }
    } catch (e) { continue; }
  }

  return res.status(502).json({ error: 'All models unavailable' });
}
