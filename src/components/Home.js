import React from 'react'
import img1 from './../assets/img/dhara.jpg'

export default function Home() {
  return (
    <div id="home" className="tokyo_tm_section animated">
      <div className="container">
        <div className="tokyo_tm_home">
          <div className="home_content">
            <div className="avatar" data-type="wave">
              <div
                className="image"
                data-img-url="img/slider/1.jpg"
                style={{ backgroundImage: `url(${img1})` }}
              ></div>
            </div>
            <div className="details">
              <h3 className="name">
                Dhara <span>Pancholi</span>
              </h3>
              <p className="job">
                I am a 3d Animator at heart and create features that are best
                suited for the job at hand.
              </p>
              <p className="job">
                Passionate about bringing imagination to life through the realm
                of 3D animation and digital art. Proficient in Blender, Maya,
                Photoshop, and sculpting techniques.
              </p>
              <div className="social">
                <ul>
                  <li>
                    <a target='_blank' href="https://www.linkedin.com/in/dhara-pancholi-21bab11a0/">
                      <i className="icon-linkedin-squared"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-instagram-"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
