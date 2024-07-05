import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useState } from 'react'
const schema = yup.object().shape({
  Name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string()
    .matches(/^\+\d{1,3}\s\d{1,14}$/, { message: "Invalid phone number", excludeEmptyString: true })
    .required("Phone number is required"),
  subject: yup.string()
    .required("Subject is required")
    .min(4, "Subject must be at least 4 characters")
    .max(20, "Subject cannot be longer than 20 characters"),
  message: yup.string().required()
})
function Form() {
  const [formdata, setFormdata] = useState([{}])
  const { register, handleSubmit, formState: { errors, isValid, isDirty }, reset } = useForm(
    {
      resolver: yupResolver(schema)
    }
  );

  const onsubmit = (data) => {
    console.log(data)
    setFormdata(data)
    reset()
  }


  return (
    <>
      <form onSubmit={handleSubmit(onsubmit)}>

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
            <input {...register('subject')} type="text" placeholder="Your Subject" className="form-input w-full p-4 bg-cyan-50 rounded-lg mb-5 border-2 border-cyan-500" />
            {errors.subject && <p className='from-gray-950'>{errors.subject.message}</p>}
          </div>
        </div>
        <textarea {...register('message')} className=" w-full p-2 bg-cyan-50  xl:mt-3 rounded-lg border-2 border-cyan-500" cols="65" rows="8" placeholder="Start writing message here"></textarea>
        {errors.message && <p className='from-gray-950'>{errors.message.message}</p>}
        <input type="submit" className={`mb-3 mt-4 py-3 px-3 rounded-lg xl:mx-auto font-semibold text-white border-2 border-gray-500 ${isValid && isDirty ? 'bg-cyan-700 hover:bg-cyan-600' : 'bg-cyan-300 cursor-not-allowed'}`} value={"Submit Me"} disabled={!isValid && !isDirty} />
      </form>
      {/* {formdata.Name && <div className='bg-white text-black border-2 rounded-lg pt-3 pl-5'>
        {formdata.Name && <p>Form Submitted Successfully</p>}
        {formdata.Name && <p>Your Name:{formdata.Name}</p>}
        {formdata.email && <p>Your Email:{formdata.email}</p>}
        {formdata.phone && <p>Your Phone:{formdata.phone}</p>}
        {formdata.subject && <p>Your Subject:{formdata.subject}</p>}
        {formdata.message && <p>Your Message:{formdata.message}</p>}
      </div>} */}
    </>
  )
}

export default Form