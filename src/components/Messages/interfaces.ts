import { IMessage } from '../Layout/interfaces';

export interface IMessageData {
  messageData: {
    id: string
    text: string
    typeMessage: string
    shouldAnimate: boolean
  }
}

export interface IMessagesListProps {
    messagesData: IMessage[]
    setShouldAnimate: Function;
}