import PageTransition from '../components/common/PageTransition';
import CTAButton from '../components/common/CTAButton';
export default function NotFound(){return <PageTransition><main className='min-h-screen grid place-items-center text-center p-6'><div><h1 className='text-6xl'>404</h1><p className='mt-2'>Page not found.</p><div className='mt-4'><CTAButton to='/' label='Back Home'/></div></div></main></PageTransition>}
