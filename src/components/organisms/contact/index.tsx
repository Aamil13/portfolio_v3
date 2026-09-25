"use client";
import { useState } from "react";
import { Reveal } from "@/components/atoms/reveal";

type FormState = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Something went wrong.");
      }

      setFormState("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setFormState("error");
    }
  };

  return (
    <section id="contact">
      <Reveal>
        <div className="eyebrow-line">Contact</div>
      </Reveal>

      <Reveal className="reveal-d1">
        <h1
          className="h-big"
          style={{ fontSize: "clamp(34px, 6.5vw, 60px)" }}
        >
          LET&apos;S WORK
        </h1>
      </Reveal>

      <Reveal className="reveal-d2">
        <h1
          className="h-big ghost"
          style={{ fontSize: "clamp(34px, 6.5vw, 60px)" }}
        >
          TOGETHER
        </h1>
      </Reveal>

      <Reveal className="reveal-d3">
        {formState === "success" ? (
          <p className="contact-success">
            Thanks! I&apos;ll get back to you soon.
          </p>
        ) : (
          <form className="form" onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label htmlFor="fname">Name</label>
              <input
                id="fname"
                type="text"
                placeholder="Your name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={formState === "loading"}
              />
            </div>
            <div className="field">
              <label htmlFor="femail">Email</label>
              <input
                id="femail"
                type="email"
                placeholder="you@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={formState === "loading"}
              />
            </div>
            <div className="field full">
              <label htmlFor="fmsg">Message</label>
              <textarea
                id="fmsg"
                rows={4}
                placeholder="Tell me about the project"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={formState === "loading"}
              />
            </div>

            {formState === "error" && (
              <p className="contact-error">{errorMsg}</p>
            )}

            <button
              className="submit"
              type="submit"
              disabled={formState === "loading"}
            >
              {formState === "loading" ? "Sending…" : "Submit"}
            </button>
          </form>
        )}
      </Reveal>
    </section>
  );
}
