import { Helmet } from "react-helmet";

const HelmetSeo = () => {
    const bannerImages = [
        "https://res.cloudinary.com/dchkwygu9/image/upload/v1766983683/c1_gwvd7l.jpg",
        "https://res.cloudinary.com/dchkwygu9/image/upload/v1766983702/c2_ry5nm8.jpg",
        "https://res.cloudinary.com/dchkwygu9/image/upload/v1766983721/c3_wu1pkg.jpg"
    ];

    const logo =
        "https://res.cloudinary.com/dchkwygu9/image/upload/v1766978905/web_logobg_tdvtwl.png";

    return (
        <Helmet>
            {/* ================= BASIC SEO ================= */}
            {/* FAVICON */}
            <link rel="icon" href="/favicon.png" sizes="32x32" />

            <link rel="icon" href="/favicon.png" sizes="48x48" />
            <link rel="icon" href="/favicon.png" sizes="192x192" />

            <link rel="apple-touch-icon" href="/favicon.png" />


            <title>
                RKN Airport Taxi | Bangalore Airport Taxi – 24/7 Pickup & Drop
            </title>

            <meta
                name="description"
                content="Book Bangalore airport taxi with RKN Airport Taxi. 24/7 airport pickup & drop, clean cabs, professional drivers, instant call & WhatsApp booking."
            />

            <meta name="robots" content="index, follow" />
            <meta name="author" content="RKN Airport Taxi" />
            <meta name="theme-color" content="#0b1f33" />
            <meta name="format-detection" content="telephone=yes" />

            {/* ================= LOCAL GEO TAGS ================= */}

            <meta name="geo.region" content="IN-KA" />
            <meta name="geo.placename" content="Bengaluru" />
            <meta name="geo.position" content="13.1986;77.7066" />
            <meta name="ICBM" content="13.1986, 77.7066" />

            {/* ================= CANONICAL ================= */}

            <link rel="canonical" href="https://www.rknairporttaxi.com/" />

            {/* ================= OPEN GRAPH (WHATSAPP / FB) ================= */}

            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="RKN Airport Taxi" />
            <meta property="og:locale" content="en_IN" />
            <meta property="og:url" content="https://www.rknairporttaxi.com/" />
            <meta
                property="og:title"
                content="RKN Airport Taxi | Bangalore Airport Pickup & Drop"
            />
            <meta
                property="og:description"
                content="24/7 Bangalore airport taxi service with clean cabs & instant booking."
            />
            <meta property="og:image" content={bannerImages[0]} />
            <meta
                property="og:image:alt"
                content="Bangalore Airport Taxi Service"
            />

            {/* ================= TWITTER ================= */}

            <meta name="twitter:card" content="summary_large_image" />
            <meta
                name="twitter:title"
                content="Bangalore Airport Taxi – 24/7 Pickup & Drop"
            />
            <meta
                name="twitter:description"
                content="Book Bangalore airport taxi instantly. Clean cabs, professional drivers & best prices."
            />
            <meta name="twitter:image" content={bannerImages[0]} />

            {/* ================= SCHEMA : TAXI SERVICE ================= */}

            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "TaxiService",
                    "name": "RKN Airport Taxi",
                    "url": "https://www.rknairporttaxi.com",
                    "logo": logo,
                    "image": bannerImages,
                    "telephone": "+91-9000942998",
                    "priceRange": "₹₹",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Bengaluru",
                        "addressRegion": "Karnataka",
                        "addressCountry": "IN"
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": "13.1986",
                        "longitude": "77.7066"
                    },
                    "openingHours": "Mo-Su 00:00-23:59",
                    "areaServed": {
                        "@type": "City",
                        "name": "Bengaluru"
                    }
                })}
            </script>

            {/* ================= SCHEMA : SERVICE ================= */}

            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Bangalore Airport Taxi Service",
                    "provider": {
                        "@type": "TaxiService",
                        "name": "RKN Airport Taxi",
                        "telephone": "+91-9000942998",
                        "areaServed": {
                            "@type": "City",
                            "name": "Bengaluru"
                        }
                    },
                    "availableChannel": {
                        "@type": "ServiceChannel",
                        "serviceLocation": {
                            "@type": "Place",
                            "name": "Kempegowda International Airport"
                        }
                    }
                })}
            </script>
        </Helmet>
    );
};

export default HelmetSeo;
