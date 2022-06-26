import Image from 'next/image'

function InstBanner() {
  return <Image 
  className='main-banner'
  src="/_assets/page-headers/Instructional Technology.png" 
  alt="Instructional Technology Banner" 
  layout="responsive"
  width={500}
  height={85} />
}

export default InstBanner