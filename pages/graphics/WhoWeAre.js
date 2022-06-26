import Image from 'next/image'

function WhoBanner() {
  return <Image 
  className='main-banner'
  src="/_assets/page-headers/Who We Are.png" 
  alt="Who Page Banner" 
  layout="responsive"
  width={500}
  height={85} />
}

export default WhoBanner