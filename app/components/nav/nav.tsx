"use client"

import styles from './nav.module.css';
import assets from '@/app/assets/assets';
import { NavElement } from '../navElement/navElement';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Nav() {
  const router = useRouter();
  async function logout() {
   const res = await fetch('http://localhost:3000/api/logout')
   console.log('server response: ', res)
    router.replace('/login');
  }
  return (
    <div className={styles.nav}>
      <Image src={assets.logo} alt="" width={40} height={30} />
      <div className={styles.elements}>
        <NavElement icon={assets.dashboardIcon} />
      </div>
      <NavElement
        icon={assets.logout}
        style={{ gridRow: '3/4' }}
        onClick={logout}
      />
    </div>
  );
}
