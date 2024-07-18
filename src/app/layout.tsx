import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ThemeContextProvider from "@/components/theme-context";
import ActiveSectionContextProvider, {
  ActiveSectionContext,
} from "@/components/active-section-context";
import ThemeSwitch from "@/components/theme-switch";

export const metadata: Metadata = {
  title: "Yeoh Han Yi",
  description: "Yeoh Han Yi's Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        id="root"
        className={`font-sans bg-light text-dark dark:bg-dark dark:text-light relative`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <ThemeSwitch />
            <Footer />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
