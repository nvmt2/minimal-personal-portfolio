export interface ItineraryDay {
  day: number;
  title: string;
  location: string;
  activities: string[];
  travelNotes: string;
}

export interface JourneyHighlight {
  title: string;
  description: string;
  tag: string;
}

export interface Journey {
  slug: string;
  title: string;
  destination: string;
  region: string;
  duration: string;
  travelStyle: string;
  season: string;
  coverImage: string;
  shortDescription: string;
  isFeatured?: boolean;
  story: {
    overview: string;
    whyChosen: string;
    memorableMoments: string[];
    observations: string;
  };
  highlights: JourneyHighlight[];
  galleryImages: { url: string; caption: string }[];
  itinerary: ItineraryDay[];
}

export const JOURNEYS: Journey[] = [
  {
    slug: 'ha-giang-loop',
    title: 'The Karst Monoliths: Ha Giang Frontier Loop',
    destination: 'Dong Van Karst Plateau, Ha Giang',
    region: 'Northern Vietnam',
    duration: '5 Days / 4 Nights',
    travelStyle: 'Two-Wheeled Road Expedition & High-Pass Trekking',
    season: 'Autumn / October – November',
    coverImage: `${import.meta.env.BASE_URL}images/travel_mountain_pass_1793609549351.jpg`,
    shortDescription:
      'Riding the legendary Ma Pi Leng pass carved into vertical limestone walls above the emerald waters of the Nho Que canyon.',
    isFeatured: true,
    story: {
      overview:
        'Carved along the northern frontier bordering Yunnan, the Dong Van Karst Plateau is a UNESCO Global Geopark where tectonic plates folded limestone ridges into thousands of razor-sharp pinnacles. Navigating these snaking mountain passes by motorbike is one of the most visceral, humbling travel experiences on Earth.',
      whyChosen:
        'I needed to unplug from screens and test my limits against raw topography. In Ha Giang, there is zero space for multitasking: every hairpin turn demands complete presence, sharp reflex, and sheer respect for the mountain.',
      memorableMoments: [
        'Sitting on an ancient limestone boulder at Tu San Chasm at dawn, listening to the morning wind whistle through thousand-meter-deep canyon walls.',
        'Sharing hot corn wine and freshly steamed Thang Co with an H\'Mong family in Lung Cu under a roof made of pine shingles.',
        'Descending into the emerald mist of the Nho Que River by wooden boat as morning fog parted to reveal sheer vertical rock faces.',
        'Reaching the Lung Cu Flag Tower, standing at the northernmost pinnacle of Vietnam overlooking rolling hills in both nations.',
      ],
      observations:
        'What struck me deepest was the resilience of the local ethnic communities. Where modern engineering struggles to build a single retaining wall, families have farmed corn between limestone cracks for four hundred years with grace and deep joy.',
    },
    highlights: [
      {
        title: 'Ma Pi Leng Pass & Tu San Canyon',
        description: 'Known as the King of Vietnam Passes, a 20-kilometer highway chiselled directly out of cliff sides overlooking an 800-meter vertical drop.',
        tag: 'Iconic Pass',
      },
      {
        title: 'Dong Van Ancient Quarter',
        description: 'A 100-year-old stone town with traditional clay-walled houses, lantern-lit night markets, and authentic mountain coffee.',
        tag: 'Heritage',
      },
      {
        title: 'Vuong Family H\'Mong Palace',
        description: 'A fortified wooden mansion blending French, Chinese, and traditional H\'Mong architecture tucked into a secluded pine valley.',
        tag: 'Architecture',
      },
      {
        title: 'Nho Que River Kayaking',
        description: 'Gliding along pristine turquoise waters squeezed between the deepest limestone rift in Southeast Asia.',
        tag: 'Adventure',
      },
    ],
    galleryImages: [
      {
        url: `${import.meta.env.BASE_URL}images/travel_mountain_pass_1793609549351.jpg`,
        caption: 'The snaking road approaching Ma Pi Leng viewpoint in golden hour light.',
      },
      {
        url: `${import.meta.env.BASE_URL}images/story_quiet_reflection_1793609549605.jpg`,
        caption: 'Quiet morning journal notes before departing the homestay.',
      },
      {
        url: `${import.meta.env.BASE_URL}images/travel_coastal_cove_1793609549760.jpg`,
        caption: 'Geological contrasts across Vietnam’s limestone landscapes.',
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Ascent to Quan Ba & Yen Minh Pines',
        location: 'Ha Giang City -> Quan Ba -> Yen Minh (100 km)',
        activities: [
          'Depart Ha Giang city after sunrise check-in.',
          'Ascend the Bac Sum incline to Quan Ba Twin Mountains and the Heaven’s Gate viewpoint.',
          'Ride through dense pine forests into the quiet mountain valley of Yen Minh.',
        ],
        travelNotes: 'Keep headlights on as fog can descend rapidly over the high ridge by 3 PM.',
      },
      {
        day: 2,
        title: 'Across the Karst Plateau to Dong Van',
        location: 'Yen Minh -> Tham Ma Pass -> Sa Phin -> Dong Van (85 km)',
        activities: [
          'Conquer the nine curves of the famous Tham Ma Pass.',
          'Tour the centenary palace of the King of the H\'Mong in Sa Phin valley.',
          'Arrive in Dong Van town; sunset stroll through the old French-era stone market.',
        ],
        travelNotes: 'Roads are well-paved but gravel patches occur frequently around seasonal roadworks.',
      },
      {
        day: 3,
        title: 'The Great Spine of Ma Pi Leng',
        location: 'Dong Van -> Ma Pi Leng -> Meo Vac (50 km)',
        activities: [
          'Early departure to catch morning cloud inversion at the skywalk viewpoint.',
          'Hike the White Cliff trail for panoramic vistas of Tu San Canyon.',
          'Boat excursion along the Nho Que River; overnight in a traditional stilt homestay in Pa Vi ethnic cultural village.',
        ],
        travelNotes: 'This is the most visually staggering leg of the journey. Allocate at least 3 hours for photography.',
      },
      {
        day: 4,
        title: 'The Bamboo Passes of Du Gia',
        location: 'Meo Vac -> Mau Due -> Du Gia Valley (75 km)',
        activities: [
          'Navigate rugged rural passes past terraced rice fields and river fords.',
          'Swim in the crystal-clear cascades of Du Gia Waterfall.',
          'Communal dinner and storytelling with local Tay hosts.',
        ],
        travelNotes: 'Section between Mau Due and Du Gia has steeper dirt sections; safe riding skills required.',
      },
      {
        day: 5,
        title: 'Valley Descent to Ha Giang',
        location: 'Du Gia -> Bac Me -> Ha Giang City (90 km)',
        activities: [
          'Morning mountain tea with village elders.',
          'Gentle descent alongside the Gam River back to Ha Giang City.',
          'Celebratory dinner and evening sleeper transit back to Hanoi/Da Nang.',
        ],
        travelNotes: 'Arrive in Ha Giang by 4:00 PM to return riding gear and refresh before onward journey.',
      },
    ],
  },
  {
    slug: 'coastal-cliffs-and-coves',
    title: 'Wild Shores: Secret Coves of South Central Coast',
    destination: 'Phu Yen & Vinh Hy Bay',
    region: 'South Central Vietnam',
    duration: '4 Days / 3 Nights',
    travelStyle: 'Coastal Kayaking, Snorkeling & Slow Living',
    season: 'Spring / March – June',
    coverImage: `${import.meta.env.BASE_URL}images/travel_coastal_cove_1793609549760.jpg`,
    shortDescription:
      'Raw basalt sea columns, turquoise coves untouched by resort crowds, and sunrise coffee over calm fishing harbors.',
    isFeatured: false,
    story: {
      overview:
        'While southern beaches draw millions, the rugged coastline connecting Phu Yen and Nui Chua National Park remains an untamed wilderness of jagged basalt cliffs, arid coastal savannahs, and secluded lagoons.',
      whyChosen:
        'A journey about stripping away noise. When kayaking into sheltered sea caves with only the rhythm of the paddle and the crash of swells, you regain a profound sense of scale.',
      memorableMoments: [
        'Watching dawn illuminate the interlocking polygonal basalt columns of Ganh Da Dia, formed by prehistoric lava meeting the sea.',
        'Free-diving among untouched coral shelves in Vinh Hy Bay with local fishermen as guides.',
        'Pitching a lightweight bivouac on a secluded sandbank accessible only by tide.',
      ],
      observations:
        'The sea teaches you to surrender schedule. You move only when the tide permits and rest when the sun is at its zenith.',
    },
    highlights: [
      {
        title: 'Ganh Da Dia Basalt Formations',
        description: 'World-rare geological marvel of thousands of interlocking vertical basalt columns descending like giant stepping stones into the sea.',
        tag: 'Geology',
      },
      {
        title: 'Vinh Hy National Biosphere Bay',
        description: 'Deep natural fjord surrounded by the arid thorn forests of Nui Chua, boasting coral reefs with over 300 species.',
        tag: 'Marine Ecology',
      },
      {
        title: 'Mui Dien Light Station',
        description: 'Perched on high cliffs catching the very first ray of sunlight on the mainland Vietnamese coast.',
        tag: 'Sunrise Point',
      },
    ],
    galleryImages: [
      {
        url: `${import.meta.env.BASE_URL}images/travel_coastal_cove_1793609549760.jpg`,
        caption: 'The crystalline hidden cove discovered along the Nui Chua coastal trail.',
      },
      {
        url: `${import.meta.env.BASE_URL}images/portrait_developer_1793609546397.jpg`,
        caption: 'Reflecting on coastal rhythms between design iterations.',
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Basalt Horizons of Phu Yen',
        location: 'Tuy Hoa -> Ganh Da Dia -> O Loan Lagoon',
        activities: [
          'Arrival at Tuy Hoa and coastal drive to the ancient volcanic columns of Ganh Da Dia.',
          'Local blood cockle seafood feast on the quiet waters of O Loan Lagoon.',
          'Sunset over the quiet dunes of Bai Xep.',
        ],
        travelNotes: 'Visit Ganh Da Dia at late afternoon for warm amber light across the basalt blocks.',
      },
      {
        day: 2,
        title: 'The First Sunrise at Mui Dien',
        location: 'Mui Dien -> Vung Ro Bay -> Cam Ranh Pass',
        activities: [
          'Pre-dawn hike to the 1890 French lighthouse at Dai Lanh Cape.',
          'Explore historic sunken weapon ship relic sites in deep-water Vung Ro Bay.',
          'Scenic coastal transit heading south through arid scrubland pass.',
        ],
        travelNotes: 'Pack a headlamp for the 25-minute pre-dawn climb to the lighthouse.',
      },
      {
        day: 3,
        title: 'Kayaking the Coves of Vinh Hy',
        location: 'Vinh Hy Bay & Nui Chua National Reserve',
        activities: [
          'Morning sea kayaking into secluded limestone grottoes.',
          'Snorkeling along the outer reef barrier with a local marine guide.',
          'Fresh catch grilled over open embers on a private beach.',
        ],
        travelNotes: 'Sun protection and dry bags for electronics are essential.',
      },
      {
        day: 4,
        title: 'Savannah Ridges & Departure',
        location: 'Nui Chua -> Phan Rang -> Return',
        activities: [
          'Hike along the arid rocky mountain trail overlooking the turquoise coastline.',
          'Visit traditional Cham ceramic craft village of Bau Truc.',
          'Return transit.',
        ],
        travelNotes: 'Morning trail offers the best breezes before midday heat.',
      },
    ],
  },
  {
    slug: 'mist-over-sapa-ridges',
    title: 'High Ridges & Pine Forests: Northwest Mountain Passes',
    destination: 'Hoang Lien Son & O Quy Ho Pass',
    region: 'Northwest Vietnam',
    duration: '3 Days / 2 Nights',
    travelStyle: 'Alpine Trekking & Timber Lodging',
    season: 'Winter / December – February',
    coverImage: `${import.meta.env.BASE_URL}images/story_quiet_reflection_1793609549605.jpg`,
    shortDescription:
      'Chasing dramatic golden sunsets over Vietnam’s highest mountain pass and waking up to clouds rolling across timber deck verandas.',
    isFeatured: false,
    story: {
      overview:
        'The Hoang Lien Son range houses Indochina\'s loftiest peaks. Beyond commercial tourist centers lies a quiet wilderness of mossy dwarf forests, bamboo thickets, and deep valleys blanketed in seasonal sea of clouds.',
      whyChosen:
        'To experience the crisp stillness of high-altitude winter. The brisk mountain air provides immediate mental clarity.',
      memorableMoments: [
        'Standing on the edge of O Quy Ho Pass at 2,000 meters as a crimson sun melted into an infinite ocean of white cloud.',
        'Drinking smoky wild Shan Tuyet black tea brewed with mountain spring water around an open hearth.',
        'Waking up to frost glittering on pine needles outside a timber cabin.',
      ],
      observations:
        'In the high mountains, time is marked not by digital calendars, but by the drift of clouds and the shifting angle of sunlight.',
    },
    highlights: [
      {
        title: 'O Quy Ho Pass (Cloud Pass)',
        description: 'The longest and highest mountain pass in Vietnam at 2,000m elevation with legendary golden hour cloud seas.',
        tag: 'High Pass',
      },
      {
        title: 'Muong Hoa Valley Remote Trails',
        description: 'Trekking path winding through centuries-old stone petroglyphs and terraced mountain ridges.',
        tag: 'Trek',
      },
      {
        title: 'Ancient Shan Tuyet Tea Trees',
        description: 'Centuries-old tea trees growing wild on foggy slopes harvested exclusively by local Red Dao farmers.',
        tag: 'Culture',
      },
    ],
    galleryImages: [
      {
        url: `${import.meta.env.BASE_URL}images/travel_mountain_pass_1793609549351.jpg`,
        caption: 'The dramatic serpentine curves across the northern high pass.',
      },
      {
        url: `${import.meta.env.BASE_URL}images/story_quiet_reflection_1793609549605.jpg`,
        caption: 'Quiet hearthside tea during winter mist in the timber lodge.',
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Ascent into the Northwest Range',
        location: 'Lao Cai -> Sapa Valley -> Ban Khoang',
        activities: [
          'Arrival by sleeper train; breakfast of warm pho and mountain coffee.',
          'Scenic ascent through Ban Khoang cardamon forests.',
          'Check-in at an eco-timber lodge overlooking the valley.',
        ],
        travelNotes: 'Winter temperatures can drop to 4°C at night; thermal layers required.',
      },
      {
        day: 2,
        title: 'The Great O Quy Ho Sunset',
        location: 'Silver Waterfall -> Heaven’s Gate -> O Quy Ho Pass',
        activities: [
          'Hike through bamboo and rhododendron canopy trails in Hoang Lien National Park.',
          'Ascend to the highest pass viewpoint for the famous sunset cloud inversion.',
          'Traditional herbal bath prepared by Red Dao practitioners.',
        ],
        travelNotes: 'Sunset peaks between 5:15 PM and 5:45 PM; arrive at the pass by 4:30 PM.',
      },
      {
        day: 3,
        title: 'Terrace Walks & Valley Departure',
        location: 'Ta Phin -> Lao Cai -> Return',
        activities: [
          'Morning walk through quiet pine groves and ancient monastery ruins.',
          'Tea tasting with an elder tea artisan.',
          'Descent back to Lao Cai station.',
        ],
        travelNotes: 'Comfortable trail running shoes or trekking boots recommended.',
      },
    ],
  },
];
