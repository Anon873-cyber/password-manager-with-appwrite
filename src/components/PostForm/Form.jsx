import React from 'react'
import { useForm } from 'react-hook-form'
import service from '../../appwrite/config.js'
import { Input,PasswordInput, Button } from '../index.js'

const Form = ({ post }) => {

    const { register, handleSubmit } = useForm({
        defaultValues: {
            siteName: post?.siteName||'',
            url: post?.url || '',
            username: post?.username||'',
            password: post?.password||'',
            notes: post?.notes||''
        }
    })

    // submit function
    const submit = async (data) => {

        try {

            if (post) {
                // update existing password
                await service.updatePassword(post.$id, data)
            } else {
                // create new password
                await service.createPassword(data)
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (

        <form onSubmit={handleSubmit(submit)}>

            <div className="w-full max-w-2xl mx-auto flex flex-col gap-6">
                <h1>sdsdsdsadasdsadsa</h1>

                {/* Website URL */}
               <Input
                    text="text"
                    placeholder="Enter site name"
                    className="w-full border border-green-400 rounded-xl outline-none px-4 py-2.5 text-sm sm:text-base"
                    {...register("url", { required: true })}
                /> 
                {/* Username + Password row */}
                <div className="flex flex-col sm:flex-row gap-4">

                    {/* Username */}
                 <Input
                        text="text"
                        placeholder="Enter Username"
                        className="flex-1 border border-green-400 rounded-xl outline-none px-4 py-2.5 text-sm sm:text-base"
                        {...register("username", { required: true })}
                    /> 

                    {/* Password */}
                     <PasswordInput
                         placeholder="Enter password"
                         className="flex-1"
                         {...register("password", { required: true })} 
                     /> 

                </div>

                {/* notes */}
             <Input
                    text="text"
                    placeholder="Enter notes"
                    className="w-full border border-green-400 rounded-xl outline-none px-4 py-2.5 text-sm sm:text-base"
                    {...register("notes", { required: true })}
                /> 

                {/* Submit button */}
                 <Button type="submit" classname="bg-green-600 text-nowrap font-medium border border-green-950 rounded-xl p-2">
                    {post ? "Update Password" : "Save Password"}
                </Button>

            </div>

        </form>
    )
}

export default Form