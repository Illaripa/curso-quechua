export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  var body = req.body;
  if (!body || !body.messages || !body.system) {
    return res.status(400).json({ error: 'Missing messages or system' });
  }

  // Try Anthropic (Claude) first, then OpenRouter as fallback
  var anthropicKey = process.env.ANTHROPIC_API_KEY;
  if (anthropicKey) {
    try {
      var response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': anthropicKey,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: 'claude-3-haiku-20240307',
          max_tokens: 150,
          system: body.system,
          messages: body.messages.slice(-8)
        })
      });
      var data = await response.json();
      if (response.ok && data.content && data.content[0] && data.content[0].text) {
        return res.status(200).json({ content: data.content[0].text });
      }
    } catch (e) {
      // Fall through to OpenRouter
    }
  }

  // Fallback: OpenRouter free models
  var orKey = process.env.OPENROUTER_API_KEY;
  if (!orKey) {
    return res.status(500).json({ error: 'No API key configured' });
  }

  var models = [
    'google/gemma-3-27b-it:free',
    'google/gemma-3n-e4b-it:free',
    'qwen/qwen3-4b:free'
  ];
  var orMsgs = [
    { role: 'user', content: '[INSTRUCCIONES] ' + body.system + ' [/INSTRUCCIONES]' },
    { role: 'assistant', content: 'Entendido, soy tu tutor.' }
  ].concat(body.messages.slice(-8));

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
