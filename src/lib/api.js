const API_KEY = 'de92a12c1e13a2202d5e2be6d47caf42'
const BASE_URL = 'https://api.themoviedb.org/3'

async function callMovieAPI(url) {
  const response = await fetch(`${BASE_URL}${url}`)
  if (!response.ok) throw new Error(response.statusText)
  return response.json()
}

// export function getUpcomingMovies() {
//   return callMovieAPI(`/movie/upcoming?api_key=${API_KEY}`);
// }

// export function getMovieDetails(id) {
//   return callMovieAPI(`/movie/${id}?api_key=${API_KEY}&append_to_response=similar`);
// }

function getUpcomingMovies() {
  // return callMovieAPI(`/movie/upcoming?api_key=${API_KEY}`);
  // return movieData.json()
  return movieData
}

function getMovieDetails(id) {
  // return callMovieAPI(`/movie/${id}?api_key=${API_KEY}&append_to_response=similar`);
  return similarMovies
}
function getSimilarMoviesByMovieID(id) {
  // return callMovieAPI(`/movie/${id}?api_key=${API_KEY}&append_to_response=similar`);
  return similarMovies.similar
}
const similarMovies = {
  adult: false,
  backdrop_path: '/wD2kUCX1Bb6oeIb2uz7kbdfLP6k.jpg',
  belongs_to_collection: {
    id: 1079486,
    name: 'Winnie-the-Pooh (Horror) Collection',
    poster_path: null,
    backdrop_path: null,
  },
  budget: 100000,
  genres: [
    {
      id: 27,
      name: 'Horror',
    },
    {
      id: 53,
      name: 'Thriller',
    },
  ],
  homepage: '',
  id: 980078,
  imdb_id: 'tt19623240',
  original_language: 'en',
  original_title: 'Winnie the Pooh: Blood and Honey',
  overview:
    'Christopher Robin is headed off to college and he has abandoned his old friends, Pooh and Piglet, which then leads to the duo embracing their inner monsters.',
  popularity: 2757.999,
  poster_path: '/s3u70iZ1mpY6W9rW1S6BxDMRNQt.jpg',
  production_companies: [
    {
      id: 155744,
      logo_path: null,
      name: 'Jagged Edge Productions',
      origin_country: 'GB',
    },
    {
      id: 148176,
      logo_path: null,
      name: 'ITN Studios',
      origin_country: '',
    },
  ],
  production_countries: [
    {
      iso_3166_1: 'GB',
      name: 'United Kingdom',
    },
  ],
  release_date: '2023-01-27',
  revenue: 3200000,
  runtime: 84,
  spoken_languages: [
    {
      english_name: 'English',
      iso_639_1: 'en',
      name: 'English',
    },
  ],
  status: 'Released',
  tagline: "This ain't no bedtime story.",
  title: 'Winnie the Pooh: Blood and Honey',
  video: false,
  vote_average: 5.913,
  vote_count: 357,
  similar: {
    page: 1,
    results: [
      {
        adult: false,
        backdrop_path: '/yi0tfJBw9icvlWTXvjLqpEeSTia.jpg',
        genre_ids: [27, 53, 80],
        id: 663,
        original_language: 'en',
        original_title: 'Saw IV',
        overview:
          "Jigsaw and his apprentice Amanda are dead. Now, upon the news of Detective Kerry's murder, two seasoned FBI profilers, Agent Strahm and Agent Perez, arrive in the terrified community to assist the veteran Detective Hoffman in sifting through Jigsaw's latest grisly remains and piecing together the puzzle. However, when SWAT Commander Rigg is abducted and thrust into a game, the last officer untouched by Jigsaw has but ninety minutes to overcome a series of demented traps and save an old friend...or face the deadly consequences.",
        popularity: 44.056,
        poster_path: '/lQlsFvRl0Qy1FSGl6yVpT2fLIsA.jpg',
        release_date: '2007-10-25',
        title: 'Saw IV',
        video: false,
        vote_average: 6.153,
        vote_count: 3183,
      },
      {
        adult: false,
        backdrop_path: '/jMBpJFRtrtIXymer93XLavPwI3P.jpg',
        genre_ids: [28, 53, 878],
        id: 679,
        original_language: 'en',
        original_title: 'Aliens',
        overview:
          "When Ripley's lifepod is found by a salvage crew over 50 years later, she finds that terra-formers are on the very planet they found the alien species. When the company sends a family of colonists out to investigate her story—all contact is lost with the planet and colonists. They enlist Ripley and the colonial marines to return and search for answers.",
        popularity: 51.544,
        poster_path: '/r1x5JGpyqZU8PYhbs4UcrO1Xb6x.jpg',
        release_date: '1986-07-18',
        title: 'Aliens',
        video: false,
        vote_average: 7.92,
        vote_count: 8344,
      },
      {
        adult: false,
        backdrop_path: '/z6fmvhQXS5hbXSizx4DGajjBmGD.jpg',
        genre_ids: [878, 28, 53],
        id: 929,
        original_language: 'en',
        original_title: 'Godzilla',
        overview:
          "French nuclear tests irradiate an iguana into a giant monster that viciously attacks freighter ships in the Pacific Ocean. A team of experts, including Niko Tatopoulos, conclude that the oversized reptile is the culprit. Before long, the giant lizard is loose in Manhattan as the US military races to destroy the monster before it reproduces and it's spawn takes over the world.",
        popularity: 29.396,
        poster_path: '/tqQ9Nt5C1Z5PRDPxYXQ4qwy5v5V.jpg',
        release_date: '1998-05-20',
        title: 'Godzilla',
        video: false,
        vote_average: 5.611,
        vote_count: 3401,
      },
      {
        adult: false,
        backdrop_path: '/2ILGrVCOQyiClPQkS6qSqp7FFvY.jpg',
        genre_ids: [18, 53, 878],
        id: 1902,
        original_language: 'es',
        original_title: 'Abre los ojos',
        overview:
          'A very handsome man finds the love of his life, but he suffers an accident and needs to have his face rebuilt by surgery after it is severely disfigured.',
        popularity: 14.407,
        poster_path: '/orjSy9xEGI9jxrtodACH04gANmF.jpg',
        release_date: '1997-12-19',
        title: 'Open Your Eyes',
        video: false,
        vote_average: 7.467,
        vote_count: 867,
      },
      {
        adult: false,
        backdrop_path: '/8gDHMslJaqDWJInDQBfX4pwwEOh.jpg',
        genre_ids: [12, 36, 28],
        id: 1911,
        original_language: 'en',
        original_title: 'The 13th Warrior',
        overview:
          'A Muslim ambassador exiled from his homeland, Ahmad ibn Fadlan finds himself in the company of Vikings. While the behavior of the Norsemen initially offends ibn Fadlan, the more cultured outsider grows to respect the tough, if uncouth, warriors. During their travels together, ibn Fadlan and the Vikings get word of an evil presence closing in, and they must fight the frightening and formidable force, which was previously thought to exist only in legend.',
        popularity: 24.996,
        poster_path: '/ip5FmurIOdOyI1wFY2nXVMze3lC.jpg',
        release_date: '1999-08-13',
        title: 'The 13th Warrior',
        video: false,
        vote_average: 6.659,
        vote_count: 1578,
      },
      {
        adult: false,
        backdrop_path: '/qbVCChwbGWDAgsCXKZxyjBrRiWx.jpg',
        genre_ids: [28, 53],
        id: 1991,
        original_language: 'en',
        original_title: 'Death Proof',
        overview:
          "Austin's hottest DJ, Jungle Julia, sets out into the night to unwind with her two friends Shanna and Arlene. Covertly tracking their moves is Stuntman Mike, a scarred rebel leering from behind the wheel of his muscle car, revving just feet away.",
        popularity: 22.384,
        poster_path: '/vtu6H4NWnQVqEp3aanUq3hNeeot.jpg',
        release_date: '2007-05-22',
        title: 'Death Proof',
        video: false,
        vote_average: 6.82,
        vote_count: 4476,
      },
      {
        adult: false,
        backdrop_path: '/1AZz3SSYB3i9FOfc8r3enewSsRM.jpg',
        genre_ids: [53, 878, 9648],
        id: 431,
        original_language: 'en',
        original_title: 'Cube',
        overview:
          "A group of strangers find themselves trapped in a maze-like prison. It soon becomes clear that each of them possesses the peculiar skills necessary to escape, if they don't wind up dead first.",
        popularity: 18.049,
        poster_path: '/iNwm6fpDqQ4WjwhYI8EW6LPklod.jpg',
        release_date: '1997-09-09',
        title: 'Cube',
        video: false,
        vote_average: 6.797,
        vote_count: 4139,
      },
      {
        adult: false,
        backdrop_path: '/vxJ08SvwomfKbpboCWynC3uqUg4.jpg',
        genre_ids: [14, 18, 80],
        id: 497,
        original_language: 'en',
        original_title: 'The Green Mile',
        overview:
          "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
        popularity: 95.359,
        poster_path: '/o0lO84GI7qrG6XFvtsPOSV7CTNa.jpg',
        release_date: '1999-12-10',
        title: 'The Green Mile',
        video: false,
        vote_average: 8.507,
        vote_count: 15228,
      },
      {
        adult: false,
        backdrop_path: '/am6ZfhUTUmcjPjjA4GIkLEJ33TN.jpg',
        genre_ids: [80, 18, 53, 27],
        id: 1248,
        original_language: 'en',
        original_title: 'Hannibal Rising',
        overview:
          'The story of the early, murderous roots of the cannibalistic killer, Hannibal Lecter – from his hard-scrabble Lithuanian childhood, where he witnesses the repulsive lengths to which hungry soldiers will go to satiate themselves, through his sojourn in France, where as a med student he hones his appetite for the kill.',
        popularity: 5.715,
        poster_path: '/7FTDMQoac0uqJUquZk4KenDzLMZ.jpg',
        release_date: '2007-02-06',
        title: 'Hannibal Rising',
        video: false,
        vote_average: 6.229,
        vote_count: 1924,
      },
      {
        adult: false,
        backdrop_path: '/ofIPLZqX5epOP2iQMR6rNJMetBv.jpg',
        genre_ids: [27],
        id: 1690,
        original_language: 'en',
        original_title: 'Hostel',
        overview:
          'Three backpackers head to a Slovakian city that promises to meet their hedonistic expectations, with no idea of the hell that awaits them.',
        popularity: 30.002,
        poster_path: '/dDrtuWUKhgUGp12kgUWuP0NpTdF.jpg',
        release_date: '2005-09-17',
        title: 'Hostel',
        video: false,
        vote_average: 5.923,
        vote_count: 3167,
      },
      {
        adult: false,
        backdrop_path: '/9BcwaJWXqHXV5D76I7ZOepFCoFk.jpg',
        genre_ids: [18, 53],
        id: 1700,
        original_language: 'en',
        original_title: 'Misery',
        overview:
          'Novelist Paul Sheldon crashes his car on a snowy Colorado road. He is found by Annie Wilkes, the "number one fan" of Paul\'s heroine Misery Chastaine. Annie is also dangerously unstable, and Paul finds himself crippled, drugged, and at her mercy.',
        popularity: 24.707,
        poster_path: '/klPO5oh1LOxiPpdDXZo1ADgpKcw.jpg',
        release_date: '1990-11-30',
        title: 'Misery',
        video: false,
        vote_average: 7.755,
        vote_count: 3988,
      },
      {
        adult: false,
        backdrop_path: '/rXXNUNbVlYzbPrzAQA436WZWpvQ.jpg',
        genre_ids: [35],
        id: 4226,
        original_language: 'en',
        original_title: 'Shriek If You Know What I Did Last Friday the Thirteenth',
        overview:
          "In this horror parody, a masked serial killer menaces the town of Bulimia Falls with various sharp objects. Attention-seeking television personality Hagitha Utslay is soon on the scene, reporting on the ever-growing body count. Former mall security guard Doughy shows up to protect the teenage population, but he's clearly not much help, allowing the murderer to pick off even more hapless kids as numerous scary movies are referenced.",
        popularity: 19.439,
        poster_path: '/m0jr23r30h8DUrX3kIu7rO3NIQp.jpg',
        release_date: '2000-10-17',
        title: 'Shriek If You Know What I Did Last Friday the Thirteenth',
        video: false,
        vote_average: 4.74,
        vote_count: 263,
      },
      {
        adult: false,
        backdrop_path: '/4PPC7fKClu0u7NTbo5xgV4vb5VD.jpg',
        genre_ids: [80, 27, 9648],
        id: 4232,
        original_language: 'en',
        original_title: 'Scream',
        overview:
          'After a series of mysterious deaths befalls their small town, an offbeat group of friends become the target of a masked killer.',
        popularity: 111.977,
        poster_path: '/3O3klyyYpAZBBE4n7IngzTomRDp.jpg',
        release_date: '1996-12-20',
        title: 'Scream',
        video: false,
        vote_average: 7.376,
        vote_count: 5730,
      },
      {
        adult: false,
        backdrop_path: '/dyqmtee83Df1rGwkRo4N8kHHC3i.jpg',
        genre_ids: [27, 9648],
        id: 4233,
        original_language: 'en',
        original_title: 'Scream 2',
        overview:
          "Away at college, Sidney thought she'd finally put the shocking murders that shattered her life behind her... until a copycat killer begins acting out a real-life sequel.",
        popularity: 77.308,
        poster_path: '/dORlVasiaDkJXTqt9bdH7nFNs6C.jpg',
        release_date: '1997-12-12',
        title: 'Scream 2',
        video: false,
        vote_average: 6.46,
        vote_count: 3377,
      },
      {
        adult: false,
        backdrop_path: '/4JOPLgIwDQ1qNI5EHiCF5hPII8Y.jpg',
        genre_ids: [27, 9648],
        id: 4234,
        original_language: 'en',
        original_title: 'Scream 3',
        overview:
          'While Sidney lives in safely guarded seclusion, bodies begin dropping around the Hollywood set of STAB 3, the latest movie based on the gruesome Woodsboro killings.',
        popularity: 67.184,
        poster_path: '/qpH8ToZVlFD1bakL04LkEKodyDI.jpg',
        release_date: '2000-02-03',
        title: 'Scream 3',
        video: false,
        vote_average: 6.0,
        vote_count: 2902,
      },
      {
        adult: false,
        backdrop_path: '/9fAkmG5f2BFpZbR24MbhB9quD9f.jpg',
        genre_ids: [27, 53],
        id: 4288,
        original_language: 'en',
        original_title: 'The Final Terror',
        overview:
          'A group of friends head out for what is expected to be a vacation of hiking, camping and a good time, but when a backwoods mama finds them on her turf, it becomes anything but a vacation.',
        popularity: 7.356,
        poster_path: '/om5bpb0gqwQxHJ2gvJzkFZ6s9Io.jpg',
        release_date: '1983-05-01',
        title: 'The Final Terror',
        video: false,
        vote_average: 5.144,
        vote_count: 60,
      },
      {
        adult: false,
        backdrop_path: '/9ljYMOLzdoGpPE7q7xRnyb8p4Tk.jpg',
        genre_ids: [35, 12, 14],
        id: 5227,
        original_language: 'en',
        original_title: 'Hercules in New York',
        overview:
          'Hercules is sent from Mount Olympus to modern-day Manhattan, where he takes up professional wrestling before getting mixed up with a gang of mobsters.',
        popularity: 13.409,
        poster_path: '/2Rad0CXcWSyjp6vidmz08QriYNZ.jpg',
        release_date: '1970-02-23',
        title: 'Hercules in New York',
        video: false,
        vote_average: 4.133,
        vote_count: 244,
      },
      {
        adult: false,
        backdrop_path: '/rsPjEr7o02mo8ex6wD2PbRwasUe.jpg',
        genre_ids: [18, 53, 878, 9648],
        id: 2675,
        original_language: 'en',
        original_title: 'Signs',
        overview:
          'A family living on a farm finds mysterious crop circles in their fields which suggests something more frightening to come.',
        popularity: 22.317,
        poster_path: '/hyZkNEbNgnciUVTyu4NZTjlCh4L.jpg',
        release_date: '2002-08-02',
        title: 'Signs',
        video: false,
        vote_average: 6.67,
        vote_count: 4921,
      },
      {
        adult: false,
        backdrop_path: '/zFIK95TbeIpSemKcJDCZMCp8kKM.jpg',
        genre_ids: [27],
        id: 5733,
        original_language: 'en',
        original_title: 'Scalps',
        overview:
          'Silly group of college science students go an dig around in an indian burial ground for artifacts. Unfortunately, one of them becomes possessed by the evil spirit of Black Claw so he must therefore slaughter all of his friends.',
        popularity: 4.069,
        poster_path: '/zWAef4geukiEEiuD2Zi0UYi6Rif.jpg',
        release_date: '1983-12-03',
        title: 'Scalps',
        video: false,
        vote_average: 4.1,
        vote_count: 33,
      },
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [27, 53],
        id: 5751,
        original_language: 'en',
        original_title: 'Sledgehammer',
        overview:
          'A young boy murders his mother and her lover with a hammer. Ten years later, a wave of teenage murders plagues the same area.',
        popularity: 1.684,
        poster_path: '/ut7uswc6mg0SYlPjD4nbRZ8AlZ5.jpg',
        release_date: '1983-07-12',
        title: 'Sledgehammer',
        video: false,
        vote_average: 3.6,
        vote_count: 14,
      },
    ],
    total_pages: 143,
    total_results: 2850,
  },
}

const movieData = {
  dates: {
    maximum: '2023-04-27',
    minimum: '2023-04-04',
  },
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: '/wD2kUCX1Bb6oeIb2uz7kbdfLP6k.jpg',
      genre_ids: [27, 53],
      id: 980078,
      original_language: 'en',
      original_title: 'Winnie the Pooh: Blood and Honey',
      overview:
        'Christopher Robin is headed off to college and he has abandoned his old friends, Pooh and Piglet, which then leads to the duo embracing their inner monsters.',
      popularity: 2757.999,
      poster_path: '/s3u70iZ1mpY6W9rW1S6BxDMRNQt.jpg',
      release_date: '2023-01-27',
      title: 'Winnie the Pooh: Blood and Honey',
      video: false,
      vote_average: 5.9,
      vote_count: 345,
    },
    {
      adult: false,
      backdrop_path: '/m1fgGSLK0WvRpzM1AmZu38m0Tx8.jpg',
      genre_ids: [28],
      id: 842945,
      original_language: 'en',
      original_title: 'Supercell',
      overview:
        'Good-hearted teenager William always lived in hope of following in his late father’s footsteps and becoming a storm chaser. His father’s legacy has now been turned into a storm-chasing tourist business, managed by the greedy and reckless Zane Rogers, who is now using William as the main attraction to lead a group of unsuspecting adventurers deep into the eye of the most dangerous supercell ever seen.',
      popularity: 2332.175,
      poster_path: '/gbGHezV6yrhua0KfAgwrknSOiIY.jpg',
      release_date: '2023-03-17',
      title: 'Supercell',
      video: false,
      vote_average: 6.5,
      vote_count: 47,
    },
    {
      adult: false,
      backdrop_path: '/a2tys4sD7xzVaogPntGsT1ypVoT.jpg',
      genre_ids: [53, 35, 80],
      id: 804150,
      original_language: 'en',
      original_title: 'Cocaine Bear',
      overview:
        'Inspired by a true story, an oddball group of cops, criminals, tourists and teens converge in a Georgia forest where a 500-pound black bear goes on a murderous rampage after unintentionally ingesting cocaine.',
      popularity: 2252.337,
      poster_path: '/gOnmaxHo0412UVr1QM5Nekv1xPi.jpg',
      release_date: '2023-02-22',
      title: 'Cocaine Bear',
      video: false,
      vote_average: 6.6,
      vote_count: 637,
    },
    {
      adult: false,
      backdrop_path: '/vSUls0b7dNhC7tJoExF1MBYWWyh.jpg',
      genre_ids: [16, 35, 10751, 12, 14],
      id: 816904,
      original_language: 'es',
      original_title: 'Momias',
      overview:
        'Through a series of unfortunate events, three mummies end up in present-day London and embark on a wacky and hilarious journey in search of an old ring belonging to the Royal Family, stolen by ambitious archaeologist Lord Carnaby.',
      popularity: 2491.772,
      poster_path: '/qVdrYN8qu7xUtsdEFeGiIVIaYd.jpg',
      release_date: '2023-01-05',
      title: 'Mummies',
      video: false,
      vote_average: 7.2,
      vote_count: 84,
    },
    {
      adult: false,
      backdrop_path: '/i8dshLvq4LE3s0v8PrkDdUyb1ae.jpg',
      genre_ids: [28, 53, 80],
      id: 603692,
      original_language: 'en',
      original_title: 'John Wick: Chapter 4',
      overview:
        'With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.',
      popularity: 2344.829,
      poster_path: '/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg',
      release_date: '2023-03-22',
      title: 'John Wick: Chapter 4',
      video: false,
      vote_average: 8.1,
      vote_count: 741,
    },
    {
      adult: false,
      backdrop_path: '/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg',
      genre_ids: [16, 12, 10751, 14, 35],
      id: 502356,
      original_language: 'en',
      original_title: 'The Super Mario Bros. Movie',
      overview:
        'While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.',
      popularity: 1870.298,
      poster_path: '/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg',
      release_date: '2023-04-05',
      title: 'The Super Mario Bros. Movie',
      video: false,
      vote_average: 8.3,
      vote_count: 26,
    },
    {
      adult: false,
      backdrop_path: '/zM9RGbJBZ3UNpFOabcRqh0iVAYP.jpg',
      genre_ids: [53, 9648, 27, 14],
      id: 631842,
      original_language: 'en',
      original_title: 'Knock at the Cabin',
      overview:
        'While vacationing at a remote cabin, a young girl and her two fathers are taken hostage by four armed strangers who demand that the family make an unthinkable choice to avert the apocalypse. With limited access to the outside world, the family must decide what they believe before all is lost.',
      popularity: 975.697,
      poster_path: '/dm06L9pxDOL9jNSK4Cb6y139rrG.jpg',
      release_date: '2023-02-01',
      title: 'Knock at the Cabin',
      video: false,
      vote_average: 6.4,
      vote_count: 1194,
    },
    {
      adult: false,
      backdrop_path: '/2rVkDZFLN6DI5PAoraoe9m4IRMN.jpg',
      genre_ids: [12, 14, 35],
      id: 493529,
      original_language: 'en',
      original_title: 'Dungeons & Dragons: Honor Among Thieves',
      overview:
        'A charming thief and a band of unlikely adventurers undertake an epic heist to retrieve a lost relic, but things go dangerously awry when they run afoul of the wrong people.',
      popularity: 606.071,
      poster_path: '/6LuXaihVIoJ5FeSiFb7CZMtU7du.jpg',
      release_date: '2023-03-23',
      title: 'Dungeons & Dragons: Honor Among Thieves',
      video: false,
      vote_average: 7.5,
      vote_count: 182,
    },
    {
      adult: false,
      backdrop_path: '/uNK5dHo6HJpwk1BPcDHHyvX7ZLz.jpg',
      genre_ids: [28, 53],
      id: 983768,
      original_language: 'en',
      original_title: 'Black Warrant',
      overview:
        'A semi-retired special ops assassin and a DEA agent cross paths on separate missions to stop a cyber terrorist organization that has built a dangerous machine threatening to attack the power grid and bring catastrophe to the world.',
      popularity: 609.485,
      poster_path: '/A7vFFZHbDyxfjuYKzJwruTnwwjT.jpg',
      release_date: '2023-01-09',
      title: 'Black Warrant',
      video: false,
      vote_average: 5.1,
      vote_count: 11,
    },
    {
      adult: false,
      backdrop_path: '/5Y5pz0NX7SZS9036I733F7uNcwK.jpg',
      genre_ids: [27, 9648],
      id: 758323,
      original_language: 'en',
      original_title: "The Pope's Exorcist",
      overview:
        "Father Gabriele Amorth, Chief Exorcist of the Vatican, investigates a young boy's terrifying possession and ends up uncovering a centuries-old conspiracy the Vatican has desperately tried to keep hidden.",
      popularity: 759.681,
      poster_path: '/4IjRR2OW2itjQWQnmlUzvwLz9DQ.jpg',
      release_date: '2023-04-05',
      title: "The Pope's Exorcist",
      video: false,
      vote_average: 8.4,
      vote_count: 5,
    },
    {
      adult: false,
      backdrop_path: '/r7Dfg9aRZ78gJsmDlCirIIlNH3d.jpg',
      genre_ids: [18],
      id: 785084,
      original_language: 'en',
      original_title: 'The Whale',
      overview:
        'A reclusive English teacher suffering from severe obesity attempts to reconnect with his estranged teenage daughter for one last chance at redemption.',
      popularity: 415.518,
      poster_path: '/jQ0gylJMxWSL490sy0RrPj1Lj7e.jpg',
      release_date: '2022-12-09',
      title: 'The Whale',
      video: false,
      vote_average: 8,
      vote_count: 1791,
    },
    {
      adult: false,
      backdrop_path: '/A2avUoNFstnBhAnHiogXQs4c9Bt.jpg',
      genre_ids: [18, 27, 9648],
      id: 772515,
      original_language: 'es',
      original_title: 'Huesera',
      overview:
        "Valeria's joy at becoming a first-time mother is quickly taken away when she's cursed by a sinister entity. As danger closes in, she's forced deeper into a chilling world of dark magic that threatens to consume her.",
      popularity: 403.396,
      poster_path: '/zgpj76z9byUgcWnxLDmtZ3XqfvN.jpg',
      release_date: '2023-02-10',
      title: 'Huesera: The Bone Woman',
      video: false,
      vote_average: 5.8,
      vote_count: 166,
    },
    {
      adult: false,
      backdrop_path: '/v2LilmCylr3bL9TCZSj6syjowZh.jpg',
      genre_ids: [35, 18],
      id: 937278,
      original_language: 'en',
      original_title: 'A Man Called Otto',
      overview:
        'When a lively young family moves in next door, grumpy widower Otto Anderson meets his match in a quick-witted, pregnant woman named Marisol, leading to an unlikely friendship that turns his world upside down.',
      popularity: 380.6,
      poster_path: '/130H1gap9lFfiTF9iDrqNIkFvC9.jpg',
      release_date: '2022-12-28',
      title: 'A Man Called Otto',
      video: false,
      vote_average: 7.9,
      vote_count: 947,
    },
    {
      adult: false,
      backdrop_path: '/isGINC82PZmMblEJP2rBAvSlX37.jpg',
      genre_ids: [16, 10751, 12, 35],
      id: 599019,
      original_language: 'ru',
      original_title: 'Большое путешествие. Специальная доставка',
      overview:
        'It has been a year since Mic Mic and Oscar returned from their incredible adventure. And now, after a diabolical plan by Vulture to sabotage the delivery of the Grizzly cub to his opponent in the American presidential elections, Mic Mic, Oscar, Panda teenager and Stork set off on another great adventure as they ride a zeppelin to return little Grizzly to its rightful parents and save the American elections and the whole continent from an erupting volcano.',
      popularity: 336.876,
      poster_path: '/dabXVfrAFfhDte8XVemom3mTJog.jpg',
      release_date: '2022-10-07',
      title: 'Big Trip 2: Special Delivery',
      video: false,
      vote_average: 6.5,
      vote_count: 54,
    },
    {
      adult: false,
      backdrop_path: '/xTsERrOCW15OIYl5aPX7Jbj38wu.jpg',
      genre_ids: [28, 18, 36],
      id: 724495,
      original_language: 'en',
      original_title: 'The Woman King',
      overview:
        'The story of the Agojie, the all-female unit of warriors who protected the African Kingdom of Dahomey in the 1800s with skills and a fierceness unlike anything the world has ever seen, and General Nanisca as she trains the next generation of recruits and readies them for battle against an enemy determined to destroy their way of life.',
      popularity: 294.492,
      poster_path: '/438QXt1E3WJWb3PqNniK0tAE5c1.jpg',
      release_date: '2022-09-16',
      title: 'The Woman King',
      video: false,
      vote_average: 7.8,
      vote_count: 1375,
    },
    {
      adult: false,
      backdrop_path: '/94TIUEhuwv8PhdIADEvSuwPljS5.jpg',
      genre_ids: [10752, 28],
      id: 840326,
      original_language: 'fi',
      original_title: 'Sisu',
      overview:
        'Deep in the wilderness of Lapland, Aatami Korpi is searching for gold. From time to time, the overflight of bombers and the distant sounds of war can be heard in the autumn night. Finally, the hard work is rewarded and the gold dust in the pan grows into gold chunks, and Aatami sets out to take his gold treasure to the nearest city. After he stumbles upon Nazi patrol led by SS Obersturmführer Bruno Helldorf, a breathtaking and gold-hungry chase through the destroyed and mined Lapland wilderness begins.',
      popularity: 317.341,
      poster_path: '/dHx5yuBb05U9vNaNhIBD7jWyxPk.jpg',
      release_date: '2023-01-27',
      title: 'Sisu',
      video: false,
      vote_average: 7.2,
      vote_count: 9,
    },
    {
      adult: false,
      backdrop_path: '/cHywnrFfuDhDSST7lppYOAADmnt.jpg',
      genre_ids: [35],
      id: 933419,
      original_language: 'en',
      original_title: 'Champions',
      overview:
        'A stubborn and hotheaded minor league basketball coach is forced to train a Special Olympics team when he is sentenced to community service.',
      popularity: 286.24,
      poster_path: '/i46Gke8Kg3uH2K5eM0rDo4HzPtq.jpg',
      release_date: '2023-03-09',
      title: 'Champions',
      video: false,
      vote_average: 6.6,
      vote_count: 49,
    },
    {
      adult: false,
      backdrop_path: '/eSVu1FvGPy86TDo4hQbpuHx55DJ.jpg',
      genre_ids: [53, 878, 28],
      id: 700391,
      original_language: 'en',
      original_title: '65',
      overview:
        "After a catastrophic crash on an unknown planet, pilot Mills quickly discovers he's actually stranded on Earth…65 million years ago. Now, with only one chance at rescue, Mills and the only other survivor, Koa, must make their way across an unknown terrain riddled with dangerous prehistoric creatures in an epic fight to survive.",
      popularity: 249.999,
      poster_path: '/uMMIeMVk1TCG3CZilpxbzFh0JKT.jpg',
      release_date: '2023-03-02',
      title: '65',
      video: false,
      vote_average: 5.6,
      vote_count: 162,
    },
    {
      adult: false,
      backdrop_path: '/sFGENDTUNOuDbVufxksCkrDtuaT.jpg',
      genre_ids: [27, 53],
      id: 713704,
      original_language: 'en',
      original_title: 'Evil Dead Rise',
      overview:
        'Two sisters find an ancient book that gives birth to bloodthirsty demons that run amok in a Los Angeles apartment building and thrusts them into a primal battle for survival as they face the most nightmarish version of family imaginable.',
      popularity: 267.727,
      poster_path: '/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg',
      release_date: '2023-04-19',
      title: 'Evil Dead Rise',
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: '/ceYZCBfwbBwSpGJ6PapNVw5jqLG.jpg',
      genre_ids: [16, 18, 12, 14],
      id: 916224,
      original_language: 'ja',
      original_title: 'すずめの戸締まり',
      overview:
        'Suzume, 17, lost her mother as a little girl. On her way to school, she meets a mysterious young man. But her curiosity unleashes a calamity that endangers the entire population of Japan, and so Suzume embarks on a journey to set things right.',
      popularity: 239.508,
      poster_path: '/vIeu8WysZrTSFb2uhPViKjX9EcC.jpg',
      release_date: '2022-11-11',
      title: 'Suzume',
      video: false,
      vote_average: 8.2,
      vote_count: 48,
    },
  ],
  total_pages: 28,
  total_results: 548,
}
const upcomingMovies = movieData
export {
  similarMovies,
  movieData,
  upcomingMovies,
  getUpcomingMovies,
  getMovieDetails,
  getSimilarMoviesByMovieID,
}