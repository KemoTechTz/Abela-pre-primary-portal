import { Link } from 'react-router-dom';
export default function CTAButton({to,label,secondary}){return <Link to={to} className={`inline-block px-6 py-3 rounded-full font-semibold transition ${secondary?'bg-sky text-white hover:bg-sky/90':'bg-gold text-navy hover:bg-gold/90'}`}>{label}</Link>}
