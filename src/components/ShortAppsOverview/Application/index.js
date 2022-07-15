import React from 'react';
import ApplicationImage from '../../../images/globe.png'
import SourceCodeImage from '../../../images/source-code.png'
import './styles.scss';

export default function Application({
  label, description, value, sourceCode, liveApp
}) {
  const handleLinkOpen = (url) => {
    console.log("Redirecting to ", url)
    window.open(url, '__blank')
  }
  return (
    <div className="application-wrapper">
      <div className="application-wrapper-label">{label}</div>
      <div className="application-wrapper-desc">{description}</div>
      <div className="application-overlay">
        <div className="application-overlay-source-code">
          {
            sourceCode?.isAvailable == true && sourceCode?.urlList?.map((code, idx) => {
              if(idx == 0)
                return <img className="source-code" title={"Source Code: " + code.label} key={idx} src={SourceCodeImage} alt={"i"} onClick={() => {handleLinkOpen(code?.url)}}/>
            })
          }
        </div>
        <div className="application-overlay-live-app">
        {
            liveApp?.isAvailable == true && <img className="live-app" title={"Click to open the application"} src={ApplicationImage} alt={"i"} onClick={() => {handleLinkOpen(liveApp?.url)}}/>
          }
        </div>
      </div>
    </div>
  )
}
