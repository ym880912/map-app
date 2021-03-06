import React, { FC } from 'react'
import { Desk } from '../ducks/desks/slice'

type Props = {
  desk: Desk
  zoomLevel: number
  scale: number
}

export const Pol: FC<Props> = ({ desk, zoomLevel, scale }) => {
  function onClickorTouch (e) {
    alert(desk.id)
  }

  return (
    <g>
      {zoomLevel >= 1 &&
        <rect
          x={desk.x * scale}
          y={desk.y * scale}
          height={desk.height * scale}
          width={desk.width * scale}
          stroke="black"
          strokeWidth={1 * scale}
          fill="#fff"
          onClick={onClickorTouch}
          onTouchStart={onClickorTouch}
        />
      }
      {zoomLevel >= 1.5 &&
        <text
          x={(desk.x + desk.width / 2) * scale}
          y={(desk.y + desk.height / 2) * scale}
          fontSize={3}
          textAnchor="middle"
          onClick={onClickorTouch}
          onTouchStart={onClickorTouch}
        >
          {desk.id}
        </text>
      }
    </g>
  )
}
