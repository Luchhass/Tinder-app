import "./globals.css";

export const metadata = {
  title: "Tinder App",
  description: "Tinder App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
