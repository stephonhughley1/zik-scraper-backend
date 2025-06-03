export default async function handler(req, res) {
  console.log("✅ Webhook endpoint hit");

  if (req.method === "POST") {
    let event;

    try {
      // Parse the incoming JSON (only works because we're not verifying Stripe signature yet)
      event = req.body;
      console.log("✅ Event received:", event.type);
    } catch (err) {
      console.error("❌ Error parsing webhook:", err);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle checkout.session.completed event
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      console.log("🎯 Checkout session completed:", session);
    }

    res.status(200).send("Webhook received");
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}

