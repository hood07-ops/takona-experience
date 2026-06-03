import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        duration: 1.5,
        delay: 5,
      }}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "#050505",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          color: "#f0c36a",
          fontSize: "5rem",
          letterSpacing: "8px",
        }}
      >
        TĀKONA
      </motion.h1>
    </motion.div>
  );
}

export default Loader;