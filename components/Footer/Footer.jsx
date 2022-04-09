
import Link from 'next/link'
import SocialMedia from '../SocialMedia/SocialMedia'
export default function Footer() {
    return (
        <footer className="footer shadow-lg">
            <div className="container py-2">
                <hr />
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <blockquote className='blockquote'>

                            <p className="text-muted">Elrios Lab</p>
                        </blockquote>
                    </div>
                    <div className="col-lg-3">
                        <h5 >Tools</h5>
                        <ul className="nav flex-column">
                            <li>
                                <Link href='/tools/stats'><a className='nav-link text-muted'>Stats</a></Link>
                            </li>
                            <li>
                                <Link href='/tools/adaptation'><a className='nav-link text-muted'>Adaptation</a></Link>
                            </li>
                            <li>
                                <Link href='/tools/reforge'><a className='nav-link text-muted'>Reforge</a></Link>
                            </li>
                            <li>
                                <Link href='/tools/ignore-defense'><a className='nav-link text-muted'>Ignore Defense</a></Link>
                            </li>
                            <li>
                                <Link href='/tools/el-search-party-collection'><a className='nav-link text-muted'>El Search Party Collection</a></Link>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="col-2 align-self-start">
                        <h5>About</h5>
                        <ul className="nav flex-column">
                            <li>
                                <Link href='/about'><a className='nav-link text-muted'>About</a></Link>
                            </li>
                        </ul>
                        <h5>FAQ</h5>
                        <ul className="nav flex-column">
                            <li>
                                <Link href='/faq'><a className='nav-link text-muted'>FAQ</a></Link>
                            </li>
                        </ul>
                    </div>
                    <div className='col-lg-3 align-self-start'>
                        <SocialMedia/>
                    </div>
                </div>
                <hr />
                <div className='text-center'>
                    &copy; 2022 ElriosLab 
                </div>
            </div>
        </footer>
    )
}