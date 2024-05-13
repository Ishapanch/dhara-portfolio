import React from 'react'
import img1 from './../assets/img/dhara2.jpg'

export default function Home() {
  return (
    <div id="home" class="tokyo_tm_section animated">
    <div class="container">
        <div class="tokyo_tm_home">
            <div class="home_content">
                <div class="avatar" data-type="wave">
                    <div class="image" data-img-url="img/slider/1.jpg" style={{backgroundImage: `url(${img1})`}}></div>
                </div>
                <div class="details">
                    <h3 class="name">Dhara <span>Pancholi</span></h3>
                    <p class="job">I am a 3d Animator at heart and create features that are best
                        suited for the job at hand.</p>
                    <div class="social">
                        <ul>
                            <li><a href="https://www.linkedin.com/in/dhara-pancholi-21bab11a0/"><i class="icon-linkedin-squared"></i></a></li>
                            <li><a href="#"><i class="icon-instagram-"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
