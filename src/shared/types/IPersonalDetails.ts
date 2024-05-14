export interface IPersonalDetails {
    firstName?: string
    lastName?: string
    gender?: string
    dateOfBirth?: string
    nationality?: string
    passportId?: string
    passportExpiryDate?: string
    id?: string
    email?: string
    phone?: string
    imageUrl?: string
    agreedToTermsOfUse?: boolean
}

export interface PersonalDetailsProps {
    userInfo: IPersonalDetails
}