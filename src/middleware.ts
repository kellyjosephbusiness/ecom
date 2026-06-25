import { withAuth } from "next-auth/middleware";

// Protect authenticated-only routes. Unauthenticated users are redirected to
// /signin (with a callbackUrl back to the page they wanted).
export default withAuth({
  pages: { signIn: "/signin" },
});

export const config = {
  matcher: ["/my-account/:path*"],
};
