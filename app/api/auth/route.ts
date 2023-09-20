import { externalAPILoginURL } from "@/app/constants/api";
import { ILoginBody } from "@/app/models/api";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body: ILoginBody = await request.json();
    const res = await fetch(externalAPILoginURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    console.log('API response:', await res.json());
    return NextResponse.json(res.json())
  }
  