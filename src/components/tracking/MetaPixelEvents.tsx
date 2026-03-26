import { useEffect } from "react";

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

const MetaPixelEvents = () => {
  useEffect(() => {
    // ViewContent — dispara quando o usuário rola 50% da página
    let viewContentFired = false;

    const handleScroll = () => {
      if (viewContentFired) return;
      const scrollPercent =
        (window.scrollY + window.innerHeight) /
        document.documentElement.scrollHeight;
      if (scrollPercent >= 0.5) {
        viewContentFired = true;
        if (typeof window.fbq === "function") {
          window.fbq("track", "ViewContent", {
            content_name: "Método SVA - Landing Page",
            content_category: "curso",
            value: 97.9,
            currency: "BRL",
          });
        }
      }
    };

    // InitiateCheckout — dispara ao clicar em qualquer link pro checkout
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      if (!link) return;

      const href = link.getAttribute("href") || "";

      if (href.includes("pay.cakto.com")) {
        if (typeof window.fbq === "function") {
          window.fbq("track", "InitiateCheckout", {
            content_name: "Método SVA",
            content_ids: ["sva-curso"],
            value: 97.9,
            currency: "BRL",
          });
        }
      }

      // Lead — dispara ao clicar no WhatsApp
      if (href.includes("wa.me")) {
        if (typeof window.fbq === "function") {
          window.fbq("track", "Lead", {
            content_name: "WhatsApp - Método SVA",
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
};

export default MetaPixelEvents;
