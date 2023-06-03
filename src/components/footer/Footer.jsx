import './footer.css'
const Footer = () => {
    return ( 
        <>
        <footer className="footer">
            <div className="about">
                <a href="#">About us</a>
                <a href="#" className="terms">Terms and Conditions</a>
                <a href="#" className="privacy">Privacy Policy</a>
                <a href="#" className="billing">Billing Policy</a>
                <a href="#" className="copyright">About copyright Policy</a>
            </div>
            <div className="support">
                <a href="mailto:market@ethio.ml">market@ethio.ml</a>
                <a href="#">Safty</a>
                <a href="#">Contact us</a>
                <a href="#">FAQ</a>
            </div>
            <div className="socials">
                <div className="facebook">US on Facebook</div>
                <div className="instagram">US on Instagram</div>
                <div className="twitter">US on Twitter</div>
            </div>
        </footer>
        </>
     );
}
 
export default Footer;