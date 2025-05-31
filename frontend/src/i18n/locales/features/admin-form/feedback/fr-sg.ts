import { Feedback } from '.'

export const frSG: Feedback = {
  emptyFeedback: {
    noFeedbackYet: "Vous n'avez pas encore de commentaires",
    tryUsing: 'Essayez d’utiliser',
    toSendOutForms: 'pour envoyer vos formulaires !',
  },
  issueTable: {
    dateHeader: 'Date',
    issueHeader: 'Problème',
    contactHeader: 'Contact',
  },
  reviewTable: {
    dateHeader: 'Date',
    feedbackHeader: 'Commentaire',
    ratingHeader: 'Note',
  },
  downloadButton: {
    export: 'Exporter',
  },
  feedbackPage: {
    issues: 'Problèmes',
    reviews: 'Avis',
    reviewInformation: {
      averageScore: 'Note moyenne',
      reviewsToDate:
        '{reviewCount, plural, =1 {avis à ce jour} other {avis à ce jour}}',
    },
    issueInformation: {
      issuesToDate:
        '{issueCount, plural, =1 {problème à ce jour} other {problèmes à ce jour}}',
      tooltip:
        'Les commentaires affichés ici concernent les problèmes de soumission de formulaire',
    },
    feedbackCsvGenerator: {
      date: 'Date',
      comment: 'Commentaire',
      rating: 'Note',
    },
    issueCsvGenerator: {
      date: 'Date',
      issue: 'Problème',
      email: 'E-mail',
    },
  },
}
