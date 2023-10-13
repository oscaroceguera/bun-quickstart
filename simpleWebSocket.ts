const server = Bun.serve<{ authToken: string }>({
  fetch(req, serve) {
    const success = server.upgrade(req);
    if (success) {
      return undefined;
    }

    return new Response("Hola mundo!");
  },
  websocket: {
    async message(ws, message) {
      console.log(`Received ${message}`);
      ws.send(`you said: ${message}`);
    },
  },
});

console.log(`Listening on ${server.hostname}:${server.port}`);
