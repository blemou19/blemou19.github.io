const elements = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {

elements.forEach(el => {

const top = el.getBoundingClientRect().top;

if(top < window.innerHeight - 100){
el.classList.add("show");
}

});

});


const container = document.getElementById("skills-canvas");

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer({alpha:true});

renderer.setSize(window.innerWidth,500);

container.appendChild(renderer.domElement);

const particles = [];

const geometry = new THREE.SphereGeometry(0.05,8,8);

const material = new THREE.MeshBasicMaterial({color:0x3b82f6});

for(let i=0;i<150;i++){

const particle = new THREE.Mesh(geometry,material);

particle.position.x = (Math.random()-0.5)*10;
particle.position.y = (Math.random()-0.5)*5;
particle.position.z = (Math.random()-0.5)*10;

scene.add(particle);

particles.push(particle);

}

camera.position.z = 5;

function animate(){

requestAnimationFrame(animate);

particles.forEach(p => {
p.rotation.x += 0.01;
p.rotation.y += 0.01;
});

renderer.render(scene,camera);

}

animate();

/* ================= MOBILE MENU ================= */

const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
nav.classList.toggle("active");
});