"use client"
import { useRouter } from "next/navigation";
import styles from './page.module.css';

export default function Home() {
  const router = useRouter();
  router.replace('/dashboard');

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
