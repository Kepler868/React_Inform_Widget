import { motion } from 'framer-motion'
import React, { FC } from 'react'
import { IMessageData } from './interfaces'
import styles from './message.module.scss'
const UserMessage: FC<IMessageData> = ({ messageData }): JSX.Element => {
  return (
    <div className={styles.user}>
      <div className={styles.user_message}>{messageData.text}</div>
    </div>
  )
}

export default UserMessage
