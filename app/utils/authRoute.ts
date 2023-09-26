import { authURL } from "../constants/api";

export async function authRoute() {
  try {
    const res = await fetch(authURL, { method: 'GET' });
    alert(res.status)
    return res.status
  } catch(error) {
    return 500
  }
}