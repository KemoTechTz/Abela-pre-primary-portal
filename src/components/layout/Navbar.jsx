import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { schoolConfig } from '../../data/schoolConfig';
import MobileMenu from './MobileMenu';

export default function Navbar(){
  const [open,setOpen]=useState(false);const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{const h=()=>setScrolled(window.scrollY>12);window.addEventListener('scroll',h);return()=>window.removeEventListener('scroll',h)},[]);
  return <header className='fixed top-0 inset-x-0 z-50'>
    <div className='container-ui mt-3'>
      <nav className={`${scrolled?'bg-white/90':'bg-white/80'} backdrop-blur border border-white rounded-2xl px-4 py-3 flex items-center justify-between shadow-lg shadow-navy/10`}>
        <Link to='/' className='font-bold text-navy'>Abela Pre & Primary</Link>
        <div className='hidden lg:flex items-center gap-2'>{schoolConfig.navigationLinks.map(([n,p])=><NavLink key={p} to={p} className={({isActive})=>`px-3 py-2 rounded-full text-sm ${isActive?'bg-navy text-white':'text-dark/75 hover:bg-sky/10'}`}>{n}</NavLink>)}<Link to='/admissions' className='bg-gold px-4 py-2 rounded-full font-semibold'>Apply Now</Link></div>
        <button className='lg:hidden p-2 border rounded-lg' onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
      </nav>
    </div>
    <MobileMenu open={open} links={schoolConfig.navigationLinks} onClose={()=>setOpen(false)}/>
  </header>
}
