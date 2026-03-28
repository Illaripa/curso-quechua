export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  var apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured on server' });
  }

  var body = req.body;
  if (!body || !body.messages || !body.system) {
    return res.status(400).json({ error: 'Missing messages or system' });
  }

  var models = [
    'google/gemma-3-27b-it:free',
    'google/gemma-3n-e4b-it:free',
    'qwen/qwen3-4b:free',
    'mistralai/mistral-small-3.1-24b-instruct:free',
    'deepseek/deepseek-chat-v3-0324:free'
  ];

  var orMsgs = [
    { role: 'user', content: '[INSTRUCCIONES] ' + body.system + ' [/INSTRUCCIONES]' },
    { role: 'assistant', content: 'Entendido, soy tu tutor.' }
  ].concat(body.messages.slice(-8));

  for (var i = 0; i < models.length; i++) {
    for (var attempt = 0; attempt < 2; attempt++) {
      if (attempt > 0) await new Promise(function(r) { setTimeout(r, 3000); });
      try {
        var response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + apiKey,
            'HTTP-Referer': 'https://illaripa.github.io/curso-quechua/',
            'X-Title': 'Yachay Tutor'
          },
          body: JSON.stringify({
            model: models[i],
            max_tokens: 150,
            messages: orMsgs
          })
        });

        var data = await response.json();
        if (response.ok && data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) {
          return res.status(200).json({
            content: data.choices[0].message.content
          });
        }
        if (response.status !== 429) break;
      } catch (e) {
        break;
      }
    }
  }

  return res.status(502).json({ error: 'All models unavailable. Try again in a few seconds.' });
}
