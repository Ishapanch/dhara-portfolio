import React from 'react'

export default function Contact() {
  return (
    <div>
      <div id="contact" className="tokyo_tm_section">
                    <div className="container">
                        <div className="tokyo_tm_contact">
                            <div className="tokyo_tm_title">
                                <div className="title_flex">
                                    <div className="left">
                                        <span>Contact</span>
                                        <h3>Get in Touch</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="map_wrap">
                                <div className="mapouter">
                                    <div className="gmap_canvas"><iframe width="100%" height="355" id="gmap_canvas"
                                            src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                            frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a
                                            href="https://fmovies-online.net">fmovies</a><br/>
                                        
                                    </div>
                                </div>

                            </div>
                            <div className="fields">
                                <form action="/" method="post" className="contact_form" id="contact_form"
                                    autocomplete="off">
                                    <div className="returnmessage"
                                        data-success="Your message has been received, We will contact you soon."></div>
                                    <div className="empty_notice"><span>Please Fill Required Fields</span></div>
                                    <div className="first">
                                        <ul>
                                            <li>
                                                <input id="name" type="text" placeholder="Name"/>
                                            </li>
                                            <li>
                                                <input id="email" type="text" placeholder="Email"/>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="last">
                                        <textarea id="message" placeholder="Message"></textarea>
                                    </div>
                                    <div className="tokyo_tm_button" data-position="left">
                                        <a id="send_message" href="#">
                                            <span>Send Message</span>
                                        </a>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}
