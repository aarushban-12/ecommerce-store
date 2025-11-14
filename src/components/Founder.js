import React from "react";
import "./founder.css"; // Custom styles


const Founder = () => {
  return (
    <div className="founder-page container py-5">
      <h1 className="text-center display-4 fw-bold mb-5">Message from the Founder</h1>

      {/* Founder Bio */}
      <section className="mb-5">
        <h2 className="h4 fw-semibold mb-3">Aarush Bansal</h2>
        <p className="lead">
          I started this store with one goal in mind — to make shopping not only convenient, but meaningful.
          Every product we carry is something I’d personally recommend, and every customer is treated like family.
          This journey began in my room with a laptop and a passion, and it’s been growing ever since.
        </p>
      </section>

      {/* Message Box */}
      <section className="founder-message p-4 rounded shadow-sm mb-5">
        <p className="fs-5 mb-3">
          Thank you for being part of our journey. This business isn’t just a store — it’s a community.
          We’re here to bring you quality, trust, and a personal touch in every order. Your support means the world to us.
        </p>
        <p className="fw-semibold fst-italic">– Aarush Bansal, Founder & CEO</p>
      </section>

      {/* Mission Section */}
      <section className="mb-5">
        <h3 className="h4 fw-bold mb-3">Our Mission</h3>
        <p className="lead">
          At TradeHaven, we believe in more than transactions. We’re here to inspire better living through
          hand-picked products, reliable service, and a passion for making things better.
        </p>
      </section>

      {/* Timeline */}
      <section>
        <h3 className="h4 fw-bold mb-3">Our Journey</h3>
        <ul className="timeline list-unstyled">
          <li><strong>2023:</strong> The idea is born, starting with just a few items.</li>
          <li><strong>2024:</strong> Official launch — first 100 customers!</li>
          <li><strong>2025:</strong> Expanded our product range and launched our mobile experience.</li>
        </ul>
      </section>
    </div>
  );
};

export default Founder;
