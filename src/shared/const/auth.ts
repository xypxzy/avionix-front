import {IRegisterStep} from "@/src/shared/types/auth";

export const STEPS: IRegisterStep[] = [
  {
    id: 1,
    fields: ['email', 'phone', 'password', 'confirmPassword'],
  },
  {
    id: 2,
    fields: ['firstName', 'lastName', 'gender'],
  },
  {
    id: 3,
    fields: [
      'dateOfBirth',
      'nationality',
      'passportId',
      'passportExpiryDate',
      'agreedToTermsOfUse',
    ],
  },
  {
    id: 4,
    fields: []
  }
]
