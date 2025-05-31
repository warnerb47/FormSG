import { frSG as fields } from './fields'
import { frSG as table } from './table'
import { PublicForm } from '.'

export const frSG: PublicForm = {
  errors: {
    notAvailable: "Ce formulaire n'est pas disponible.",
    notFound: 'Formulaire introuvable',
    deleted: "Ce formulaire n'est plus actif",
    private:
      "Si vous avez besoin d'aide, veuillez contacter l'agence qui vous a fourni le lien du formulaire.",

    submissionSecretKeyInvalid: {
      title: 'Lien de formulaire invalide',
      header: "Ce lien de formulaire n'est plus valide.",
      message:
        "Une soumission a peut-être déjà été effectuée avec ce lien. Si vous avez besoin d'aide, veuillez contacter l'agence qui vous a fourni le lien du formulaire.",
    },

    myinfo:
      "Vos informations Myinfo n'ont pas pu être récupérées. Actualisez votre navigateur et reconnectez-vous, ou réessayez plus tard.",
    submitFailure:
      'Une erreur est survenue lors du traitement de votre soumission. Veuillez actualiser et réessayer.',
    verifiedFieldExpired:
      'Vos champs vérifiés ont expiré. Veuillez les vérifier à nouveau.',
  },
  components: {
    header: {
      estTime:
        'Temps estimé pour remplir le formulaire : {estTime, plural, =1 {# minute} other {# minutes}}',
    },
    submitButton: {
      loadingText: 'Envoi en cours',
      visuallyHidden: 'Fin du formulaire.',
      preventSubmission: 'Soumission désactivée',
      proceedToPay: 'Procéder au paiement',
      submitNow: 'Soumettre maintenant',
    },
    table,
    fields,
    feedbackBlock: {
      title: {
        payment:
          "Comment s'est passé votre expérience de paiement sur ce formulaire ?",
        general:
          "Comment s'est passé votre expérience de remplissage du formulaire aujourd'hui ?",
      },
      rating: {
        label: 'Évaluation du formulaire',
        error: 'Veuillez sélectionner une note',
      },
      commentPlaceholder: 'Dites-nous en plus sur votre expérience',
      submitButton: 'Envoyer les commentaires',
    },
    instructions: {
      title: 'Instructions',
    },
  },
}
