import { LandingPage } from '.'

export const frSG: LandingPage = {
  hero: {
    title:
      'Créez des formulaires gouvernementaux sécurisés en quelques minutes.',
    subtitle:
      'Formulaires instantanés et personnalisables sans code ni coût, pour collecter en toute sécurité des données classifiées et sensibles.',
    ctaButtonLabel: 'Commencez à créer votre formulaire maintenant',
  },
  featureSection: {
    title:
      'Nos fonctionnalités de création de formulaires et de collecte de données',
    features: {
      dragDropBuilder: {
        title: 'Constructeur par glisser-déposer',
        description:
          'Lancez des formulaires en quelques minutes avec notre constructeur par glisser-déposer et plus de 20 types de champs disponibles',
      },
      singpassAndMyinfo: {
        title: 'Singpass et Myinfo',
        description:
          'Authentifiez les particuliers ou entreprises avec Singpass et accélérez le remplissage avec les données pré-remplies de Myinfo',
      },
      conditionalLogic: {
        title: 'Logique conditionnelle',
        description:
          'Créez des formulaires dynamiques qui affichent ou masquent des champs spécifiques selon les réponses précédentes',
      },
      emailConfirmation: {
        title: 'Confirmation par email',
        description:
          'Envoyez des emails de confirmation aux répondants avec une copie de leurs réponses',
      },
      prefill: {
        title: 'Pré-remplissage',
        description:
          'Accélérez le remplissage des formulaires en pré-remplissant certains champs pour les répondants',
      },
      webhooks: {
        title: 'Webhooks',
        description:
          'Envoyez les réponses du formulaire à des applications externes en temps réel',
      },
    },
  },
  getStartedSection: {
    title: 'Aucune intégration nécessaire, gratuit, sans code.',
    subtitle:
      "Connectez-vous avec votre email gouvernemental et commencez à créer des formulaires immédiatement. C'est gratuit et ne nécessite aucune intégration ou approbation préalable.",
    ctaButtonLabel: 'Commencer',
  },
  usedByAgenciesSection: {
    title: 'Utilisé par la plupart des agences gouvernementales',
    formsLaunched: 'formulaires lancés',
    submissionsReceived: 'réponses reçues',
    publicOfficersOnboard: 'fonctionnaires utilisateurs',
    governmentAgencies: 'agences gouvernementales',
    exampleUserTitle: "Exemples d'utilisateurs de FormSG",
  },
  useCaseSection: {
    title: "Support des cas d'usage nationaux et émergents",
    subtitle:
      'Form est un facilitateur clé pour de nombreux workflows gouvernementaux. Parmi les formulaires notables lancés :',
  },
  storageModeSection: {
    title: 'Collecte sécurisée des réponses',
    subtitle:
      'Toutes les réponses aux formulaires sont chiffrées et peuvent être envoyées directement à votre boîte email ou exportées sous forme de tableau. Cela signifie que les tiers, y compris FormSG, ne pourront pas accéder ou voir vos données de formulaire et emails.',
    modes: {
      security: {
        title: 'Classification de sécurité',
        description: "Jusqu'à Confidentiel (éligible au Cloud)",
      },
      sensitivity: {
        title: 'Sensibilité des informations',
        description: "Jusqu'à Sensible (Élevé)",
      },
    },
    guideCtaLabel: 'En savoir plus',
  },
  opensourceSection: {
    title: 'Open source',
    subtitle:
      "Notre code est open source, ce qui signifie que n'importe qui peut aider à l'améliorer et le développer, y compris les gouvernements d'autres pays.",
    forkItCtaLabel: 'Forkez-le sur Github',
  },
  helpCenterSection: {
    title: "Centre d'aide",
    subtitle:
      "Une question ? La plupart des réponses se trouvent dans notre Centre d'aide en libre-service. Parmi les questions fréquentes :",
    visitHelpCenterCtaLabel: "Visitez notre Centre d'aide",
    common: {
      sourceLinkLabel: 'Lire la suite',
    },
    qnaAccordionItem: {
      loseSecretKey: {
        question: 'Que se passe-t-il si je perds ma clé secrète ?',
        answer: `
          Si vous avez perdu votre clé secrète, suivez ces étapes immédiatement :

          1. Si votre formulaire est actif, dupliquez-le, enregistrez la nouvelle clé secrète en lieu sûr et remplacez le lien du formulaire original par celui du nouveau formulaire pour continuer à collecter des réponses. Désactivez le formulaire original dès que possible pour éviter de perdre d'autres réponses.

          2. Sur l'ordinateur utilisé pour créer le formulaire original, recherchez "Clé secrète de formulaire". Les clés secrètes sont généralement téléchargées dans votre dossier Téléchargements sous forme de fichiers .txt avec "Clé secrète de formulaire" dans le nom du fichier.

          3. Si vous avez créé plusieurs formulaires avec des titres similaires par le passé, il est possible que vous ayez confondu les différentes clés secrètes, car les titres des formulaires apparaissent dans les noms des fichiers de clés secrètes. Essayez toutes les clés secrètes avec des noms de fichiers similaires sur votre formulaire.

          4. Si vous vous souvenez avoir envoyé un email pour partager votre clé secrète avec des collaborateurs, recherchez dans votre dossier Envoyés les mots-clés "clé secrète" et le titre de votre formulaire.

          5. Si vous ne trouvez toujours pas votre clé secrète et souhaitez notre aide pour approfondir le diagnostic, contactez-nous via notre [formulaire d'aide]({CONTACT_US}).

          Sans votre clé secrète, vous ne pourrez pas accéder à vos données de réponse existantes. De plus, il nous est impossible de récupérer votre clé secrète perdue ou vos données de réponse en votre nom. En effet, Form ne conserve pas votre clé secrète ni aucun autre moyen de déchiffrer vos données cryptées - c'est la seule façon de garantir que les données de réponse restent véritablement privées pour les agences uniquement. C'est un avantage de sécurité important, car cela signifie que même si notre serveur était compromis, un attaquant ne pourrait jamais déverrouiller vos réponses chiffrées.
        `,
      },
      increaseAttachmentSizeLimit: {
        question: 'Comment augmenter la limite de taille des pièces jointes ?',
        answer: `La limite de taille actuelle est de 20 Mo pour les formulaires en mode stockage.

            Comme la plus petite unité que vous pouvez joindre par champ de pièce jointe est de 1 Mo, vous pouvez avoir un maximum de 20 pièces jointes. Si votre utilisateur doit soumettre plus de documents, vous pouvez créer un champ de pièce jointe de 20 Mo et conseiller à votre utilisateur de compresser les documents et de les soumettre en une seule pièce jointe.`,
      },
      howDoesE2eWork: {
        question: 'Comment fonctionne le chiffrement de bout en bout ?',
        answer: `
          Lorsqu'un répondant soumet une réponse, les données sont chiffrées dans son navigateur avant d'être envoyées à nos serveurs pour stockage. Cela signifie qu'au moment où les serveurs de Form reçoivent les réponses, elles ont déjà été brouillées et sont stockées sous cette forme illisible. Vos données de réponse restent dans cet état chiffré jusqu'à ce que vous les déchiffriez avec votre clé secrète, les transformant en un format lisible.

          L'avantage du chiffrement de bout en bout est que les données de réponse arrivent et restent sur les serveurs de Form sous forme chiffrée. Cela garantit que même si nos serveurs étaient compromis par une attaque, les attaquants ne pourraient toujours pas déchiffrer et voir vos données de réponse, car ils ne possèdent pas votre clé secrète.
        `,
      },
      howToTransferOwnership: {
        question: 'Comment transférer la propriété de mes formulaires ?',
        answer: `
          Vous pouvez transférer la propriété dans le coin supérieur droit de chaque formulaire en cliquant sur le bouton Ajouter un collaborateur.

          Notez que vous n'avez pas nécessairement besoin de transférer la propriété de votre formulaire. Vous pouvez simplement ajouter votre collègue en tant que collaborateur. Les collaborateurs ont les mêmes droits que les créateurs de formulaires, sauf qu'ils ne peuvent pas supprimer le formulaire.
        `,
      },
    },
  },
  howItWorksSection: {
    title: 'Comment ça marche',
    modes: {
      storage: {
        tab: 'Mode stockage',
        description:
          'Collectez des réponses individuelles. Idéal pour les soumissions unidirectionnelles. Toutes les données sont chiffrées, ce qui signifie que les tiers, y compris FormSG, ne pourront pas accéder ou voir vos données de formulaire.',
        steps: {
          one: 'Connectez-vous à FormSG via Internet ou Intranet',
          two: 'Créez un nouveau formulaire en mode stockage et conservez la clé secrète en lieu sûr',
          three: 'Construisez les champs du formulaire',
          four: 'Partagez le lien du formulaire avec les répondants',
          five: 'Téléversez votre clé secrète pour voir les réponses',
          six: 'Téléchargez vos réponses au format CSV et recevez-les par email',
        },
      },
      mrf: {
        tab: 'Mode multi-répondants',
        description:
          'Collectez des réponses de plusieurs répondants dans un seul workflow. Idéal pour les soumissions séquentielles. Toutes les données sont chiffrées, ce qui signifie que les tiers, y compris FormSG, ne pourront pas accéder ou voir vos données de formulaire.',
        steps: {
          one: 'Connectez-vous à FormSG via Internet ou Intranet',
          two: 'Créez un nouveau formulaire multi-répondants et conservez la clé secrète en lieu sûr',
          three:
            'Construisez les champs du formulaire et assignez-les aux différentes étapes de votre workflow',
          four: `Partagez le lien du formulaire pour un routage automatique vers le(s) prochain(s) répondant(s)`,
          five: 'Téléversez votre clé secrète pour voir les réponses',
          six: 'Téléchargez vos réponses au format CSV et recevez-les par email',
        },
      },
    },
  },
  ogpProductSuiteSection: {
    title:
      'Tous les outils gouvernementaux dont vous avez besoin pour gérer vos workflows',
    subtitle:
      "FormSG fait partie de la **Suite de Produits du Gouvernement Ouvert**, et en tant que fonctionnaire, vous pouvez mixer et assortir parmi notre ensemble d'outils de productivité et de collaboration.",
    ctaLinkLabel: 'Liste complète des produits OGP',
  },
  ctaSection: {
    title: 'Commencez à créer votre formulaire maintenant.',
    ctaButtonLabel: 'Commencer',
  },
}
