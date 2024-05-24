import React from 'react'
import { Container } from 'react-bootstrap';
import {Row , Col} from 'react-bootstrap';
import rightarrow from "../assets/img/svg/rightarrow.svg";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <div>
      <div id="contact" className="tokyo_tm_section">
        <Container>
          <div className="tokyo_tm_contact">
            <div className="tokyo_tm_title">
              <div className="title_flex">
                <div className="left">
                  <span>Contact</span>
                  <h3>Get in Touch</h3>
                </div>
              </div>
            </div>
            <Row>   
                <Col lg={6} md={6} >
                <div className="map_wrap">
              <div className="mapouter">
                <div className="gmap_canvas">
                  {/* <iframe width="100%" height="355" id="gmap_canvas"
                                            src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                            frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe> */}
             
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47795.95350809062!2d-113.55269505948405!3d53.540281562773906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a0224580deff23%3A0x411fa00c4af6155d!2sEdmonton%2C%20AB%2C%20Canada!5e0!3m2!1sen!2sin!4v1716576413931!5m2!1sen!2sin"
                    width="100%" height="355"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
                </Col>
                <Col lg={6} md={6} >
                <div className="left">
                <div className="tokyo_section_title">
                  <h3>Knowledge</h3>
                </div>
                <div className="tokyo_tm_skill_list contact">
                  <ul>
                    <li>
                      <span>
                        <IoMail className='icon'/>
                        Email: <a href="mailto:dpanch1097@gmail.com">dpanch1097@gmail.com</a>
                      </span>
                    </li>
                    <li>
                      <span>
                        <FaPhone  className='icon'/>
                        Phone: <a href="tel:+1 (587) 937-1004">+1 (587) 937-1004</a>
                      </span>
                    </li>
                    
                  </ul>
                </div>
              </div>
                </Col>
            </Row>
          
          </div>
        </Container>
      </div>
    </div>
  );
}
