import { Link } from 'react-router-dom';import { ArrowRight } from 'lucide-react';import { motion } from 'framer-motion';import { buttonTap } from '../../utils/motion';
export default function CTAButton({to,label,secondary}){return <motion.div {...buttonTap} className='inline-block'><Link to={to} className={`premium-button inline-flex items-center gap-2 ${secondary?'bg-white/85 border border-navy/15 text-navy hover:bg-sky/10':'bg-gold text-navy shadow-lg shadow-gold/30 hover:shadow-gold/40 hover:-translate-y-0.5'}`}>{label}<ArrowRight size={16} className='transition-transform group-hover:translate-x-1'/></Link></motion.div>}
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
export default function CTAButton({ to='#', label, secondary=false }) {
  const base = 'inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-sky';
  return to.startsWith('/') ? (
    <Link to={to} className={`${base} ${secondary ? 'bg-white text-navy border border-navy/20 hover:-translate-y-0.5' : 'bg-gold text-navy hover:-translate-y-0.5 shadow-lg shadow-gold/30'}`}>
      {label}<ArrowRight size={16} />
    </Link>
  ) : <a href={to} className={base}>{label}</a>;
}
