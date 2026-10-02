import { useState } from "react";
import { ArrowUpRight, Check, Download } from "lucide-react";
import {
  readSession,
  saveSession,
  savePreference,
  useSessionState,
} from "../hooks/storage";

export default function ContactSection() {
  const [draft, setDraft] = useSessionState("inquiryDraft", {
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [saved, setSaved] = useState(false);
  function submit(event) {
    event.preventDefault();
    if (!draft.name.trim() || !draft.message.trim()) {
      setStatus("Please enter your name and a message.");
      return;
    }
    const entry = {
      ...draft,
      name: draft.name.trim(),
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    const entries = readSession("inquiries", []);
    if (!saveSession("inquiries", [...entries.slice(-19), entry])) {
      setStatus(
        "Browser storage is unavailable. Download your inquiry to keep a copy.",
      );
      return;
    }
    savePreference("inquiry_saved", "yes");
    setSaved(true);
    setStatus(
      "Your inquiry is saved in this browser session. It has not been sent to a sales team.",
    );
  }
  function download() {
    const url = URL.createObjectURL(
      new Blob([JSON.stringify(draft, null, 2)], { type: "application/json" }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = "lavilla-inquiry.json";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return (
    <footer id="contact" className="contact-section">
      <div>
        <p className="eyebrow">LET’S START A CONVERSATION</p>
        <h2>
          Your next chapter,
          <br />
          <em>beautifully considered.</em>
        </h2>
        <p>
          Tell us about the residence you have in mind.
          <br />A place to escape. A place to call your own.
        </p>
        <div className="contact-note">
          Your form is saved as you type, for this browser session. Session
          cookies remember your selections. No information is sent to a server.
        </div>
        <img
          className="footer-logo"
          src="./brand/lavilla-logo.png"
          alt="LAVILLA"
          width="1672"
          height="941"
          loading="lazy"
        />
        <small>
          © {new Date().getFullYear()} LAVILLA · Architecture & Real Estate
        </small>
      </div>
      <form onSubmit={submit} className="inquiry-form">
        <p className="eyebrow">PRIVATE RESIDENCE INQUIRY</p>
        {[
          ["name", "Full name", "text"],
          ["email", "Email address", "email"],
          ["phone", "Phone / WhatsApp (optional)", "tel"],
        ].map(([key, label, type]) => (
          <label key={key} htmlFor={`contact-${key}`}>
            {label}
            <input
              id={`contact-${key}`}
              name={key}
              type={type}
              autoComplete={key === "phone" ? "tel" : key}
              required={key !== "phone"}
              maxLength={key === "name" ? 100 : 180}
              value={draft[key]}
              onChange={(e) => {
                setDraft({ ...draft, [key]: e.target.value });
                setSaved(false);
              }}
            />
          </label>
        ))}
        <label htmlFor="contact-message">
          What are you looking for?
          <textarea
            id="contact-message"
            required
            rows={4}
            maxLength={3000}
            value={draft.message}
            onChange={(e) => {
              setDraft({ ...draft, message: e.target.value });
              setSaved(false);
            }}
          />
        </label>
        <button className="gold-button" type="submit">
          {saved ? "Inquiry saved" : "Save private inquiry"}
          {saved ? <Check size={18} /> : <ArrowUpRight size={18} />}
        </button>
        <p role="status" className="form-status">
          {status}
        </p>
        <button type="button" className="editorial-link" onClick={download}>
          Download my inquiry <Download size={16} />
        </button>
      </form>
    </footer>
  );
}
