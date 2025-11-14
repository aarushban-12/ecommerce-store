import React from "react";
import Navbar from "./Navbar";
import "./menu.css"; // Import CSS for styling

// Individual food items
const techProducts = [
  {
    name: "Wireless Earbuds",
    price: "$49.99",
    link: "https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/solo-buds/pdp/product-carousel/matte-black/black-01-solobuds.jpg",
    seller: "NextGen Tech"
  },
  {
    name: "Smartwatch",
    price: "$89.99",
    link: "https://m.media-amazon.com/images/I/61I22cL7v+L.jpg",
    seller: "TechX Essentials"
  },
  {
    name: "Bluetooth Speaker",
    price: "$34.99",
    link: "https://snpi.dell.com/snp/images/products/large/en-us~AB972602/AB972602.jpg",
    seller: "GadgetGrid"
  },
  {
    name: "Gaming Mouse",
    price: "$29.99",
    link: "https://m.media-amazon.com/images/I/61LtuGzXeaL._AC_SL1500_.jpg",
    seller: "GadgetGrid"
  },
  {
    name: "Noise Cancelling Headphones",
    price: "$99.99",
    link: "https://i5.walmartimages.com/seo/Active-Noise-Cancelling-Headphones-Bluetooth-Wireless-Headphones-Ear-Bluetooth-Headphones-Clear-Calls-Deep-Bass-Comfortable-Fit-Multipoint-Connection_5a3857f3-5c46-4dbc-a10e-758dd452abdf.162bbd103318a5fdc964e88fa183dd90.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    seller: "TechX Essentials"
  },
  {
    name: "Portable Charger",
    price: "$32.99",
    link: "https://i5.walmartimages.com/seo/Anker-PowerCore-Select-10000-Portable-Charger-Black-Ultra-Compact-High-Speed-Charging-Technology-Phone-Charger-for-iPhone-Samsung-and-More_621e9d8d-b4b2-4e15-b4cd-b439561ec4d0.c822834630c31c13416f2aacb33ddd5e.jpeg",
    seller: "NextGen Tech"
  },
  {
    name: "Laptop Stand",
    price: "$27.99",
    link: "https://m.media-amazon.com/images/I/71N48Df845L.jpg",
    seller: "TechX Essentials"
  }
];

const fashionProducts = [
  {
    name: "Cotton Hoodie",
    price: "$35.99",
    link: "https://i.etsystatic.com/10302990/r/il/d243ab/4340458412/il_fullxfull.4340458412_dxms.jpg",
    seller: "UrbanWear Co."
  },
  {
    name: "Sneakers",
    price: "$59.99",
    link: "https://www.strydamovement.com/cdn/shop/files/Untitled_design_8.png?v=1734305327&width=1946",
    seller: "ChicStyle Boutique"
  },
  {
    name: "Minimalist Backpack",
    price: "$39.99",
    link: "https://www.mossbags.com/cdn/shop/products/honey.png?v=1677042715",
    seller: "Runway Rebel"
  },
  {
    name: "Aviator Sunglasses",
    price: "$21.99",
    link: "https://cdn.4imprint.com/prod/rend/700/386319/13_75.jpg",
    seller: "UrbanWear Co."
  },
  {
    name: "Leather Wallet",
    price: "$29.99",
    link: "https://buffalojackson.com/cdn/shop/files/denver_leather_trifold_wallet_autumn_brown_3_of_3_2000x.jpg?v=1711116886",
    seller: "Runway Rebel"
  }
];

const homeProducts = [
  {
    name: "LED Desk Lamp",
    price: "$22.99",
    link: "https://ottlite.com/cdn/shop/files/CSN30G5W_1.jpg?v=1718737593",
    seller: "ModSpace Living"
  },
  {
    name: "Scented Candle Set",
    price: "$24.99",
    link: "https://m.media-amazon.com/images/I/613abp6e+tL.jpg",
    seller: "Casa Luxe"
  },
  {
    name: "Stainless Steel Water Bottle",
    price: "$19.99",
    link: "https://lacalletacos.com/wp-content/uploads/2024/10/stainless-steel-water-bottle-white-17-oz-back-672247f883957.jpg",
    seller: "Home Haven"
  },
  {
    name: "Cozy Throw Blanket",
    price: "$34.99",
    link: "https://i.ebayimg.com/images/g/EiMAAOSw6XBlYEoE/s-l400.jpg",
    seller: "Casa Luxe"
  },
  {
    name: "Ceramic Plant Pot Set",
    price: "$17.99",
    link: "https://i5.walmartimages.com/seo/BEMAY-Set-of-3-Ceramic-Plant-Pots-10-8-6-inch-Flower-Pots-with-Drainage-Hole-Plug-Indoor-Planters-Sapphire-Blue-Indoor-Planter_3b87d510-2427-49b6-906e-324266a9ac1f.9d80aa44d28ca6d6304488904c5cfa74.jpeg",
    seller: "ModSpace Living"
  }
];

const fitnessProducts = [
  {
    name: "Yoga Mat",
    price: "$28.99",
    link: "https://i5.walmartimages.com/seo/BalanceFrom-1-2-In-Yoga-Mat-Blue_fba20a7b-31a0-4ab1-86b4-6f4c7f1ef382_1.ccbdd85a4206eb8f62a74fd4a4b4f89c.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    seller: "FitFusion Gear"
  },
  {
    name: "Resistance Band Set",
    price: "$18.99",
    link: "https://www.gymreapers.com/cdn/shop/files/black-resistancebands-new-1.jpg?v=1727994201",
    seller: "Pulse Athletics"
  },
  {
    name: "Adjustable Dumbbells",
    price: "$79.99",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3m-Vfy8u3MnXtBJJCD_r37yhQjWwBVHMhCA&s",
    seller: "Pulse Athletics"
  },
  {
    name: "Foam Roller",
    price: "$14.99",
    link: "https://m.media-amazon.com/images/I/71w51igPVyL.jpg",
    seller: "FitFusion Gear"
  },
  {
    name: "Fitness Tracker",
    price: "$49.99",
    link: "https://i5.walmartimages.com/seo/Fitbit-Inspire-2-Fitness-Tracker-Black_96b0eb36-17a8-4fde-a725-ff7cf9f5e675.43dfffa5bd5240f137e9c2f289ab339d.jpeg",
    seller: "Pulse Athletics"
  }
];

const beautyProducts = [
  {
    name: "Facial Cleanser",
    price: "$15.99",
    link: "https://images.albertsons-media.com/is/image/ABS/960074901-C1N1?$ng-ecom-pdp-mobile$&defaultImage=Not_Available",
    seller: "GlowUp Beauty"
  },
  {
    name: "Hydrating Face Mask",
    price: "$12.49",
    link: "https://cdn.shopify.com/s/files/1/0791/2083/products/SS_intense_grande_19b4fe8f-3af5-401d-ba06-512c920e72e7.jpg?v=1645653416&width=800",
    seller: "Beauté Box"
  },
  {
    name: "Lip Balm Set",
    price: "$9.99",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTpl84KTFkMIDvETls9UKZoAeXbvE60aUEtw&s",
    seller: "GlowUp Beauty"
  },
  {
    name: "Makeup Brush Kit",
    price: "$22.99",
    link: "https://m.media-amazon.com/images/I/71gSs9ZFCjL.jpg",
    seller: "Beauté Box"
  },
  {
    name: "Hair Serum",
    price: "$19.99",
    link: "https://m.media-amazon.com/images/I/61+hry7xIuL.jpg",
    seller: "Beauté Box"
  }
];


function Menu({addToCart}) {

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h2 className="text-center mb-4">Our Products</h2>

        {/* Individual Items Section */}
        <h3>Tech</h3>
        <div className="row">
          {techProducts.map((item, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card shadow-sm p-3">
                <div className="filler">
                  <img className="img" alt="" src={item.link} />
                </div>
                <h5 className="card-title">{item.name}</h5>
                <p className="card-subtitle">{item.seller}</p>
                <p className="card-text text-muted">{item.price}</p>
                <button className="btn btn-primary" onClick={() => handleAddToCart(item)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>

        <h3>Fashion</h3>
        <div className="row">
          {fashionProducts.map((item, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card shadow-sm p-3">
                <div className="filler">
                  <img className="img" alt="" src={item.link} />
                </div>
                <h5 className="card-title">{item.name}</h5>
                <p className="card-subtitle">{item.seller}</p>
                <p className="card-text text-muted">{item.price}</p>
                <button className="btn btn-primary" onClick={() => handleAddToCart(item)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>

        <h3>Home</h3>
        <div className="row">
          {homeProducts.map((item, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card shadow-sm p-3">
                <div className="filler">
                  <img className="img" alt="" src={item.link} />
                </div>
                <h5 className="card-title">{item.name}</h5>
                <p className="card-subtitle">{item.seller}</p>
                <p className="card-text text-muted">{item.price}</p>
                <button className="btn btn-primary" onClick={() => handleAddToCart(item)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>

        <h3>Fitness</h3>
        <div className="row">
          {fitnessProducts.map((item, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card shadow-sm p-3">
                <div className="filler">
                  <img className="img" alt="" src={item.link} />
                </div>
                <h5 className="card-title">{item.name}</h5>
                <p className="card-subtitle">{item.seller}</p>
                <p className="card-text text-muted">{item.price}</p>
                <button className="btn btn-primary" onClick={() => handleAddToCart(item)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>

        <h3>Beauty</h3>
        <div className="row">
          {beautyProducts.map((item, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card shadow-sm p-3">
                <div className="filler">
                  <img className="img" alt="" src={item.link} />
                </div>
                <h5 className="card-title">{item.name}</h5>
                <p className="card-subtitle">{item.seller}</p>
                <p className="card-text text-muted">{item.price}</p>
                <button className="btn btn-primary" onClick={() => handleAddToCart(item)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Menu;
