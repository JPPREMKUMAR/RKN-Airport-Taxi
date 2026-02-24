
import { Route } from 'react-router-dom'
import Home from '../pages/Home';

const PlaceToAirport = () => {


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
        <>


            {airportLinks.map(route => (
                <Route
                    key={route.id}
                    path={route.slug}
                    element={<Home title={route.text} />}
                />
            ))}
        </>


    )
}



export default PlaceToAirport