import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "سبولت - أفلام ومسلسلات وبث مباشر",
  description: "شاهد أحدث الأفلام والمسلسلات وبثوث المباريات المباشرة بجودة عالية",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="min-h-screen bg-[#0a0a0f] text-white">
        <Navbar />
        <main>{children}</main>
        <footer className="mt-16 border-t border-gray-800 py-8 px-6 text-center text-gray-500 text-sm">
          <p>© 2025 سبولت - جميع الحقوق محفوظة</p>
        </footer>
      </body>
    </html>
  );
}
