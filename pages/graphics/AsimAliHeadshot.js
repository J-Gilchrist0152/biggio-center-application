import Image from 'next/image'

function Asim() {
  return <Image 
  className='asim-ali-headshot'
  src="/_assets/headshots/asim-ali.jpg" 
  alt="Asim Ali Headshot" 
  layout="responsive"
  width={50}
  height={50} />
}

export default Asim