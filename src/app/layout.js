import '@/style/globals.css';

export const metadata = {
  title: 'Calculator',
  description: 'Basic Calculator App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
