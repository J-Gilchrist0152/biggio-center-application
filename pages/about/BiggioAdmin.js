import Head from 'next/head'
import WhoBanner from '../graphics/WhoWeAre'
import Link from 'next/link'
import NavBar from '../components/_includes/NavBar'
import { gql, GraphQLClient } from 'graphql-request'
import Image from 'next/image'


const BiggioAdmin = ({ biggioAdmins  }) => {
    return (  

      
    <div id="main-container" className="col-12 auburn-online-container">
        <WhoBanner/>
        <NavBar/>
        <div className='col-12 insight-bios-container'>
          <div className='col-10 insight-bios-wrapper'>
          <h2 className='page-heading'>Biggio Admin</h2>
          <div className='row'>
                {biggioAdmins.map(biggioAdmin => {
                return (
                    <div className='col-3 insight-bios-outer' key={biggioAdmin.name}>
                        <div className='insight-bios-inner-top'>
                        <Image src={biggioAdmin.profileImage.url} alt="This is an Alt" className='insight-bios-img'/>
                        <div className='insight-bios-inner'>
                            <div className='insight-bios-name'>{biggioAdmin.name}</div>
                            <div className='insight-bios-title'>{biggioAdmin.positionTitle}</div>
                        </div>
                        </div>
                        <div className='insight-bios-lower'>
                        <div className='insight-bios-email'>{biggioAdmin.email}</div>
                        <div className='insight-bios-phone'>{biggioAdmin.phoneNumber}</div>
                        </div>
                    </div>
                );
                })}
            </div>
          </div>
        </div>
    </div>
    )
}
 
export async function getStaticProps() {
  const graphcms = new GraphQLClient(
    'https://api-us-east-1.graphcms.com/v2/ckzekoep138iw01z59a8p5x42/master'
  );

  const { biggioAdmins } = await graphcms.request(
    `
    {
      biggioAdmins {
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
      biggioAdmins,
    },
  };
}

export default BiggioAdmin;