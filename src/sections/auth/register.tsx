import { ChevronDownIcon, FacebookIcon, GoogleIcon, IconEye, IconHiddenEye } from '@/assets/icons'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { getRegisterSchema } from '@/schemas/register-schema'
import { useTranslations } from 'next-intl'
import CustomDropDown2 from '@/components/dropdown/custom-dropdown'

type FormFields = {
	email: string;
	password: string;
	confirmPassword: string;
	typeOfUse?: string;
	gender?: string;
	consent?: boolean;
}

export default function Register() {
	const t = useTranslations()
	const tSchema = useTranslations('YupSchemas.registerSchema') // to send the translations to the schema
	const schema = getRegisterSchema(tSchema)

	const [password, setPassword] = useState({ value: '', isVisible: false })
	const [confirmPassword, setConfirmPassword] = useState({ value: '', isVisible: false })

	const { control, register, handleSubmit, formState: { errors } } = useForm<FormFields>({ resolver: yupResolver(schema) })

	const onFormSubmit = (data: FormFields) => {
		console.log('Form data: ', data)
	}

	// Handle password change: Update original and masked value
	const togglePasswordVisibility = () => {
		setPassword(prev => ({ ...prev, isVisible: !prev.isVisible }));
	};
	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;

		if (!password.isVisible) {
			if (value.length < password.value.length) {
				setPassword((prev) => ({ ...prev, value: prev.value.slice(0, value.length) }));
			} else {
				setPassword((prev) => ({ ...prev, value: prev.value + value.slice(prev.value.length) }));
			}
		} else {
			setPassword(prev => ({ ...prev, value: value }));
		}
	};


	// handle confirm password visibility
	const toggleConfirmPasswordVisibility = () => {
		setConfirmPassword(prev => ({ ...prev, isVisible: !prev.isVisible }));
	};
	const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const valueC = e.target.value;

		if (!confirmPassword.isVisible) {
			if (valueC.length < confirmPassword.value.length) {
				setConfirmPassword((prev) => ({ ...prev, value: prev.value.slice(0, valueC.length) }));
			} else {
				setConfirmPassword((prev) => ({ ...prev, value: prev.value + valueC.slice(prev.value.length) }));
			}
		} else {
			setConfirmPassword(prev => ({ ...prev, value: valueC }));
		}
	};

	return (
		<div className='md:w-[440]'>
			<form onSubmit={handleSubmit(onFormSubmit)} className='gap-y-6 flex flex-col'>

				<div>
					<p className='text-blackC-dark'>If you already have an account login here </p>
					<p className='text-blackC-dark'>You can<span className='text-secondary cursor-pointer'> login here !</span></p>
				</div>

				{/* Type of Use */}
				<div className='gap-y-3 flex flex-col'>
					<p>Type of Use</p>
					<div className='relative'>
						<select {...register('typeOfUse')} className='appearance-none px-8 py-4 font-light text-[#ACACAC] w-[317.15px] sm:w-[435px] h-14 border border-primary rounded-full outline-none'>
							<option value="visitor">visitor</option>
							<option value="salonOwner">salon owner</option>
							<option value="admin">admin</option>
						</select>
						<div className='absolute top-5 right-10 pointer-events-none '>
							<ChevronDownIcon />
						</div>
					</div>
					{errors.typeOfUse && <p className='text-primary'>{errors.typeOfUse.message}</p>}
				</div>

				{/* Email */}
				<div className='gap-3 flex flex-col'>
					<p>Email Address</p>
					<input
						{...register('email')}
						className='px-8 py-4  font-light w-[317.15px] sm:w-[435px] h-14 border border-primary rounded-full outline-none'
						placeholder='Enter your Email Address'
						type="text"
					/>
					{errors.email && <p className='text-primary'>{errors.email.message}</p>}
				</div>

				{/* Password */}
				<div className='gap-3 flex flex-col'>
					<p>Password</p>
					<div className="flex justify-between items-center border border-primary rounded-full w-[317.15px] sm:w-[435px] h-14 px-8 py-4">
						<Controller
							name="password"
							control={control}
							render={({ field }) => (
								<input
									{...field}
									className="font-light outline-none w-[90%]"
									placeholder="Enter your Password"
									// onKeyDown={handlePasswordKeyDown}
									onChange={e => {
										handlePasswordChange(e)
										field.onChange(e)
									}}
									value={password.isVisible ? password.value : '*'.repeat(password.value.length)} // Show original or masked value
									type="text"
								/>
							)}
						/>
						<span onClick={togglePasswordVisibility} className='w-[18px] h-[18px] text-black cursor-pointer'>
							{password.isVisible ? <IconEye /> : <IconHiddenEye />}
						</span>
					</div>
					{errors.password && <p className='text-primary'>{errors.password.message}</p>}
				</div>


				{/* Confirm Password */}
				<div className='gap-3 flex flex-col'>
					<p>confirm password</p>
					<div className="flex justify-between items-center border border-primary rounded-full w-[317.15px] sm:w-[435px] h-14 px-8 py-4">
						<Controller
							name="confirmPassword"
							control={control}
							render={({ field }) => (
								<input
									{...field}
									className="font-light outline-none w-[90%]"
									placeholder="Enter your Password to confirm"
									onChange={e => {
										handleConfirmPasswordChange(e)
										field.onChange(e)
									}}
									value={confirmPassword.isVisible ? confirmPassword.value : '*'.repeat(confirmPassword.value.length)} // Show original or masked value
									type="text"
								/>
							)}
						/>
						<span onClick={toggleConfirmPasswordVisibility} className='w-[18px] h-[18px] text-black cursor-pointer'>
							{confirmPassword.isVisible ? <IconEye /> : <IconHiddenEye />}
						</span>
					</div>
					{errors.confirmPassword && <p className='text-primary'>{errors.confirmPassword.message}</p>}
				</div>

				{/* Gender */}
				{/* <div className='gap-3 flex flex-col'>
					<p>Choose your gender</p>
					<div className='relative'>
						<select
							{...register('gender')}
							className='appearance-none px-8 py-4 font-light text-[#ACACAC] w-[317.15px] sm:w-[435px] h-14 border border-primary rounded-full outline-none'
						>
							<option value="Man">Man</option>
							<option value="Woman">Woman</option>
						</select>
						<div className='absolute top-5 right-10 pointer-events-none '>
							<ChevronDownIcon />
						</div>
					</div>
					{errors.gender && <p className='text-primary'>{errors.gender.message}</p>}
				</div> */}
				<div className="flex flex-col gap-3">
					<h6>Choose your gender</h6>
					<CustomDropDown2 options={['man', 'woman']} />
				</div>

				{/* Consent */}
				<div className='hidden gap-x-2 sm:flex items-start'>
					<input {...register('consent')} className='mt-1 cursor-pointer w-[18px] h-[18px]' type="checkbox" id='consent' />
					<label className='max-w-[398px] hover:underline cursor-pointer font-light ' htmlFor='consent'>By registering on the site, I read and approve the rules and regulations. me</label>
					{errors.consent && <p className='text-primary'>{errors.consent.message}</p>}
				</div>

				{/* Submit Button */}
				<button className='mt-8 sm:mt-0  font-light text-white w-[317.15px] sm:w-[435px] h-14 bg-primary rounded-[36px]'>Register</button>
			</form>

			{/* Register/Login with Google or Facebook */}
			<div className='mt-7 flex flex-col gap-y-8 items-center'>
				<p className=' font-normal text-[#ABABAB]'>OR</p>
				<div className='flex gap-x-4'>
					{/* Google */}
					<div className='flex items-center gap-x-1 sm:gap-x-6 bg-[#FFF4F2] w-[237px] sm:w-[362px] h-14 justify-center rounded-[36px] cursor-pointer'>
						<GoogleIcon />
						<p className=' text-[#848483]'>Register with Google</p>
					</div>
					{/* Facebook */}
					<div className='flex items-center gap-x-1 sm:gap-x-6 bg-[#F6F6F6] w-14 h-14 justify-center rounded-[36px] cursor-pointer'>
						<FacebookIcon />
					</div>
				</div>
			</div>
		</div>
	)
}
