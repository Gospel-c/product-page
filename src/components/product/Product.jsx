import "./product.css";
import Lightbox from "../lightbox/Lightbox";
import { productImage } from "./images";
import { useEffect, useState } from "react";

function Product({ counter, setCounter, setShowCartTrue }) {
    const [selectThumbnailIndex, setSelectThumbnailIndex] = useState(0);
    const [lightbox, setLightbox] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {

        const handleDisabled = () => {
            if (counter === 0) {
                setIsDisabled(true);
            } else {
                setIsDisabled(false);
            }
        }

        handleDisabled();

    }, [counter])

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        if (counter === 0) {
            setCounter(0);
        } else {
            setCounter(counter - 1);
        }
    }
    
    const handleOnClick = (index) => {
        setSelectThumbnailIndex(index);
    }

    const prevIconOnClick = () => {
        if (selectThumbnailIndex === 0) {
            setSelectThumbnailIndex(productImage.length - 1);
        } else {
            setSelectThumbnailIndex(selectThumbnailIndex - 1);
        }
    }

    const nextIconOnClick = () => {
        if (selectThumbnailIndex === productImage.length - 1) {
            setSelectThumbnailIndex(0);
        } else {
            setSelectThumbnailIndex(selectThumbnailIndex + 1);
        }
    }

    return (
        <div className="product-container">
    
            {  
                lightbox && <Lightbox 
                                selectThumbnailIndex = {selectThumbnailIndex}
                                prevIconOnClick = {prevIconOnClick}
                                nextIconOnClick = {nextIconOnClick}
                                handleOnClick = {handleOnClick}
                                setLightbox = {setLightbox}
                            />
            
            }
            <div className="left">
                <div className="img-preview">
                    <span className="tooltip">Click to open lightbox 😎</span>
                    <div className="icon icon-prev" onClick={() => prevIconOnClick()}>
                        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                    </div>
                    <img src={productImage[selectThumbnailIndex].large} alt="large image" onClick={() => setLightbox(true)} />
                    <div className="icon icon-next" onClick={() => nextIconOnClick()}>
                        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                    </div>
                </div>
                <div className="img-carousel">
                    {
                        productImage.map((image, index) => (
                            <div key={index} className="thumbnail-container">
                                <img
                                    src={image.small}
                                    alt="thumbnail"
                                    onClick={() => handleOnClick(index)}
                                    className={index === selectThumbnailIndex ? "active" : ""}
                                 />
                                 {index === selectThumbnailIndex && <div className="img-overlay"></div>}
                            </div>
                        ))
                    }
                
                </div>
            </div>
            <div className="right">
                <h4 className="heading">sneaking company</h4>
                <h2 className="product-name">Fall Limited Edition Sneakers</h2>
                <p className="product-description">These low-profile sneakers are your
                    perfect casual wear companion. Geaturing a durable rubber outer sole, they'll withstand everything the weather can offer.
                </p>
                <div className="price-container">
                    <p className="price">$125.00 </p>
                    <p className="discount">50%</p>
                </div>
                <p className="prev-price">$250.00</p>
                <div className="add-to-cart">
                    <div className="quantity">
                    <svg onClick={() => decrement()} viewBox="0 0 24 24" width="15" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12L18 12" stroke="#FF7E1B" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        <p className="figure">{counter}</p>
                        <svg onClick={() => increment()} width="12" height="12" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" id="b"/></defs><use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#b"/></svg>
                    </div>
                    <button disabled = {isDisabled} className={!isDisabled ? "add-to-cart-btn" : "disabledButton"} onClick={() => { setShowCartTrue() }}>
                        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="hsl(36, 100%, 99%)" fillRule="nonzero"/></svg>
                        <p>Add to cart</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product;