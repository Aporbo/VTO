import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';
import { useNavigate } from 'react-router-dom';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [showPopup, setShowPopup] = useState(false); // State for controlling popup visibility
  const navigate = useNavigate();

  // Function to handle "Add to Cart" button click
  const handleAddToCart = (id) => {
    addToCart(id);
    setShowPopup(true); // Show popup when product is added to cart

    // Hide popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">TK {product.old_price}</div>
          <div className="productdisplay-right-price-new">TK {product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          For casual wear.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>

        {/* Try Virtually Button */}
        <button onClick={() => navigate(`/virtualtry/${product.id}`)}>Try-Virtually</button>

        {/* Add to Cart Button */}
        <button onClick={() => handleAddToCart(product.id)}>ADD TO CART</button>
      </div>

      {/* Popup for "Added to Cart" */}
      {showPopup && (
        <div className="popup">
          <p>Product added to cart!</p>
        </div>
      )}
    </div>
  );
}

export default ProductDisplay;
