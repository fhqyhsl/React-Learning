import { Carousel } from "antd";

const Mainbanner = () => {
  const contentStyle = {
    margin: 0,
    height: "100px",
    overflow: "hidden",
    position: "relative",
  };

  const imageStyle = {
    width: "100%",
    height: "400px",
    objectFit: "cover",
    display: "block",
  };

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange}>
      <div style={contentStyle}>
        <img src="../love.png" alt="轮播项1" style={imageStyle} />
      </div>
      <div style={contentStyle}>
        <img src="../sar.png" alt="轮播项2" style={imageStyle} />
      </div>
      <div style={contentStyle}>
        <img src="../sar1.png" alt="轮播项3" style={imageStyle} />
      </div>
    </Carousel>
  );
};

export default Mainbanner;
