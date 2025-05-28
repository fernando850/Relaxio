import Navbar from '../Navbar.js';
import CustomerSupport from './CustomerSupport.js'; 
import LogoBottom from '../Footer/LogoBottom.js';
import '../../styles/Support.css'; 
import CallSupport from './CallSupport.js';

const Support = () => {

    return (
        <div className="support-page">
            <Navbar />
            <div className="colorF1F8FE">
                <CustomerSupport />
                <CallSupport/>
                <LogoBottom />
            </div>
           
        </div>
    );
}

export default Support;