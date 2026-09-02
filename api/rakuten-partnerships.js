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

    const response = await fetch(
      "https://api.linksynergy.com/v1/partnerships?limit=20",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json"
        }
      }
    );

    const text = await response.text();

    if (!response.ok) {
      return res.status(response.status).json({
        ok: false,
        source: "rakuten",
        status: response.status,
        message: "Rakuten Partnerships request failed."
      });
    }

    let data;

    try {
      data = JSON.parse(text);
    } catch {
      data = text;
    }

    return res.status(200).json({
      ok: true,
      source: "rakuten",
      data
    });

  } catch {
    return res.status(500).json({
      ok: false,
      source: "rakuten",
      message: "Internal API error."
    });
  }
}
