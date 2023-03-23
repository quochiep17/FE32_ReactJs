import React from "react";
import "./style.scss"
import productName from './ProductName'

const ProductCard = (props) => {
    return (
        <div className="product-card">
            <div className="product-card__img">
                <img src="https://znews-photo.zingcdn.me/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg" alt="#" />
            </div>
            <productName />
            <div className="product-card__product-name">abc</div>
            <div className="product-card__btn product-card__btn--red">button ne</div>
            <div className="product-card__btn product-card__btn--blue">button ne</div>
        </div>
    )
}

export default ProductCard;