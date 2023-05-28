import axios from 'axios'

export const API_URL = 'https://biz.nanosemantics.ru/api/2.1/json'
export const $uuid = '772c9859-4dd3-4a0d-b87d-d76b9f43cfa4'
export const $readyEuid = '00b2fcbe-f27f-437b-a0d5-91072d840ed3'

export const $api = axios.create({
  baseURL: API_URL,
})
