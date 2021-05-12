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
import { SettingsEthernet } from '@material-ui/icons'

const useStyles = makeStyles((theme: Theme) => ({
  root: {

  },
  zoom: {

  }
}))

export function Map () {

  function handleResize () {
    // Set window width/height to state
    dispatch(mapSlice.actions.handleReSize())
  }

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize

      // Add event listener
      window.addEventListener('resize', handleResize)

      // Call handler right away so state gets updated with initial window size
      handleResize()

      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize)
    }
  }, []) // Empty array ensures that effect is only run on mount

  const Viewer = useRef(null)
  const [tool, setTool] = useState(TOOL_AUTO)
  const state = useMapState()
  const desks = useDesksState()
  const classes = useStyles()
  const dispatch = useDispatch()

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
        height={state.height}
        width={state.width}
        tool={tool} onChangeTool={setTool}
        value={state.value} onChangeValue={setValue}
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
          height={state.imageHeight}
          width={state.imageWidth}
          id="svg2">
          <defs
            id="defs5" />
            <g>
              <MapImage
                height={state.imageHeight}
                width={state.imageWidth}
              />
            </g>
            <g>
            {desks.map(d => (
              <Pol key={d.id} desk={d} zoomLevel={state.value.a} scale={state.scale}/>
            ))}
            </g>
        </svg>
      </ReactSVGPanZoom>
    </div>
  )
}
