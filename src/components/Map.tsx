import React, { useRef, useState, useEffect } from 'react'
import { Desk } from '../types/desk'
import { Pol } from './Pol'
import { MapImage } from './MapImage'
import { INITIAL_VALUE, ReactSVGPanZoom, TOOL_AUTO, POSITION_RIGHT } from 'react-svg-pan-zoom'
import { makeStyles, Theme } from '@material-ui/core/styles'

type Props = {
  desks: Desk[]
  height?: number,
  width?: number,
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    
  },
  zoom: {

  }
}))

export function Map ({ desks, height, width }: Props) {
  const Viewer = useRef(null)
  const [tool, setTool] = useState(TOOL_AUTO)
  const [value, setValue] = useState(INITIAL_VALUE)
  const classes = useStyles()

  // 横長時 1000-750 (4:3)
  // 縦長時 500-750 (2:3)

  const resultHeight = height || 750
  const resultWidth = Math.min(1000, width || 500)

  if (resultHeight > resultWidth) {
    // 縦長
    var imageHeight = resultHeight
    var scale = imageHeight / 750
    var imageWidth = 1000 * scale
  }　else {
    // 横長
    var imageWidth = resultWidth
    var scale = resultWidth / 1000
    var imageHeight = 750 * scale
  }

  useEffect(() => {
    Viewer.current.fitToViewer()
  }, [])

  return (
    <div className={classes.root}>
      <ReactSVGPanZoom
        ref={Viewer}
        height={resultHeight}
        width={resultWidth}
        tool={tool} onChangeTool={setTool}
        value={value} onChangeValue={setValue}
        onZoom={e => {}}
        onPan={e => {}}
        onClick={event => {}}
        toolbarProps={{ position: 'none' }}
        miniatureProps={{ width: 100, height: 75 }}
        scaleFactorMin={0.9}
        scaleFactorMax={5}
        SVGBackground="#616264"
        className={classes.zoom}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.0"
          height={imageHeight}
          width={imageWidth}
          id="svg2">
          <defs
            id="defs5" />
            <g>
              <MapImage
                height={imageHeight}
                width={imageWidth}
              />
            </g>
            <g>
            {desks.map(d => (
              <Pol key={d.id} desk={d} zoomLevel={value.a} scale={scale}/>
            ))}
            </g>
        </svg>
      </ReactSVGPanZoom>
    </div>
  )
}
