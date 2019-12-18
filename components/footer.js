import Link from 'next/link';

const Footer = ()=> {
  return (
    <footer className="app-footer">{/*custom order*/}
      <ul className="footer-section__main">
        <li className="footer-section__contact">
          <h3>
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
            For enquires, send us an email at<br />
            talktous@itsupplies.co
          </h3>
          <ul>
            <li>
              <i className="fa fa-phone" aria-hidden="true"></i>
              &nbsp; +234 703 761 0856
            </li>
            <li>
              <i className="fa fa-phone" aria-hidden="true"></i>
              &nbsp; +234 802 103 7811
            </li>
            <li>
              <i className="fa fa-phone" aria-hidden="true"></i>
              &nbsp; +234 705 485 8666
            </li>
            <li>
              <i className="fa fa-twitter" aria-hidden="true"></i>
              &nbsp; @itsupplies
            </li>
            <li>
              <i className="fa fa-instagram" aria-hidden="true"></i>
              &nbsp; itsupplies
            </li>
          </ul>
        </li>

        <li className="footer-section__quick-links">
          <h3>Quick links</h3>
          <ul>
            <li>About Us</li>
            <li>Shop</li>
            <li>Servers</li>
            <li>Accessories</li>
            <li>HPE Networking</li>
          </ul>
        </li>

        <li className="footer-section__account">
          <h3>Account</h3>
          <ul>
            <li>My Account</li>
            <li>Checkout</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Compare</li>
          </ul>
        </li>

        <li className="footer-section__help">
          <h3>Help</h3>
          <ul>
            <li>Shipping and Returns</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </li>
      </ul>

      <div className="footer-section__thin-strip">
        <div className="footer-section__copyright">
          <span>© 2013 - 2019 <strong>IT Supplies Co.</strong> - All Rights Reserved.</span>
          <strong>Terms &amp; Conditions</strong> 
          <strong>Privacy Policy</strong>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  