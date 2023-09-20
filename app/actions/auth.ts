import { apiLoginURL } from "../constants/api";
import { ILoginBody } from "../models/api";

export async function login(body: ILoginBody) {
    try {
       const res = await fetch(apiLoginURL, {
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