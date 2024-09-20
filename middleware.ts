// Attempt using a general middleware import if specific middleware is not available
import { clerkClient } from "@clerk/nextjs/server"; // Import Clerk server client

export default function middleware(req, ev) {
  return clerkClient.auth(req); // Replace with Clerk's server-side auth check
}

export const config = {
  matcher: [
    // Ensure your matcher setup excludes internal and static routes
    "/((?!.*\\..*|_next|api/auth).*)",
  ],
};
