import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/react+tabler__icons-react.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as PlaneGeometry, c as Vector2, i as OrthographicCamera, n as Color, o as Scene, r as Mesh, s as ShaderMaterial, t as WebGLRenderer } from "../_libs/three.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/MagicRings-DlXDOSrG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var vertexShader = `
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;
var fragmentShader = `
precision highp float;
uniform float uTime, uAttenuation, uLineThickness;
uniform float uBaseRadius, uRadiusStep, uScaleRate;
uniform float uOpacity, uNoiseAmount, uRotation, uRingGap;
uniform float uFadeIn, uFadeOut;
uniform float uMouseInfluence, uHoverAmount, uHoverScale, uParallax, uBurst;
uniform vec2 uResolution, uMouse;
uniform vec3 uColor, uColorTwo;
uniform int uRingCount;
const float HP = 1.5707963;
const float CYCLE = 3.45;
float fade(float t) {
  return t < uFadeIn ? smoothstep(0.0, uFadeIn, t) : 1.0 - smoothstep(uFadeOut, CYCLE - 0.2, t);
}
float ring(vec2 p, float ri, float cut, float t0, float px) {
  float t = mod(uTime + t0, CYCLE);
  float r = ri + t / CYCLE * uScaleRate;
  float d = abs(length(p) - r);
  float a = atan(abs(p.y), abs(p.x)) / HP;
  float th = max(1.0 - a, 0.5) * px * uLineThickness;
  float h = (1.0 - smoothstep(th, th * 1.5, d)) + 1.0;
  d += pow(cut * a, 3.0) * r;
  return h * exp(-uAttenuation * d) * fade(t);
}
void main() {
  float px = 1.0 / min(uResolution.x, uResolution.y);
  vec2 p = (gl_FragCoord.xy - 0.5 * uResolution.xy) * px;
  float cr = cos(uRotation), sr = sin(uRotation);
  p = mat2(cr, -sr, sr, cr) * p;
  p -= uMouse * uMouseInfluence;
  float sc = mix(1.0, uHoverScale, uHoverAmount) + uBurst * 0.3;
  p /= sc;
  vec3 c = vec3(0.0);
  float rcf = max(float(uRingCount) - 1.0, 1.0);
  for (int i = 0; i < 10; i++) {
    if (i >= uRingCount) break;
    float fi = float(i);
    vec2 pr = p - fi * uParallax * uMouse;
    vec3 rc = mix(uColor, uColorTwo, fi / rcf);
    c = mix(c, rc, vec3(ring(pr, uBaseRadius + fi * uRadiusStep, pow(uRingGap, fi), i == 0 ? 0.0 : 2.95 * fi, px)));
  }
  c *= 1.0 + uBurst * 2.0;
  float n = fract(sin(dot(gl_FragCoord.xy + uTime * 100.0, vec2(12.9898, 78.233))) * 43758.5453);
  c += (n - 0.5) * uNoiseAmount;
  gl_FragColor = vec4(c, max(c.r, max(c.g, c.b)) * uOpacity);
}
`;
function MagicRings({ color = "#e8b800", colorTwo = "#8b0000", speed = .6, ringCount = 7, attenuation = 9, lineThickness = 2, baseRadius = .28, radiusStep = .09, scaleRate = .12, opacity = 1, blur = 0, noiseAmount = .08, rotation = 0, ringGap = 1.5, fadeIn = .7, fadeOut = .6, followMouse = true, mouseInfluence = .15, hoverScale = 1.1, parallax = .03, clickBurst = false, className }) {
	const mountRef = (0, import_react.useRef)(null);
	const propsRef = (0, import_react.useRef)({
		color,
		colorTwo,
		speed,
		ringCount,
		attenuation,
		lineThickness,
		baseRadius,
		radiusStep,
		scaleRate,
		opacity,
		noiseAmount,
		rotation,
		ringGap,
		fadeIn,
		fadeOut,
		followMouse,
		mouseInfluence,
		hoverScale,
		parallax,
		clickBurst
	});
	propsRef.current = {
		color,
		colorTwo,
		speed,
		ringCount,
		attenuation,
		lineThickness,
		baseRadius,
		radiusStep,
		scaleRate,
		opacity,
		noiseAmount,
		rotation,
		ringGap,
		fadeIn,
		fadeOut,
		followMouse,
		mouseInfluence,
		hoverScale,
		parallax,
		clickBurst
	};
	(0, import_react.useEffect)(() => {
		const mount = mountRef.current;
		if (!mount) return;
		let renderer;
		try {
			renderer = new WebGLRenderer({
				alpha: true,
				antialias: true
			});
		} catch {
			return;
		}
		renderer.setClearColor(0, 0);
		mount.appendChild(renderer.domElement);
		const scene = new Scene();
		const camera = new OrthographicCamera(-.5, .5, .5, -.5, .1, 10);
		camera.position.z = 1;
		const uniforms = {
			uTime: { value: 0 },
			uAttenuation: { value: 0 },
			uResolution: { value: new Vector2() },
			uColor: { value: new Color() },
			uColorTwo: { value: new Color() },
			uLineThickness: { value: 0 },
			uBaseRadius: { value: 0 },
			uRadiusStep: { value: 0 },
			uScaleRate: { value: 0 },
			uRingCount: { value: 0 },
			uOpacity: { value: 1 },
			uNoiseAmount: { value: 0 },
			uRotation: { value: 0 },
			uRingGap: { value: 1.6 },
			uFadeIn: { value: .5 },
			uFadeOut: { value: .75 },
			uMouse: { value: new Vector2() },
			uMouseInfluence: { value: 0 },
			uHoverAmount: { value: 0 },
			uHoverScale: { value: 1 },
			uParallax: { value: 0 },
			uBurst: { value: 0 }
		};
		const material = new ShaderMaterial({
			vertexShader,
			fragmentShader,
			uniforms,
			transparent: true
		});
		const quad = new Mesh(new PlaneGeometry(1, 1), material);
		scene.add(quad);
		const mouse = [0, 0];
		const smoothMouse = [0, 0];
		let hoverAmount = 0;
		let isHovered = false;
		let burst = 0;
		const resize = () => {
			const w = mount.clientWidth;
			const h = mount.clientHeight;
			const dpr = Math.min(window.devicePixelRatio, 2);
			renderer.setSize(w, h);
			renderer.setPixelRatio(dpr);
			uniforms.uResolution.value.set(w * dpr, h * dpr);
		};
		resize();
		window.addEventListener("resize", resize);
		const ro = new ResizeObserver(resize);
		ro.observe(mount);
		const onMouseMove = (e) => {
			const rect = mount.getBoundingClientRect();
			mouse[0] = (e.clientX - rect.left) / rect.width - .5;
			mouse[1] = -((e.clientY - rect.top) / rect.height - .5);
		};
		const onEnter = () => {
			isHovered = true;
		};
		const onLeave = () => {
			isHovered = false;
			mouse[0] = 0;
			mouse[1] = 0;
		};
		const onClick = () => {
			burst = 1;
		};
		mount.addEventListener("mousemove", onMouseMove);
		mount.addEventListener("mouseenter", onEnter);
		mount.addEventListener("mouseleave", onLeave);
		mount.addEventListener("click", onClick);
		let frameId = 0;
		const animate = (t) => {
			frameId = requestAnimationFrame(animate);
			const p = propsRef.current;
			smoothMouse[0] += (mouse[0] - smoothMouse[0]) * .08;
			smoothMouse[1] += (mouse[1] - smoothMouse[1]) * .08;
			hoverAmount += ((isHovered ? 1 : 0) - hoverAmount) * .08;
			burst *= .95;
			if (burst < .001) burst = 0;
			uniforms.uTime.value = t * .001 * p.speed;
			uniforms.uTime.value = t * .001 * p.speed;
			uniforms.uAttenuation.value = p.attenuation;
			uniforms.uColor.value.set(p.color);
			uniforms.uColorTwo.value.set(p.colorTwo);
			uniforms.uLineThickness.value = p.lineThickness;
			uniforms.uBaseRadius.value = p.baseRadius;
			uniforms.uRadiusStep.value = p.radiusStep;
			uniforms.uScaleRate.value = p.scaleRate;
			uniforms.uRingCount.value = p.ringCount;
			uniforms.uOpacity.value = p.opacity;
			uniforms.uNoiseAmount.value = p.noiseAmount;
			uniforms.uRotation.value = p.rotation * Math.PI / 180;
			uniforms.uRingGap.value = p.ringGap;
			uniforms.uFadeIn.value = p.fadeIn;
			uniforms.uFadeOut.value = p.fadeOut;
			uniforms.uMouse.value.set(smoothMouse[0], smoothMouse[1]);
			uniforms.uMouseInfluence.value = p.followMouse ? p.mouseInfluence : 0;
			uniforms.uHoverAmount.value = hoverAmount;
			uniforms.uHoverScale.value = p.hoverScale;
			uniforms.uParallax.value = p.parallax;
			uniforms.uBurst.value = p.clickBurst ? burst : 0;
			renderer.render(scene, camera);
		};
		frameId = requestAnimationFrame(animate);
		return () => {
			cancelAnimationFrame(frameId);
			window.removeEventListener("resize", resize);
			ro.disconnect();
			mount.removeEventListener("mousemove", onMouseMove);
			mount.removeEventListener("mouseenter", onEnter);
			mount.removeEventListener("mouseleave", onLeave);
			mount.removeEventListener("click", onClick);
			if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
			renderer.dispose();
			material.dispose();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: mountRef,
		className: className ?? "h-full w-full",
		style: blur > 0 ? { filter: `blur(${blur}px)` } : void 0
	});
}
//#endregion
export { MagicRings as default };
