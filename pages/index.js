import Head from 'next/head'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Joju</title>
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
        <a href="mailto:adet@gmail.com">taiye'semail</a>
      </div>


    </div>
  )
};