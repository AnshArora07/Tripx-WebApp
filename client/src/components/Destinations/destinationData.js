// destinationData.js
const destinations = [
    { 
      name: "Mumbai", 
      imgSrc: "https://wallpapers.com/images/featured/mumbai-crtn69rpkfw7xeyg.jpg", 
      price: "Rs 12000", 
      duration: "5 days, 4 nights",
      description: "Mumbai, the city of dreams, offers a vibrant blend of history, culture, and modernity. Explore iconic landmarks such as the Gateway of India, Marine Drive, and the bustling markets of Colaba.",
      weather: {
        summer: "Hot and humid with temperatures ranging from 25°C to 35°C.",
        monsoon: "Heavy rainfall and cooler temperatures.",
        winter: "Mild and pleasant with temperatures ranging from 18°C to 28°C."
      },
      bestTimeToVisit: "The best time to visit Mumbai is during the winter months from October to February when the weather is cooler and more comfortable for exploring the city.",
      topAttractions: [
        "Gateway of India: A historic monument and one of Mumbai's most iconic landmarks.",
        "Marine Drive: A scenic promenade along the Arabian Sea, perfect for evening strolls.",
        "Chhatrapati Shivaji Maharaj Terminus: A UNESCO World Heritage site and an architectural marvel.",
        "Elephanta Caves: Ancient rock-cut temples located on Elephanta Island, a short ferry ride from Mumbai.",
        "Juhu Beach: A popular beach known for its street food and beautiful sunsets."
      ],
      localCulture: "Mumbai is a melting pot of cultures and traditions. The city is known for its vibrant Bollywood film industry, bustling markets, and diverse culinary scene. Festivals like Ganesh Chaturthi and Diwali are celebrated with great enthusiasm. The local language is Marathi, but Hindi and English are widely spoken. Mumbai's fast-paced lifestyle and diverse population make it a unique and dynamic city."
    },
    { 
      name: "Jaipur", 
      imgSrc: "https://cdn.pixabay.com/photo/2021/04/06/11/22/hawa-mahal-6156123_1280.jpg", 
      price: "Rs 15000", 
      duration: "7 days, 6 nights",
      description: "Jaipur, also known as the Pink City, is renowned for its magnificent palaces, forts, and vibrant markets. Highlights include the Hawa Mahal, Amber Fort, and the City Palace.",
      weather: {
        summer: "Hot with temperatures ranging from 30°C to 45°C.",
        monsoon: "Moderate rainfall with temperatures ranging from 25°C to 35°C.",
        winter: "Pleasant with temperatures ranging from 5°C to 20°C."
      },
      bestTimeToVisit: "The best time to visit Jaipur is during the winter months from November to February when the weather is cooler and more enjoyable for sightseeing.",
      topAttractions: [
        "Hawa Mahal: The iconic palace with its unique façade and intricate latticework.",
        "Amber Fort: A majestic fort offering panoramic views and rich history.",
        "City Palace: A grand palace complex with museums and courtyards.",
        "Jantar Mantar: An astronomical observatory with impressive instruments.",
        "Jaipur Markets: Vibrant bazaars offering traditional crafts, textiles, and jewelry."
      ],
      localCulture: "Jaipur is known for its royal heritage, vibrant festivals, and traditional arts and crafts. The city celebrates festivals like Diwali, Holi, and Teej with great zeal. The local cuisine includes spicy Rajasthani dishes and sweets like Ghewar and Paan."
    },
    { 
      name: "Delhi", 
      imgSrc: "https://media.istockphoto.com/id/898467608/photo/the-india-gate-in-delhi.jpg?s=612x612&w=0&k=20&c=gXUaUcAJf7TD8VZ1UvBfNGU0SNNzqg-xuIx_eXgL1OM=", 
      price: "Rs 30000", 
      duration: "4 days, 3 nights",
      description: "Delhi, the capital city, is a blend of ancient history and modernity. Visit historical sites such as the Red Fort, Qutub Minar, and India Gate, alongside the vibrant markets and bustling streets.",
      weather: {
        summer: "Extremely hot with temperatures ranging from 30°C to 45°C.",
        monsoon: "Heavy rainfall with temperatures ranging from 25°C to 35°C.",
        winter: "Cool and pleasant with temperatures ranging from 5°C to 25°C."
      },
      bestTimeToVisit: "The best time to visit Delhi is during the winter months from October to March when the weather is cooler and more comfortable for exploring the city.",
      topAttractions: [
        "Red Fort: A historic fort and UNESCO World Heritage site.",
        "Qutub Minar: A towering minaret and ancient monument.",
        "India Gate: A war memorial dedicated to soldiers.",
        "Humayun's Tomb: A beautiful Mughal-era tomb and UNESCO site.",
        "Lotus Temple: A modern architectural marvel and place of worship."
      ],
      localCulture: "Delhi is a melting pot of cultures with a rich history and diverse population. The city is known for its vibrant street food scene, bustling markets, and cultural landmarks. Festivals like Diwali, Holi, and Eid are celebrated with grandeur."
    },
    { 
      name: "Manali", 
      imgSrc: "https://images.unsplash.com/photo-1712388430474-ace0c16051e2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuYWxpfGVufDB8fDB8fHww", 
      price: "Rs 14000", 
      duration: "6 days, 5 nights",
      description: "Manali is a beautiful hill station known for its scenic landscapes, adventure activities, and serene environment. Enjoy skiing, paragliding, and explore nearby places like Solang Valley and Rohtang Pass.",
      weather: {
        summer: "Pleasant with temperatures ranging from 10°C to 25°C.",
        monsoon: "Moderate to heavy rainfall with temperatures ranging from 15°C to 20°C.",
        winter: "Cold with temperatures ranging from -10°C to 10°C and heavy snowfall."
      },
      bestTimeToVisit: "The best time to visit Manali is from March to June for pleasant weather and from December to February for snowfall and winter sports.",
      topAttractions: [
        "Solang Valley: A popular spot for adventure activities and stunning views.",
        "Rohtang Pass: A high mountain pass offering panoramic views and snow activities.",
        "Hadimba Temple: An ancient temple surrounded by cedar forests.",
        "Old Manali: A charming area with traditional architecture and local cafes.",
        "Manu Temple: A historic temple dedicated to the sage Manu."
      ],
      localCulture: "Manali is known for its vibrant local culture and traditions. The town celebrates festivals like Lohri and Dussehra with enthusiasm. The local cuisine includes Himachali dishes such as Chana Madra and Siddu."
    },
    { 
      name: "Shimla", 
      imgSrc: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/12/pti28-12-2020-000048b-1609160104.jpg", 
      price: "Rs 11000", 
      duration: "5 days, 4 nights",
      description: "Shimla, the summer capital of British India, offers pleasant weather and stunning views. Explore the Ridge, Mall Road, and Jakhoo Temple, and enjoy a peaceful retreat in this charming hill station.",
      weather: {
        summer: "Pleasant with temperatures ranging from 15°C to 30°C.",
        monsoon: "Moderate rainfall with temperatures ranging from 15°C to 25°C.",
        winter: "Cold with temperatures ranging from -5°C to 10°C and occasional snowfall."
      },
      bestTimeToVisit: "The best time to visit Shimla is from March to June for pleasant weather and from December to February for snowfall and winter activities.",
      topAttractions: [
        "The Ridge: A popular open space offering stunning views and local shops.",
        "Mall Road: A bustling street with shops, cafes, and restaurants.",
        "Jakhoo Temple: An ancient temple dedicated to Lord Hanuman, located on a hill.",
        "Christ Church: A historic church with beautiful stained glass windows.",
        "Lakkar Bazaar: A local market known for wooden crafts and souvenirs."
      ],
      localCulture: "Shimla has a colonial charm and is known for its scenic beauty and cultural heritage. Festivals like Christmas and New Year's Eve are celebrated with various events and festivities. The local cuisine includes Himachali specialties like Chana Madra and Aloo Keema."
    },
    { 
      name: "Goa", 
      imgSrc: "https://plus.unsplash.com/premium_photo-1697729594707-0fc9e51c8eed?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29hfGVufDB8fDB8fHww", 
      price: "Rs 13000", 
      duration: "6 days, 5 nights",
      description: "Goa is famous for its beautiful beaches, vibrant nightlife, and Portuguese heritage. Enjoy the sandy shores, lively markets, and historical forts that make Goa a popular destination.",
      weather: {
        summer: "Hot and humid with temperatures ranging from 25°C to 35°C.",
        monsoon: "Heavy rainfall with temperatures ranging from 24°C to 30°C.",
        winter: "Pleasant with temperatures ranging from 20°C to 32°C."
      },
      bestTimeToVisit: "The best time to visit Goa is during the winter months from November to February when the weather is cooler and ideal for beach activities.",
      topAttractions: [
        "Baga Beach: A popular beach known for its lively atmosphere and water sports.",
        "Fort Aguada: A historic fort offering panoramic views of the Arabian Sea.",
        "Basilica of Bom Jesus: A UNESCO World Heritage site and an important church in Old Goa.",
        "Anjuna Flea Market: A vibrant market known for its eclectic mix of goods and souvenirs.",
        "Calangute Beach: A famous beach with a wide range of activities and dining options."
      ],
      localCulture: "Goa is known for its laid-back lifestyle, vibrant nightlife, and Portuguese-influenced architecture. Festivals like Carnival and Shigmo are celebrated with colorful parades and traditional performances. The local cuisine includes seafood and dishes like Goan Fish Curry and Bebinca."
    },
    { 
      name: "Kashmir", 
      imgSrc: "https://static.wanderon.in/wp-content/uploads/2023/08/untitled-design-2023-08-21t122156.343-min.png", 
      price: "Rs 13500", 
      duration: "7 days, 6 nights",
      description: "Kashmir, known as 'Paradise on Earth,' offers breathtaking views of snow-capped mountains, lush gardens, and pristine lakes. Visit Srinagar, Gulmarg, and Pahalgam to experience its natural beauty.",
      weather: {
        summer: "Pleasant with temperatures ranging from 15°C to 30°C.",
        monsoon: "Moderate to heavy rainfall with temperatures ranging from 15°C to 25°C.",
        winter: "Cold with temperatures ranging from -10°C to 5°C and heavy snowfall."
      },
      bestTimeToVisit: "The best time to visit Kashmir is during the summer months from April to October for pleasant weather and from December to February for snow activities.",
      topAttractions: [
        "Dal Lake: A picturesque lake known for its houseboats and shikara rides.",
        "Gulmarg: A popular hill station and skiing destination.",
        "Pahalgam: A scenic town with beautiful landscapes and trekking opportunities.",
        "Shankaracharya Temple: An ancient temple offering panoramic views of Srinagar.",
        "Mughal Gardens: Beautiful gardens like Shalimar Bagh and Nishat Bagh showcasing Mughal architecture."
      ],
      localCulture: "Kashmir is known for its stunning natural beauty and rich cultural heritage. The region celebrates festivals like Eid and Navratri with traditional events and rituals. The local cuisine includes dishes like Rogan Josh, Yakhni, and Kahwa (Kashmiri tea)."
    },
    { 
      name: "Udaipur", 
      imgSrc: "https://plus.unsplash.com/premium_photo-1661964079694-ccfaf7dc8028?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dWRhaXB1cnxlbnwwfHwwfHx8MA%3D%3D", 
      price: "Rs 12500", 
      duration: "5 days, 4 nights",
      description: "Udaipur, the City of Lakes, is known for its stunning palaces, lakes, and temples. Explore the City Palace, Lake Pichola, and enjoy boat rides in this romantic city.",
      weather: {
        summer: "Hot with temperatures ranging from 25°C to 40°C.",
        monsoon: "Moderate rainfall with temperatures ranging from 25°C to 35°C.",
        winter: "Pleasant with temperatures ranging from 10°C to 25°C."
      },
      bestTimeToVisit: "The best time to visit Udaipur is during the winter months from October to March when the weather is cooler and more comfortable for sightseeing.",
      topAttractions: [
        "City Palace: A magnificent palace complex with museums and courtyards.",
        "Lake Pichola: A beautiful lake offering boat rides and views of the City Palace.",
        "Jag Mandir: An island palace located on Lake Pichola.",
        "Saheliyon-ki-Bari: A garden with fountains, lotus pools, and marble elephants.",
        "Jagdish Temple: An ancient Hindu temple with intricate carvings."
      ],
      localCulture: "Udaipur is known for its royal heritage and artistic traditions. The city celebrates festivals like Diwali and Teej with traditional music, dance, and local crafts. The local cuisine includes Rajasthani dishes such as Dal Baati Churma and Gatte Ki Sabzi."
    },
    { 
      name: "Kerala", 
      imgSrc: "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?cs=srgb&dl=pexels-godson-bright-352845-962464.jpg&fm=jpg", 
      price: "Rs 11000", 
      duration: "6 days, 5 nights",
      description: "Kerala, God's Own Country, is famous for its backwaters, beaches, and lush green landscapes. Visit the backwaters of Alleppey, the hill stations of Munnar, and the beaches of Kovalam.",
      weather: {
        summer: "Hot and humid with temperatures ranging from 25°C to 35°C.",
        monsoon: "Heavy rainfall with temperatures ranging from 23°C to 30°C.",
        winter: "Pleasant with temperatures ranging from 20°C to 30°C."
      },
      bestTimeToVisit: "The best time to visit Kerala is from October to March when the weather is pleasant and ideal for exploring the backwaters and beaches.",
      topAttractions: [
        "Backwaters of Alleppey: Scenic backwaters with houseboat cruises.",
        "Munnar: A hill station known for its tea plantations and scenic beauty.",
        "Kovalam Beach: A popular beach destination with golden sands and water sports.",
        "Periyar Wildlife Sanctuary: A sanctuary with diverse flora and fauna.",
        "Athirappilly Falls: A majestic waterfall often referred to as the 'Niagara of India.'"
      ],
      localCulture: "Kerala is known for its rich cultural heritage, including traditional dance forms like Kathakali and Mohiniyattam. The state celebrates festivals like Onam and Vishu with grand feasts and cultural performances. Kerala's cuisine includes dishes like Kerala Sadya and Puttu."
    },
];

export default destinations;
