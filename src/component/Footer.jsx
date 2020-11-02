import React from 'react';
import '../../node_modules/mdbootstrap/css/mdb.min.css';

import discount from './images/discount.png'
import SocialIcon from './SocialIcon';
const Footer = () => {
  return (
    <>
      <footer className="page-footer font-small stylish-color-dark pt-4">
        <div className="container text-center text-md-left">
          <div className="row">
            

            <div className="col-md-2 mx-auto">
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
              Tree Services
              </h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!">Queens Tree Service</a>
                </li>
                <li>
                  <a href="#!">Queens Tree Removal</a>
                </li>
                <li>
                  <a href="#!">Tree Cutting</a>
                </li>
                <li>
                  <a href="#!">Tree Pruning</a>
                </li>
                <li>
                  <a href="#!">Stump Grinding</a>
                </li>
                <li>
                  <a href="#!">Commercial Tree Services Queens</a>
                </li>
                <li>
                  <a href="#!">Jr Tree Service Blog</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 mx-auto">
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
              Licensed and Insured
              </h5>
              <p>
              Customer staisfaction is our top priority. We carry liability insurance to protect your property, as well as compensation and disability insurance for employee safety.
              </p>
              <div>
                <h3>Find Us On</h3>
                <SocialIcon/>
              </div>
            </div>

            <div className="col-md-2 mx-auto">
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                contact us
              </h5>

              <ul className="list-unstyled">
                
                <li>
                JRs Tree Service
                </li>
                <li>
                131-64 Hook Creek Blvd.
                </li>
                <li>
                Queens, NY 11422
                </li>
                <p>91237498</p>
              </ul>
              
            </div>

            <div className="col-md-2 mx-auto">
              

              <img src={discount} alt=""/>
            </div>
          </div>
        </div>

        

        <div className="footer-copyright text-center py-3">
          © 2020 Copyright:
        </div>
      </footer>
    </>
  );
};

export default Footer;
