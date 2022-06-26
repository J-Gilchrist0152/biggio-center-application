import Image from 'next/image'

function LearningBanner() {
  return <Image 
  className='main-banner'
  src="/_assets/page-headers/Learning Experience.png" 
  alt="Learning Experience & Design Banner" 
  layout="responsive"
  width={500}
  height={85} />
}

export default LearningBanner