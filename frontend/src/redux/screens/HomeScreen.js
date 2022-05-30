import "./HomeScreen.css";

import Product from "../components/Product";

const HomeScreen = () => {
  console.log("hello");
  return (
    <div className="homeScreen">
      <h2 className="homescreen_title">Latest products</h2>

      <div className="homescreen_products">
        <Product />
      </div>
    </div>
  );
};

export default HomeScreen;
