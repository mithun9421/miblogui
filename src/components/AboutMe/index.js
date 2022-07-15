import React from 'react';
import ProfilePicture from '../../images/mrbad.png';
import './styles.scss'

export default function AboutMe() {
  return (
    <div className="about-me">
        <div className="profile-pic">
          <img className="pic" src={ProfilePicture} alt="i" />
        </div>
        <div className="profile-info">
          <h2 className={"name"}>Mithun M</h2>
          <h4 className={"designation"}>Software Engineer @ PayPal</h4>
          <h5 className={"slogan"}>Frontend Engineer (Can do API sometimes)</h5>
        </div>
    </div>
  )
}
