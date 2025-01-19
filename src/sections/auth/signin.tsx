import { FacebookIcon, GoogleIcon, IconEye, IconHiddenEye } from '@/assets/icons'
import CustomDropDown2 from '@/components/dropdown/custom-dropdown'
import { Link } from '@/navigation'
import { getSignInSchema } from '@/schemas/sign-in-schema'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslations } from 'use-intl'

type FormFields = {
	email: string;
	password: string;
	typeOfUse?: string;
}

export default function SignIn() {
	const t = useTranslations('SigninPage')
	const tSchema = useTranslations('YupSchemas.signinSchema') // To send the translations to the schema
	const schema = getSignInSchema(tSchema)

	const [password, setPassword] = useState({ value: '', isVisible: false })

	const { control, register, handleSubmit, formState: { errors } } = useForm<FormFields>({ resolver: yupResolver(schema) })

	const onFormSubmit = (data: FormFields) => {
		console.log("Form data: ", data)
	}

	const togglePasswordVisibility = () => {
		setPassword(prev => ({ ...prev, isVisible: !prev.isVisible }))
	}
	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value

		if (!password.isVisible) {
			if (value.length < password.value.length) {
				setPassword(prev => ({ ...prev, value: prev.value.slice(0, value.length) }))
			} else {
				setPassword(prev => ({ ...prev, value: prev.value + value.slice(prev.value.length) }))
			}
		} else {
			setPassword(prev => ({ ...prev, value: value }))
		}
	}

	return (
		<div>
			<form onSubmit={handleSubmit(onFormSubmit)} className='gap-6 flex flex-col'>
				<div className="">
					<p className='text-blackC-dark'>{t('title1')}</p>
					<p className='text-blackC-dark'>{t('title2')}<span className='text-primary cursor-pointer'>{t('title3')}</span></p>
				</div>

				{/* email */}
				<div className='gap-y-3 flex flex-col'>
					<p>{t('form.label1')}</p>
					<input
						{...register('email')}
						className='px-8 py-4 font-light w-[317.15px] sm:w-[435px] h-14 border border-secondary rounded-[40px] outline-none'
						placeholder={t('form.placeholder1')}
						type="text"
					/>
					{errors.email && <p className='text-primary'>{errors.email.message}</p>}
				</div>

				{/* type of use */}
				<div className='gap-3 flex flex-col'>
					<p>{t('form.label2')}</p>
					<CustomDropDown2
						options={[t('form.typeOfUseOptions.option1'), t('form.typeOfUseOptions.option2'), t('form.typeOfUseOptions.option3')]}
						borderColor='border-secondary'
					/>
				</div>

				{/* password */}
				<div className='gap-3 flex flex-col'>
					<p>{t('form.label3')}</p>
					<div className="flex justify-between items-center border border-secondary rounded-full w-[317.15px] sm:w-[435px] h-14 px-8 py-4">
						<input
							{...register('password')}
							onChange={e => handlePasswordChange(e)}
							type="text"
							className="font-light outline-none w-[90%]"
							placeholder={t('form.placeholder2')}
							value={password.isVisible ? password.value : '*'.repeat(password.value.length)} // Show original or masked value
						/>
						<span onClick={togglePasswordVisibility} className='w-[18px] h-[18px] text-black cursor-pointer'>
							{password.isVisible ? <IconEye /> : <IconHiddenEye />}
						</span>
					</div>
					{errors.password && <p className='text-primary'>{errors.password.message}</p>}
					<div className="flex items-center justify-between px-4">
						<div className="flex gap-2">
							<input type="checkbox" name="" id="remember-me" />
							<label className='mt-px text-xs font-light cursor-pointer' htmlFor="remember-me">{t('form.remember')}</label>
						</div>
						<Link href='/forget' className="text-xs font-light">{t('form.forgot')}</Link>
					</div>
				</div>

				{/* submit button */}
				<button className='mt-5 font-light text-white w-[317.15px] sm:w-[435px] h-14 bg-secondary rounded-[36px]'>{t('form.button')}</button>
			</form>
			{/* register / login with google / facebook */}
			<div className='mt-7 flex flex-col gap-y-8 items-center'>
				<p className='font-normal text-[#ABABAB]'>{t('or')}</p>
				<div className='flex gap-x-4'>
					{/* google */}
					<div className='flex items-center gap-x-1 sm:gap-x-6 bg-[#F7FFEF] w-[237px] sm:w-[362px] h-14 justify-center rounded-[36px] cursor-pointer'>
						<GoogleIcon />
						<p className='text-[#848483]'>{t('loginWithGoogle')}</p>
					</div>
					{/* facebook */}
					<div className='flex items-center bg-[#F6F6F6] w-14 h-14 justify-center rounded-[36px] cursor-pointer'>
						<FacebookIcon />
					</div>
				</div>
			</div>
		</div>
	)
}
