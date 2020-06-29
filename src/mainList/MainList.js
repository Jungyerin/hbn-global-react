import React from 'react';
import styles from './MainList.module.scss';
import dataConfig from 'react-global-configuration';
import cx from 'classnames';

export default class MainList extends React.Component {

  render() {
    return (
      <div className={styles.mainList}>
        {this.props.list.map((list) => {
            return (<div className={cx(styles.bannerWrapper, styles.oneRow)} key={list.key}>
              <a href="">
                {list.title}
              </a>
            </div>);
          }
        )}

      </div>
    )
  }
}

//export default MainBanner;