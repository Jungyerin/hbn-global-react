import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import dataConfig from 'react-global-configuration';
import cx from 'classnames';

function Header(){
    return <div className={styles.header}>
      <div className={styles.topMenuWrapper}>
        <div className={styles.koreanSite}>
          <a className={styles.link} href="https://www.hibrain.net/">KOREAN ></a>
        </div>
        <img src={dataConfig.get('endpoint.asset.dist') + '/background/loginbar_x2.png'} className={styles.dividedIcon} alt="로그인 구분 아이콘"/>
        <div className={styles.international}>INTERNATIONAL</div>
      </div>
      <a className={styles.logoWrapper} href="/"><img
        src={dataConfig.get('endpoint.asset.images') + "/main-foreigner-logo.png"} alt=""/></a>
      <div className={styles.menuWrapper}>
        <div className={styles.menuText}><NavLink to="/recruitment/recruits" activeClassName={styles.recruitment} className={styles.link}>RECRUITMENT</NavLink></div>
        <div className={styles.menuText}><NavLink to="/gradstudent/recruits" activeClassName={styles.gradstudent} className={styles.link}>GRADUATE ADMISSIONS</NavLink></div>
      </div>
    </div>;
}

export default Header;