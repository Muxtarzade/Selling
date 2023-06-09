const Header = () => {
  return (
    <header>
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
    </header>
  );
};

export default Header;
