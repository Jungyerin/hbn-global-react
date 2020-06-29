import React, { Component } from 'react';
import axios from 'axios';
import MainBanner from '../../mainBanner/MainBanner';
import MainList from '../../mainList/MainList';

class Main extends Component {

  state = {
    banner : [],
    list : []
  };

  // async componentDidMount() {
  //   let response = await axios.get(`http://localhost:8080/`);
  //   this.setState({banner : response.data.result.item.data.adsInfo.ads.Platinums,
  //   list : response.data.result.item.data.recruitmentRecruitsInfo.recruits});
  // }

  render() {
    return (
      <div className="Main">
        <MainBanner banner={this.state.banner}/>
        {/*<MainList list={this.state.list}/>*/}
      </div>
    );
  }
}

export default Main;