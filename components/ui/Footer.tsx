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
      <footer className="no-print bg-[#092328] pt-14 pb-28 text-white lg:pb-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-3">
                <BrandLogo size={44} className="ring-1 ring-[#8BBB92]/40" />
                <div>
                  <h3 className="font-display text-xl font-bold text-white">
                    {t.brand.name}
                  </h3>
                  <p className="text-xs text-[#8BBB92]">{t.footer.tagline}</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#8BBB92]">
                {t.footer.addressLabel}
              </p>
              <p className="mt-2 text-sm text-white/85">{t.brand.location}</p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-[#8BBB92] hover:text-white hover:underline"
              >
                <span>{t.footer.mapLinkText}</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#8BBB92]">
                  {t.footer.callLabel}
                </p>
                <a
                  href="tel:0702156828"
                  className="mt-1.5 inline-flex items-center gap-2 text-base font-bold text-white hover:text-[#8BBB92]"
                >
                  <Phone className="h-4 w-4 text-[#8BBB92]" />
                  <span>{t.brand.phoneDisplay}</span>
                </a>
              </div>
              <div>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 hover:text-[#8BBB92]"
                >
                  <span>{t.footer.facebookLabel}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/12 pt-6 text-xs text-white/55">
            © {new Date().getFullYear()} {t.footer.rights}
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button — positioned above MobileCartBar on mobile */}
      <a
        href={WHATSAPP_DIRECT_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="no-print fixed right-4 bottom-24 z-30 flex h-13 w-13 items-center justify-center rounded-full bg-[#12544F] text-white shadow-xl shadow-black/30 ring-1 ring-[#8BBB92]/40 transition-transform hover:scale-105 hover:bg-[#2A835F] focus:outline-none focus-visible:ring-2 focus-visible:ring-white lg:right-6 lg:bottom-6"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </>
  );
}
