export default async function handler(req, res) {
  console.log("Webhook handler called");
  
  if (req.method === "POST") {
    const event = req.body;

    console.log("Event type:", event.type);  // Log the event type for testing

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      console.log("User paid! Session:", session);
    }

    res.status(200).send("OK");
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
