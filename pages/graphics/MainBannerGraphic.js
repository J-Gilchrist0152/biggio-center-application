import Image from 'next/image'

function MainBanner() {
  return <Image 
  className='main-banner'
  src="/_assets/page-headers/search-results-pages.png" 
  alt="Main Page Banner" 
  layout="responsive"
  width={500}
  height={85} />
}

export default MainBanner