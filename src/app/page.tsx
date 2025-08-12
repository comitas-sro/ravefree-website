import type { Metadata } from 'next';
import Image from 'next-export-optimize-images/image';

import title from './title.webp';
import { SignUpForm } from './components/common/SignUpForm';

export const metadata: Metadata = {
  title: 'Kontaktný formulár',
};

export default function Home() {
  return (
    <div className='bg-linear-to-t from-[#20003A] to-zink-900 p-20'>
      <Image
        fetchPriority="high"
        layout="responsive"
        loading="eager"
        src={title}
        alt="Banner"
        className='m-auto max-w-sm'
      />
      <SignUpForm />
    </div>
  );
}
