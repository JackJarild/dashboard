export type ReportPackage = {
    id: number
    companyId: number
    available: boolean
    billingType: Billing
    checkpoints: string[]
    customName: string
    daysToDeliver: number
    description?: string
    isGroupedOrder: boolean
    //isIDD: boolean
    price: number
    type: ReportPackageType
    optionalCheckpoints: {
        checkpointType: string
		category: string
		source: string
		isOptional: boolean
		id: number
    }[]
}

export enum ReportPackageType {
	BK1 = 'BK1',
	BK2 = 'BK2',
	BK3 = 'BK3',
	BK_International = 'BK_International',
	Basic = 'Basic',
	Extended = 'Extended',
	InDepth = 'InDepth',
	International = 'International'
}

export enum Billing {
	PerUnit,
	Periodically
}

export type Order = {
    email: string
}

export type Company = {
    id?: number
	name: string
	note?: string
	researcherId?: number
	accountManagerId?: number
	parentCompanyId?: number
	organizationNumber?: string
	//departments?: {}[]
	costCenters?: CostCenter[]
	researcher?: Researcher
	researcherName?: string
	accountManagerName?: string
	language?: string
	subsidiaries: Company[]
	tfoAcceptsOrDeniesCandidate: boolean
}

export type Researcher = {
	email: string
	firstName: string
	lastName: string
	phoneNumber: number
}

export type CostCenter = {
	accrual: Accrual
	address: string
	companyId: number
	contactPersonCustomer: string
	costCenterText: string
	deliveryMethodInvoice: DeliveryMethodInvoice
	departmentIds?: number[]
	email: string
	id: number
	invoiceComment: string
	name?: string
	paymentCondition: number
	postalArea: string
	postalCode: string
	showCompanyName: boolean
}

export enum Accrual {
	Weekly = 'Weekly',
	Monthly = 'Monthly',
	Quarterly = 'Quarterly'
}

export enum DeliveryMethodInvoice {
	Mail = 'Mail',
	Email = 'Email',
	ElectronicInvoice = 'ElectronicInvoice'
}