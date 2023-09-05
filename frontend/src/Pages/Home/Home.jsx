import React from 'react';
import './Home.css';
import Categorycard from '../../Components/Categorycard/Categorycard';
import Productcard from '../../Components/Productcard/Productcard';

function Home() {
  return (
    <div className='mainHome'>
        <div className="mainHomeHeader py-2 pt-4 d-flex align-items-center justify-content-between px-4">
            <p className="mb-0 nunito-bold d-flex align-items-center"><i className="fas fa-map-marker-alt me-1 fs-4 text-muted"></i><span className="nunito-bold text-muted">Mumbai</span></p>
            <p className="mb-0 nunito-bold"><i className="far fa-bell fs-4 text-muted"></i></p>
        </div>

        <div className="heroText px-4 mt-3">
            <h1 className="mb-0 nunito-extrabold lh-sm">Find Best <br />Products Nearby</h1>
        </div>

        <div className="searchBoxWrap px-4">
            <div className="searchBox d-flex justify-content-between align-items-center rounded-pill shadow-sm mt-3">
                <input type="text" className="form-control shadow-none border-0 rounded-pill py-1" placeholder='Search product or category'/>
                <p className="filterIcon d-flex justify-content-center align-items-center px-4 py-2 bg-brand-purp rounded-pill text-center mb-0"><i className="fas fa-sliders-h fs-3 my-1 text-white"></i></p>
            </div>
        </div>

        <div className="categoryDiv px-4">
            <div className="d-flex categoryHead justify-content-between align-items-end mt-4">
                <p className="fs-5 nunito-bold mb-0">Categories</p>
                <p className="mb-0 fs-6 text-muted nunito-medium">More</p>
            </div>
            <div className="categoryCardWraper">
                <div className="categoryCardWrap d-flex mt-2">
                    <Categorycard/>
                    <Categorycard/>
                    <Categorycard/>
                    <Categorycard/>
                    <Categorycard/>
                </div>
            </div>
        </div>

        <div className="trendingProDiv">
            <div className="d-flex categoryHead justify-content-between align-items-end px-4 mt-5">
                <p className="fs-5 nunito-bold mb-0">Trending</p>
                <p className="mb-0 fs-6 text-muted nunito-medium">More</p>
            </div>
            <div className="productCardWraper mt-1">
                <div className="productCardWrap p-2 px-4 pb-5 d-flex">
                    <Productcard/>
                    <Productcard/>
                    <Productcard/>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Home;