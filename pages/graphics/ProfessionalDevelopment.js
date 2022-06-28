import Image from 'next/image'

function ProfBanner() {
  return <Image 
  className='main-banner'
  src="/_assets/page-headers/Professional Development Programs.png" 
  alt="Professional Development Program" 
  layout="responsive"
  width={500}
  height={85} />
}

export default ProfBanner