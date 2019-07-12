import React, { useRef } from 'react'
import { useThree, useRender, extend } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extend({ OrbitControls })

const Controls = props => {
  const { camera, scene } = useThree()
  const controls = useRef()
  
	
	useRender(({ camera }) => {
		controls.current && controls.current.update()
    camera.updateMatrixWorld()

    camera.lookAt(scene.position)
	})
  return <orbitControls ref={controls} args={[camera]} {...props} />
}

export default Controls