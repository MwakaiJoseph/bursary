/**
 * Official Kenya administrative data: 47 counties and 290 constituencies.
 * Source: IEBC constituency boundaries (as provided for NG-CDF Bursary System).
 */

export type CountyConstituencies = {
  county: string;
  constituencies: readonly string[];
};

export const KENYA_COUNTIES_AND_CONSTITUENCIES: readonly CountyConstituencies[] =
  [
    {
      county: "Mombasa",
      constituencies: [
        "Changamwe",
        "Jomvu",
        "Kisauni",
        "Nyali",
        "Likoni",
        "Mvita",
      ],
    },
    {
      county: "Kwale",
      constituencies: ["Msambweni", "Lunga Lunga", "Matuga", "Kinango"],
    },
    {
      county: "Kilifi",
      constituencies: [
        "Kilifi North",
        "Kilifi South",
        "Kaloleni",
        "Rabai",
        "Ganze",
        "Malindi",
        "Magarini",
      ],
    },
    {
      county: "Tana River",
      constituencies: ["Garsen", "Galole", "Bura"],
    },
    {
      county: "Lamu",
      constituencies: ["Lamu East", "Lamu West"],
    },
    {
      county: "Taita Taveta",
      constituencies: ["Taveta", "Wundanyi", "Mwatate", "Voi"],
    },
    {
      county: "Garissa",
      constituencies: [
        "Garissa Township",
        "Balambala",
        "Lagdera",
        "Dadaab",
        "Fafi",
        "Ijara",
      ],
    },
    {
      county: "Wajir",
      constituencies: [
        "Wajir North",
        "Wajir East",
        "Tarbaj",
        "Wajir West",
        "Eldas",
        "Wajir South",
      ],
    },
    {
      county: "Mandera",
      constituencies: [
        "Mandera West",
        "Banissa",
        "Mandera North",
        "Mandera South",
        "Mandera East",
        "Lafey",
      ],
    },
    {
      county: "Marsabit",
      constituencies: ["Moyale", "North Horr", "Saku", "Laisamis"],
    },
    {
      county: "Isiolo",
      constituencies: ["Isiolo North", "Isiolo South"],
    },
    {
      county: "Meru",
      constituencies: [
        "Igembe South",
        "Igembe Central",
        "Igembe North",
        "Tigania West",
        "Tigania East",
        "North Imenti",
        "Buuri",
        "Central Imenti",
        "South Imenti",
      ],
    },
    {
      county: "Tharaka Nithi",
      constituencies: ["Maara", "Chuka/Igambang'ombe", "Tharaka"],
    },
    {
      county: "Embu",
      constituencies: ["Manyatta", "Runyenjes", "Mbeere South", "Mbeere North"],
    },
    {
      county: "Kitui",
      constituencies: [
        "Mwingi North",
        "Mwingi West",
        "Mwingi Central",
        "Kitui West",
        "Kitui Rural",
        "Kitui Central",
        "Kitui East",
        "Kitui South",
      ],
    },
    {
      county: "Machakos",
      constituencies: [
        "Masinga",
        "Yatta",
        "Kangundo",
        "Matungulu",
        "Kathiani",
        "Mavoko",
        "Machakos Town",
        "Mwala",
      ],
    },
    {
      county: "Makueni",
      constituencies: [
        "Mbooni",
        "Kilome",
        "Kaiti",
        "Makueni",
        "Kibwezi West",
        "Kibwezi East",
      ],
    },
    {
      county: "Nyandarua",
      constituencies: [
        "Kinangop",
        "Kipipiri",
        "Ol Kalou",
        "Ol Jorok",
        "Ndaragwa",
      ],
    },
    {
      county: "Nyeri",
      constituencies: [
        "Tetu",
        "Kieni",
        "Mathira",
        "Othaya",
        "Mukurweini",
        "Nyeri Town",
      ],
    },
    {
      county: "Kirinyaga",
      constituencies: ["Mwea", "Gichugu", "Ndia", "Kirinyaga Central"],
    },
    {
      county: "Murang'a",
      constituencies: [
        "Kangema",
        "Mathioya",
        "Kiharu",
        "Kigumo",
        "Maragwa",
        "Kandara",
        "Gatanga",
      ],
    },
    {
      county: "Kiambu",
      constituencies: [
        "Gatundu South",
        "Gatundu North",
        "Juja",
        "Thika Town",
        "Ruiru",
        "Githunguri",
        "Kiambu",
        "Kiambaa",
        "Kabete",
        "Kikuyu",
        "Limuru",
        "Lari",
      ],
    },
    {
      county: "Turkana",
      constituencies: [
        "Turkana North",
        "Turkana West",
        "Turkana Central",
        "Loima",
        "Turkana South",
        "Turkana East",
      ],
    },
    {
      county: "West Pokot",
      constituencies: ["Kapenguria", "Sigor", "Kacheliba", "Pokot South"],
    },
    {
      county: "Samburu",
      constituencies: ["Samburu West", "Samburu North", "Samburu East"],
    },
    {
      county: "Trans Nzoia",
      constituencies: ["Kwanza", "Endebess", "Saboti", "Kiminini", "Cherangany"],
    },
    {
      county: "Uasin Gishu",
      constituencies: [
        "Soy",
        "Turbo",
        "Moiben",
        "Ainabkoi",
        "Kapseret",
        "Kesses",
      ],
    },
    {
      county: "Elgeyo Marakwet",
      constituencies: [
        "Marakwet East",
        "Marakwet West",
        "Keiyo North",
        "Keiyo South",
      ],
    },
    {
      county: "Nandi",
      constituencies: [
        "Tinderet",
        "Aldai",
        "Nandi Hills",
        "Chesumei",
        "Emgwen",
        "Mosop",
      ],
    },
    {
      county: "Baringo",
      constituencies: [
        "Tiaty",
        "Baringo North",
        "Baringo Central",
        "Baringo South",
        "Mogotio",
        "Eldama Ravine",
      ],
    },
    {
      county: "Laikipia",
      constituencies: ["Laikipia West", "Laikipia East", "Laikipia North"],
    },
    {
      county: "Nakuru",
      constituencies: [
        "Molo",
        "Njoro",
        "Naivasha",
        "Gilgil",
        "Kuresoi South",
        "Kuresoi North",
        "Subukia",
        "Rongai",
        "Bahati",
        "Nakuru Town West",
        "Nakuru Town East",
      ],
    },
    {
      county: "Narok",
      constituencies: [
        "Kilgoris",
        "Emurua Dikirr",
        "Narok North",
        "Narok East",
        "Narok South",
        "Narok West",
      ],
    },
    {
      county: "Kajiado",
      constituencies: [
        "Kajiado North",
        "Kajiado Central",
        "Kajiado East",
        "Kajiado West",
        "Kajiado South",
      ],
    },
    {
      county: "Kericho",
      constituencies: [
        "Kipkelion East",
        "Kipkelion West",
        "Ainamoi",
        "Bureti",
        "Belgut",
        "Sigowet/Soin",
      ],
    },
    {
      county: "Bomet",
      constituencies: [
        "Sotik",
        "Chepalungu",
        "Bomet East",
        "Bomet Central",
        "Konoin",
      ],
    },
    {
      county: "Kakamega",
      constituencies: [
        "Lugari",
        "Likuyani",
        "Malava",
        "Lurambi",
        "Navakholo",
        "Mumias West",
        "Mumias East",
        "Matungu",
        "Butere",
        "Khwisero",
        "Shinyalu",
        "Ikolomani",
      ],
    },
    {
      county: "Vihiga",
      constituencies: ["Vihiga", "Sabatia", "Hamisi", "Luanda", "Emuhaya"],
    },
    {
      county: "Bungoma",
      constituencies: [
        "Mt. Elgon",
        "Sirisia",
        "Kabuchai",
        "Bumula",
        "Kanduyi",
        "Webuye East",
        "Webuye West",
        "Kimilili",
        "Tongaren",
      ],
    },
    {
      county: "Busia",
      constituencies: [
        "Teso North",
        "Teso South",
        "Nambale",
        "Matayos",
        "Butula",
        "Funyula",
        "Budalangi",
      ],
    },
    {
      county: "Siaya",
      constituencies: [
        "Ugenya",
        "Ugunja",
        "Alego Usonga",
        "Gem",
        "Bondo",
        "Rarieda",
      ],
    },
    {
      county: "Kisumu",
      constituencies: [
        "Kisumu East",
        "Kisumu West",
        "Kisumu Central",
        "Seme",
        "Nyando",
        "Muhoroni",
        "Nyakach",
      ],
    },
    {
      county: "Homa Bay",
      constituencies: [
        "Kasipul",
        "Kabondo Kasipul",
        "Karachuonyo",
        "Rangwe",
        "Homa Bay Town",
        "Ndhiwa",
        "Mbita",
        "Suba North",
      ],
    },
    {
      county: "Migori",
      constituencies: [
        "Rongo",
        "Awendo",
        "Suna East",
        "Suna West",
        "Uriri",
        "Nyatike",
        "Kuria West",
        "Kuria East",
      ],
    },
    {
      county: "Kisii",
      constituencies: [
        "Bonchari",
        "South Mugirango",
        "Bomachoge Borabu",
        "Bobasi",
        "Bomachoge Chache",
        "Nyaribari Masaba",
        "Nyaribari Chache",
        "Kitutu Chache North",
        "Kitutu Chache South",
      ],
    },
    {
      county: "Nyamira",
      constituencies: [
        "Kitutu Masaba",
        "West Mugirango",
        "North Mugirango",
        "Borabu",
      ],
    },
    {
      county: "Nairobi City County",
      constituencies: [
        "Westlands",
        "Dagoretti North",
        "Dagoretti South",
        "Lang'ata",
        "Kibra",
        "Roysambu",
        "Kasarani",
        "Ruaraka",
        "Embakasi South",
        "Embakasi North",
        "Embakasi Central",
        "Embakasi East",
        "Embakasi West",
        "Makadara",
        "Kamukunji",
        "Starehe",
        "Mathare",
      ],
    },
  ] as const;

/** All 47 county names, in official order */
export const COUNTIES: readonly string[] =
  KENYA_COUNTIES_AND_CONSTITUENCIES.map((entry) => entry.county);

/** Map of county name → constituency names */
export const CONSTITUENCIES_BY_COUNTY: Readonly<Record<string, readonly string[]>> =
  Object.fromEntries(
    KENYA_COUNTIES_AND_CONSTITUENCIES.map(({ county, constituencies }) => [
      county,
      constituencies,
    ])
  );

/** Total constituencies (expected: 290) */
export const TOTAL_CONSTITUENCIES = KENYA_COUNTIES_AND_CONSTITUENCIES.reduce(
  (sum, { constituencies }) => sum + constituencies.length,
  0
);

export const TOTAL_COUNTIES = COUNTIES.length;

/** Returns constituencies for a county, or empty array if county is invalid */
export function getConstituenciesForCounty(county: string): readonly string[] {
  return CONSTITUENCIES_BY_COUNTY[county] ?? [];
}

/** True when county and constituency form a valid pair from the official list */
export function canProceedToApply(county: string, constituency: string): boolean {
  if (!county.trim() || !constituency.trim()) return false;
  return getConstituenciesForCounty(county).includes(constituency);
}
