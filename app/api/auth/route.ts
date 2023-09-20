import { ILoginBody } from "@/app/models/api";

export async function POST(request: Request) {
    const body: ILoginBody = await request.json();
    const res = await fetch("https://backend.billowing-truth-38ad.workers.dev", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    console.log('API response:', await res.json());
  }
  