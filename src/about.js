import React from "react";

export default function About(props){
    return (
    <div className="about">
      <img src={props.pic} className="about-pic" />
      <p className="about-info">
        <h3>I'm Hannah Meave Bautista.</h3>
        
        A fourth year university student, Majoring in Bachelor of Science in Information Technology. Specializes in web and mobile
        application development. Capable of working in teams and communicating well among members.<p />

        <h4>// Skills and Proficiences</h4>

        <ul>
          <li><b>Technical:</b> Java, C++, Python, Oracle SQL, Visual Basic, PHP, and Android programming</li>
          <li><b>Web Design:</b> HTML, CSS, JavaScript</li>
          <li><b>Soft Skills:</b> communication, hardworking, teamwork, adaptability, perseverance, problem solving</li>
        </ul>
      </p>
    </div>
    );
}