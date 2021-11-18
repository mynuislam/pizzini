import React,{Fragment} from 'react';
import Navigation from '../Navigation/Navigation';
import '../Style.css/Style.css'
const Allpagetop = (props) => {
 return (
  <Fragment>
    <div className="banner1">
<Navigation/>
<div >
<h1 className="AllBanner">{props.pagetittle}</h1>
</div>
</div>
  </Fragment>
 );
};

export default Allpagetop;