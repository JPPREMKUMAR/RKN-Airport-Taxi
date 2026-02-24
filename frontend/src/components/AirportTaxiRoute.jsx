
import { Route } from 'react-router-dom'
import Home from '../pages/Home';


const AirportTaxiRoute = () => {



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


    return (
        <>


            {airportTaxiRoutes.map(route => (
                <Route
                    key={route.id}
                    path={route.slug}
                    element={<Home title={route.anchor} />}
                />
            ))}
        </>


    )
}




export default AirportTaxiRoute