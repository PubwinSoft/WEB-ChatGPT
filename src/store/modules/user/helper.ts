import { ss } from '@/utils/storage'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
  gptAvatar?: string
  pay?: boolean
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://weavatar.com/avatar/',
      name: 'Loading',
      description: 'Star on <a href="https://github.com/HaoZi-Team/chatgpt-web" class="text-blue-500" target="_blank" >Github</a>',
      gptAvatar: '',
      pay: false,
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
