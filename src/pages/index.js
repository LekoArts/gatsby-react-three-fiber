import React from "react"
import { Canvas } from "react-three-fiber"
import Model from "../components/model"
import Controls from "../components/controls"
import GLTF from "../components/gatsby.gltf"
import "../style.css"

export default () => (
  <main>
    <Canvas camera={{ far: 10000 }}>
      <ambientLight intensity={0.7} />
      <Model url={GLTF} />
      <Controls />
    </Canvas>
  </main>
)
