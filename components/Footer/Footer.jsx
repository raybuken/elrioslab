
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
                                <Link href='/tools/stats' className='nav-link text-muted'>Stats</Link>
                            </li>
                            <li>
                                <Link href='/tools/adaptation' className='nav-link text-muted'>Adaptation</Link>
                            </li>
                            <li>
                                <Link href='/tools/reforge' className='nav-link text-muted'>Reforge</Link>
                            </li>
                            <li>
                                <Link href='/tools/ignore-defense' className='nav-link text-muted'>Ignore Defense</Link>
                            </li>
                            <li>
                                <Link href='/tools/el-search-party-collection' className='nav-link text-muted'>El Search Party Collection</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-2 align-self-start">
                        <h5>About</h5>
                        <ul className="nav flex-column">
                            <li>
                                <Link href='/about' className='nav-link text-muted'>About</Link>
                            </li>
                        </ul>
                        <h5>FAQ</h5>
                        <ul className="nav flex-column">
                            <li>
                                <Link href='/faq' className='nav-link text-muted'>FAQ</Link>
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