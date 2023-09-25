"use client"

import Nav from '@/app/components/nav/nav';
import styles from './book.module.css';
import Image from 'next/image';
import assets from '@/app/assets/assets';
import { useRouter } from 'next/navigation';

export default function Book() {
  const router = useRouter();
  function backToDashboard() {
    router.replace('/dashboard');
  }
  return (
    <div className={styles.home}>
      <Nav />
      <div className={styles.dashboard}>
        <div className={styles.header}>
          <h2>Book appointment</h2>
        </div>
        <form className={styles.form}>
          <select placeholder="Service">
            <option disabled>Service</option>
            <option>Car wash</option>
            <option>Car audit</option>
            <option>Emergency tire replacement</option>
          </select>
          <input placeholder="Date" type="date" />
          <select placeholder="Hour">
          <option disabled>Hour</option>
          <option>12:00 am</option>
          </select>
          <button type="submit">Book appointment</button>
        </form>
      </div>
    </div>
  );
}
