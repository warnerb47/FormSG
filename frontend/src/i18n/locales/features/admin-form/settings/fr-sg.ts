import { frSG as emailNotifications } from './email-notifications'
import { frSG as general } from './general'
import { frSG as webhooks } from './webhooks'

export const frSG = {
  general,
  singpass: {
    title: 'Singpass', // Kept as original (proper noun)
  },
  emailNotifications,
  webhooks,
  payments: {
    title: 'Paiements',
  },
}
