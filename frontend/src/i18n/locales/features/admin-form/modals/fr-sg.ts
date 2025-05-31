export const frSG = {
  deleteField: {
    title: 'Supprimer le champ',
    description: {
      field:
        'Êtes-vous sûr de vouloir supprimer ce champ ? Cette action est irréversible.',
      logic:
        'Ce champ est utilisé dans la logique de votre formulaire. Sa suppression pourrait perturber le fonctionnement de cette logique. Êtes-vous sûr de vouloir le supprimer ?',
      payment:
        'Êtes-vous sûr de vouloir supprimer le champ de paiement ? Cette action est irréversible.',
    },
    confirmButtonText: 'Oui, supprimer le champ',
  },
  unsavedChanges: {
    title: 'Vous avez des modifications non enregistrées',
    description:
      'Voulez-vous vraiment quitter ? Vos modifications seront perdues.',
    confirmButtonText: 'Oui, annuler les modifications',
    cancelButtonText: 'Non, rester sur la page',
  },
  dirty: {
    cancelButtonText: 'Non, continuer à modifier',
  },
}
