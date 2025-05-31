import { Login } from '.'

export const frSG: Login = {
  LoginPage: {
    slogan:
      'Créez des formulaires gouvernementaux sécurisés en quelques minutes',
    banner:
      'Vous pouvez maintenant collecter des paiements directement sur votre formulaire !',
    expiredSgIdSession:
      'Votre session de connexion sgID a expiré. Veuillez vous reconnecter.',
  },
  SelectProfilePage: {
    accountSelection: 'Choisissez un compte pour continuer sur FormSG',
    manualLogin:
      'Ou, connectez-vous manuellement en utilisant votre email et OTP',
    noWorkEmailHeader:
      "La connexion via Singpass n'est pas encore disponible pour vous",
    noWorkEmailBody:
      'Elle est progressivement mise à disposition des agences. En attendant, veuillez vous connecter en utilisant votre adresse email.',
    noWorkEmailCta: 'Retour à la connexion',
    invalidWorkEmailHeader: "Vous n'avez pas accès à ce service",
    invalidWorkEmailBodyRestriction:
      'Il peut être disponible uniquement pour certaines agences ou personnes autorisées. Si vous pensez avoir droit à accéder à ce service, veuillez',
    invalidWorkEmailBodyContact: 'nous contacter',
    invalidWorkEmailCta: 'Choisir un autre compte',
  },
  components: {
    LoginForm: {
      onlyAvailableForPublicOfficers:
        'Connectez-vous avec une adresse email .gov.sg ou autre adresse email autorisée',
      emailEmptyErrorMsg: 'Veuillez entrer une adresse email',
      login: 'Se connecter',
      haveAQuestion: 'Une question ?',
    },
    OTPForm: {
      signin: 'Connexion',
      otpRequired: 'OTP est requis.',
      otpLengthCheck: 'Veuillez entrer un OTP à 6 chiffres.',
      otpTypeCheck: 'Seuls les chiffres sont autorisés.',
      otpFromEmail: "Entrez l'OTP envoyé à {email}",
    },
    SgidLoginButton: {
      forText: 'Pour',
      selectAgenciesText: 'certaines agences',
      loginText: 'Se connecter avec',
      appText: 'app',
    },
  },
}
