import { MouseEventHandler } from 'react'
import { IMessageData } from '../Messages/interfaces'

export interface ILayoutProps {
  toggle: MouseEventHandler<HTMLButtonElement>
  avatar: any
  title: string
  fetchInit: Function
  fetchReadyEvent: Function
  setInitialized: Function
  messages: IMessage[]
  setMessages: Function
  loaderActive: boolean
  setLoaderActive: Function
}

export interface IMessage {
  id: string
  text: string
  shouldAnimate: boolean
  typeMessage: 'bot' | 'user'
}
