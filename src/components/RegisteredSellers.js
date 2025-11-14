import React from 'react';
import Navbar from './Navbar';
import './registeredSellers.css'; // Custom styles


const sellers = [
    {
      name: "TechX Essentials",
      category: "Electronics",
      rating: 4.8,
      description: "Top-rated store offering gadgets, accessories, and smart devices with fast shipping.",
    },
    {
      name: "UrbanWear Co.",
      category: "Fashion",
      rating: 4.6,
      description: "Trendy and affordable fashion for all seasons. Trusted by over 5,000 buyers.",
    },
    {
      name: "Home Haven",
      category: "Home & Kitchen",
      rating: 4.7,
      description: "Premium kitchen tools, home decor, and essentials with guaranteed quality.",
    },
    {
      name: "NextGen Tech",
      category: "Tech",
      rating: 4.5,
      description: "Innovative tech products including laptops, wearables, and accessories at unbeatable prices.",
    },
    {
      name: "ChicStyle Boutique",
      category: "Fashion",
      rating: 4.7,
      description: "Your go-to source for elegant dresses, streetwear, and accessories curated weekly.",
    },
    {
      name: "GlowUp Beauty",
      category: "Beauty",
      rating: 4.9,
      description: "Clean, cruelty-free skincare and beauty products that customers swear by.",
    },
    {
      name: "Casa Luxe",
      category: "Home",
      rating: 4.6,
      description: "Luxury furniture, cozy accents, and organization essentials for every modern home.",
    },
    {
      name: "FitFusion Gear",
      category: "Fitness",
      rating: 4.8,
      description: "Top-notch fitness equipment, activewear, and supplements for your healthiest lifestyle.",
    },
    {
      name: "Beauté Box",
      category: "Beauty",
      rating: 4.5,
      description: "Monthly beauty boxes featuring skincare, makeup, and tools from top indie brands.",
    },
    {
      name: "Pulse Athletics",
      category: "Fitness",
      rating: 4.7,
      description: "Performance-driven activewear and training gear trusted by athletes and enthusiasts alike.",
    },
    {
      name: "ModSpace Living",
      category: "Home",
      rating: 4.4,
      description: "Functional and aesthetic home décor and furnishings made for small spaces.",
    },
    {
      name: "GadgetGrid",
      category: "Tech",
      rating: 4.6,
      description: "Affordable electronics, chargers, accessories, and phone cases backed by excellent support.",
    },
    {
      name: "Runway Rebel",
      category: "Fashion",
      rating: 4.9,
      description: "Bold fashion statements and seasonal must-haves inspired by global street style.",
    }
  ];

function RegisteredSellers() {

  return (
    <div>
        <Navbar />
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">Featured Registered Sellers</h2>
      <div className="row">
        {sellers.map((seller, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div className="seller-card h-100 shadow-sm">
              <div className='card-body p-3'>
                <p className="text-primary card-title">{seller.name}</p>
                <p className="mb-2 text-muted card-subtitle">{seller.category}</p>
                <p className='card-text'>{seller.description}</p>
                <div className="rating">
                  <i className="bi bi-star-fill text-warning me-1"></i>
                  {seller.rating.toFixed(1)} / 5
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default RegisteredSellers;
