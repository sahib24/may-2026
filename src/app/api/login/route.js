import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();

  const { email, password } = body;

  if (email === "admin@gmail.com" && password === "123456") {
    return NextResponse.json({
      success: true,
      token: "fake-token-123",
      user: {
        name: "Sahib Ahmed",
        email: "admin@gmail.com",
      },
    });
  }

  return NextResponse.json(
    {
      success: false,
      message: "Invalid Email or Password",
    },
    {
      status: 401,
    },
  );
}
