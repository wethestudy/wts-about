import Experience from '../Experience.js'
import Environment from './Environment.js'
import Floor from './Floor.js'
import Fox from './Fox.js'
import Globe from './Globe.js'

export default class World {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.sizes = this.experience.sizes
        this.camera = this.experience.camera
        // this.resources = this.experience.resources

        this.globe = new Globe()
        this.environment = new Environment()
        // Wait for resources
        // this.resources.on('ready', () => {
        //     // Setup
        //     // this.floor = new Floor()
        //     this.globe = new Globe()
        //     // this.fox = new Fox()
        //     this.environment = new Environment()
        // })

    }


    update() {

        if (this.globe) this.globe.update()
        // if (this.fox)
        //     this.fox.update()
    }
}