'use client';

import { carbeeAvailabilityURL } from '@/app/constants/api';
import { useLayoutEffect } from 'react';
import styles from './dashboard.module.css';
import Nav from '@/app/components/nav/nav';
import { Appointment } from '@/app/components/appointment/appointment';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();

  function goToBook() {
    router.replace('/dashboard/book');
  }
  useLayoutEffect(() => {
    // Get appointments
    // fetch('http://localhost:3000/api/appointments', {
    //   method: 'GET',
    //   credentials: 'include',
    // }).then((res) => {});
    // Get availability
    // fetch('http://localhost:3000/api/availability', {
    //   method: 'GET',
    //   credentials: 'include',
    // }).then((res) => {console.log(res)});
  }, []);
  return (
    <div className={styles.home}>
      <Nav />
      <div className={styles.dashboard}>
        <div className={styles.header}>
          <h2>Appointments</h2>
          <div onClick={goToBook} className={styles.book}>
            <span>Book appointment</span>
          </div>
        </div>
        <div className={styles.appointments}>
          <Appointment />
          <Appointment />
          <Appointment />
          <Appointment />
          <Appointment />
        </div>
      </div>
    </div>
  );
}
