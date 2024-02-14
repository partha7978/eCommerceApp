import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>New Arrivals</span>
          <span>Men</span>
          <span>Women</span>
          <span>Winter Collection</span>
          <span>Summer Collection</span>
          <span>Accessories</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            architecto quis facilis voluptatibus odit facere doloribus
            distinctio officiis cumque blanditiis repudiandae laboriosam totam
            nisi labore amet id, suscipit, consequatur dolor.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            architecto quis facilis voluptatibus odit facere doloribus
            distinctio officiis cumque blanditiis repudiandae laboriosam totam
            nisi labore amet id, suscipit, consequatur dolor.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Ecommerce</span>
          <span className="copyright">
            © Copyright 2022. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="../../../public/assets/payment.webp" alt="payment image" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
