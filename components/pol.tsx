import React, { FC } from 'react'
import {Desk} from '../types/desk'

type Props = {
  desk: Desk
  zoomLevel: number
}

export const Pol: FC<Props> = ({desk, zoomLevel}) => {
  return (
    <g>
      {zoomLevel > 2 &&
        <rect 
          x={desk.x} 
          y={desk.y} 
          width={desk.width} 
          height={desk.height}
          stroke="black"
          strokeWidth="1"
          fill="#fff"
          onClick={event =>
            alert(desk.id)
          } 
        />
      }
      {zoomLevel > 3 && 
        <text
          x={desk.x+desk.width/2} 
          y={desk.y+desk.height/2}
          fontSize={5}
          textAnchor="middle"
          onClick={event =>
            alert(desk.id)
          } 
        >
          {desk.id}
        </text>
      }
    </g>
  )
}