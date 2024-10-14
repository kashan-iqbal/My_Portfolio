import { Html, useProgress } from "@react-three/drei"; // Html is used to render DOM elements within the 3D canvas

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      {" "}
      {/* Html renders the progress in the center of the canvas */}
      <div className="canvas-load">
        <p
          style={{
            fontSize: 14,
            color: "#f1f1f1",
            fontWeight: 800,
            marginTop: 40,
          }}
        >
          {progress.toFixed(2)}%
        </p>
      </div>
    </Html>
  );
};

export default Loader;
