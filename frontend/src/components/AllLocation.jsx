


const AllLoaction = () => {
    const airportTaxiRoutes = [
        { id: 1, slug: "/whitefield-to-bangalore-airport", anchor: "Airport Cab Taxi from Whitefield to Bangalore Airport" },
        { id: 2, slug: "/electronic-city-to-bangalore-airport", anchor: "Airport Cab Taxi from Electronic City to Bangalore Airport" },
        { id: 3, slug: "/marathahalli-to-bangalore-airport", anchor: "Airport Cab Taxi from Marathahalli to Bangalore Airport" },
        { id: 4, slug: "/btm-layout-to-bangalore-airport", anchor: "Airport Cab Taxi from BTM Layout to Bangalore Airport" },
        { id: 5, slug: "/hebbal-to-bangalore-airport", anchor: "Airport Cab Taxi from Hebbal to Bangalore Airport" },
        { id: 6, slug: "/yelahanka-to-bangalore-airport", anchor: "Airport Cab Taxi from Yelahanka to Bangalore Airport" },
        { id: 7, slug: "/indiranagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Indiranagar to Bangalore Airport" },
        { id: 8, slug: "/jp-nagar-to-bangalore-airport", anchor: "Airport Cab Taxi from JP Nagar to Bangalore Airport" },
        { id: 9, slug: "/jayanagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Jayanagar to Bangalore Airport" },
        { id: 10, slug: "/kr-puram-to-bangalore-airport", anchor: "Airport Cab Taxi from KR Puram to Bangalore Airport" },

        { id: 11, slug: "/mg-road-to-bangalore-airport", anchor: "Airport Cab Taxi from MG Road to Bangalore Airport" },
        { id: 12, slug: "/majestic-to-bangalore-airport", anchor: "Airport Cab Taxi from Majestic to Bangalore Airport" },
        { id: 13, slug: "/malleshwaram-to-bangalore-airport", anchor: "Airport Cab Taxi from Malleshwaram to Bangalore Airport" },
        { id: 14, slug: "/rajajinagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Rajajinagar to Bangalore Airport" },
        { id: 15, slug: "/yeshwanthpur-to-bangalore-airport", anchor: "Airport Cab Taxi from Yeshwanthpur to Bangalore Airport" },
        { id: 16, slug: "/banashankari-to-bangalore-airport", anchor: "Airport Cab Taxi from Banashankari to Bangalore Airport" },
        { id: 17, slug: "/basavanagudi-to-bangalore-airport", anchor: "Airport Cab Taxi from Basavanagudi to Bangalore Airport" },
        { id: 18, slug: "/hsr-layout-to-bangalore-airport", anchor: "Airport Cab Taxi from HSR Layout to Bangalore Airport" },
        { id: 19, slug: "/koramangala-to-bangalore-airport", anchor: "Airport Cab Taxi from Koramangala to Bangalore Airport" },
        { id: 20, slug: "/domlur-to-bangalore-airport", anchor: "Airport Cab Taxi from Domlur to Bangalore Airport" },

        { id: 21, slug: "/bellandur-to-bangalore-airport", anchor: "Airport Cab Taxi from Bellandur to Bangalore Airport" },
        { id: 22, slug: "/sarjapur-road-to-bangalore-airport", anchor: "Airport Cab Taxi from Sarjapur Road to Bangalore Airport" },
        { id: 23, slug: "/bommanahalli-to-bangalore-airport", anchor: "Airport Cab Taxi from Bommanahalli to Bangalore Airport" },
        { id: 24, slug: "/kengeri-to-bangalore-airport", anchor: "Airport Cab Taxi from Kengeri to Bangalore Airport" },
        { id: 25, slug: "/vijayanagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Vijayanagar to Bangalore Airport" },
        { id: 26, slug: "/nagarbhavi-to-bangalore-airport", anchor: "Airport Cab Taxi from Nagarbhavi to Bangalore Airport" },
        { id: 27, slug: "/attiguppe-to-bangalore-airport", anchor: "Airport Cab Taxi from Attiguppe to Bangalore Airport" },
        { id: 28, slug: "/basaveshwaranagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Basaveshwaranagar to Bangalore Airport" },
        { id: 29, slug: "/hoodi-to-bangalore-airport", anchor: "Airport Cab Taxi from Hoodi to Bangalore Airport" },
        { id: 30, slug: "/mahadevapura-to-bangalore-airport", anchor: "Airport Cab Taxi from Mahadevapura to Bangalore Airport" },

        { id: 31, slug: "/itpl-whitefield-to-bangalore-airport", anchor: "Airport Cab Taxi from ITPL Whitefield to Bangalore Airport" },
        { id: 32, slug: "/brookefield-to-bangalore-airport", anchor: "Airport Cab Taxi from Brookefield to Bangalore Airport" },
        { id: 33, slug: "/kundalahalli-to-bangalore-airport", anchor: "Airport Cab Taxi from Kundalahalli to Bangalore Airport" },
        { id: 34, slug: "/manyata-tech-park-to-bangalore-airport", anchor: "Airport Cab Taxi from Manyata Tech Park to Bangalore Airport" },
        { id: 35, slug: "/nagawara-to-bangalore-airport", anchor: "Airport Cab Taxi from Nagawara to Bangalore Airport" },
        { id: 36, slug: "/hennur-to-bangalore-airport", anchor: "Airport Cab Taxi from Hennur to Bangalore Airport" },
        { id: 37, slug: "/kalyan-nagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Kalyan Nagar to Bangalore Airport" },
        { id: 38, slug: "/ramamurthy-nagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Ramamurthy Nagar to Bangalore Airport" },
        { id: 39, slug: "/kasturi-nagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Kasturi Nagar to Bangalore Airport" },
        { id: 40, slug: "/banaswadi-to-bangalore-airport", anchor: "Airport Cab Taxi from Banaswadi to Bangalore Airport" },

        { id: 41, slug: "/frazer-town-to-bangalore-airport", anchor: "Airport Cab Taxi from Frazer Town to Bangalore Airport" },
        { id: 42, slug: "/cox-town-to-bangalore-airport", anchor: "Airport Cab Taxi from Cox Town to Bangalore Airport" },
        { id: 43, slug: "/ulsoor-to-bangalore-airport", anchor: "Airport Cab Taxi from Ulsoor to Bangalore Airport" },
        { id: 44, slug: "/shivajinagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Shivajinagar to Bangalore Airport" },
        { id: 45, slug: "/rt-nagar-to-bangalore-airport", anchor: "Airport Cab Taxi from RT Nagar to Bangalore Airport" },
        { id: 46, slug: "/sanjay-nagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Sanjay Nagar to Bangalore Airport" },
        { id: 47, slug: "/sadashivanagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Sadashivanagar to Bangalore Airport" },
        { id: 48, slug: "/peenya-to-bangalore-airport", anchor: "Airport Cab Taxi from Peenya to Bangalore Airport" },
        { id: 49, slug: "/nelamangala-to-bangalore-airport", anchor: "Airport Cab Taxi from Nelamangala to Bangalore Airport" },
        { id: 50, slug: "/jalahalli-to-bangalore-airport", anchor: "Airport Cab Taxi from Jalahalli to Bangalore Airport" },

        { id: 51, slug: "/mathikere-to-bangalore-airport", anchor: "Airport Cab Taxi from Mathikere to Bangalore Airport" },
        { id: 52, slug: "/vidyaranyapura-to-bangalore-airport", anchor: "Airport Cab Taxi from Vidyaranyapura to Bangalore Airport" },
        { id: 53, slug: "/sahakara-nagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Sahakara Nagar to Bangalore Airport" },
        { id: 54, slug: "/kodigehalli-to-bangalore-airport", anchor: "Airport Cab Taxi from Kodigehalli to Bangalore Airport" },
        { id: 55, slug: "/thanisandra-to-bangalore-airport", anchor: "Airport Cab Taxi from Thanisandra to Bangalore Airport" },
        { id: 56, slug: "/bagalur-to-bangalore-airport", anchor: "Airport Cab Taxi from Bagalur to Bangalore Airport" },
        { id: 57, slug: "/devanahalli-to-bangalore-airport", anchor: "Airport Cab Taxi from Devanahalli to Bangalore Airport" },
        { id: 58, slug: "/chikkajala-to-bangalore-airport", anchor: "Airport Cab Taxi from Chikkajala to Bangalore Airport" },
        { id: 59, slug: "/doddagubbi-to-bangalore-airport", anchor: "Airport Cab Taxi from Doddagubbi to Bangalore Airport" },
        { id: 60, slug: "/kothanur-to-bangalore-airport", anchor: "Airport Cab Taxi from Kothanur to Bangalore Airport" },

        { id: 61, slug: "/bannerghatta-road-to-bangalore-airport", anchor: "Airport Cab Taxi from Bannerghatta Road to Bangalore Airport" },
        { id: 62, slug: "/rr-nagar-to-bangalore-airport", anchor: "Airport Cab Taxi from RR Nagar to Bangalore Airport" },
        { id: 63, slug: "/uttarahalli-to-bangalore-airport", anchor: "Airport Cab Taxi from Uttarahalli to Bangalore Airport" },
        { id: 64, slug: "/kumaraswamy-layout-to-bangalore-airport", anchor: "Airport Cab Taxi from Kumaraswamy Layout to Bangalore Airport" },
        { id: 65, slug: "/padmanabhanagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Padmanabhanagar to Bangalore Airport" },
        { id: 66, slug: "/arekere-to-bangalore-airport", anchor: "Airport Cab Taxi from Arekere to Bangalore Airport" },
        { id: 67, slug: "/gottigere-to-bangalore-airport", anchor: "Airport Cab Taxi from Gottigere to Bangalore Airport" },
        { id: 68, slug: "/hulimavu-to-bangalore-airport", anchor: "Airport Cab Taxi from Hulimavu to Bangalore Airport" },
        { id: 69, slug: "/begur-to-bangalore-airport", anchor: "Airport Cab Taxi from Begur to Bangalore Airport" },
        { id: 70, slug: "/hongasandra-to-bangalore-airport", anchor: "Airport Cab Taxi from Hongasandra to Bangalore Airport" },

        { id: 71, slug: "/mangammanapalya-to-bangalore-airport", anchor: "Airport Cab Taxi from Mangammanapalya to Bangalore Airport" },
        { id: 72, slug: "/ecity-phase-1-to-bangalore-airport", anchor: "Airport Cab Taxi from Electronic City Phase 1 to Bangalore Airport" },
        { id: 73, slug: "/ecity-phase-2-to-bangalore-airport", anchor: "Airport Cab Taxi from Electronic City Phase 2 to Bangalore Airport" },
        { id: 74, slug: "/chandapura-to-bangalore-airport", anchor: "Airport Cab Taxi from Chandapura to Bangalore Airport" },
        { id: 75, slug: "/attibele-to-bangalore-airport", anchor: "Airport Cab Taxi from Attibele to Bangalore Airport" },
        { id: 76, slug: "/anehalli-to-bangalore-airport", anchor: "Airport Cab Taxi from Anehalli to Bangalore Airport" },
        { id: 77, slug: "/hebbar-to-bangalore-airport", anchor: "Airport Cab Taxi from Hebbar to Bangalore Airport" },
        { id: 78, slug: "/dasarahalli-to-bangalore-airport", anchor: "Airport Cab Taxi from Dasarahalli to Bangalore Airport" },
        { id: 79, slug: "/ganganagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Ganganagar to Bangalore Airport" },
        { id: 80, slug: "/new-bel-road-to-bangalore-airport", anchor: "Airport Cab Taxi from New BEL Road to Bangalore Airport" },

        { id: 81, slug: "/iskcon-temple-to-bangalore-airport", anchor: "Airport Cab Taxi from ISKCON Temple to Bangalore Airport" },
        { id: 82, slug: "/magadi-road-to-bangalore-airport", anchor: "Airport Cab Taxi from Magadi Road to Bangalore Airport" },
        { id: 83, slug: "/amarjyothi-nagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Amarjyothi Nagar to Bangalore Airport" },
        { id: 84, slug: "/rajiv-gandhi-nagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Rajiv Gandhi Nagar to Bangalore Airport" },
        { id: 85, slug: "/kaggadasapura-to-bangalore-airport", anchor: "Airport Cab Taxi from Kaggadasapura to Bangalore Airport" },
        { id: 86, slug: "/varthur-to-bangalore-airport", anchor: "Airport Cab Taxi from Varthur to Bangalore Airport" },
        { id: 87, slug: "/gunjur-to-bangalore-airport", anchor: "Airport Cab Taxi from Gunjur to Bangalore Airport" },
        { id: 88, slug: "/yalachenahalli-to-bangalore-airport", anchor: "Airport Cab Taxi from Yalachenahalli to Bangalore Airport" },
        { id: 89, slug: "/trinity-to-bangalore-airport", anchor: "Airport Cab Taxi from Trinity to Bangalore Airport" },
        { id: 90, slug: "/cv-raman-nagar-to-bangalore-airport", anchor: "Airport Cab Taxi from CV Raman Nagar to Bangalore Airport" },

        { id: 91, slug: "/baiyappanahalli-to-bangalore-airport", anchor: "Airport Cab Taxi from Baiyappanahalli to Bangalore Airport" },
        { id: 92, slug: "/madiwala-to-bangalore-airport", anchor: "Airport Cab Taxi from Madiwala to Bangalore Airport" },
        { id: 93, slug: "/silk-board-to-bangalore-airport", anchor: "Airport Cab Taxi from Silk Board to Bangalore Airport" },
        { id: 94, slug: "/tavarekere-to-bangalore-airport", anchor: "Airport Cab Taxi from Tavarekere to Bangalore Airport" },
        { id: 95, slug: "/murugeshpalya-to-bangalore-airport", anchor: "Airport Cab Taxi from Murugeshpalya to Bangalore Airport" },
        { id: 96, slug: "/old-airport-road-to-bangalore-airport", anchor: "Airport Cab Taxi from Old Airport Road to Bangalore Airport" },
        { id: 97, slug: "/jeevanbheema-nagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Jeevanbheema Nagar to Bangalore Airport" },
        { id: 98, slug: "/thippasandra-to-bangalore-airport", anchor: "Airport Cab Taxi from Thippasandra to Bangalore Airport" },
        { id: 99, slug: "/ulsoor-to-bangalore-airport", anchor: "Airport Cab Taxi from Ulsoor to Bangalore Airport" },
        { id: 100, slug: "/bellandur-outer-ring-road-to-bangalore-airport", anchor: "Airport Cab Taxi from Bellandur ORR to Bangalore Airport" }


    ];


    const airportLinks = [
        { id: 101, slug: "bangalore-airport-to-ulsoor", text: "Airport Taxi from Ulsoor to Bangalore Airport" },
        { id: 102, slug: "bangalore-airport-to-cox-town", text: "Airport Taxi from Cox Town to Bangalore Airport" },
        { id: 103, slug: "bangalore-airport-to-frazer-town", text: "Airport Taxi from Frazer Town to Bangalore Airport" },
        { id: 104, slug: "bangalore-airport-to-richmond-town", text: "Airport Taxi from Richmond Town to Bangalore Airport" },
        { id: 105, slug: "bangalore-airport-to-ashok-nagar", text: "Airport Taxi from Ashok Nagar to Bangalore Airport" },
        { id: 106, slug: "bangalore-airport-to-wilson-garden", text: "Airport Taxi from Wilson Garden to Bangalore Airport" },
        { id: 107, slug: "bangalore-airport-to-shivajinagar", text: "Airport Taxi from Shivajinagar to Bangalore Airport" },
        { id: 108, slug: "bangalore-airport-to-chickpet", text: "Airport Taxi from Chickpet to Bangalore Airport" },
        { id: 109, slug: "bangalore-airport-to-gandhi-nagar", text: "Airport Taxi from Gandhi Nagar to Bangalore Airport" },
        { id: 110, slug: "bangalore-airport-to-seshadripuram", text: "Airport Taxi from Seshadripuram to Bangalore Airport" },

        { id: 111, slug: "bangalore-airport-to-rajajinagar", text: "Airport Taxi from Rajajinagar to Bangalore Airport" },
        { id: 112, slug: "bangalore-airport-to-mahalakshmi-layout", text: "Airport Taxi from Mahalakshmi Layout to Bangalore Airport" },
        { id: 113, slug: "bangalore-airport-to-nandini-layout", text: "Airport Taxi from Nandini Layout to Bangalore Airport" },
        { id: 114, slug: "bangalore-airport-to-yeshwanthpur", text: "Airport Taxi from Yeshwanthpur to Bangalore Airport" },
        { id: 115, slug: "bangalore-airport-to-peenya", text: "Airport Taxi from Peenya to Bangalore Airport" },
        { id: 116, slug: "bangalore-airport-to-malleswaram-west", text: "Airport Taxi from Malleswaram West to Bangalore Airport" },
        { id: 117, slug: "bangalore-airport-to-mattikere", text: "Airport Taxi from Mattikere to Bangalore Airport" },
        { id: 118, slug: "bangalore-airport-to-sanjaynagar", text: "Airport Taxi from Sanjaynagar to Bangalore Airport" },
        { id: 119, slug: "bangalore-airport-to-vidyaranyapura", text: "Airport Taxi from Vidyaranyapura to Bangalore Airport" },
        { id: 120, slug: "bangalore-airport-to-jalahalli", text: "Airport Taxi from Jalahalli to Bangalore Airport" },

        { id: 121, slug: "bangalore-airport-to-nagavara", text: "Airport Taxi from Nagavara to Bangalore Airport" },
        { id: 122, slug: "bangalore-airport-to-ramamurthy-nagar", text: "Airport Taxi from Ramamurthy Nagar to Bangalore Airport" },
        { id: 123, slug: "bangalore-airport-to-hoodi-circle", text: "Airport Taxi from Hoodi Circle to Bangalore Airport" },
        { id: 124, slug: "bangalore-airport-to-kadugodi", text: "Airport Taxi from Kadugodi to Bangalore Airport" },
        { id: 125, slug: "bangalore-airport-to-whitefield-hopefarm", text: "Airport Taxi from Whitefield Hopefarm to Bangalore Airport" },
        { id: 126, slug: "bangalore-airport-to-varthur", text: "Airport Taxi from Varthur to Bangalore Airport" },
        { id: 127, slug: "bangalore-airport-to-bellandur", text: "Airport Taxi from Bellandur to Bangalore Airport" },
        { id: 128, slug: "bangalore-airport-to-hsr-sector-7", text: "Airport Taxi from HSR Sector 7 to Bangalore Airport" },
        { id: 129, slug: "bangalore-airport-to-hsr-sector-2", text: "Airport Taxi from HSR Sector 2 to Bangalore Airport" },
        { id: 130, slug: "bangalore-airport-to-kudlu-gate", text: "Airport Taxi from Kudlu Gate to Bangalore Airport" },

        { id: 131, slug: "bangalore-airport-to-hongasandra", text: "Airport Taxi from Hongasandra to Bangalore Airport" },
        { id: 132, slug: "bangalore-airport-to-bommanahalli", text: "Airport Taxi from Bommanahalli to Bangalore Airport" },
        { id: 133, slug: "bangalore-airport-to-arekere", text: "Airport Taxi from Arekere to Bangalore Airport" },
        { id: 134, slug: "bangalore-airport-to-bannerghatta-road", text: "Airport Taxi from Bannerghatta Road to Bangalore Airport" },
        { id: 135, slug: "bangalore-airport-to-hulimavu", text: "Airport Taxi from Hulimavu to Bangalore Airport" },
        { id: 136, slug: "bangalore-airport-to-uttarahalli", text: "Airport Taxi from Uttarahalli to Bangalore Airport" },
        { id: 137, slug: "bangalore-airport-to-subramanyapura", text: "Airport Taxi from Subramanyapura to Bangalore Airport" },
        { id: 138, slug: "bangalore-airport-to-kengeri-satellite-town", text: "Airport Taxi from Kengeri Satellite Town to Bangalore Airport" },
        { id: 139, slug: "bangalore-airport-to-nayandahalli", text: "Airport Taxi from Nayandahalli to Bangalore Airport" },
        { id: 140, slug: "bangalore-airport-to-rr-nagar", text: "Airport Taxi from RR Nagar to Bangalore Airport" },

        { id: 141, slug: "bangalore-airport-to-mysore-road", text: "Airport Taxi from Mysore Road to Bangalore Airport" },
        { id: 142, slug: "bangalore-airport-to-vijayanagar", text: "Airport Taxi from Vijayanagar to Bangalore Airport" },
        { id: 143, slug: "bangalore-airport-to-chandra-layout", text: "Airport Taxi from Chandra Layout to Bangalore Airport" },
        { id: 144, slug: "bangalore-airport-to-magadi-road", text: "Airport Taxi from Magadi Road to Bangalore Airport" },
        { id: 145, slug: "bangalore-airport-to-rajaji-nagar-6th-block", text: "Airport Taxi from Rajajinagar 6th Block to Bangalore Airport" },
        { id: 146, slug: "bangalore-airport-to-okkalipura", text: "Airport Taxi from Okkalipura to Bangalore Airport" },
        { id: 147, slug: "bangalore-airport-to-basaveshwara-nagar", text: "Airport Taxi from Basaveshwara Nagar to Bangalore Airport" },
        { id: 148, slug: "bangalore-airport-to-kamakshipalya", text: "Airport Taxi from Kamakshipalya to Bangalore Airport" },
        { id: 149, slug: "bangalore-airport-to-nagarbhavi-stage-2", text: "Airport Taxi from Nagarbhavi Stage 2 to Bangalore Airport" },
        { id: 150, slug: "bangalore-airport-to-katriguppe", text: "Airport Taxi from Katriguppe to Bangalore Airport" },

        { id: 151, slug: "bangalore-airport-to-banashankari-6th-stage", text: "Airport Taxi from Banashankari 6th Stage to Bangalore Airport" },
        { id: 152, slug: "bangalore-airport-to-kumaraswamy-layout", text: "Airport Taxi from Kumaraswamy Layout to Bangalore Airport" },
        { id: 153, slug: "bangalore-airport-to-girinagar", text: "Airport Taxi from Girinagar to Bangalore Airport" },
        { id: 154, slug: "bangalore-airport-to-srinagar", text: "Airport Taxi from Srinagar to Bangalore Airport" },
        { id: 155, slug: "bangalore-airport-to-chamrajpet", text: "Airport Taxi from Chamrajpet to Bangalore Airport" },
        { id: 156, slug: "bangalore-airport-to-basavanagudi", text: "Airport Taxi from Basavanagudi to Bangalore Airport" },
        { id: 157, slug: "bangalore-airport-to-gavipuram", text: "Airport Taxi from Gavipuram to Bangalore Airport" },
        { id: 158, slug: "bangalore-airport-to-lalbagh-road", text: "Airport Taxi from Lalbagh Road to Bangalore Airport" },
        { id: 159, slug: "bangalore-airport-to-shanthinagar", text: "Airport Taxi from Shanthinagar to Bangalore Airport" },
        { id: 160, slug: "bangalore-airport-to-vv-puram", text: "Airport Taxi from VV Puram to Bangalore Airport" },

        { id: 161, slug: "bangalore-airport-to-cv-raman-nagar", text: "Airport Taxi from CV Raman Nagar to Bangalore Airport" },
        { id: 162, slug: "bangalore-airport-to-drdo-township", text: "Airport Taxi from DRDO Township to Bangalore Airport" },
        { id: 163, slug: "bangalore-airport-to-byrasandra", text: "Airport Taxi from Byrasandra to Bangalore Airport" },
        { id: 164, slug: "bangalore-airport-to-jakkur", text: "Airport Taxi from Jakkur to Bangalore Airport" },
        { id: 165, slug: "bangalore-airport-to-thanisandra", text: "Airport Taxi from Thanisandra to Bangalore Airport" },
        { id: 166, slug: "bangalore-airport-to-kannuru", text: "Airport Taxi from Kannuru to Bangalore Airport" },
        { id: 167, slug: "bangalore-airport-to-chikkajala", text: "Airport Taxi from Chikkajala to Bangalore Airport" },
        { id: 168, slug: "bangalore-airport-to-bagalur", text: "Airport Taxi from Bagalur to Bangalore Airport" },
        { id: 169, slug: "bangalore-airport-to-sadenahalli", text: "Airport Taxi from Sadenahalli to Bangalore Airport" },
        { id: 170, slug: "bangalore-airport-to-ivc-road", text: "Airport Taxi from IVC Road to Bangalore Airport" },

        { id: 171, slug: "bangalore-airport-to-devanahalli-town", text: "Airport Taxi from Devanahalli Town to Bangalore Airport" },
        { id: 172, slug: "bangalore-airport-to-razakpalya", text: "Airport Taxi from Razakpalya to Bangalore Airport" },
        { id: 173, slug: "bangalore-airport-to-doddajala", text: "Airport Taxi from Doddajala to Bangalore Airport" },
        { id: 174, slug: "bangalore-airport-to-shettigere", text: "Airport Taxi from Shettigere to Bangalore Airport" },
        { id: 175, slug: "bangalore-airport-to-chikkasandra", text: "Airport Taxi from Chikkasandra to Bangalore Airport" },
        { id: 176, slug: "bangalore-airport-to-yelahanka-new-town", text: "Airport Taxi from Yelahanka New Town to Bangalore Airport" },
        { id: 177, slug: "bangalore-airport-to-yelahanka-satellite-town", text: "Airport Taxi from Yelahanka Satellite Town to Bangalore Airport" },
        { id: 178, slug: "bangalore-airport-to-singanayakanahalli", text: "Airport Taxi from Singanayakanahalli to Bangalore Airport" },
        { id: 179, slug: "bangalore-airport-to-kogilu", text: "Airport Taxi from Kogilu to Bangalore Airport" },
        { id: 180, slug: "bangalore-airport-to-agara", text: "Airport Taxi from Agara to Bangalore Airport" },

        { id: 181, slug: "bangalore-airport-to-harlur", text: "Airport Taxi from Harlur to Bangalore Airport" },
        { id: 182, slug: "bangalore-airport-to-kasavanahalli", text: "Airport Taxi from Kasavanahalli to Bangalore Airport" },
        { id: 183, slug: "bangalore-airport-to-panathur", text: "Airport Taxi from Panathur to Bangalore Airport" },
        { id: 184, slug: "bangalore-airport-to-balagere", text: "Airport Taxi from Balagere to Bangalore Airport" },
        { id: 185, slug: "bangalore-airport-to-gunjur", text: "Airport Taxi from Gunjur to Bangalore Airport" },
        { id: 186, slug: "bangalore-airport-to-sompura", text: "Airport Taxi from Sompura to Bangalore Airport" },
        { id: 187, slug: "bangalore-airport-to-kodathi", text: "Airport Taxi from Kodathi to Bangalore Airport" },
        { id: 188, slug: "bangalore-airport-to-doddanekkundi", text: "Airport Taxi from Doddanekkundi to Bangalore Airport" },
        { id: 189, slug: "bangalore-airport-to-kaggadasapura", text: "Airport Taxi from Kaggadasapura to Bangalore Airport" },
        { id: 190, slug: "bangalore-airport-to-banaswadi", text: "Airport Taxi from Banaswadi to Bangalore Airport" },

        { id: 191, slug: "bangalore-airport-to-horamavu", text: "Airport Taxi from Horamavu to Bangalore Airport" },
        { id: 192, slug: "bangalore-airport-to-hennur-cross", text: "Airport Taxi from Hennur Cross to Bangalore Airport" },
        { id: 193, slug: "bangalore-airport-to-kalyan-nagar", text: "Airport Taxi from Kalyan Nagar to Bangalore Airport" },
        { id: 194, slug: "bangalore-airport-to-lingarajapuram", text: "Airport Taxi from Lingarajapuram to Bangalore Airport" },
        { id: 195, slug: "bangalore-airport-to-bellary-road", text: "Airport Taxi from Bellary Road to Bangalore Airport" },
        { id: 196, slug: "bangalore-airport-to-sahakar-nagar", text: "Airport Taxi from Sahakar Nagar to Bangalore Airport" },
        { id: 197, slug: "bangalore-airport-to-kodigehalli", text: "Airport Taxi from Kodigehalli to Bangalore Airport" },
        { id: 198, slug: "bangalore-airport-to-amrutahalli", text: "Airport Taxi from Amrutahalli to Bangalore Airport" },
        { id: 199, slug: "bangalore-airport-to-ganganagar", text: "Airport Taxi from Ganganagar to Bangalore Airport" },
        { id: 200, slug: "bangalore-airport-to-hebbal-kempapura", text: "Airport Taxi from Hebbal Kempapura to Bangalore Airport" }
    ];



    return (


        <div className="my-2 min-h-screen">

            <div className="my-5">
                <h5 className="text-center text-blue-700 font-bold text-xl sm:text-3xl leading-tight ">RKN Airport Taxi From All Bangalore Locations </h5>
            </div>

            <div className="my-3 p-4 grid grid-cols-1 sm:grid-cols-2 ">

                {
                    airportTaxiRoutes.map((item, index) => (
                        <div className="bg-white m-3 p-2 text-center rounded-md" key={index}>
                            <a href={item.slug} target="_blank" className="font-semibold text-blue-500 hover:text-underline"> {item.anchor}</a>
                        </div>

                    ))

                }
                {
                    airportLinks.map((item, index) => (
                        <div className="bg-white m-3 p-2 text-center rounded-md" key={index} >
                            <a href={item.slug} target="_blank" className="font-semibold text-blue-500 hover:underline">  {item.text}</a>
                        </div>

                    ))

                }


            </div>

        </div>
    )
}




export default AllLoaction