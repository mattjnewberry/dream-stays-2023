//import { Carousel } from "bootstrap"

let stays = [
  {
    id: "theritz",
    name: "The Ritz",
    img: "https://media.cntraveler.com/photos/5f6198aa987090832029b181/16:9/w_2560%2Cc_limit/ritz-london-exterior.jpg",
    description:
      "We are London’s most iconic hotel. A five star haven on Piccadilly that is famous the world over for its historic elegance, impeccable service, impressive suites, and legendary Afternoon Tea.",
    nearby: ["London eye", "Buckingham Palace", "Tower Bridge"],
    rating: "Rating: 4.2",
    price: "£480",
    activities: ['ballroom dancing, sight-seeing, going on multiple rides'],
    reviews: ["3.8: Nice free food they got, could have a little more drink varieties."],
    reviews2: ["3.9: I disagree with above ^^^ Nice drinks they got, could have a little more food varities"]
  },
  {
    id: "gb",
    name: "Garza Blanca (Fictional)",
    img: "https://th.bing.com/th/id/R.817fdd6325ba1229b98eeb780ddea145?rik=nO5fdZHAk%2fTZPw&riu=http%3a%2f%2fwww.garzablancaresort.com%2fblog%2fwp-content%2fuploads%2f2016%2f02%2fGarzaBlanca-12.jpg&ehk=%2fV5dN2lxaksH7IbfVEls84Azj4fjPY8dqkev7AcEgeM%3d&risl=&pid=ImgRaw&r=0",
    description:
      "The hotel is characterised by its luxurious facilities, the extent of the suites and the warmth in the service. It has a total of 164, junior suites, full suites with 1 or 2 bedrooms, as well as penthouses beside a beautiful pool and beach access. Fully renovated in 2010, this charming beach hotel welcomes guests in the lobby with 24-hour reception. Facilities include air conditioning, a hotel safe, currency exchange, cloakroom, lift access to the upper floors, room service and a car park. Guests can wine and dine in the bar or restaurant.",
    nearby: ["10 minutes from the centre and Malecón", "traditional centre of Vallarta ", "sandy beach"],
    rating: "Rating: 5.0",
    price: "£950",
    activities: ['eating'],
    reviews: ["example review here"],
    reviews2: ["example review here"]
  },
  {
    id: "tfp",
    name: "Taj Falaknuma Palace (Fictional)",
    img: "https://www.worldblaze.in/wp-content/uploads/2014/12/Taj-Falaknuma-Palace-Hyderabad.jpg",
    description:
      "One of the most highly acclaimed luxury hotels in India is Taj Falaknuma Palace, which was earlier occupied by the Royal Family of Rajasthan and has now been leased to the Taj Group. The majestic hotel still holds the glory and magnificence of its royal background.",
    nearby: ["London eye", "Buckingham Palace", "Tower Bridge"],
    rating: "Rating: 3.8",
    price: "£1000",
    activities: ['riding cars'], 
    reviews: ["example review here"],
    reviews2: ["example review here"]
  },
];

export function getStays() {
  return stays;
}

export function getStay(id) {
  return stays.find((stay) => stay.id === id);
}
