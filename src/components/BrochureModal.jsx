import { useEffect, useRef, useState } from "react";
import { X, ArrowDownToLine } from "lucide-react";
import { useSessionState, saveSession, savePreference } from "../hooks/storage";

export default function BrochureModal({ open, onClose }) {
  const dialog = useRef(null);
  const [draft, setDraft] = useSessionState("brochureDraft", {
    name: "",
    email: "",
    phone: "",
  });
  const [status, setStatus] = useState("");
  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement;
    const box = dialog.current;
    box.querySelector("input")?.focus();
    function keyboard(e) {
      if (e.key === "Escape") onClose();
      if (e.key !== "Tab") return;
      const items = [...box.querySelectorAll("button, input, a[href]")];
      const first = items[0],
        last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
      if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", keyboard);
    return () => {
      document.removeEventListener("keydown", keyboard);
      previous?.focus();
    };
  }, [open, onClose]);
  if (!open) return null;
  function download(event) {
    event.preventDefault();
    if (!draft.name.trim()) {
      setStatus("Please enter your name.");
      return;
    }
    const stored = saveSession("brochureRequest", {
      ...draft,
      requestedAt: new Date().toISOString(),
    });
    savePreference("brochure_downloaded", "yes");
    const link = document.createElement("a");
    link.href = "./lavilla-residence-overview.html";
    link.download = "LAVILLA-Residence-Overview.html";
    link.click();
    setStatus(
      stored
        ? "Download started. Your details are saved in this session; no email has been sent."
        : "Download started. Browser storage is unavailable, so your details could not be saved.",
    );
  }
  return (
    <div
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      data-lenis-prevent
    >
      <section
        className="brochure-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="brochure-title"
        ref={dialog}
      >
        <button
          className="modal-close"
          aria-label="Close residence overview"
          onClick={onClose}
        >
          <X />
        </button>
        <p className="eyebrow">A CLOSER LOOK</p>
        <h2 id="brochure-title">
          Discover
          <br />
          <em>your residence.</em>
        </h2>
        <p>
          Download the residence overview: villa configurations, materials, and
          the design philosophy, in a printable HTML document.
        </p>
        <form onSubmit={download}>
          {[
            ["name", "Full name", "text"],
            ["email", "Email address", "email"],
            ["phone", "Phone (optional)", "tel"],
          ].map(([key, label, type]) => (
            <label htmlFor={`brochure-${key}`} key={key}>
              {label}
              <input
                id={`brochure-${key}`}
                type={type}
                required={key !== "phone"}
                maxLength={180}
                autoComplete={key === "phone" ? "tel" : key}
                value={draft[key]}
                onChange={(e) => setDraft({ ...draft, [key]: e.target.value })}
              />
            </label>
          ))}
          <button className="gold-button" type="submit">
            Download overview <ArrowDownToLine size={18} />
          </button>
        </form>
        <p className="form-status" role="status">
          {status || "Details stay in this browser session. No email is sent."}
        </p>
      </section>
    </div>
  );
}
