import { AnimatePresence, motion } from 'framer-motion'
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import Header from '../Header/Header'
import MessagesList from '../Messages/MessagesList'
import styles from './layout.module.scss'
import { BsFillSendFill } from 'react-icons/bs'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import InfService from '../../services/InfService'
import uuid from 'react-uuid'
import { FC } from 'react'
import { ILayoutProps, IMessage } from './interfaces'
import { IChatRequestResponse } from '../../services/models/interfaces'
import Loader from '../Loader/Loader'

const Layout: FC<ILayoutProps> = ({
  toggle,
  avatar,
  title,
  fetchInit,
  fetchReadyEvent,
  setInitialized,
  messages,
  setMessages,
  loaderActive,
  setLoaderActive,
}): JSX.Element => {
  const [messageInput, setMessageInput] = useState<string>('')
  const [cuid, setCuid] = useLocalStorage('cuid', '')
  const [messageKey, setMessageKey] = useState<string>('key')
  const messagesListRef = useRef<HTMLDivElement | null>(null)

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && messageInput.trim()) {
      handleClick()
    }
  }

  const handleClick = async (): Promise<void> => {
    if (cuid && messageInput.trim() != '') {
      setLoaderActive(true)
      setMessages((prev: IMessage[]) => [
        ...prev,
        {
          text: messageInput.trim(),
          typeMessage: 'user',
          id: uuid(),
          shouldAnimate: true,
        },
      ])
      setMessageKey(uuid())
      setMessageInput('')
      try {
        const response = await InfService.request({
          cuid,
          text: messageInput.trim(),
        })
        const data = response.data as IChatRequestResponse
        setMessages((prev: IMessage[]) => [
          ...prev,
          {
            text: data.result.text.value,
            typeMessage: 'bot',
            id: uuid(),
            shouldAnimate: true,
          },
        ])
        setMessageKey(uuid())

        localStorage.getItem('cuid') === data.result.cuid
          ? undefined
          : setCuid(data.result.cuid)
      } catch (error) {
        console.error(error)
      } finally {
        setLoaderActive(false)
      }
    } else {
      setMessageInput('')
    }
  }

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessageInput(e.target.value)
  }

  const handleBlur = () => {
    messageInput.trim() === '' && setMessageInput('')
  }

  const handleDeleteChat = async (): Promise<void> => {
    localStorage.clear()
    await setMessages([])
    await setInitialized(false)
    await fetchInit()
    await fetchReadyEvent(cuid)
  }

  useEffect(() => {
    if (messagesListRef.current) {
      messagesListRef.current.scrollTop = messagesListRef.current.scrollHeight
    }
  }, [messages])

  const setShouldAnimate = (messageId: string) => {
    if (localStorage.getItem('cuid')) {
      setMessages(
        messages.map((message: IMessage) => {
          if (message.id === messageId) {
            return { ...message, shouldAnimate: false }
          }
          return message
        })
      )
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        className={styles.layout}
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Header avatar={avatar} title={title} toggle={toggle} />

        <div
          key={messageKey}
          ref={messagesListRef}
          className={styles.layout_messagesList}
        >
          <AnimatePresence>
            <MessagesList
              messagesData={messages}
              setShouldAnimate={setShouldAnimate}
            />
            {loaderActive && <Loader />}
          </AnimatePresence>
        </div>
        <div onKeyDown={handleKeyPress} className={styles.layout_sendMessage}>
          <textarea
            placeholder="Начните писать..."
            value={messageInput}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <BsFillSendFill
            onClick={handleClick}
            className={
              messageInput.trim() !== '' ? styles.icon__visible : styles.icon
            }
            color="#1890ff"
            size="26px"
          />
        </div>
        {messages.length > 1 && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className={styles.deleting}
          >
            <button
              onClick={handleDeleteChat}
              className={styles.deleting_button}
            >
              Очистить историю
            </button>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}

export default Layout
