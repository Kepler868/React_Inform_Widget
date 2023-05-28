import { FC } from 'react'
import { BsRobot } from 'react-icons/bs'
import styles from './header.module.scss'
import { IHeaderProps } from './interface'

const Header: FC<IHeaderProps> = ({ avatar, title, toggle }): JSX.Element => {
  return (
    <div className={styles.header}>
      <span className={styles.header_img}>
        <BsRobot size="35px" color="white" />
      </span>
      <p className={styles.header_text}>{title}</p>
      <button onClick={toggle} className={styles.header_button}>
        +
      </button>
    </div>
  )
}

export default Header
