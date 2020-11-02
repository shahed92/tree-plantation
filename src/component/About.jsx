import React from 'react';
import Header from './Header';

function About() {
  return (
    <>
      <Header title={'BLOG'} />
      <div className="container">
        <div className="box shadow p-5">
          <h3 style={{fontWeight:'bold'}}>Should you buy a real or fake Christmas tree?</h3>
          <p>Getting together as a family and redecorating Christmas trees is most likely one of the most famous Christmas traditions all over the world. However, lots of individuals have been debating about the advantages and disadvantages of actual vs. artificial Christmas trees ever since artificial trees shot to popularity in the early 20th century. Whether you’re …

              </p>
              <button className="btn">continue</button>
        </div>
        {/* single blog */}
        <div className="box shadow p-5">
          <h3 style={{fontWeight:'bold'}}>Top 5 Trees in Brooklyn and How to Care for Them</h3>
          <p>In a rapidly warming environment, trees and shrubs are more critical than ever; Trees have so many positive environmental attributes. Trees provide shade where there is alot of concrete and asphalt to heat up some streets. Trees naturally also provide oxygen and clean air. In Brooklyn, the surroundings are mainly covered with asphalt and concrete, …</p>
              <button className="btn">continue</button>
        </div>
        {/* single blog */}
        <div className="box shadow p-5">
          <h3 style={{fontWeight:'bold'}}>How to care for trees before winter time</h3>
          <p>The cold winter months are a critical element of a tree’s life cycle. Even if deciduous trees loose leaves in the fall, this dormant phase essentially provides a significant purpose-namely the rebirth of crucial energy reserves for the next year’s growth. The natural winter dormancy of lots of trees, along with the increased presence when …</p>
              <button className="btn">continue</button>
        </div>
        {/* single blog */}
        <div className="box shadow p-5">
          <h3 style={{fontWeight:'bold'}}>Does Your Home Need Tree Removal Services in Queens?</h3>
          <p>Your home is your castle – a place where you can come home to feel safe and secure. Your yard is another place where you seek tranquility and comfort. One never thinks about the trees, the scrubs or even the quality of the grass. How do you know a tree needs to be trimmed or …</p>
              <button className="btn">continue</button>
        </div>
        {/* single blog */}
      </div>
    </>
  );
}

export default About;
