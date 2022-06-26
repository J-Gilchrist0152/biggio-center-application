import Image from 'next/image'

function EdBanner() {
  return <Image 
  className='main-banner'
  src="/_assets/page-headers/Educational Development.png" 
  alt="Educational Development Banner" 
  layout="responsive"
  width={500}
  height={85} />
}

export default EdBanner