import AboutImg from './assets/img/about-img.jpg';
import Signature from './assets/img/signature.png';

export default function About() {
  return (
    <>
      <div id="About">
        <div className='xl:flex flex-1'>
          <div className='xl:w-9/12 xl:ml-14 my-18 mt-24 mb-14 w-5/6 ml-8 mx-0'>
            <img src={AboutImg} alt="about" className='xl:w-auto' />
          </div>
          <div className='xl:mt-32 mr-12'>
            <p className='xl:text-4xl font-semibold text-3xl ml-7'>ABOUT ME</p>
            <p className='text-3xl font-semibold text-cyan-800 mt-4 pl-7'>Creating Websites That Drive Success</p>
            <p className='mt-4 xl:ml-6  ml-8 text-xl'>
            I'm Albright Raj, a passionate web designer dedicated to crafting visually appealing and highly functional websites. With a keen eye for detail and a focus on user experience.
           
            </p>
            <hr className='border-1 dark:bg-gray-700 mt-4 ml-6' />
            <div className='grid xl:grid-cols-4 pt-5 pl-4 grid-cols-2 ml-6 gap-x-0 break-all'>
              <div className='font-medium text-xl p-2 py-4'>Name</div>
              <div className='text-lg  p-2 py-4'>Albright Raj S J</div>
              <div className='font-medium text-xl p-2 py-4'>Phone</div>
              <div className='text-lg p-2 py-4'>+919751243528</div>
              <div className='font-medium text-xl p-2 py-4'>Age</div>
              <div className='text-lg p-2 py-4'>21</div>
              <div className='font-medium text-xl p-2 py-4'>Email</div>
              <div className='text-lg p-2 py-4 '>albrightraj1211@gmail.com</div>
              <div className='font-medium text-xl p-2 py-4'>Occupation</div>
              <div className='text-lg p-2 py-4'>Web Designer</div>
              <div className='font-medium text-xl p-2 py-4'>Nationality</div>
              <div className='text-lg p-2 py-4'>Indian</div>
            </div>
            <hr className='border-1 dark:bg-gray-700 mt-4 ml-6' />
            <div className='flex xl:mt-10 align-middle gap-10 w-5/6 mt-5 pl-8'>
              <div>
                <img src={Signature} alt="signature" />
              </div>
              <div className='xl:flex flex-1 gap-3 xl:pl-24 py-2'>
                <div className='xl:mt-12 text-xl'>ABR DESIGNER</div>
                <div className='xl:mt-12 pt-1 text-gray-500'>Tamil Nadu, India</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
