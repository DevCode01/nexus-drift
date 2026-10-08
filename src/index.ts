import { createServer, IncomingMessage, ServerResponse } from "http";

const PORT = Number(process.env.PORT) || 3000;
const items: { id: number; name: string }[] = [];

function send(res: ServerResponse, code: number, body: unknown) {
  res.writeHead(code, { "Content-Type": "application/json" });
  res.end(JSON.stringify(body));
}

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  const url = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);

  if (req.method === "GET" && url.pathname === "/api/items") {
    send(res, 200, { count: items.length, items });
    return;
  }
  if (req.method === "POST" && url.pathname === "/api/items") {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
      try {
        const parsed = JSON.parse(body);
        if (!parsed.name || typeof parsed.name !== "string") {
          send(res, 400, { error: "name is required" });
          return;
        }
        const item = { id: items.length + 1, name: parsed.name };
        items.push(item);
        send(res, 201, item);
      } catch {
        send(res, 400, { error: "invalid JSON" });
      }
    });
    return;
  }
  if (req.method === "GET" && url.pathname === "/health") {
    send(res, 200, { status: "ok" });
    return;
  }
  send(res, 404, { error: "not found" });
});

server.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
