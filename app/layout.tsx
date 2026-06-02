import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "윤가영 | Education + Brand + UX",
  description:
    "교육공학, 온라인 러닝, 교사교육, AI 윤리를 연결하는 윤가영 교수의 포트폴리오입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
