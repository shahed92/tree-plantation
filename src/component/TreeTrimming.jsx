import React from 'react';
import CommonAside from './CommonAside';
import Header from './Header';
import treetrimming from './images/tree-pruning-queens.jpg';
import treecutting2 from './images/tree-cutting2.jpg';
import { Link } from 'react-router-dom';


export default function TreeTrimming() {
  return (
    <div>
        <Header title={'Tree Trimming'} />
        <div className="container tree-removal">
          <div className="row">
            <div className="col-md-9">
              <h1 className="g">Queens NY Tree Trimming Service</h1>
              <div style={{display:'flex', justifyContent: 'center'}}><img src={treetrimming} alt="" style={{width:'auto'}}/></div>
                <p>Tree Trimming not only keeps your landscape looking great, but it also improves the health of your trees. The tree grows healthier due to the removal of the dead and infected parts, and it adds an aesthetic value to your property. Keeping your trees pruned and your trees trimmed, especially here in Queens, New York, helps prevent any tree limbs from breaking or splitting and causing property damage.</p>

                <h2 className="g">What is tree pruning?</h2>
                <p>Tree pruning is not the same thing as tree trimming. Pruning requires knowledge of the plant, landscape, and local environment. Knowing when to prune, and the right way to prune is very important so you are benefiting the plant. Pruning trees when they are smaller can also help you avoid bigger problems down the line. This is why it is important to hire a company that has extensive knowledge of trees local to Queens County NY.</p>
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="g">Experience and Value</h4>
                        <p>After 20 years of business, we have seen how a landscape can improve with a little pruning. Pruning your trees makes your property look appealing, giving a professional and clean impression to anyone who sees it.</p>

                    </div>
                    <div className="col-md-6">
                        <h4 className="g">Benefits of tree pruning</h4>
                        <ol>
                            <li>Increased Visibility</li>
                            <li>Prevent high wind tree breakage</li>
                            <li>Improved Appearance</li>
                            <li>Control the tree size</li>
                            <li>Dead or dying branches removed</li>
                            <li>Encouraging healthy growth</li>
                            <li>Stimulating fruit production</li>
                        </ol>
                    </div>
                    
                </div>
                <h1 className="g">Tree Cutting</h1>
                <img src={treecutting2} alt=""/>
                <h3 className="g">LOOKING FOR MORE? WE ALSO DO TREE PRUNING.</h3>
                <p>You’ve come to the right place for premier tree care in Queens, New York; especially tree pruning and removal!</p>
                <p>Find out more about our unsurpassed <Link to='/treecutting' className="g">tree cutting </Link> and <Link to='/treeremoval' className="g">tree removal </Link> services or take a look at our work in the photo gallery.</p>
                <h4>Email us for an appointment for a <Link to="/contact" className="g">free estimate</Link> </h4>
                <p>Tree trimming is an essential part of our obligation to deliver reliable and safe electrical service. We’ve developed an efficient tree care system to ensure minimum clearances between power lines and trees. When you hire JR Tree Service – you are contacting tree services company that is accredited, professional foresters – pruning and trimming pros, dependability and look after your safety and public security.</p>
                <p>We value the attractiveness and environmental impact trees supply us all. Law requires us to keep minimal clearances.</p>
                <p>When there is an outage – we can be on your property within 24 hours. We answer our phones 24 hours a day. Our improved, proactive tree care plan reduced the continuing outages.</p>
                <p>What’s directional pruning?</p>
                <h2 className="g">24-hour emergency tree service
(718) 723-3025</h2>
<p>At our family owned and operated business, our top priorities are making sure our customers are property is safe and that our finished results are top quality. Our experience speaks for itself; Please take a look through our gallery to see some of our past works.

</p>
<p>Security is one of our top priorities. We carry liability insurance to protect your property, as well as compensation and disability insurance for employee safety. Call us now for a free estimate (718)723-3025.</p>
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
