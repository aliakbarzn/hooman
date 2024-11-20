import { ChevronDownIcon, FacebookIcon, GoogleIcon } from '@/assets/icons'
import React from 'react'

export default function Register() {
    return (
        <div>
            <form className='gap-y-6 flex flex-col'>
                <div className="">
                    <p className='text-[#5B5B5B]'>If you already have an account login here </p>
                    <p className='text-[#5B5B5B]'>You can<span className='text-[#47C666] cursor-pointer'> login here !</span></p>
                </div>
                {/* type of use */}
                <div className='gap-y-3 flex flex-col'>
                    <p>Type of Use</p>
                    <div className='relative'>
                        <select className='appearance-none px-8 py-4 text-base font-light text-[#ACACAC] w-[317.15px] sm:w-[435px] h-14 border border-[#F58882] rounded-[40px]'>
                            <option className='' value="visitor">visitor</option>
                            <option className='' value="visitor">visitor</option>
                            <option className='' value="visitor">visitor</option>
                        </select>
                        <div className='absolute z-10 top-5 right-10 pointer-events-none '>
                            <ChevronDownIcon />
                        </div>
                    </div>
                </div>
                {/* email */}
                <div className='gap-y-3 flex flex-col'>
                    <p>Email Address</p>
                    <input className='px-8 py-4 text-base font-light w-[317.15px] sm:w-[435px] h-14 border border-[#F58882] rounded-[40px]' placeholder='Enter your Email Address' type="text" />
                </div>
                {/* password */}
                <div className='gap-y-3 flex flex-col'>
                    <p>Password</p>
                    <input className='px-8 py-4 text-base font-light w-[317.15px] sm:w-[435px] h-14 border border-[#F58882] rounded-[40px]' placeholder='Enter your Password' type="text" />
                </div>
                {/* repeat password */}
                <div className='gap-y-3 flex flex-col'>
                    <p>Password</p>
                    <input className='px-8 py-4 text-base font-light w-[317.15px] sm:w-[435px] h-14 border border-[#F58882] rounded-[40px]' placeholder='re-Enter your Password' type="text" />
                </div>
                {/* choose gender */}
                <div className='gap-y-3 flex flex-col'>
                    <p>Choose your gender</p>
                    <div className='relative'>
                        <select className='appearance-none px-8 py-4 text-base font-light text-[#ACACAC] w-[317.15px] sm:w-[435px] h-14 border border-[#F58882] rounded-[40px]'>
                            <option value="Man">Man</option>
                            <option value="Woman">Woman</option>
                        </select>
                        <div className='absolute z-10 top-5 right-10 pointer-events-none '>
                            <ChevronDownIcon />
                        </div>
                    </div>
                </div>
                {/* consent */}
                <div className='hidden gap-x-2 sm:flex items-start'>
                    <input className='mt-1 cursor-pointer w-[18px] h-[18px]' type="checkbox" id='consent' />
                    <label className='hover:underline cursor-text font-light text-base' htmlFor='consent'>By registering on the site, I read and approve the rules and regulations. me</label>
                </div>
                {/* submit button */}
                <button
                    className='text-base font-light text-white w-[317.15px] sm:w-[435px] h-14 bg-[#F58882] rounded-[36px]'
                >Register</button>
            </form>
            {/* register / login with google / facebook */}
            <div className='mt-7 flex flex-col gap-y-8 items-center'>
                <p className='text-base font-normal text-[#ABABAB]'>OR</p>
                <div className='flex gap-x-4'>
                    {/* google */}
                    <div className='flex items-center gap-x-6 bg-[#FFF4F2] w-[237px] sm:w-[362px] h-14 justify-center rounded-[36px] cursor-pointer'>
                        <GoogleIcon />
                        <p className='text-[#848483]'>Register with Google</p>
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
