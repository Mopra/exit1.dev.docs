import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "exit1.dev Documentation",
    template: "%s | exit1.dev Docs",
  },
  description:
    "Documentation for exit1.dev - Website monitoring, uptime checks, SSL monitoring, and status pages.",
};

const logo = (
  <span style={{ fontWeight: 800, fontSize: "1.1rem" }}>exit1.dev</span>
);

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head
          backgroundColor={{
            dark: "rgb(10,10,10)",
            light: "rgb(250,250,250)",
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
