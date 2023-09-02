import React from 'react';
import './Categorycard.css';

function Categorycard() {
  return (
    <div className='mainCategory rounded-brand bg-danger d-flex justify-content-center align-items-center me-2'>
        <div className="categoryIcon text-center">
            <i className="fas fa-vest fs-3 text-white"></i>
            <p className="categoryTxt mb-0 lh-sm text-white">Fashion</p>
        </div>
    </div>
  )
}

export default Categorycard