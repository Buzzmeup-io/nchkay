import { NextRequest, NextResponse } from "next/server";

const PASSWORD = "foryourreview";
const COOKIE_NAME = "nchkay_auth";
const LOGIN_PATH = "/login";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === LOGIN_PATH) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  const auth = request.cookies.get(COOKIE_NAME);
  if (auth?.value === PASSWORD) {
    return NextResponse.next();
  }

  const loginUrl = new URL(LOGIN_PATH, request.url);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|logo-nchkay|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
