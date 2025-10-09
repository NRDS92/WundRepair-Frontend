import {useState} from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='w-screen h-[50px] md:h-[80px] flex justify-between items-center px-10 shadow-md fixed top-0 z-10  backdrop-blur-sm'>
    <h1 className='text-2xl md:text-4xl px-5 font-bold text-[#5FB2C4]'>Wundrepair</h1>
    <nav className=' hidden md:flex flex-row space-x-4 '>
        <a className=' text-xl font-bold hover:bg-[#5FB2C4] hover:text-white rounded-2xl p-4' href="/">Juphora</a>
        <a className=' text-xl font-bold hover:bg-[#5FB2C4] hover:text-white rounded-2xl p-4' href="/">Contact Us</a> 
    </nav>
    <button className=' text-3xl md:hidden '>
      <i onClick={() => setIsMenuOpen(!isMenuOpen)} class="fa-solid fa-bars "></i>
    </button>
    {isMenuOpen && (
        <div className="absolute top-[50px] left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden">
          <a
            className="text-xl font-bold hover:bg-[#5FB2C4] hover:text-white rounded-2xl px-5"
            href="/"
            onClick={() => setIsMenuOpen(false)}
          >
            Juphora
          </a>
          <a
            className="text-xl font-bold hover:bg-[#5FB2C4] hover:text-white rounded-2xl px-5"
            href="/"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </a>
        </div>
      )}
      
    </div>
    
  )
}