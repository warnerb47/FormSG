import { Fields } from '.'

export const frSG: Fields = {
  builder: {
    title: 'Champs',
    createField: 'Créer un champ',
    addFields: 'Ajouter des champs',
    image: 'Image',
    statement: 'Paragraphe',
    section: 'Titre',
    attachment: 'Pièce jointe',
    checkbox: 'Case à cocher',
    date: 'Date',
    decimal: 'Décimal',
    dropdown: 'Liste déroulante',
    countryRegion: 'Pays/Région',
    email: 'Email',
    homeNumber: 'Numéro de domicile',
    mobileNumber: 'Numéro mobile',
    longText: 'Réponse longue',
    nik: 'NIK/KK',
    number: 'Nombre',
    radio: 'Bouton radio',
    rating: 'Évaluation',
    shortAnswer: 'Réponse courte',
    table: 'Tableau',
    yesNo: 'Oui/Non',
    children: 'Enfants',
  },
  commonFieldComponents: {
    title: 'Nom du champ',
    description: 'Description',
    required: 'Obligatoire',
    noCharactersAllowed: 'Nombre de caractères autorisés',
    charactersAllowedPlaceholder: 'Nombre de caractères',
  },
  radio: {
    options: {
      title: 'Options',
      placeholder: 'Saisir une option par ligne',
    },
    duplicateOptionsError: 'Veuillez supprimer les options en double.',
    otherInvalidInputError:
      'Veuillez spécifier une valeur pour l\'option "autre"',
  },
  checkbox: {
    selectionLimit: {
      label: 'Limites de sélection',
      description: "Personnaliser le nombre d'options sélectionnables",
      minimum: 'Minimum',
      maximum: 'Maximum',
    },
  },
  paragraph: 'Paragraphe',
  section: {
    heading: 'Titre de section',
  },
  rating: {
    numOfSteps: "Nombre d'étapes",
    shape: 'Forme',
    shapes: {
      Heart: 'Cœur',
      Star: 'Étoile',
    },
  },
  email: {
    otpVerification: {
      title: 'Vérification OTP',
      description: 'Les répondants doivent vérifier en entrant un code envoyé.',
    },
    restrictEmailDomains: {
      title: 'Restreindre les domaines email',
      inputLabel: 'Domaines autorisés',
      placeholder: '@data.gov.sg\n@agency.gov.sg',
    },
    emailConfirmation: {
      title: 'Confirmation par email',
      description: "Personnaliser l'accusé de réception envoyé aux répondants",
      subject: {
        title: 'Sujet',
        placeholder: "Sujet d'email par défaut",
      },
      senderName: {
        title: "Nom de l'expéditeur",
        placeholder: 'Le nom par défaut est celui de votre agence',
      },
      content: {
        title: 'Contenu',
        placeholder: "Corps d'email par défaut",
      },
      includePdfResponse: 'Inclure la réponse en PDF',
      includePdfResponseWarning:
        'Les réponses PDF ne sont pas disponibles pour les formulaires de paiement.',
    },
  },
  mobileNo: {
    otpVerification: {
      title: 'Vérification OTP',
      description: 'Les répondants doivent vérifier en entrant un code envoyé.',
    },
    allowInternationalNumber: 'Autoriser les numéros internationaux',
    smsCounts: 'SMS utilisés',
  },
  date: {
    dateValidation: {
      title: 'Validation de date',
      NoPast: 'Interdire les dates passées',
      NoFuture: 'Interdire les dates futures',
      Custom: 'Plage de dates personnalisée',
      atLeastOneDateError: 'Vous devez spécifier au moins une date.',
      validDateError: 'Veuillez entrer une date valide',
      maxMinError: 'La date max ne peut pas être inférieure à la date min.',
    },
    customiseAvailableDays: {
      title: 'Personnaliser les jours disponibles',
      requiredError:
        'Veuillez sélectionner les jours de la semaine disponibles',
      noAvailableDaysError:
        'Les jours sélectionnés ne sont pas disponibles dans votre plage de dates',
    },
  },
  imageAttachment: {
    title: 'Image téléchargée',
    requiredError: 'Veuillez télécharger une image',
  },
  table: {
    minimumRows: 'Lignes minimum',
    maximumRows: 'Lignes maximum autorisées',
    allowAddMoreRows: "Autoriser l'ajout de lignes supplémentaires",
    error: {
      minRow: 'Le nombre minimum de lignes doit être supérieur à 0',
      maxRow: 'Le nombre maximum de lignes doit être supérieur à 0',
      maxRowGreaterThanMin: 'Le maximum doit être supérieur au minimum',
    },
    column: 'Colonne',
    ariaLabelDelete: 'Supprimer la colonne',
    addColumn: 'Ajouter une colonne',
  },
  number: {
    validation: 'Validation numérique',
    minValue: 'Valeur minimale',
    maxValue: 'Valeur maximale',
    maxValueGreaterThanMin: 'Le minimum doit être inférieur au maximum',
    fieldRestriction: {
      title: 'Restriction de champ',
      lengthRestriction: 'Restriction de longueur',
      Length: 'Nombre de caractères autorisés',
      Range: 'Plage de valeurs autorisées',
    },
    error: {
      validationType: 'Veuillez sélectionner un type de validation',
      numOfCharacter: 'Veuillez entrer le nombre de caractères',
      validDecimal: 'Veuillez entrer un décimal valide',
      min: 'Ne peut pas être inférieur à 1',
      max: 'Ne peut pas dépasser 10000',
      rangeValue: 'Veuillez entrer les valeurs de plage',
      minRangeValue: 'Le minimum ne peut pas être 0',
      maxRangeValue: 'Le maximum ne peut pas être 0',
    },
  },
  attachment: {
    info: 'Consultez notre [liste complète]({acceptedFileTypes}) des types de fichiers acceptés. Lisez également notre [FAQ sur la fiabilité des emails]({guideEmailReliability}) concernant les types de fichiers non acceptés.',
    maximumSize: 'Taille maximale par pièce jointe',
    error: {
      exceedSize:
        'Vous avez dépassé la limite de taille totale des pièces jointes de {maxTotalSizeMb} Mo',
    },
  },
}
