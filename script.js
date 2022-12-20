//Scene
const scene = new THREE.Scene();

//Red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 'blue' });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes {
    width: 800,
    height: 600
}

//Camera
const camera = new THREE.PerspectiveCamera(110);
scene.add(camera);