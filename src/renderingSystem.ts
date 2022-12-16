import * as THREE from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

class RenderingSystem {
  // canvasを生成し変数に格納
  canvas = document.createElement('canvas')
  renderer = new THREE.WebGLRenderer({
    // 描画の指定
    canvas: this.canvas,
    // くっきりと写す
    antialias: true,
    // 透過の有無
    alpha: true,
  })
  // カメラの視野角
  fov = 25

  // カメラの設定
  camera = new THREE.PerspectiveCamera(this.fov)
  controls = new OrbitControls(this.camera, this.canvas)

  scene = new THREE.Scene()

  constructor() {
    const width = window.innerWidth
    const height = window.innerHeight
    this.renderer.setSize(width, height)
    this.renderer.setClearColor(0x333333)
    // 物理解像度とCSS解像度の比
    this.renderer.setPixelRatio(devicePixelRatio)

    // アスペクト比
    this.camera.aspect = width / height
    // 斜め上から固定
    this.camera.position.set(20, 20, 20)
    this.camera.lookAt(0, 0, 0)
    this.camera.updateProjectionMatrix()

    const grid = new THREE.GridHelper(100, 100)
    this.scene.add(grid)

    const boxGeo = new THREE.BoxGeometry
    const boxMat = new THREE.MeshBasicMaterial({
      color: 0x0000ff,
      transparent: true,
      opacity: .3,
    })
    const box = new THREE.Mesh(boxGeo, boxMat)
    this.scene.add(box)

    const directionalLight = new THREE.DirectionalLight(0xffffff)
    directionalLight.position.set(0, 0, 0)
    directionalLight.lookAt(0, 0, 0)
    this.scene.add(directionalLight)

    // canvasをHTMLのbodyに追加
    document.body.append(this.canvas)
  }

  // 描画とコントロールの実行関数
  exec() {
    this.controls.update()
    this.renderer.render(this.scene, this.camera)
  }
}

const renderingSystem = new RenderingSystem
export default renderingSystem