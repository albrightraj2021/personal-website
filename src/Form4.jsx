import React from 'react';
import { useForm } from "react-hook-form";
import { useMutation } from 'react-query';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
const schema = yup.object().shape({
    Name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string()
    .matches(/^\+\d{1,3}\s\d{1,14}$/, { message: `Invalid phone Number(Eg:+91 9876543210)`, excludeEmptyString: true })
    .required("Phone number is required"),
  subject: yup.string()
    .required("Subject is required")
    .min(4, "Subject must be at least 4 characters")
    .max(20, "Subject cannot be longer than 20 characters"),
    message: yup.string().required()
})
function Form4() {
    const { register, handleSubmit, formState: { errors, isValid, isDirty }, reset } = useForm(
        {
            resolver: yupResolver(schema)
           }  
    );

    const mutation = useMutation(
        (formData) => {
            return fetch('https://script.google.com/macros/s/AKfycbyxDjKRisupv5SUOX3c3w_RHUVeSNQR2h31CGYQNBtTUe4ZJ3DElB_gfcPpredyejiV/exec', {
                method: 'POST',
                body: formData,
            });
        },
        {
            onSuccess: () => {
                alert('Form Submitted Successfully');
                reset();
            },
            onError: (error) => {
                console.error('Error!', error.message);
                alert('Failed to submit the form. Please try again.');
            },
        }
    );

    const onSubmit = (data) => {
        const formData = new FormData();
        for (const key in data) {
            formData.append(key, data[key]);
        }
        mutation.mutate(formData);
    };

    return (
        <div className="form-container xl:ml-20 xl:w-6/12 ml-1 w-9/12">
            <form onSubmit={handleSubmit(onSubmit)} name="form-content">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                  <div>
                    <input {...register('Name')} type="text" placeholder="Your Name" className="form-input w-full p-3 bg-cyan-50  rounded-lg border-2 border-cyan-500" />
                    {errors.Name && <p className='from-gray-950'>{errors.Name.message}</p>}
                  </div>
                  <div>
                    <input {...register('email')} type="email" placeholder="Your Email" className="form-input w-full p-3 bg-cyan-50  rounded-lg border-2 border-cyan-500" />
                    {errors.email && <p className='from-gray-950'>{errors.email.message}</p>}
                  </div>
                  <div>
                    <input {...register('phone')} type="tel" placeholder="Your Phone" className="form-input w-full p-4 bg-cyan-50  rounded-lg border-2 border-cyan-500" />
                    {errors.phone && <p className='from-gray-950'>{errors.phone.message}</p>}
                  </div>
                  <div>
                    <input {...register('subject')} type="text" placeholder="Your Subject" className="form-input w-full p-4 bg-cyan-50 rounded-lg mb-5 border-2 border-cyan-500"  />
                    {errors.subject && <p className='from-gray-950'>{errors.subject.message}</p>}
                  </div>
                </div>
                <textarea {...register('message')} className=" w-full p-2 bg-cyan-50  xl:mt-3 rounded-lg border-2 border-cyan-500" cols="65" rows="8" placeholder="Start writing message here"></textarea>
                {errors.message && <p className='from-gray-950'>{errors.message.message}</p>}
                <input type="submit" className={`mb-3 mt-4 py-3 px-3 rounded-lg xl:mx-auto font-semibold text-white border-2 border-gray-500 ${isValid && isDirty ? 'bg-cyan-700 hover:bg-cyan-600' : 'bg-cyan-300 cursor-not-allowed'}`} value={"Submit Me"} disabled={!isValid && !isDirty} />
            </form>
        </div>
    );
}

export default Form4;
