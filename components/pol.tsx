import React, { FC } from 'react'
import {Desk} from '../types/desk'

type Props = {
  desk: Desk
}

export const Pol: FC<Props> = ({desk}) => {
  return (
    <g
      id={desk.id} 
    >
      <rect 
        x={desk.x} 
        y={desk.y} 
        width={desk.width} 
        height={desk.height}
        stroke="black"
        strokeWidth="1"
        fill="#fff" 
      />
      <text
        x={desk.x+desk.width/2} 
        y={desk.y+desk.height/2}
        fontSize={5}
        textAnchor="middle" 
      >
        {desk.id}
      </text>
    </g>
  )
}