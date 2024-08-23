import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <div>
      <div id="navbar">
        <div id="navbar-left">
          <h1>Food-Connections</h1>
        </div>
        <div id="navbar-right">
          <Link to="/login" className="nav-login-button">Log In</Link>
          <Link to="/signup" className="nav-signup-button">Sign Up</Link>
        </div>
      </div>
      <hr id="hr" />
      <br /><br />
      <div style={{ display: 'flex' }} id="content">
        <div style={{ width: '50%' }}>
          <h1 className="top" style={{ marginBottom: 0 }}>Connecting Donors,</h1>
          <h1 className="top" style={{ marginTop: 0 }}>Feeding Communities</h1>
          <p id="describe">
            Food-Connections is a platform designed to bridge the gap between food donors and beneficiaries in Singapore. 
            We enable supermarkets, restaurants, and other organizations to donate surplus food directly to those in need, 
            ensuring that no food goes to waste and every meal finds a plate.
          </p>
          <br /><br />
          <Link to="/signup" id="sign">Join Us to Make a Difference</Link>
        </div>
        <div style={{ width: '50%', paddingLeft: '50px' }}>
          <div id="donor-section">
            <h2>For Donors</h2>
            <p>
              Whether you're a supermarket, restaurant, or individual, your surplus food can provide meals to those in need. 
              Use our platform to easily schedule pickups and track your contributions. Together, we can reduce food wastage 
              and help the less fortunate in our community.
            </p>
          </div>
          <div id="beneficiary-section">
            <h2>For Beneficiaries</h2>
            <p>
              If you are an individual or organization in need of food, our platform connects you with donors who can provide 
              the food you need. Register as a beneficiary and start receiving food donations directly from local donors, 
              ensuring that you and your loved ones have access to nutritious meals.
            </p>
          </div>
        </div>
      </div>
      <div id="banner-container">
        <img src="/banner.png" alt="Banner" id="banner-image" />
      </div>
    </div>
  );
}

export default LandingPage;
