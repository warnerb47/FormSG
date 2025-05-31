import { FormValidation } from '.'

export const frSG: FormValidation = {
  titleValidationRules: {
    required: 'Le nom du formulaire est requis',
    minLength: {
      message:
        'Le nom du formulaire doit contenir au moins {MIN_TITLE_LENGTH} caractères',
    },
    maxLength: {
      message:
        'Le nom du formulaire ne doit pas dépasser {MAX_TITLE_LENGTH} caractères',
    },
    validate: {
      trimMinLength:
        'Le nom du formulaire doit contenir au moins {MIN_TITLE_LENGTH} caractères',
    },
  },
  requiredEmailAdminValidationRules: {
    validate: {
      required:
        'Vous devez entrer au moins une adresse email pour recevoir les réponses',
      valid:
        'Veuillez entrer des adresses email valides (ex: moi@exemple.com) séparées par des virgules, les adresses invalides ne seront pas enregistrées',
      duplicate: 'Veuillez supprimer les adresses email en double',
      maxLength:
        "Veuillez limiter le nombre d'adresses email à {maxEmailLength}",
    },
  },
}
