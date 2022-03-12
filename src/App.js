import './App.css';
import React from 'react';
import About from "./about";
import Projs from './projs';

function Footer() {
  return (
    <div className="footer">
      One-Paged Curriculum Vitae created by Hannah Meave P. Bautista (4ITC)<br />
      MP1 for ITELEC4C
    </div>
  );
}

function Info(){
  return(
    <div className="about">
      <About
        pic={require("./images/self.jpg")} />
    </div>
  );
}

function Education(){
  return(
    <div className="educ">
      <div className="sec-headers">
        <img src={require("./images/ed.png")} />
        Educational Background
        <hr class="line"></hr>
      </div>

      <div className="grid-table">
        <div className="item1">
          <h3>Undergraduate Studies</h3>
        </div>
        <div className="item2">
          <p><b>University of Santo Tomas</b><br />
        Espana, Manila
        </p>
        <ul>
          <li>Bachelor of Science in Information Technology - Web and Mobile Application Development specialization (2018 - present)</li>
          <li>Dean's Lister (2018 - present)</li>
        </ul>
        </div>
        
        <div className="item3">
          <h3>Senior High School</h3>
        </div>
        <div className="item4">
          <p><b>University of Santo Tomas</b><br />
        Espana, Manila
        </p>
        <ul>
          <li>Science, Technology, Engineering, and Mathematics academic strand (2016 - 2018)</li>
        </ul>
        </div>
      </div>
    </div>
  );
}

function Work() {
  return (
    <div className="work">
      <div className="sec-headers">
        <img src={require("./images/work.png")} />
        Work Experience
      </div>

      <div className="grid-table">
        <div className="item1">
          <p><b>Realtair, Inc.</b><br />
          Makati, Manila
          </p>
          <ul>
            <li>Software Quality Analyst Intern (2022)</li>
          </ul>
        </div>
        <div className="item2">
        <h3>Internship</h3>
        </div>
      </div> 
    </div>
  );
}

function Projects() {
  return (
    <div className="proj">
      <div className="sec-headers">
        <img src={require("./images/proj.png")} />
        Projects
      </div>

      <Projs 
        title="TUKLAS: A Filipino Dictionary and Language Learning Mobile Application Version 2.0"
        roles="Developer, Quality Assurance Officer"
        desc01="Create models and diagrams to show programmers the code needed for application"
        desc02="Monitor quality and performance of applications through testing and maintenance"
         />

      <Projs
        title="Juliet Mnl Ph Web Application"
        roles="Business Analyst, Quality Assurance Officer"
        desc01="Creating a detailed business analysis, outlining problems, opportunies and solutions for a business"
        desc02="Monitor quality and performance of applications through testing and maintenance"
        />
    </div>
  );
}

function CertSem() {
  return (
    <div className="cert-semi">
      <div className="grid-table">
        <div className="item1">
          <div className="sec-headers">
          <img src={require("./images/cert.png")} />
            Certifications
          </div>

          <ul>
            <li>PhilNITS Information Technology Passport (2021)</li>
            <li>CompTIA IT Fundamentals (ITF+) (2019)</li>
          </ul>
        </div>

        <div className="item2">
          <div className="sec-headers">
            <img src={require("./images/user.png")} />
            Seminars
          </div>

            <ul>
              <li>Designing the Future: Navigating through the World of UI and Tech (2021)</li>
              <li>(AI)²: An Infinity to Artificial Intelligence (2021)</li>
              <li>AceIT: UI/UX Strategies Webinar (2021)</li>
              <li>UI/UX Design Global Roundtable (2022)</li>
              <li>The Test Tribe 7th Meetup (2022)</li>
              <li>The Future of UI/UX Design Series (2022)</li>
              <li>RPA Meetup Event: Getting to Know AI: Myths, Powers, and Ethics (2022)</li>
            </ul>
        </div>
      </div>
    </div>
  );
}

function Page() {
  return (
    <div>
      <Info />
      <Education />
      <Work />
      <Projects />
      <CertSem />
      <Footer />
    </div>
  );
}

export default Page;