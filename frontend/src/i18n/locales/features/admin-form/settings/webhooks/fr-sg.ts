export const frSG = {
  title: 'Webhooks',
  input: {
    label: 'URL du point de terminaison',
    description:
      'FormSG enverra les réponses du formulaire chiffrées en temps réel vers le point de terminaison HTTPS spécifié ici. Assurez-vous que votre système externe peut gérer la classification et la sensibilité des données.',
  },
  retry: {
    label: 'Activer les nouvelles tentatives',
    description: `Votre système doit répondre à certaines exigences avant que les nouvelles tentatives puissent être activées en toute sécurité. [En savoir plus]({url})`,
  },
}
