import * as Yup from 'yup'

export const getSignInSchema = (t: (key: string) => string) => Yup.object().shape({

  email: Yup.string()
    .email(t('emailNotValid'))
    .required(t('emailRequired')),

  password: Yup.string()
    .required(t('passwordRequired'))

})