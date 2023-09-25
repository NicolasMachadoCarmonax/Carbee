// use client declaration to act from browser
import SignIn from '@/app/components/signIn/signIn';
// imports:
import styles from './login.module.css';
import Image from 'next/image';
import assets from '@/app/assets/assets';
// Login page
export default function Login() {
  // Retrun login JSX
  return (
    <div className={styles.login}>
      <div className={styles.loginLeft}>
        <Image src={assets.carbee} alt="" width={300} height={100} />
        <SignIn />
      </div>
      <div className={styles.login_background}></div>
    </div>
  );
}
