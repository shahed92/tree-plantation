import React from 'react';
import {Link} from 'react-router-dom'
import CommonAside from './CommonAside';
import Header from './Header';
import planting from './images/planting.png';
import treeRemoval3 from './images/treeRemoval3.jpg';



export default function Planting() {
  return (
    <div>
        <Header title={'Planting & Removal'} />
        <div className="container tree-removal">
          <div className="row">
            <div className="col-md-9">
              <h1 className="g">Queens Tree Planting Service</h1>
                <img src={planting} alt=""/>

                <div className="row">
                    <div className="col-md-6">
                        <h3 className="g">Tree Planting Benefits</h3>
                        <p>Trees add to the beauty of your property and landscaping. When trees are unhealthy they need to be removed and replaced. Trees acts as a natural thermal insulator during summer season and provides protection against winds during winter. Tree planting is an easy and effective way to beautify and increase the value of your property. We can assist in all your tree removal and tree planting needs in the Queens NY area.</p>

                    </div>
                    <div className="col-md-6">
                        <h3 className="g">Why plant trees?</h3>
                        <ol>
                            <li>Better Your landscape</li>
                            <li>Create Fresh Clean Air</li>
                            <li>Create Natural Wind Breaks</li>
                            <li>Create Natural Shade</li>
                            <li>Add Wind Breaks</li>
                            <li>Increase Property Value</li>
                            <li>Maintain safe foliage</li>
                        </ol>
                    </div>
                </div>
                <h1 ><Link to="/treeremoval" className="g">Queens Tree Removal</Link> </h1>
                <img src={treeRemoval3} alt=""/>
            </div>
            {/* end of col md 9 */}
            <div className="col-md-3">
              <CommonAside/>
            </div>
          </div>
        </div>
    </div>
  );
}
