export async function authRoute() {
  try {
    const res = await fetch('http://localhost:3000/api/auth', { method: 'GET' });
    return res.status
  } catch(error) {
    return error
  }
}