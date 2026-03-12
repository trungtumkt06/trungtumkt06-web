import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    const message = `
📩 **TIN NHẮN LIÊN HỆ MỚI**
----------------------------
👤 Khách hàng: ${data.name}
📧 Liên hệ: ${data.email}
📌 Chủ đề: ${data.subject}
💬 Nội dung: ${data.message}
----------------------------
🚀 Check mail hoặc gọi khách ngay nhé Trung Tự!
    `;

    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Lỗi gửi tin nhắn" }, { status: 500 });
  }
}