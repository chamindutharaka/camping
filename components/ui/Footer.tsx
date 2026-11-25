"use client";

import { ExternalLink, MessageCircle, Phone } from "lucide-react";
import { DICTIONARY } from "@/data/i18n";
import { useBookingStore } from "@/lib/store";
import { BrandLogo } from "@/components/ui/BrandLogo";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=S.C.W+Electrical+Pinnaduwa+Galle";
const FACEBOOK_URL =
  "https://www.facebook.com/p/Camping-Gear-Hub-61555970583596/";
const WHATSAPP_DIRECT_URL = "https://wa.me/94702156828";

export function Footer() {
  const language = useBookingStore((s) => s.language);
  const t = DICTIONARY[language];

  return (
    <>
      <footer className="no-print bg-[#111613] pt-14 pb-16 text-white lg:pb-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-3">
                <BrandLogo size={44} className="ring-1 ring-[#4EA879]/40" />
                <div>
                  <h3 className="font-display text-xl font-bold text-white">
                    {t.brand.name}
                  </h3>
                  <p className="text-xs text-[#4EA879]">{t.footer.tagline}</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#4EA879]">
                {t.footer.addressLabel}
              </p>
              <p className="mt-2 text-sm text-white/90">{t.brand.location}</p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-[#4EA879] hover:text-white hover:underline"
              >
                <span>{t.footer.mapLinkText}</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#4EA879]">
                  {t.footer.callLabel}
                </p>
                <a
                  href="tel:0702156828"
                  className="mt-1.5 inline-flex items-center gap-2 text-base font-bold text-white hover:text-[#4EA879]"
                >
                  <Phone className="h-4 w-4 text-[#4EA879]" />
                  <span>{t.brand.phoneDisplay}</span>
                </a>
              </div>
              <div>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 hover:text-[#4EA879]"
                >
                  <span>{t.footer.facebookLabel}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-[#4EA879]/20 pt-6 text-xs text-[#4EA879]/75">
            © {new Date().getFullYear()} {t.footer.rights}
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button — positioned below MobileCartBar pill on mobile */}
      <a
        href={WHATSAPP_DIRECT_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="no-print fixed right-4 bottom-4 z-30 flex h-13 w-13 items-center justify-center rounded-full bg-[#0A5C36] text-white shadow-xl shadow-black/30 ring-1 ring-[#4EA879]/40 transition-transform hover:scale-105 hover:bg-[#0D7043] focus:outline-none focus-visible:ring-2 focus-visible:ring-white lg:right-6 lg:bottom-6"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </>
  );
}
