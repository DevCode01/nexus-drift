# Nexus Drift

**TypeScript** · **v0.1.0**

_RESTful item management API with JSON storage_

---

## Features

- GET /api/items and POST /api/items
- Health check endpoint
- Type-safe with strict TypeScript

## Installation

```bash
git clone https://github.com/DevCode01/nexus-drift.git
cd nexus-drift
```

## Usage

```bash
npm start
```

## How it works

RESTful in-memory items API built on Node's `http` module with strict TypeScript types. Items live in memory for the server's lifetime. Build with `npm run build`, start with `npm start`.

## Options

- `PORT` - environment variable, listening port (default 3000)
- `GET /api/items` - list all items
- `POST /api/items` - create an item (JSON body with `name`)
- `GET /health` - JSON `{"status":"ok"}`

## Example

```bash
$ npm start
API listening on http://localhost:3000

$ curl http://localhost:3000/api/items
{"count":0,"items":[]}
```

## Testing

```bash
bash tests/run.sh
```

Runs the build/syntax check (interactive/random/networked output isn't asserted exactly).

## License

MIT
