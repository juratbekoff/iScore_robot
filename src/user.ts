import { ChatId } from "node-telegram-bot-api"

export type User = {
  id:        ChatId,
  state:     number,

  reading:   number,
  speaking:  number,
  writing:   number,
  listening: number,
  result:    number
}