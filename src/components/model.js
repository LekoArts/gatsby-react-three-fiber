import React from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

function Model ({ url }) {
  const [gltf, set] = React.useState()
  
  React.useMemo(() => new GLTFLoader().load(url, set), [url])

  return gltf ? <primitive object={gltf.scene} position={[0, 0, 0]} /> : null
}

export default Model