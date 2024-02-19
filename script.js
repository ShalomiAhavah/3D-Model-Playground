const modelViewerColor = document.querySelector("model-viewer#color");

document.querySelector(".color-changes").addEventListener("click", (event) => {
  const colorString = event.target.dataset.color;
  const [material] = modelViewerColor.model.materials;
  material.pbrMetallicRoughness.setBaseColorFactor(colorString);
});
