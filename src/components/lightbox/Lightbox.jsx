import './lightbox.css';
import { productImage } from '../product/images';

function Lightbox({ selectThumbnailIndex, prevIconOnClick, nextIconOnClick, handleOnClick, setLightbox }) {
    return (
        <div className="container">
            
            <div className="showcase">
            <div className="close-icon" onClick={() => setLightbox(false)}>
                <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#FFFFFF" fillRule="evenodd"/></svg>
            </div>
                <div className="lightbox-img-preview">
                    <div className="lightbox-icon lightbox-icon-prev" onClick={() => prevIconOnClick()}>
                        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                    </div>
                    <img src={productImage[selectThumbnailIndex].large} alt="large image" />
                    <div className="lightbox-icon lightbox-icon-next" onClick={() => nextIconOnClick()}>
                        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                    </div>
                </div>
                <div className="lightbox-img-carousel">
                    {
                        productImage.map((image, index) => (
                            <div key={index} className="lightbox-thumbnail-container">
                                <img
                                    src={image.small}
                                    alt="thumbnail"
                                    onClick={() => handleOnClick(index)}
                                    className={index === selectThumbnailIndex ? "active" : ""}
                                 />
                                 {index === selectThumbnailIndex && <div className="lightbox-img-overlay"></div>}
                            </div>
                        ))
                    }
                
                </div>
            </div>

        </div>
    )
}

export default Lightbox;