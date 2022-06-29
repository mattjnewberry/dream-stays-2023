let stays = [
  {
    id: "mondrian",
    name: "Mondrian London",
    img: "https://hotelbusiness.com/wp-content/uploads/2020/10/Mondrian-Shoreditch.jpg",
    description:
      "Exposed brick and hardwood floors, the trendy rooms come with Wi-Fi, minibars and original artwork, plus marble bathrooms with rainfall and steam showers",
    nearby: ["London eye", "Buckingham Palace", "Tower of London"],
  },
  {
    id: "lanesborough",
    name: "The Lanesborough",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJCvMkR-gvXVjMh0WmfMq-SBLSi4O2EDzqiA&usqp=CAU",
    description:
      "Refined rooms feature free Wi-Fi, marble bathrooms and flat-screens; some have balconies with park views. Suites add living rooms, dressing areas and whirlpool tubs. A lavish 4-bedroom suite includes a chauffeur-driven car service.",
    nearby: ["Hyde Park Corner tube station", " Knightsbridge", "Tower Bridge"],
  },
  {
    id: "theritz",
    name: "The Ritz",
    img: "https://media.cntraveler.com/photos/5f6198aa987090832029b181/16:9/w_2560%2Cc_limit/ritz-london-exterior.jpg",
    description:
      "We are London’s most iconic hotel. A five star haven on Piccadilly that is famous the world over for its historic elegance, impeccable service, impressive suites, and legendary Afternoon Tea.",
    nearby: ["London eye", "Buckingham Palace", "Tower Bridge"],
  },
];

export function getStays() {
  return stays;
}

export function getStay(id) {
  return stays.find((stay) => stay.id === id);
}
