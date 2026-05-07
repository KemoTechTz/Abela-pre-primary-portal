import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp } from '../../utils/motion';
export default function Reveal({children,className=''}){const reduce=useReducedMotion();if(reduce)return <div className={className}>{children}</div>;return <motion.div className={className} variants={fadeUp} initial='hidden' whileInView='show' viewport={{once:true,amount:0.2}}>{children}</motion.div>}
