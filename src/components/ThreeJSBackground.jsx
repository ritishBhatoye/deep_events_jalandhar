import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const ThreeJSBackground = () => {
  const mountRef = useRef(null);
  const [renderer, setRenderer] = useState(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const newRenderer = new THREE.WebGLRenderer({ alpha: true });

    setRenderer(newRenderer);

    newRenderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(newRenderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const vertices = [];

    for (let i = 0; i < 10000; i++) {
      const x = THREE.MathUtils.randFloatSpread(2000);
      const y = THREE.MathUtils.randFloatSpread(2000);
      const z = THREE.MathUtils.randFloatSpread(2000);

      vertices.push(x, y, z);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    const particles = new THREE.Points(
      geometry,
      new THREE.PointsMaterial({ color: 0xffa500, size: 0.5 })
    );

    scene.add(particles);

    camera.position.z = 1000;

    const animate = () => {
      requestAnimationFrame(animate);

      particles.rotation.x += 0.0001;
      particles.rotation.y += 0.0001;

      newRenderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      newRenderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && newRenderer.domElement) {
        mountRef.current.removeChild(newRenderer.domElement);
      }
      newRenderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />;
};

export default ThreeJSBackground;