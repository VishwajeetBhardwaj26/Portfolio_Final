"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export const RESUME_PATH = "/Vishwajeet_Bhardwaj_Resume.pdf";

export function isMobileDevice() {
  if (typeof window === "undefined") return false;
  const ua = navigator.userAgent || "";
  const mobileUa = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    ua
  );
  const touchTablet = navigator.maxTouchPoints > 1 && window.innerWidth < 1024;
  return mobileUa || touchTablet;
}

export function getResumeUrl() {
  if (typeof window === "undefined") return RESUME_PATH;
  return `${window.location.origin}${RESUME_PATH}`;
}

/** Opens the PDF in the device’s native viewer (most reliable on mobile). */
export function openResumeNative() {
  const url = getResumeUrl();
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

export default function ResumeViewer({ open, onClose }) {
  const [isMobile, setIsMobile] = useState(false);
  const resumeUrl = useMemo(() => getResumeUrl(), [open]);

  useEffect(() => {
    setIsMobile(isMobileDevice());
  }, [open]);

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
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center pt-16 pb-3 px-3 sm:p-6"
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
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={`
              relative z-10 flex flex-col
              w-full
              border border-gray-800 bg-[#0B0F1A] overflow-hidden shadow-2xl
              ${
                isMobile
                  ? "max-w-lg rounded-2xl p-5 pb-8 mt-4"
                  : "max-w-5xl h-[88vh] sm:h-[90vh] rounded-2xl"
              }
            `}
          >
            {/* Header */}
            <div
              className={`
                flex items-center justify-between gap-3 shrink-0
                ${isMobile ? "mb-5" : "px-4 sm:px-5 py-3 border-b border-gray-800"}
              `}
            >
              <h2
                id="resume-viewer-title"
                className="text-base sm:text-lg font-semibold text-gray-100 truncate"
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

            {isMobile ? (
              /* Mobile: native open — iframes often fail on iOS/Android */
              <div className="space-y-4">
                <p className="text-sm text-gray-400 leading-relaxed">
                  Mobile browsers can’t reliably show PDFs inside the page.
                  Open it in your device’s PDF viewer instead.
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
            ) : (
              <>
                <div className="flex items-center justify-end gap-2 px-4 sm:px-5 py-2 border-b border-gray-800 shrink-0">
                  <a
                    href={resumeUrl}
                    download="Vishwajeet_Bhardwaj_Resume.pdf"
                    className="
                      text-xs sm:text-sm px-3 py-1.5 rounded-full
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
                      text-xs sm:text-sm px-3 py-1.5 rounded-full
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
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
