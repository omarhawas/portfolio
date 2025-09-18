export async function GET() {
    const urls = [
      "/", "/projects", "/resume", "/contact",
      "/projects/funeral-crm", "/projects/soccer-game", "/projects/yt-extension"
    ];
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map(u => `<url><loc>https://your-domain.com${u}</loc></url>`).join("\n")}
  </urlset>`;
    return new Response(xml, { headers: { "Content-Type": "application/xml" } });
  }
  