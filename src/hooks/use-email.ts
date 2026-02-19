"use client";

import { useMemo } from "react";

/**
 * Obfuscates email from bots by assembling it at runtime.
 * Change the user/domain parts to your real email.
 */
export function useEmail() {
  return useMemo(() => {
    const user = "novaeslucas.tech";
    const domain = "gmail.com";
    const email = `${user}@${domain}`;
    return {
      href: `mailto:${email}`,
      display: email,
    };
  }, []);
}
