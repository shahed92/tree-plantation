import React from 'react';
import {Link} from 'react-router-dom'
import CommonAside from './CommonAside';
import Header from './Header';
import treecutting from './images/tree-cutting.jpg';
import treecutting2 from './images/tree-cutting2.jpg';
import treeRemoval1 from './images/treeRemoval1.jpg';


export default function TreeCutting() {
  return (
    <div>
        <Header title={'Tree Cutting'} />
        <div className="container tree-removal">
          <div className="row">
            <div className="col-md-9">
              <h1 className="g">Queens NY Tree Cutting Service</h1>
              <img src={treecutting} alt=""/>
              <p>A little trimming can go a long way. To keep your property looking great as well as safe it is important to maintaining your trees, shrubs, and hedges. Tree trimming and cutting will help you maintain control of those overgrown branches. Putting off the trimming process can give you much more work down the line.</p>

              <div className="row">
                  <div className="col-md-6">
                      <h4 className="g">What exactly is tree cutting?</h4>
                      <p>Tree trimming or tree cutting is the process of maintaining control of those overgrown branches and foliage that interfere with the health of the tree or pose a risk to safety or property. Trimming is usually done annually or twice a year during the dormant season of the tree shrub or hedge. Sometimes people put off trimming trees because they think it will be exhausting work or that they might not end up with the look they wanted. JRs Tree Service is here to help.</p>
                  </div>
                  <div className="col-md-6">
                      <h4 className="g">Reasons for tree cutting?</h4>
                      <ol>
                          <li>To give your landscape a better appearance</li>
                          <li>To prevent any branches from falling and injuring a person, utility lines, or property</li>
                          <li>To help the tree grow in a healthy manner</li>
                          <li>To make room for something to grow or be built</li>
                          <li>Eliminate dead or unhealthy branches</li>
                      </ol>
                  </div>
              </div>
              <h4 className="g">Experience and Value</h4>
              <p>With more than 20 years of business, Jrs Tree Service knows how to get the job done without a hassle. As a family owned business, our top priorities are making sure the customer is satisfied and making sure our finished product is top quality. We are here to help get your tree cutting job done quickly so you can cross it off your list this year.</p>
              <img src={treecutting2} alt=""/>
              <h4 className="g">Looking For More? We Also Do Tree Pruning.</h4>
              <p>You’ve come to the right place for premier tree care in Queens, New York; especially tree pruning and removal!</p>
              <p>Find out more about our unsurpassed <Link to="/treeremoval" className="g">tree removal</Link> services or take a look at our work in the photo gallery.</p>
                <h1 className="g">Tree Pruning  Trimming</h1>
                <img src={treeRemoval1} alt=""/>
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
