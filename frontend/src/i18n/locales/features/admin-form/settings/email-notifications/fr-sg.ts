export const frSG = {
  title: 'Notifications par email',
  header: {
    closeFormFirst:
      'Pour modifier les destinataires des emails, fermez votre formulaire aux nouvelles réponses.',
    noEmailsForPaymentForms: `Les notifications par email pour les formulaires de paiement ne sont pas disponibles sur FormSG. Vous pouvez les configurer en utilisant [Plumber]({url}).`,
  },
  section: {
    mrf: {
      selectRecipient:
        'Sélectionnez qui notifier lorsque le formulaire et/ou le workflow est complété :',
      respondents: {
        step1: {
          label: "Répondant à l'Étape 1",
          placeholder: 'Sélectionnez un champ email dans votre formulaire',
        },
        stepN: {
          label: {
            overall: 'Autres répondants dans votre workflow',
            each: "Répondant(s) à l'Étape {stepNumber}",
          },
          placeholder: 'Sélectionnez les répondants dans votre formulaire',
        },
        others: {
          label: 'Autres',
          tooltipText:
            "Inclure l'email de l'administrateur pour l'informer lorsqu'un workflow est complété",
          description: 'Séparez plusieurs adresses email par une virgule',
        },
      },
    },
    regular: {
      label: 'Notifications pour les nouvelles réponses',
      info: 'Permettre aux répondants de recevoir une copie de leur soumission',
      description: 'Séparez plusieurs adresses email par une virgule',
    },
  },
}
