"use client";

import { useState } from "react";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 transition-all duration-200"
      style={{
        border: "1px solid var(--color-cream-dark)",
        borderRadius: "4px",
        color: copied ? "var(--color-text-primary)" : "var(--color-text-secondary)",
        backgroundColor: copied ? "var(--color-cream-dark)" : "transparent",
        cursor: "pointer",
        letterSpacing: "0.05em",
      }}
    >
      {copied ? (
        <>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2 6l3 3 5-5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Copied
        </>
      ) : (
        <>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <rect
              x="4"
              y="4"
              width="7"
              height="7"
              rx="1"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <path
              d="M3 8H2a1 1 0 01-1-1V2a1 1 0 011-1h5a1 1 0 011 1v1"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </svg>
          Copy
        </>
      )}
    </button>
  );
}


export default CopyButton;