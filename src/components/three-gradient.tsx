import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { useTheme } from './theme-context';
import { Color, Vector4 } from 'three';
import { PerlinShader } from '@/lib/perlin-shader';

export default function ThreeGradient() {
    const { theme } = useTheme();
  const sceneRef = useRef<HTMLDivElement>(null);
  const [ requestId, setRequestId ] = useState(null);
  const requestIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!sceneRef.current) return;
    const curr = sceneRef.current;

    const startTime = Date.now();
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor(theme === "dark" ? 0x000 : 0xf7f7f7,  1)

    renderer.setSize(window.innerWidth, window.innerHeight);
    sceneRef.current.appendChild(renderer.domElement);

    let w = 12, h = 2
    const geometry = new THREE.PlaneGeometry(w, h, 70, 50);
    const colour1 = new Color(theme === "dark" ? "rgb(4,11,85)" : "rgb(23,163,219)");
    const colour2 = new Color(theme === "dark" ? "rgb(0,209,255)" : "rgb(82,51,168)");

    const material = new THREE.ShaderMaterial({
        glslVersion: THREE.GLSL1,
        wireframe: true,
        vertexShader: PerlinShader.vertexShader,
        fragmentShader: PerlinShader.fragmentShader,
        uniforms: {
          p: { value: PerlinShader.p },
          time: { value: 0 },
          color1: { value: new Vector4(colour1.r, colour1.g, colour1.b, 1)},
          color2: { value: new Vector4(colour2.r, colour2.g, colour2.b, 1)},
        }
    })

    const plane1 = new THREE.Mesh(geometry, material);
    plane1.rotateX(-1.1)
    plane1.position.z = 2
    plane1.position.y = -1.15
    scene.add(plane1)
    
    const plane2 = new THREE.Mesh(geometry, material);
    plane2.rotateX(1.1)
    plane2.position.z = 2
    plane2.position.y = 1.15
    scene.add(plane2)

    camera.position.z = 5

    const animate = () => {
        requestAnimationFrame(animate);
        const elapsedMilliseconds = Date.now() - startTime;
        plane1.material.uniforms.time.value = elapsedMilliseconds / 1000. / 2;
        plane1.material.uniforms.time.value %= 30;
        renderer.render(scene, camera);
    }

    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize, false);

    animate();

    return () => {
        window.removeEventListener("resize", handleResize, false);
        if (requestIdRef.current !== null) {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            cancelAnimationFrame(requestIdRef.current);
        }
        curr.removeChild(renderer.domElement);
    }
  }, [theme]);

  return <div ref={sceneRef} className="-z-10" />;
};