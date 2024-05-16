import React from "react";
import img1 from './../assets/img/dhara1.jpg'
import img2 from './../assets/img/dhara-bw.jpg'
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function About() {
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
              <img src={img2} className="w-100"alt />
            </Col>
            <Col lg={8} className="about_title">
              <h3>Dhara Pancholi</h3>
              <span>Position </span>
            </Col>
            <Col lg={12} className="about_text">
              <p>
                Hu Gandi Chuu... Hu Gandi Chuu... Hu Gandi Chuu... Hu Gandi Chuu...
                Hu Gandi Chuu... Hu Gandi Chuu... Hu Gandi Chuu... Hu Gandi Chuu...
                Hu Gandi Chuu... Hu Gandi Chuu... Hu Gandi Chuu... Hu Gandi Chuu...
                Hu Gandi Chuu... Hu Gandi Chuu... Hu Gandi Chuu... Hu Gandi Chuu...
                Hu Gandi Chuu... Hu Gandi Chuu... Hu Gandi Chuu... Hu Gandi Chuu...
              </p>
              <p>
              Hu Gandi Chuu... Hu Gandi Chuu... Hu Gandi Chuu... Hu Gandi Chuu...
                Hu Gandi Chuu... Hu Gandi Chuu... Hu Gandi Chuu... Hu Gandi Chuu...
                Hu Gandi Chuu... Hu Gandi Chuu... Hu Gandi Chuu... Hu Gandi Chuu...
                Hu Gandi Chuu... Hu Gandi Chuu... Hu Gandi Chuu... Hu Gandi Chuu...
                Hu Gandi Chuu... Hu Gandi Chuu... Hu Gandi Chuu... Hu Gandi Chuu...
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
                        <a href="">
                          
                            email_avse.ahiya@gmail.com
                        </a>
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
              <a href="img/cv/1.jpg" download>
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
                        <img className="svg" src="img/svg/rightarrow.svg" alt />
                        Vasan Ghasvu 
                      </span>
                    </li>
                    <li>
                      <span>
                        <img className="svg" src="img/svg/rightarrow.svg" alt />
                        Unghvu
                      </span>
                    </li>
                    <li>
                      <span>
                        <img className="svg" src="img/svg/rightarrow.svg" alt />
                        Panchyat Karvi 
                      </span>
                    </li>
                    <li>
                      <span>
                        <img className="svg" src="img/svg/rightarrow.svg" alt />
                        Khavuu (My Fav)
                      </span>
                    </li>
                    <li>
                      <span>
                        <img className="svg" src="img/svg/rightarrow.svg" alt />
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
                        <img className="svg" src="img/svg/rightarrow.svg" alt />
                        Make Lame Jokes
                      </span>
                    </li>
                    <li>
                      <span>
                        <img className="svg" src="img/svg/rightarrow.svg" alt />
                        Watch Pakistani Series
                      </span>
                    </li>
                    <li>
                      <span>
                        <img className="svg" src="img/svg/rightarrow.svg" alt />
                        Nakhra
                      </span>
                    </li>
                    <li>
                      <span>
                        <img className="svg" src="img/svg/rightarrow.svg" alt />
                        Pajavanu bija ne
                      </span>
                    </li>
                    <li>
                      <span>
                        <img className="svg" src="img/svg/rightarrow.svg" alt />
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
            <div className="tokyo_section_title">
              <h3>Testimonials</h3>
              <p> Tarif hoi toh testimonial hoi ne ... <br/> Rakh tere maa ki Rakh ....!!</p>
              <p> Yeh Baburao ka stylee haiii  <br/> It's Legendaryyyyyyyyyyyyy</p>
            </div>
            <div className="list">
              <ul className="owl-carousel">
                <li>
                  <div className="list_inner">
                    <div className="text">
                      <p>
                        Subah se na ek aloo bika hai , na bika ek adha kandaa ..!!!
                      </p>
                    </div>
                    <div className="details">
                      <div className="image">
                        <div
                          className="main"
                          data-img-url="img/testimonials/1.jpg"
                        ></div>
                      </div>
                      <div className="info">
                        <h3>Uday Shetyy</h3>
                        <span>Controllll</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <div className="text">
                      <p>
                        Its Lavioosaaa , not laviiiiiiosa ...!
                      </p>
                    </div>
                    <div className="details">
                      <div className="image">
                        <div
                          className="main"
                          data-img-url="img/testimonials/2.jpg"
                        ></div>
                      </div>
                      <div className="info">
                        <h3>Chapli Hermoine</h3>
                        <span>Girraffe indor</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <div className="text">
                      <p>
                        Badi soni mundi hai , badi soni kundi hai , badi soni GUNDI hai !!
                      </p>
                    </div>
                    <div className="details">
                      <div className="image">
                        <div
                          className="main"
                          data-img-url="img/testimonials/3.jpg"
                        ></div>
                      </div>
                      <div className="info">
                        <h3>Isha </h3>
                        <span>Legend</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
