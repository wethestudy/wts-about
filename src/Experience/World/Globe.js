import * as THREE from 'three'
import threeGlobe from "three-globe";
import Experience from '../Experience.js'

export default class Globe {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.time = this.experience.time
        this.camera = this.experience.camera
        this.sizes = this.experience.sizes
        this.setGlobe()
        this.parameters()
        window.addEventListener('scroll', () => {
            this.camera.positionCamera(new THREE.Vector3(0, -window.scrollY / this.sizes.height * this.objectDistance, 0))
        })
    }

    parameters() {
        this.objectDistance = 300
    }

    setGlobe() {
        fetch(
            'https://cdn.jsdelivr.net/gh/xtiandirige/wts-about/dist/ne_110m_admin_0_countries.json'
            // './ne_110m_admin_0_countries.json'
        ).then(res => res.json()).then(countries => {
            this.globe = new threeGlobe()
                .globeImageUrl('https://cdn.jsdelivr.net/gh/xtiandirige/wts-about/dist/transparent_photo.png')
                .polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ'))
                .polygonCapColor(() => 'rgba(255, 255, 255, 0.2)')
                .polygonSideColor(() => 'rgba(255, 255, 255, 0.1)')
                .polygonStrokeColor(() => '#111')
                .showAtmosphere(false)
            this.globe.position.y = -300
            this.globe.scale.set(3, 3, 3)
            this.scene.add(this.globe)
        })
    }

    update() {
        if (this.globe) this.globe.rotateY(-this.time.delta * 0.00001)
    }
}