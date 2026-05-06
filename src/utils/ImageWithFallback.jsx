import { useState } from 'react';
import { fallback } from '../data/images';
export default function ImageWithFallback({src,alt,className=''}){const [img,setImg]=useState(src);return <img src={img} alt={alt} onError={()=>setImg(fallback)} className={className}/>}
