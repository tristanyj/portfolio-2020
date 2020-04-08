<template>
	<div ref="canvasContainer" class="canvas-container"></div>
</template>

<style lang="stylus" scoped>
	.canvas-container {
		position absolute
		top 50%
		left 50%
		width 100%
		height 100%
		transform scale(0.805, 0.7) translate(-50%, -50.05%)
		transform-origin 0 0
		transition transform 0.6s cubic-bezier(.5, 0, 0, 1)
	}
</style>

<script>
	import * as THREE from 'three'
	import glslify from 'glslify'

	export default {
		name: 'canvas-container',
		props: ['hover'],
		computed: {
			to() {
				return this.hover ? 1 : 0
			},
			width() {
				return this.$refs.canvasContainer.getBoundingClientRect().width
			},
			height() {
				return this.$refs.canvasContainer.getBoundingClientRect().height
			}
		},
		methods: {
			resize() {
				let w = this.width
				let h = this.height + 100

				this.renderer.setSize(w, h)
				this.camera.aspect = w / h

				this.material.uniforms.uvRate1.value.y = h / w

				let dist = this.camera.position.z - this.plane.position.z
				let height = 1

				this.camera.fov = 2 * (180 / Math.PI) * Math.atan(height / (2 * dist))
				this.plane.scale.x = w / h

				this.camera.updateProjectionMatrix()
			},
			initScene() {
				const w = this.width
				const h = this.height + 100

				this.scene = new THREE.Scene()
				this.renderer = new THREE.WebGLRenderer()

				this.renderer.setPixelRatio(window.devicePixelRatio)
				this.renderer.setSize(w, h)

				this.container = this.$refs.canvasContainer
				this.container.appendChild(this.renderer.domElement)

				this.camera = new THREE.PerspectiveCamera(70, w / h, 0.001, 100)
				this.camera.position.set(0, 0, 1);

				this.material = new THREE.ShaderMaterial({
					side: THREE.DoubleSide,
					uniforms: {
						time: {
							type: 'f',
							value: 0
						},
						pixels: {
							type: 'v2',
							value: new THREE.Vector2(w, h)
						},
						accel: {
							type: 'v2',
							value: new THREE.Vector2(0.5, 2)
						},
						progress: {
							type: 'f',
							value: 0
						},
						uvRate1: {
							value: new THREE.Vector2(1, 1)
						},
						texture1: {
							value: this.gallery[0]
						},
						texture2: {
							value: this.gallery[1]
						},
					},
					// wireframe: true,
					vertexShader: this.shader.vertex,
					fragmentShader: this.shader.fragment
				})

				this.plane = new THREE.Mesh(new THREE.PlaneGeometry(1, 1, 1, 1), this.material)
				this.scene.add(this.plane)

				this.resize()
			},
			animate() {
				this.time = this.time + 0.1
				this.material.uniforms.time.value = this.time

				requestAnimationFrame(this.animate)
				this.render()
			},
			render() {
				this.renderer.render(this.scene, this.camera)
			},
			raf() {
				this.position += (this.to - this.position) / 15

				this.material.uniforms.progress.value = this.position

				let curslide = (Math.floor(this.position) - 1 + this.gallery.length) % this.gallery.length
				let nextslide = (((Math.floor(this.position) + 1) % this.gallery.length - 1) + this.gallery.length) % this.gallery.length

				this.material.uniforms.texture1.value = this.gallery[curslide]
				this.material.uniforms.texture2.value = this.gallery[nextslide]

				window.requestAnimationFrame(this.raf)
			}
		},
		mounted() {
			this.shader = {
				vertex: glslify(`
					uniform float time;
					varying vec2 vUv;
					varying vec2 vUv1;
					varying vec4 vPosition;
					uniform sampler2D texture1;
					uniform sampler2D texture2;
					uniform vec2 pixels;
					uniform vec2 uvRate1;

					void main() {
						vUv = uv;
						vec2 _uv = uv - 0.5;
						vUv1 = _uv;
						vUv1 *= uvRate1.xy;
						vUv1 += 0.5;

						gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
					}
				`),
				fragment: glslify(`
					uniform float time;
					uniform float progress;
					uniform sampler2D texture1;
					uniform sampler2D texture2;
					uniform vec2 pixels;
					uniform vec2 uvRate1;
					uniform vec2 accel;
					varying vec2 vUv;
					varying vec2 vUv1;
					varying vec4 vPosition;

					vec2 mirrored(vec2 v) {
						vec2 m = mod(v, 2.0);
						return mix(m, 2.0 - m, step(1.0, m));
					}

					float tri(float p) {
						return mix(p, 1.0 - p, step(0.5, p)) * 2.0;
					}

					void main() {
						vec2 uv = gl_FragCoord.xy / pixels.xy;

						float p = fract(progress);
						float delayValue = p * 7.0 - uv.y * 2. + uv.x - 2.0;
						delayValue = clamp(delayValue, 0.0, 1.0);

						vec2 translateValue = p + delayValue * accel;
						vec2 translateValue1 = vec2(-0.5, 1.0) * translateValue;
						vec2 translateValue2 = vec2(-0.5, 1.0) * (translateValue - 1.0 - accel);

						vec2 w = sin(sin(time) * vec2(0, 0.3) + vUv.yx * vec2(0, 4.0)) * vec2(0, 0.5);
						vec2 xy = w * (tri(p) * 0.5 + tri(delayValue) * 0.5);

						vec2 uv1 = vUv1 + translateValue1 + xy;
						vec2 uv2 = vUv1 + translateValue2 + xy;

						vec4 rgba1 = texture2D(texture1, mirrored(uv1));
						vec4 rgba2 = texture2D(texture2, mirrored(uv2));
						vec4 rgba = mix(rgba1, rgba2, delayValue);

						gl_FragColor = rgba;
					}
				`)
			}

			this.gallery = [
				THREE.ImageUtils.loadTexture('images/b2.jpg'),
				THREE.ImageUtils.loadTexture('images/b6.jpg')
			]

			this.camera, this.pos, this.controls, this.scene, this.renderer, this.geometry, this.geometry1, this.material, this.plane, this.tex1, this.tex2
			this.target = 0
			this.time = 0
			this.position = 0

			this.destination = {
				x: 0,
				y: 0
			}
			this.textures = []

			this.initScene()
			this.animate()

			this.raf()
		}
	}
</script>
