import Navbar from '../Navbar';
import OrderStatus from './OrderStatus';
import FooterButtons from '../Footer/FooterButtons';
import SupportSection from '../SupportSection';
import CallToAction from '../CallToAction';
import LogoBottom from '../Footer/LogoBottom';


const Orders = () => {

    return(
        <div className="orders-container">
            <Navbar />
            <OrderStatus />
            <FooterButtons />
            <SupportSection />
            <CallToAction />
            <LogoBottom/>
        </div>
    );
};
export default Orders;
