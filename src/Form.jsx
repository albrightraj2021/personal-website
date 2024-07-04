import React from 'react'
import { useForm } from "react-hook-form";
function Form() {
    const { register, handleSubmit, formState: { errors, isValid, isDirty }, reset } = useForm();

    const onsubmit = (data) => {
        console.log(data)
        reset()
        alert('Form Submitted Successfully')

    }
    return (
        <>
            
                <form onSubmit={handleSubmit(onsubmit)}>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                        <div>
                            <input {...register('Name', { required: 'Name is required' })} type="text" placeholder="Your Name" className="form-input w-full p-3 bg-cyan-50  rounded-lg border-2 border-cyan-500" />
                            {errors.Name && <p className='from-gray-950'>{errors.Name.message}</p>}
                        </div>
                        <div>
                            <input {...register('email', { required: "Enter the Mail address" })} type="email" placeholder="Your Email" className="form-input w-full p-3 bg-cyan-50  rounded-lg border-2 border-cyan-500" />
                            {errors.email && <p className='from-gray-950'>{errors.email.message}</p>}
                        </div>
                        <div>
                            <input {...register('phone', { required: "Enter the Phone" })} type="tel" placeholder="Your Phone" className="form-input w-full p-4 bg-cyan-50  rounded-lg border-2 border-cyan-500" />
                            {errors.phone && <p className='from-gray-950'>{errors.phone.message}</p>}
                        </div>
                        <div>
                            <input {...register('subject', { required: "Enter the subject" })} type="text" placeholder="Your Subject" className="form-input w-full p-4 bg-cyan-50 rounded-lg mb-5 border-2 border-cyan-500" />
                            {errors.subject && <p className='from-gray-950'>{errors.subject.message}</p>}
                        </div>
                    </div>
                    <textarea {...register('message', { required: "Enter the Message" })} className=" w-full p-2 bg-cyan-50  xl:mt-3 rounded-lg border-2 border-cyan-500" cols="65" rows="8" placeholder="Start writing message here"></textarea>
                    {errors.message && <p className='from-gray-950'>{errors.message.message}</p>}
                    <input type="submit" className={`mb-3 mt-4 py-3 px-3 rounded-lg xl:mx-auto font-semibold text-white border-2 border-gray-500  ${isValid && isDirty ? 'bg-cyan-700 hover:bg-cyan-600' : 'bg-cyan-300 cursor-not-allowed'}`} value={"Submit Me"} disabled={!isValid &&!isDirty} />
                </form>
         
        </>
    )
}

export default Form