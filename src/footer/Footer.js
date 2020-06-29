import React from 'react';
import styles from './Footer.module.scss';
import dataConfig from "react-global-configuration";

function Footer() {
  return <div className={styles.footer}>
    <div className={styles.contentWrapper}>
      <div className={styles.logoWrapper}>
        <a className={styles.logo} href="/"><img
          src={dataConfig.get('endpoint.asset.images') + "/main-footer-foreigner-logo.png"} alt=""/></a>
      </div>
      <div className={styles.companyInfo}>
        <span className={styles.infoText}>51-219, 20 Changwondaehak-ro, Uichang-gu, Changwon-si, Gyeongsangnam-do, 51140, Republic of Korea </span>
        <br/>
          <span className={styles.infoText}><span>Email</span> : global@hibrain.net Copyright © 2019 hibrainnet All rights reserved.</span>
          <span className={styles.infoText}>{dataConfig.get('title.copyright')}</span>
      </div>
      <div className={styles.extraLogo}>
        <div className={styles.titleWrapper}>
          <span className={styles.title}>CONTACT</span>
        </div>
        <div className={styles.email}>Email : global@hibrain.net</div>
      </div>
    </div>
  </div>;

}

export default Footer;