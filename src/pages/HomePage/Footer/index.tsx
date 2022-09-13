import React from 'react';
import styles from "./styles.module.scss";


const Footer = () =>  {
  return (
    <section id="Footer" className={styles.container}>
       <div className={styles.newsletter}>
          <h1>Newsletter</h1>
          <span>Stay Up To Date</span>
          <input type="email" name="email" className="subscribe-input" placeholder="Your email"/>
          <div className={styles.submitButton}>Subscribe</div>
       </div> 
       <div className={styles.contact}>
          <img src="/assets/headerlogo.svg" />
          {/* mail icon */}
          <span>Help@Frybix.com</span>
          {/* phone icon  */}
          <span>+1234 456 678 89</span>
       </div>
       <div className={styles.infos}>
        <div className={styles.links}>
            <ul>
              <h3>Links</h3>
              <li>Home</li>
              <li>About Us</li>
              <li>Bookings</li>
              <li>Blogs</li>
            </ul>
        </div>
        <div className={styles.legal}>
            <ul>
              <h3>Terms Of Use</h3>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
        </div>
        <div className={styles.product}>
            <ul>
              <h3>Take Tour</h3>
              <li>Live Chat</li>
              <li>Reviews</li>
            </ul>
        </div>
       </div>
       <div className={styles.frame}>
          <p>Copyright 2022 Uifry.Com All Rights Reserved </p>
       </div>
    </section>
  )
}

export default Footer;