import AboutImg from './assets/img/about-img.jpg';
import Signature from './assets/img/signature.png';

export default function About() {
  return (
    <>
      <div id="About">
        <div className='xl:flex flex-1'>
          <div className='xl:w-6/12 xl:ml-14 my-18 mt-24 mb-14 w-5/6 mx-8 '>
            <img src={AboutImg} alt="about" className='xl:w-auto rounded-xl'/>
          </div>
          <div className='xl:mt-32 mr-16'>
            <p className='xl:text-4xl font-semibold text-3xl ml-7'>ABOUT ME</p>
            <p className='text-3xl font-semibold text-cyan-800 mt-4 pl-7'>Creating Websites That Drive Success</p>
            <p className='mt-4 xl:ml-6 ml-8 text-xl'>
              I'm Albright Raj, a passionate web designer dedicated to crafting visually appealing and highly functional websites. With a keen eye for detail and a focus on user experience.
            </p>
            <hr className='border-1 dark:bg-gray-700 mt-4 ml-6' />
            <div className='grid xl:grid-cols-4  grid-cols-2 mt-6 mr-14 gap-y-6 xl:gap-y-8 ml-8'>
              <div className='font-medium text-xl'>Name</div>
              <div className='text-lg'>Albright Raj S J</div>
              <div className='font-medium text-xl'>Phone</div>
              <div className='text-lg'>+919751243528</div>
              <div className='font-medium text-xl'>Age</div>
              <div className='text-lg'>21</div>
              <div className='font-medium text-xl'>Email</div>
              <div className='text-lg'>albrightraj1211@gmail.com</div>
              <div className='font-medium text-xl'>Occupation</div>
              <div className='text-lg'>Web Designer</div>
              <div className='font-medium text-xl'>Nationality</div>
              <div className='text-lg'>Indian</div>
            </div>
            <hr className='border-1 dark:bg-gray-700 mt-4 ml-6' />
            <div className='flex xl:mt-10 align-middle xl:gap-4 gap-x-5 xl:w-5/6 w-11/12 mt-5 pl-8'>
              <div>
                <img src={Signature} alt="signature" />
              </div>
              <div className='xl:flex flex-1 xl:justify-end justify-evenly xl:mt-10 xl:gap-6 '>
                <div className='text-xl '>ABR DESIGNER</div>
                <div className='text-gray-500 xl:pt-1'>Tamil Nadu, India</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
