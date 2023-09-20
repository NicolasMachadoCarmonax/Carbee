import { login } from "@/app/actions/auth";
  
export default async function Login() {
const res = await login({username: 'candidate@curbee.com', password: 'password'})
console.log('server component response: ', res)
    return <></>
}