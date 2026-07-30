import "./globals.css";

export const metadata = {
  title: "Nishat Yeasmin | Portfolio",
  description: "Software Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}