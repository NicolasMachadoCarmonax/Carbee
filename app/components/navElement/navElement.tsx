import styles from './navElement.module.css';
import Image from 'next/image';

interface INavElement {
  icon: any;
  text: string;
  style?: any;
  onClick?: any;
}

export function NavElement(props: INavElement) {
  const { icon, text, style, onClick } = props;
  return (
    <div onClick={onClick} className={styles.element} style={style}>
      <Image src={icon} alt="" width={50} height={50} />
      <span>{text}</span>
    </div>
  );
}
