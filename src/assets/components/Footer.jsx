import FooterLink from "./UI/Footerlink";


export default function Footer() {
  return (
    <div className='bg-primary-grey py-2 px-3 md:px-7 flex md:flex-row h-[100px] md:h-[170px] justify-between items-center  gap-3 bg-linear-to-br from-[#D1E6BE] to-[#5FB2C4] '>
        <div className='flex flex-col  text-primary-purple items-center gap-3'>
            <h3 className="text-2xl md:text-4xl font-bold">Wundrepair</h3>
            <p className="text-[10px] md:text-lg text-center ">Die natürliche Pflege auf pflanzlicher Basis.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-1 md:gap-5 ">
          <div className='flex flex-col  gap-1 text-primary-purple'>
            <h3 className="flex font-bold text-[10px] md:text-xl gap-3 ">Quick Links</h3>
            <ul className="flex md:flex-col text-[10px] md:text-xs items-center gap-2 ">
                <li><FooterLink to="/about-us" >Über uns</FooterLink></li>
                <li><FooterLink to="/contact" >Kontakt</FooterLink></li>
            </ul>
        </div>
        <div className='flex   flex-col  gap-1 text-primary-purple '>
            <h3 className="flex font-bold text-[10px] md:text-xl gap-3 ">Kontakt</h3>
            <ul className="text-[8px] md:text-xs flex flex-row md:flex-col ">
                <li className="flex gap-1"><i className="fa-solid fa-location-dot"></i><p>Talstrasse 17, 40812 Mettmann</p></li>
                <li className="flex gap-1"><i className="fa-solid fa-phone-volume"></i><p>+49 (0) 800 5874672</p></li>
                <li className="flex gap-1"><i className="fa-solid fa-envelope"></i><p>info@juphora.de</p></li>
            </ul>
        </div>
        </div>
        
        <div className='flex flex-col text-primary-purple items-center  '>
        <h3 className="flex font-bold text-[10px] md:text-xl gap-3 text-center  ">Follow Us</h3>
            <div className="flex text-sm md:text-2xl gap-5">
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-tiktok"></i>          
            </div>
        </div>
      
    </div>
  )
}
