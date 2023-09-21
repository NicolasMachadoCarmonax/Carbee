// use client declaration to act from browser
'use client';

// imports:
import { useLayoutEffect, useState } from 'react';

// Login page
export default function Login() {
  const [credentials, setCredentials] = useState({username: "candidate@curbee.com", password: "password"})
  // Call login server route function
  useLayoutEffect(()=>{
    fetch('http://localhost:3000/api/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  }).then((res) => {});
  },[])
  // Retrun login JSX
  return <></>;
}
