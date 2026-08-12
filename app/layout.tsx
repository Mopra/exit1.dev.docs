import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { Albert_Sans } from "next/font/google";
import "nextra-theme-docs/style.css";
import "./globals.css";
import type { Metadata } from "next";

// Albert Sans is the app's `--font-sans`. Self-hosted by next/font so the docs
// don't depend on a Google Fonts round-trip the app makes in its index.html.
const albertSans = Albert_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-albert-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "exit1.dev Documentation",
    template: "%s | exit1.dev Docs",
  },
  description:
    "Documentation for exit1.dev - Website monitoring, uptime checks, SSL monitoring, and status pages.",
};

const logo = (
  <span className="flex items-center gap-2">
    {/* Static export with `images.unoptimized` — next/image would add a wrapper
        and no optimization. The app renders the same mark the same way. */}
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src="/e_.svg" alt="" className="size-6 shrink-0" />
    <span className="font-semibold text-[1.05rem] tracking-tight">exit1.dev</span>
  </span>
);

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={albertSans.variable}
    >
      {/*
        Nextra derives its whole primary/accent scale from one HSL triple and
        paints the page canvas from `backgroundColor`. Both come from the app's
        tokens: hue 160 / sat 51% is `--primary`
        (oklch(0.5854 0.1022 167.0051)), and the canvases are the app's warm
        cream `--background` (#FFFCF0) and its #15151B dark counterpart.

        Lightness deviates from the app's flat 37%: Nextra spends primary on
        link and active-nav *text*, where 37% only reaches 3.9:1 on cream and
        is dimmer than it needs to be on #15151B. 33/46 clears 4.5:1 in both.
        This is `--primary-text` in globals.css — change both together.
      */}
      <Head
        color={{
          hue: 160,
          saturation: 51,
          lightness: { light: 33, dark: 46 },
        }}
        backgroundColor={{
          dark: "#15151B",
          light: "#FFFCF0",
        }}
      />
      <body>
        <Layout
          navbar={
            <Navbar
              logo={logo}
              projectLink="https://github.com/Mopra/exit1.dev.docs"
            >
              <a href="https://exit1.dev" target="_blank" rel="noopener noreferrer">
                Website
              </a>
              <a href="https://app.exit1.dev" target="_blank" rel="noopener noreferrer">
                Dashboard
              </a>
            </Navbar>
          }
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/Mopra/exit1.dev.docs/tree/master"
          footer={
            <Footer>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", flexWrap: "wrap", gap: "0.5rem" }}>
                <p>
                  {new Date().getFullYear()} &copy; exit1.dev. All rights
                  reserved.
                </p>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <a href="https://exit1.dev" target="_blank" rel="noopener noreferrer">
                    Exit1 Website
                  </a>
                  <a href="https://app.exit1.dev" target="_blank" rel="noopener noreferrer">
                    Exit1 Monitor App
                  </a>
                  <a href="https://github.com/Mopra/exit1.dev.docs" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </Footer>
          }
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
