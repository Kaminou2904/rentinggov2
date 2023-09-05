import React from 'react';
import './Productcard.css';
import { Link } from 'react-router-dom';

function Productcard() {
  return (
    <div className='mainProductcard rounded-brand shadow me-2'>
        <div className="productcardImg bg-danger p-3">
            <img src="https://www.transparentpng.com/thumb/women-bag/5n1fgv-red-textured-women-bag-png.png" className='img-fluid' alt="handBag" />
        </div>
        <div className="mainProductcardData p-2">
            <Link to='/detail' className='nav-link'><p className="mainProductcardName nunito-bold text-capitalize mb-0">hand bag</p></Link>
            <p className="mainProductcardCategory mb-0 text-muted">category</p>
            <div className="mainProductcardPrice text-brand-purp nunito-bold fs-5">$79 <span className='text-muted nunito-semibold fs-6'>/Day</span></div>
        </div>
    </div>
  );
};

export default Productcard;