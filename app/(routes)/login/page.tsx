import { ILoginBody } from "@/app/models/api";

 async function authenticate(body: ILoginBody) {
    try {
       const res = await fetch('https://backend.billowing-truth-38ad.workers.dev/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      return res.json()
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  }
  
export default async function Login() {
const res = await authenticate({username: 'candidate@curbee.com', password: 'password'})
console.log('server component response: ', res)
    return <></>
}