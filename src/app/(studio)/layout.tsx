// Separate root layout for the Sanity Studio so it renders full-screen,
// without the storefront's Header/Footer/providers.
export const metadata = {
  title: "Sanity Studio",
};

export default function StudioRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
