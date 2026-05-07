import PageTransition from '../components/common/PageTransition';
import SectionHeader from '../components/common/SectionHeader';
import CTAButton from '../components/common/CTAButton';
import MotionCard from '../components/common/MotionCard';
import { images } from '../data/images';
import { learningPathway, academicPrograms, subjects, teachingMethods, assessmentItems, supportItems, weeklyLearning, calendarPreview } from '../data/academicsData';

export default function Academics(){
  return <PageTransition><main className='pt-24'>
    <section className='container-ui'><div className='relative overflow-hidden rounded-3xl min-h-[52vh] flex items-center'><img src={images.classroom} alt='African pupils learning in classroom' className='absolute inset-0 w-full h-full object-cover'/><div className='absolute inset-0 bg-navy/65'/><div className='relative z-10 text-white p-8 md:p-12 max-w-3xl'><h1 className='text-4xl md:text-5xl text-white'>Academics at Abela Pre & Primary School</h1><p className='mt-3 text-white/90'>Building strong foundations through care, discipline, creativity, and guided learning.</p><div className='mt-5 flex flex-wrap gap-3'><CTAButton to='/academics#pathway' label='Explore Learning Pathway'/><CTAButton to='/admissions' label='Apply for Admission' secondary/></div></div></div></section>

    <section id='pathway' className='container-ui section'><SectionHeader title='Learning Pathway'/><div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>{learningPathway.map((p,i)=><MotionCard key={p} className='p-5'><p className='text-sky font-semibold'>Stage {i+1}</p><h3 className='mt-2'>{p}</h3><p className='text-dark/75 mt-2'>Each stage grows confidence, language, creativity, discipline, and academic progress.</p></MotionCard>)}</div></section>

    <section className='container-ui section'><SectionHeader title='Programs by Level'/><div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>{academicPrograms.map(pr=><MotionCard key={pr.title} className='p-5'><h3>{pr.title}</h3><p className='text-xs text-softGreen mt-1'>{pr.age}</p><p className='mt-2 text-dark/75'><b>Goals:</b> {pr.goals}</p><p className='mt-2 text-dark/75'><b>Skills:</b> {pr.skills}</p><p className='mt-2 text-dark/75'><b>Support:</b> {pr.support}</p></MotionCard>)}</div></section>

    <section className='container-ui section'><SectionHeader title='Subjects Offered'/><div className='grid sm:grid-cols-2 lg:grid-cols-5 gap-4'>{subjects.map(([s,d])=><MotionCard key={s} className='p-4'><h3 className='text-lg'>{s}</h3><p className='text-sm text-dark/70 mt-2'>{d}</p></MotionCard>)}</div></section>

    <section className='container-ui section'><SectionHeader title='Teaching Methodology'/><div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>{teachingMethods.map(m=><MotionCard key={m} className='p-4'>{m}</MotionCard>)}</div></section>

    <section className='container-ui section'><SectionHeader title='Assessment & Progress Tracking'/><div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>{assessmentItems.map(a=><MotionCard key={a} className='p-4'>{a}</MotionCard>)}</div></section>

    <section className='container-ui section'><SectionHeader title='Academic Support'/><div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>{supportItems.map(s=><MotionCard key={s} className='p-4'>{s}</MotionCard>)}</div></section>

    <section className='container-ui section'><SectionHeader title='A Week of Learning at Abela'/><div className='grid md:grid-cols-5 gap-4'>{weeklyLearning.map(([d,t])=><MotionCard key={d} className='p-4'><p className='text-sky font-semibold'>{d}</p><p className='mt-2'>{t}</p></MotionCard>)}</div></section>

    <section className='container-ui section'><SectionHeader title='Academic Calendar Preview'/><div className='grid md:grid-cols-3 gap-4'>{calendarPreview.map(([e,date])=><MotionCard key={e} className='p-5'><h3>{e}</h3><p className='mt-2 text-dark/75'>{date}</p></MotionCard>)}</div></section>

    <section className='container-ui section'><MotionCard className='p-6'><SectionHeader title='Parent Communication' subtitle='Parents stay informed through homework updates, teacher notes, progress reports, meetings, announcements, and school events.'/><div className='mt-4'><CTAButton to='/parent-portal' label='View Parent Portal Preview'/></div></MotionCard></section>

    <section className='container-ui pb-16'><MotionCard className='p-8 text-center'><h2 className='text-3xl'>Ready to give your child a strong academic foundation?</h2><div className='mt-5 flex gap-3 justify-center flex-wrap'><CTAButton to='/admissions' label='Apply for Admission'/><CTAButton to='/contact' label='Visit the School' secondary/></div></MotionCard></section>
  </main></PageTransition>
}
