import { authURL } from "../constants/api";

export async function authRoute() {
  try {
    const res = await fetch(authURL, { method: 'GET' });
    return res.status
  } catch(error) {
    return 500
  }
}