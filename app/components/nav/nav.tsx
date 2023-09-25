"use client"

import styles from './nav.module.css';
import assets from '@/app/assets/assets';
import { NavElement } from '../navElement/navElement';
import { useRouter } from 'next/navigation';

export default function Nav() {
  const router = useRouter();
  function logout() {
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    router.replace('/login');
  }
  return (
    <div className={styles.nav}>
      <div className={styles.elements}>
        <NavElement icon={assets.dashboardIcon} text="Dashboard" />
      </div>
      <NavElement
        icon={assets.logout}
        text="Log Out"
        style={{ gridRow: '3/4' }}
        onClick={logout}
      />
    </div>
  );
}
