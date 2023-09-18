import React, { useEffect, useContext, useState } from "react"
import { useNavigate, Link, Outlet } from "react-router-dom";
import SabjiContext from "../context/Contexts";
import HorizontalNavbar from "./Horizontalnav";
import Style from './Styles.css'
export default function Homepage(){
  
  return( <div>  
     
    <div
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      role="banner"
      class="navigation w-nav"
    >
      <div class="w-container">
        <a href="#" class="brand-link w-nav-brand"
          ><div class="logo-text">Metric</div></a
        >
        <nav role="navigation" class="nav-menu w-nav-menu">
          <a href="#features" class="nav-link w-nav-link">Features</a
          ><a href="#pricing" class="nav-link w-nav-link">Pricing</a
          ><a href="#customers" class="nav-link w-nav-link">Customers</a
          ><a href="#" class="nav-link w-nav-link">Sign Up</a>
        </nav>
        <div class="nav-link menu w-nav-button">
          <div class="w-icon-nav-menu"></div>
        </div>
      </div>
    </div>
    <div
      data-animation="slide"
      data-duration="500"
      data-infinite="1"
      class="slider w-slider"
    >
      <div class="w-slider-mask">
        <div class="slide _1 w-slide"><div class="w-container"></div></div>
        <div class="slide _2 w-slide"><div class="w-container"></div></div>
        <div class="slide _3 w-slide"><div class="w-container"></div></div>
      </div>
      <div class="w-slider-arrow-left">
        <div class="w-icon-slider-left"></div>
      </div>
      <div class="w-slider-arrow-right">
        <div class="w-icon-slider-right"></div>
      </div>
      <div class="w-slider-nav w-round"></div>
    </div>
    <div id="top" class="section main">
      <div class="w-container">
        <div class="w-row">
          <div class="w-col w-col-6">
            <h1 class="main-heading">Grow Your Business 10x with Metric</h1>
            <p class="main-subtitle">
              The Metric Dashboard brings all of your business insights under
              one roof. Revenue metrics, social, integrations - everything.
            </p>
            <a href="#" class="button">Sign Up</a
            ><a href="#" class="button hollow">Learn More</a>
          </div>
          <div class="w-col w-col-6">
            <img
              src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed45304d748c_Metric-screenshot5.png"
              srcset="
                https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed45304d748c_Metric-screenshot5-p-500x317.png 500w,
                https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed45304d748c_Metric-screenshot5.png           814w
              "
              sizes="(max-width: 767px) 96vw, (max-width: 991px) 354px, 460px"
              style="
                -webkit-transform: translate3d(0, 25px, 0) scale3d(1, 1, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -moz-transform: translate3d(0, 25px, 0) scale3d(1, 1, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -ms-transform: translate3d(0, 25px, 0) scale3d(1, 1, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                transform: translate3d(0, 25px, 0) scale3d(1, 1, 1) rotateX(0)
                  rotateY(0) rotateZ(0) skew(0, 0);
                opacity: 0;
              "
              data-w-id="0add69ab-1acc-a56b-ab72-d9b1cd6d3054"
              alt=""
              class="main-image"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="section press">
      <div class="w-container">
        <div class="small-text">IN THE PRESS</div>
        <div class="div-block">
          <img
            src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed80684d7486_logo_Fastcompany.svg"
            width="70"
            alt=""
            class="logo"
          /><img
            src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed0a224d7479_logo_Forbes.svg"
            width="70"
            alt=""
            class="logo"
          /><img
            src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25edeb824d7462_logo_techcrunch.svg"
            width="70"
            alt=""
            class="logo"
          /><img
            src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed2e5b4d7471_logo_Wired.svg"
            width="70"
            alt=""
            class="logo"
          /><img
            src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed57864d7476_logo_zdnet.svg"
            width="70"
            alt=""
            class="logo"
          />
        </div>
      </div>
    </div>
    <div id="features" class="section">
      <div class="w-container">
        <h2>Sync Across All Devices</h2>
        <div class="section-subtitle">
          Everything you need to make your business grow
          <strong class="bold-text">super fast</strong>!
        </div>
        <div class="feature-row w-row">
          <div class="w-col w-col-6">
            <img
              src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed985b4d747a_Metric-screenshot2.png"
              alt=""
              style="
                -webkit-transform: translate3d(0, 25px, 0) scale3d(1, 1, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -moz-transform: translate3d(0, 25px, 0) scale3d(1, 1, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -ms-transform: translate3d(0, 25px, 0) scale3d(1, 1, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                transform: translate3d(0, 25px, 0) scale3d(1, 1, 1) rotateX(0)
                  rotateY(0) rotateZ(0) skew(0, 0);
                opacity: 0;
              "
              sizes="(max-width: 767px) 96vw, (max-width: 991px) 354px, 460px"
              data-ix="fade-in-on-scroll"
              data-w-id="ae6d3e74-cad2-e25b-7307-64469019de8a"
              srcset="
                https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed985b4d747a_Metric-screenshot2-p-500x320.png 500w,
                https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed985b4d747a_Metric-screenshot2-p-800x512.png 800w,
                https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed985b4d747a_Metric-screenshot2.png           814w
              "
            />
          </div>
          <div class="w-col w-col-6">
            <div class="main-feature-group">
              <img
                src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed3d464d7465_iconmonstr-laptop-2-icon.svg"
                height="30"
                alt=""
                class="feature-icon"
              />
              <h3>Web Application</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Consectetur
                adipiscing elit.
              </p>
            </div>
          </div>
        </div>
        <div class="feature-row w-row">
          <div class="w-col w-col-6">
            <div class="main-feature-group">
              <img
                src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25edd11a4d747b_iconmonstr-download-13-icon.svg"
                height="30"
                alt=""
                class="feature-icon"
              />
              <h3>Mobile App</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Consectetur
                adipiscing elit.
              </p>
            </div>
          </div>
          <div class="w-col w-col-6">
            <img
              src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed61054d7490_Metric-screenshot-phone.png"
              alt=""
              style="
                -webkit-transform: translate3d(0, 25px, 0) scale3d(1, 1, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -moz-transform: translate3d(0, 25px, 0) scale3d(1, 1, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -ms-transform: translate3d(0, 25px, 0) scale3d(1, 1, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                transform: translate3d(0, 25px, 0) scale3d(1, 1, 1) rotateX(0)
                  rotateY(0) rotateZ(0) skew(0, 0);
                opacity: 0;
              "
              sizes="(max-width: 767px) 96vw, (max-width: 991px) 354px, 460px"
              data-ix="fade-in-on-scroll"
              data-w-id="29859a3f-acf5-87fb-9a1d-59628b5d3fbf"
              srcset="
                https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed61054d7490_Metric-screenshot-phone-p-500x243.png  500w,
                https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed61054d7490_Metric-screenshot-phone-p-800x389.png  800w,
                https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed61054d7490_Metric-screenshot-phone.png           1000w
              "
            />
          </div>
        </div>
        <div class="small-features-row w-row">
          <div class="w-col w-col-3">
            <div class="feature">
              <img
                src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed6db44d7473_iconmonstr-control-panel-icon.svg"
                height="30"
                alt=""
                class="feature-icon"
              />
              <h3>Dashboard</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. 
              </p>
            </div>
          </div>
          <div class="w-col w-col-3">
            <div class="feature">
              <img
                src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed67164d747f_iconmonstr-sitemap-7-icon.svg"
                height="30"
                alt=""
                class="feature-icon"
              />
              <h3>Custom Rules</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. 
              </p>
            </div>
          </div>
          <div class="w-col w-col-3">
            <div class="feature">
              <img
                src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed497e4d7467_iconmonstr-save-9-icon.svg"
                height="30"
                alt=""
                class="feature-icon"
              />
              <h3>Presets</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. 
              </p>
            </div>
          </div>
          <div class="w-col w-col-3">
            <div class="feature">
              <img
                src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed6ef14d745f_iconmonstr-bar-chart-4-icon.svg"
                height="30"
                alt=""
                class="feature-icon"
              />
              <h3>Metrics</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="pricing" class="section purple">
      <div class="w-container">
        <h2>Plans &amp; Pricing</h2>
        <div class="section-subtitle">
          No credit card required. No risk, <strong class="bold-text"
            >30-day money back guarantee</strong
          >!
        </div>
        <div class="w-row">
          <div class="w-col w-col-3">
            <div
              data-ix="fade-in-on-scroll"
              data-w-id="d87fa01e-3185-5bc3-193f-6faa2208ea8e"
              style="
                -webkit-transform: translate3d(0, 25px, 0) scale3d(1, 1, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -moz-transform: translate3d(0, 25px, 0) scale3d(1, 1, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -ms-transform: translate3d(0, 25px, 0) scale3d(1, 1, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                transform: translate3d(0, 25px, 0) scale3d(1, 1, 1) rotateX(0)
                  rotateY(0) rotateZ(0) skew(0, 0);
                opacity: 0;
              "
              class="plan-wrapper"
            >
              <h3>Starter</h3>
              <div class="price-point">
                <strong class="price-accent">$15</strong> /month
              </div>
              <div class="price-point">
                <strong class="price-accent">500</strong> Data Points
              </div>
              <div class="price-point">
                <strong class="price-accent">1</strong> Team Member
              </div>
              <div class="divider"></div>
              <div class="addl-feature"><strong>Email</strong> Support</div>
              <div class="addl-feature inactive">IOS and Android App</div>
              <div class="addl-feature inactive">Customizable Dashboard</div>
              <div class="addl-feature inactive">Metric API</div>
              <a href="#" class="button in-pricing">Choose Plan</a>
            </div>
          </div>
          <div class="w-col w-col-3">
            <div
              data-ix="fade-in-on-scroll"
              data-w-id="d242de0d-d6d2-f690-dd23-3599cc488914"
              style="
                -webkit-transform: translate3d(0, 25px, 0) scale3d(1, 1, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -moz-transform: translate3d(0, 25px, 0) scale3d(1, 1, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -ms-transform: translate3d(0, 25px, 0) scale3d(1, 1, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                transform: translate3d(0, 25px, 0) scale3d(1, 1, 1) rotateX(0)
                  rotateY(0) rotateZ(0) skew(0, 0);
                opacity: 0;
              "
              class="plan-wrapper"
            >
              <h3>Professional</h3>
              <div class="price-point">
                <strong class="price-accent">$30</strong> /month
              </div>
              <div class="price-point">
                <strong class="price-accent">2000</strong> Data Points
              </div>
              <div class="price-point">
                <strong class="price-accent">1</strong> Team Member
              </div>
              <div class="divider"></div>
              <div class="addl-feature"><strong>Email</strong> Support</div>
              <div class="addl-feature">
                <strong>IOS</strong> and <strong>Android</strong> App
              </div>
              <div class="addl-feature inactive">Customizable Dashboard</div>
              <div class="addl-feature inactive">Metric API</div>
              <a href="#" class="button in-pricing">Choose Plan</a>
            </div>
          </div>
          <div class="w-col w-col-3">
            <div
              data-ix="fade-in-on-scroll"
              data-w-id="36a69626-52ca-b009-2f12-75a01dceb9e4"
              style="
                -webkit-transform: translate3d(0, 25px, 0) scale3d(1, 1, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -moz-transform: translate3d(0, 25px, 0) scale3d(1, 1, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -ms-transform: translate3d(0, 25px, 0) scale3d(1, 1, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                transform: translate3d(0, 25px, 0) scale3d(1, 1, 1) rotateX(0)
                  rotateY(0) rotateZ(0) skew(0, 0);
                opacity: 0;
              "
              class="plan-wrapper"
            >
              <h3>Startup</h3>
              <div class="price-point">
                <strong class="price-accent">$75</strong> /month
              </div>
              <div class="price-point">
                <strong class="price-accent">5000</strong> Data Points
              </div>
              <div class="price-point">
                <strong class="price-accent">3</strong> Team Member
              </div>
              <div class="divider"></div>
              <div class="addl-feature"><strong>Email</strong> Support</div>
              <div class="addl-feature">
                <strong>IOS</strong> and <strong>Android</strong> App
              </div>
              <div class="addl-feature">
                <strong>Customizable</strong> Dashboard
              </div>
              <div class="addl-feature inactive">Metric API</div>
              <a href="#" class="button in-pricing">Choose Plan</a>
            </div>
          </div>
          <div class="w-col w-col-3">
            <div
              data-ix="fade-in-on-scroll"
              data-w-id="5b5856d5-59ee-ab6c-62a3-bedc1be922a2"
              style="
                -webkit-transform: translate3d(0, 25px, 0) scale3d(1, 1, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -moz-transform: translate3d(0, 25px, 0) scale3d(1, 1, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -ms-transform: translate3d(0, 25px, 0) scale3d(1, 1, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                transform: translate3d(0, 25px, 0) scale3d(1, 1, 1) rotateX(0)
                  rotateY(0) rotateZ(0) skew(0, 0);
                opacity: 0;
              "
              class="plan-wrapper"
            >
              <h3>Business</h3>
              <div class="price-point">
                <strong class="price-accent">$250</strong> /month
              </div>
              <div class="price-point">
                <strong class="price-accent">15000</strong> Data Points
              </div>
              <div class="price-point">
                <strong class="price-accent">10</strong> Team Member
              </div>
              <div class="divider"></div>
              <div class="addl-feature"><strong>Priority</strong> Support</div>
              <div class="addl-feature">
                <strong>IOS</strong> and <strong>Android</strong> App
              </div>
              <div class="addl-feature">
                <strong>Customizable</strong> Dashboard
              </div>
              <div class="addl-feature">Metric <strong>API</strong></div>
              <a href="#" class="button in-pricing">Choose Plan</a>
            </div>
          </div>
        </div>
        <div class="additional-contact">
          Need more Data Points or Team Members? Please
          <a href="#" class="page-link">contact us</a>.
        </div>
      </div>
    </div>
    <div id="customers" class="section">
      <div class="w-container">
        <h2>What People Say About Us</h2>
        <div
          data-animation="slide"
          data-duration="500"
          data-infinite="1"
          class="testimonial-slider w-slider"
        >
          <div class="w-slider-mask">
            <div class="testimony-slide w-slide">
              <p class="testimony-text">
                “Donec ullamcorper nulla non metus auctor fringilla. Maecenas
                sed diam eget risus varius blandit sit amet non magna. Maecenas
                faucibus mollis interdum.”
              </p>
              <img
                src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed78514d7460_04f14af5199093cdd29a89eb295febf5.jpeg"
                width="64"
                alt=""
                class="person"
              />
              <div class="name">Kyle Killit</div>
              <div class="title">Designer at Tiempo Labs</div>
            </div>
            <div class="testimony-slide w-slide">
              <p class="testimony-text">
                “Ullamcorper nulla non metus auctor fringilla. Maecenas sed diam
                eget risus varius blandit sit amet non magna”
              </p>
              <img
                src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed86384d7487_sergie-square.jpg"
                width="100"
                alt=""
                class="person"
              />
              <div class="name">Sergie Kalashnikov</div>
              <div class="title">CEO at BentoBox</div>
            </div>
            <div class="testimony-slide w-slide">
              <p class="testimony-text">
                “Nulla non metus auctor fringilla. Maecenas sed diam eget risus
                varius blandit sit amet non magna. Maecenas faucibus mollis
                interdum.”
              </p>
              <img
                src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25edf4be4d7485_bryant-square.jpg"
                width="100"
                alt=""
                class="person"
              />
              <div class="name">Bryant Chou</div>
              <div class="title">CTO at Slapper Labs</div>
            </div>
          </div>
          <div class="slider-arrow w-slider-arrow-left">
            <div class="w-icon-slider-left"></div>
          </div>
          <div class="slider-arrow w-slider-arrow-right">
            <div class="w-icon-slider-right"></div>
          </div>
          <div class="slide-nav w-slider-nav w-round"></div>
        </div>
      </div>
    </div>
    <div class="section clients">
      <div class="w-container">
        <img
          src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed71464d745d_client_logo_johnson_and_johnson.png"
          width="162"
          alt=""
          class="client-logo"
        /><img
          src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25edbea24d746b_client_logo_tesla.png"
          width="160"
          alt=""
          class="client-logo"
        /><img
          src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed4cd14d7488_client_logo_ouya.png"
          width="162"
          alt=""
          class="client-logo"
        /><img
          src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed10654d7470_client_logo_chartboost.png"
          width="162"
          alt=""
          class="client-logo"
        /><img
          src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed6db74d746a_client_logo_mammoth.png"
          width="162"
          alt=""
          class="client-logo"
        /><img
          src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed67f74d7461_client_logo_neutrogena.png"
          width="162"
          alt=""
          class="client-logo"
        />
      </div>
    </div>
    <div class="section footer">
      <div class="w-container">
        <div class="w-row">
          <div class="w-col w-col-6">
            <div class="logo-text footer">Metric</div>
            <div class="footer-slogan">Sign up for our newsletter</div>
            <div class="newsletter-form w-form">
              <form
                id="wf-form-newsletter"
                name="wf-form-newsletter"
                data-name="Newsletter"
                class="w-clearfix"
              >
                <input
                  type="email"
                  id="email"
                  name="email"
                  data-name="Email"
                  placeholder="Email Address"
                  maxlength="256"
                  required=""
                  class="newsletter-field w-input"
                /><input
                  type="submit"
                  value="Subscribe"
                  data-wait="Wait..."
                  wait="Wait..."
                  class="newsletter-button w-button"
                />
              </form>
              <div class="success-message w-form-done">
                <p>Thank you! You’ll receive an email shortly.</p>
              </div>
              <div class="w-form-fail">
                <p>Oops! Something went wrong while submitting the form :(</p>
              </div>
            </div>
            <div class="social-icon-group">
              <a href="#" class="social-icon w-inline-block"
                ><img
                  src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed4bd44d746f_facebook-icon.svg"
                  alt="" /></a
              ><a href="#" class="social-icon w-inline-block"
                ><img
                  src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed53ce4d7474_twitter-icon.svg"
                  alt="" /></a
              ><a href="#" class="social-icon w-inline-block"
                ><img
                  src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed37cb4d746d_linkdin-icon-white.svg"
                  alt="" /></a
              ><a href="#" class="social-icon w-inline-block"
                ><img
                  src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25eda92d4d7478_email-icon-white.svg"
                  alt=""
              /></a>
            </div>
          </div>
          <div class="w-col w-col-2">
            <h4 class="footer-title">Company</h4>
            <a href="#" class="page-link in-footer">Home</a
            ><a href="#" class="page-link in-footer">Features</a
            ><a href="#" class="page-link in-footer">Clients</a
            ><a href="#" class="page-link in-footer">Pricing</a
            ><a href="#" class="page-link in-footer">Sign Up</a>
          </div>
          <div class="w-col w-col-2">
            <h4 class="footer-title">Product</h4>
            <a href="#" class="page-link in-footer">Analytics</a
            ><a href="#" class="page-link in-footer">Businesses</a
            ><a href="#" class="page-link in-footer">Testimonials</a
            ><a href="#" class="page-link in-footer">Integrations</a>
          </div>
          <div class="w-col w-col-2">
            <h4 class="footer-title">Legal</h4>
            <a href="#" class="page-link in-footer">Privacy Policy</a
            ><a href="#" class="page-link in-footer">Terms of Use</a>
          </div>
        </div>
      </div>
    </div>
    <div class="section footer copyright">
      <div class="w-container">
        <div>
          Copyright 2014 Metric. All Rights Reserved. Brand logos for
          demonstration purposes only.
        </div>
      </div>
    </div>

 


</div>
  )
    }











{/* //     return(
//         <div className="" style={Style}>
//             <nav className="navbar navbar-expand-lg bg-body-tertiary bg-black">
//   <div className="container-fluid">
//     <a className="navbar-brand txt" href="#">Farm_In</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link text-white" href="#">Link</a>
//         </li>
        
//       </ul>
//       <form className="d-flex" role="search">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>
//      <div className="main">
        
//      </div>
//         </div>
//     )
// } */}