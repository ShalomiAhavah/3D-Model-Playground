import * as THREE from "three";

var model = document.querySelector(".viewer");
var modelColor = document.querySelector(".viewer#color");

var colorButtons = document.querySelector(".color-changes");

const loader = new THREE.GLTFLoader();
