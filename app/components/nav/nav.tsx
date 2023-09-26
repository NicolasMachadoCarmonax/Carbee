'use client';

import styles from './nav.module.css';
import assets from '@/app/assets/assets';
import { NavElement } from '../navElement/navElement';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { logoutURL } from '@/app/constants/api';

export default function Nav() {
  const router = useRouter();
  async function logout() {
    await fetch(logoutURL, { method: 'GET' });
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
