import { NextRequest, NextResponse } from "next/server";

const PASSWORD = "foryourreview";
const COOKIE_NAME = "nchkay_auth";

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (body.password === PASSWORD) {
    const response = NextResponse.json({ success: true });
    response.cookies.set(COOKIE_NAME, PASSWORD, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
    return response;
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
