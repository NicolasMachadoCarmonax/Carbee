import styles from './navElement.module.css';
import Image from 'next/image';

interface INavElement {
  icon: any;
  style?: any;
  onClick?: any;
}

export function NavElement(props: INavElement) {
  const { icon, style, onClick } = props;
  return (
    <div onClick={onClick} className={styles.element} style={style}>
      <Image src={icon} alt="" width={40} height={45} />
    </div>
  );
}
