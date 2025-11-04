import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function CrtIntro({ onFinish }: { onFinish: () => void }) {
  const [stage, setStage] = useState<"crt" | "name" | "done">("crt");

  useEffect(() => {
    const seq = [
      setTimeout(() => setStage("name"), 6500),
      setTimeout(() => setStage("done"), 9000),
    ];
    return () => seq.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (stage === "done") {
      const t = setTimeout(() => onFinish(), 500);
      return () => clearTimeout(t);
    }
  }, [stage, onFinish]);

  const floatingIcons = [
    { emoji: "💾", top: "10%", left: "20%", delay: 0 },
    { emoji: "❤️", top: "25%", right: "18%", delay: 0.2 },
    { emoji: "🌍", top: "15%", right: "35%", delay: 0.4 },
    { emoji: "⭐", bottom: "25%", left: "25%", delay: 0.6 },
    { emoji: "🔑", bottom: "30%", right: "22%", delay: 0.8 },
    { emoji: "💡", top: "65%", right: "10%", delay: 1.0 },
    { emoji: "🌀", bottom: "10%", left: "15%", delay: 1.2 },
    { emoji: "🍌", bottom: "15%", right: "15%", delay: 1.4 },
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#e8e3d8] overflow-hidden">
      {/* Floating elements */}
      {floatingIcons.map((icon, i) => (
        <motion.div
          key={i}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: [0, -10, 0],
            opacity: 1,
          }}
          transition={{
            delay: icon.delay + 1,
            duration: 3,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="absolute text-lg sm:text-2xl select-none"
          style={{
            top: icon.top,
            bottom: icon.bottom,
            left: icon.left,
            right: icon.right,
          }}
        >
          {icon.emoji}
        </motion.div>
      ))}

      <AnimatePresence mode="wait">
        {/* --- CRT --- */}
        {stage === "crt" && (
          <motion.div
            key="crt"
            className="relative w-[320px] h-[230px] bg-[#d7d1c3] rounded-sm shadow-[12px_12px_0_#b6b0a2] border-[2px] border-[#a9a397]"
            initial={{ scale: 0.7, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
          >
            {/* SCREEN */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.7, 1] }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                times: [0, 0.3, 0.6, 1],
              }}
              className="absolute inset-[20px] bg-[#0a0a0a] shadow-inner border border-[#1a1a1a] flex items-center justify-center overflow-hidden"
            >
              <motion.pre
                className="text-[#6bff96] font-mono text-xs whitespace-pre leading-relaxed px-3 [text-shadow:0_0_8px_#00ff6a]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 1.2 }}
              >
                {`C:\\> Initializing System...\nLoading assets...\nCalibrating pixels...\nActivating subsystems...\n\nSystem ready.\n\nPress any key to continue_`}
              </motion.pre>
            </motion.div>

            {/* BASE UNIT */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-[270px] h-[35px] bg-[#cfc8b9] shadow-[inset_0_-3px_0_#b8b19f,inset_0_3px_0_#e1dcd0] rounded-sm" />
          </motion.div>
        )}

        {/* --- NAME POP AT END --- */}
        {stage === "name" && (
          <motion.h1
            key="name"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.1, 1], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
            className="absolute text-3xl sm:text-5xl font-['Press_Start_2P'] text-[#111] tracking-wider text-center"
          >
            KRIISH&nbsp;TIWARI
          </motion.h1>
        )}
      </AnimatePresence>
    </div>
  );
}
