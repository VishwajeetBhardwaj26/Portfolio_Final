"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export const RESUME_PATH = "/Vishwajeet_Bhardwaj_Resume.pdf";

export function getResumeUrl() {
  if (typeof window === "undefined") return RESUME_PATH;
  return `${window.location.origin}${RESUME_PATH}`;
}

function useIsCompact() {
  const [compact, setCompact] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setCompact(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return compact;
}

export default function ResumeViewer({ open, onClose }) {
  const isCompact = useIsCompact();
  const resumeUrl = useMemo(() => getResumeUrl(), [open]);

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
          className="
            fixed inset-0 z-50 flex justify-center
            items-start md:items-center
            pt-[max(5rem,env(safe-area-inset-top))]
            px-4 pb-6
            md:p-6
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.button
            type="button"
            aria-label="Close resume viewer"
            onClick={onClose}
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-viewer-title"
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={`
              relative z-10 flex flex-col w-full
              border border-gray-800 bg-[#0B0F1A] overflow-hidden shadow-2xl rounded-2xl
              ${
                isCompact
                  ? "max-w-md mt-2"
                  : "max-w-5xl h-[min(90vh,860px)]"
              }
            `}
          >
            <div className="flex items-center justify-between gap-3 shrink-0 px-4 sm:px-5 py-3.5 border-b border-gray-800">
              <h2
                id="resume-viewer-title"
                className="text-sm sm:text-base font-semibold text-gray-100 truncate pr-2"
              >
                Resume — Vishwajeet Bhardwaj
              </h2>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="
                  w-8 h-8 shrink-0 rounded-full border border-gray-700
                  text-gray-400 hover:text-white hover:border-gray-500
                  flex items-center justify-center transition
                "
              >
                ✕
              </button>
            </div>

            {/* Mobile / narrow screens: no iframe (unreliable) */}
            <div className="md:hidden p-5 space-y-4">
              <p className="text-sm text-gray-400 leading-relaxed">
                On mobile, open the resume in your browser’s PDF viewer for the
                best experience.
              </p>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="
                  flex items-center justify-center w-full
                  px-5 py-3.5 rounded-xl
                  bg-cyan-400 text-black font-semibold
                  active:scale-[0.98] transition
                "
              >
                View Resume
              </a>

              <a
                href={resumeUrl}
                download="Vishwajeet_Bhardwaj_Resume.pdf"
                className="
                  flex items-center justify-center w-full
                  px-5 py-3.5 rounded-xl
                  border border-gray-700 text-gray-200 font-medium
                  active:scale-[0.98] transition
                "
              >
                Download PDF
              </a>
            </div>

            {/* Desktop: embedded PDF */}
            <div className="hidden md:flex flex-col flex-1 min-h-0">
              <div className="flex items-center justify-end gap-2 px-5 py-2 border-b border-gray-800 shrink-0">
                <a
                  href={resumeUrl}
                  download="Vishwajeet_Bhardwaj_Resume.pdf"
                  className="
                    text-sm px-3 py-1.5 rounded-full
                    border border-gray-700 text-gray-300
                    hover:border-yellow-400/50 hover:text-yellow-400 transition
                  "
                >
                  Download
                </a>
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-sm px-3 py-1.5 rounded-full
                    border border-cyan-400/30 text-cyan-400
                    hover:bg-cyan-400/10 transition
                  "
                >
                  Open
                </a>
              </div>

              <div className="relative flex-1 bg-[#161B22] min-h-0">
                <iframe
                  src={`${resumeUrl}#toolbar=1&navpanes=0`}
                  title="Vishwajeet Bhardwaj Resume"
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
