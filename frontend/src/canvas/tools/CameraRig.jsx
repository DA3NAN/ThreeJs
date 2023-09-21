import { useRef } from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import state from "@store";
import proptypes from "prop-types";

function CameraRig({ children }) {
  const snap = useSnapshot(state);
  const groupRef = useRef();

  // set the model rotation to the camera rotation
  useFrame((state, delta) => {
    const isBreakpoint = window.innerWidth < 1260;
    const isMobile = window.innerWidth < 600;

    // set initial position of the model
    let targerPosition = [-0.4, 0, 2];
    if (snap.intro) {
      if (isBreakpoint) targerPosition = [0, 0, 2];
      if (isMobile) targerPosition = [0, 0.2, 2.5];
    } else {
      if (isMobile) targerPosition = [0, 0, 2.5];
      else targerPosition = [0, 0, 2];
    }

    easing.damp3(state.camera.position, targerPosition, 0.25, delta);

    easing.dampE(
      groupRef.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    );
  });

  return <group ref={groupRef}>{children}</group>;
}

CameraRig.propTypes = {
  children: proptypes.node.isRequired,
};

export default CameraRig;
