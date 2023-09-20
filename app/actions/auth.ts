import { apiLoginURL } from '../constants/api';
import { ILoginBody } from '../models/api';
import axios from 'axios';
export async function login(body: ILoginBody) {
  try {
    const res = await axios.post(apiLoginURL, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return res.data;
  } catch (error) {
    throw error;
  }
}
