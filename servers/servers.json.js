export async function onRequest(context) {
  // Đối tượng JSON chứa dữ liệu mẫu của bạn
  const serverListData = {
    "format": "mu-directory-v1",
    "payload": "ATt1kcW3F+D8243q30wC1OyR839QMvLyHzKNkCO0fTTpotAcAIcXej/8ZKPT6HfhSmg5Lju3/H3B96YfNsI/emsHo/8xpx1/E18N1bRPzVjRIwQ1kW6XJdqcWLztkGBniDJkq+y7bABESIGSfN7KEoNNS/H9JYWWrfvemltMgQNHeS8t/t7W1TlLVqCfYH9IsDjb82wcSLIuasxdqr8Z7OuFcRltXm/WTYqinTqDLGoruJ8ymCxIf8RhD608qxY6Dw==",
    "mac": "q6en3Da5/xvqNn2eRscuZoDWaMRZpgM23gpnliHsAn4="
  };

  // Trả về phản hồi JSON chuẩn cho Client/Game đọc
  return new Response(JSON.stringify(serverListData), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*", // Cho phép mọi nguồn kết nối (CORS)
      "Cache-Control": "no-cache" // Không lưu cache để tránh client nhận dữ liệu cũ
    },
  });
}