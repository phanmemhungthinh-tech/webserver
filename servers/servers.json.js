export async function onRequest(context) {
  // Dữ liệu JSON mẫu về danh sách máy chủ của bạn
  const serverData = {
    status: "success",
    timestamp: new Date().toISOString(),
    servers: [
      { id: 1, name: "Asia-East Server", ip: "192.168.1.10", online: true },
      { id: 2, name: "US-West Server", ip: "192.168.1.20", online: false }
    ]
  };

  // Trả về dữ liệu kèm theo Header định dạng JSON
  return new Response(JSON.stringify(serverData), {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*" // Cho phép gọi API từ mọi Domain (CORS)
    },
  });
}