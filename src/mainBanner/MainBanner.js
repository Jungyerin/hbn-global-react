import React from 'react';
import styles from './MainBanner.module.scss';
import dataConfig from 'react-global-configuration';
import cx from 'classnames';

export default class MainBanner extends React.Component {

  render() {
    return (
      <div className={styles.mainBanner}>
        <img width="100%"
             style={{width: 100 + "%"}}
             src={dataConfig.get('endpoint.asset.images') + "/main-big-image.jpg"}
             alt="main-empty-banner"
             className="bigImage"/>
        <div className={styles.bannerListWrapper}>
          {this.props.banner.map((banner) => {
              return (<div className={cx(styles.bannerWrapper, styles.PROF)} key={banner.adId}>
                <a href={banner.href}>
                  <div className={styles.nameWrapper}>
                    <div className={styles.nameText}>
                      <img
                        src={dataConfig.get('endpoint.asset.logo') + "/" + banner.logoFilename +"_ci_hbn_eng_237_x2.png"}
                        alt=""/></div>
                  </div>
                  <div className={cx(styles.titleWrapper, styles.PROF)}>
                    <div className={styles.titleText}>{banner.title2}</div>
                    <div className={styles.dateText}>{banner.title4}</div>
                  </div>
                </a>
              </div>);
            }
          )}
        </div>
      </div>
    )
  }
}

//export default MainBanner;