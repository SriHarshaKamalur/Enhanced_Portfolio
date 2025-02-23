import { useGLTF } from '@react-three/drei'
import React from 'react'
import skyScene from '../assets/3d/sky.glb'


const Sky = () => {
    const sky = useGLTF(skyScene);
  return (
    <mesh>
        <primitive object={skyScene}/>
    </mesh>
  )
}

export default Sky
