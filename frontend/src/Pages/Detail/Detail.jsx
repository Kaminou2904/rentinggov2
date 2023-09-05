import React, { useState } from 'react';
import './Detail.css';
import { useNavigate } from 'react-router-dom';

function Detail() {

    const navigate = useNavigate();
    const [dateval, setDateval] = useState(1);

  return (
    <div className='mainDetail'>
        <div className="mainDetailImgCont bg-danger">
            <div className="detailHead position-fixed top-0 w-100 p-2 pt-3 px-3 d-flex justify-content-between align-items-center">
                <p className="backBtn p-2 rounded-3 bg-brand-liblue mb-0" onClick={()=> navigate(-1)}><i className="fas fa-arrow-left fs-5 text-brand-purp"></i></p>
                <div className="actionBtns d-flex align-items-center">
                <p className="heartBtn p-2 rounded-3 me-2 bg-brand-liblue mb-0"><i className="far fa-heart fs-5 text-brand-purp"></i></p>
                <p className="cartBtn rounded-3 bg-brand-liblue mb-0"><img src="./images/cart.svg" alt="" className="cartImg img-fluid" /></p>
                </div>
            </div>
            <div className="mainDetailImg pt-5">
                <img src="https://www.transparentpng.com/thumb/women-bag/5n1fgv-red-textured-women-bag-png.png" className='img-fluid' alt="hand bag" />
            </div>
        </div>

        <div className="mainDetailData px-4 mt-4 pt-3">
            <div className="nameNprice d-flex justify-content-between align-items-center">
                <div className="nameWrap">
                    <p className="mainDetailName mb-0 nunito-extrabold text-capitalize">Hand Bag</p>
                    <p className="mainDetailNameSpan mb-0 text-muted nunito-medium">Womens fashion</p>
                </div>
                <p className="mainDetailPrice mb-0 fs-1 nunito-bold text-brand-purp">$79 <span className="mainDetailPriceSpan fs-6 text-muted nunito-semibold">/hr</span></p>
            </div>
        </div>

        <div className="dateDiv px-4">
            <div className="d-flex dateHead mt-4 pt-2">
                <p className="fs-5 nunito-bold mb-0">Select Date</p>
            </div>
            <div className="datePickerWrap">
                <p className="mb-0 datepickerPara nunito-bold text-center mt-2">{dateval} {dateval > 1 ? 'Days' : 'Day'}</p>
                <input type="range" className='datepicker form-range' name="date" id="datepicker" min={1} max={10} value={dateval} onChange={(e)=> setDateval(e.target.value)} style={{'--vlaue': dateval}}/>
            </div>
        </div>

        <div className="aboutProduct px-4 mt-4 pb-5">
            <p className="fs-5 nunito-bold mb-0">About Product</p>
            <p className="aboutTxt mb-0 text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia nobis unde deleniti quam cum? Reiciendis tempora dolores provident amet vitae assumenda commodi doloribus optio error, ratione nemo aliquam, officiis sunt.</p>
        </div>
    </div>
  );
};

export default Detail;