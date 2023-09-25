import Image from 'next/image';
import styles from './appointment.module.css';
import assets from '@/app/assets/assets';

export function Appointment() {
  return (
    <div className={styles.appointment}>
      <div className={styles.photo_wrapper}>
        <Image
          className={styles.photo}
          src={assets.carWash}
          alt=""
          width={200}
          height={200}
        />
      </div>
      <div className={styles.info}>
        <span className={styles.title}>Car wash</span>
        <br />
        <span style={{ color: '#837C7C', fontWeight: '300' }}>
          tuesday, sep 26th
        </span>
        <br />
        <span style={{ color: '#837C7C', fontWeight: '300' }}>14:00 pm</span>
        <br />
        <div className={styles.status}>pending</div>
      </div>
    </div>
  );
}
