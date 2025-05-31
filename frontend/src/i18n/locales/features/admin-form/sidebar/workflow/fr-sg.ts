import {
  CONDITIONAL_ROUTING_CSV_PARSE_ERROR_MESSAGE,
  CONDITIONAL_ROUTING_DUPLICATE_OPTIONS_ERROR_MESSAGE,
  CONDITIONAL_ROUTING_EMAILS_OPTIONS_MISSING_ERROR_MESSAGE,
  CONDITIONAL_ROUTING_INVALID_CSV_FORMAT_ERROR_MESSAGE,
  CONDITIONAL_ROUTING_MISMATCHED_OPTIONS_ERROR_MESSAGE,
} from '~shared/constants'

import { Workflow } from '.'

export const frSG: Workflow = {
  title: 'Ajouter un workflow',
  respondentBlock: {
    stepRespondent: 'Répondant à cette étape',
    anyone: 'Toute personne ayant accès à votre formulaire',
    select: 'Sélectionner un répondant',
    fieldsToFill: 'Champs à remplir',
    clickToEdit: 'Cliquer pour éditer',
  },
  dynamicRespondent: {
    title: 'Un champ email du formulaire',
    required: 'Veuillez sélectionner un champ.',
    mustBeEmail: "Le champ n'est pas un champ email",
    select: 'Sélectionner un champ',
  },
  conditionalRouting: {
    title: "Emails assignés aux options d'un champ déroulant",
    addEmailsToOptions: 'Ajouter des emails aux options',
    validation: {
      noField: 'Veuillez sélectionner un champ.',
      notDropdown: "Le champ n'est pas un champ déroulant",
    },
    modals: {
      deleteStep: {
        title: "Supprimer l'étape",
        description:
          'Êtes-vous sûr de vouloir supprimer cette étape ? Cette action est irréversible.',
        confirm: "Oui, supprimer l'étape",
        cancel: 'Non, ne pas supprimer',
      },
      deleteMapping: {
        title: 'Supprimer le fichier CSV',
        description:
          'Êtes-vous sûr de vouloir supprimer ce fichier CSV ? Cette action est irréversible.',
        confirm: 'Oui, supprimer le fichier CSV',
        cancel: 'Non, ne pas supprimer',
      },
      addMapping: {
        step1: {
          title: 'Ajouter des emails aux options',
          download: {
            templateCreated:
              'Nous avons créé un modèle CSV avec les options du champ sélectionné.',
            pleaseDownload:
              'Veuillez télécharger le modèle CSV et ajouter les emails pour chaque option.',
            button: 'Télécharger et éditer le CSV',
            howto: {
              title: 'Comment utiliser le CSV',
              option: {
                title: 'OPTIONS',
                explanation: 'Contient toutes les options de votre champ.',
                notice:
                  'Ne pas modifier, réorganiser ou supprimer cette colonne.',
              },
              email: {
                title: 'EMAIL(S)',
                explanation:
                  'Ajoutez les emails pour envoyer le formulaire pour chaque option.',
                notice: 'Séparez plusieurs emails par des virgules.',
              },
              imageCaption: 'Comment configurer votre CSV',
            },
          },
          nextButton: 'Suivant : Téléverser le fichier CSV',
          carousel: {
            caption1: 'Téléchargez et éditez le CSV créé par FormSG',
            caption2:
              'Le modèle CSV inclut les options de votre champ sélectionné',
            caption3: 'Entrez les emails pour chaque option',
            caption4: 'Téléversez votre fichier CSV mis à jour',
            caption5: 'Enregistrez le CSV pour mettre à jour le routage',
          },
        },
        step2: {
          title: 'Téléversez votre fichier CSV complété',
          confirm: 'Enregistrer le fichier CSV',
          description: {
            prefix:
              'Veuillez vous assurer que votre fichier est enregistré au format',
            csv: 'valeurs séparées par des virgules (.csv)',
            suffix: '',
          },
        },
        stepReplace: {
          title: 'Remplacer votre fichier CSV',
          confirm: 'Enregistrer le fichier CSV',
          description: {
            info: 'Remplacer le fichier supprimera le CSV existant et mettra à jour vos options de menu déroulant et le routage des emails.',
            warning: 'Cette action est irréversible. ',
            info1: 'Pour assigner plusieurs emails à une option,',
            info2: 'séparez-les par des virgules.',
          },
        },
      },
    },
    errors: {
      respondentType: {
        required: 'Veuillez sélectionner un type de répondant',
        invalid: 'Le type de répondant sélectionné est invalide',
      },
      csv: {
        required: 'Veuillez téléverser un fichier CSV',
        addEmailsBeforeSave:
          "Vous devez ajouter des emails aux options avant d'enregistrer cette étape.",
        mismatchedOptions: CONDITIONAL_ROUTING_MISMATCHED_OPTIONS_ERROR_MESSAGE,
        missingData: CONDITIONAL_ROUTING_EMAILS_OPTIONS_MISSING_ERROR_MESSAGE,
        invalidFormat: CONDITIONAL_ROUTING_INVALID_CSV_FORMAT_ERROR_MESSAGE,
        duplicateOptions: CONDITIONAL_ROUTING_DUPLICATE_OPTIONS_ERROR_MESSAGE,
        parse: CONDITIONAL_ROUTING_CSV_PARSE_ERROR_MESSAGE,
      },
    },
  },
  questions: {
    tooltip:
      'Le répondant ne pourra remplir que les champs que vous avez sélectionnés',
    label: 'Sélectionner le(s) champ(s) que ce répondant doit remplir',
    placeholder: 'Sélectionner le(s) champ(s) de votre formulaire',
  },
  approvals: {
    title: 'Approbations',
    yesNoDeleted:
      'Ce champ Oui/Non a été supprimé, veuillez en sélectionner un autre',
    notRequired: 'Approbation non requise à cette étape',
    toggle: {
      label: 'Ce répondant est un approbateur',
      description:
        "S'il sélectionne Oui, le formulaire passe à l'étape suivante. S'il sélectionne Non, il s'arrête ici.",
      tooltip:
        'Utilisez ceci pour les étapes impliquant une décision, comme des validations ou des approbations',
      placeholder: 'Sélectionner un champ Oui/Non dans votre formulaire',
    },
    validation: {
      noField: 'Veuillez sélectionner un champ Oui/Non',
      fieldAlreadyUsed:
        'Le champ sélectionné est déjà assigné à une autre étape. Veuillez en choisir un différent',
      fieldNotAssignedToUser:
        "Le champ Oui/Non sélectionné n'a pas été assigné à ce répondant",
    },
    addStep: 'Ajouter une étape',
    complete: {
      prefix:
        'Lorsque le workflow est terminé, des notifications par email peuvent être envoyées aux répondants et autres parties. Configurez les',
      link: 'notifications par email',
      suffix: 'dans les Paramètres.',
    },
  },
}
