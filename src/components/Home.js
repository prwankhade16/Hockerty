import React from "react";
import background from "../../src/image/background.webp";

function Home() {
  return (
    <>
      <section id="header">
        <div>
          <div className="on-image">
            <h1>FALL WINTER</h1>
            <h1> LOOKBOOK</h1>
            <button>DISCOVER IT</button>
          </div>
          <img className="home_img" src={background} alt="Background" />
        </div>
      </section>
    </>
  );
}

export default Home;
