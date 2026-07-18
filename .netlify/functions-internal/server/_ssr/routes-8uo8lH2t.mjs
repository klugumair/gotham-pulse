import { o as __toESM } from "../_runtime.mjs";
import { a as IconDeviceGamepad2, c as IconBooks, i as IconMasksTheater, l as IconBolt, n as IconPuzzle, o as IconChevronDown, r as IconMovie, s as IconBrain, t as IconSearch, u as require_react } from "../_libs/react+tabler__icons-react.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { a as Transform, i as Camera, n as Texture, o as Renderer, r as Mesh, s as Program, t as Plane } from "../_libs/ogl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-8uo8lH2t.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BatSignal({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 200 100",
		xmlns: "http://www.w3.org/2000/svg",
		className,
		"aria-label": "Bat-signal",
		role: "img",
		fill: "currentColor",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M100 12c-6 10-14 16-24 18 6 4 10 10 12 18-8-4-16-6-24-4 4 6 6 12 6 20-6-6-14-10-22-10 6 8 10 16 10 26 8-4 16-6 26-6-4 6-6 12-6 20 8-6 16-10 24-10 2 6 6 12 12 18 6-6 10-12 12-18 8 0 16 4 24 10 0-8-2-14-6-20 10 0 18 2 26 6 0-10 4-18 10-26-8 0-16 4-22 10 0-8 2-14 6-20-8-2-16 0-24 4 2-8 6-14 12-18-10-2-18-8-24-18Z" })
	});
}
function BatMark({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 12",
		xmlns: "http://www.w3.org/2000/svg",
		className,
		"aria-hidden": "true",
		fill: "currentColor",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 1c-1 2-2.5 3-4.5 3.2C8 5 8.5 6 8.5 7.2 7 6.5 5.5 6.5 4 7c1 .5 1.5 1.5 1.5 3-1-.8-2.5-1.2-4-1.2 1 1.5 2 2.7 2 4.2 0 .3.3.5.6.3C5.6 12.8 8 11 12 11s6.4 1.8 7.9 2.3c.3.2.6 0 .6-.3 0-1.5 1-2.7 2-4.2-1.5 0-3 .4-4 1.2 0-1.5.5-2.5 1.5-3-1.5-.5-3-.5-4.5.2 0-1.2.5-2.2 1-3-2-.2-3.5-1.2-4.5-3.2Z" })
	});
}
function debounce(func, wait) {
	let timeout;
	return function(...args) {
		if (timeout) clearTimeout(timeout);
		timeout = setTimeout(() => func.apply(this, args), wait);
	};
}
function lerp(p1, p2, t) {
	return p1 + (p2 - p1) * t;
}
function autoBind(instance) {
	const proto = Object.getPrototypeOf(instance);
	Object.getOwnPropertyNames(proto).forEach((key) => {
		if (key !== "constructor" && typeof instance[key] === "function") instance[key] = instance[key].bind(instance);
	});
}
var DEFAULT_FONT = "bold 30px Figtree";
var DEFAULT_FONT_URL = "https://fonts.googleapis.com/css2?family=Figtree:wght@400;700&display=swap";
function deriveFontFamilyFromUrl(url) {
	return (url.split("/").pop() || "custom-font").split("?")[0].replace(/\.(woff2?|ttf|otf|eot)$/i, "").replace(/[^a-zA-Z0-9-_ ]/g, "").trim() || "CircularGalleryFont";
}
async function loadFontFromStylesheet(url) {
	const response = await fetch(url);
	if (!response.ok) throw new Error(`Failed to fetch font stylesheet (${response.status})`);
	const faceBlocks = (await response.text()).match(/@font-face\s*{[^}]*}/g) || [];
	let family = null;
	const fontFaces = [];
	for (const block of faceBlocks) {
		const familyMatch = block.match(/font-family:\s*['"]?([^;'"]+)['"]?/);
		const urlMatch = block.match(/url\(\s*['"]?([^'")]+)['"]?\s*\)/);
		if (!familyMatch || !urlMatch) continue;
		family = familyMatch[1].trim();
		const descriptors = {};
		const weightMatch = block.match(/font-weight:\s*([^;]+);/);
		const styleMatch = block.match(/font-style:\s*([^;]+);/);
		const rangeMatch = block.match(/unicode-range:\s*([^;]+);/);
		if (weightMatch) descriptors.weight = weightMatch[1].trim();
		if (styleMatch) descriptors.style = styleMatch[1].trim();
		if (rangeMatch) descriptors.unicodeRange = rangeMatch[1].trim();
		fontFaces.push(new FontFace(family, `url(${urlMatch[1]})`, descriptors));
	}
	if (!family) throw new Error("No @font-face rule found in the stylesheet");
	await Promise.allSettled(fontFaces.map(async (face) => {
		await face.load();
		document.fonts.add(face);
	}));
	return family;
}
async function loadFontFromFile(url) {
	const family = deriveFontFamilyFromUrl(url);
	const fontFace = new FontFace(family, `url(${url})`);
	await fontFace.load();
	document.fonts.add(fontFace);
	return family;
}
async function loadCustomFont(fontUrl) {
	return fontUrl.includes("fonts.googleapis.com") || /\.css(\?.*)?$/i.test(fontUrl) ? loadFontFromStylesheet(fontUrl) : loadFontFromFile(fontUrl);
}
async function resolveFont(font, fontUrl) {
	const effectiveUrl = fontUrl || (font === DEFAULT_FONT ? DEFAULT_FONT_URL : null);
	if (!effectiveUrl) {
		if (document.fonts && document.fonts.load) try {
			await document.fonts.load(font);
			await document.fonts.ready;
		} catch {}
		return font;
	}
	try {
		const family = await loadCustomFont(effectiveUrl);
		const sizeMatch = font.match(/^\s*(.*?\d+px)/);
		const resolved = `${sizeMatch ? sizeMatch[1].trim() : "bold 30px"} "${family}"`;
		if (document.fonts && document.fonts.load) try {
			await document.fonts.load(resolved);
		} catch {}
		return resolved;
	} catch (error) {
		console.error("CircularGallery: unable to load font from", fontUrl, error);
		return font;
	}
}
function getFontSize(font) {
	const match = font.match(/(\d+)px/);
	return match ? parseInt(match[1], 10) : 30;
}
function createTextTexture(gl, text, font = "bold 30px monospace", color = "black") {
	const canvas = document.createElement("canvas");
	const context = canvas.getContext("2d");
	context.font = font;
	const metrics = context.measureText(text);
	const textWidth = Math.ceil(metrics.width);
	const textHeight = Math.ceil(getFontSize(font) * 1.2);
	canvas.width = textWidth + 20;
	canvas.height = textHeight + 20;
	context.font = font;
	context.fillStyle = color;
	context.textBaseline = "middle";
	context.textAlign = "center";
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.fillText(text, canvas.width / 2, canvas.height / 2);
	const texture = new Texture(gl, { generateMipmaps: false });
	texture.image = canvas;
	return {
		texture,
		width: canvas.width,
		height: canvas.height
	};
}
var Title = class {
	gl;
	plane;
	renderer;
	text;
	textColor;
	font;
	mesh;
	constructor({ gl, plane, renderer, text, textColor = "#545050", font = "30px sans-serif" }) {
		autoBind(this);
		this.gl = gl;
		this.plane = plane;
		this.renderer = renderer;
		this.text = text;
		this.textColor = textColor;
		this.font = font;
		this.createMesh();
	}
	createMesh() {
		const { texture, width, height } = createTextTexture(this.gl, this.text, this.font, this.textColor);
		const geometry = new Plane(this.gl);
		const program = new Program(this.gl, {
			vertex: `
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
			fragment: `
        precision highp float;
        uniform sampler2D tMap;
        varying vec2 vUv;
        void main() {
          vec4 color = texture2D(tMap, vUv);
          if (color.a < 0.1) discard;
          gl_FragColor = color;
        }
      `,
			uniforms: { tMap: { value: texture } },
			transparent: true
		});
		this.mesh = new Mesh(this.gl, {
			geometry,
			program
		});
		const aspect = width / height;
		const textHeight = this.plane.scale.y * .15;
		const textWidth = textHeight * aspect;
		this.mesh.scale.set(textWidth, textHeight, 1);
		this.mesh.position.y = -this.plane.scale.y * .5 - textHeight * .5 - .05;
		this.mesh.setParent(this.plane);
	}
};
var Media = class {
	extra = 0;
	geometry;
	gl;
	image;
	index;
	length;
	renderer;
	scene;
	screen;
	text;
	viewport;
	bend;
	textColor;
	borderRadius;
	font;
	plane;
	program;
	title;
	speed = 0;
	isBefore = false;
	isAfter = false;
	width = 0;
	widthTotal = 0;
	x = 0;
	scale = 0;
	padding = 0;
	constructor({ geometry, gl, image, index, length, renderer, scene, screen, text, viewport, bend, textColor, borderRadius = 0, font }) {
		this.geometry = geometry;
		this.gl = gl;
		this.image = image;
		this.index = index;
		this.length = length;
		this.renderer = renderer;
		this.scene = scene;
		this.screen = screen;
		this.text = text;
		this.viewport = viewport;
		this.bend = bend;
		this.textColor = textColor;
		this.borderRadius = borderRadius;
		this.font = font;
		this.createShader();
		this.createMesh();
		this.createTitle();
		this.onResize();
	}
	createShader() {
		const texture = new Texture(this.gl, { generateMipmaps: true });
		this.program = new Program(this.gl, {
			depthTest: false,
			depthWrite: false,
			vertex: `
        precision highp float;
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        uniform float uTime;
        uniform float uSpeed;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec3 p = position;
          p.z = (sin(p.x * 4.0 + uTime) * 1.5 + cos(p.y * 2.0 + uTime) * 1.5) * (0.1 + uSpeed * 0.5);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,
			fragment: `
        precision highp float;
        uniform vec2 uImageSizes;
        uniform vec2 uPlaneSizes;
        uniform sampler2D tMap;
        uniform float uBorderRadius;
        varying vec2 vUv;
        float roundedBoxSDF(vec2 p, vec2 b, float r) {
          vec2 d = abs(p) - b;
          return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r;
        }
        void main() {
          vec2 ratio = vec2(
            min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
            min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
          );
          vec2 uv = vec2(
            vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
            vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
          );
          vec4 color = texture2D(tMap, uv);
          float d = roundedBoxSDF(vUv - 0.5, vec2(0.5 - uBorderRadius), uBorderRadius);
          float edgeSmooth = 0.002;
          float alpha = 1.0 - smoothstep(-edgeSmooth, edgeSmooth, d);
          gl_FragColor = vec4(color.rgb, alpha);
        }
      `,
			uniforms: {
				tMap: { value: texture },
				uPlaneSizes: { value: [0, 0] },
				uImageSizes: { value: [0, 0] },
				uSpeed: { value: 0 },
				uTime: { value: 100 * Math.random() },
				uBorderRadius: { value: this.borderRadius }
			},
			transparent: true
		});
		const img = new Image();
		img.crossOrigin = "anonymous";
		img.src = this.image;
		img.onload = () => {
			texture.image = img;
			this.program.uniforms.uImageSizes.value = [img.naturalWidth, img.naturalHeight];
		};
	}
	createMesh() {
		this.plane = new Mesh(this.gl, {
			geometry: this.geometry,
			program: this.program
		});
		this.plane.setParent(this.scene);
	}
	createTitle() {
		this.title = new Title({
			gl: this.gl,
			plane: this.plane,
			renderer: this.renderer,
			text: this.text,
			textColor: this.textColor,
			font: this.font
		});
	}
	update(scroll, direction) {
		this.plane.position.x = this.x - scroll.current - this.extra;
		const x = this.plane.position.x;
		const H = this.viewport.width / 2;
		if (this.bend === 0) {
			this.plane.position.y = 0;
			this.plane.rotation.z = 0;
		} else {
			const B_abs = Math.abs(this.bend);
			const R = (H * H + B_abs * B_abs) / (2 * B_abs);
			const effectiveX = Math.min(Math.abs(x), H);
			const arc = R - Math.sqrt(R * R - effectiveX * effectiveX);
			if (this.bend > 0) {
				this.plane.position.y = -arc;
				this.plane.rotation.z = -Math.sign(x) * Math.asin(effectiveX / R);
			} else {
				this.plane.position.y = arc;
				this.plane.rotation.z = Math.sign(x) * Math.asin(effectiveX / R);
			}
		}
		this.speed = scroll.current - scroll.last;
		this.program.uniforms.uTime.value += .04;
		this.program.uniforms.uSpeed.value = this.speed;
		const planeOffset = this.plane.scale.x / 2;
		const viewportOffset = this.viewport.width / 2;
		this.isBefore = this.plane.position.x + planeOffset < -viewportOffset;
		this.isAfter = this.plane.position.x - planeOffset > viewportOffset;
		if (direction === "right" && this.isBefore) {
			this.extra -= this.widthTotal;
			this.isBefore = this.isAfter = false;
		}
		if (direction === "left" && this.isAfter) {
			this.extra += this.widthTotal;
			this.isBefore = this.isAfter = false;
		}
	}
	onResize({ screen, viewport } = {}) {
		if (screen) this.screen = screen;
		if (viewport) {
			this.viewport = viewport;
			if (this.plane.program.uniforms.uViewportSizes) this.plane.program.uniforms.uViewportSizes.value = [this.viewport.width, this.viewport.height];
		}
		this.scale = this.screen.height / 1500;
		this.plane.scale.y = this.viewport.height * (900 * this.scale) / this.screen.height;
		this.plane.scale.x = this.viewport.width * (700 * this.scale) / this.screen.width;
		this.plane.program.uniforms.uPlaneSizes.value = [this.plane.scale.x, this.plane.scale.y];
		this.padding = 2;
		this.width = this.plane.scale.x + this.padding;
		this.widthTotal = this.width * this.length;
		this.x = this.width * this.index;
	}
};
var App = class {
	container;
	scrollSpeed;
	scroll;
	onCheckDebounce;
	renderer;
	gl;
	camera;
	scene;
	planeGeometry;
	mediasImages = [];
	medias = [];
	screen;
	viewport;
	raf = 0;
	isDown = false;
	start = 0;
	boundOnResize;
	boundOnWheel;
	boundOnTouchDown;
	boundOnTouchMove;
	boundOnTouchUp;
	boundOnKeyDown;
	constructor(container, { items, bend, textColor = "#ffffff", borderRadius = 0, font = "bold 30px Figtree", scrollSpeed = 2, scrollEase = .05 } = {}) {
		document.documentElement.classList.remove("no-js");
		this.container = container;
		this.scrollSpeed = scrollSpeed;
		this.scroll = {
			ease: scrollEase,
			current: 0,
			target: 0,
			last: 0
		};
		this.onCheckDebounce = debounce(this.onCheck, 200);
		this.createRenderer();
		this.createCamera();
		this.createScene();
		this.onResize();
		this.createGeometry();
		this.createMedias(items, bend, textColor, borderRadius, font);
		this.update();
		this.addEventListeners();
	}
	createRenderer() {
		this.renderer = new Renderer({
			alpha: true,
			antialias: true,
			dpr: Math.min(window.devicePixelRatio || 1, 2)
		});
		this.gl = this.renderer.gl;
		this.gl.clearColor(0, 0, 0, 0);
		this.container.appendChild(this.gl.canvas);
	}
	createCamera() {
		this.camera = new Camera(this.gl);
		this.camera.fov = 45;
		this.camera.position.z = 20;
	}
	createScene() {
		this.scene = new Transform();
	}
	createGeometry() {
		this.planeGeometry = new Plane(this.gl, {
			heightSegments: 50,
			widthSegments: 100
		});
	}
	createMedias(items, bend = 1, textColor, borderRadius, font) {
		const galleryItems = items && items.length ? items : [
			{
				image: `https://picsum.photos/seed/1/800/600?grayscale`,
				text: "Bridge"
			},
			{
				image: `https://picsum.photos/seed/2/800/600?grayscale`,
				text: "Desk setup"
			},
			{
				image: `https://picsum.photos/seed/3/800/600?grayscale`,
				text: "Waterfall"
			},
			{
				image: `https://picsum.photos/seed/4/800/600?grayscale`,
				text: "Strawberries"
			},
			{
				image: `https://picsum.photos/seed/5/800/600?grayscale`,
				text: "Deep diving"
			},
			{
				image: `https://picsum.photos/seed/16/800/600?grayscale`,
				text: "Train track"
			},
			{
				image: `https://picsum.photos/seed/17/800/600?grayscale`,
				text: "Santorini"
			},
			{
				image: `https://picsum.photos/seed/8/800/600?grayscale`,
				text: "Blurry lights"
			},
			{
				image: `https://picsum.photos/seed/9/800/600?grayscale`,
				text: "New York"
			},
			{
				image: `https://picsum.photos/seed/10/800/600?grayscale`,
				text: "Good boy"
			},
			{
				image: `https://picsum.photos/seed/21/800/600?grayscale`,
				text: "Coastline"
			},
			{
				image: `https://picsum.photos/seed/12/800/600?grayscale`,
				text: "Palm trees"
			}
		];
		this.mediasImages = galleryItems.concat(galleryItems);
		this.medias = this.mediasImages.map((data, index) => {
			return new Media({
				geometry: this.planeGeometry,
				gl: this.gl,
				image: data.image,
				index,
				length: this.mediasImages.length,
				renderer: this.renderer,
				scene: this.scene,
				screen: this.screen,
				text: data.text,
				viewport: this.viewport,
				bend,
				textColor,
				borderRadius,
				font
			});
		});
	}
	onTouchDown(e) {
		this.isDown = true;
		this.scroll.position = this.scroll.current;
		this.start = e.touches ? e.touches[0].clientX : e.clientX;
	}
	onTouchMove(e) {
		if (!this.isDown) return;
		const x = e.touches ? e.touches[0].clientX : e.clientX;
		const distance = (this.start - x) * (this.scrollSpeed * .025);
		this.scroll.target = (this.scroll.position ?? 0) + distance;
	}
	onTouchUp() {
		this.isDown = false;
		this.onCheck();
	}
	onWheel(e) {
		const delta = e.deltaY || e.wheelDelta || e.detail;
		this.scroll.target += (delta > 0 ? this.scrollSpeed : -this.scrollSpeed) * .2;
		this.onCheckDebounce();
	}
	onKeyDown(e) {
		switch (e.key) {
			case "ArrowRight":
				e.preventDefault();
				this.scroll.target += this.scrollSpeed * 5;
				this.onCheckDebounce();
				break;
			case "ArrowLeft":
				e.preventDefault();
				this.scroll.target -= this.scrollSpeed * 5;
				this.onCheckDebounce();
				break;
			case "Home":
				e.preventDefault();
				this.scroll.target = 0;
				this.onCheckDebounce();
				break;
			default: break;
		}
	}
	onCheck() {
		if (!this.medias || !this.medias[0]) return;
		const width = this.medias[0].width;
		const item = width * Math.round(Math.abs(this.scroll.target) / width);
		this.scroll.target = this.scroll.target < 0 ? -item : item;
	}
	onResize() {
		this.screen = {
			width: this.container.clientWidth,
			height: this.container.clientHeight
		};
		this.renderer.setSize(this.screen.width, this.screen.height);
		this.camera.perspective({ aspect: this.screen.width / this.screen.height });
		const fov = this.camera.fov * Math.PI / 180;
		const height = 2 * Math.tan(fov / 2) * this.camera.position.z;
		const width = height * this.camera.aspect;
		this.viewport = {
			width,
			height
		};
		if (this.medias) this.medias.forEach((media) => media.onResize({
			screen: this.screen,
			viewport: this.viewport
		}));
	}
	update() {
		this.scroll.current = lerp(this.scroll.current, this.scroll.target, this.scroll.ease);
		const direction = this.scroll.current > this.scroll.last ? "right" : "left";
		if (this.medias) this.medias.forEach((media) => media.update(this.scroll, direction));
		this.renderer.render({
			scene: this.scene,
			camera: this.camera
		});
		this.scroll.last = this.scroll.current;
		this.raf = window.requestAnimationFrame(this.update.bind(this));
	}
	addEventListeners() {
		this.boundOnResize = this.onResize.bind(this);
		this.boundOnWheel = this.onWheel.bind(this);
		this.boundOnTouchDown = this.onTouchDown.bind(this);
		this.boundOnTouchMove = this.onTouchMove.bind(this);
		this.boundOnTouchUp = this.onTouchUp.bind(this);
		this.boundOnKeyDown = this.onKeyDown.bind(this);
		window.addEventListener("resize", this.boundOnResize);
		window.addEventListener("mousewheel", this.boundOnWheel);
		window.addEventListener("wheel", this.boundOnWheel);
		window.addEventListener("mousedown", this.boundOnTouchDown);
		window.addEventListener("mousemove", this.boundOnTouchMove);
		window.addEventListener("mouseup", this.boundOnTouchUp);
		window.addEventListener("touchstart", this.boundOnTouchDown);
		window.addEventListener("touchmove", this.boundOnTouchMove);
		window.addEventListener("touchend", this.boundOnTouchUp);
		this.container?.addEventListener("keydown", this.boundOnKeyDown);
	}
	destroy() {
		window.cancelAnimationFrame(this.raf);
		window.removeEventListener("resize", this.boundOnResize);
		window.removeEventListener("mousewheel", this.boundOnWheel);
		window.removeEventListener("wheel", this.boundOnWheel);
		window.removeEventListener("mousedown", this.boundOnTouchDown);
		window.removeEventListener("mousemove", this.boundOnTouchMove);
		window.removeEventListener("mouseup", this.boundOnTouchUp);
		window.removeEventListener("touchstart", this.boundOnTouchDown);
		window.removeEventListener("touchmove", this.boundOnTouchMove);
		window.removeEventListener("touchend", this.boundOnTouchUp);
		if (this.renderer && this.renderer.gl && this.renderer.gl.canvas.parentNode) this.renderer.gl.canvas.parentNode.removeChild(this.renderer.gl.canvas);
		if (this.container) this.container.removeEventListener("keydown", this.boundOnKeyDown);
	}
};
function CircularGallery({ items, bend = 3, textColor = "#ffffff", borderRadius = .05, font = "bold 30px Figtree", fontUrl, scrollSpeed = 2, scrollEase = .05 }) {
	const containerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!containerRef.current) return;
		let app;
		let isMounted = true;
		resolveFont(font, fontUrl).then((resolvedFont) => {
			if (!isMounted || !containerRef.current) return;
			app = new App(containerRef.current, {
				items,
				bend,
				textColor,
				borderRadius,
				font: resolvedFont,
				scrollSpeed,
				scrollEase
			});
		});
		return () => {
			isMounted = false;
			if (app) app.destroy();
		};
	}, [
		items,
		bend,
		textColor,
		borderRadius,
		font,
		fontUrl,
		scrollSpeed,
		scrollEase
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "circular-gallery",
		ref: containerRef,
		tabIndex: 0,
		role: "region",
		"aria-label": "Circular image gallery. Use left and right arrow keys to navigate."
	});
}
var MagicRings = (0, import_react.lazy)(() => import("./MagicRings-DlXDOSrG.mjs"));
var navLinks = [
	{
		label: "Library",
		href: "#library",
		active: true
	},
	{
		label: "Bat-cave",
		href: "#bat-cave"
	},
	{
		label: "Cinema",
		href: "#cinema"
	},
	{
		label: "Rogues",
		href: "#rogues"
	},
	{
		label: "Game zone",
		href: "#game-zone"
	},
	{
		label: "Profiler",
		href: "#profiler"
	}
];
var districts = [
	{
		name: "Gotham Library",
		desc: "Comics, arcs, and origin stories",
		Icon: IconBooks
	},
	{
		name: "Bat-cave",
		desc: "Puzzles, riddles, and tactical games",
		Icon: IconPuzzle
	},
	{
		name: "Cinema Gotham",
		desc: "Every film and series in order",
		Icon: IconMovie
	},
	{
		name: "Rogues Gallery",
		desc: "Characters, profiles, and relationships",
		Icon: IconMasksTheater
	},
	{
		name: "Game Zone",
		desc: "The complete Batman game catalogue",
		Icon: IconDeviceGamepad2
	},
	{
		name: "Arkham Profiler",
		desc: "AI-powered criminal intelligence",
		Icon: IconBrain,
		classified: true
	}
];
var galleryItems = [
	{
		image: "/images/homepage/download.jpg",
		text: "The Batman"
	},
	{
		image: "/images/homepage/download_(3).jpg",
		text: "Gotham nights"
	},
	{
		image: "/images/homepage/selina_kyle__catwoman_.jpg",
		text: "Selina Kyle"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "border-b border-[#2A2A2A] bg-[#0A0A0A]/85 backdrop-blur-xl" : "border-b border-transparent bg-transparent"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex items-center gap-2 text-[#C0392B]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BatMark, { className: "h-4 w-8" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg font-semibold tracking-widest",
						children: "GCC"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "hidden items-center gap-1 md:flex",
					children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: l.href,
						className: `relative rounded-sm px-3 py-2 font-mono text-xs uppercase tracking-[0.18em] transition-colors ${l.active ? "text-[#C0392B]" : "text-[#6B6B6B] hover:text-[#E8E8E8]"}`,
						children: [l.label, l.active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-x-3 -bottom-0.5 h-px bg-[#C0392B]" })]
					}) }, l.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "font-mono text-[10px] uppercase tracking-[0.25em] text-[#6B6B6B]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mr-2 inline-block h-1.5 w-1.5 animate-pulse-dot rounded-full bg-[#C0392B] align-middle" }), "Signal live"]
				})
			]
		})
	});
}
function Hero() {
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setMounted(true), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative h-screen w-full overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rain-overlay" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 flex h-full flex-col items-center justify-center px-6 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: "hidden",
					animate: "show",
					variants: {
						hidden: {},
						show: { transition: {
							staggerChildren: .15,
							delayChildren: .1
						} }
					},
					className: "flex flex-col items-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							variants: {
								hidden: {
									opacity: 0,
									y: 12
								},
								show: {
									opacity: 1,
									y: 0,
									transition: { duration: .6 }
								}
							},
							className: "font-mono text-[11px] uppercase tracking-[0.4em] text-[#C0392B] animate-flicker",
							children: "GCPD classified network"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
							variants: {
								hidden: {
									opacity: 0,
									y: 24
								},
								show: {
									opacity: 1,
									y: 0,
									transition: { duration: .8 }
								}
							},
							className: "mt-6 font-display text-6xl font-semibold tracking-tight text-[#E8E8E8] text-dim-glow md:text-8xl",
							children: "Gotham City Central"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							variants: {
								hidden: {
									opacity: 0,
									scaleX: 0
								},
								show: {
									opacity: 1,
									scaleX: 1,
									transition: { duration: .8 }
								}
							},
							className: "mt-6 h-px w-40 origin-center bg-[#8B1A1A] shadow-[0_0_20px_rgba(139,26,26,0.6)]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							variants: {
								hidden: {
									opacity: 0,
									y: 12
								},
								show: {
									opacity: 1,
									y: 0,
									transition: { duration: .6 }
								}
							},
							className: "mt-6 max-w-md font-sans text-base text-[#6B6B6B] md:text-lg",
							children: "Every district. Every rogue. Every case."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							variants: {
								hidden: {
									opacity: 0,
									scale: .85
								},
								show: {
									opacity: 1,
									scale: 1,
									transition: { duration: .9 }
								}
							},
							className: "mt-12 text-[#8B1A1A]",
							style: { filter: "drop-shadow(0 0 24px rgba(139, 26, 26, 0.55))" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BatSignal, { className: "h-16 w-32 md:h-20 md:w-40" })
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute left-6 top-24 font-mono text-[10px] uppercase tracking-[0.3em] text-[#6B6B6B]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[#C0392B]",
					children: "◤"
				}), " Sector 07 — Uptown"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute right-6 top-24 font-mono text-[10px] uppercase tracking-[0.3em] text-[#6B6B6B]",
				children: ["41.8° N · 87.6° W ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[#C0392B]",
					children: "◥"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-x-0 bottom-8 flex flex-col items-center gap-2 text-[#6B6B6B]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[10px] uppercase tracking-[0.3em]",
					children: "Descend"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconChevronDown, { className: "h-5 w-5 animate-bounce-soft text-[#C0392B]" })]
			})
		]
	});
}
function DistrictHub() {
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setMounted(true), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "library",
		className: "relative overflow-hidden border-t border-[#2A2A2A]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 z-0 opacity-70",
				children: mounted && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
					fallback: null,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagicRings, {
						color: "#8B1A1A",
						colorTwo: "#0A0A0A",
						ringCount: 9,
						speed: .35,
						attenuation: 7,
						baseRadius: .2,
						radiusStep: .07,
						opacity: .85,
						noiseAmount: .05,
						followMouse: true,
						mouseInfluence: .1,
						parallax: .02
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute right-0 top-0 z-[1] hidden h-full w-1/3 overflow-hidden md:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/homepage/download.jpg",
					alt: "Gotham at night",
					className: "h-full w-full object-cover opacity-40",
					style: {
						maskImage: "linear-gradient(to left, black, transparent)",
						WebkitMaskImage: "linear-gradient(to left, black, transparent)"
					}
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto max-w-7xl px-6 py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-100px"
					},
					transition: { duration: .6 },
					className: "mb-14 flex items-end justify-between gap-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-[0.4em] text-[#6B6B6B]",
						children: "Section 02 · Districts"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl font-semibold tracking-tight text-[#E8E8E8] md:text-5xl",
						children: "Choose your district"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden text-right font-mono text-[10px] uppercase tracking-[0.3em] text-[#6B6B6B] md:block",
						children: [
							"Six sectors online",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#C0392B]",
								children: "Uplink stable"
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.ul, {
					initial: "hidden",
					whileInView: "show",
					viewport: {
						once: true,
						margin: "-80px"
					},
					variants: {
						hidden: {},
						show: { transition: { staggerChildren: .08 } }
					},
					className: "grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3",
					children: districts.map(({ name, desc, Icon, classified }) => {
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
							variants: {
								hidden: {
									opacity: 0,
									y: 24
								},
								show: {
									opacity: 1,
									y: 0,
									transition: { duration: .5 }
								}
							},
							whileHover: { y: -4 },
							className: `group relative cursor-pointer border p-6 backdrop-blur-sm transition-colors duration-300 ${classified ? "border-[#2A2A2A] bg-[#111111]/80 hover:border-[#C0392B] hover:shadow-[0_0_28px_-6px_rgba(192,57,43,0.75)]" : "border-[#2A2A2A] bg-[#111111]/80 hover:border-[#8B1A1A] hover:shadow-[0_0_28px_-6px_rgba(139,26,26,0.6)]"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: `h-8 w-8 stroke-[1.5] ${classified ? "text-[#C0392B]" : "text-[#8B1A1A]"}` }), classified && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "border border-[#C0392B] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.25em] text-[#C0392B]",
										children: "Classified"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-8 font-display text-2xl font-semibold tracking-tight text-[#E8E8E8]",
									children: name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 font-sans text-sm text-[#6B6B6B]",
									children: desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-[#6B6B6B]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Sector · 0", districts.findIndex((d) => d.name === name) + 1] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `transition-colors ${classified ? "group-hover:text-[#C0392B]" : "group-hover:text-[#8B1A1A]"}`,
										children: "Enter →"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `pointer-events-none absolute inset-x-0 bottom-0 h-px transition-opacity duration-300 ${classified ? "bg-[#C0392B]" : "bg-[#8B1A1A]"} opacity-0 group-hover:opacity-100` })
							]
						}, name);
					})
				})]
			})
		]
	});
}
function CaseFilesSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "case-files",
		className: "relative border-t border-[#2A2A2A] py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-100px"
				},
				transition: { duration: .6 },
				className: "mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-[0.4em] text-[#6B6B6B]",
						children: "Section 03 · Case files"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl font-semibold tracking-tight text-[#E8E8E8] md:text-5xl",
						children: "The evidence locker"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-lg font-sans text-sm text-[#6B6B6B]",
						children: "Drag, scroll, or use the arrow keys to move through the catalog. Every frame is a piece of the city."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-[#6B6B6B]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconSearch, { className: "h-4 w-4 text-[#8B1A1A]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Scroll to navigate" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBolt, { className: "h-4 w-4 text-[#C0392B]" })
					]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					height: "600px",
					position: "relative"
				},
				className: "rounded-lg border border-[#2A2A2A] bg-[#0A0A0A]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircularGallery, {
					items: galleryItems,
					bend: 3,
					textColor: "#C0392B",
					borderRadius: .04,
					scrollEase: .05,
					scrollSpeed: 2,
					fontUrl: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&display=swap",
					font: "bold 26px Space Grotesk"
				})
			})
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-[#2A2A2A] py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 md:flex-row",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] uppercase tracking-[0.3em] text-[#8B1A1A]",
				children: "Gotham City Central — Fan project. Not affiliated with DC Comics or Warner Bros."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[10px] uppercase tracking-[0.3em] text-[#6B6B6B]",
				children: "Broadcast 24 · 7"
			})]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "gotham-root min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DistrictHub, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseFilesSection, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
