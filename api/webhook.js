export default async function handler(req, res) {
  if (req.method === "POST") {
    const event = req.body;

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
