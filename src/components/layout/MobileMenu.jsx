import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
export default function MobileMenu({open,links,onClose}){return <AnimatePresence>{open&&<motion.div initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} className='lg:hidden container-ui mt-2'><div className='card-ui p-4'>{links.map(([n,p])=><NavLink key={p} to={p} onClick={onClose} className='block py-2'>{n}</NavLink>)}</div></motion.div>}</AnimatePresence>}
