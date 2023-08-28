import Image from 'next/image'
import Navbar from '@/comps/Navbar'
import Table from '@/comps/Table'
import Search from '@/comps/Search'
import Banner from './Banner'

export default function Home() {
  return (
    <div className=''>
    <Navbar/>
    <main className="flex min-h-screen flex-col items-center justify-between ">
         {/* Beginning of Banner */}
          <Banner/>
         <Search/>
    </main>
    </div>
  )
}
