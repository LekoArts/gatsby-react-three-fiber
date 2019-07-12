import React from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

function Model ({ url }) {
  const [gltf, set] = React.useState()
  
  React.useMemo(() => new GLTFLoader().load(url, set), [url])

  return gltf ? <primitive object={gltf.scene} /> : null
}

export default Model