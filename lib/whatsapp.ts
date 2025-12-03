const TOKEN = process.env.WHATSAPP_API_TOKEN || '';
export async function sendText(to: string, text: string){
  if(!TOKEN) { console.log('[whatsapp] no token, stub', to, text); return { ok:true, stub:true } }
  const url = `https://graph.facebook.com/v17.0/${process.env.WHATSAPP_PHONE_ID}/messages`;
  const body = { messaging_product:'whatsapp', to, type:'text', text:{ body:text } };
  const res = await fetch(url, { method:'POST', headers:{ Authorization:`Bearer ${TOKEN}`, 'Content-Type':'application/json' }, body: JSON.stringify(body) });
  return res.json();
}
