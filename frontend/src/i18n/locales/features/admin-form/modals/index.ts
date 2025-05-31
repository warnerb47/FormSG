export * from './en-sg'
export * from './fr-sg'

export interface Modals {
  deleteField: {
    title: string
    description: {
      field: string
      logic: string
      payment: string
    }
    confirmButtonText: string
  }
  unsavedChanges: {
    title: string
    description: string
    confirmButtonText: string
    cancelButtonText: string
  }
  dirty: {
    cancelButtonText: string
  }
}
