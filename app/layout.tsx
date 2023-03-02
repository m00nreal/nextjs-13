import './globals.css';

export const metadata = {
  title: 'Todos',
  description: 'Creado con NextJS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
