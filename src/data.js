let stays = [
  {
    id: "mondrian",
    name: "Mondrian London",
    img: "https://hotelbusiness.com/wp-content/uploads/2020/10/Mondrian-Shoreditch.jpg",
    description:
      "Exposed brick and hardwood floors, the trendy rooms come with Wi-Fi, minibars and original artwork, plus marble bathrooms with rainfall and steam showers",
    nearby: ["Tower of London", "Buckingham Palace","London eye" ],
    ranking: [5.8],
    activity:['Ghost Storytelling'],
    videoUrl:'https://www.youtube.com/watch?v=MhB9Ho-0wxw'
  },
  {
    id: "lanesborough",
    name: "The Lanesborough",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJCvMkR-gvXVjMh0WmfMq-SBLSi4O2EDzqiA&usqp=CAU",
    description:
      "Refined rooms feature free Wi-Fi, marble bathrooms and flat-screens; some have balconies with park views. Suites add living rooms, dressing areas and whirlpool tubs. A lavish 4-bedroom suite includes a chauffeur-driven car service.",
    nearby: ["Hyde Park Corner tube station", " Knightsbridge", "Tower Bridge"],
    ranking:[6.8],
    activity:['Trainspotting'],
    videoUrl:'https://www.youtube.com/watch?v=2sCTkwOQsCI'
  },
  {
    id: "victoria",
    name: "The Resident Victoria",
    img: "https://media.cntraveler.com/photos/5f6198aa987090832029b181/16:9/w_2560%2Cc_limit/ritz-london-exterior.jpg",
    description:
      "Sleek rooms feature kitchenettes with Nespresso machines, along with free Wi-Fi, flat-screen TVs and laptop-size safes. All have tea and coffeemaking facilities, and designer toiletries. Upgraded rooms add sofabeds.",
    nearby: ["London eye", "Buckingham Palace", "Tower Bridge"],
    ranking: [7.3],
    activity:['Monarchy Gazing'],
    videoUrl:'https://www.youtube.com/watch?v=2yB0d4PYPqg'
  },
];

export function getStays() {
  return stays;
}

export function getStay(id) {
  return stays.find((stay) => stay.id === id);
}
