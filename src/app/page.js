import Image from 'next/image'
import Navbar from '@/comps/Navbar'

export default function Home() {
  return (
    <div className=''>
    <Navbar/>
    <main className="flex min-h-screen flex-col items-center justify-between ">
         {/* Beginning of Banner */}
         <section>
         <div className='relative object-contain '>
            <img src='banner.png' alt=''className='w-full h-auto object-contain  md:flex' />
          <   div className='conatiner absolute inset-0 bg-black bg-opacity-50 text-white p-4'>
                <p className=' italic py-4 font-extralight text-xs text-white text-md md:grid-cols-2 md:mx-auto lg:text-sm'>SpaceX</p>
                <h1 className='text-white text-lg font-semibold md:text-base lg:text-lg outline-none'>Design, manufacture and launch</h1>
                <button className='hidden md:inline-block bg-black outline outline-indigo-50 text-white text-sm md:text-base lg:text-lg py-2 px-4 mt-4 rounded hover:bg-gray-200'>Explore</button>
          </div>
        </div>
         </section>
    </main>
    </div>
  )
}
