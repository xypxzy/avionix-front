'use client'

import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import { Color, Mesh, MeshBasicMaterial } from 'three'

function Earth() {
	const earth = useGLTF(`/earth_hologram/scene.gltf`)
	const meshRef = useRef<Mesh | null>(null)

	// Set scale for model
	const scale = 3.8

	// Generate Primary color
	const hexColor = 0x365486
	// Convert to RGB
	const redColor = ((hexColor >> 16) & 255) / 255
	const greenColor = ((hexColor >> 8) & 255) / 255
	const blueColor = (hexColor & 255) / 255

	const color = new Color(redColor, greenColor, blueColor)

	// Set primary color to model
	const newColor = new Color(color)

	earth.scene.traverse(child => {
		if ((child as Mesh).isMesh) {
			const mesh = child as Mesh

			const newMaterial = new MeshBasicMaterial({
				color: newColor,
			})
			mesh.material = newMaterial
		}
	})

	useFrame(() => meshRef.current && (meshRef.current.rotation.y += 0.01))

	return (
		<mesh ref={meshRef} scale={[scale, scale, scale]}>
			<hemisphereLight intensity={0.15} groundColor='black' />
			<pointLight intensity={1} />
			<primitive object={earth.scene} />
		</mesh>
	)
}

const ComputerCanvas = () => {
	return (
		<Canvas
			className='hidden drop-shadow-xl lg:block'
			style={{
				height: '340px',
				width: '380px',
				position: 'absolute',
				top: 0,
				right: 0,
			}}
			frameloop='always'
			shadows
			camera={{ position: [1, 3, 5], fov: 95 }}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={<>ldsadasd</>}>
				<OrbitControls
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Earth />
			</Suspense>

			<Preload all />
		</Canvas>
	)
}

export default ComputerCanvas
