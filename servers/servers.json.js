export default {
  async fetch(request, env, ctx) {
    return new Response(JSON.stringify({ status: "ok", message: "Server is running" }), {
      headers: { "content-type": "application/json" },
    });
  },
};