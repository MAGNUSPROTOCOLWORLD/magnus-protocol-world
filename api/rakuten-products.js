export default async function handler(req, res) {
  try {
    const token = process.env.RAKUTEN_TOKEN;

    if (!token) {
      return res.status(503).json({
        ok: false,
        status: "WAITING_CREDENTIALS",
        message: "Rakuten token not configured."
      });
    }

    const keyword =
      typeof req.query?.keyword === "string" && req.query.keyword.trim()
        ? req.query.keyword.trim()
        : "technology";

    const url =
      "https://api.linksynergy.com/productsearch/1.0" +
      "?keyword=" + encodeURIComponent(keyword) +
      "&language=en_US" +
      "&max=20";

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/xml"
      }
    });

    const body = await response.text();

    if (!response.ok) {
      return res.status(response.status).json({
        ok: false,
        source: "rakuten",
        status: response.status,
        message: "Rakuten Product Search request failed."
      });
    }

    res.setHeader("Content-Type", "application/xml; charset=utf-8");
    return res.status(200).send(body);

  } catch (error) {
    return res.status(500).json({
      ok: false,
      source: "rakuten",
      message: "Internal API error."
    });
  }
}
