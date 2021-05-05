import React, { FC } from 'react'
import {Desk} from '../types/desk'

type Props = {
  desk: Desk
  zoomLevel: number
}

export const Pol: FC<Props> = ({desk, zoomLevel}) => {

  function onClickorTouch(e) {
    alert(zoomLevel)
  }

  return (
    <g>
      {true &&
        <rect 
          x={desk.x} 
          y={desk.y} 
          width={desk.width} 
          height={desk.height}
          stroke="black"
          strokeWidth="1"
          fill="#fff"
          onClick={onClickorTouch}
          onTouchStart={onClickorTouch}
        />
      }
      {true && 
        <text
          x={desk.x+desk.width/2} 
          y={desk.y+desk.height/2}
          fontSize={5}
          textAnchor="middle"
          onClick={onClickorTouch}
          onTouchStart={onClickorTouch}
        >
          {zoomLevel}
        </text>
      }
    </g>
  )
}