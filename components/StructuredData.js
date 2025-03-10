// components/StructuredData.js
export default function StructuredData() {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Nepscape",
      "url": "https://nepscape.com",
      "logo": "https://nepscape.com/logo.png",
      "description": "Nepscape IT Company | Website, App & Digital Marketing Services",
      "sameAs": [
        "https://facebook.com/nepscape",
        "https://twitter.com/nepscape",
        "https://linkedin.com/company/nepscape"
      ],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://nepscape.com"
      },
      "offers": {
        "@type": "Offer",
        "name": "IT Services",
        "description": "Website Development, App Development, Digital Marketing"
      }
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    );
  }