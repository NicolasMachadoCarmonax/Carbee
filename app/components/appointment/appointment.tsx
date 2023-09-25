import styles from './appointment.module.css';

export function Appointment() {
    return <div className={styles.appointment}>
        <span>Service</span><br/>
        <span>Date</span><br/>
        <span>Hour</span><br/>
        <span>Location</span><br/>
    </div>
}