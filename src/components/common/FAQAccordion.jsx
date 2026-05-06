import { useState } from 'react';
export default function FAQAccordion({items}){const [open,setOpen]=useState(0);return <div className='space-y-3'>{items.map(([q,a],i)=><div key={q} className='bg-white rounded-xl p-4'><button className='font-semibold w-full text-left' onClick={()=>setOpen(open===i?-1:i)}>{q}</button>{open===i&&<p className='mt-2 text-sm'>{a}</p>}</div>)}</div>}
