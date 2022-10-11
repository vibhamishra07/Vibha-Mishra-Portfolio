import React, { useState } from 'react'
import './ProgressBar.css';

function ProgressBar({sName, sPer}) {
    const [style, setStyle] = useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: '1',
			width: `${sPer}%`,
		}
		setStyle(newStyle);
	}, 200);
  return (
    <div className="p-bar">
      <div className="skill-name-per" >
        <span style={{paddingLeft:`${sPer-6}%` , color:'cyan'}}>{sPer}%</span>
        <div className="s-name" >{sName}</div>
        {/* <div className="s-per">100%</div> */}
      </div>
      <div className="bar">
        <div className='inner-bar' style={style}></div>
      </div>
    </div>
  );
}

export default ProgressBar;