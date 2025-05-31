export const frSG = {
  title: 'Général',
  status: {
    supplySingpassEServiceId:
      'Ce formulaire ne peut être activé sans un identifiant de service valide dans la section Singpass.',
    noEmailsInMRF:
      "Les confirmations par email ne sont pas prises en charge pour les formulaires multi-répondants. Veuillez supprimer les demandes de confirmation des champs email avant d'activer votre formulaire.",
    description: {
      prefix: 'Votre formulaire est ',
      suffix: ' aux nouvelles réponses',
      open: 'OUVERT',
      closed: 'FERMÉ',
    },
    ariaLabel: 'Basculer le statut du formulaire',
  },
  limit: {
    label: 'Définir une limite de réponses',
    notForMRF:
      "Les limites de réponses ne s'appliquent pas aux formulaires multi-répondants.",
    input: {
      label: 'Nombre maximum de réponses autorisées',
      description:
        "Votre formulaire se fermera automatiquement une fois la limite atteinte. Activez reCAPTCHA pour éviter que des soumissions indésirables n'atteignent cette limite.",
    },
    limitLessThanCurrent:
      'La limite doit être supérieure au nombre actuel de réponses ({currentResponseCount})',
  },
  customisation: {
    closedFormMessage: 'Message pour formulaire fermé',
  },
  captcha: {
    label: 'Activer reCAPTCHA',
    description:
      'Si vous attendez des répondants non anglophones, ils pourraient avoir des difficultés à comprendre les instructions de sélection reCAPTCHA.',
  },
  issueNotifications: {
    label: 'Recevoir des notifications par email pour les problèmes signalés',
    description:
      'Vous recevrez maximum un email par formulaire et par jour en cas de problème signalé.',
  },
}
