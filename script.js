// // import './style.css'
// // import * as THREE from 'three'
// // import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// // import * as dat from 'dat.gui'
// // // import {loader} from "webpack";
// const loader=new THREE.TextureLoader()
// const texture=loader.load('./images/jude-infantini-TfBJbT9MrFc-unsplash.jpg')
// const hight=loader.load('./images/texture2.png')
// const alpha=loader.load('./images/alpha.png')
// // Debug
// const gui = new dat.GUI()
//
// // Canvas
// const canvases = document.querySelectorAll('section.sec5 canvas.webgl')
//
//
//
// // Scene
// const scene = new THREE.Scene()
//
// // Objects
// const geometry=new THREE.PlaneBufferGeometry(3,3,64,64)
//
// const material=new THREE.MeshStandardMaterial({
//     color:"gray",
//     map:texture,
//     displacementMap:hight,
//     displacementScale:.6,
//     alphaMap:alpha,
//     transparent:true,
//     depthTest:false,
// })
// const plane=new THREE.Mesh(geometry,material)
// scene.add(plane)
// plane.rotation.x=181
// gui.add(plane.rotation,'x').min(0).max(600)
// // Mesh
//
//
// // Lights
//
// const pointLight = new THREE.PointLight('#24c8e6', 3)
// pointLight.position.x = 1
// pointLight.position.y = 7.4
// pointLight.position.z = 2.7
// scene.add(pointLight)
//
// /**
//  * Sizes
//  */
// const sizes = {
//     width: window.innerWidth,
//     height: window.innerHeight
// }
//
// window.addEventListener('resize', () =>
// {
//     // Update sizes
//     sizes.width = window.innerWidth
//     sizes.height = window.innerHeight
//
//     // Update camera
//     camera.aspect = sizes.width / sizes.height
//     camera.updateProjectionMatrix()
//
//     // Update renderer
//     renderer.setSize(sizes.width, sizes.height)
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// })
//
// /**
//  * Camera
//  */
// // Base camera
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
// camera.position.x = 0
// camera.position.y = 0
// camera.position.z = 3
// scene.add(camera)
//
// // Controls
// // const controls = new OrbitControls(camera, canvas)
// // controls.enableDamping = true
//
// /**
//  * Renderer
//  */
// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas,
//     alpha:true,
// })
// renderer.setSize(sizes.width, sizes.height)
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
//
// /**
//  * Animate
//  */
//
// document.addEventListener('mousemove',animateTerrain)
// let mouseY=0;
// let mouseX=0;
// function animateTerrain(e){
//     mouseY=e.clientY
//
// }
//
// const clock = new THREE.Clock()
//
// const tick = () =>
// {
//
//     const elapsedTime = clock.getElapsedTime()
//
//     // Update objects
//     plane.rotation.z=.5*elapsedTime
//
//     // Update Orbital Controls
//     // controls.update()
//     plane.material.displacementScale= .55+ mouseY*0.0003
//     // Render
//     renderer.render(scene, camera)
//
//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick)
// }
//
// tick()