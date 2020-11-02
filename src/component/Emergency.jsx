import React from 'react';
import CommonAside from './CommonAside';
import Header from './Header';
import emergency1 from './images/emergency1.png';
import emergency2 from './images/emergency2.jpg';
import emergency3 from './images/emergency3.jpg';
import emergency4 from './images/emergency4.jpg';

export default function Emergency() {
  return (
    <>
     <Header title={'EMERGENCY TREE SERVICE'} />
     <div className="container tree-removal">
       <div className="row">
         <div className="col-md-9">
            <h1 className="g">Queens County Emergency Tree Services</h1>
            <img src={emergency1} alt=""/>
            <p>Storms can wreak havoc on the trees on and around your property, especially the weakly attached branches. When a tree emergency arises the last thing you want to worry about is cleaning the mess all on your own. JRs Tree Service is here to help.</p>
            <div className="row">
            <div className="col-md-6">
              <h4 className="g">Fast Response 24 Hour Tree Service</h4>
              <p>Jrs Tree Service is here for your you when a tree emergency strikes. We have a 24/7 number where you can call us, (718)723-3025. No matter what your tree service emergency is we can be there to make sure your property is cleaned up, safe and looking orderly again. You will always talk to a service representative instead of a machine.</p>

            </div>
            <div className="col-md-6">
              <h4 className="g">LOOKING FOR MORE? WE KNOW TREES!</h4>
              <p>You’ve come to the right place for premier tree care in Queens, New York, but if you also want reliable and elegant landscaping, stick with us!</p>
              <p>Find out more about our unsurpassed tree removal or take a look at our work in the photo gallery.</p>
            </div>
            </div>
            <div className="row">
              <h1 className="g">Tree Emergency Causes:</h1>
              <div className="col-md-6">
                <img src={emergency2} alt=""/>
                <ul>
                  <li className="g">Fallen Trees</li>
                  <li className="g">Downed branches</li>
                  <li className="g">Split tree or branches</li>
                  <li className="g">Damaged trees</li>
                  <li className="g">Storm damage</li>
                  <li className="g">Storm clean-up</li>
                </ul>
                <a href="" className="g">Call Now! (718)723-3025</a>
              </div>
              <div className="col-md-6">
                <img src={emergency3} alt=""/>
                <h4 className="g">Fast Tree Services Queens NY</h4>
                <p>After 20 years of business, we have seen all sorts of tree emergencies in the Queens County NY and surrounding areas. Whatever the case, the effects of tree damage can cause both minor and major property and even personal damages. We are here for you around the clock.</p>

              </div>
            </div>
          <h3 className="g">24-hour emergency tree service (718) 723-3025</h3>
          <h5 className="g">Why JRs Tree Service</h5>
          <p>At our family owned and operated business, our top priorities are making sure our customers are property is safe and that our finished results are top quality. Our experience speaks for itself; Please take a look through our gallery to see some of our past works.</p>
          <p>Security is one of our top priorities. We carry liability insurance to protect your property, as well as compensation and disability insurance for employee safety. Call us now for a free estimate <a href="" className="g">(718)723-3025</a>.</p>
          <img src={emergency4} alt=""/>
          <h1 className="g">Fast Response For Storm Damage</h1>
          <p>The JRs Tree Service crew is local to queens county and ready to act quick when you need emergency tree service. After a tree is damaged it’s important to act fast to secure your property and remove the hazardous tree. We have over 25 years experience providing tree removal in Queens. No tree is too large or storm damage too great. You can count on JRs tree service to get your tree work done fast and leave your property tidy afterwords.</p>
          <h5 className="g">Fast Tree Services Queens NY</h5>
          <p>After 20 years of business, we have seen all sorts of tree emergencies in the Queens County NY and surrounding areas. Whatever the case, the effects of tree damage can cause both minor and major property and even personal damages. We are here for you around the clock.</p>
         </div>
         {/* end of col md 9 */}
         <div className="col-md-3">
           <CommonAside/>
         </div>
       </div>
     </div>
    </>
  );
}
