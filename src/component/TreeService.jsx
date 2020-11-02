import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TreeCutting from './TreeCutting';
import TreeTrimming from './TreeTrimming';
import Planting from './Planting';
import StumpGrinding from './StumpGrinding';




export default class TreeService extends Component {
  render() {
    return (
      <>
       
         <Switch>
           <Route exact path="/tree-cutting" component={TreeCutting}/>
           <Route exact path="/tree-trimming" component={TreeTrimming}/>
           <Route exact path="/tree-planting" component={Planting}/>
           <Route exact path="/stump-grinding" component={StumpGrinding}/>

         </Switch>
       
      </>
    );
  }
}


// const TreeServics = () => {
 
// };

// export default TreeServics;
