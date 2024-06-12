import React from "react";
import img2 from "./../assets/img/dhara-bg.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import dummy from "../assets/img/dummy.jpg";
import rightarrow from "../assets/img/svg/rightarrow.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function About() {
  var settings = {
    autoplay: false,
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 1000,
  };
  return (
    <div className="ml-5">
      <div id="about" className="tokyo_tm_section">
        <div className="container">
          <Row className="tokyo_tm_about">
            <Col lg={12} className="tokyo_tm_title">
              <div className="title_flex">
                <div className="left">
                  <span>About</span>
                  <h3>About Me</h3>
                </div>
              </div>
            </Col>
            <Col lg={4} className="top_author_image d-flex">
              <img src={img2} className="w-100" alt />
            </Col>
            <Col lg={8} className="about_title">
              <h3>Dhara Pancholi</h3>
              <span>Position </span>
            </Col>
            <Col lg={12} className="about_text">
              <p>
                Passionate about bringing imagination to life through the realm
                of 3D animation and digital art. Proficient in Blender, Maya,
                Photoshop, and sculpting techniques. Experienced in creating
                visually stunning animations and graphics for various projects
                ranging from film and advertising to video games . Dedicated to
                continuous learning and pushing creative boundaries.
              </p>
              <p>
              As Dhara Pancholi, my passion for 3D modeling knows no bounds. Sculpting and rigging are not just skills to me; they're avenues through which I express my creativity and bring visions to life. With proficiency in Blender, Maya, Photoshop, and a deep understanding of sculpting techniques, I immerse myself in crafting digital marvels that captivate and inspire.
              </p>
              <p>
             Every project is an opportunity to push the limits of my imagination and technical prowess. Whether I'm shaping characters, designing environments, or animating scenes, I infuse each creation with a piece of myself, striving for perfection in every polygon. In my hands, software transforms into a medium of boundless possibilities, where art and technology converge to weave intricate worlds that leave a lasting impression on audiences.
              </p>
            </Col>
            <Col lg={12} className="tokyo_tm_short_info">
              <div className="left">
                <div className="tokyo_tm_info">
                  <ul>
                    <li>
                      <span>Birthday:</span>
                      <span>10.09.1997</span>
                    </li>
                    <li>
                      <span>Age:</span>
                      <span>28</span>
                    </li>
                    <li>
                      <span>Address:</span>
                      <span>Tane Kem , Kau Street , Lucha City</span>
                    </li>
                    <li>
                      <span>Email:</span>
                      <span>
                        <a href="">email_avse.ahiya@gmail.com</a>
                      </span>
                    </li>
                    <li>
                      <span>Phone:</span>
                      <span>
                        <a href="tel:">+108</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right">
                <div className="tokyo_tm_info">
                  <ul>
                    <li>
                      <span>Nationality:</span>
                      <span>Ethopian</span>
                    </li>
                    <li>
                      <span>Study:</span>
                      <span>Univercity of Gandas</span>
                    </li>
                    <li>
                      <span>Degree:</span>
                      <span>Master</span>
                    </li>
                    <li>
                      <span>Interest:</span>
                      <span>Sleeping</span>
                    </li>
                    <li>
                      <span>Freelance:</span>
                      <span>Tu Kar</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <div className="tokyo_tm_button" data-position="left">
              <a href={dummy} target="_blank">
                <span>Download CV</span>
              </a>
            </div>
          </Row>
        </div>
        <div className="tokyo_tm_progressbox">
          <div className="container">
            <div className="in">
              <div className="left">
                <div className="tokyo_section_title">
                  <h3>Programming Skills</h3>
                </div>
                <div className="tokyo_progress">
                  <div className="progress_inner" data-value="95">
                    <span>
                      <span className="label">WordPress</span>
                      <span className="number">05%</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div className="bar_in"></div>
                      </div>
                    </div>
                  </div>
                  <div className="progress_inner" data-value="80">
                    <span>
                      <span className="label">JavaScript</span>
                      <span className="number">0%</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div className="bar_in"></div>
                      </div>
                    </div>
                  </div>
                  <div className="progress_inner" data-value="90">
                    <span>
                      <span className="label">Angular</span>
                      <span className="number">1%</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div className="bar_in"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="tokyo_section_title">
                  <h3>Language Skills</h3>
                </div>
                <div className="tokyo_progress">
                  <div className="progress_inner" data-value="90">
                    <span>
                      <span className="label">English</span>
                      <span className="number">900%</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div className="bar_in"></div>
                      </div>
                    </div>
                  </div>
                  <div className="progress_inner" data-value="95">
                    <span>
                      <span className="label">Russian</span>
                      <span className="number">05%</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div className="bar_in"></div>
                      </div>
                    </div>
                  </div>
                  <div className="progress_inner" data-value="85">
                    <span>
                      <span className="label">Arabic</span>
                      <span className="number">105%</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div className="bar_in"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tokyo_tm_skillbox">
          <div className="container">
            <div className="in">
              <div className="left">
                <div className="tokyo_section_title">
                  <h3>Knowledge</h3>
                </div>
                <div className="tokyo_tm_skill_list">
                  <ul>
                    <li>
                      <span>
                        <img className="svg" src={rightarrow} alt />
                        Vasan Ghasvu
                      </span>
                    </li>
                    <li>
                      <span>
                        <img className="svg" src={rightarrow} alt />
                        Unghvu
                      </span>
                    </li>
                    <li>
                      <span>
                        <img className="svg" src={rightarrow} alt />
                        Panchyat Karvi
                      </span>
                    </li>
                    <li>
                      <span>
                        <img className="svg" src={rightarrow} alt />
                        Khavuu (My Fav)
                      </span>
                    </li>
                    <li>
                      <span>
                        <img className="svg" src={rightarrow} alt />
                        Being Irritating
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right">
                <div className="tokyo_section_title">
                  <h3>Interests</h3>
                </div>
                <div className="tokyo_tm_skill_list">
                  <ul>
                    <li>
                      <span>
                        <img className="svg" src={rightarrow} alt />
                        Make Lame Jokes
                      </span>
                    </li>
                    <li>
                      <span>
                        <img className="svg" src={rightarrow} alt />
                        Watch Pakistani Series
                      </span>
                    </li>
                    <li>
                      <span>
                        <img className="svg" src={rightarrow} alt />
                        Nakhra
                      </span>
                    </li>
                    <li>
                      <span>
                        <img className="svg" src={rightarrow} alt />
                        Pajavanu bija ne
                      </span>
                    </li>
                    <li>
                      <span>
                        <img className="svg" src={rightarrow} alt />
                        Make Kese Dhillo
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tokyo_tm_resumebox">
          <div className="container">
            <div className="in">
              <div className="left">
                <div className="tokyo_section_title">
                  <h3>Education</h3>
                </div>
                <div className="tokyo_tm_resume_list">
                  <ul>
                    <li>
                      <div className="list_inner">
                        <div className="time">
                          <span>9.00 AM - 10.00 AM</span>
                        </div>
                        <div className="place">
                          <h3>Sr. Kg</h3>
                          <span>1 Hr Degree</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <div className="time">
                          <span>2010 - 2014</span>
                        </div>
                        <div className="place">
                          <h3>Ahban Univercity</h3>
                          <span>Abhan Degree</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <div className="time">
                          <span>2008 - 2010</span>
                        </div>
                        <div className="place">
                          <h3>Yoga College</h3>
                          <span>Savasan Degree</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right">
                <div className="tokyo_section_title">
                  <h3>Experience</h3>
                </div>
                <div className="tokyo_tm_resume_list">
                  <ul>
                    <li>
                      <div className="list_inner">
                        <div className="time">
                          <span>bhi abhi toh start kiye hai</span>
                        </div>
                        <div className="place">
                          <h3>Kannada</h3>
                          <span>Exclusive Hathi</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <div className="time">
                          <span>2016 - 2018</span>
                        </div>
                        <div className="place">
                          <h3>Bright School</h3>
                          <span>Panchayat </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <div className="time">
                          <span>2012 - 2016</span>
                        </div>
                        <div className="place">
                          <h3>Little Blossom</h3>
                          <span>Breakfast Degree</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tokyo_tm_testimonials">
          <div className="container">
            <div class="tokyo_section_title">
              <h3>Testimonials</h3>
            </div>
            <div className="list">
              <ul>
                <Slider {...settings}>
                  <li>
                    <div class="list_inner">
                      <div class="text">
                        <p>
                          Beautiful minimalist design and great, fast response
                          with support. Highly recommend. Thanks Marketify!
                        </p>
                      </div>
                      <div class="details">
                        <div class="image">
                         <img src={dummy} className="main"/>
                        </div>
                        <div class="info">
                          <h3>Niraj Pancholi</h3>
                          <span>Graphic Designer</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="list_inner">
                      <div class="text">
                        <p>
                          These people really know what they are doing! Great
                          customer support availability and supperb kindness.
                        </p>
                      </div>
                      <div class="details">
                        <div class="image">
                        <img src={dummy} className="main"/>
                        </div>
                        <div class="info">
                          <h3>Nehal Pancholi</h3>
                          <span>Content Manager</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="list_inner">
                      <div class="text">
                        <p>
                          I had a little problem and the support was just
                          awesome to quickly solve the situation. And keep going
                          on.
                        </p>
                      </div>
                      <div class="details">
                        <div class="image">
                        <img src={dummy} className="main"/>
                        </div>
                        <div class="info">
                          <h3>Isha Pancholi</h3>
                          <span>English Teacher</span>
                        </div>
                      </div>
                    </div>
                  </li>
                </Slider>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
