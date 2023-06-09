const Header = () => {
  return (
    <header className="header">
      <div className="topBar">
        <div className="container">
          <div className="row">
            <div className="leftSideBar">
              <ul>
                <li>
                  <a href="https://www.facebook.com/" target="blank">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com/" target="blank">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="blank">
                    <i class="fa-brands fa-instagram  "></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" target="blank">
                    <i class="fa-brands fa-linkedin  "></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="rightSideBar">
              <ul>
                <li>
                  <a href="tel:+123456789101">
                    <i class="fa-solid fa-phone"></i> (+1) 234 5678 9101
                  </a>
                </li>
                <li>
                  <a href="mailto:shop@yourdomain.com">
                    <i class="fa-solid fa-envelope"></i> shop@yourdomain.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bottomBar">
        <div className="container">
          <div className="row">
            <div className="logo">
              <a href="index.html">
                <b>Selling</b>
                <span>
                  <b>.</b>
                </span>
              </a>
            </div>
            <nav className="navBar">
              <ul className="navList">
                <li className="navItem">
                  <a className="active" href="#home">Home</a>
                </li>
                <li className="navItem">
                  <a href="#products">Products</a>
                </li>
                <li className="navItem">
                  <a href="#aboutus">About Us</a>
                </li>
                <li className="navItem">
                  <a href="#special">Special</a>
                </li>
                <li className="navItem">
                  <a href="#testimonials">Testimonials</a>
                </li>
                <li className="navItem">
                  <a href="#blog">Blog</a>
                </li>
                <li className="navItem">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
