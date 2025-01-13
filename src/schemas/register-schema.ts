import * as Yup from 'yup'

export const getRegisterSchema = (t: (key: string) => string) => Yup.object().shape({
  
  email: Yup.string()
    .email(t('emailNotValid'))
    .required(t('emailRequired')),

  password: Yup.string()
    .required(t('passwordRequired'))
    .min(8, t('passwordMin'))
    .matches(/[a-z]/, t('passwordSmallLetter'))
    .matches(/[A-Z]/, t('passwordCapitalLetter'))
    .matches(/\d*/, t('passwordDigit')),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], t('confirmPasswordMatch'))
    .required(t('confirmPasswordRequired')),

  consent: Yup.boolean()
    .oneOf([true], t('consentRequired')),
    
})
