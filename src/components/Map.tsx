import React, { useRef, useState, useEffect } from 'react'
import { Desk } from '../ducks/desks/slice'
import { Pol } from './Pol'
import { MapImage } from './MapImage'
import { ReactSVGPanZoom, TOOL_AUTO, POSITION_NONE, setPointOnViewerCenter } from 'react-svg-pan-zoom'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { useDispatch } from 'react-redux'
import { useMapState } from '../ducks/map/selectors'
import { useDesksState } from '../ducks/desks/selectors'
import mapSlice from '../ducks/map/slice'

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

export function Map ({ height, width }: Props) {
  const Viewer = useRef(null)
  const [tool, setTool] = useState(TOOL_AUTO)
  const value = useMapState().map.value
  const desks = useDesksState().desks.desks
  const classes = useStyles()
  const dispatch = useDispatch()

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

  const setValue = (value) => {
    dispatch(mapSlice.actions.setValue(value))
  }

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
        toolbarProps={{ position: POSITION_NONE }}
        miniatureProps={{ position: POSITION_NONE }}
        scaleFactorMin={0.9}
        scaleFactorMax={5}
        SVGBackground="#616264"
        className={classes.zoom}
        detectAutoPan={false}
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
