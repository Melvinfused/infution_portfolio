import React from 'react'
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import * as reactSpring from '@react-spring/three'

function MeshBG() {
  return (
    <ShaderGradientCanvas
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none',

      }}
    >
<ShaderGradient
  // Animation & display
  animate="on"
  type="plane"
  shader="defaults"
  wireframe={false}
  zoomOut={false}
  enableTransition={true}
  toggleAxis={false}
  hoverState="none"

  // Visuals
  bgColor1="#000003"
  bgColor2="#000000"
  color1="#000000"
  color2="#6bdbd7"
  color3="#3d6e8b"
  brightness={1.3}
  reflection={0.1}
  grain="on"
  lightType="3d"
  envPreset="city"
  pixelDensity={1.8}

  // Camera
  cAzimuthAngle={170}
  cDistance={4.9}
  cPolarAngle={110}
  cameraZoom={1}
  fov={40}

  // Object transform
  positionX={0.5}
  positionY={0.8}
  positionZ={1.4}
  rotationX={30}
  rotationY={-50}
  rotationZ={30}

  // Shader behaviour
  uAmplitude={0}
  uDensity={1}
  uFrequency={5.5}
  uSpeed={0.3}
  uStrength={3}
  uTime={0}
/>

    </ShaderGradientCanvas>
  )
}
export default MeshBG