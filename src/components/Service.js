import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import img1 from "../assets/img/services/3d-animation.jpg";
import img2 from "../assets/img/services/3d-modelling.jpg";
import img3 from "../assets/img/services/character-rigging.jpg";
import img4 from "../assets/img/services/digital-sculpting.jpg";
import img5 from "../assets/img/services/maerial-designing.jpg";
import img6 from "../assets/img/services/texture-mapping.jpg";

export default function Service() {
  const [show, setShow] = useState(null);

  const handleClose = () => setShow(null);
  const handleShow = (index) => setShow(index);

  const services = [
    {
      num: "01",
      title: "3D Animation",
      img: img1,
      p_sm: "Web development is the most famous job in the world and it is very interesting...",
      p1: "Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text",
      p2: "Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text",
    },
    {
      num: "02",
      title: "3D Modeling",
      img: img2,
      p_sm: "Web development is the most famous job in the world and it is very interesting...",
      p1: "Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text",
      p2: "Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text",
    },
    {
      num: "03",
      title: "Character Rigging",
      img: img3,
      p_sm: "Web development is the most famous job in the world and it is very interesting...",
      p1: "Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text",
      p2: "Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text",
    },
    {
      num: "04",
      title: "Digital Sculpting",
      img: img4,
      p_sm: "Web development is the most famous job in the world and it is very interesting...",
      p1: "Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text",
      p2: "Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text",
    },
    {
      num: "05",
      title: "Texture Mapping",
      img: img6,
      p_sm: "Web development is the most famous job in the world and it is very interesting...",
      p1: "Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text",
      p2: "Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text",
    },
    {
      num: "06",
      title: "Materials Designing",
      img: img5,
      p_sm: "Web development is the most famous job in the world and it is very interesting...",
      p1: "Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text",
      p2: "Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text Here...Text",
    },
  ];

  return (
    <div>
      <div id="service" className="tokyo_tm_section">
        <div className="container">
          <div className="tokyo_tm_services">
            <div className="tokyo_tm_title">
              <div className="title_flex">
                <div className="left">
                  <span>Services</span>
                  <h3>What I Do</h3>
                </div>
              </div>
            </div>
            <div className="list">
              <ul>
                {services.map((service, index) => (
                  <li key={index}>
                    <div className="list_inner">
                      <span className="number">{service.num}</span>
                      <h3 className="title">{service.title}</h3>
                      <p className="text">{service.p_sm}</p>
                      <div className="tokyo_tm_read_more">
                        <a href="#" onClick={() => handleShow(index)}>
                          <span>Read More</span>
                        </a>
                      </div>
                      <Modal
                        show={show === index}
                        onHide={handleClose}
                        size="lg"
                        className="service-modal"
                      >
                        <Modal.Header closeButton></Modal.Header>
                        <Modal.Body>
                          <img
                            className="popup_service_image service-img"
                            src={service.img}
                            alt={service.title}
                          />
                          <div className="service_hidden_details">
                            <div className="service_popup_informations">
                              <div className="descriptions">
                                <h3 className="title">{service.title}</h3>
                                <p>{service.p1}</p>
                                <p>{service.p2}</p>
                              </div>
                            </div>
                          </div>
                        </Modal.Body>
                      </Modal>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
