export interface IEvent {
  [key: string]: {
    enabled: boolean
    timeout?: number
    maxcount?: number
    resetTimeout?: number
    initText?: string
    anchorId?: string
    animation?: string
  }
}

export interface InitResponse {
  result: {
    cuid: string
    text: {
      delay: number
    }
    inf: {
      name: string
    }
    events: IEvent[]
    referer: null
    token: string
    root: string
  }
  id: string
}

export interface IChatRequestResponse {
  result: {
    text: {
      value: string
      delay?: number
      status?: number
      showRate?: boolean
    }
    animation?: null | any
    navigation?: null | any
    token?: null | any
    showExpSys?: string
    rubric?: string
    cuid?: string
    context?: {
      sys_root_id: string
    }
      id?: string;
  }
  id: string
}


