import Image from 'next/image'

function TestBanner() {
  return <Image 
  className='main-banner'
  src="/_assets/page-headers/Testing Services.png" 
  alt="Testing Services Banner" 
  layout="responsive"
  width={500}
  height={85} />
}

export default TestBanner