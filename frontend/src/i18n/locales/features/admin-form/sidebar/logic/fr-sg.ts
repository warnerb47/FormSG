import { LogicConditionState } from '~shared/types'

import { Logic } from '.'

export const frSG: Logic = {
  title: 'Commencez à créer la logique pour votre formulaire',
  and: 'et',
  saveChangesBtn: 'Enregistrer les modifications',
  helperText:
    'Affichez ou masquez des champs en fonction des réponses, ou désactivez la soumission pour des réponses invalides.',
  helperTextCta: 'Apprendre à utiliser la logique',
  allowedFields: 'Champs autorisés',
  addLogicBtn: 'Ajouter une logique',
  conjunctive: 'ET',
  logic: 'Logique',
  logicInstruction:
    'Veuillez tester votre formulaire minutieusement pour vous assurer que la logique fonctionne comme prévu.',
  logicClause: {
    addConditionCta: 'Ajouter une condition',
    cta: 'Ajouter une logique',
    if: 'si',
    is: 'est',
    then: 'alors',
    show: 'afficher',
    selectField: 'Sélectionner un champ',
    selectResultType: 'Sélectionner un type de résultat',
  },
  logicCondition: {
    [LogicConditionState.Equal]: LogicConditionState.Equal,
    [LogicConditionState.Lte]: LogicConditionState.Lte,
    [LogicConditionState.Gte]: LogicConditionState.Gte,
    [LogicConditionState.Either]: LogicConditionState.Either,
  },
  actionTypes: {
    showFields: 'Afficher le(s) champ(s)',
    disableSubmission: 'Désactiver la soumission',
    disabledSubmissionMessagePlaceholder:
      'Message personnalisé à afficher lorsque la soumission est empêchée',
  },
  thenBlock: {
    labels: {
      showFields: 'Afficher le(s) champ(s)',
      preventSubmit: 'Désactiver la soumission',
      then: 'Alors',
      show: 'Afficher',
    },
    placeholders: {
      selectResultType: 'Sélectionner un type de résultat',
      inputCustomMessage:
        'Message personnalisé à afficher lorsque la soumission est empêchée',
    },
    errors: {
      atLeastOneFieldRequired:
        'Tous les champs ont été supprimés, veuillez en sélectionner au moins un',
      logicTypeRequired: 'Veuillez sélectionner un type de logique.',
      preventSubmitMessageRequired:
        'Veuillez saisir un message à afficher lorsque la soumission est empêchée',
      fieldsToShowRequired:
        'Veuillez sélectionner les champs à afficher si les critères sont remplis.',
    },
    deletedFieldsWarning: {
      showFields:
        '{deletedFieldsCount, plural, =1 {# champ à afficher} other {# champs à afficher}}',
      fieldsRemoved:
        '{deletedFieldsCount, plural, =1 {# a été supprimé et a} other {# ont été supprimés et ont}} été retirés de votre logique',
    },
  },
  modals: {
    delete: {
      title: 'Supprimer la logique',
      description:
        'Êtes-vous sûr de vouloir supprimer cette logique ? Cette action est irréversible.',
      confirm: 'Oui, supprimer la logique',
      cancel: 'Non, ne pas supprimer',
    },
  },
  aria: {
    removeBlock: 'Supprimer le bloc de condition de logique',
    criteria: 'Critères de logique',
    condition: 'Condition de logique',
  },
  errors: {
    conditionRequired: 'Veuillez sélectionner une condition',
    fieldRequired: 'Veuillez sélectionner un champ.',
    fieldInvalid: 'Le champ est invalide ou ne peut pas accepter de logique.',
    disabledSubmissionMessage:
      'Veuillez saisir un message à afficher lorsque la soumission est empêchée',
    missingLogicCriteria: 'Veuillez saisir des critères de logique.',
    missingLogicType: 'Veuillez sélectionner un type de logique',
  },
}
