import Link from "next/link";

const NavBar = () => {
    return ( 
        <nav role="navigation" aria-label="Page and section navigation" className="sec-nav navbar navbar-expand-xl navbar-light" name="Section navigation">
        <div className="image-brand"></div>	
        <div className="container-fluid">
            <div className="navbar-brand">
                <span className="d-block d-xl-none">Menu</span>
                <span className="d-none d-sm-block"></span>
            </div>  
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle page / section navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">   
                <li className="nav-item">
                <Link href="/">
                    <a className="nav-link" role="button" aria-expanded="false">
                        Home
                    </a>
                </Link>
                </li>   
                <li className="nav-item">
                <Link href="">
                    <a id="whoDropdown" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Who We Are</a>
                </Link>
                <ul className="dropdown-menu" aria-labelledby="whoDropdown">
                    <li><Link href="/about/MissionStatement"><a className="dropdown-item">Mission Statement</a></Link></li>
                    <li><Link href="/about/AuburnOnline"><a className="dropdown-item" >Auburn Online</a></Link></li>
                    <li><Link href="/about/BiggioAdmin"><a className="dropdown-item" >Biggio Admin</a></Link></li>
                    <li><Link href="/about/BiggioTech"><a className="dropdown-item" >Biggio Tech</a></Link></li>
                    <li><Link href="/about/TestingServices"><a className="dropdown-item" >Testing Services</a></Link></li>
                </ul>
                </li>  
                <li className="nav-item ">
                <a id="programDropdown" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    What We Offer
                </a>
                <ul className="dropdown-menu" aria-labelledby="programDropdown">
                    <li><Link href="/programs/professional-development-program"><a className="dropdown-item">Professional Development Programs</a></Link></li>
                    <li><Link href="/programs/educational-development-program"><a className="dropdown-item">Educational Development Programs</a></Link></li>
                    <li><Link href="/programs/grants-funding-program"><a className="dropdown-item">Grant & Funding Opportunities</a></Link></li>
                    <li><Link href="/programs/testing-services-program"><a className="dropdown-item">Testing Services</a></Link></li>
                    <li><Link href="/programs/instructional-technology-programs"><a className="dropdown-item">Instructional Technology</a></Link></li>
                    <li><Link href="/programs/learning-experience-design"><a className="dropdown-item">Learning Experience & Design</a></Link></li>
                </ul>
                </li> 
            </ul>
            </div>
        </div>
        </nav>
     );
}
 
export default NavBar;