import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Layout = props => (
    <>
        <Navbar/>
        <div className="layout">
            {props.children}
        </div>
        <Footer/>
    </>
)

export default Layout