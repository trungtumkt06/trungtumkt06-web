import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  const { name, phone, productName, price } = data;

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  const message = `
🔔 **ĐƠN HÀNG MỚI TỪ WEBSITE**
----------------------------
📦 Sản phẩm: ${productName}
💰 Giá: ${price}
👤 Khách hàng: ${name}
📞 Số điện thoại: ${phone}
----------------------------
🚀 Trung Tự ơi, check Zalo gọi khách ngay nhé!
  `;

  const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
    await fetch(telegramUrl, {
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
    return NextResponse.json({ success: false }, { status: 500 });
  }
}