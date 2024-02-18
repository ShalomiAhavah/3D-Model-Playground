import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.135.0/build/three.module.js";
var model = document.querySelector(".viewer");
var modelColor = document.querySelector(".viewer#color");

var colorButtons = document.querySelector(".color-changes");

const loader = new THREE.GLTFLoader();
console.log(typeof loader);
