import { AxiosResponse } from 'axios'
import { $api, $readyEuid, $uuid } from '../api/api'
import { IChatRequestResponse, InitResponse } from './models/interfaces'

export default class InfService {
  static async init(
    cuid: string | undefined = undefined
  ): Promise<AxiosResponse<InitResponse>> {
    if (cuid === undefined) {
      return $api.post<InitResponse>('/Chat.init', { uuid: $uuid })
    } else {
      return $api.post<InitResponse>('/Chat.init', { uuid: $uuid, cuid })
    }
  }

  static async request({
    cuid,
    text,
  }: {
    cuid: string
    text: string | undefined
  }): Promise<AxiosResponse<IChatRequestResponse>> {
    {
      return $api.post<IChatRequestResponse>('/Chat.request', { cuid, text })
    }
  }

  static async eventReady(
    cuid: string
  ): Promise<AxiosResponse<IChatRequestResponse>> {
    {
      return $api.post<IChatRequestResponse>('/Chat.event', {
        cuid,
        euid: $readyEuid,
      })
    }
  }
}
