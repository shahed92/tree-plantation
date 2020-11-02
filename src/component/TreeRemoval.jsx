import React,{useState,Link} from 'react';

import CommonAside from './CommonAside';
import Header from './Header';
import treeRemoval1 from './images/treeRemoval1.jpg';
import treeRemoval2 from './images/treeRemoval2.jpg';
import treeRemoval3 from './images/treeRemoval3.jpg';

export default function TreeRemoval() {
 
  return (
    <>
      <Header title={'QUEENS TREE REMOVAL'}/>
      <div className="container tree-removal">
        <div className="row">
          <div className="col-md-9">
              <h1 className="g">Queens NY Tree Removal</h1>
              <p>Do you have dead or dying trees that need to be removed before they get worse and fall? Is there a big unsightly tree blocking your view and enjoying of your property? What about those roots that you have to avoid when pulling up in your driveway or walking on sidewalks?</p>

              <button>
                <img src={treeRemoval1}/>
              </button>

              <div className="row pt-5">
              <div className="col-md-6">
                <h2 className="g">Safety First</h2>
                <p>Not only are dead or dying trees an eye-sore, but they are also dangerous. Removing a tree is not something that you should do yourself. It is especially important to have a professional remove a tree if you suspect it has the potential to fall over. Removing a tree before anything happens is the best way to protect your property and your family.</p>

              </div>
              <div className="col-md-6">
                <h2 className="g">5 Star Tree Service</h2>
              </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <h3 className="g">Reasons to remove a Tree:</h3>
                  <ul>
                    <li>Potential for falling over due to parts that are dying or infected.</li>
                    <li>You need the space open to do major landscape renovations.</li>
                    <li>The tree being in the way of your view of your surrounding area.</li>
                    <li>You want to plant a different kind of tree, shrub or plant.
Extensive tree damage.</li>
<li>The tree is too close to your house, driveway, sidewalks, utility lines, pool, or buildings.</li>
                  </ul>
                  <p>Trees acts as a natural thermal insulator during summer season and provides protection against winds during winter. Tree planting is also an easy and effective way to beautify and increase the value of your property.

</p>
                  <h3 className="g">Benefits of Tree Planting</h3>
                  <ul>
                    <li>Better landscape</li>
                    <li>Cleans Air</li>
                    <li>Reduce effects of climate change</li>
                    <li>Saves energy</li>
                    <li>Wind breaks</li>
                    <li>Shading</li>
                    <li>Prevents flood</li>
                    <li>Increase property value</li>
                  </ul>
                </div>
                {/* end col 6 */}
                <div className="col-md-6">
                  <h3 className="g">Tree Removal</h3>
                <p>You’ve come to the right place for premier tree care in Queens, New York, but if you also want reliable and elegant landscaping, stick with us!</p>
                <p>Find out more about our unsurpassed <span className="g">Stump Grinding</span> or take a look at our work in the <span className="g">photo gallery</span>.</p>
                <p>Get great tree care service without paying unreasonable prices. We’ll leave you with healthy, lush, and beautiful trees, which is why we’re ranked #1 in customer satisfaction!</p>

                <h2 className="g">Value and a Job Well Done</h2>
                <p>JR’s Tree Service is here to help you get your property looking the way you want it to look, while also making it a safer environment. Our family owned and operated business is here to help you. We have award winning service and we focus on doing a high-quality job so your property looks incredible when we’re done.</p>
                <p>Reach out to JR’s Tree Service right away to get your FREE estimate</p>
                </div>
              </div>
              <p>You’ve come to the right place for premier tree care in Queens, New York, but if you also want reliable and elegant landscaping, stick with us!
                  <strong>Choose The Best Deal</strong> </p>
<button>
                <img src={treeRemoval2}/>
              </button>

              <h1 className="g">Value and Job Well Done</h1>
              <p>JR’s Tree Service is here to help you get your property looking the way you want it to look, while also making it a safer environment. Our family owned and operated business is here to help you. We have award winning service and we focus on doing a high-quality job so your property looks incredible when we’re done.</p>
              <button>
                <img src={treeRemoval3}/>
              </button>

              <h1 className="g">Stump Removal & Grinding</h1>
              <button>
                <img src={treeRemoval3}/>
              </button>
          </div>
          {/* end of col md 10 */}
          
          <div className="col-md-3">
           <CommonAside/>
          </div>
        </div>
      </div>
    </>
  );
}
