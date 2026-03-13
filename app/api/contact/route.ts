import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // 1. Nhận dữ liệu gửi lên từ bất kỳ form nào
    const data = await request.json();
    
    // 2. Kéo mã bí mật từ file .env.local
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    // Kiểm tra an toàn: Báo lỗi nếu quên chưa nhập mã vào file .env
    if (!botToken || !chatId) {
      console.error("⚠️ Thiếu TELEGRAM_BOT_TOKEN hoặc TELEGRAM_CHAT_ID");
      return NextResponse.json({ error: "Lỗi cấu hình Server" }, { status: 500 });
    }

    // 3. Xử lý dữ liệu thông minh (Hỗ trợ cả Form Liên hệ và Form Dịch vụ)
    const name = data.name || 'Khách ẩn danh';
    const contactInfo = data.phone || data.email || 'Không để lại thông tin';
    const subject = data.service || data.subject || 'Đăng ký tư vấn';
    const messageText = data.message || 'Không có lời nhắn';

    // 4. Soạn khung tin nhắn Telegram chuẩn Markdown của bạn
    const message = `
📩 **TIN NHẮN LIÊN HỆ MỚI**
----------------------------
👤 **Khách hàng:** ${name}
📞 **Liên hệ:** ${contactInfo}
📌 **Chủ đề:** ${subject}
💬 **Nội dung:** ${messageText}
----------------------------
🚀 Check thông tin và gọi khách ngay nhé Trung Tự!
    `;

    // 5. Bắn thông tin sang máy chủ Telegram
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown', // Cực kỳ quan trọng để chữ in đậm (**) hoạt động
      }),
    });

    // Nếu Telegram báo lỗi
    if (!response.ok) {
      console.error("Telegram API Error:", await response.text());
      return NextResponse.json({ error: "Lỗi từ máy chủ Telegram" }, { status: 500 });
    }

    // Nếu gửi thành công rực rỡ
    return NextResponse.json({ success: true, message: "Gửi thành công!" });
    
  } catch (error) {
    console.error("Lỗi hệ thống:", error);
    return NextResponse.json({ error: "Lỗi gửi tin nhắn" }, { status: 500 });
  }
}