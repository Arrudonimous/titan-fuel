import "./globals.css";

export const metadata = {
  title: "Titan Fuel",
  description: "Titan Fuel, your best suplement store",
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
