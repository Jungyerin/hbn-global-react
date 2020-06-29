import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import dataConfig from 'react-global-configuration';
import './App.css';
import './sass/web/commons/_normalize.scss';
import Header from './header/Header';
import Footer from './footer/Footer';
import Main from './routes/main/Main';
import Recruits from './routes/recruitment/recruits/Recruits';

dataConfig.set({
  "endpoint": {
    "asset": {
      "base": "https://s3.ap-northeast-2.amazonaws.com/hbn-mobile-assets-public/global.hibrain.net",
      "banners": "https://asset.hibrain.io/banners",
      "logo": "https://asset.hibrain.io/banners/logos_thumbs",
      "dist": "https://asset.hibrain.io/images/dist",
      "mobile": "https://asset.hibrain.io/images/originals/ads",
      "captcha": "/api/util/captcha/new",
      "customer": "https://asset.hibrain.io/images/dist/contents/customers",
      "pcVersion": "https://global.hibrain.net?_hv=m",
      "mobileVersion": "/?_hv=p",
      "images": "https://s3.ap-northeast-2.amazonaws.com/hbn-mobile-assets-public/global.hibrain.net/development/web/images"
    }
  }
},);

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/:menu/recruits" component={Recruits}/>
          <Route exact path="/" component={Main}/>
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
