import { Header } from "@/components/ui/Header";
import { HeroSection } from "@/components/hero/HeroSection";
import { PackagesSection } from "@/components/packages/PackagesSection";
import { GearCatalog } from "@/components/gear/GearCatalog";
import { BookingPanel } from "@/components/booking/BookingPanel";
import { MobileCartBar } from "@/components/booking/MobileCartBar";
import { PricingExplainer } from "@/components/pricing/PricingExplainer";
import { PolicyAndFaqSection } from "@/components/faq/PolicyAndFaqSection";
import { InvoiceModal } from "@/components/invoice/InvoiceModal";
import { Footer } from "@/components/ui/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-[#092328]">
      <Header />

      <main>
        <HeroSection />
        <PackagesSection />

        {/* Gear Catalog + Sticky Desktop Booking Sidebar */}
        <section className="no-print bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <GearCatalog />
              </div>

              <aside
                aria-label="Booking summary"
                className="hidden lg:col-span-4 lg:block lg:py-24"
              >
                <div className="sticky top-24 rounded-3xl bg-white p-6 shadow-xl shadow-[#092328]/8 ring-1 ring-[#092328]/12">
                  <BookingPanel />
                </div>
              </aside>
            </div>
          </div>
        </section>

        <PricingExplainer />
        <PolicyAndFaqSection />
      </main>

      <Footer />
      <MobileCartBar />
      <InvoiceModal />
    </div>
  );
}
