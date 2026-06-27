import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message, facility, source } = await req.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const lead = await prisma.lead.create({
      data: {
        name: String(name),
        email: String(email),
        phone: phone ? String(phone) : null,
        message: message ? String(message) : null,
        facility: facility ? String(facility) : null,
        source: source ? String(source) : null,
      },
    });

    return NextResponse.json({ id: lead.id }, { status: 201 });
  } catch (err) {
    console.error("lead error", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
