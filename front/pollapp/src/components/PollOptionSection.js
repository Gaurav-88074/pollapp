import React from 'react'
import './PollOptionSection.css'
import { useState } from 'react'
import { memo } from 'react'
const PollOptionSection = (props) => {
  let  width = props.width
  return (
    <div className="pollOptionSection">
        <div className="percentBox">
          {isNaN(width)?0:width}%
        </div>
        <div className="rightHalf">
            <div className="optionText">
                {props.title}
            </div>
            <div className="percentBar">
                <div className="percentBarValue" 
                      style={{width:width*5}}>
                </div>
            </div>
        </div>
    </div>
  )
}

export default memo(PollOptionSection)