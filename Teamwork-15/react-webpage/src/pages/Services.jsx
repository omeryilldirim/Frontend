import React from "react";

const Services = () => {
  return (
    <section id="servicepage" className="services">
      <div className="service__types">
        <h4>Services</h4>
        <div className="service__design">
          <h4>Website Design</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            aspernatur officiis eaque, ratione iusto nostrum commodi ex dicta
            odio quae.
          </p>
          <p>Pricing: $1000 - $3000</p>
        </div>
        <div className="service__maintenance">
          <h4>Website Maintenance</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            aspernatur officiis eaque, ratione iusto nostrum commodi ex dicta
            odio quae.
          </p>
          <p>Pricing: $250 per month</p>
        </div>
        <div className="service__hosting">
          <h4>Website Hosting</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            aspernatur officiis eaque, ratione iusto nostrum commodi ex dicta
            odio quae.
          </p>
          <p>Pricing: $25 per month</p>
        </div>
      </div>
      <div className="service__quote">
        <form className="quote__form" action="#">
          <h5 className="quote__title">Get A Quote</h5>
          <label for="name">Name</label>
          <input type="text" name="name" id="name" placeholder="Name" />

          <label htmlFor="e-mail">Email</label>
          <input
            type="email"
            name="email"
            id="e-mail"
            placeholder="Email Address"
          />

          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="2"
            placeholder="Message"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Services;
