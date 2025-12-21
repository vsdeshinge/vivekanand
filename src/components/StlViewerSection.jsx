import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";

export default function ObjViewer({
  src = "model/base.obj",
  height = 420,
  background = "#0b0f19",
}) {
  const mountRef = useRef(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(background);

    // Camera
    const camera = new THREE.PerspectiveCamera(45, 1, 0.01, 10000);
    camera.position.set(0, 50, 120);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(el.clientWidth, el.clientHeight);
    el.appendChild(renderer.domElement);

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.9));
    const dir = new THREE.DirectionalLight(0xffffff, 1.2);
    dir.position.set(6, 10, 8);
    scene.add(dir);

    // Controls (rotate only)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;

    // Load OBJ
    let model;
    const loader = new OBJLoader();
    loader.load(
      src,
      (obj) => {
        model = obj;

        // Apply simple material if needed
        obj.traverse((child) => {
          if (child.isMesh) {
            child.material = new THREE.MeshStandardMaterial({
              color: 0xb8bcc4,
              roughness: 0.85,
              metalness: 0.05,
            });
          }
        });

        // Center model
        const box = new THREE.Box3().setFromObject(obj);
        const size = new THREE.Vector3();
        const center = new THREE.Vector3();
        box.getSize(size);
        box.getCenter(center);
        obj.position.sub(center);

        // Fit camera
        const maxDim = Math.max(size.x, size.y, size.z) || 1;
        const dist = maxDim * 2.2;

        camera.near = Math.max(0.01, maxDim / 1000);
        camera.far = dist * 50;
        camera.position.set(0, maxDim * 0.7, dist);
        camera.lookAt(0, 0, 0);
        camera.updateProjectionMatrix();

        controls.target.set(0, 0, 0);
        controls.update();

        scene.add(obj);
      },
      undefined,
      (err) => {
        console.error("OBJ load error:", err);
      }
    );

    // Resize
    const onResize = () => {
      const w = el.clientWidth || 1;
      const h = el.clientHeight || 1;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const ro = new ResizeObserver(onResize);
    ro.observe(el);
    onResize();

    // Render loop
    let raf = 0;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      controls.dispose();

      if (model) {
        model.traverse((child) => {
          if (child.isMesh) {
            child.geometry?.dispose?.();
            if (child.material?.dispose) child.material.dispose();
          }
        });
      }

      renderer.dispose();
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, [src, background]);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        height,
        borderRadius: 14,
        overflow: "hidden",
      }}
    />
  );
}
