import Head from 'next/head'
import Image from 'next/image'

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Adejoju</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2 className='w-[90%] mx-auto py-5 text-3xl font-bold tracking-wider mb-8'>
        Joju
      </h2>

      {/* Showcase */}
      <div className='pb-4 mb-5'>
        <div className='flex w-[96%] space-x-4 sm:w-[90%] mx-auto'>
            <div className='flex-1 mt-8 sm:mt-24'>
            <img src="https://i.ibb.co/QJR0kp8/mCD.png" alt="" className='w-[100%]' />
          </div>

          <div className='flex-1 relative space-y-3'>
            <img src="./images/SKK.png" alt="" className='w-[100%]' />
            <div className='flex space-x-2'>
            <img src="./images/SSV1BLK.png" alt="" className='w-[50%]' />
            <img src="./images/SSV1WT.png" alt="" className='w-[50%]' />
            </div>
          </div>
        </div>

        <div className='flex w-[96%] items-center sm:w-[90%] mx-auto'>
          <div>
            <img src="./images/AQUAMOTION.png" alt="" />
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className='w-[96%] sm:w-[90%] mx-auto mb-10'>
        <h5 className='font-semibold text-xl mb-6'>
          Contact
        </h5>
        <p className='mb-2 text-gray-400'>
          General Enquiries
        </p>
        <a href="mailto:adeyombotk@gmail.com">adeyombotk@gmail.com</a>
      </div>

      <h3 className='w-[96%] sm:w-[90%] mx-auto text-2xl font-semibold mb-16'>
        Work Archive 2020 - Present
      </h3>

      {/* Projects */}
      <div className='w-[96%] sm:w-[90%] mx-auto '>
        <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-5 items-center mb-4'>
          <div className='flex-1'>
            <img src="./images/AQUAMOTION.png" alt="" className='w-[100%] mb-4' />
            <p className='text-gray-300 text-sm'>
              Aquamotion
            </p>
          </div>
          <div className='flex-1'>
            <img src="./images/final rollout.png" alt="" className='w-[100%] mb-4' />
            <p className='text-gray-300 text-sm'>
              Twenties Merch
            </p>
          </div>
          <div className='flex-1'>
            <img src="./images/THE SACRED FEMININE BG.png" alt="" className='w-[100%] mb-4' />
            <p className='text-gray-300 text-sm'>The Sacred Feminine</p>
          </div>
          <div className='flex-1'>
            <img src="./images/SKK.png" alt="" className='w-[100%] mb-4' />
            <p className='text-gray-300 text-sm'>Eccentrist</p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-5 items-center mb-4'>
          <div className='flex-1'>
            <img src="https://i.ibb.co/QJR0kp8/mCD.png" alt="" className='w-[100%] mb-4' />
            <p className='text-gray-300 text-sm'>MicroDosing</p>
          </div>
          <div className='flex-1'>
            <img src="./images/LISSOME STATIONERY.png" alt="" className='w-[100%] mb-4' />
            <p className='text-gray-300 text-sm'>Lissome</p>
          </div>
          <div className='flex-1'>
            <img src="./images/LISSOME PAPER BAGS.png" alt="" className='w-[100%] mb-4' />
            <p className='text-gray-300 text-sm'>Lissome Paper Bags</p>
          </div>
          <div className='flex-1'>
            <img src="./images/TIRED YUTE WHITE BG.png" alt="" className='w-[100%] mb-4' />
            <p className='text-gray-300 text-sm'>Tired Yute</p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-5 items-center mb-4'>
          <div className='flex-1'>
            <img src="./images/SWISH-EMBLEM-BACK-BG.png" alt="" className='w-[100%] mb-4' />
            <p className="text-gray-300 text-sm">Swish Back</p>
          </div>
          <div className='flex-1'>
            <img src="./images/SWISH-EMBLEM-FRONT-BG.png" alt="" className='w-[100%] mb-4' />
            <p className="text-gray-300 text-sm">Swish Front</p>
          </div>
          <div className='flex-1'>
            <img src="./images/SSV1BLK.png" alt="" className='w-[100%] mb-4' />
            <p className="text-gray-300 text-sm">Safespace Blk</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home