import React,{ useState, Component}  from 'react';


import { NavLink, Link } from 'react-router-dom';
import Form from './Form';
import card1 from './images/card1.jpg';
import card2 from './images/card2.jpg';
import card3 from './images/card3.jpg';
import localservice1 from './images/localservice1.png';
import localservice2 from './images/localservice2.png';
import localservice3 from './images/localservice3.png';
import localservice4 from './images/localservice4.png';

function Home() {
  const [cards,setCards] = useState([
    {title:'Find Stellar Tree Care',img:card1, link:'/treeservice', id:1},
    {title:'Free Estimates Call Now',img:card2,link:'/contact',id:2},
    {title:'Commercial Tree Services',img:card3,link:'/treeservice',id:3}
  ]);

  const [localServices,setlocalservices] = useState([
    {id:1,img:localservice1,cap:'General Tree Care',details:'JRs Tree Service offers a wide variety of services. Hire us, a licensed and insured arborist to maintain your trees and scrubs on your property.'},
    {id:2,img:localservice2,cap:'Clean Up',details:'We are a highly qualified tree service professionals that love trees and would like to discuss plans for tree maintenance, tree care, and overall landscape improvement.'},
    {id:3,img:localservice3,cap:'Tree Stump Removal',details:'After tree removal – the stump remains. Stump removal needs to be done right. Be sure to call us.' },
    {id:4,img:localservice4,cap:'Commercial Tree Services',details:'It is crucial to hire a talented and professional arborists to trim and prune your trees so your trees can continue to grow to reach full potential.'}
  ])
  return (
    <>
      <header className="home-header">
       <div>
       <h1>QUEENS TREE SERVICE</h1>
        <button type="button" className="btn btn-lg" >(718) 723-3025</button>
       </div>
      </header>
      <div className="container">
        <div className="row pt-5"style={{textAlign:'center'}}>

          {cards.map(card => {
           
            return  (
              <div className="col-lg-4" key={card.id}>
                <h4 className="g">{card.title}</h4>
                <img src={card.img} />
                <Link className="btn  " to={card.link} style={{borderRadius:'25px',fontWeight:'bold',background:'#6ABF1F',color:'#fff'}}>Learn More</Link>
              </div>
            )
            
          })}
                     
        </div>
      </div>
      <section className="local-treeservice" style={{textAlign:'center'}}>
        <div className="container">
          <h2 className="g">Local Tree Service in Queens</h2>
          <div className="row">
          {localServices.map(local => {
           
           return  (
             <div className="col-sm-3" key={local.id}>
               <img src={local.img} />
               <h4 className="g">{local.cap}</h4>
                <p>{local.details}</p>
             </div>
           )
           
         })}
          </div>
          <hr/>
        </div>
      </section>
      {/* hwlp with trees */}
      <section className="help-with-trees">
        <div className="container">
          <h1 style={{color:'#6ABF1F',textAlign:'center'}}>Get Help With Your Trees</h1>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-5">
              <h5 className="g">Tree Trimming</h5>
              <p>Tree trimming is a crucial part of our responsibility having healthy trees that will
                 continue to grow. We’ve understand that trees are an intricate part of Queen’s and the
                  history. Also, trees keep a home shady and provide beautiful foliage to the Queen’s 
                  landscape. We care about trees. We understand that trees must make way for electrical 
                  lines and electrical utility poles. Therefore we have created a  system to match with 
                  federal and state regulations for minimum clearances between trees and power lines. We 
                  are licensed, insured and professional foresters, and we will trim, prune or remove 
                  trees when it comes to public safety.</p>

                <h5><strong>What Exactly is Tree Trimming?</strong></h5>
                <p>
                JRs Tree Service trims young trees to develop and encourage
                 proper growth habits at an early stage.<span className="g"> Queens tree trimming </span>companies will often trim trees depending upon the needs of that tree and what time of year. Correct Trimming of trees will maintain a strong tree stump or structure. Trimming trees will prevent safety hazards such like low branches that are subject 
                to storm damage near a sidewalk or driveway.
                </p>
                <h5 className="g">WHAT DOES TREE REMOVAL INCLUDE</h5>
                  <p>When we remove Tree it will includes bringing the tree down to a stump. For the remainder of the job, we can chip or haul rest of the tree. We are a company that provides tree removal in Queens and the small branches or chip the branches for you on site. Cutting the trunk into small sections can be done and left on location. If you want the stump to ground up and removed – this can be done too. Stumps are ground up by the very particular tool. Therefor may be an additional cost.</p>
                  <p>Roots are not included in the additional fee. In Queens there are alot of very old trees where the roots have come up into the pavement or disrupted hard.</p>
                  <p>Wood splitting can also be done for a fee. This too will be done with an additional and specific tool.</p>
            </div>
            {/* end left side  */}
            <div className="col-md-5">
              <h5 className="g">CHOOSE THE SERVICE THAT’S #1 IN CUSTOMER SATISFACTION</h5>
              <p>Whether you are looking for around-the-clock emergency tree service or want an unsightly or damaged tree removed, turn to JRs Tree Service. We have been in business for over 25 years and are approved by NYC Dept. Of Parks & Housing Authority. Call to inquire about our senior and military discounts!</p>
              <p>We value the attractiveness and environmental impact trees provide the Queen’s area. Law requires us to maintain minimum clearances for tree trimming and pruning.</p>
              <h2 className="g">Free Tree Service Estimate!</h2>
              <Form/>
            </div>
          </div>
        </div>
      </section>
      <section className="map">
        <div className="container">
        <div class="mapouter"style={{position:'relative',textAlign:'right',height:'300px',width:'100%',marginBottom:'2rem'}}>
          <div class="gmap_canvas" style={{overflow:'hidden',background:'none !important',height:'300px',width:'100%' }}><iframe width="100%" height="300" id="gmap_canvas" 
        src="https://maps.google.com/maps?q=still%20perez%20tree%20service%2C%20whittier%2C%20nc&t=&z=11&ie=UTF8&iwloc=&output=embed" 
        frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.whatismyip-address.com/nordvpn-coupon/">nordvpn deals</a></div>
        </div>
        </div>
      </section>
    </>
  );
}

export default Home;
