import { motion, useReducedMotion } from 'framer-motion';
import { cardHover } from '../../utils/motion';

export default function MotionCard({ children, className = '' }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={`premium-hover-card group ${className}`}>{children}</div>;
  return (
    <motion.div
      initial='rest'
      whileHover='hover'
      whileTap='tap'
      variants={cardHover}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className={`premium-hover-card group ${className}`}
    >
      {children}
    </motion.div>
  );
}
