import { genRadiusStyle } from "antd/es/input-number/style";
import "./navbar/ImageGallery.css";
const MainProductList = () => {
  return (
    <div className="gallery">
      <div className="item">
        <img src="../love.png" alt="Image 1" />
        <div className="mainitem">
          <img src="../love.png" alt="Image11" className="radius" />
          <div>
            <div className="title">标题1</div>
            <div className="title">标题1</div>
          </div>
        </div>
      </div>
      <div className="item">
        <img src="../sar.png" alt="Image 2" />
        <div className="mainitem">
          <img src="../sar.png" alt="Image 2" className="radius" />
          <div>
            <div className="title">标题2</div>
            <div className="title">标题2</div>
          </div>
        </div>
      </div>
      <div className="item">
        <img src="../sar1.png" alt="Image 3" />
        <div className="mainitem">
          <img src="../sar1.png" alt="Image 3" className="radius" />
          <div>
            <div className="title">标题3</div>
            <div className="title">标题3</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainProductList;
