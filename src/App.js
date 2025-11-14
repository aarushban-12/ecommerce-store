import {BrowserRouter, Routes, Route, useNavigate, Link} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import JobOpenings from './components/Jobs';
import Order from './components/Order';
import PastOrders from './components/PastOrders';
import Founder from './components/Founder';
import ProfilePage from './components/ProfilePage';
import RegisteredSellers from './components/RegisteredSellers';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';




function Signup({ setAuth, setUserName, setUserEmail, setUserPassword, users, setUsers }) {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password);
  };

  const handleSignup = () => {
    if (!name || !age || !gender || !email || !password || !confirmPassword) {
      setError("All fields are required");
    } else if(!validateEmail(email) || !validatePassword(password)) {
      setError("Invalid email or password");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else if (users.find(u => u.email === email)) {
      setError("This Account Already Exists");
    } else {
      setUsers([...users, {name: name, age: age, gender: gender, email: email, password: password }]);
      localStorage.setItem("isAuthenticated", "true");
      setUserName(name);
      setUserEmail(email);
      setUserPassword(password);
      setAuth(true);
      navigate("/Dashboard");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        {error && <p className="error">{error}</p>}

        <input
          className="input-field"
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="input-field"
          type="number"
          placeholder="Enter Age"
          onChange={(e) => setAge(e.target.value)}
        />
        <select className="input-field" onChange={(e) => setGender(e.target.value)}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input
          className="input-field"
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input-field"
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="input-field"
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button className="signup-btn" onClick={handleSignup}>Sign Up</button>
        <p className="signup-link">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}



function Login({setAuth, setUserEmail, setUserName, setUserPassword, users }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  

  const handleLogin = () => {
    const user = users.find(u => u.email === email && u.password === password);
    if(user) {
      localStorage.setItem("isAuthenticated", "true");
      setAuth(true);
      setUserEmail(email);
      setUserName(user.name);
      setUserPassword(password);
      navigate("/Dashboard");
    } else {
      setError("Invalid Email or password");
    }
    
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <input
          className="input-field"
          type="email"
          placeholder="Enter Email"
          onChange={(e) => { setEmail(e.target.value) }}
        />
        <input
          className="input-field"
          type="password"
          placeholder="Enter Password"
          onChange={(e) => { setPassword(e.target.value) }}
        />
        <button className="login-btn" onClick={handleLogin}>Login</button>
        <p className="signup-link">
          Don't have an account? <Link to="/Signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}


function Dashboard({ setAuth, users }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setAuth(false);
    navigate("/");
  };

  console.log(users);
  return (
    <div>
      <Navbar />
      <div className="homepage-container">
      {/* Hero Section */}
      <section className="hero-section text-center">
        <div className="container">
          <h1 className="display-3 hero-title mt-4">Welcome to TradeHaven</h1>
          <p className="lead hero-subtitle">Your one-stop shop for quality products at unbeatable prices.</p>
          <div className="cta-buttons mt-4">
            <Link to="/menu" className="btn btn-primary btn-lg me-3">Browse Products</Link>
            <button className="btn btn-outline-primary btn-lg" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Featured Product</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-sm">
              <img
                src="https://products.shureweb.eu/shure_product_db/product_main_images/files/c25/16a/40-/large_transparent/ce632827adec4e1842caa762f10e643d.png"
                className="card-img-top"
                alt="Featured Product"
              />
              <div className="card-body">
                <h5 className="card-title">Wireless Noise-Cancelling Headphones</h5>
                <p className="card-text">
                  Experience next-level sound and all-day comfort. Our best-selling headphones are back in stock—limited quantities available!
                </p>
                <Link to="/menu" className="btn btn-outline-primary">Shop Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="about-us py-5 bg-light">
        <div className="container text-center">
          <h2 className="mb-4">About TradeHaven</h2>
          <p className="lead">
            At ShopEase, we make shopping simple. Whether you're looking for tech, fashion, home goods, or accessories—we’ve got it all.
          </p>
          <p>
            We’re committed to providing high-quality products, fast shipping, and exceptional customer support.
            Trusted by thousands of customers across the country.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials py-5">
        <div className="container">
          <h2 className="text-center mb-4">What Our Customers Say</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card shadow testimonial-card">
                <div className="card-body">
                  <p className="card-text">
                    “Fast delivery and exactly what I needed. Definitely shopping here again!”
                  </p>
                  <footer className="blockquote-footer">Samantha D.</footer>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow testimonial-card">
                <div className="card-body">
                  <p className="card-text">
                    “Great deals and super easy to navigate. A+ shopping experience.”
                  </p>
                  <footer className="blockquote-footer">Jared M.</footer>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow testimonial-card">
                <div className="card-body">
                  <p className="card-text">
                    “I love the product quality and packaging. It feels premium without the premium price.”
                  </p>
                  <footer className="blockquote-footer">Emily S.</footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-dark text-white text-center py-4">
        &copy; {new Date().getFullYear()} ShopEase. All Rights Reserved.
      </footer>
    </div>
    </div>
  );
}


function App() {
  
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("isAuthenticated") === "true");

  const [users, setUsers] = useState([]);
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    console.log(cart);
  }, [cart]);


  const addToCart = (item) => {
    setCart([...cart, { name: item.name, price: item.price }]);
  };

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [pastOrders, setPastOrders] = useState([]);



  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={isAuthenticated ? <navigate to="/Dashboard"/> : <Login setAuth = {setIsAuthenticated} setUserEmail={setUserEmail} setUserName={setUserName} setUserPassword={setUserPassword} users={users}/>}/>
        <Route path='/Dashboard' element={isAuthenticated ? <Dashboard setAuth = {setIsAuthenticated} users={users}/> : <navigate to="/"/>}/>
        <Route path='/Signup' element={<Signup setAuth = {setIsAuthenticated} setUserName={setUserName} setUserEmail={setUserEmail} setUserPassword={setUserPassword} users={users} setUsers={setUsers}/>}/>
        <Route path="/menu" element={<Menu addToCart={addToCart}/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/about' element={<AboutUs />}/>
        <Route path='/jobs' element={<JobOpenings />} />
        <Route path='/order' element={<Order cart={cart} setCart={setCart} name={userName} email={userEmail} pastOrders={pastOrders} setPastOrders={setPastOrders} />} />
        <Route path="/history" element={<PastOrders pastOrders={pastOrders} email={userEmail} />} />
        <Route path='/founder' element={<Founder />} />
        <Route path='/sellers' element={<RegisteredSellers />} />
        <Route path="/profile" element={ <ProfilePage userName={userName} userEmail={userEmail} setUserName={setUserName} setUserEmail={setUserEmail} userPassword={userPassword} setUserPassword={setUserPassword} users={users} setUsers={setUsers} pastOrders={pastOrders} setPastOrders={setPastOrders} />}/>
      </Routes>

    </BrowserRouter>
    
  );
}

export default App; 