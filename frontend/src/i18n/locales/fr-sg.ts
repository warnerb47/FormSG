import { frSG as pagination } from './components/pagination'
import { frSG as adminForm } from './features/admin-form'
import { frSG as app } from './features/app'
import { frSG as common } from './features/common'
import { frSG as landingPage } from './features/landing-page'
import { frSG as login } from './features/login'
import { frSG as publicForm } from './features/public-form'
import { frSG as workspace } from './features/workspace'
import { frSG as formValidation } from './utils/form-validation'
import { FallbackTranslation } from './types'

export const frSG: FallbackTranslation = {
  translation: {
    features: {
      adminForm,
      app,
      common,
      landingPage,
      login,
      publicForm,
      workspace,
    },
    utils: {
      formValidation,
    },
    components: {
      pagination,
    },
  },
}
