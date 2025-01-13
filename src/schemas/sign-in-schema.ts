import * as Yup from 'yup'

export const getSignInSchema = (t: (key: string) => string) => Yup.object().shape({

  email: Yup.string()
    .email('emailNotValid')
    .required('emailRequired'),

  password: Yup.string()
  .required('passwordRequired')

})