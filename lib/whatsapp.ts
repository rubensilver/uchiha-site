export async function sendWhatsAppMessage(to: string, message: string) {
  const token = process.env.WA_TOKEN;
  const phoneId = process.env.WA_PHONE_NUMBER_ID;
  if (!token || !phoneId) throw new Error("WhatsApp config missing");
  const url = `https://graph.facebook.com/v17.0/${phoneId}/messages`;
  const body = {
    messaging_product: "whatsapp",
    to,
    text: { body: message }
  };
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const json = await res.json();
  if (!res.ok) throw json;
  return json;
}
