const PHOTOS = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
  "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa",
  "https://images.unsplash.com/photo-1474898856510-884a2c0be546",
  "https://images.unsplash.com/photo-1526234362653-3b75a0c07438",
  "https://images.unsplash.com/photo-1505275350441-83dcda8eeef5",
  "https://images.unsplash.com/photo-1520209268518-aec60b8bb5ca",
  "https://images.unsplash.com/photo-1521917441209-e886f0404a7b",
  "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d",
  "https://images.unsplash.com/photo-1504940892017-d23b9053d5d4",
  "https://images.unsplash.com/photo-1532634781-dc90b4952f08",
];

export const img = (path, width = 800, quality = 72) =>
  `${path}?auto=format&fit=crop&w=${width}&q=${quality}`;

const galleryFor = (index) =>
  [0, 3, 5, 7, 9].map((offset) => PHOTOS[(index + offset) % PHOTOS.length]);

const PRICE_BANDS = {
  $: { label: "$", range: "$12–24", note: "Everyday", est: 18 },
  $$: { label: "$$", range: "$25–45", note: "Mid-range", est: 35 },
  $$$: { label: "$$$", range: "$46–80", note: "Upscale", est: 63 },
  $$$$: { label: "$$$$", range: "$85+", note: "Fine dining", est: 95 },
};

const HOURS_STANDARD = {
  Monday: null,
  Tuesday: ["11:30", "22:00"],
  Wednesday: ["11:30", "22:00"],
  Thursday: ["11:30", "22:00"],
  Friday: ["11:30", "23:30"],
  Saturday: ["10:00", "23:30"],
  Sunday: ["10:00", "21:00"],
};

const HOURS_DINNER = {
  Monday: ["17:00", "23:00"],
  Tuesday: ["17:00", "23:00"],
  Wednesday: ["17:00", "23:00"],
  Thursday: ["17:00", "23:30"],
  Friday: ["17:00", "00:30"],
  Saturday: ["16:00", "00:30"],
  Sunday: null,
};

const HOURS_ALLDAY = {
  Monday: ["10:00", "22:00"],
  Tuesday: ["10:00", "22:00"],
  Wednesday: ["10:00", "22:00"],
  Thursday: ["10:00", "22:00"],
  Friday: ["10:00", "00:00"],
  Saturday: ["09:00", "00:00"],
  Sunday: ["09:00", "21:00"],
};

const REVIEW_POOL = [
  {
    author: "Amelia Hart",
    date: "October 2025",
    rating: 5,
    text: "The dry-aged ribeye arrived with a crust I've only seen in steakhouse documentaries. Our server read the room perfectly — attentive early, invisible once the wine landed.",
  },
  {
    author: "Daniel Okafor",
    date: "September 2025",
    rating: 5,
    text: "Booked a corner table for an anniversary and they remembered the occasion without being asked. The bone marrow starter alone justifies the trip across town.",
  },
  {
    author: "Priya Raman",
    date: "September 2025",
    rating: 4,
    text: "Genuinely excellent food, though the room gets loud after eight. Ask for the banquette along the back wall and you'll have a much calmer evening.",
  },
  {
    author: "Marcus Vestergaard",
    date: "August 2025",
    rating: 5,
    text: "Third visit this year. Consistency is the hardest thing in this business and they nail it every single time. The smoked brisket has ruined every other brisket for me.",
  },
  {
    author: "Sofia Lindqvist",
    date: "August 2025",
    rating: 5,
    text: "Came in as a walk-in on a Tuesday and still got treated like a regular. Lovely natural wine list, and the kitchen happily adjusted a dish for my allergy.",
  },
  {
    author: "Theo Mensah",
    date: "July 2025",
    rating: 4,
    text: "Portions are generous and the sides are not an afterthought — the mac and cheese is a proper dish. Dessert menu could use one more option.",
  },
  {
    author: "Clara Bennett",
    date: "July 2025",
    rating: 5,
    text: "The open kitchen makes the whole meal feel like a show. Sat at the counter, chatted with the grill chef, left with three new cooking tips and a very full stomach.",
  },
  {
    author: "Jonas Meyer",
    date: "June 2025",
    rating: 5,
    text: "Worth every cent. The char on the short rib, the depth of that pepper sauce — this is a kitchen that clearly cares. Reserve well ahead for weekends.",
  },
  {
    author: "Naomi Castillo",
    date: "June 2025",
    rating: 4,
    text: "Beautiful room, warm lighting, great playlist that never intrudes. Service slowed a touch when a big party arrived, but the food more than made up for it.",
  },
  {
    author: "Idris Farooq",
    date: "May 2025",
    rating: 5,
    text: "Took visiting family here and every one of them has asked to go back. That is the only review metric that really matters.",
  },
  {
    author: "Elena Rossi",
    date: "May 2025",
    rating: 5,
    text: "The burger is deceptively simple and completely perfect. Crisp edges, soft bun, no unnecessary theatre. I think about it more often than I'd like to admit.",
  },
  {
    author: "Hugo Lambert",
    date: "April 2025",
    rating: 4,
    text: "Solid from start to finish. Cocktails at the bar while waiting were a highlight — ask whoever is shaking to make you something off-menu.",
  },
];

const reviewsFor = (index, count = 4) =>
  Array.from({ length: count }, (_, i) => REVIEW_POOL[(index * 3 + i) % REVIEW_POOL.length]);

const distributionFor = (average, total) => {
  const weights = [
    Math.max(0, average - 3.6) ** 2 + 0.55,
    Math.max(0, 4.9 - average) * 0.5 + 0.16,
    Math.max(0, 4.9 - average) * 0.22 + 0.05,
    Math.max(0, 4.9 - average) * 0.1 + 0.02,
    Math.max(0, 4.9 - average) * 0.08 + 0.015,
  ];
  const sum = weights.reduce((a, b) => a + b, 0);
  const counts = weights.map((w) => Math.round((w / sum) * total));
  counts[0] += total - counts.reduce((a, b) => a + b, 0);
  return [5, 4, 3, 2, 1].map((stars, i) => ({ stars, count: Math.max(0, counts[i]) }));
};

const BASE = [
  {
    id: 1,
    name: "Western Grill House",
    venueType: "Grill house",
    tagline: "Open-flame classics in a converted 1920s freight depot",
    averagePrice: "$$",
    averageRating: 4.3,
    totalReviews: 120,
    foodCategory: ["Steaks", "Burgers", "Salads", "Sandwiches"],
    phoneNumber: "+1 (234) 567-890",
    location: "123 Main Street, City A, Country",
    neighborhood: "Depot District",
    mapLocation: { latitude: 40.7128, longitude: -74.006 },
    chef: "Marta Delgado",
    since: 1992,
    seats: 84,
    hours: HOURS_STANDARD,
    amenities: ["outdoor", "bar", "parking", "wifi", "wheelchair", "kids"],
    description:
      "Three decades on the same corner, and the grill has never once been allowed to cool. Western Grill House cooks over live oak in an open kitchen that anchors the room, sending out charred, generous plates to a dining room of exposed brick and worn brass. It is the kind of place that treats a Tuesday dinner with the same seriousness as a Saturday celebration.",
    signatures: [
      { name: "Oak-Fired Ribeye", price: 38, note: "16oz, aged 28 days, bone-in" },
      { name: "Depot Double Burger", price: 19, note: "Dry-aged beef, smoked cheddar, house pickles" },
      { name: "Charred Caesar", price: 14, note: "Grilled romaine, anchovy dressing, rye crumb" },
    ],
    badge: "Local institution",
  },
  {
    id: 2,
    name: "BBQ Haven",
    venueType: "Barbecue pit",
    tagline: "Sixteen-hour smoke, served until it runs out",
    averagePrice: "$$$",
    averageRating: 4.8,
    totalReviews: 280,
    foodCategory: ["BBQ Ribs", "Grilled Chicken", "Pulled Pork", "Cornbread"],
    phoneNumber: "+1 (987) 654-321",
    location: "456 Broad Street, City B, Country",
    neighborhood: "Broad & Vine",
    mapLocation: { latitude: 34.0522, longitude: -118.2437 },
    chef: "Ray Whitfield",
    since: 2004,
    seats: 120,
    hours: HOURS_ALLDAY,
    amenities: ["outdoor", "live-music", "bar", "parking", "kids", "pet-friendly"],
    description:
      "The smokers are lit at four in the morning and the pit team does not leave until the last rib is off. BBQ Haven is loud, communal and unapologetically messy — long shared tables, butcher paper instead of plates, and a rotating list of cuts written on a chalkboard that shortens as the night goes on. Come early if you want brisket.",
    signatures: [
      { name: "Full Rack, Cherry Smoke", price: 42, note: "Rubbed, rested, sauced on the side" },
      { name: "Burnt Ends Board", price: 28, note: "Point-cut brisket, pickled onion, white bread" },
      { name: "Skillet Cornbread", price: 11, note: "Honey butter, flaked salt" },
    ],
    badge: "Editor's pick",
  },
  {
    id: 3,
    name: "Burger Point",
    venueType: "Burger counter",
    tagline: "A short menu done exactly right, since day one",
    averagePrice: "$",
    averageRating: 4.0,
    totalReviews: 90,
    foodCategory: ["Burgers", "Fries", "Milkshakes"],
    phoneNumber: "+1 (112) 233-4455",
    location: "789 Center Street, City C, Country",
    neighborhood: "Center Square",
    mapLocation: { latitude: 51.5074, longitude: -0.1278 },
    chef: "Nico Braithwaite",
    since: 2016,
    seats: 40,
    hours: HOURS_ALLDAY,
    amenities: ["outdoor", "wifi", "kids", "wheelchair", "pet-friendly"],
    description:
      "Six items on the board and nothing on it is filler. Burger Point smashes its patties to order on a flat-top you can watch from the counter, salts the fries twice, and spins milkshakes thick enough to hold a spoon upright. Neon glow, chrome stools, ten-minute turnaround — the whole thing is built for people who know exactly what they want.",
    signatures: [
      { name: "The Point Smash", price: 13, note: "Double patty, American cheese, secret sauce" },
      { name: "Double-Salted Fries", price: 6, note: "Beef dripping, rosemary" },
      { name: "Malted Vanilla Shake", price: 8, note: "Spun to order, real vanilla bean" },
    ],
    badge: "Great value",
  },
  {
    id: 4,
    name: "Smokehouse Grill",
    venueType: "Smokehouse",
    tagline: "Hardwood pit cooking with a wine list to match",
    averagePrice: "$$$",
    averageRating: 4.5,
    totalReviews: 150,
    foodCategory: ["Smoked Brisket", "Ribs", "Pulled Pork", "Mac and Cheese"],
    phoneNumber: "+1 (112) 233-4455",
    location: "789 Oak Street, City D, Country",
    neighborhood: "Oak Hill",
    mapLocation: { latitude: 35.6895, longitude: 139.6917 },
    chef: "Elena Vaughn",
    since: 2009,
    seats: 96,
    hours: HOURS_DINNER,
    amenities: ["bar", "private-room", "parking", "valet", "fireplace", "wine-cellar"],
    description:
      "Smokehouse Grill takes barbecue technique and gives it a dining-room setting: linen, low light, a fireplace at the back, and a cellar deep enough to make a sommelier linger. The pit still does the heavy lifting — everything passes through hardwood smoke before it is plated — but the plating itself is precise, restrained and quietly confident.",
    signatures: [
      { name: "Twelve-Hour Brisket", price: 46, note: "Post oak, black pepper bark" },
      { name: "Smoked Beef Rib", price: 52, note: "Single bone, salsa verde" },
      { name: "Truffle Mac", price: 16, note: "Aged gruyère, brioche crumb" },
    ],
    badge: "Sommelier's choice",
  },
  {
    id: 5,
    name: "SteakHouse Central",
    venueType: "Steakhouse",
    tagline: "The city's benchmark for beef, on the 21st floor",
    averagePrice: "$$$$",
    averageRating: 4.9,
    totalReviews: 300,
    foodCategory: ["Steaks", "Seafood", "Salads", "Cocktails"],
    phoneNumber: "+1 (987) 654-3210",
    location: "101 Pine Street, City E, Country",
    neighborhood: "Pine Financial",
    mapLocation: { latitude: 37.7749, longitude: -122.4194 },
    chef: "Auguste Rinaldi",
    since: 1987,
    seats: 140,
    hours: HOURS_DINNER,
    amenities: ["bar", "private-room", "valet", "wine-cellar", "fireplace", "wheelchair"],
    description:
      "Twenty-one floors up, with the skyline doing half the work and the kitchen doing the rest. SteakHouse Central runs its own aging room, breaks down whole primals in house, and finishes every cut in a 900°F broiler. The service is old-school in the best sense: jackets, silver trolleys, and a maître d' who will remember your name the second time.",
    signatures: [
      { name: "Dry-Aged Porterhouse", price: 138, note: "For two, 45-day aged, bordelaise" },
      { name: "Chilled Seafood Tower", price: 96, note: "Oyster, lobster, king crab, mignonette" },
      { name: "Central Martini", price: 22, note: "Stirred tableside, blue-cheese olive" },
    ],
    badge: "Top rated",
  },
  {
    id: 6,
    name: "Grill Master's Delight",
    venueType: "Neighbourhood grill",
    tagline: "Neighbourhood grill with a serious weekend brunch",
    averagePrice: "$$",
    averageRating: 4.2,
    totalReviews: 80,
    foodCategory: ["Grilled Chicken", "Burgers", "Steak Fajitas"],
    phoneNumber: "+1 (112) 233-4455",
    location: "456 Maple Street, City F, Country",
    neighborhood: "Maple Row",
    mapLocation: { latitude: 40.7128, longitude: -74.006 },
    chef: "Tomás Iglesias",
    since: 2014,
    seats: 72,
    hours: HOURS_STANDARD,
    amenities: ["outdoor", "live-music", "kids", "parking", "wifi", "pet-friendly"],
    description:
      "The kind of grill you end up at every other Sunday without ever quite planning it. Sizzling fajita platters cross the room at head height, the patio fills up the moment the sun is out, and a two-piece band plays from the corner on weekend evenings. Unfussy, warm, and reliably good.",
    signatures: [
      { name: "Sizzling Steak Fajitas", price: 27, note: "Skirt steak, charred peppers, warm tortillas" },
      { name: "Half Chicken, Chimichurri", price: 24, note: "Brined 24 hours, grilled over charcoal" },
      { name: "Maple Street Brunch Burger", price: 18, note: "Fried egg, bacon jam, hash brown" },
    ],
    badge: "Neighbourhood favourite",
  },
  {
    id: 7,
    name: "Smoke & Grill Haven",
    venueType: "Smokehouse & bakery",
    tagline: "Where the pit team and the pastry team share equal billing",
    averagePrice: "$$$",
    averageRating: 4.6,
    totalReviews: 180,
    foodCategory: ["Smoked Brisket", "Pulled Pork", "Ribs", "Mac and Cheese"],
    phoneNumber: "+1 (112) 233-4455",
    location: "789 Oak Street, City I, Country",
    neighborhood: "Old Oak",
    mapLocation: { latitude: 37.7749, longitude: -122.4194 },
    chef: "Dermot Shaw",
    since: 2011,
    seats: 88,
    hours: HOURS_STANDARD,
    amenities: ["outdoor", "bar", "private-room", "parking", "wifi", "wheelchair"],
    description:
      "Half smokehouse, half bakery — an unusual split that turns out to make perfect sense. The same wood-fired oven that finishes the ribs bakes the buns, the cobbler and the morning pastries, so the whole building smells like both at once. Sit near the pass if you want to watch the two halves negotiate.",
    signatures: [
      { name: "Pit Platter for Two", price: 68, note: "Brisket, ribs, pork, four sides" },
      { name: "Wood-Oven Cobbler", price: 12, note: "Stone fruit, buttermilk ice cream" },
      { name: "Haven Mac", price: 15, note: "Three cheeses, smoked breadcrumb" },
    ],
    badge: "Great for groups",
  },
  {
    id: 8,
    name: "The Rib Shack",
    venueType: "Barbecue shack",
    tagline: "No linen, no reservations for two, no complaints",
    averagePrice: "$$",
    averageRating: 4.3,
    totalReviews: 120,
    foodCategory: ["BBQ Ribs", "Burgers", "Fries", "Onion Rings"],
    phoneNumber: "+1 (112) 233-4455",
    location: "123 Main Street, City G, Country",
    neighborhood: "Main & 4th",
    mapLocation: { latitude: 34.0522, longitude: -118.2437 },
    chef: "Junie Alvarez",
    since: 2018,
    seats: 56,
    hours: HOURS_ALLDAY,
    amenities: ["outdoor", "parking", "kids", "pet-friendly", "wifi"],
    description:
      "A corrugated roof, picnic benches and a smoker the size of a small car parked out front. The Rib Shack is deliberately rough around the edges and precise where it counts: the rub is measured to the gram, the ribs come off the pit on a timer, and the onion rings are battered to order. Bring napkins, expect a queue.",
    signatures: [
      { name: "Half Rack, House Rub", price: 24, note: "Hickory smoked, glazed at the pass" },
      { name: "Shack Stack Burger", price: 17, note: "Double patty, onion ring, bourbon sauce" },
      { name: "Beer-Battered Rings", price: 9, note: "Cut and fried to order" },
    ],
    badge: "Crowd favourite",
  },
  {
    id: 9,
    name: "Famous Grill House",
    venueType: "Grill house",
    tagline: "A big room, a big grill, and a menu that spans both",
    averagePrice: "$$",
    averageRating: 4.5,
    totalReviews: 300,
    foodCategory: ["BBQ", "Burgers", "Grilled Steaks", "Salads"],
    phoneNumber: "+1 (112) 233-4455",
    location: "321 Pine Street, City J, Country",
    neighborhood: "Pine Quarter",
    mapLocation: { latitude: 40.7128, longitude: -74.006 },
    chef: "Yusuf Karim",
    since: 2001,
    seats: 160,
    hours: HOURS_STANDARD,
    amenities: ["outdoor", "bar", "live-music", "private-room", "parking", "wheelchair", "kids"],
    description:
      "Two hundred covers a night and somehow still personal. Famous Grill House runs a double-length grill down the centre of the room, which means every table gets a view of the fire and the whole space carries the smell of it. The menu is wide on purpose — this is where a group of eight with eight different opinions actually manages to agree.",
    signatures: [
      { name: "Grill House Mixed Board", price: 54, note: "Steak, ribs, chicken, three sauces" },
      { name: "Coal-Roasted Sirloin", price: 34, note: "10oz, herb butter, bone marrow jus" },
      { name: "Chopped House Salad", price: 15, note: "Blue cheese, candied pecan, apple" },
    ],
    badge: "Great for groups",
  },
  {
    id: 10,
    name: "Smokestack & Grill",
    venueType: "Cellar smokehouse",
    tagline: "Fire-lit basement dining under the old brewery",
    averagePrice: "$$$",
    averageRating: 4.8,
    totalReviews: 400,
    foodCategory: ["Smoked Brisket", "Ribs", "Pulled Pork", "Grilled Chicken"],
    phoneNumber: "+1 (987) 654-3210",
    location: "567 Cedar Street, City K, Country",
    neighborhood: "Cedar Brewery",
    mapLocation: { latitude: 34.0522, longitude: -118.2437 },
    chef: "Ines Moreau",
    since: 2019,
    seats: 64,
    hours: HOURS_DINNER,
    amenities: ["bar", "live-music", "private-room", "fireplace", "wine-cellar", "valet"],
    description:
      "Down a set of iron stairs beneath a decommissioned brewery, Smokestack & Grill is all vaulted brick, candlelight and the low roar of the pit at the far end. The menu changes with whatever the butcher sends, written out each afternoon on a single card. Book ahead — there are only sixteen tables and the bar seats go fast.",
    signatures: [
      { name: "Whole Smoked Short Rib", price: 58, note: "Cedar smoke, pickled mustard seed" },
      { name: "Pit Chicken, Half", price: 32, note: "Buttermilk brine, dripping potatoes" },
      { name: "Cellar Old Fashioned", price: 19, note: "Barrel-aged in house, orange oil" },
    ],
    badge: "Editor's pick",
  },
];

export const restaurantData = BASE.map((restaurant, index) => ({
  ...restaurant,
  photos: galleryFor(index),
  price: PRICE_BANDS[restaurant.averagePrice],
  reviews: reviewsFor(index),
  ratingBreakdown: distributionFor(restaurant.averageRating, restaurant.totalReviews),
}));

export const getRestaurantById = (id) =>
  restaurantData.find((item) => String(item.id) === String(id));

export const allCategories = Object.entries(
  restaurantData.reduce((acc, r) => {
    r.foodCategory.forEach((c) => {
      acc[c] = (acc[c] || 0) + 1;
    });
    return acc;
  }, {}),
)
  .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
  .map(([category]) => category);

export const WEEKDAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const DAY_MINUTES = 24 * 60;
const LAST_SEATING_BEFORE_CLOSE = 60;
const SLOT_INTERVAL = 30;

const toMinutes = (time) => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

const weekdayIndex = (date) => (date.getDay() + 6) % 7;

const closingMinutes = (openAt, closeAt) => {
  const close = toMinutes(closeAt);
  return close <= toMinutes(openAt) ? close + DAY_MINUTES : close;
};

export const openStatus = (restaurant, now = new Date()) => {
  const window = restaurant.hours[WEEKDAYS[weekdayIndex(now)]];
  if (!window) return { open: false, label: "Closed today" };

  const [openAt, closeAt] = window;
  const minutesNow = now.getHours() * 60 + now.getMinutes();
  const isOpen = minutesNow >= toMinutes(openAt) && minutesNow < closingMinutes(openAt, closeAt);

  return {
    open: isOpen,
    label: isOpen ? `Open until ${closeAt}` : `Opens ${openAt}`,
  };
};

export const weekdayOf = (isoDate) => {
  const [year, month, day] = isoDate.split("-").map(Number);
  return WEEKDAYS[weekdayIndex(new Date(year, month - 1, day))];
};

export const timeSlotsFor = (restaurant, isoDate) => {
  const window = restaurant.hours[weekdayOf(isoDate)];
  if (!window) return [];

  const [openAt, closeAt] = window;
  const start = toMinutes(openAt);
  const end = closingMinutes(openAt, closeAt) - LAST_SEATING_BEFORE_CLOSE;

  const slots = [];
  for (let minute = start; minute <= end; minute += SLOT_INTERVAL) {
    const inDay = minute % DAY_MINUTES;
    const hours = String(Math.floor(inDay / 60)).padStart(2, "0");
    const minutes = String(inDay % 60).padStart(2, "0");
    slots.push(`${hours}:${minutes}`);
  }
  return slots;
};

export const todayISO = () => {
  const now = new Date();
  const offset = now.getTimezoneOffset() * 60000;
  return new Date(now - offset).toISOString().slice(0, 10);
};
