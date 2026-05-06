import { images } from './images';

export const schoolConfig = {
  schoolName: 'Abela Pre & Primary School',
  tagline: 'Nurturing Young Minds for a Brighter Future.',
  phone: '+255 XXX XXX XXX',
  email: 'info@abelaschool.co.tz',
  address: 'Dar es Salaam, Tanzania',
  officeHours: 'Mon–Fri: 7:30 AM – 4:30 PM',
  navigationLinks: [
    ['Home', '/'], ['About', '/about'], ['Academics', '/academics'], ['Admissions', '/admissions'], ['School Life', '/school-life'], ['Gallery', '/gallery'], ['Parent Portal', '/parent-portal'], ['Contact', '/contact']
  ],
  stats: [
    ['250+', 'Happy Learners'], ['20+', 'Dedicated Teachers'], ['12+', 'Classrooms'], ['8+', 'Years of Excellence']
  ],
  programs: [
    { title: 'Pre-Primary Program', desc: 'Play-based foundation for ages 3–5 with language, confidence, and social growth.', image: images.classroom },
    { title: 'Lower Primary', desc: 'Strong literacy and numeracy through guided exploration and project learning.', image: images.reading },
    { title: 'Upper Primary', desc: 'Academic readiness, leadership habits, and preparation for future success.', image: images.teacher }
  ],
  faqs: [
    ['What age can my child join pre-primary?', 'Most children join from age 3 depending on readiness and available seats.'],
    ['How do I apply?', 'Submit inquiry, schedule a visit, complete assessment, and finalize registration.'],
    ['Do you provide meals?', 'Yes, balanced meals and daily care routines are provided in a clean environment.']
  ],
  testimonials: [
    ['Asha M.', 'My daughter grew in confidence and reading skills so quickly.'],
    ['Peter K.', 'Strong discipline, warm teachers, and excellent parent communication.'],
    ['Neema L.', 'Abela combines care and academic quality in a way we trust.']
  ],
  galleryItems: [
    { cat: 'Classrooms', img: images.classroom, title: 'Interactive classroom' },
    { cat: 'Learning', img: images.reading, title: 'Focused reading time' },
    { cat: 'Play', img: images.play, title: 'Safe outdoor play' },
    { cat: 'Events', img: images.event, title: 'School celebration' },
    { cat: 'Teachers', img: images.teacher, title: 'Teacher support' }
  ]
};
