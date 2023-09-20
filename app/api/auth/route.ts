import { externalAPILoginURL } from '@/app/constants/api';
import { ILoginBody } from '@/app/models/api';

export async function POST(request: Request) {
  const body: ILoginBody = await request.json();
  const res = await fetch(externalAPILoginURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const apiResponse = await res.json();
  return new Response(JSON.stringify(apiResponse));
}
