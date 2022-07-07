import Image from 'next/image'

function SlugBanner() {
  return <Image 
  className='main-banner'
  src="/_assets/page-headers/Basic Head.png" 
  alt="Educational Development Banner" 
  layout="responsive"
  width={500}
  height={45} />
}

export default SlugBanner