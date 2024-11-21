import { ChevronDownIcon, FacebookIcon, GoogleIcon } from '@/assets/icons'
import React from 'react'

export default function SignIn() {
    return (
        <div>
            <form className='gap-y-6 flex flex-col'>
                <div className="">
                    <p className='text-[#5B5B5B]'>If you don’t have an account register</p>
                    <p className='text-[#5B5B5B]'>You can<span className='text-[#F58882] cursor-pointer'>  Register here !</span></p>
                </div>
                {/* email */}
                <div className='gap-y-3 flex flex-col'>
                    <p>Email Address</p>
                    <input className='px-8 py-4 text-base font-light w-[317.15px] sm:w-[435px] h-14 border border-[#47C666] rounded-[40px]' placeholder='Enter your Email Address' type="text" />
                </div>
                {/* type of use */}
                <div className='gap-y-3 flex flex-col'>
                    <p>Type of Use</p>
                    <div className='relative'>
                        <select className='appearance-none px-8 py-4 text-base font-light text-[#ACACAC] w-[317.15px] sm:w-[435px] h-14 border border-[#47C666] rounded-[40px]'>
                            <option className='' value="visitor">visitor</option>
                            <option className='' value="visitor">visitor</option>
                            <option className='' value="visitor">visitor</option>
                        </select>
                        <div className='absolute z-10 top-5 right-10 pointer-events-none '>
                            <ChevronDownIcon />
                        </div>
                    </div>
                </div>
                {/* password */}
                <div className='gap-y-3 flex flex-col'>
                    <p>Password</p>
                    <input className='px-8 py-4 text-base font-light w-[317.15px] sm:w-[435px] h-14 border border-[#47C666] rounded-[40px]' placeholder='Enter your Password' type="text" />
                    <div className='flex items-center justify-between'>
                        <div className="flex items-center gap-x-1">
                            <input type="checkbox" id='remember-password' />
                            <label htmlFor='remember-password' className='text-xs font-light hover:underline cursor-text'>Rememebr me</label>
                        </div>
                        <span className='text-xs font-light cursor-text hover:underline'>Forgot Password ?</span>
                    </div>
                </div>
                {/* submit button */}
                <button
                    className='mt-5 text-base font-light text-white w-[317.15px] sm:w-[435px] h-14 bg-[#47C666] rounded-[36px]'
                >Login</button>
            </form>
            {/* register / login with google / facebook */}
            <div className='mt-7 flex flex-col gap-y-8 items-center'>
                <p className='text-base font-normal text-[#ABABAB]'>OR</p>
                <div className='flex gap-x-4'>
                    {/* google */}
                    <div className='flex items-center gap-x-1 sm:gap-x-6 bg-[#F7FFEF] w-[237px] sm:w-[362px] h-14 justify-center rounded-[36px] cursor-pointer'>
                        <GoogleIcon />
                        <p className='text-base text-[#848483]'>Login with Google</p>
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
