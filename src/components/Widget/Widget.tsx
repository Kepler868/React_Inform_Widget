import { useEffect, useState } from 'react'
import { FC } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import InfService from '../../services/InfService'
import {
  IChatRequestResponse,
  InitResponse,
} from '../../services/models/interfaces'
import Layout from '../Layout/Layout'
import Toggle from '../Toggle/Toggle'
import styles from './widget.module.scss'

const Widget: FC = (): JSX.Element => {
  const [containerActive, setContainerActive] = useState<boolean>(false)
  const [messages, setMessages] = useLocalStorage('messages', [])
  const [cuid, setCuid] = useLocalStorage('cuid', '')
  const [initialized, setInitialized] = useLocalStorage('initialized', false)
  const [loaderActive, setLoaderActive] = useState<boolean>(false)
  const toggle = (): void => {
    setContainerActive(!containerActive)
  }

  const fetchInit = async (): Promise<void> => {
    if (!cuid || !localStorage.getItem('cuid')) {
      try {
        const response = await InfService.init()
        const data = response.data as InitResponse
        localStorage.getItem('cuid') === data.result.cuid
          ? undefined
          : setCuid(data.result.cuid)
      } catch (error) {
        console.error(error)
      }
    }
  }

  const fetchReadyEvent = async (cuid: string) => {
    if (cuid && !initialized) {
      setLoaderActive(true)
      try {
        const response = await InfService.eventReady(cuid)
        const data = response.data as IChatRequestResponse
        setInitialized(true)
        setMessages((prev: any) => [
          ...prev,
          {
            text: data.result.text.value,
            typeMessage: 'bot',
            id: data.result.id,
            shouldAnimate: false,
          },
        ])
        localStorage.getItem('cuid') === data.result.cuid
          ? undefined
          : setCuid(data.result.cuid)
      } catch (error) {
        console.error(error)
      } finally {
        setLoaderActive(false)
      }
    }
  }

  useEffect(() => {
    fetchInit()
  }, [])

  useEffect(() => {
    fetchReadyEvent(cuid)
  }, [cuid])

  return (
    <div className={styles.widget}>
      {containerActive && (
        <Layout
          toggle={toggle}
          avatar={''}
          title={'Инф'}
          fetchInit={fetchInit}
          messages={messages}
          setMessages={setMessages}
          fetchReadyEvent={fetchReadyEvent}
          setInitialized={setInitialized}
          loaderActive={loaderActive}
          setLoaderActive={setLoaderActive}
        />
      )}
      <Toggle toggle={toggle} containerActive={containerActive} />
    </div>
  )
}

export default Widget
