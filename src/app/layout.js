import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Nina Mansouri - Web Developer",
  description: "Nina Mansouri's Portfolio",
  keywords: ["Nina Mansouri", "Front-end Developer", "React Developer", "Next.js Developer"],

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NJ0F38Y9E9"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-NJ0F38Y9E9');
          `}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Nina Mansouri",
              url: "https://ninamansouri.vercel.app",
              jobTitle: "Front-end Developer",
              sameAs: [
                "https://www.instagram.com/_ninaaa_m_",
                "https://www.linkedin.com/in/nina-mansourii",
                "https://www.github.com/nina-mansouri",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
