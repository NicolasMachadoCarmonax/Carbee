'use client';

import { useLayoutEffect } from 'react';

export default function Appointments() {
  useLayoutEffect(() => {
    // Get appointments
    // fetch('http://localhost:3000/api/appointments', {
    //   method: 'GET',
    //   credentials: 'include',
    // }).then((res) => {});

    fetch('http://localhost:3000/api/availability', {
      method: 'GET',
      credentials: 'include',
    }).then((res) => {});
  }, []);
  return <></>;
}
