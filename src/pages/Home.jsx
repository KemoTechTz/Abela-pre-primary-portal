import { motion } from 'framer-motion';
import { schoolConfig } from '../data/schoolConfig';
import { images } from '../data/images';
import SectionHeading from '../components/common/SectionHeading';
import CTAButton from '../components/common/CTAButton';
import FAQAccordion from '../components/common/FAQAccordion';
import ImageWithFallback from '../utils/ImageWithFallback';

export default function Home(){return <main className='pt-24'>
<section className='section'><div className='container-ui grid lg:grid-cols-2 gap-10 items-center'><div><p className='text-xs uppercase tracking-[0.2em] text-sky font-semibold'>Premium Early Education</p><h1 className='text-5xl md:text-6xl leading-tight mt-3'>{schoolConfig.schoolName}</h1><p className='mt-4 text-lg text-dark/75'>{schoolConfig.tagline} A warm, safe, and academically strong environment for pre-primary and primary learners.</p><div className='mt-6 flex flex-wrap gap-3'><CTAButton to='/admissions' label='Apply for Admission'/><CTAButton to='/academics' label='Explore Academics' secondary/></div></div><motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className='relative'><ImageWithFallback src={images.heroMain} alt='African pupils in class' className='rounded-3xl h-[460px] w-full object-cover'/><div className='absolute -bottom-6 -left-4 card-ui px-4 py-3'><p className='font-bold text-navy'>250+ Happy Learners</p></div></motion.div></div></section>
<section className='container-ui grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>{schoolConfig.stats.map(([v,t])=><div key={t} className='card-ui p-5'><p className='text-3xl font-bold'>{v}</p><p className='text-dark/70'>{t}</p></div>)}</section>
<section className='section container-ui'><SectionHeading eyebrow='Programs' title='Learning pathways built for growth'/><div className='grid md:grid-cols-3 gap-5'>{schoolConfig.programs.map(p=><article key={p.title} className='card-ui p-3'><ImageWithFallback src={p.image} alt={p.title} className='h-44 rounded-2xl object-cover w-full'/><h3 className='text-xl mt-4'>{p.title}</h3><p className='text-dark/75 mt-2'>{p.desc}</p></article>)}</div></section>
<section className='section container-ui'><SectionHeading eyebrow='Parents trust us' title='Frequently asked questions'/><FAQAccordion items={schoolConfig.faqs}/></section>
</main>}
