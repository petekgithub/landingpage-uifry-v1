import React from 'react';
import styles from "./styles.module.scss";


const Faq = () =>  {
  return (
    <section id="Faq" className={styles.container}>
        <div className={styles.up}>
            <span>FAQ</span>
            <h1>Frequently Asked Questions</h1>
        </div>
        <div className={styles.content}>
          <div className={styles.down}>
            <div className='left1'>
              <h3>The best financial accounting app ever!</h3>
              <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </div>
            <div className='left2'>
              <h3>The best financial accounting app ever!</h3>
              <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </div>
            <div className='left3'>
              <h3>The best financial accounting app ever!</h3>
              <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </div>
            <div className='right1'>
              <h3>The best financial accounting app ever!</h3>
              <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </div>
            <div className='right2'>
              <h3>The best financial accounting app ever!</h3>
              <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </div>
            <div className='right3'>
              <h3>The best financial accounting app ever!</h3>
              <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </div>


          </div>
        </div>

    </section>
  )
}

export default Faq;