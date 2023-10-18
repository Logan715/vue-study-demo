<template>
  <div id="threeGltf2"></div>
</template>
<script>
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';

export default {
  data() {
    return {
      camera: {},
      scene: {},
      renderer: {},
    }
  },
  mounted () {
			this.init();
			this.render();
  },
  methods: {
    init() {
      const container = document.getElementById('threeGltf2')
			const that = this;
				this.camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 1, 500 );
				this.camera.position.set( 0, 100, 320 );

				this.scene = new THREE.Scene();


				new RGBELoader()
					.setPath( 'equirectangular/' )
					.load( 'royal_esplanade_1k.hdr', function ( texture ) {

						texture.mapping = THREE.EquirectangularReflectionMapping;

						that.scene.background = texture;
						that.scene.environment = texture;

						that.render();

						// model

						const loader = new GLTFLoader()
						loader.load( 'model.gltf', function ( gltf ) {

							that.scene.add( gltf.scene );

							that.render();

						} );

					} );

				this.renderer = new THREE.WebGLRenderer( { antialias: true } );
				this.renderer.setPixelRatio( window.devicePixelRatio );
				this.renderer.setSize( window.innerWidth, window.innerHeight );
				this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
				this.renderer.toneMappingExposure = 1;
				container.appendChild( this.renderer.domElement );

				const controls = new OrbitControls( this.camera, this.renderer.domElement );
				controls.addEventListener( 'change', this.render ); // use if there is no animation loop
				controls.minDistance = 2;
				controls.maxDistance = 1000;
				controls.target.set( 0, 0, - 0.2 );
				controls.update();

				window.addEventListener( 'resize', this.onWindowResize );

    },
    onWindowResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize( window.innerWidth, window.innerHeight );
      this.render();
    },
    render() {
      if(this.renderer?.render) {
        this.renderer.render( this.scene, this.camera );

      }
    }
  }
}
</script>