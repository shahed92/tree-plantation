import React from 'react';
import CommonAside from './CommonAside';
import Form from './Form';
import Header from './Header';


export default function Contact() {
  return (
    <div>
        <Header title={'CONTACT'} />
        <div className="container tree-removal">
          <div className="row">
            <div className="col-md-9">
              <Form/>
            </div>
            <div className="col-md-3">
              <CommonAside/>
            </div>
          </div>
        </div>
    </div>
  );
}
