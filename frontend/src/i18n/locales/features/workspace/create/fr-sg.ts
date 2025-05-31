import { CreateModal } from '.'

export const frSG: CreateModal = {
  title: {
    setup: 'Configurer votre formulaire',
    duplicate: 'Dupliquer le formulaire',
  },
  errors: {
    responseMode: {
      required: 'Veuillez sélectionner un mode de réponse pour le formulaire',
      invalid: 'Mode de réponse invalide',
    },
    useWizardWithinContext:
      'useCreateFormWizard doit être utilisé dans un composant CreateFormWizardProvider',
    noSingpassInMrf:
      "Le formulaire que vous essayez de dupliquer utilise l'authentification Singpass, qui n'est pas prise en charge pour les formulaires multi-répondants.",
  },
  details: {
    name: {
      label: 'Nom du formulaire',
      message:
        "Il est conseillé d'utiliser un nom de formulaire plus court et plus succinct.",
    },
    type: {
      label: 'Quel type de formulaire avez-vous besoin ?',
      storage: {
        title: 'Formulaire en mode stockage',
        subtitle:
          'Collectez des réponses de répondants individuels. Idéal pour des soumissions unidirectionnelles.',
      },
      mrf: {
        title: 'Formulaire multi-répondants',
        subtitle:
          'Collectez des réponses de plusieurs répondants dans un seul flux de travail. Idéal pour des soumissions séquentielles.',
      },
    },
    notifications: {
      label: 'Notifications pour les nouvelles réponses',
      description:
        'Toutes les adresses email ci-dessous seront notifiées. Assurez-vous que les boîtes mail peuvent supporter la classification et la sensibilité.',
    },
    create: 'Créer le formulaire',
  },
  secretKey: {
    title:
      'Votre formulaire a été créé ! Téléchargez votre clé secrète pour continuer.',
    message: {
      preamble1:
        'Vous aurez besoin de cette clé secrète pour accéder aux réponses de ce formulaire.',
      preamble2: {
        prefix: 'Si vous la perdez, ',
        warning: 'toutes les réponses seront définitivement perdues',
      },
    },
    tooltip: {
      copyKey: 'Copier la clé',
      copied: 'Copié !',
    },
    download: 'Télécharger la clé',
    declaration:
      'Si je perds ma clé secrète, je ne pourrai plus activer mon formulaire ni accéder à ses réponses',
    confirm: "J'ai sauvegardé ma clé secrète en lieu sûr",
    email: {
      filename:
        'Clé secrète du formulaire - {titleInputValue} - ID({formId}).txt',
      subject: 'Clé secrète partagée pour {titleInputValue}',
      body: `
        Cher collaborateur,

        Je partage avec vous la clé secrète de mon formulaire pour sauvegarde. Cette clé est nécessaire pour accéder à toutes les réponses du formulaire.

        Titre du formulaire : {titleInputValue}

        Clé secrète : {secretKey}

        Vous n'avez qu'à conserver cet email comme archive, et merci de ne pas partager cette clé avec qui que ce soit.

        Merci de contribuer à la sécurisation de mon formulaire !`,
    },
  },
}
