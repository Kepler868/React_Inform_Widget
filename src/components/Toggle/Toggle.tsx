import { motion } from 'framer-motion'
import { FC } from 'react'
import { FaRegComment } from 'react-icons/fa'
import styles from './toggle.module.scss'
import cn from 'classNames'
import { IToggleProps } from './interfaces'

const Toggle: FC<IToggleProps> = ({ toggle, containerActive }): JSX.Element => {

  return (
    <motion.button
      onClick={toggle}
      className={cn(styles.toggle)}
      whileHover={{ scale: 1.2 }}
    >
      {containerActive ? (
        <p className={styles.toggle_close}>+</p>
      ) : (
        <FaRegComment
          className={styles.toggle_open}
          size="25px"
          color="white"
        />
      )}
    </motion.button>
  )
}

export default Toggle
