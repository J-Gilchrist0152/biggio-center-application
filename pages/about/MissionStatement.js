import Head from 'next/head'
import Image from 'next/image'
import WhoBanner from '../graphics/WhoWeAre'
import Link from 'next/link'
import Asim from '../graphics/AsimAliHeadshot'
import NavBar from '../components/_includes/NavBar'

export default function Who() {
  return (
      <div id="main-container" className="filter-container">
        <h1 className="sr-only">Biggio Center Website</h1>
        <div className="home-page-wrapper">
            <div data-category="biggio-staff" className="biggio-staff-content hidden">
                <div className="home-page-banner-graphic"> 
                    <WhoBanner></WhoBanner>
                </div>
                <NavBar/>
                <div className="biggio-content-wrapper">
                    <div className="staff-filter-container">
                        <div data-category="mission" className="biggio-staff-filter active show">
                            <h2 className="home-page-content-sub-heading">Our Mission</h2>
                                <p className="content-value">We bring together the people, ideas, and services that enable Auburn’s teaching community to prepare our graduates to be creative problem solvers in a global economy. Our units (<em>Educational Development, Instructional Technology, Testing Services, and Learning Experience Design</em>) offer programming and support to faculty, instructional staff, and graduate teaching assistants. </p>
                                <p className="content-value">In alignment with Auburn’s mission and strategic plan, we support colleagues (in both traditional and online environments) by: <br/>&nbsp;</p>
                                <ul>
                                    <li className="content-value">Guiding faculty in the use of appropriate existing and emerging instructional technologies for engaged, active student learning (EASL).</li>
                                    <li className="content-value">Providing access to development resources and support throughout the academic career.</li>
                                    <li className="content-value">Encouraging collaboration with the Auburn academic community through digital media, interdisciplinary partnerships, and diverse workshops.</li>
                                    <li className="content-value">Delivering a range of testing services in a quality testing environment that is safe, secure, and aesthetically pleasing.</li>
                                    <li className="content-value">Advocating for the value of innovative teaching at Auburn and in the larger community by supporting Scholarship of Teaching and Learning (SoTL) research.</li>
                                </ul>
                                <br/>
                                <p className="content-value">The Biggio Center for the Enhancement of Teaching and Learning was established in 2003 through funding from the estate of Alvin A. and Mila Biggio. The center’s founding director was Dr. James Groccia.</p>
                            <div className='clearfix'>&nbsp;</div>
                            <div className="col-12 director-container">
                                <h2 className="home-page-content-sub-heading">Our Executive Director</h2>
                                <div className="col-3 director-image"> 
                                    <Asim></Asim>
                                </div>
                                <div className="col-8 director-content">
                                    <p className="content-value">Dr. Asim Ali<br/>
                                    334-844-8728<br/>
                                    <a href="mailto:aliasim@auburn.edu">aliasim@auburn.edu</a></p>
                                    <br/>&nbsp;<br/>
                                    <p className="content-value">As the Executive Director for the Biggio Center for the Enhancement of Teaching and Learning, Dr. Asim Ali advances the center’s mission of providing professional development programs, services, and resources to enhance instructional innovation and support scholarly and creative activities. Ali oversees a team of more than 60 professionals, graduate students, and staff members across the center’s diverse units, which include Auburn Online, Biggio Teaching, Biggio Technology, Biggio Testing, Test Scoring Services, and Engaged and Active Student Learning, or EASL, classrooms and classroom buildings.</p>
                                </div>
                                <br/>&nbsp;<br/>
                                <div className="col-12 director-content-2">
                                    <p className="content-value">As the founding Director of Auburn Online from 2014-2019, Ali worked to strengthen the university’s role in eLearning by providing central resources to support faculty in the development and instruction of online education, resulting in expanding the university’s online course offerings by more than 300 percent. Under Ali’s leadership, Auburn Online launched the institution’s first fully online degree completion programs in 2018. More recently, Ali and his staff worked with faculty to develop support services and a course development schedule for Auburn First, the university’s revised dual enrollment program. Ali joined Auburn in 2004 as an Information Technology Specialist in the College of Education where he served as a project manager and led several strategic initiatives, including program assessment, data collection for accreditation, and the development of multiple reporting systems. While in the college, Ali worked with faculty to develop innovative approaches to evidence-based, student-centered teaching and learning practices and technologies. Ali holds a bachelor’s degree in software engineering, a master’s degree in information systems management, and a PhD in adult education from Auburn University. He lives in Auburn with his wife and three children.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
