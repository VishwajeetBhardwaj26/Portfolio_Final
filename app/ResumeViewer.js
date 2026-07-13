"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

const RESUME_URL = "/Vishwajeet_Bhardwaj_Resume.pdf";

export default function ResumeViewer({ open, onClose }) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <motion.button
            type="button"
            aria-label="Close resume viewer"
            onClick={onClose}
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Panel */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-viewer-title"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="
              relative z-10
              flex flex-col
              w-full max-w-5xl
              h-[88vh] sm:h-[90vh]
              rounded-2xl
              border border-gray-800
              bg-[#0B0F1A]
              overflow-hidden
              shadow-2xl
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-3 px-4 sm:px-5 py-3 border-b border-gray-800 shrink-0">
              <h2
                id="resume-viewer-title"
                className="text-sm sm:text-base font-semibold text-gray-100 truncate"
              >
                Resume — Vishwajeet Bhardwaj
              </h2>

              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                <a
                  href={RESUME_URL}
                  download
                  className="
                    hidden sm:inline-flex
                    text-xs sm:text-sm
                    px-3 py-1.5
                    rounded-full
                    border border-gray-700
                    text-gray-300
                    hover:border-yellow-400/50 hover:text-yellow-400
                    transition
                  "
                >
                  Download
                </a>

                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-xs sm:text-sm
                    px-3 py-1.5
                    rounded-full
                    border border-cyan-400/30
                    text-cyan-400
                    hover:bg-cyan-400/10
                    transition
                  "
                >
                  Open
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close"
                  className="
                    w-8 h-8
                    rounded-full
                    border border-gray-700
                    text-gray-400
                    hover:text-white hover:border-gray-500
                    flex items-center justify-center
                    transition
                  "
                >
                  ✕
                </button>
              </div>
            </div>

            {/* PDF */}
            <div className="relative flex-1 bg-[#161B22] min-h-0">
              <iframe
                src={`${RESUME_URL}#toolbar=1&navpanes=0`}
                title="Vishwajeet Bhardwaj Resume"
                className="absolute inset-0 w-full h-full border-0"
              />

              {/* Mobile fallback note — native PDF UIs vary */}
              <div className="pointer-events-none absolute bottom-3 left-0 right-0 flex justify-center sm:hidden">
                <p className="pointer-events-auto text-[11px] text-gray-400 bg-black/70 px-3 py-1.5 rounded-full border border-gray-700">
                  Can’t see it?{" "}
                  <a
                    href={RESUME_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 underline"
                  >
                    Open PDF
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
