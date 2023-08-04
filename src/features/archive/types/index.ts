export type ArchivedReport = {
    companyName: string
    controlPerson: string
    creatorName? : string
    creatorId: number
    created: Date | string
    delivered?: Date | string
    depersonalizationReason: ReasonForDepersonalization
    orderId: number
    reportPackageName: string
}

export enum ReasonForDepersonalization {
    Automatic = 'Automatic',
    IncorrectOrder = 'IncorrectOrder',
    DuplicateOrder = 'DuplicateOrder',
    Canceled = 'Canceled',
    WithdrawnOrder = 'WithdrawnOrder'
}

export type Customer = {
	id: number
	created: Date
	type: string
	companyId: number
	firstName: string
	lastName: string
	phoneNumber: string
	email: string
	language: string
	isActive: boolean
	roles: Array<{ role: string }>
	receiverWhenOrdering?: boolean
}