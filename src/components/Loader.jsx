import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  console.log(progress);
  return (
    <Html center>
      <div className="canvas-load">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Spinner or any other loading animation */}
          <div
            className="spinner"
            style={{
              width: 50,
              height: 50,
              border: "4px solid #f1f1f1",
              borderTop: "4px solid #555",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
            }}
          ></div>

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
      </div>
      {/* Add keyframe for spinner animation */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </Html>
  );
};

export default Loader;
