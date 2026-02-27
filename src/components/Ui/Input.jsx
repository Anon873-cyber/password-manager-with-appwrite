import React from 'react'
import { forwardRef } from 'react'

const Input = ({ label, text="text", className, ...props }, ref) => {
    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1  pl-1'>{label}</label>}
            <input type={text} {...props} className={className} ref={ref} />
        </div>
    )
}

export default forwardRef(Input)

