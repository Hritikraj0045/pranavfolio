import "./globals.css";

export const metadata = {
  title: "Pranav Sonar | Business Analyst & Product Professional",
  description:
    "Portfolio of Pranav Sonar — Business Analyst and Product Professional across FinTech, Wealth Management and Capital Markets."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
