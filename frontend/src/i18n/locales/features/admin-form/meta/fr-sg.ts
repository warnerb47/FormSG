import { FormResponseMode } from '~shared/types'

export const frSG = {
  prettyLastModified: 'Modifié {prettyLastModified}',
  relativeDateFormat: {
    sameDay: "[aujourd'hui,] D MMM HH:mm", // aujourd'hui, 16 juin 9:30
    nextDay: '[demain,] D MMM HH:mm', // demain, 16 juin 9:30
    lastDay: '[hier,] D MMM HH:mm', // hier, 16 juin 9:30
    nextWeek: 'ddd, D MMM YYYY HH:mm', // mar, 17 oct 2021 9:30
    lastWeek: 'ddd, D MMM YYYY HH:mm', // mar, 17 oct 2021 9:30
    sameElse: 'D MMM YYYY HH:mm', // 6 oct 2021 9:30
  },
  responseModeText: {
    [FormResponseMode.Multirespondent]: 'Formulaire multi-répondants',
    [FormResponseMode.Email]: 'Mode email',
    [FormResponseMode.Encrypt]: 'Mode stockage',
  },
}
