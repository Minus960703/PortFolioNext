"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ThreeJS = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (canvasRef.current) {
      const scene = new THREE.Scene();
      const renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        antialias: true,
        alpha: true
      });
      renderer.outputEncoding = THREE.sRGBEncoding;
      const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 1000);
      camera.position.set(0, 0, 5);
      const loader = new GLTFLoader();
//       scene.background = new THREE.Color("transfer");
      const light = new THREE.DirectionalLight(0xffffff, 10);
      scene.add(light);
      renderer.setSize(400, 400);

      let model: any;

      loader.load("/assets/3dTextures/CuteEgg/scene.gltf", (object: any) => {
        model = object.scene;
        scene.add(model);
        
        model.scale.set(0.5, 0.5, 0.5);

        // 모델의 중심을 기준으로 중앙으로 이동
        const box = new THREE.Box3().setFromObject(model);
        const center = new THREE.Vector3();
        box.getCenter(center);
        model.position.sub(center);

        // 빛의 위치를 설정하여 방향을 조절
        light.position.set(5, 25, 10);

        animate(); // 렌더링 시작
      });

      // 렌더링 함수
      function animate() {
        requestAnimationFrame(animate);

        // 모델을 회전시킵니다. 여기서는 y축을 중심으로 회전합니다.
        if (model) {
          model.rotation.y += 0.01;
        }

        // 빛의 방향을 회전시킵니다.
        // if (light) {
        //     light.position.x = Math.sin(Date.now() * 0.031) * 10;
        //     light.position.z = Math.cos(Date.now() * 0.001) * 10;
        // }

        renderer.render(scene, camera);
      }
    }
  }, [canvasRef]);

  return <canvas ref={canvasRef} id="canvas" width="300" height="300"></canvas>;
};

export default ThreeJS;