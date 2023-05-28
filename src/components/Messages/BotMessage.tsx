import { FC } from 'react'
import { BsRobot } from 'react-icons/bs'
import { IMessageData } from './interfaces'
import styles from './message.module.scss'

const BotMessage: FC<IMessageData> = ({ messageData }):JSX.Element => {
  const createMarkup = (html: string) => {
    return { __html: html }
  }
  const formattedData = createMarkup(messageData.text)

  return (
    <div className={styles.bot}>
      <BsRobot className={styles.bot_avatar} size="20px" color="#0c6dc9" />
      <div
        className={styles.bot_message}
        dangerouslySetInnerHTML={formattedData}
      ></div>
    </div>
  )
}

export default BotMessage
