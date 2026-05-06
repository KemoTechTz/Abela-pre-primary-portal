import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { schoolConfig } from '../../data/schoolConfig';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar(){
  const [open,setOpen]=useState(false);
  return <header className='fixed top-0 inset-x-0 z-50'><div className='container-ui mt-3'><nav className='glass bg-white/80 border border-white rounded-2xl px-4 py-3 flex items-center justify-between shadow-lg shadow-navy/10'><Link to='/' className='font-bold text-navy'>{schoolConfig.schoolName}</Link><div className='hidden lg:flex items-center gap-5'>{schoolConfig.navigationLinks.map(([n,p])=><NavLink key={p} to={p} className={({isActive})=>`text-sm ${isActive?'text-navy font-semibold':'text-dark/70'}`}>{n}</NavLink>)}<Link to='/admissions' className='bg-gold text-navy px-4 py-2 rounded-full font-semibold'>Apply Now</Link></div><button onClick={()=>setOpen(!open)} className='lg:hidden p-2 rounded-lg border border-navy/20'>{open?<X/>:<Menu/>}</button></nav></div><AnimatePresence>{open&&<motion.div initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} className='lg:hidden container-ui mt-2'><div className='card-ui p-4'>{schoolConfig.navigationLinks.map(([n,p])=><NavLink key={p} to={p} onClick={()=>setOpen(false)} className='block py-2 text-dark'>{n}</NavLink>)}</div></motion.div>}</AnimatePresence></header>
}
