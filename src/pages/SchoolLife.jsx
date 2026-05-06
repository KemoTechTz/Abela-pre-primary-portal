import PageHeader from '../components/common/PageHeader';
import ContactForm from '../components/forms/ContactForm';
import AdmissionForm from '../components/forms/AdmissionForm';
import { schoolConfig } from '../data/schoolConfig';
import SectionHeading from '../components/common/SectionHeading';
import ImageWithFallback from '../utils/ImageWithFallback';
export default function SchoolLife(){return <main className='pt-16'><PageHeader title='SchoolLife' subtitle={schoolConfig.tagline}/><section className='max-w-6xl mx-auto px-4 py-12'><SectionHeading title='SchoolLife Page' subtitle='Premium frontend-only presentation page with responsive layout, strong content blocks, and smooth visual hierarchy.'/><div className='grid md:grid-cols-2 gap-6'><div className='bg-white rounded-2xl p-6 shadow'><p>This section presents key information for parents and visitors in a clear, trustworthy, and child-friendly format tailored for Abela Pre & Primary School.</p>{'SchoolLife'==='Admissions'&&<AdmissionForm/>}{'SchoolLife'==='Contact'&&<ContactForm/>}</div><ImageWithFallback src={schoolConfig.programs[1].image} alt='School environment' className='w-full h-80 rounded-2xl object-cover'/></div></section></main>}
