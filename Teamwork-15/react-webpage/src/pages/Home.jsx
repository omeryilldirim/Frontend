import React from "react";
import graphicIMG from "../assets/img/logo_brush.png"
import CSSImg from "../assets/img/logo_css.png"
import htmlImg from "../assets/img/logo_html.png"

const Home = () => {
  return (
    <>
      <section className="showcase">
        <h1 className="showcase__title">Professional Web Design</h1>
        <p className="showcase__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aliquid
          consequuntur recusandae ab quo neque facere quaerat dolorum voluptas
          sequi.
        </p>
      </section>
      <section className="subscribe">
        <div className="subscribe__description">Subscribe To Our Newsletter</div>
        <form className="subscribe__form">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email..."
          />
          <input type="submit" value="Subscribe" id="subscribe__submit--btn" />
        </form>
      </section>
      <article id="topics" className="topics">
        <div className="topics__html">
          <img className="topics__img" src={htmlImg} alt="html logo" />
          <h3 id="aboutpage">HTML5 MARKUP</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            corporis sed placeat assumenda perferendis alias.
          </p>
        </div>
        <div className="topics__css">
          <img className="topics__img" src={CSSImg} alt="css logo" />
          <h3>CSS3 STYLING</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            corporis sed placeat assumenda perferendis alias.
          </p>
        </div>
        <div className="topics__design">
          <img
            className="topics__img"
            src={graphicIMG}
            alt="design logo"
          />
          <h3>Graphic Design</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            corporis sed placeat assumenda perferendis alias.
          </p>
        </div>
      </article>
    </>
  );
};

export default Home;
