import { frSG as create } from './create'
import { Workspace } from '.'

export const frSG: Workspace = {
  common: {
    createForm: 'Créer un formulaire',
  },
  empty: {
    default: {
      title: "Vous n'avez encore aucun formulaire",
      subText: 'Commencez par créer un nouveau formulaire',
    },
    new: {
      title: "Vous n'avez encore aucun formulaire dans ce dossier",
      subText: 'Organisez vos formulaires en les regroupant dans des dossiers',
    },
  },
  search: {
    placeholder: 'Rechercher par titre',
    aria: {
      filter: 'Filtrer les formulaires',
      expand: 'Développer la barre de recherche',
      reset: 'Fermer et réinitialiser la barre de recherche',
    },
    noneFound: {
      title: 'Aucun formulaire trouvé',
      subText: 'Essayez une autre recherche ou supprimez les filtres',
    },
  },
  actions: {
    preview: 'Aperçu',
    duplicate: 'Dupliquer',
    share: 'Partager le formulaire',
    admins: 'Gérer les administrateurs du formulaire',
    move: 'Déplacer vers le dossier',
  },
  modals: {
    create,
    delete: {
      title: 'Supprimer le formulaire',
      description:
        'Vous perdrez définitivement toutes les réponses et commentaires associés à ce formulaire. Confirmez-vous la suppression ?',
      confirm: 'Oui, supprimer le formulaire',
    },
  },
  skeleton: {
    title: 'Chargement du titre... Chargement du titre...',
    metadata: 'Chargement des métadonnées...',
  },
  feedback: {
    rating: {
      prompt:
        "Comment s'est passée votre expérience de création de formulaire ?",
      aria: {
        up: 'Positif',
        down: 'Négatif',
      },
    },
    callForComment: {
      up: {
        title: 'Merci, vous êtes génial !',
        link: 'Souhaitez-vous nous en dire plus ?',
      },
      down: {
        title: 'Merci pour votre retour.',
        link: 'Dites-nous en plus pour nous aider à améliorer !',
      },
    },
    comment: {
      title: 'Super !',
      description:
        'Décrivez-nous votre expérience de création de formulaire plus en détail !',
      placeholder: {
        up: 'string',
        down: 'string',
      },
      aria: {
        close: 'fermer la boîte de feedback',
      },
    },
  },
}
