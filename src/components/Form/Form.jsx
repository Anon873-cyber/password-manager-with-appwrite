import React from 'react'
import { useState } from 'react';
import service from '../../appwrite/config';

const Form = ({ post }) => {

    const { register, handleSubmit } = useForm({

        defaultValues: {
            siteName: post?.siteName || '',
            url: post?.url || '',
            password: post?.password || '',
            notes: post?.notes || ''

        }

    });

    //handle submit function 
    const submit = async (data) => {

        if (post) {
            await service.updatePassword(data.$id, { ...data })
        } else {
            await service.deletePassword(data.$id)
        }
    }

    return (

        <form onSubmit={handleSubmit(submit)} >
            <div className='flex flex-wrap'>

            </div>
        </form>
    )
}

export default Form



