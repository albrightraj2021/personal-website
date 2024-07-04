import React from 'react';
import { useForm } from "react-hook-form";
import { useMutation } from 'react-query';

function Form4() {
    const { register, handleSubmit, formState: { errors, isValid, isDirty }, reset } = useForm();

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
                        <input {...register('Name', { required: 'Name is required' })} type="text" placeholder="Your Name" className="form-input w-full p-3 bg-cyan-50 rounded-lg border-2 border-cyan-500" />
                        {errors.Name && <p className='text-red-500'>{errors.Name.message}</p>}
                    </div>
                    <div>
                        <input {...register('email', { required: 'Enter the Mail address' })} type="email" placeholder="Your Email" className="form-input w-full p-3 bg-cyan-50 rounded-lg border-2 border-cyan-500" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div>
                        <input {...register('phone', { required: 'Enter the Phone' })} type="tel" placeholder="Your Phone" className="form-input w-full p-4 bg-cyan-50 rounded-lg border-2 border-cyan-500" />
                        {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
                    </div>
                    <div>
                        <input {...register('subject', { required: 'Enter the subject' })} type="text" placeholder="Your Subject" className="form-input w-full p-4 bg-cyan-50 rounded-lg mb-5 border-2 border-cyan-500" />
                        {errors.subject && <p className='text-red-500'>{errors.subject.message}</p>}
                    </div>
                </div>
                <textarea {...register('message', { required: 'Enter the Message' })} className="w-full p-2 bg-cyan-50 xl:mt-3 rounded-lg border-2 border-cyan-500" cols="65" rows="8" placeholder="Start writing message here"></textarea>
                {errors.message && <p className='text-red-500'>{errors.message.message}</p>}
                <input type="submit" className={`mb-3 mt-4 py-3 px-3 rounded-lg xl:mx-auto font-semibold text-white border-2 border-gray-500 ${isValid && isDirty ? 'bg-cyan-700 hover:bg-cyan-600' : 'bg-cyan-300 cursor-not-allowed'}`} value={"Submit Me"} disabled={!isValid && !isDirty} />
            </form>
        </div>
    );
}

export default Form4;