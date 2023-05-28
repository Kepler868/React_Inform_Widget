import { motion } from 'framer-motion'
import { FC } from 'react'
import { IMessage } from '../Layout/interfaces'
import BotMessage from './BotMessage'
import { IMessagesListProps } from './interfaces'
import UserMessage from './UserMessage'

const MessagesList: FC<IMessagesListProps> = ({
  messagesData,
  setShouldAnimate,
}) => {
  return (
    <div>
      {messagesData.map((message: IMessage) => {
        if (message.typeMessage === 'bot') {
          return (
            <motion.div
              layout
              key={message.id}
              initial={message.shouldAnimate ? { opacity: 0 } : { opacity: 1 }}
              animate={message.shouldAnimate ? { opacity: 1 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
              onAnimationComplete={() => setShouldAnimate(message.id)}
            >
              <BotMessage messageData={message} />
            </motion.div>
          )
        } else {
          return (
            <motion.div
              layout
              key={message.id}
              initial={message.shouldAnimate ? { opacity: 0 } : { opacity: 1 }}
              animate={message.shouldAnimate ? { opacity: 1 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
              onAnimationComplete={() => setShouldAnimate(message.id)}
            >
              <UserMessage messageData={message} />
            </motion.div>
          )
        }
      })}
    </div>
  )
}

export default MessagesList
