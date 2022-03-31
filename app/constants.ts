export const date = new Date('06/11/2023 13:00:00');
export const venue = {
  venueName: 'Llechwen Hall Hotel',
  address1: 'Llanfabon',
  address2: 'Nelson',
  city: 'Pontypridd',
  postcode: 'CF37 4HP',
  country: 'Wales'
}
export const arrivalTime = new Date('June 11, 2023 12:30:00');
export const ceremonyTime = new Date('June 11, 2023 13:00:00');
export const receptionTime = new Date('June 11, 2023 19:00:00');

export const starters = {
  one: {
    long: 'Leek & Potato Soup with Caerphilly cheese scone (v)',
    short: 'Leek & Potato Soup',
    id: 'soup'
  },
  two: {
    long: 'Chicken Caesar Bon Bon & Prosciutto with baby lettuce, parmesan aioli, bacon dust',
    short: 'Chicken Caesar Salad',
    id: 'salad'
  }
};

export const mains = {
  one: {
    long: 'Fillet of Beef & Potato Brisket Terrine with red onion jame, confit carrot, caramelised jus (gf)',
    short: 'Fillet of Beef',
    id: 'beef'
  },
  two: {
    long: 'Roast Breast of Chicken & Bacon Crisp with seasonal veg, roast potatoes, tomato jus (gf)',
    short: 'Roast Breast of Chicken',
    id: 'chicken'
  }
};

export const desserts = {
  one: {
    long: 'Salted Caramel Chocolate Brownie with merlyn cream gelato, strawberry purée',
    short: 'Salted Caramel Brownie',
    id: 'brownie'
  },
  two: {
    long: 'Lemon Curd Cheesecake with oat crumble, limoncello, chambord sauce (v)',
    short: 'Lemon Curd Cheesecake',
    id: 'cheesecake'
  }
};

export const hotels = [
  {
    name: 'Hilton Cardiff',
    location: {
      lat: 51.48340609965033,
      lng: -3.178546003770076
    },
    image: "https://lh5.googleusercontent.com/p/AF1QipPR_v6N1v8Xm_2EaANgGEdWe_LOgGHehVApGjpk=w408-h271-k-no",
    desc: "This fashionable hotel is a 5-minute walk from Cardiff Castle and 12 minutes on foot from Millennium Stadium, a national rugby venue.",
    address: "Kingsway, Greyfriars Rd, Cardiff CF10 3HH",
    website: "https://www.hilton.com/en/hotels/cwlhitw-hilton-cardiff/?SEO_id=GMB-EMEA-TW-CWLHITW",
    mapsLink: "https://www.google.com/maps/place/Hilton+Cardiff/@51.4762403,-3.1854807,15z/data=!4m14!1m7!2m6!1sHotels!5m3!5m2!4m1!1i2!6e3!3m5!1s0x486e1cb07d15b5ff:0x6ecede4a35fed70e!5m2!4m1!1i2!15sCgZIb3RlbHOSAQVob3RlbA"
  }, {
    name: 'Park Plaza Cardiff',
    location: {
      lat: 51.48380697521892,
      lng: -3.1763787789805966
    },
    image: "https://lh5.googleusercontent.com/p/AF1QipOG0c8GvMx2cZmFgBUWHUqDwzXyqGaiHHqrbqvZ=w408-h356-k-no",
    desc: "A 7-minute walk from Cardiff Castle, this high-end hotel in the city centre is 1.5 miles from the Wales Millennium Centre and 3 miles from Cardiff Bay.",
    address: "Greyfriars Rd, Cardiff CF10 3AL",
    website: "https://www.parkplaza.com/cardiff",
    mapsLink: "https://www.google.com/maps/place/Park+Plaza+Cardiff/@51.4762403,-3.1854807,15z/data=!3m1!5s0x486e1cba1a28e693:0x597f3d7493ffaafa!4m14!1m7!2m6!1sHotels!5m3!5m2!4m1!1i2!6e3!3m5!1s0x486e1cba12f36961:0x736e3233b782709d!5m2!4m1!1i2!15sCgZIb3RlbHOSAQVob3RlbA"
  }, {
    name: 'Mercure Cardiff Holland House Hotel & Spa',
    location: {
      lat: 51.4840074116817,
      lng: -3.1668730306465407
    },
    image: "https://lh5.googleusercontent.com/p/AF1QipNdkPVnXCTtwV2xDx0omoWx9wFxabi-DvEzRvRq=w408-h409-k-no",
    desc: "Occupying a modern glass-fronted building in the city centre, this polished hotel is an 8-minute walk from Cardiff Queen Street train station and 1.1 miles from Cardiff Castle.",
    address: "24 26 Newport Rd, Cardiff CF24 0DD",
    website: "https://all.accor.com/lien_externe.svlt?goto=fiche_hotel&code_hotel=6622&merchantid=seo-maps-GB-6622&sourceid=aw-cen&utm_medium=seo+maps&utm_source=google+Maps&utm_campaign=seo+maps&y_source=1_MTMwMTE3MDQtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D",
    mapsLink: "https://www.google.com/maps/place/Mercure+Cardiff+Holland+House+Hotel+%26+Spa/@51.4762403,-3.1854807,15z/data=!3m1!5s0x486e1cc7cf0aa87b:0x1dc165d29fc87fb8!4m14!1m7!2m6!1sHotels!5m3!5m2!4m1!1i2!6e3!3m5!1s0x486e1cc7c5fa2f63:0xcc82fee501caeb17!5m2!4m1!1i2!15sCgZIb3RlbHOSAQVob3RlbA"
  },
  {
    name: 'Cardiff Marriott Hotel',
    location: {
      lat: 51.47737917889256,
      lng: -3.175069861038435
    },
    image: "https://lh3.googleusercontent.com/proxy/XSa4QhCEMtShL7V8RsKLCVFnrhH6BPSoXTTx-BYSRSAaIm4PuO4_4SPQt_UTHAl80QsKQ71JdgGhzloq4_K87DZr88vWY7WQet5jrTGUoEsgw1QXOF753stVntF4k3N9Pd2y0jcC11lRB3BQPVCQmPQ8h85rcA=w408-h318-k-no",
    desc: "This contemporary hotel is 4 minutes' walk from Cardiff Central train station, 10 minutes on foot from Cardiff Castle and less than a mile from art exhibits at the National Museum Cardiff.",
    address: "Mill Ln, Cardiff CF10 1EZ",
    website: "https://www.marriott.com/hotels/travel/cwldt-cardiff-marriott-hotel/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2&y_source=1_MjUyMzkxOC03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
    mapsLink: "https://www.google.com/maps/place/Cardiff+Marriott+Hotel/@51.4762403,-3.1854807,15z/data=!4m14!1m7!2m6!1sHotels!5m3!5m2!4m1!1i2!6e3!3m5!1s0x486e1cb3fe31ba9b:0xc7115879de5ebbe7!5m2!4m1!1i2!15sCgZIb3RlbHOSAQVob3RlbA"
  },
  {
    name: 'Clayton Hotel Cardiff',
    location: {
      lat: 51.476397355489894,
      lng: -3.1767045438429378
    },
    image: "https://lh5.googleusercontent.com/p/AF1QipNsQwY8IJ7zkFojj7sNyVPBe-YkDjYuDHhLfuDz=w408-h306-k-no",
    desc: "A 3-minute walk from Cardiff Central train station, this modern upscale hotel in the city centre is 6 minutes' walk from the Principality Stadium and 10 minutes on foot from Cardiff Castle.",
    address: "St Mary St, Cardiff CF10 1GD",
    website: "https://ad.doubleclick.net/ddm/trackclk/N1074062.3844254CLAYTONHOTELS-OR/B24186235.278861590;dc_trk_aid=472862582;dc_trk_cid=135199307;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=",
    mapsLink: "https://www.google.com/maps/place/Clayton+Hotel+Cardiff/@51.4762403,-3.1854807,15z/data=!4m14!1m7!2m6!1sHotels!5m3!5m2!4m1!1i2!6e3!3m5!1s0x486e1cb3c1a52e99:0x37403069d8edf68f!5m2!4m1!1i2!15sCgZIb3RlbHOSAQVob3RlbA"
  },
];

export const venueLocation = [{
  name: 'Llechwen Hall Hotel',
  location: {
    lat: 51.641327116818566,
    lng:-3.308188930345505
  },
  address: "Llanfabon, Nelson, Pontypridd CF37 4HP",
  image: "https://lh5.googleusercontent.com/p/AF1QipOYwU8qaaQCmofsm2I2JEEewjD_2psLqiEYlJK8=w408-h272-k-no",
  desc: "Cardiff City Centre is Wales' commercial and leisure hub. Big-name bands perform at the Motorpoint Arena, as well as the riverside Principality Stadium, home of national rugby and football teams. Indie shops are housed in Victorian arcades like the Morgan Quarter, and Castle Arcade at the foot of Cardiff Castle, while chain brands populate the modern St. David's Dewi Sant mall. Eclectic eateries line St. Mary Street.",
  website: "http://www.llechwenhall.co.uk/",
  mapsLink: "https://www.google.com/maps/place/Llechwen+Hall+Hotel/@51.6411773,-3.3103669,17z/data=!3m1!4b1!4m8!3m7!1s0x486e17f334234d87:0x110597431c0eb44!5m2!4m1!1i2!8m2!3d51.641174!4d-3.3081782"
},
{
  name: 'Cardiff City Centre',
  location: {
    lat: 51.4800617,
    lng: -3.1823597
  },
  image: "https://lh5.googleusercontent.com/p/AF1QipOYg0r0PAGgfXRWjWiHTx3BUkzN7l2mzQ-SvN06=w408-h306-k-no",
  desc: "Cardiff City Centre is Wales' commercial and leisure hub. Big-name bands perform at the Motorpoint Arena, as well as the riverside Principality Stadium, home of national rugby and football teams. Indie shops are housed in Victorian arcades like the Morgan Quarter, and Castle Arcade at the foot of Cardiff Castle, while chain brands populate the modern St. David's Dewi Sant mall. Eclectic eateries line St. Mary Street.",
  mapsLink: "https://www.google.com/maps/place/City+Centre,+Cardiff/@51.4800617,-3.1823597,16z/data=!3m1!4b1!4m5!3m4!1s0x486e1cb73a8b9f13:0x15e730ba33eff2cd!8m2!3d51.4777861!4d-3.1776077"
}];

export const attractions = [
  {
    name: 'Cardiff City Centre',
    location: {
      lat: 51.4800617,
      lng: -3.1823597
    },
    image: "https://lh5.googleusercontent.com/p/AF1QipOYg0r0PAGgfXRWjWiHTx3BUkzN7l2mzQ-SvN06=w408-h306-k-no",
    desc: "Cardiff City Centre is Wales' commercial and leisure hub. Big-name bands perform at the Motorpoint Arena, as well as the riverside Principality Stadium, home of national rugby and football teams. Indie shops are housed in Victorian arcades like the Morgan Quarter, and Castle Arcade at the foot of Cardiff Castle, while chain brands populate the modern St. David's Dewi Sant mall. Eclectic eateries line St. Mary Street.",
    mapsLink: "https://www.google.com/maps/place/City+Centre,+Cardiff/@51.4800617,-3.1823597,16z/data=!3m1!4b1!4m5!3m4!1s0x486e1cb73a8b9f13:0x15e730ba33eff2cd!8m2!3d51.4777861!4d-3.1776077"
  }, {
    name: 'Cardiff Castle',
    location: {
      lat:  51.482473708683116,
      lng: -3.181179498869665,
    },
    image: "https://lh5.googleusercontent.com/p/AF1QipOTHueXRHJ8laJfW61MdTV68Azu-uAgw81gByiy=w408-h272-k-no",
    desc: "Victorian Gothic fantasy built on the remains of Norman and Roman ruins, with a colourful interior.",
    address: "Castle St, Cardiff CF10 3RB",
    website: "https://www.cardiffcastle.com/",
    mapsLink: "https://www.google.com/maps/place/Cardiff+Castle/@51.4822313,-3.1855541,16z/data=!4m13!1m7!3m6!1s0x486e1cb73a8b9f13:0x15e730ba33eff2cd!2sCity+Centre,+Cardiff!3b1!8m2!3d51.4777861!4d-3.1776077!3m4!1s0x486e1cafe371b7d9:0x4405a12f19bc6673!8m2!3d51.4822313!4d-3.1811767"
  }, {
    name: 'St. Fagans National Museum of History',
    location: {
      lat: 51.48754814927384,
      lng: -3.2713761054598467
    },
    image: "https://lh5.googleusercontent.com/p/AF1QipM1c5rdRMAQ_m6NCJY36WN9Hgb_7vf07T1yPoYD=w408-h271-k-no",
    desc: "Open-air history of Welsh life with ancient buildings re-erected and traditional crafters at work.",
    address: "Cardiff CF5 6XB",
    website: "https://museum.wales/stfagans/",
    mapsLink: "https://www.google.com/maps/place/St.+Fagans+National+Museum+of+History/@51.487203,-3.2767385,16z/data=!4m13!1m7!3m6!1s0x486e1abf1bc08b2b:0x654ff013c875edb9!2sSt.+Fagans+National+Museum+of+History!8m2!3d51.487203!4d-3.2723611!10e1!3m4!1s0x486e1abf1bc08b2b:0x654ff013c875edb9!8m2!3d51.487203!4d-3.2723611"
  },
  {
    name: 'National Museum of Cardiff',
    location: {
      lat: 51.48568866058839,
      lng: -3.176903545691833,
    },
    image: "https://lh6.googleusercontent.com/proxy/rcuz1AI4ysOqQcMTUFax9L2OzEqQ41JNPWyNloeROCKfDEeVvuf1DqkQsIzeZQmbvjz37mSYJD5ODPArZ544qzW6sQmiASdgKIvedQUtkIAZxY9jKPrdat2PD-amicS3mGznYWCiZeUvkHm2CWLVlmlBgHajbHs=w408-h266-k-no",
    desc: "Archaeological artefacts, art and natural history, plus visiting exhibitions in a grand setting.",
    address: "Cardiff CF10 3NP",
    website: "https://museum.wales/cardiff/",
    mapsLink: "https://www.google.com/maps/place/National+Museum+Cardiff/@51.485682,-3.1790386,17z/data=!4m13!1m7!3m6!1s0x486e1cbbcc227ecb:0x10230bd5abaab98e!2sNational+Museum+Cardiff!8m2!3d51.4855745!4d-3.176918!10e1!3m4!1s0x486e1cbbcc227ecb:0x10230bd5abaab98e!8m2!3d51.4855745!4d-3.176918"
  },
  {
    name: 'Cardiff Bay',
    location: {
      lat: 51.454610019504905,
      lng: -3.169819115543312,
    },
    image: "https://lh5.googleusercontent.com/p/AF1QipOl-5HneOPtfPGjAqfSgaxol8bWFxXgLqjg6n8Z=w408-h306-k-no",
    desc: "Celebrated urban area featuring a marina, shops & eateries, plus historic buildings & guided tours.",
    mapsLink: "https://www.google.com/maps/place/Cardiff+Bay/@51.453877,-3.1781098,15z/data=!4m14!1m8!3m7!1s0x486e1815b6750763:0x599bee84ff6f9149!2sCardiff+Bay!3b1!8m2!3d51.453877!4d-3.1693551!10e1!3m4!1s0x486e1815b6750763:0x599bee84ff6f9149!8m2!3d51.453877!4d-3.1693551"
  },
  {
    name: 'Castle Coch',
    location: {
      lat: 51.53605738165405,
      lng: -3.2544321634313276,
    },
    image: "https://lh5.googleusercontent.com/p/AF1QipOtShZercQ6W6qE-hdERYTGdNmDptMhePcbIttx=w408-h306-k-no",
    desc: "Audio tours of a grand 19th-century castle built in the gothic-revival style & surrounded by woods.",
    address: "Cardiff CF15 7JS",
    website: "https://cadw.gov.wales/visit/places-to-visit/castell-coch",
    mapsLink: "https://www.google.com/maps/place/Castell+Coch/@51.5358305,-3.2570071,17z/data=!4m13!1m7!3m6!1s0x486e1a3453043a0b:0xe8e0bda21f08e0ed!2sCastell+Coch!8m2!3d51.5358671!4d-3.2545524!10e1!3m4!1s0x486e1a3453043a0b:0xe8e0bda21f08e0ed!8m2!3d51.5358671!4d-3.2545524"
  },
  {
    name: 'Bute Park',
    location: {
      lat: 51.48459662298111,
      lng: -3.1852627303495185,
    },
    image: "https://lh5.googleusercontent.com/p/AF1QipMKTf3e64ClQQ4y2IvZVg2Reen03w9UYYmed2la=w408-h306-k-no",
    desc: "A rambling riverside beauty spot with an arboretum, Victorian gardens, friary ruins and a cafe.",
    address: "North Rd, Cardiff CF10 3ER",
    website: "https://bute-park.com/",
    mapsLink: "https://www.google.com/maps/place/Bute+Park/@51.4845766,-3.1874407,17z/data=!4m12!1m6!3m5!1s0x486e1ca45662cb93:0x41e744e3c5cba3e6!2sBute+Park!8m2!3d51.4845766!4d-3.185252!3m4!1s0x486e1ca45662cb93:0x41e744e3c5cba3e6!8m2!3d51.4845766!4d-3.185252"
  },
  {
    name: 'River cruise to Cardiff Bay',
    location: {
      lat: 51.48164683588148,
      lng: -3.185498763339345,
    },
    image: "https://lh5.googleusercontent.com/p/AF1QipO6TG3UrhkD1r4P4YpglGBj9UWMZO1_J94czwNA=w408-h306-k-no",
    address: "Cardiff CF10 3RB",
    mapsLink: "https://www.google.com/maps/place/River+Cruises/@51.4820243,-3.18802,17z/data=!4m12!1m6!3m5!1s0x486e1ca45662cb93:0x41e744e3c5cba3e6!2sBute+Park!8m2!3d51.4845766!4d-3.185252!3m4!1s0x486e1d122856bed7:0x76b835edc067f8f9!8m2!3d51.4815215!4d-3.1855157"
  },
  {
    name: 'Shopping in St. Davids Centre',
    location: {
      lat: 51.4808107290914,
      lng: -3.1747770830226125,
    },
    image: "https://lh5.googleusercontent.com/p/AF1QipOxEf0bBdfy06ojRpDaXebHyJ3MdFEXwEJfHiRb=w408-h544-k-no",
    address: "St Davids Dewi Sant, Bridge St, St Davids Centre, Cardiff CF10 2EF",
    desc: "Modern city-centre retail mall with high-street fashion shops, department stores and restaurants.",
    website: "http://www.stdavidscardiff.com/",
    mapsLink: "https://www.google.com/maps/place/St+David%E2%80%99s+Dewi+Sant/@51.4806961,-3.1773445,17z/data=!4m13!1m7!3m6!1s0x486e1cb0cfc9c401:0x267942ed0e1af3c1!2sSt+Davids+Centre,+Cardiff!3b1!8m2!3d51.480678!4d-3.1747428!3m4!1s0x486e1cb72451fee3:0xe19c25e455bc2cc1!8m2!3d51.4806961!4d-3.1751558"
  },
];
