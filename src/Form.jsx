import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useMutation } from '@tanstack/react-query';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  Name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(), 

  subject: yup.string()
    .required("Subject is required")
    .min(4, "Subject must be at least 4 characters")
    .max(20, "Subject cannot be longer than 20 characters"),
  message: yup.string().required()
});

function Form() {
  const [showAlert, setShowAlert] = useState(false);
  const { register, handleSubmit, formState: { errors, isValid, isDirty }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  const mutation = useMutation({
    mutationFn: data => {
      return fetch('https://appsail-50021259031.development.catalystappsail.in/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
      });
    }
  });
  const onSubmit = (data) => { 
     console.log(data);
    mutation.mutate({

        Name: data.Name,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
      
    }, {
      onSuccess: () => {
        reset();
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
      },
      onError: (error) => {
        console.error('Error:', error);
      }
    });
  };
  return (
    <>
      {showAlert && (
        <div className='fixed inset-0 flex items-center justify-center z-50 bg-black/20'>
          <div className='bg-cyan-900 rounded-lg p-5'>
            <p className='text-center text-white'>Successfully form Submitted</p>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)} name="form-content" className='w-full'>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
          <div>
            <input {...register('Name')} type="text" placeholder="Your Name" className=" w-full p-3 bg-cyan-50  rounded-lg border-2 border-cyan-500" />
            {errors.Name && <p className='from-gray-950 mb-2'>{errors.Name.message}</p>}
          </div>
          <div>
            <input {...register('email')} type="email" placeholder="Your Email" className=" w-full p-3 bg-cyan-50  rounded-lg border-2 border-cyan-500" />
            {errors.email && <p className='from-gray-950 mb-2'>{errors.email.message}</p>}
          </div>
          <div>
            <input {...register('phone')} type="tel" placeholder="Your Phone" className=" w-full p-4 bg-cyan-50  rounded-lg border-2 border-cyan-500" />
            {errors.phone && <p className='from-gray-950 mb-2'>{errors.phone.message}</p>}
          </div>
          <div>
            <input {...register('subject')} type="text" placeholder="Your Subject" className=" w-full p-4 bg-cyan-50 rounded-lg mb-5 border-2 border-cyan-500" />
            {errors.subject && <p className='from-gray-950 mb-2'>{errors.subject.message}</p>}
          </div>
        </div>
        <textarea {...register('message')} className=" w-full p-2 bg-cyan-50  xl:mt-3 rounded-lg border-2 border-cyan-500" cols="65" rows="8" placeholder="Start writing message here"></textarea>
        {errors.message && <p className='from-gray-950 mb-2'>{errors.message.message}</p>}
        <input type="submit" className={`mb-3 mt-4 py-3 px-3 rounded-lg xl:mx-auto font-semibold border-2  text-black bg-cyan-100 border-gray-500 ${isValid && isDirty ? 'bg-cyan-700 hover:bg-cyan-600  text-white' : 'bg-cyan-300 cursor-not-allowed'}`} value={"Submit Me"} disabled={!isValid && !isDirty} />
      </form>
    </>
  );
}

export default Form;
