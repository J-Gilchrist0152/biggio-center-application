import Image from 'next/image'

function GrantsBanner() {
  return <Image 
  className='main-banner'
  src="/_assets/page-headers/Grants and Funding Opportunites.png" 
  alt="Grants and Funding Opportunites" 
  layout="responsive"
  width={500}
  height={85} />
}

export default GrantsBanner