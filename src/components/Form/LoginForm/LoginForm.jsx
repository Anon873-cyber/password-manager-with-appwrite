import React from 'react'
import { useForm } from 'react-hook-form'
import service from '../../../appwrite/config.js'
import authService from '../../../appwrite/auth.js'
import { Input, PasswordInput, Button } from '../../index.js'
import loginStore from '../../../features/LoginStore.js'

const LoginForm = () => {

    const {
        register,
        handleSubmit
    } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    })

    // Email/password login
    const login = async (data) => {
        try {

            await service.login(data.email, data.password)
            
            console.log("Login successful")

        } catch (error) {

            console.log(error)

        }
    }

    // Google login
    const googleLogin = async () => {

        try {

            authService.loginWithGoogle()

        } catch (error) {

            console.log(error)

        }

    }

    return (

        <form onSubmit={handleSubmit(login)}>

            <div className="w-full max-w-4xl  h-72  flex flex-col  gap-4 m-auto ">

                <h1 className=" text-center font-bold text-5xl py-7">
                    
                  Login
                </h1>

                {/* Email */}
                <Input
                    type="email"
                    placeholder="Enter email"
                    className="w-full border border-green-400 rounded-xl px-4 py-4 bg-white outline-none "
                    {...register("email", { required: true })}
                />

                {/* Password */}
                <PasswordInput
                    placeholder="Enter password"
                    className="w-full  bg-white outline-none border px-4 py-4 border-green-400"
                    {...register("password", { required: true })}
                />

                {/* Login Button */}
                <Button
                    type="submit"
                    className="bg-green-600 text-white rounded-xl px-4 py-4 flex justify-center items-center"
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            width="24"
                            height="24"
                            viewBox="0 0 256 256"
                            xmlSpace="preserve"
                        >
                            <g
                                style={{
                                    stroke: "none",
                                    strokeWidth: 0,
                                    fill: "none",
                                    opacity: 1,
                                }}
                                transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                            >
                                <path
                                    d="M 36.137 34.78 c -9.589 0 -17.39 -7.801 -17.39 -17.39 C 18.747 7.801 26.548 0 36.137 0 s 17.39 7.801 17.39 17.39 C 53.527 26.979 45.726 34.78 36.137 34.78 z M 36.137 7 c -5.729 0 -10.39 4.661 -10.39 10.39 s 4.661 10.39 10.39 10.39 s 10.39 -4.661 10.39 -10.39 S 41.866 7 36.137 7 z"
                                    fill="currentColor"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M 11.721 90 c -1.933 0 -3.5 -1.567 -3.5 -3.5 V 61.756 c 0 -11.14 9.063 -20.203 20.203 -20.203 h 15.427 c 6.92 0 13.29 3.505 17.039 9.375 c 1.084 1.698 1.904 3.539 2.438 5.471 c 0.516 1.862 -0.577 3.791 -2.44 4.306 c -1.86 0.519 -3.791 -0.576 -4.306 -2.44 c -0.349 -1.258 -0.884 -2.459 -1.593 -3.568 c -2.456 -3.847 -6.62 -6.143 -11.138 -6.143 H 28.424 c -7.28 0 -13.203 5.923 -13.203 13.203 V 86.5 C 15.221 88.433 13.654 90 11.721 90 z"
                                    fill="currentColor"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M 60.554 90 c -1.933 0 -3.5 -1.567 -3.5 -3.5 v -2.236 c 0 -1.933 1.567 -3.5 3.5 -3.5 s 3.5 1.567 3.5 3.5 V 86.5 C 64.054 88.433 62.486 90 60.554 90 z"
                                    fill="currentColor"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M 33.663 68.741 l 8.515 -8.515 c 1.367 -1.367 3.582 -1.367 4.949 0 c 1.367 1.366 1.367 3.583 0 4.949 l -2.54 2.54 h 33.693 c 1.933 0 3.5 1.567 3.5 3.5 s -1.567 3.5 -3.5 3.5 H 44.586 l 2.541 2.541 c 1.367 1.367 1.367 3.583 0 4.949 c -0.684 0.684 -1.579 1.025 -2.475 1.025 s -1.792 -0.342 -2.475 -1.025 l -8.515 -8.516 C 32.295 72.323 32.295 70.107 33.663 68.741 z"
                                    fill="currentColor"
                                    strokeLinecap="round"
                                />
                            </g>
                        </svg>
                    }

                >
                    Login
                </Button>

                {/* Divider */}
                <div className="text-center text-sm text-gray-500 ">
                    OR
                </div>


                {/* Google Login */}
                <Button
                    type="button"
                    className="bg-white border border-gray-400 rounded-xl px-4 py-4"

                    onClick={googleLogin}

                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="43" height="20" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" id="google">
                        <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path>
                        <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path>
                        <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path>
                        <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path>
                    </svg>}
                >
                    Login with Google
                </Button>

            </div>

        </form>

    )
}

export default LoginForm
