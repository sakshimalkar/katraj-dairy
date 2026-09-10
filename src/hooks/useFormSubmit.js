import { useState } from "react";
import { FORM_ENDPOINT } from "../data/store";

// status: "idle" | "sending" | "success" | "error"
export default function useFormSubmit(subject) {
  const [status, setStatus] = useState("idle");

  const submit = async (fields) => {
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...fields,
          _subject: subject || "New enquiry — Katraj Milk Parlour website",
          _template: "table",
        }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  const reset = () => setStatus("idle");

  return { status, submit, reset };
}
