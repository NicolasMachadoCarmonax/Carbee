'use client';

import { useLayoutEffect } from 'react';

export default function Appointments() {
  useLayoutEffect(() => {
    fetch('http://localhost:3000/api/appointments', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }).then((res) => {});
  }, []);
  return <></>;
}
