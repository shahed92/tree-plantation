import React from 'react';
import {Link} from 'react-router-dom'
import CommonAside from './CommonAside';
import Header from './Header';
import stump1 from './images/tree-removal-queens1.jpg';
import treeRemoval3 from './images/treeRemoval3.jpg';



export default function StumpGrinding() {
  return (
    <div>
        <Header title={'Stump Grinding'} />
        <div className="container tree-removal">
          <div className="row">
            <div className="col-md-9">
              <h1 className="g">Care For Your Trees With Proven Service</h1>
              <p>Maintain the natural beauty of your foliage with JR’s Tree Service. Our courteous and knowledgeable tree experts offer reliable, hands-on care for residential and commercial properties, and every job is owner supervised!</p>
                <img src={stump1} alt=""/>
                <div className="row">
                    <div className="col-md-6">
                    <h4 className="g">Covering All Tree Care</h4>
                    <ol>
                        <li>Planting</li>
                        <li>Removal</li>
                        <li>Pruning</li>
                        <li>Trimming</li>
                        <li>Stump grinding</li>
                        <li>Storm damage</li>
                        <li>Hazardous tree removal</li>
                        <li>Stump clean-up service</li>
                    </ol>
                    </div>
                    <div className="col-md-6">
                        <h4 className="g">LOOKING FOR MORE? WE ALSO DO LANDSCAPING.</h4>
                        <p>You’ve come to the right place for premier tree care in Queens, New York, but if you also want reliable and elegant landscaping, stick with us!</p>
                        <p>Find out more about our unsurpassed tree removal or take a look at our work in the photo gallery.</p>
                        
                    </div>
                </div>
                {/* end row */}
                <h3 className="g text-center">Queens Tree Removal Service</h3>
                        <img src={treeRemoval3} alt=""/>
                        <h4 className="g">Choose The Best Deal</h4>
                        <p>Get great tree care service without paying unreasonable prices. We’ll leave you with healthy, lush, and beautiful trees, which is why we’re ranked #1 in customer satisfaction!</p>
                        <p>Security is one of our top priorities. We carry liability insurance to protect your property, as well as compensation and disability insurance for employee safety.</p>
                        <p>Reach out to JR’s Tree Service right away to get your FREE estimate!</p>
                        <h3 className="g text-center">Read Our Reviews On Facebook</h3>
                        <p>You’ve come to the right place for premier tree service in Queens, New York, but if you also want reliability and experience, stick with us!</p>
                        <h4 className="g">Call now to schedule your free estimate
(718) 723-3025</h4>
<p>Get great tree care service without paying unreasonable prices. We’ll leave you with healthy, lush, and beautiful trees, which is why we’re ranked #1 in customer satisfaction!</p>
<p>Security is one of our top priorities. We carry liability insurance to protect your property, as well as compensation and disability insurance for employee safety.</p>
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
