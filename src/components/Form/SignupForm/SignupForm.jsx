import React from "react";
import { useForm } from "react-hook-form";
import service from "../../appwrite/config.js";
import authService from "../../appwrite/auth.js";
import { Input, PasswordInput, Button } from "../index.js";

const SignupForm = () => {

    const {
        register,
        handleSubmit
    } = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    });

    // Signup with email/password
    const signup = async (data) => {

        try {

            await service.createAccount(data.name, data.email, data.password);

            console.log("Signup successful");

        } catch (error) {

            console.log(error);

        }

    };

    // Google Signup
    const googleSignup = async () => {

        try {

            authService.loginWithGoogle();

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <form onSubmit={handleSubmit(signup)}>

            <div className="w-full max-w-4xl h-80 flex flex-col gap-4 m-auto">

                <h1 className="text-center font-bold text-5xl py-7">
                    Sign Up
                </h1>

                {/* Name */}
                <Input
                    type="text"
                    placeholder="Enter name"
                    className="w-full border border-green-400 rounded-xl px-4 py-4 bg-white outline-none"
                    {...register("name", { required: true })}
                />

                {/* Email */}
                <Input
                    type="email"
                    placeholder="Enter email"
                    className="w-full border border-green-400 rounded-xl px-4 py-4 bg-white outline-none"
                    {...register("email", { required: true })}
                />

                {/* Password */}
                <PasswordInput
                    placeholder="Enter password"
                    className="w-full bg-white outline-none border px-4 py-4 border-green-400 rounded-xl"
                    {...register("password", { required: true })}
                />

                {/* Signup Button */}
                <Button
                    type="submit"
                    className="bg-green-600 text-white rounded-xl px-4 py-4 flex justify-center items-center"
                >
                    Create Account
                </Button>

                {/* Divider */}
                <div className="text-center text-sm text-gray-500">
                    OR
                </div>

                {/* Google Signup */}
                <Button
                    type="button"
                    className="bg-white border border-gray-400 rounded-xl px-4 py-4"
                    onClick={googleSignup}
                >
                    Sign up with Google
                </Button>

            </div>

        </form>
    );
};

export default SignupForm;