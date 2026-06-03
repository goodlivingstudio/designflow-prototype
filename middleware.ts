import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COOKIE = "df_auth";
const UNLOCK = "/unlock";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Always allow the unlock page and its API route
  if (pathname.startsWith(UNLOCK) || pathname.startsWith("/api/unlock")) {
    return NextResponse.next();
  }

  const password = process.env.PROTOTYPE_PASSWORD;
  // If no password is set, allow all traffic (dev mode)
  if (!password) return NextResponse.next();

  const cookie = request.cookies.get(COOKIE);
  if (cookie?.value === password) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = UNLOCK;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon\\.ico).*)"],
};
