import Image from 'next/image'
import Link from 'next/link'
import Logo from './roi.png'
export default function Navbar(){
    return(
        <nav className='flex justify-around items-center'>
          <Image
            src={Logo}
            alt='Dojo Logo'
            height={70}
            quality={100}
            placeholder='blur'
          />

        <h1>Dojo </h1>
        <Link href="/">Dashboard</Link>  
        <Link href="/tickets">Tickets</Link>  
      </nav>
    )
}