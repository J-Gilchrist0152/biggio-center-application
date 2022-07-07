import Head from 'next/head'
import { Image } from '@chakra-ui/react'
import WhoBanner from '../graphics/WhoWeAre'
import Link from 'next/link'
import NavBar from '../components/_includes/NavBar'
import { gql, GraphQLClient } from 'graphql-request'


const BiggioTech = ({ biggioTechs  }) => {
    return (  

      
    <div id="main-container" className="col-12 auburn-online-container">
        <WhoBanner/>
        <NavBar/>
        <div className='col-12 insight-bios-container'>
          <h1 className='page-heading'>Biggio Tech Staff</h1>
          <div className='row'>
                {biggioTechs.map(biggioTech => {
                return (
                    <div className='col-3 insight-bios-outer' key={biggioTech.name}>
                        <div className='insight-bios-inner-top'>
                        <Image src={biggioTech.profileImage.url} alt="This is an Alt" className='insight-bios-img'/>
                        <div className='insight-bios-inner'>
                            <div className='insight-bios-name'>{biggioTech.name}</div>
                            <div className='insight-bios-title'>{biggioTech.positionTitle}</div>
                        </div>
                        </div>
                        <div className='insight-bios-lower'>
                        <div className='insight-bios-email'>{biggioTech.email}</div>
                        <div className='insight-bios-phone'>{biggioTech.phoneNumber}</div>
                        </div>
                    </div>
                );
                })}
        </div>
        </div>
    </div>
    )
}
 
export async function getStaticProps() {
  const graphcms = new GraphQLClient(
    'https://api-us-east-1.graphcms.com/v2/ckzekoep138iw01z59a8p5x42/master'
  );

  const { biggioTechs } = await graphcms.request(
    `
    {
      biggioTechs {
        profileImage {
          url
        }
        name
        positionTitle
        email
        phoneNumber
      }
    }
    `
  );

  return {
    props: {
      biggioTechs,
    },
  };
}

export default BiggioTech;