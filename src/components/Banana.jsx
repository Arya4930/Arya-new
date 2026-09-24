'use client';
import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function BananaModel({ position, onMount }) {
  const { scene } = useGLTF('/banana.glb');
  const groupRef = useRef();
  const { camera, gl } = useThree();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  useEffect(() => {
    if (groupRef.current) {
      onMount({ groupRef, camera, gl });
    }
  }, [camera, gl]);

  return (
    <group ref={groupRef} position={position}>
      <primitive
        object={scene}
        scale={[0.002, 0.002, 0.002]}
        rotation={[0, 0, -Math.PI / 2]}
      />
    </group>
  );
}

export default function Banana() {
  const [position, setPosition] = useState([0, 0, 0]);
  const isDragging = useRef(false);
  const lastMouse = useRef({ x: 0, y: 0 });
  const sceneRefs = useRef(null);

  const handleMount = (refs) => {
    sceneRefs.current = refs;
  };

  useEffect(() => {
    const handleMouseDown = (e) => {
      const { groupRef, camera, gl } = sceneRefs.current ?? {};
      if (!groupRef?.current || !camera || !gl) return;

      const rect = gl.domElement.getBoundingClientRect();
      const mouse = new THREE.Vector2(
        ((e.clientX - rect.left) / rect.width) * 2 - 1,
        -((e.clientY - rect.top) / rect.height) * 2 + 1
      );

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(
        groupRef.current.children,
        true
      );

      if (intersects.length > 0) {
        e.preventDefault();
        isDragging.current = true;
        lastMouse.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handleMouseMove = (e) => {
      if (!isDragging.current) return;

      const deltaX = e.clientX - lastMouse.current.x;
      const deltaY = e.clientY - lastMouse.current.y;

      setPosition((prev) => [
        prev[0] + deltaX * 0.005,
        prev[1] - deltaY * 0.005,
        prev[2],
      ]);

      lastMouse.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    window.addEventListener('mousedown', handleMouseDown, true);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown, true);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-screen h-screen z-50 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 2.5], fov: 75 }}
        style={{ pointerEvents: 'none' }}
      >
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} />
        <BananaModel position={position} onMount={handleMount} />
      </Canvas>
    </div>
  );
}