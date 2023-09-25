'use client';
import styles from './dashboard.module.css';
import Nav from '@/app/components/nav/nav';
import { authRoute } from '@/app/utils/authRoute';
import { useRouter } from 'next/navigation';
import { useEffect, useLayoutEffect, useState } from 'react';

export default function Dashboard() {
  const router = useRouter();

  const [authStatus, setAuthStatus] = useState(0);

  function goToLogin() {
    router.replace('/login');
  }

  function goToBook() {
    router.replace('/dashboard/book');
  }

  async function auth() {
    const status: any = await authRoute();
    setAuthStatus(status);
  }

  useEffect(() => {
    auth();
  }, []);

  if (!authStatus) {
    return (
      <div className={styles.home}>
        <div className={styles.loading}>
          <div className={styles.loader}>
            {' '}
          </div>
          <span>Loading...</span>
        </div>
      </div>
    );
  }

  if (authStatus === 200) {
    return (
      <div className={styles.home}>
        <Nav />
        <div className={styles.dashboard}>
          <div onClick={goToBook} className={styles.book}>
            <span>Book appointment</span>
          </div>
        </div>
      </div>
    );
  }

  if (authStatus == 500) {
    alert('There was an error with our services, please try again later.');
    goToLogin();
  }

  if (authStatus === 401) {
    alert('Authentication is required');
    goToLogin();
  }
}
