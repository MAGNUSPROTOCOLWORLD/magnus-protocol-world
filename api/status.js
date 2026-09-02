export default function handler(req, res) {
  return res.status(200).json({
    project: "MAGNUSPROTOCOL.WORLD",
    engine: "DRACO CORRAL & MAGNUS - SALES AI",
    status: "ONLINE",
    rakuten: process.env.RAKUTEN_TOKEN
      ? "CONFIGURED"
      : "WAITING_CREDENTIALS"
  });
}
