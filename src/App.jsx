
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

function App() {
  return (
   <>
      <div className="container-fluid   w-100 mainbody" style={{ "height": "730px" }}>
        <div className="row ">
          <div className="col-sm-1" />
          <div className="col-sm-10 mt-3">
            <div className="container text-light w-100">
              <nav className="navbar navbar-expand-lg bg-transparent w-100" data-bs-theme="dark">
                <div className="container-fluid  w-100 ">
                  <a className="navbar-brand fw-bold" href="#" style={{ "font-family": "Dancing Script,cursive", "font-size": "30px" }}>Feane</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse " id="navbarNavAltMarkup " style={{ "margin-left": "20vw" }}>
                    <div className="navbar-nav" style={{ "margin-left": "0vw" }}>
                      <a className="nav-link active text-warning " aria-current="page" href="#">HOME</a>
                      <a className="nav-link" href="#">MENU</a>
                      <a className="nav-link" href="#">ABOUT</a>
                      <a className="nav-link " aria-disabled="true">BOOK TABLE</a>
                    </div>
                    <div className="d-flex align-item-center   " style={{ "margin-left": "10vw" }}>
                      <span className="nav-icon"><i className="fa-solid fa-user" /></span>
                      <span className="nav-icon"><i className="fa-solid fa-cart-shopping" /></span>
                      <span className="nav-icon"><i className="fa-solid fa-magnifying-glass" /></span>
                      <button className="btn btn-warning text-light border rounded-5 ps-4 pe-4 fs-6 ms-3 order" style={{ "-webkit-transform": "translateY(-7px)", "-ms-transform": "translateY(-7px)", "transform": "translateY(-7px)" }}>order online</button>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="col-sm-1" />
        </div>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner" style={{ "padding": "140px 0 0 150px" }}>
            <div className="carousel-item active sliderbox">
              <h1 className="slidertext ">Fast Food Restaurant</h1>
              <p className="fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet repellat
                assumenda
                aspernatur enim accusamus mollitia magnam eaque sunt animi veritatis similique itaque rem
                tempore quod cumque ullam maxime, obcaecati necessitatibus labore cum </p>
              <button className="btn btn-warning text-light  rounded-5 ps-4 pe-4 fs-6 mt-2  order fw-lighter"><a href="#" style={{ "-webkit-text-decoration": "none", "text-decoration": "none", "color": "white" }}> Order Now </a></button>
            </div>
          </div>
          <div className="carousel-item sliderbox">
            <h1 className="slidertext">Fast Food Restaurant</h1>
            <p className="fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet repellat
              assumenda
              aspernatur enim accusamus mollitia magnam eaque sunt animi veritatis similique itaque rem
              tempore quod cumque ullam maxime, obcaecati necessitatibus labore cum </p>
            <button className="btn btn-warning text-light  rounded-5 ps-4 pe-4 fs-6 mt-2  order fw-lighter"><a href="#" style={{ "-webkit-text-decoration": "none", "text-decoration": "none", "color": "white" }}> Order Now </a></button>
          </div>
          <div className="carousel-item sliderbox">
            <h1 className="slidertext">Fast Food Restaurant</h1>
            <p className="fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet repellat
              assumenda
              aspernatur enim accusamus mollitia magnam eaque sunt animi veritatis similique itaque rem
              tempore quod cumque ullam maxime, obcaecati necessitatibus labore cum </p>
            <button className="btn btn-warning text-light  rounded-5 ps-4 pe-4 fs-6 mt-2  order fw-lighter"><a href="#" style={{ "-webkit-text-decoration": "none", "text-decoration": "none", "color": "white" }}> Order Now </a></button>
          </div>
          <div className="container mt-5 ps-5 pe-5">
            <div className="row mt-5" style={{ "min-height": "240px", "width": "100%" }}>
              <div className="col-md-6  ps-3 pe-3 mb-2 ">
                <div className="p-3 rounded bg-black d-flex" style={{ "height": "230px" }}>
                  <div className="roundimgbox ">
                    <img className="roundimg" src="https://themewagon.github.io/feane/images/o1.jpg" />
                  </div>
                  <div className="text-white mt-4 ms-4 " style={{ "font-family": "Dancing Script" }}>
                    <h3>Tasty Thursdays</h3>
                    <h1 className="mt-3">20% <span className="fs-5">Off</span></h1>
                    <button className="btn btn-warning ps-4 pe-4 pt-2 pb-2 mt-4 rounded-5 text-light" style={{ "font-family": "Arial, Helvetica, sans-serif" }}> Order Now <i className="fa-solid fa-cart-shopping" /> </button>
                  </div>
                </div>
              </div>
              <div className="col-md-6  ps-3 pe-3">
                <div className="p-3 rounded bg-black d-flex" style={{ "height": "230px" }}>
                  <div className="roundimgbox ">
                    <img className="roundimg" src="https://themewagon.github.io/feane/images/o2.jpg" />
                  </div>
                  <div className="text-white mt-4 ms-4 " style={{ "font-family": "Dancing Script" }}>
                    <h3>Pizza Days</h3>
                    <h1 className="mt-3">15% <span className="fs-5">Off</span></h1>
                    <button className="btn btn-warning ps-4 pe-4 pt-2 pb-2 mt-4 rounded-5 text-light" style={{ "font-family": "Arial, Helvetica, sans-serif" }}> Order Now <i className="fa-solid fa-cart-shopping" /> </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-5 fs-Dance text-center">
            <h1 className="mt-1">Our Menu</h1>
          </div>
          <div className="container text-center mt-4">
            <ul className="menu-middle d-flex justify-content-center">
              <li className="menu-item rounded-5 me-1 ps-3 p-1 pe-3 fs-5 active bg-black text-light">All</li>
              <li className="menu-item rounded-5 me-1 fs-5 ps-3 pe-3 p-1">Burger</li>
              <li className="menu-item rounded-5 me-1 fs-5 ps-3 pe-3 p-1">Pizza</li>
              <li className="menu-item rounded-5 me-1  fs-5 ps-3 pe-3 p-1">Pasta</li>
              <li className="menu-item rounded-5 me-1  fs-5 ps-3 pe-3 p-1">fries</li>
            </ul>
          </div>
          <div className="container mt-5 ps-5 pe-5">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col-6 col-md-4">
                <div className="card bg-black ">
                  <div className="card-body cBody text-center">
                    <img className="mt-3" style={{ "height": "150px", "width": "150px" }} src="https://themewagon.github.io/feane/images/f1.png" alt="..." />
                  </div>
                  <div className="card-body p-4  text-light">
                    <h5 className="card-title">Delicious Pizza</h5>
                    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum obcaecati
                      inventore veritatis officia! Suscipit ipsa in perferendis, saepe aliquam neque reprehenderit
                      dolores iure quod recusandae?</p>
                    <div>
                      <span>$20 </span>
                      <span className="float-end p-2  rounded-5 bg-warning"><i className="fa-solid fa-cart-shopping " /></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4">
                <div className="card bg-black ">
                  <div className="card-body cBody text-center">
                    <img className="mt-3" style={{ "height": "150px", "width": "150px" }} src="https://themewagon.github.io/feane/images/f2.png" alt="..." />
                  </div>
                  <div className="card-body p-4  text-light">
                    <h5 className="card-title">Delicious Burger</h5>
                    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum obcaecati
                      inventore veritatis officia! Suscipit ipsa in perferendis, saepe aliquam neque reprehenderit
                      dolores iure quod recusandae?</p>
                    <div>
                      <span>$15 </span>
                      <span className="float-end p-2  rounded-5 bg-warning"><i className="fa-solid fa-cart-shopping " /></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4">
                <div className="card bg-black ">
                  <div className="card-body cBody text-center">
                    <img className="mt-3" style={{ "height": "150px", "width": "150px" }} src="https://themewagon.github.io/feane/images/f3.png" alt="..." />
                  </div>
                  <div className="card-body p-4  text-light">
                    <h5 className="card-title">Delicious Pizza</h5>
                    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum obcaecati
                      inventore veritatis officia! Suscipit ipsa in perferendis, saepe aliquam neque reprehenderit
                      dolores iure quod recusandae?</p>
                    <div>
                      <span>$17 </span>
                      <span className="float-end p-2  rounded-5 bg-warning"><i className="fa-solid fa-cart-shopping " /></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4">
                <div className="card bg-black ">
                  <div className="card-body cBody text-center">
                    <img className="mt-3" style={{ "height": "150px", "width": "150px" }} src="https://themewagon.github.io/feane/images/f4.png" alt="..." />
                  </div>
                  <div className="card-body p-4  text-light">
                    <h5 className="card-title">Delicious Pasta</h5>
                    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum obcaecati
                      inventore veritatis officia! Suscipit ipsa in perferendis, saepe aliquam neque reprehenderit
                      dolores iure quod recusandae?</p>
                    <div>
                      <span>$18 </span>
                      <span className="float-end p-2  rounded-5 bg-warning"><i className="fa-solid fa-cart-shopping " /></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4">
                <div className="card bg-black ">
                  <div className="card-body cBody text-center">
                    <img className="mt-3" style={{ "height": "150px", "width": "150px" }} src="https://themewagon.github.io/feane/images/f5.png" alt="..." />
                  </div>
                  <div className="card-body p-4  text-light">
                    <h5 className="card-title">French Fries</h5>
                    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum obcaecati
                      inventore veritatis officia! Suscipit ipsa in perferendis, saepe aliquam neque reprehenderit
                      dolores iure quod recusandae?</p>
                    <div>
                      <span>$10 </span>
                      <span className="float-end p-2  rounded-5 bg-warning"><i className="fa-solid fa-cart-shopping " /></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4">
                <div className="card bg-black ">
                  <div className="card-body cBody text-center">
                    <img className="mt-3" style={{ "height": "150px", "width": "150px" }} src="https://themewagon.github.io/feane/images/f6.png" alt="..." />
                  </div>
                  <div className="card-body p-4  text-light">
                    <h5 className="card-title">Delicious Pizza</h5>
                    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum obcaecati
                      inventore veritatis officia! Suscipit ipsa in perferendis, saepe aliquam neque reprehenderit
                      dolores iure quod recusandae?</p>
                    <div>
                      <span>$15 </span>
                      <span className="float-end p-2  rounded-5 bg-warning"><i className="fa-solid fa-cart-shopping " /></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4">
                <div className="card bg-black ">
                  <div className="card-body cBody text-center">
                    <img className="mt-3" style={{ "height": "150px", "width": "150px" }} src="https://themewagon.github.io/feane/images/f7.png" alt="..." />
                  </div>
                  <div className="card-body p-4  text-light">
                    <h5 className="card-title">Tasty Burger</h5>
                    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum obcaecati
                      inventore veritatis officia! Suscipit ipsa in perferendis, saepe aliquam neque reprehenderit
                      dolores iure quod recusandae?</p>
                    <div>
                      <span>$12 </span>
                      <span className="float-end p-2  rounded-5 bg-warning"><i className="fa-solid fa-cart-shopping " /></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4">
                <div className="card bg-black ">
                  <div className="card-body cBody text-center">
                    <img className="mt-3" style={{ "height": "150px", "width": "150px" }} src="https://themewagon.github.io/feane/images/f8.png" alt="..." />
                  </div>
                  <div className="card-body p-4  text-light">
                    <h5 className="card-title">Tasty Burger</h5>
                    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum obcaecati
                      inventore veritatis officia! Suscipit ipsa in perferendis, saepe aliquam neque reprehenderit
                      dolores iure quod recusandae?</p>
                    <div>
                      <span>$14 </span>
                      <span className="float-end p-2  rounded-5 bg-warning"><i className="fa-solid fa-cart-shopping " /></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4">
                <div className="card bg-black ">
                  <div className="card-body cBody text-center">
                    <img className="mt-3" style={{ "height": "150px", "width": "150px" }} src="https://themewagon.github.io/feane/images/f9.png" alt="..." />
                  </div>
                  <div className="card-body p-4  text-light">
                    <h5 className="card-title">Delicious Pasta</h5>
                    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum obcaecati
                      inventore veritatis officia! Suscipit ipsa in perferendis, saepe aliquam neque reprehenderit
                      dolores iure quod recusandae?</p>
                    <div>
                      <span>$14 </span>
                      <span className="float-end p-2  rounded-5 bg-warning"><i className="fa-solid fa-cart-shopping " /></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-5 text-center">
            <button className="btn btn-warning rounded-5 ps-5 pe-5 p-1 fs-5 text-light"> View More</button>
          </div>
          <div className="container-fluid  mt-5 pt-5 pb-5" style={{ "min-height": "750px", "width": "100%", "background": "#222831" }}>
            <div className="container">
              <div className="row">
                <div className="col-12 order-2 col-md-6 order-md-1 ps-5 pt-5 midpostercol1">
                  <img src="https://themewagon.github.io/feane/images/about-img.png" style={{ "height": "620px", "width": "90%", "padding-left": "5vw" }} />
                </div>
                <div className="col-12 order-1 col-md-6 order-md-2 ps-3  text-light pt-5 pt-top-230 " style={{ "padding-right": "5vw" }}>
                  <h1 className="fs-Dance align-content-center"> We Are Feane</h1>
                  <p className="mt-3 fs-6">There are many variations of passages of Lorem Ipsum available, but the
                    majority have suffered alteration in some form, by injected humour, or randomised words which
                    don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need
                    to be sure there isn't anything embarrassing hidden in the middle of text. All </p>
                  <button className="btn btn-warning rounded-5 ps-5 pe-5 p-1 fs-5 text-light mt-3"> Read More</button>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-5 p-3 ps-5 pe-4 ">
            <div className="row pb-3">
              <div className="col-12">
                <h1 className="fs-Dance">Book A Table</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 pe-5">
                <input className="form-control p-2 ps-4 mb-4 border-dark " placeholder="Your Name" />
                <input className="form-control p-2 ps-4 mb-4 border-dark " placeholder="Phone Number" />
                <input className="form-control p-2 ps-4 mb-4 border-dark " placeholder="Your Email" />
                <select className="form-control p-2 ps-4 mb-4 border-dark ">
                  <option>How Many persons?</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
                <input type="date" className="form-control p-2 ps-4 mb-4 border-dark " placeholder="Your Name" />
              </div>
              <div className="col-12 col-md-6  ">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019623640698!2d-122.41941548468163!3d37.77492927975983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808a0637f0e9%3A0x3a89f12e9e3f7b3a!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1689521707162!5m2!1sen!2sus" width="100%" height="100%"> </iframe>
              </div>
            </div>
            <div className="row pb-3 ">
              <div className="col-12 ">
                <button className="btn btn-warning rounded-5 ps-5 pe-5 p-1 mt-4 fs-5 text-light"> BOOK NOW</button>
              </div>
            </div>
          </div>
          <div className="container text-center fs-Dance mt-4">
            <h1 className="fw-bold"> What Says Our Customers</h1>
          </div>
          <div className="container mt-5 ps-5 pe-5 " style={{ "min-height": "400px" }}>
            <div className="row">
              <div className="col-12 col-md-6 p-3" style={{ "min-height": "200px" }}>
                <div className="bg-dark text-light p-4 rounded">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga sapiente aperiam laboriosam? Sunt
                    ad excepturi quidem autem incidunt quod obcaecati. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Sapiente et ab accusantium!</p>
                  <h5>Moana Michell</h5>
                  <h6>magna aliqua</h6>
                </div>
                <div className="footer-imagesbox"> </div>
              </div>
              <div className="col-12 col-md-6 p-3" style={{ "min-height": "200px" }}>
                <div className="bg-dark text-light p-4 rounded">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga sapiente aperiam laboriosam? Sunt
                    ad excepturi quidem autem incidunt quod obcaecati. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Sapiente et ab accusantium!</p>
                  <h5>Mike Hamella</h5>
                  <h6>magna aliqua</h6>
                </div>
                <div className="footer-imagesbox" style={{ "background": "url('https://themewagon.github.io/feane/images/client2.jpg')", "background-size": "100% 100%" }}>
                </div>
              </div>
            </div>
          </div>
          <div className="container d-flex justify-content-center mt-5 ">
            <div className="bg-warning text-center text-light me-2 fs-5" style={{ "height": "50px", "width": "50px", "border-radius": "50%", "line-height": "50px" }}> <GrPrevious/></div>
            <div className="bg-warning text-center text-light ms-2 fs-5 " style={{ "height": "50px", "width": "50px", "border-radius": "50%", "line-height": "50px" }}> <GrNext></GrNext></div>
          </div>
          <div className="container-fluid mt-5 " style={{ "background-color": "#222831" }}>
            <div className="container p-5">
              <div className="row w-100 " style={{ "height": "fit-content" }}>
                <div className="col-sm-1 d-none d-md-block" />
                <div className="col-12 col-md-3 text-center text-light ">
                  <h1 className="fs-Dance mb-4 ">Contact Us</h1>
                  <p className="hoverEffect"><i className="fa-solid fa-location-dot" /> Location</p>
                  <p className="hoverEffect"><i className="fa-solid fa-phone" /> Call +01 1234567890 </p>
                  <p className="hoverEffect"><i className="fa-solid fa-envelope" /> demo@gmail.com</p>
                </div>
                <div className="col-12 col-md-4 text-center text-light ">
                  <h1 className="fs-Dance mb-4 fs-1">Feane</h1>
                  <p>Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200
                    Latin words, combined with</p>
                  <div className="d-flex justify-content-center">
                    <div className="icon-div hoverEffect"><FaFacebook/></div>
                    <div className="icon-div hoverEffect"><AiFillTwitterCircle/></div>
                    <div className="icon-div hoverEffect"><FaLinkedin/></div>
                    <div className="icon-div hoverEffect"><RiInstagramFill/></div>
                  </div>
                </div>
                <div className="col-12 col-md-3 text-center text-light mt-4 ">
                  <h1 className="fs-Dance mb-4">Opening Hours</h1>
                  <p>Everyday</p>
                  <p>10.00 Am -10.00 Pm </p>
                </div>
                <div className="col-sm-1 d-none d-md-block" />
              </div>
              <div className="row mt-5">
                <div className="col-12 text-center text-light">
                  <p>© 2025 All Rights Reserved By Free Html Templates</p>
                  <p>© Distributed By ThemeWagon</p>
                </div>
              </div>
            </div>
          </div>

        </div>
        </div>
      </>



      )
}

      export default App
