import Head from 'next/head'
// import Image from 'next/image'
import Hero from '../components/Hero'
// import nusacred from '../public/images/nusacredfeminine.jpg'
// import doberman1 from '../public/images/Doberman1.jpg'
// import doberman2 from '../public/images/Doberman2.jpg'
// import doberman2black from '../public/images/Dobermann2black.jpg'
// import dropposter from '../public/images/DROP POSTER FINAL.png'
// import nunicely from '../public/images/nunicely.jpg'
// import mcd from '../public/images/mCD.png'
// import transmutate from '../public/images/transmutationteemockup.jpg'
import { useParallax } from 'react-scroll-parallax'


const Home = () => {
  // const parallax = useParallax<HTMLDivElement>({
  //   rotate: [0, 360],
  // });
  return (
    <div className="bg-black text-white relative font-roboto">
      <Head>
        <title>Adejoju</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className='text-xl py-3 font-medium px-1 w-[90%] mx-auto fixed h-20 z-10 '>
        <div className='border-[2.5px] border-white h-16 w-16 flex flex-col justify-center items-center '>
          {/* <div ref={parallax.ref}> */}
            <div>
              JO
            </div>
            <div>
              JU
            </div>
          {/* </div> */}
        </div>
      </div>

      <Hero />

      {/* About Me */}
      <div className='w-[96%] sm:w-[90%] font-tilt mx-auto mb-6 py-12'>
            <h5 className=' text-3xl uppercase font-semibold mb-3'>
              Hi! I'm
            </h5>
            <h1 className='text-6xl lg:text-9xl uppercase font-semibold tracking-wide mb-3'>
              Adekemi
            </h1>
      </div>

      {/* Contact */}
      <div className='w-[96%] sm:w-[90%] mx-auto mb-10'>
        <h5 className='font-semibold text-xl mb-2'>
          Contact
        </h5>
        <a href="mailto:adeyombotk@gmail.com">adeyombotk@gmail.com</a>
      </div>

      <h3 className='w-[96%] sm:w-[90%] mx-auto text-2xl font-semibold mb-16'>
        Work Archive 2021 - Present
      </h3>

      {/* Projects */}
      <div className='w-[96%] sm:w-[90%] mx-auto '>

        <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-5 items-center mb-7'>
          <div className='flex-1'>
          {/* <Image src={mcd} alt="" /> */}
          <img src="./images/mCD.png" alt="" className='w-[100%] mb-4' />
          </div>
          <div className='flex-1'>
            {/* <Image src={nusacred} alt="" /> */}
          <img src="./images/nusacredfeminine.jpg" alt="" className='w-[100%] mb-4' />
          </div>
          <div className='flex-1'>
          <img src="./images/Doberman1.png" alt="" className='w-[100%] mb-4' />
          </div>
          
          <div className='flex-1'>
            <img src="./images/SKK.png" alt="" className='w-[100%] mb-4' />
          </div>
        </div>

        <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-5 items-center mb-7'>
          <div className='flex-1'>
            <img src="./images/SWISH-EMBLEM-BACK-BG.png" alt="" className='w-[100%] mb-4' />
          </div>
          <div className='flex-1'>
          {/* <Image src={transmutate} alt="" /> */}
          <img src="./images/transmutationteemockup.jpg" alt="" className='w-[100%] mb-4' />
          </div>
          <div className='flex-1'>
          {/* <Image src={doberman2black} alt="" /> */}
          <img src="./images/Dobermann2black.jpg" alt="" className='w-[100%] mb-4' />

          </div>
          <div className='flex-1'>
          {/* <Image src={doberman2} alt="" /> */}
          <img src="./images/Doberman2.jpg" alt="" className='w-[100%] mb-4' />

          </div>
        </div>
        <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-5 items-center'>
          <div className='flex-1' aria-label='aqua'>
            <img src="./images/AQUAMOTION.png" alt="" className='w-[100%] mb-4' />
          </div>
          <div className='flex-1'>
            <img src="./images/final rollout.png" alt="" className='w-[100%] mb-4' />
          </div>
          <div className='flex-1'>
            <img src="./images/TIRED YUTE WHITE BG.png" alt="" className='w-[100%] mb-4' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
