import { REASONS_TO_QUIT_V2 } from './reasons'

export const HOST = 'https://shouldideploy.today'

export const getRandom = function () {
  return REASONS_TO_QUIT_V2[
    Math.floor(Math.random() * REASONS_TO_QUIT_V2.length)
  ]
}
