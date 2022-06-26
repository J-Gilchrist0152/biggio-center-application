import Image from 'next/image'

function WhatBanner() {
  return <Image 
  className='main-banner'
  src="/_assets/page-headers/What We Offer.png" 
  alt="What We Offer Banner" 
  layout="responsive"
  width={500}
  height={85} />
}

export default WhatBanner