import Image from 'next/image';
import React from 'react'
import { Parallax, useParallax } from 'react-scroll-parallax';
import aquaMotion from '../public/images/AQUAMOTION.png'
import mcd from '../public/images/mCD.png'
import skk from '../public/images/SKK.png'
import {GiBowlSpiral} from 'react-icons/gi'

const Hero: React.FC = () => {
    
  return (
    <div >
            <div className='py-4 mb-5'>
                <div className='flex w-[96%] space-x-4 sm:w-[90%] mx-auto'>
                    <div className='flex-1 mt-8 sm:mt-24' >
                    <Image src={mcd} alt="" />
                    </div>

                <div className='flex-1'>
                    <Image src={skk} alt="" />
                </div>
                </div>

                {/* <div className='h-[15vh] flex justify-center items-center'>
                    <div className='bg-purple-600 h-16 w-16' >
                    <GiBowlSpiral className='w-16 h-16' />
                    </div>
                </div> */}


                <div className='flex w-[96%] items-center sm:w-[90%] mx-auto' >
                <div>
                    <Image src={aquaMotion} alt="" />
                </div>
                </div>
            </div>
    </div>
  )
}

export default Hero