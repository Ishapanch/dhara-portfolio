import React from "react";
import { ImageGallery } from "react-image-grid-gallery";
import chair1 from "../assets/img/portfolio/chair1.jpg";
import chair2 from "../assets/img/portfolio/chair2.jpg";
import gollem from "../assets/img/portfolio/gollem.jpg";
import lighthouse from "../assets/img/portfolio/lighthouse.jpg";
import cup from "../assets/img/portfolio/cup.jpg";
import castle from "../assets/img/portfolio/castle.jpg";
import robot from "../assets/img/portfolio/robot.jpg";
import robot2 from "../assets/img/portfolio/robot2.jpg";
import martial from "../assets/img/portfolio/martial.jpg";
import feather from "../assets/img/portfolio/feather.jpg";
import raw1 from "../assets/img/portfolio/raw1.jpg";
import raw2 from "../assets/img/portfolio/raw2.jpg";
import raw3 from "../assets/img/portfolio/raw3.jpg";
import raw4 from "../assets/img/portfolio/raw4.jpg";
import raw5 from "../assets/img/portfolio/raw5.jpg";
import raw6 from "../assets/img/portfolio/raw6.jpg";
import raw7 from "../assets/img/portfolio/raw7.jpg";
import raw8 from "../assets/img/portfolio/raw8.jpg";
import raw9 from "../assets/img/portfolio/raw9.jpg";
import raw10 from "../assets/img/portfolio/raw10.jpg";
import raw11 from "../assets/img/portfolio/raw11.jpg";
import raw12 from "../assets/img/portfolio/raw12.jpg";
import raw13 from "../assets/img/portfolio/suitcase-raw.jpg";
import tool1 from "../assets/img/portfolio/tool1.jpg";
import tool2 from "../assets/img/portfolio/tool2.jpg";
import tool3 from "../assets/img/portfolio/tool3.jpg";
import tool4 from "../assets/img/portfolio/tool4.jpg";
import tool5 from "../assets/img/portfolio/tool5.jpg";
import tool6 from "../assets/img/portfolio/tool6.jpg";
import tool7 from "../assets/img/portfolio/tool7.jpg";
import tool8 from "../assets/img/portfolio/tool8.jpg";
import wireframe from "../assets/img/portfolio/wireframe.jpg";
import wireframe2 from "../assets/img/portfolio/wireframe2.jpg";
import vid1 from "../assets/img/portfolio/video/gollem.mp4"
import vid2 from "../assets/img/portfolio/video/chair.mp4"
import vid3 from "../assets/img/portfolio/video/suitcase.mp4"
import vid4 from "../assets/img/portfolio/video/robot.mp4"
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReactPlayer from "react-player";

export default function Portfolio() {
  const colors = [
    {
      alt: "Image1's alt text",
      src: chair1,
    },
    {
      alt: "Image1's alt text",
      src: chair2,
    },
    {
      alt: "Image1's alt text",
      src: gollem,
    },
    {
      alt: "Image1's alt text",
      src: lighthouse,
    },
    {
      alt: "Image1's alt text",
      src: castle,
    },
    {
      alt: "Image1's alt text",
      src: cup,
    },
    {
      alt: "Image1's alt text",
      src: tool1,
    },
    {
      alt: "Image1's alt text",
      src: tool2,
    },
    {
      alt: "Image1's alt text",
      src: tool3,
    },
    {
      alt: "Image1's alt text",
      src: tool4,
    },
    {
      alt: "Image1's alt text",
      src: tool5,
    },
    {
      alt: "Image1's alt text",
      src: tool6,
    },
    {
      alt: "Image1's alt text",
      src: tool7,
    },
    {
      alt: "Image1's alt text",
      src: tool8,
    },
    {
      alt: "Image1's alt text",
      src: robot,
    },
    {
      alt: "Image1's alt text",
      src: robot2,
    },
    {
      alt: "Image1's alt text",
      src: martial,
    },
    {
      alt: "Image1's alt text",
      src: feather,
    },
  ];
  const raws = [
    {
      alt: "Image1's alt text",
      src: raw1,
    },
    {
      alt: "Image1's alt text",
      src: raw2,
    },
    {
      alt: "Image1's alt text",
      src: raw3,
    },
    {
      alt: "Image1's alt text",
      src: raw4,
    },
    {
      alt: "Image1's alt text",
      src: raw5,
    },
    {
      alt: "Image1's alt text",
      src: raw6,
    },
    {
      alt: "Image1's alt text",
      src: raw7,
    },
    {
      alt: "Image1's alt text",
      src: raw8,
    },
    {
      alt: "Image1's alt text",
      src: raw9,
    },
    {
      alt: "Image1's alt text",
      src: raw10,
    },
    {
      alt: "Image1's alt text",
      src: raw11,
    },
    {
      alt: "Image1's alt text",
      src: raw12,
    },
    {
      alt: "Image1's alt text",
      src: raw13,
    },
  ];
  const wireframes = [
    {
      alt: "Image1's alt text",
      src: wireframe,
    },
    {
      alt: "Image1's alt text",
      src: wireframe2,
    },
  ];

  const videos = [
    {
      url: vid1,
      title: "Gollem Video 3D",
      description: "Gollem Video 3D",
    },
    {
      url: vid2,
      title: "Chair Video 3D",
      description: "Chair Video 3D",
    },
    {
      url: vid3,
      title: "Suitcase Video 3D",
      description: "Suitcase Video 3D",
    },
    {
      url: vid4,
      title: "Robot Video 3D",
      description: "Robot Video 3D",
    },
  ];

  return (
    <div>
      <div className="tokyo_tm_portfolio_titles"></div>

      <div id="portfolio" className="tokyo_tm_section">
        <div className="container">
          <div className="tokyo_tm_portfolio">
            <Tabs className="tabs-list">
              <div className="tokyo_tm_title">
                <Row className="">
                  <Col className="left" lg={12} md={12}>
                    <span>Portfolio</span>
                  </Col>
                </Row>
                <Row>
                  <Col className="left" lg={6} md={12}>
                    <h3>Creative Portfolio</h3>
                  </Col>

                  <Col lg={6} md={12} className="portfolio_filter">
                    <TabList>
                      <Tab>Design</Tab>
                      <Tab>Raw File</Tab>
                      <Tab>Wireframe</Tab>
                      <Tab>Videos</Tab>
                    </TabList>
                  </Col>
                </Row>
              </div>
              <Row>
                <Col lg={12} md={12} className="list_wrapper">
                  <TabPanel>
                    {/* <Row className="img-gal">
                      {colors.map((color, index) => (
                        <Col lg={4} md={6} key={index}>
                          <ImageGallery
                            imagesInfoArray={[color]}
                            columnWidth="100%"
                          />
                        </Col>
                      ))}
                    </Row> */}
                    <Row className="img-gal">
                      {/* {colors.map((color, index) => ( */}
                        <Col lg={12} md={12} >
                          <ImageGallery
                            imagesInfoArray={colors.map((color, index) => (color))}
                            columnCount={"auto"}
                            columnWidth={230}
                            gapSize={24}
                          />
                        </Col>
                      {/* ))} */}
                    </Row>
                  </TabPanel>

                  <TabPanel>
                    <Row className="img-gal">
                      {/* {raws.map((raw, index) => ( */}
                        <Col lg={12} md={12}>
                          <ImageGallery
                            imagesInfoArray={raws.map((raw, index) => (raw))}
                            columnCount={"auto"}
                            columnWidth={230}
                            gapSize={24}
                          />
                        </Col>
                      {/* ))} */}
                    </Row>
                  </TabPanel>

                  <TabPanel>
                    <Row className="img-gal">
                      {wireframes.map((frame, index) => (
                        <Col lg={4} md={6} key={index}>
                          <ImageGallery
                            imagesInfoArray={[frame]}
                            columnWidth="100%"
                          />
                        </Col>
                      ))}
                    </Row>
                  </TabPanel>
                  <TabPanel>
                    <Row>
                    {videos.map((video, index) => (
                      <Col lg={6} md={6} className="video-thumbnail">
                        <ReactPlayer
                          url={video.url}
                          width="100%"
                          height="100%"
                          controls={true}
                          className="react-player"
                        />
                        <h3>{video.title}</h3>
                        <p>{video.description}</p>
                      </Col>
                    ))}
                    </Row>
                  </TabPanel>
                </Col>
              </Row>
            </Tabs>
            {/* <div className="list_wrapper"> */}
            {/* <Container>
                <Row>
                  {color.map((color, index) => (
                    <Col lg={4} md={6} key={index}>
                      <ImageGallery
                        imagesInfoArray={[color]}
                        columnWidth="100%"
                      />
                    </Col>
                  ))}
                </Row>
              </Container> */}
            {/* <ul className="portfolio_list gallery_zoom">
                    <li className="vimeo">
                        <div className="inner">
                            <div className="entry tokyo_tm_portfolio_animation_wrap"
                                data-title="Teresa Butler" data-category="Vimeo">
                                <a className="popup-vimeo" href="https://vimeo.com/337293658">
                                    <img src="img/thumbs/1-1.jpg" alt />
                                    <div className="abs_image" data-img-url={"img/portfolio/5.jpg"}></div>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className="youtube">
                        <div className="inner">
                            <div className="entry tokyo_tm_portfolio_animation_wrap"
                                data-title="Ashley Flores" data-category="Youtube">
                                <a className="popup-youtube"
                                    href="https://www.youtube.com/watch?v=7e90gBu4pas">
                                    <img src="img/thumbs/1-1.jpg" alt />
                                    <div className="abs_image" data-img-url="img/portfolio/6.jpg"></div>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className="soundcloud">
                        <div className="inner">
                            <div className="entry tokyo_tm_portfolio_animation_wrap"
                                data-title="Derek Smith" data-category="Soundcloud">
                                <a className="soundcloude_link mfp-iframe audio"
                                    href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
                                    <img src="img/thumbs/1-1.jpg" alt />
                                    <div className="abs_image" data-img-url="img/portfolio/4.jpg"></div>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className="image">
                        <div className="inner">
                            <div className="entry tokyo_tm_portfolio_animation_wrap"
                                data-title="Gloria Jenkins" data-category="Image">
                                <a className="zoom" href="img/portfolio/3.jpg">
                                    <img src="img/thumbs/1-1.jpg" alt />
                                    <div className="abs_image" data-img-url="img/portfolio/3.jpg"></div>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className="detail">
                        <div className="inner">
                            <div className="entry tokyo_tm_portfolio_animation_wrap"
                                data-title="Selena Gomez" data-category="Detail">
                                <a className="popup_info" href="#">
                                    <img src="img/thumbs/1-1.jpg" alt />
                                    <div className="abs_image" data-img-url="img/portfolio/7.jpg"></div>
                                </a>
                            </div>
                        </div>

                        <div className="details_all_wrap">
                            <div className="popup_details">
                                <div className="main_details">
                                    <div className="textbox">
                                        <p>We live in a world where we need to move quickly and iterate
                                            on our ideas as flexibly as possible. Building mockups
                                            strikes the ideal balance between true-life representation
                                            of the end product and ease of modification.</p>
                                        <p>Mockups are useful both for the creative phase of the project
                                            - for instance when you're trying to figure out your user
                                            flows or the proper visual hierarchy - and the production
                                            phase when they will represent the target product. Making
                                            mockups a part of your creative and development process
                                            allows you to quickly and easily ideate.</p>
                                    </div>
                                    <div className="detailbox">
                                        <ul>
                                            <li>
                                                <span className="first">Client</span>
                                                <span>Alvaro Morata</span>
                                            </li>
                                            <li>
                                                <span className="first">Category</span>
                                                <span><a href="#">Detail</a></span>
                                            </li>
                                            <li>
                                                <span className="first">Date</span>
                                                <span>October 22, 2022</span>
                                            </li>
                                            <li>
                                                <span className="first">Share</span>
                                                <ul className="share">
                                                    <li><a href="#"><i
                                                                className="icon-facebook-squared"></i></a>
                                                    </li>
                                                    <li><a href="#"><i
                                                                className="icon-twitter-squared"></i></a>
                                                    </li>
                                                    <li><a href="#"><i
                                                                className="icon-behance-squared"></i></a>
                                                    </li>
                                                    <li><a href="#"><i
                                                                className="icon-linkedin-squared"></i></a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="additional_images">
                                    <ul>
                                        <li>
                                            <div className="list_inner">
                                                <div className="my_image">
                                                    <img src="img/thumbs/4-2.jpg" alt />
                                                    <div className="main"
                                                        data-img-url="img/portfolio/1.jpg"></div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="list_inner">
                                                <div className="my_image">
                                                    <img src="img/thumbs/4-2.jpg" alt />
                                                    <div className="main"
                                                        data-img-url="img/portfolio/2.jpg"></div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="list_inner">
                                                <div className="my_image">
                                                    <img src="img/thumbs/4-2.jpg" alt />
                                                    <div className="main"
                                                        data-img-url="img/portfolio/3.jpg"></div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </li>
                    <li className="detail">
                        <div className="inner">
                            <div className="entry tokyo_tm_portfolio_animation_wrap" data-title="Ave Simone"
                                data-category="Detail">
                                <a className="popup_info" href="#">
                                    <img src="img/thumbs/1-1.jpg" alt />
                                    <div className="abs_image" data-img-url="img/portfolio/8.jpg"></div>
                                </a>
                            </div>
                        </div>

                        <div className="details_all_wrap">
                            <div className="popup_details">
                                <div className="main_details">
                                    <div className="textbox">
                                        <p>We live in a world where we need to move quickly and iterate
                                            on our ideas as flexibly as possible. Building mockups
                                            strikes the ideal balance between true-life representation
                                            of the end product and ease of modification.</p>
                                        <p>Mockups are useful both for the creative phase of the project
                                            - for instance when you're trying to figure out your user
                                            flows or the proper visual hierarchy - and the production
                                            phase when they will represent the target product. Making
                                            mockups a part of your creative and development process
                                            allows you to quickly and easily ideate.</p>
                                    </div>
                                    <div className="detailbox">
                                        <ul>
                                            <li>
                                                <span className="first">Client</span>
                                                <span>Alvaro Morata</span>
                                            </li>
                                            <li>
                                                <span className="first">Category</span>
                                                <span><a href="#">Detail</a></span>
                                            </li>
                                            <li>
                                                <span className="first">Date</span>
                                                <span>October 22, 2022</span>
                                            </li>
                                            <li>
                                                <span className="first">Share</span>
                                                <ul className="share">
                                                    <li><a href="#"><i
                                                                className="icon-facebook-squared"></i></a>
                                                    </li>
                                                    <li><a href="#"><i
                                                                className="icon-twitter-squared"></i></a>
                                                    </li>
                                                    <li><a href="#"><i
                                                                className="icon-behance-squared"></i></a>
                                                    </li>
                                                    <li><a href="#"><i
                                                                className="icon-linkedin-squared"></i></a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="additional_images">
                                    <ul>
                                        <li>
                                            <div className="list_inner">
                                                <div className="my_image">
                                                    <img src="img/thumbs/4-2.jpg" alt />
                                                    <div className="main"
                                                        data-img-url="img/portfolio/1.jpg"></div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="list_inner">
                                                <div className="my_image">
                                                    <img src="img/thumbs/4-2.jpg" alt />
                                                    <div className="main"
                                                        data-img-url="img/portfolio/2.jpg"></div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="list_inner">
                                                <div className="my_image">
                                                    <img src="img/thumbs/4-2.jpg" alt />
                                                    <div className="main"
                                                        data-img-url="img/portfolio/3.jpg"></div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </li>
                </ul> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
