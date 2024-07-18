// src/components/LoadingAnimation.js
import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Html, useProgress } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import logo from '../assets/deep_event_jalandhar.png';

const Logo = () => {
  const meshRef = useRef();
  const texture = useLoader(THREE.TextureLoader, logo);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    meshRef.current.rotation.y = elapsedTime * 0.5;
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[5, 5]} />  {/* Increased size of the plane */}
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  );
};

const LoadingAnimation = ({ onLoaded }) => {
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        onLoaded();
      }, 1000); // Increased delay to allow animation to complete
    }
  }, [progress, onLoaded]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 2 }}  // Increased transition duration
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-black to-gray-900"
      style={{ zIndex: 50 }}
    >
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Logo />
        <Html center>
          <motion.img
            src={logo}
            alt="Deep Catering & Events Jalandhar"
            className="w-64 h-64"  // Increased size of the logo
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 4, ease: 'easeOut' }}  // Increased transition duration
          />
        </Html>
      </Canvas>
    </motion.div>
  );
};

export default LoadingAnimation;
