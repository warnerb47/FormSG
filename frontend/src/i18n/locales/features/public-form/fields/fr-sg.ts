import { Fields } from '.'

export const frSG: Fields = {
  yesNo: {
    yes: 'Oui',
    no: 'Non',
  },
  option: {
    others: 'Autres',
  },
  dropdown: {
    placeholder: 'Sélectionnez une option',
    nothingFound: 'Aucun résultat correspondant',
  },
  attachment: {
    fileUploaderLink: 'Choisir un fichier',
    dragAndDrop: ' ou glisser-déposer ici',
    dragActive: 'Déposez le fichier ici',
    maxFileSize: 'Taille maximale du fichier : {readableMaxSize}',
    fileConstraintsText: 'Les fichiers ne doivent pas dépasser 10 pages.',
    ariaLabelRemove: 'Cliquez pour supprimer le fichier',
    ariaLabelReplace: 'Cliquez pour remplacer le fichier',
    error: {
      fileEmpty:
        'Vous avez téléchargé un fichier vide, veuillez télécharger une pièce jointe valide',
      fileTooLarge:
        'Vous avez dépassé la taille maximale autorisée, veuillez télécharger un fichier de moins de {readableMaxSize}',
      fileInvalidType:
        "L'extension de votre fichier se terminant par *{fileExt} n'est pas autorisée",
      tooManyFiles:
        "Vous ne pouvez télécharger qu'un seul fichier dans ce champ",
      zipFileInvalidType:
        'Les extensions de fichiers suivantes dans votre fichier zip ne sont pas valides : {stringOfInvalidExtensions}',
      zipParsing:
        "Une erreur est survenue lors de l'analyse de votre fichier zip",
    },
  },
  email: {
    validation: {
      domainDisallowed:
        "L'adresse email saisie n'appartient pas à un domaine autorisé",
    },
  },
  verification: {
    button: {
      label: {
        verify: 'Vérifier',
        verified: 'Vérifié',
      },
    },
    modal: {
      email: {
        title: 'Vérifiez votre email',
        description:
          'Un email contenant un code de vérification à 6 chiffres vous a été envoyé. Il sera valide pendant 30 minutes.',
      },
      mobile: {
        title: 'Vérifiez votre numéro de mobile',
        description:
          'Un SMS contenant un code de vérification à 6 chiffres vous a été envoyé. Il sera valide pendant 30 minutes.',
      },
    },
  },
  respondentEmail: {
    title:
      'Envoyer une copie de mes réponses aux emails suivants après soumission',
    info: 'Séparez les adresses email par une virgule',
  },
}
