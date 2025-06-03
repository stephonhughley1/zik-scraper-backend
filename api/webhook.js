export default async function handler(req, res) {
  if (req.method === "POST") {
    const event = req.body;
    console.log("Received event type:", event.type);  // <== always log this

    if (event.type === "checkout.session.completed") {
      console.log("✅ checkout.session.completed event received!");
      // Do whatever you want here
    }

    res.status(200).send("OK");
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
