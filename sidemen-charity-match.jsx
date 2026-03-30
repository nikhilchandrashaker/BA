import { useState, useEffect, useCallback } from "react";

const MATCHES = {
  2016: {
    date: "3 June 2016",
    venue: "St Mary's Stadium, Southampton",
    attendance: "15,000",
    viewers: "600,000",
    raised: "£110,000",
    charities: ["Saints Foundation"],
    result: { sidemen: 7, allstars: 2 },
    winner: "sidemen",
    goalscorers: {
      sidemen: [
        { player: "Miniminter", goals: 3, times: ["51'", "71'", "73'"] },
        { player: "Manny", goals: 2, times: ["53'", "61'"] },
        { player: "TBJZL", goals: 1, times: ["45'"] },
        { player: "JMX", goals: 1, times: ["58'"] },
      ],
      allstars: [
        { player: "Tobiias (OG)", goals: 1, times: ["15'"] },
        { player: "Joe Weller", goals: 1, times: ["72'"] },
      ],
    },
    rosters: {
      sidemen: [
        { id: "ksi", name: "KSI", position: "GK" },
        { id: "miniminter", name: "Miniminter", position: "FW" },
        { id: "w2s", name: "W2S", position: "DF" },
        { id: "tbjzl", name: "TBJZL", position: "MF" },
        { id: "zerkaa", name: "Zerkaa", position: "DF" },
        { id: "behzinga", name: "Behzinga", position: "MF" },
        { id: "vikkstar", name: "Vikkstar123", position: "FW" },
        { id: "callux", name: "Callux", position: "MF" },
        { id: "manny", name: "Manny", position: "FW" },
        { id: "jmx", name: "JMX", position: "MF" },
        { id: "chrismd", name: "ChrisMD", position: "MF" },
      ],
      allstars: [
        { id: "joeweller", name: "Joe Weller", position: "FW" },
        { id: "willne", name: "WillNE", position: "MF" },
        { id: "jme", name: "JME", position: "MF" },
        { id: "pmoney", name: "P Money", position: "FW" },
        { id: "joesugg", name: "Joe Sugg", position: "MF" },
        { id: "calfreezy", name: "Calfreezy", position: "DF" },
        { id: "freezy", name: "Freezy", position: "DF" },
        { id: "tobiias", name: "Tobiias", position: "GK" },
      ],
    },
    ratings: {
      miniminter: 9.2, ksi: 7.8, tbjzl: 7.5, manny: 8.5, jmx: 7.2,
      chrismd: 7.0, w2s: 6.8, zerkaa: 6.5, behzinga: 7.0, vikkstar: 7.3, callux: 6.5,
      joeweller: 7.0, willne: 6.5, jme: 6.8, pmoney: 6.2, joesugg: 6.0,
    },
  },
  2017: {
    date: "21 May 2017",
    venue: "The Valley, London",
    attendance: "26,000",
    viewers: "800,000",
    raised: "£210,000",
    charities: ["NSPCC", "Charlton Athletic Community Trust"],
    result: { sidemen: 0, allstars: 2 },
    winner: "allstars",
    goalscorers: {
      sidemen: [],
      allstars: [
        { player: "Castro", goals: 1, times: ["3'"] },
        { player: "ChrisMD", goals: 1, times: ["90'"] },
      ],
    },
    rosters: {
      sidemen: [
        { id: "ksi", name: "KSI", position: "GK" },
        { id: "miniminter", name: "Miniminter", position: "FW" },
        { id: "w2s", name: "W2S", position: "DF" },
        { id: "tbjzl", name: "TBJZL", position: "MF" },
        { id: "zerkaa", name: "Zerkaa", position: "DF" },
        { id: "behzinga", name: "Behzinga", position: "MF" },
        { id: "vikkstar", name: "Vikkstar123", position: "FW" },
        { id: "manny", name: "Manny", position: "FW" },
        { id: "callux", name: "Callux", position: "MF" },
        { id: "jmx", name: "JMX", position: "MF" },
      ],
      allstars: [
        { id: "chrismd", name: "ChrisMD", position: "MF" },
        { id: "joeweller", name: "Joe Weller", position: "FW" },
        { id: "willne", name: "WillNE", position: "MF" },
        { id: "deji", name: "Deji", position: "FW" },
        { id: "castro", name: "Castro", position: "FW" },
        { id: "calfreezy", name: "Calfreezy", position: "DF" },
        { id: "lachlan", name: "Lachlan", position: "MF" },
        { id: "caspar", name: "Caspar Lee", position: "MF" },
        { id: "freestyler", name: "Freestyler", position: "GK" },
      ],
    },
    ratings: {
      chrismd: 8.5, castro: 8.2, deji: 7.0, willne: 7.5, joeweller: 7.2,
      miniminter: 6.5, ksi: 5.8, tbjzl: 6.5, manny: 7.0, behzinga: 6.8,
      w2s: 6.2, zerkaa: 6.0, vikkstar: 6.5, callux: 6.2, jmx: 6.0,
    },
  },
  2018: {
    date: "2 June 2018",
    venue: "The Valley, London",
    attendance: "27,111",
    viewers: "1,200,000",
    raised: "£65,747",
    charities: ["Young Minds", "Charlton Athletic Community Trust"],
    result: { sidemen: 7, allstars: 1 },
    winner: "sidemen",
    goalscorers: {
      sidemen: [
        { player: "Miniminter", goals: 3, times: ["32'", "67'", "88'"] },
        { player: "TBJZL", goals: 2, times: ["18'", "49'"] },
        { player: "Vikkstar123", goals: 1, times: ["12'"] },
        { player: "ChrisMD", goals: 1, times: ["71'"] },
      ],
      allstars: [
        { player: "Chunkz", goals: 1, times: ["6'"] },
      ],
    },
    rosters: {
      sidemen: [
        { id: "ksi", name: "KSI", position: "GK" },
        { id: "miniminter", name: "Miniminter", position: "FW" },
        { id: "w2s", name: "W2S", position: "DF" },
        { id: "tbjzl", name: "TBJZL", position: "MF" },
        { id: "zerkaa", name: "Zerkaa", position: "DF" },
        { id: "behzinga", name: "Behzinga", position: "MF" },
        { id: "vikkstar", name: "Vikkstar123", position: "FW" },
        { id: "manny", name: "Manny", position: "FW" },
        { id: "chrismd", name: "ChrisMD", position: "MF" },
        { id: "callux", name: "Callux", position: "MF" },
      ],
      allstars: [
        { id: "chunkz", name: "Chunkz", position: "FW" },
        { id: "willne", name: "WillNE", position: "MF" },
        { id: "joeweller", name: "Joe Weller", position: "FW" },
        { id: "deji", name: "Deji", position: "FW" },
        { id: "calfreezy", name: "Calfreezy", position: "DF" },
        { id: "lachlan", name: "Lachlan", position: "MF" },
        { id: "castro", name: "Castro", position: "FW" },
        { id: "freestyler", name: "Freestyler", position: "GK" },
      ],
    },
    ratings: {
      miniminter: 9.5, tbjzl: 8.8, vikkstar: 8.0, chrismd: 8.2, manny: 7.5,
      ksi: 7.0, behzinga: 7.2, w2s: 6.8, zerkaa: 6.5,
      chunkz: 7.5, willne: 6.5, joeweller: 6.8, deji: 6.2,
    },
  },
  2022: {
    date: "24 September 2022",
    venue: "The Valley, London",
    attendance: "27,000",
    viewers: "2,558,501",
    raised: "£1,000,000+",
    charities: ["CALM", "Teenage Cancer Trust", "Rays of Sunshine", "M7 Education"],
    result: { sidemen: 8, allstars: 7 },
    winner: "sidemen",
    goalscorers: {
      sidemen: [
        { player: "Miniminter", goals: 3, times: ["2'", "47'", "60'"] },
        { player: "KSI", goals: 2, times: ["10'", "77'"] },
        { player: "Vikkstar123", goals: 1, times: ["57' (pen.)"] },
        { player: "TBJZL", goals: 1, times: ["83'"] },
        { player: "Manny", goals: 1, times: ["86'"] },
      ],
      allstars: [
        { player: "Niko Omilana", goals: 2, times: ["9'", "74'"] },
        { player: "Yung Filly", goals: 1, times: ["26'"] },
        { player: "Theo Baker", goals: 1, times: ["41'"] },
        { player: "Castro", goals: 1, times: ["51'"] },
        { player: "IShowSpeed", goals: 1, times: ["~65'"] },
        { player: "WillNE", goals: 1, times: ["81'"] },
      ],
    },
    rosters: {
      sidemen: [
        { id: "ksi", name: "KSI", position: "FW" },
        { id: "miniminter", name: "Miniminter", position: "FW" },
        { id: "w2s", name: "W2S", position: "DF" },
        { id: "tbjzl", name: "TBJZL", position: "MF" },
        { id: "zerkaa", name: "Zerkaa", position: "DF" },
        { id: "behzinga", name: "Behzinga", position: "MF" },
        { id: "vikkstar", name: "Vikkstar123", position: "FW" },
        { id: "manny", name: "Manny", position: "FW" },
        { id: "chrismd", name: "ChrisMD", position: "MF" },
        { id: "callux", name: "Callux", position: "MF" },
        { id: "angryginge", name: "Angryginge", position: "DF" },
      ],
      allstars: [
        { id: "mrbeast", name: "MrBeast", position: "FW" },
        { id: "lazarbeam", name: "LazarBeam", position: "DF" },
        { id: "noahbeck", name: "Noah Beck", position: "MF" },
        { id: "ishowspeed", name: "IShowSpeed", position: "FW" },
        { id: "chunkz", name: "Chunkz", position: "FW" },
        { id: "nikoamilana", name: "Niko Omilana", position: "MF" },
        { id: "georgenotfound", name: "GeorgeNotFound", position: "MF" },
        { id: "willne", name: "WillNE", position: "MF" },
        { id: "theobaker", name: "Theo Baker", position: "FW" },
        { id: "castro", name: "Castro", position: "FW" },
        { id: "yungfilly", name: "Yung Filly", position: "MF" },
        { id: "joesugg", name: "Joe Sugg", position: "GK" },
      ],
    },
    ratings: {
      miniminter: 9.3, ksi: 8.8, vikkstar: 7.8, tbjzl: 7.5, manny: 8.0,
      chrismd: 7.2, angryginge: 8.0, behzinga: 7.0, w2s: 6.8, zerkaa: 6.5,
      nikoamilana: 8.5, willne: 7.5, theobaker: 7.8, yungfilly: 7.5, castro: 7.2,
      ishowspeed: 6.5, mrbeast: 5.8, chunkz: 7.0, noahbeck: 6.8, lazarbeam: 6.0,
    },
  },
  2023: {
    date: "9 September 2023",
    venue: "London Stadium",
    attendance: "62,000",
    viewers: "3,500,000",
    raised: "£2,400,000",
    charities: ["CALM", "Teenage Cancer Trust", "Rays of Sunshine", "M7 Education"],
    result: { sidemen: 8, allstars: 5 },
    winner: "sidemen",
    goalscorers: {
      sidemen: [
        { player: "Behzinga", goals: 1, times: ["9'"] },
        { player: "Miniminter", goals: 1, times: ["45'"] },
        { player: "Manny", goals: 3, times: ["48'", "50'", "62'"] },
        { player: "TBJZL", goals: 1, times: ["60'"] },
        { player: "W2S", goals: 1, times: ["80'"] },
        { player: "Tareq", goals: 1, times: ["90+5'"] },
      ],
      allstars: [
        { player: "ChrisMD", goals: 1, times: ["12'"] },
        { player: "Theo Baker", goals: 1, times: ["18'"] },
        { player: "xQc (OG)", goals: 1, times: ["27'"] },
        { player: "IShowSpeed", goals: 1, times: ["56' (pen.)"] },
        { player: "Angryginge", goals: 1, times: ["58'"] },
      ],
    },
    rosters: {
      sidemen: [
        { id: "ksi", name: "KSI", position: "GK" },
        { id: "miniminter", name: "Miniminter", position: "FW" },
        { id: "w2s", name: "W2S", position: "DF" },
        { id: "tbjzl", name: "TBJZL", position: "MF" },
        { id: "zerkaa", name: "Zerkaa", position: "DF" },
        { id: "behzinga", name: "Behzinga", position: "FW" },
        { id: "vikkstar", name: "Vikkstar123", position: "FW" },
        { id: "manny", name: "Manny", position: "FW" },
        { id: "callux", name: "Callux", position: "MF" },
        { id: "maxfosh", name: "Max Fosh", position: "MF" },
        { id: "tareq", name: "Tareq Salameh", position: "FW" },
        { id: "yungfilly", name: "Yung Filly", position: "MF" },
      ],
      allstars: [
        { id: "chrismd", name: "ChrisMD", position: "MF" },
        { id: "ishowspeed", name: "IShowSpeed", position: "FW" },
        { id: "xqc", name: "xQc", position: "GK" },
        { id: "kcenat", name: "Kai Cenat", position: "FW" },
        { id: "jidion", name: "JiDion", position: "FW" },
        { id: "airrack", name: "Airrack", position: "MF" },
        { id: "jacksepticeye", name: "Jacksepticeye", position: "MF" },
        { id: "aboflah", name: "AboFlah", position: "MF" },
        { id: "theobaker", name: "Theo Baker", position: "FW" },
        { id: "nikoamilana", name: "Niko Omilana", position: "MF" },
        { id: "chunkz", name: "Chunkz", position: "FW" },
        { id: "angryginge", name: "Angryginge", position: "DF" },
        { id: "willne", name: "WillNE", position: "MF" },
      ],
    },
    ratings: {
      manny: 9.5, miniminter: 8.5, tbjzl: 8.2, w2s: 7.8, behzinga: 8.0, ksi: 7.5,
      chrismd: 8.0, angryginge: 8.5, theobaker: 7.8, ishowspeed: 7.2, kcenat: 7.0,
      yungfilly: 7.5, chunkz: 7.2, maxfosh: 6.8, zerkaa: 6.5, vikkstar: 7.0,
      xqc: 5.5, jidion: 6.5, airrack: 6.8, nikoamilana: 7.0, jacksepticeye: 6.5,
    },
  },
  2025: {
    date: "8 March 2025",
    venue: "Wembley Stadium",
    attendance: "90,000",
    viewers: "8,000,000+",
    raised: "£4,733,004",
    charities: ["BBC Children in Need", "Sidemen's Bright Side", "M7 Education"],
    result: { sidemen: 9, allstars: 9 },
    winner: "allstars",
    winNote: "YouTube Allstars won 5–4 on penalties",
    goalscorers: {
      sidemen: [
        { player: "Joe Weller", goals: 2, times: ["~20'", "~65'"] },
        { player: "Miniminter", goals: 2, times: ["~30'", "~75'"] },
        { player: "Logan Paul", goals: 2, times: ["~35'", "~55'"] },
        { player: "KSI", goals: 1, times: ["~40'"] },
        { player: "Manny", goals: 1, times: ["~80'"] },
        { player: "Tobi", goals: 1, times: ["~85'"] },
      ],
      allstars: [
        { player: "Theo Baker", goals: 3, times: ["18'", "34'", "90'"] },
        { player: "ChrisMD", goals: 1, times: ["12'"] },
        { player: "IShowSpeed (pen.)", goals: 1, times: ["56'"] },
        { player: "Angryginge", goals: 1, times: ["58'"] },
        { player: "Chunkz", goals: 1, times: ["63'"] },
        { player: "Kai Cenat", goals: 1, times: ["68'"] },
        { player: "George Clarke", goals: 1, times: ["~78'"] },
      ],
    },
    rosters: {
      sidemen: [
        { id: "ksi", name: "KSI", position: "FW" },
        { id: "miniminter", name: "Miniminter", position: "FW" },
        { id: "w2s", name: "W2S", position: "DF" },
        { id: "tbjzl", name: "TBJZL", position: "MF" },
        { id: "zerkaa", name: "Zerkaa", position: "DF" },
        { id: "behzinga", name: "Behzinga", position: "MF" },
        { id: "vikkstar", name: "Vikkstar123", position: "FW" },
        { id: "loganpaul", name: "Logan Paul", position: "FW" },
        { id: "joeweller", name: "Joe Weller", position: "FW" },
        { id: "manny", name: "Manny", position: "FW" },
        { id: "callux", name: "Callux", position: "MF" },
        { id: "maxfosh", name: "Max Fosh", position: "MF" },
      ],
      allstars: [
        { id: "chrismd", name: "ChrisMD", position: "MF" },
        { id: "ishowspeed", name: "IShowSpeed", position: "FW" },
        { id: "theobaker", name: "Theo Baker", position: "FW" },
        { id: "kcenat", name: "Kai Cenat", position: "FW" },
        { id: "angryginge", name: "Angryginge", position: "DF" },
        { id: "chunkz", name: "Chunkz", position: "FW" },
        { id: "willne", name: "WillNE", position: "MF" },
        { id: "markrober", name: "Mark Rober", position: "MF" },
        { id: "jynxzi", name: "Jynxzi", position: "GK" },
        { id: "carryminati", name: "CarryMinati", position: "MF" },
        { id: "georgeclarke", name: "George Clarke", position: "MF" },
        { id: "sketch", name: "Sketch", position: "GK" },
      ],
    },
    ratings: {
      theobaker: 9.5, chrismd: 8.8, ishowspeed: 8.5, kcenat: 8.0, angryginge: 7.8,
      miniminter: 7.5, loganpaul: 8.2, joeweller: 8.0, ksi: 7.2, manny: 7.5, tbjzl: 7.0,
      chunkz: 7.5, willne: 7.0, sketch: 8.5, georgeclarke: 7.2, jynxzi: 7.0,
      maxfosh: 7.0, behzinga: 6.8, w2s: 6.5, zerkaa: 6.2, vikkstar: 6.8,
    },
  },
};

const PLAYERS = {
  ksi: {
    name: "Olajide Olatunji",
    youtube: "KSI",
    born: "19 June 1993",
    age: 31,
    nationality: "British",
    height: "6'0\" / 183 cm",
    weight: "196 lbs / 89 kg",
    position: "GK / FW",
    bio: "One of the most recognised British YouTubers, KSI has been the face of Sidemen since founding. A passionate footballer who played at school level, he often takes the goalkeeper spot or plays outfield. Famous for his 'siuuu' celebration after saving a Speed penalty in 2023.",
    appearances: 6,
    goals: 2,
    yearRatings: { 2016: 7.8, 2017: 5.8, 2018: 7.0, 2022: 8.8, 2023: 7.5, 2025: 7.2 },
  },
  miniminter: {
    name: "Simon Minter",
    youtube: "Miniminter",
    born: "7 September 1992",
    age: 32,
    nationality: "British",
    height: "6'1\" / 185 cm",
    weight: "168 lbs / 76 kg",
    position: "FW",
    bio: "The all-time top scorer with 11 goals across all editions, Miniminter is undeniably the standout performer of the charity match series. His first-touch finishing and movement off the ball make him a constant threat. Scored a hat-trick on debut in 2016.",
    appearances: 6,
    goals: 11,
    yearRatings: { 2016: 9.2, 2017: 6.5, 2018: 9.5, 2022: 9.3, 2023: 8.5, 2025: 7.5 },
  },
  w2s: {
    name: "Harry Lewis",
    youtube: "W2S",
    born: "24 November 1996",
    age: 28,
    nationality: "British",
    height: "6'5\" / 196 cm",
    weight: "176 lbs / 80 kg",
    position: "DF",
    bio: "The tallest Sidemen member, W2S is a fan-favourite defender known for his aerial presence and powerful physique. Despite his lanky frame, he is genuinely athletic and poses aerial threats at set pieces. Has been a regular starter in every edition.",
    appearances: 6,
    goals: 1,
    yearRatings: { 2016: 6.8, 2017: 6.2, 2018: 6.8, 2022: 6.8, 2023: 7.8, 2025: 6.5 },
  },
  tbjzl: {
    name: "Tobi Brown",
    youtube: "TBJZL",
    born: "8 April 1993",
    age: 31,
    nationality: "British-Nigerian",
    height: "5'8\" / 173 cm",
    weight: "154 lbs / 70 kg",
    position: "MF",
    bio: "One of the most technically gifted Sidemen members, TBJZL's quick feet and eye for goal have made him a consistent contributor. He plays regularly for amateur clubs and his quality shows. With 6 goals in 6 appearances, he is third all-time scorer.",
    appearances: 6,
    goals: 6,
    yearRatings: { 2016: 7.5, 2017: 6.5, 2018: 8.8, 2022: 7.5, 2023: 8.2, 2025: 7.0 },
  },
  zerkaa: {
    name: "Josh Bradley",
    youtube: "Zerkaa",
    born: "4 September 1992",
    age: 32,
    nationality: "British",
    height: "5'11\" / 180 cm",
    weight: "165 lbs / 75 kg",
    position: "DF / MF",
    bio: "A consistent presence in every Sidemen charity match, Zerkaa is known for his work rate and defensive diligence. Rarely in the headlines but always doing the dirty work. A reliable box-to-box presence who keeps the team organized.",
    appearances: 6,
    goals: 0,
    yearRatings: { 2016: 6.5, 2017: 6.0, 2018: 6.5, 2022: 6.5, 2023: 6.5, 2025: 6.2 },
  },
  behzinga: {
    name: "Ethan Payne",
    youtube: "Behzinga",
    born: "20 June 1994",
    age: 30,
    nationality: "British",
    height: "5'11\" / 180 cm",
    weight: "187 lbs / 85 kg",
    position: "MF",
    bio: "After undergoing a remarkable fitness transformation, Behzinga has become one of the most reliable midfielders for Sidemen FC. The 2023 match was at London Stadium, home of his beloved West Ham, and he opened the scoring in iconic fashion. A true box-to-box player with a big engine.",
    appearances: 6,
    goals: 1,
    yearRatings: { 2016: 7.0, 2017: 6.8, 2018: 7.2, 2022: 7.0, 2023: 8.0, 2025: 6.8 },
  },
  vikkstar: {
    name: "Vikram Barn",
    youtube: "Vikkstar123",
    born: "2 August 1995",
    age: 29,
    nationality: "British",
    height: "5'7\" / 170 cm",
    weight: "143 lbs / 65 kg",
    position: "FW / MF",
    bio: "The smallest Sidemen member but always punching above his weight, Vikkstar123 brings pace and creativity. His penalty-taking duties have seen him score in multiple editions. A smart footballer who understands space and positioning.",
    appearances: 6,
    goals: 2,
    yearRatings: { 2016: 7.3, 2017: 6.5, 2018: 8.0, 2022: 7.8, 2023: 7.0, 2025: 6.8 },
  },
  manny: {
    name: "Manny Brown",
    youtube: "Manny",
    born: "4 January 1993",
    age: 32,
    nationality: "British",
    height: "5'10\" / 177 cm",
    weight: "161 lbs / 73 kg",
    position: "FW",
    bio: "Tobi's brother and one of the most naturally talented players in the charity match series. With 7 goals in 6 appearances, he is second all-time scorer and always puts on a show. His 2023 hat-trick was arguably the match's best individual performance.",
    appearances: 6,
    goals: 7,
    yearRatings: { 2016: 8.5, 2017: 7.0, 2018: 7.5, 2022: 8.0, 2023: 9.5, 2025: 7.5 },
  },
  chrismd: {
    name: "Chris Dixon",
    youtube: "ChrisMD",
    born: "29 September 1994",
    age: 30,
    nationality: "British",
    height: "6'0\" / 183 cm",
    weight: "170 lbs / 77 kg",
    position: "MF / FW",
    bio: "The most decorated player to appear on both sides, ChrisMD is a former semi-professional footballer and it shows. He is consistently one of the top performers with 5 goals across all editions. Known for thunderous strikes, free-kicks, and his reliable no-look penalties.",
    appearances: 6,
    goals: 5,
    yearRatings: { 2016: 7.0, 2017: 8.5, 2018: 8.2, 2022: 7.2, 2023: 8.0, 2025: 8.8 },
  },
  joeweller: {
    name: "Joe Weller",
    youtube: "Joe Weller",
    born: "27 May 1996",
    age: 28,
    nationality: "British",
    height: "5'11\" / 180 cm",
    weight: "165 lbs / 75 kg",
    position: "FW",
    bio: "A fan-favourite across multiple charity match appearances, Joe Weller is an entertaining and effective forward. Originally a YouTube Allstar, he joined Sidemen FC in 2025 and scored twice. Known for his energy, skill, and relentless pressing.",
    appearances: 2,
    goals: 3,
    yearRatings: { 2016: 7.0, 2025: 8.0 },
  },
  ishowspeed: {
    name: "Darren Watkins Jr.",
    youtube: "IShowSpeed",
    born: "21 January 2005",
    age: 20,
    nationality: "American",
    height: "5'10\" / 177 cm",
    weight: "154 lbs / 70 kg",
    position: "FW",
    bio: "The most electrifying personality in recent charity match history. IShowSpeed's chaotic energy and determination have made him a viral sensation each year. Despite years of struggles in front of goal, he finally scored his first goal (a penalty) in 2025 — and it won the shootout. A Cristiano Ronaldo superfan.",
    appearances: 3,
    goals: 2,
    yearRatings: { 2022: 6.5, 2023: 7.2, 2025: 8.5 },
  },
  theobaker: {
    name: "Theo Baker",
    youtube: "Theo Baker",
    born: "17 September 1999",
    age: 25,
    nationality: "British",
    height: "6'0\" / 183 cm",
    weight: "168 lbs / 76 kg",
    position: "FW",
    bio: "The rising star of the charity match series. Theo Baker has become one of the most reliable scorers for the YouTube Allstars with 4 goals in 3 appearances. His 2025 hat-trick against Sidemen FC at Wembley was sensational — he even tied the game at 9-9 in the 90th minute.",
    appearances: 3,
    goals: 4,
    yearRatings: { 2022: 7.8, 2023: 7.8, 2025: 9.5 },
  },
  mrbeast: {
    name: "Jimmy Donaldson",
    youtube: "MrBeast",
    born: "7 May 1998",
    age: 27,
    nationality: "American",
    height: "6'3\" / 190 cm",
    weight: "187 lbs / 85 kg",
    position: "FW",
    bio: "The most-subscribed YouTuber on the planet, MrBeast made his charity match debut in 2022. His influence off the pitch was monumental — his promotion helped smash viewing records. On the pitch, he showed heart and effort but is admittedly not a seasoned footballer.",
    appearances: 1,
    goals: 0,
    yearRatings: { 2022: 5.8 },
  },
  lazarbeam: {
    name: "Lannan Eacott",
    youtube: "LazarBeam",
    born: "14 January 1995",
    age: 31,
    nationality: "Australian",
    height: "6'4\" / 193 cm",
    weight: "187 lbs / 85 kg",
    position: "DF",
    bio: "The Australian giant made his charity match debut in 2022 as a centre-back for the YouTube Allstars. His 6'4\" frame gave the backline physical presence, though football technique isn't his strongest suit. Known for his dry Aussie humour and fan-favourite status.",
    appearances: 1,
    goals: 0,
    yearRatings: { 2022: 6.0 },
  },
  nikoamilana: {
    name: "Niko Omilana",
    youtube: "Niko Omilana",
    born: "3 November 1997",
    age: 27,
    nationality: "British-Nigerian",
    height: "5'10\" / 177 cm",
    weight: "161 lbs / 73 kg",
    position: "MF / FW",
    bio: "One of the standout performers for YouTube Allstars in 2022, Niko scored twice in a thrilling contest. His natural athleticism and confidence in front of goal made him a real threat throughout. Known off the pitch for his political stunts and viral content.",
    appearances: 3,
    goals: 3,
    yearRatings: { 2022: 8.5, 2023: 7.0, 2025: null },
  },
  loganpaul: {
    name: "Logan Paul",
    youtube: "Logan Paul",
    born: "1 April 1995",
    age: 30,
    nationality: "American",
    height: "6'2\" / 188 cm",
    weight: "199 lbs / 90 kg",
    position: "FW",
    bio: "WWE superstar and professional boxer Logan Paul made a spectacular charity match debut in 2025, scoring twice for Sidemen FC at Wembley. His athleticism, physicality, and natural sports instincts made him one of the stars of the 2025 edition despite the eventual shootout loss.",
    appearances: 1,
    goals: 2,
    yearRatings: { 2025: 8.2 },
  },
  willne: {
    name: "William Doyle",
    youtube: "WillNE",
    born: "1 July 1996",
    age: 28,
    nationality: "British",
    height: "6'0\" / 183 cm",
    weight: "165 lbs / 75 kg",
    position: "MF",
    bio: "A veteran of the charity match series with appearances from 2017 to 2025, WillNE is a reliable midfielder known for his reading of the game and distribution. He is not the flashiest player but consistently performs at a solid level. Famous for his internet commentary content.",
    appearances: 5,
    goals: 1,
    yearRatings: { 2017: 7.5, 2018: 6.5, 2022: 7.5, 2023: 7.0, 2025: 7.0 },
  },
  kcenat: {
    name: "Kai Cenat",
    youtube: "Kai Cenat",
    born: "16 December 2001",
    age: 23,
    nationality: "American",
    height: "5'7\" / 170 cm",
    weight: "154 lbs / 70 kg",
    position: "FW",
    bio: "One of the fastest-growing streaming personalities on Twitch and YouTube, Kai Cenat brought incredible energy to the charity match. He scored in 2025 to continue building his on-field reputation. His trademark enthusiasm and charisma make him a crowd favourite.",
    appearances: 2,
    goals: 1,
    yearRatings: { 2023: 7.0, 2025: 8.0 },
  },
  xqc: {
    name: "Félix Lengyel",
    youtube: "xQc",
    born: "12 November 1995",
    age: 29,
    nationality: "Canadian",
    height: "6'0\" / 183 cm",
    weight: "165 lbs / 75 kg",
    position: "GK",
    bio: "The controversial and entertaining xQc served as goalkeeper for the YouTube Allstars in 2023. His chaotic style in goal was both entertaining and unpredictable. Best known as a top Twitch streamer, football was evidently not his primary sport, but he brought enormous viewership.",
    appearances: 1,
    goals: 0,
    yearRatings: { 2023: 5.5 },
  },
  angryginge: {
    name: "Cal Boardley",
    youtube: "Angryginge",
    born: "1 January 1993",
    age: 32,
    nationality: "British",
    height: "5'11\" / 180 cm",
    weight: "170 lbs / 77 kg",
    position: "DF",
    bio: "A born-again cult hero of the charity matches. Originally playing for Sidemen FC in 2022, Angryginge moved to the YouTube Allstars and became one of the strongest defenders in the series. Known for his robust tackling, aerial duels, and surprisingly good technique.",
    appearances: 2,
    goals: 1,
    yearRatings: { 2022: 8.0, 2023: 8.5, 2025: 7.8 },
  },
  maxfosh: {
    name: "Max Fosh",
    youtube: "Max Fosh",
    born: "19 June 1997",
    age: 27,
    nationality: "British",
    height: "6'1\" / 185 cm",
    weight: "165 lbs / 75 kg",
    position: "MF",
    bio: "Known less for his football ability and more for his viral yellow card antics. In 2023 he showed referee Clattenburg an Uno Reverse card, and in 2025 he shredded a yellow card with a miniature paper shredder. Off the viral moments, he's a competent and energetic midfielder.",
    appearances: 2,
    goals: 0,
    yearRatings: { 2023: 6.8, 2025: 7.0 },
  },
  chunkz: {
    name: "Amin Chunkz",
    youtube: "Chunkz",
    born: "23 October 1997",
    age: 27,
    nationality: "British-Somali",
    height: "5'9\" / 175 cm",
    weight: "165 lbs / 75 kg",
    position: "FW",
    bio: "A genuine goal threat for the YouTube Allstars, Chunkz brings pace, power, and an excellent scoring record. He struck first in the 2018 match for the Allstars and has contributed to every edition since 2022. His natural athleticism and streetball skills translate well.",
    appearances: 3,
    goals: 2,
    yearRatings: { 2018: 7.5, 2022: 7.0, 2023: 7.2, 2025: 7.5 },
  },
  deji: {
    name: "Deji Olatunji",
    youtube: "Deji",
    born: "9 December 1996",
    age: 28,
    nationality: "British-Nigerian",
    height: "5'10\" / 177 cm",
    weight: "165 lbs / 75 kg",
    position: "FW",
    bio: "KSI's younger brother and fellow YouTube heavyweight, Deji appeared for the YouTube Allstars in 2017 and 2018. A competitive spirit who pushed hard against his brother's team. Known primarily for his boxing career and reaction content.",
    appearances: 2,
    goals: 0,
    yearRatings: { 2017: 7.0, 2018: 6.2 },
  },
  jidion: {
    name: "Jidon Adams",
    youtube: "JiDion",
    born: "12 December 2000",
    age: 24,
    nationality: "American",
    height: "5'8\" / 173 cm",
    weight: "154 lbs / 70 kg",
    position: "FW",
    bio: "The American personality brought his trademark chaos to the 2023 charity match. Known for his wild content and unpredictable personality, JiDion brought the same energy to the pitch — enthusiastic, entertaining, but occasionally undisciplined in his positioning.",
    appearances: 1,
    goals: 0,
    yearRatings: { 2023: 6.5 },
  },
  jacksepticeye: {
    name: "Seán McLoughlin",
    youtube: "Jacksepticeye",
    born: "7 February 1990",
    age: 35,
    nationality: "Irish",
    height: "5'10\" / 177 cm",
    weight: "158 lbs / 72 kg",
    position: "MF",
    bio: "Irish YouTube legend Jacksepticeye made his charity match debut in 2023. The veteran creator showed surprisingly good football instincts for someone who doesn't play regularly. His positive attitude and team spirit made him a popular teammate despite his age.",
    appearances: 1,
    goals: 0,
    yearRatings: { 2023: 6.5 },
  },
  markrober: {
    name: "Mark Rober",
    youtube: "Mark Rober",
    born: "11 March 1980",
    age: 45,
    nationality: "American",
    height: "6'2\" / 188 cm",
    weight: "185 lbs / 84 kg",
    position: "MF",
    bio: "Former NASA engineer turned viral YouTube sensation, Mark Rober made his charity match debut in 2025. The oldest player in the match brought a methodical, scientific approach to the game — always in the right position but admittedly not blessed with pace. A massive fan moment.",
    appearances: 1,
    goals: 0,
    yearRatings: { 2025: 6.5 },
  },
  jynxzi: {
    name: "Nicholas Stewart",
    youtube: "Jynxzi",
    born: "24 December 2002",
    age: 22,
    nationality: "American",
    height: "6'2\" / 188 cm",
    weight: "176 lbs / 80 kg",
    position: "GK",
    bio: "Top Twitch streamer and Rainbow Six Siege specialist, Jynxzi guarded the YouTube Allstars goal in 2025. A surprisingly athletic goalkeeper whose reactions and positioning drew positive reviews from commentators. His young age and physicality made him one of the more capable keepers in match history.",
    appearances: 1,
    goals: 0,
    yearRatings: { 2025: 7.0 },
  },
  sketch: {
    name: "Cameron Gaither",
    youtube: "Sketch",
    born: "10 October 2001",
    age: 23,
    nationality: "American",
    height: "6'3\" / 190 cm",
    weight: "185 lbs / 84 kg",
    position: "GK",
    bio: "YouTube Allstars' hero goalkeeper in 2025, Sketch saved Miniminter's crucial penalty in the shootout that helped the Allstars win the match. Made several important saves throughout normal time including a key 1v1. An exceptional performance from the NBA 2K content creator.",
    appearances: 1,
    goals: 0,
    yearRatings: { 2025: 8.5 },
  },
  callux: {
    name: "Cal Lux",
    youtube: "Callux",
    born: "3 November 1991",
    age: 33,
    nationality: "British",
    height: "5'10\" / 177 cm",
    weight: "161 lbs / 73 kg",
    position: "MF",
    bio: "A loyal Sidemen FC midfielder across multiple editions, Callux brings consistent energy and solid technical ability. A key off-ball runner who creates space for Miniminter and Manny. Known for his prank content and friendship group with the Sidemen.",
    appearances: 5,
    goals: 0,
    yearRatings: { 2016: 6.5, 2017: 6.2, 2018: 6.2, 2022: 6.5, 2025: 6.5 },
  },
  carryminati: {
    name: "Ajey Nagar",
    youtube: "CarryMinati",
    born: "12 June 1999",
    age: 25,
    nationality: "Indian",
    height: "5'9\" / 175 cm",
    weight: "143 lbs / 65 kg",
    position: "MF",
    bio: "India's biggest YouTuber made his charity match debut in 2025, becoming the most prominent Indian creator to participate. His appearance was celebrated massively across South Asia. A genuine football enthusiast who trained hard for his appearance at Wembley.",
    appearances: 1,
    goals: 0,
    yearRatings: { 2025: 7.0 },
  },
  georgeclarke: {
    name: "George Clarke",
    youtube: "George Clarke",
    born: "12 January 1998",
    age: 27,
    nationality: "British",
    height: "5'11\" / 180 cm",
    weight: "161 lbs / 73 kg",
    position: "MF",
    bio: "YouTube Allstar in 2025 who got on the scoresheet and contributed solidly defensively. A composed midfielder who combined well with more attacking players like Theo Baker and IShowSpeed. His 2025 performance earned widespread praise.",
    appearances: 1,
    goals: 1,
    yearRatings: { 2025: 7.2 },
  },
  jmx: {
    name: "James McVey",
    youtube: "JMX",
    born: "30 April 1994",
    age: 30,
    nationality: "British",
    height: "5'11\" / 180 cm",
    weight: "161 lbs / 75 kg",
    position: "MF",
    bio: "British YouTube creator who played for Sidemen FC in the early 2016 and 2017 editions. Scored a goal in 2016 and was a lively presence in midfield. Known for his football skills content and friendship with the Sidemen.",
    appearances: 2,
    goals: 1,
    yearRatings: { 2016: 7.2, 2017: 6.0 },
  },
  yungfilly: {
    name: "Yung Filly",
    youtube: "Yung Filly",
    born: "2 March 1992",
    age: 33,
    nationality: "British-Ghanaian",
    height: "5'10\" / 177 cm",
    weight: "161 lbs / 73 kg",
    position: "MF",
    bio: "British comedian and entertainer who brought big energy to the YouTube Allstars in 2022 and 2023. Scored against Sidemen FC in 2022 and played a crucial playmaking role. Known for his natural athleticism and ability to read the game well.",
    appearances: 2,
    goals: 1,
    yearRatings: { 2022: 7.5, 2023: 7.5 },
  },
  georgenotfound: {
    name: "George Davidson",
    youtube: "GeorgeNotFound",
    born: "1 November 1996",
    age: 28,
    nationality: "British",
    height: "5'11\" / 180 cm",
    weight: "156 lbs / 71 kg",
    position: "MF",
    bio: "Minecraft YouTuber and member of the Dream SMP, GeorgeNotFound made his charity match debut in 2022. A lovable presence on the pitch who gave everything despite limited football background. His friendship with MrBeast drew massive international attention.",
    appearances: 1,
    goals: 0,
    yearRatings: { 2022: 6.2 },
  },
  noahbeck: {
    name: "Noah Beck",
    youtube: "Noah Beck",
    born: "4 May 2001",
    age: 23,
    nationality: "American",
    height: "6'0\" / 183 cm",
    weight: "165 lbs / 75 kg",
    position: "MF",
    bio: "TikTok megastar and former collegiate soccer player, Noah Beck actually has genuine football credentials. His 2022 charity match appearance showed real technical ability. Perhaps the most legitimately skilled non-football-content creator to have participated.",
    appearances: 1,
    goals: 0,
    yearRatings: { 2022: 6.8 },
  },
  airrack: {
    name: "Eric Decker",
    youtube: "Airrack",
    born: "9 June 1997",
    age: 27,
    nationality: "American",
    height: "5'11\" / 180 cm",
    weight: "165 lbs / 75 kg",
    position: "MF",
    bio: "Viral challenge creator Airrack made his debut in 2023. Known for his high-energy, record-breaking stunts on YouTube, he brought that same competitive spirit to the charity match. A hard-working midfielder who never stopped running.",
    appearances: 1,
    goals: 0,
    yearRatings: { 2023: 6.8 },
  },
  aboflah: {
    name: "Abdullah Al-Faris",
    youtube: "AboFlah",
    born: "15 July 1993",
    age: 31,
    nationality: "Saudi",
    height: "5'9\" / 175 cm",
    weight: "154 lbs / 70 kg",
    position: "MF",
    bio: "One of the biggest Arabic YouTubers with over 30 million subscribers, AboFlah's appearance in 2023 was a groundbreaking moment for the charity match's global reach. He represented the Arab world on the pitch and brought significant international viewership.",
    appearances: 1,
    goals: 0,
    yearRatings: { 2023: 6.5 },
  },
  tareq: {
    name: "Tareq Salameh",
    youtube: "Tareq",
    born: "1 January 1997",
    age: 28,
    nationality: "British-Jordanian",
    height: "5'10\" / 177 cm",
    weight: "161 lbs / 73 kg",
    position: "FW",
    bio: "A late substitute hero in the 2023 charity match, Tareq scored deep into added time to seal an 8-5 win for Sidemen FC. The moment was met with thunderous applause from the London Stadium crowd. A solid debut performance from the social media personality.",
    appearances: 1,
    goals: 1,
    yearRatings: { 2023: 7.5 },
  },
  castro: {
    name: "Castro1021",
    youtube: "Castro1021",
    born: "15 September 1992",
    age: 32,
    nationality: "American",
    height: "5'10\" / 177 cm",
    weight: "165 lbs / 75 kg",
    position: "FW",
    bio: "FIFA content creator Castro made appearances in 2017 and 2022 for the YouTube Allstars, scoring in both. His technical football ability is above average for YouTube personalities, drawing from years of FIFA content creation and genuine on-pitch skill.",
    appearances: 2,
    goals: 2,
    yearRatings: { 2017: 8.2, 2022: 7.2 },
  },
  lachlan: {
    name: "Lachlan Power",
    youtube: "Lachlan",
    born: "15 September 1995",
    age: 29,
    nationality: "Australian",
    height: "6'1\" / 185 cm",
    weight: "165 lbs / 75 kg",
    position: "MF",
    bio: "Australian YouTuber and gaming creator who appeared in the 2017 and 2018 editions. A fast and mobile midfielder whose long stride makes him difficult to track. Better known for Fortnite content than football, but put in respectable performances.",
    appearances: 2,
    goals: 0,
    yearRatings: { 2017: 6.5, 2018: 6.2 },
  },
};

const POS_COLOR = { GK: "#f59e0b", DF: "#3b82f6", MF: "#10b981", FW: "#ef4444" };

// Global image cache so we only fetch each player once
const imageCache = {};

async function fetchPlayerImage(youtubeHandle, fullName) {
  const cacheKey = youtubeHandle;
  if (imageCache[cacheKey] !== undefined) return imageCache[cacheKey];
  imageCache[cacheKey] = null; // mark as pending

  try {
    const prompt = `Find the profile picture / thumbnail image URL for YouTuber "${youtubeHandle}" (real name: ${fullName}). 
Search for their Wikipedia page or official social media. 
Reply with ONLY a single direct image URL (ending in .jpg, .jpeg, .png, or .webp) that is publicly accessible — no markdown, no explanation, just the raw URL. 
Prefer Wikipedia/Wikimedia Commons URLs as they are most reliable.`;

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 200,
        tools: [{ type: "web_search_20250305", name: "web_search" }],
        messages: [{ role: "user", content: prompt }],
      }),
    });
    const data = await response.json();
    const textBlock = data.content?.find(b => b.type === "text");
    const url = textBlock?.text?.trim();
    if (url && (url.startsWith("http") && /\.(jpg|jpeg|png|webp)/i.test(url))) {
      imageCache[cacheKey] = url;
      return url;
    }
  } catch (e) {
    // ignore
  }
  imageCache[cacheKey] = "";
  return "";
}

function PlayerAvatar({ playerId, size = 40, borderColor = "#3b82f6", posCol = null }) {
  const player = PLAYERS[playerId];
  const label = player?.youtube || playerId;
  const [imgUrl, setImgUrl] = useState(imageCache[label] ?? null);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    if (!player) return;
    if (imageCache[player.youtube] !== undefined) {
      setImgUrl(imageCache[player.youtube]);
      return;
    }
    fetchPlayerImage(player.youtube, player.name).then(url => {
      setImgUrl(url);
    });
  }, [playerId]);

  const bg = posCol
    ? `linear-gradient(135deg, ${posCol}55, ${posCol}22)`
    : "linear-gradient(135deg, #1e40af, #7c3aed)";

  const showFallback = !imgUrl || imgError;

  return (
    <div style={{ width: size, height: size, borderRadius: "50%", flexShrink: 0, position: "relative", overflow: "hidden",
      border: `2px solid ${borderColor}`, background: bg,
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      {!showFallback && (
        <img
          src={imgUrl}
          alt={label}
          onError={() => setImgError(true)}
          style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }}
        />
      )}
      {showFallback && !imgUrl && (
        <div style={{ fontSize: size * 0.28, color: posCol || "#94a3b8", opacity: 0.6 }}>⏳</div>
      )}
      {showFallback && imgUrl === "" && (
        <div style={{ fontSize: size * 0.38, fontWeight: 900, color: posCol || "white" }}>
          {label[0].toUpperCase()}
        </div>
      )}
    </div>
  );
}

function StarRating({ value }) {
  const stars = Math.round((value / 10) * 5);
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {[1,2,3,4,5].map(i => (
        <span key={i} style={{ color: i <= stars ? "#fbbf24" : "#374151", fontSize: 14 }}>★</span>
      ))}
    </div>
  );
}

function PlayerModal({ playerId, year, onClose }) {
  const player = PLAYERS[playerId];
  if (!player) return null;
  const currentRating = player.yearRatings?.[year];

  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", display: "flex",
      alignItems: "center", justifyContent: "center", zIndex: 1000, padding: 16,
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        border: "1px solid #334155", borderRadius: 16, padding: 28, maxWidth: 480,
        width: "100%", position: "relative", boxShadow: "0 25px 80px rgba(0,0,0,0.8)",
        maxHeight: "90vh", overflowY: "auto",
      }}>
        <button onClick={onClose} style={{
          position: "absolute", top: 12, right: 16, background: "none", border: "none",
          color: "#94a3b8", fontSize: 22, cursor: "pointer", lineHeight: 1,
        }}>✕</button>

        <div style={{ display: "flex", gap: 16, marginBottom: 20, alignItems: "flex-start" }}>
          <PlayerAvatar playerId={playerId} size={76} borderColor="#3b82f6" />
          <div>
            <div style={{ color: "#94a3b8", fontSize: 11, textTransform: "uppercase", letterSpacing: 2 }}>
              {player.position}
            </div>
            <div style={{ color: "white", fontSize: 22, fontWeight: 800, lineHeight: 1.1 }}>{player.youtube}</div>
            <div style={{ color: "#64748b", fontSize: 13 }}>{player.name}</div>
          </div>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20,
        }}>
          {[
            ["Born", player.born],
            ["Age", player.age],
            ["Height", player.height],
            ["Weight", player.weight],
            ["Nationality", player.nationality],
            ["Appearances", player.appearances],
            ["Career Goals", player.goals],
            ["Position", player.position],
          ].map(([label, val]) => (
            <div key={label} style={{
              background: "rgba(255,255,255,0.04)", borderRadius: 8, padding: "8px 12px",
              border: "1px solid #1e293b",
            }}>
              <div style={{ color: "#64748b", fontSize: 10, textTransform: "uppercase", letterSpacing: 1 }}>{label}</div>
              <div style={{ color: "#e2e8f0", fontSize: 13, fontWeight: 600, marginTop: 2 }}>{val}</div>
            </div>
          ))}
        </div>

        {currentRating != null && (
          <div style={{
            background: "rgba(59,130,246,0.1)", border: "1px solid #1e3a5f",
            borderRadius: 10, padding: "12px 16px", marginBottom: 16,
          }}>
            <div style={{ color: "#94a3b8", fontSize: 11, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>
              {year} Match Rating
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ fontSize: 32, fontWeight: 900, color: currentRating >= 8 ? "#10b981" : currentRating >= 6.5 ? "#fbbf24" : "#ef4444" }}>
                {currentRating.toFixed(1)}
              </div>
              <StarRating value={currentRating} />
            </div>
          </div>
        )}

        {Object.keys(player.yearRatings || {}).length > 1 && (
          <div style={{ marginBottom: 16 }}>
            <div style={{ color: "#94a3b8", fontSize: 11, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>
              All-time Ratings
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {Object.entries(player.yearRatings).map(([yr, rat]) => rat != null && (
                <div key={yr} style={{
                  background: yr == year ? "rgba(59,130,246,0.2)" : "rgba(255,255,255,0.04)",
                  border: `1px solid ${yr == year ? "#3b82f6" : "#1e293b"}`,
                  borderRadius: 8, padding: "6px 10px", textAlign: "center",
                }}>
                  <div style={{ color: "#64748b", fontSize: 10 }}>{yr}</div>
                  <div style={{ color: rat >= 8 ? "#10b981" : rat >= 6.5 ? "#fbbf24" : "#ef4444", fontWeight: 700, fontSize: 14 }}>
                    {rat.toFixed(1)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{
          background: "rgba(255,255,255,0.03)", borderRadius: 10, padding: "12px 14px",
          border: "1px solid #1e293b",
        }}>
          <div style={{ color: "#94a3b8", fontSize: 11, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>Bio</div>
          <p style={{ color: "#cbd5e1", fontSize: 13, lineHeight: 1.6, margin: 0 }}>{player.bio}</p>
        </div>
      </div>
    </div>
  );
}

function PlayerCard({ playerId, position, year, goals, onSelect }) {
  const player = PLAYERS[playerId] || { youtube: playerId, yearRatings: {} };
  const rating = player.yearRatings?.[year];
  const posCol = POS_COLOR[position] || "#64748b";

  return (
    <button onClick={() => onSelect(playerId)} style={{
      background: "rgba(255,255,255,0.04)", border: "1px solid #1e293b",
      borderRadius: 10, padding: "10px 12px", cursor: "pointer", textAlign: "left",
      transition: "all 0.15s", width: "100%",
      display: "flex", alignItems: "center", gap: 10,
    }}
      onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.09)"; e.currentTarget.style.borderColor = "#334155"; }}
      onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor = "#1e293b"; }}
    >
      <PlayerAvatar playerId={playerId} size={38} borderColor={`${posCol}88`} posCol={posCol} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ color: "#e2e8f0", fontWeight: 700, fontSize: 13, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          {player.youtube || playerId}
        </div>
        <div style={{ display: "flex", gap: 6, alignItems: "center", marginTop: 2 }}>
          <span style={{ background: `${posCol}22`, color: posCol, fontSize: 10, fontWeight: 700, padding: "1px 6px", borderRadius: 4 }}>
            {position}
          </span>
          {goals > 0 && <span style={{ color: "#10b981", fontSize: 11 }}>⚽ {goals}</span>}
        </div>
      </div>
      {rating != null && (
        <div style={{
          fontSize: 18, fontWeight: 900,
          color: rating >= 8 ? "#10b981" : rating >= 6.5 ? "#fbbf24" : "#ef4444",
          flexShrink: 0,
        }}>{rating.toFixed(1)}</div>
      )}
    </button>
  );
}

export default function App() {
  const years = [2016, 2017, 2018, 2022, 2023, 2025];
  const [selectedYear, setSelectedYear] = useState(2025);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const match = MATCHES[selectedYear];

  const getGoals = (team, playerId) => {
    const scorers = match.goalscorers[team];
    const name = PLAYERS[playerId]?.youtube || playerId;
    const entry = scorers.find(s => s.player === name || s.player.includes(name.split(" ")[0]));
    return entry?.goals || 0;
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#020817",
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      color: "white",
    }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(180deg, #0a1628 0%, #020817 100%)",
        borderBottom: "1px solid #0f1f3d",
        padding: "20px 24px 16px",
      }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
            <div style={{
              width: 40, height: 40, background: "linear-gradient(135deg, #1d4ed8, #7c3aed)",
              borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 20,
            }}>⚽</div>
            <div>
              <h1 style={{ margin: 0, fontSize: 22, fontWeight: 900, letterSpacing: -0.5, color: "white" }}>
                SIDEMEN CHARITY MATCH
              </h1>
              <p style={{ margin: 0, color: "#475569", fontSize: 12, letterSpacing: 2, textTransform: "uppercase" }}>
                Analytics Dashboard · 2016–2025
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "20px 16px" }}>
        {/* Year Tabs */}
        <div style={{
          display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap",
        }}>
          {years.map(yr => (
            <button key={yr} onClick={() => setSelectedYear(yr)} style={{
              padding: "8px 20px", borderRadius: 8, border: "none", cursor: "pointer",
              fontWeight: 700, fontSize: 14, transition: "all 0.15s",
              background: selectedYear === yr ? "linear-gradient(135deg, #1d4ed8, #7c3aed)" : "rgba(255,255,255,0.06)",
              color: selectedYear === yr ? "white" : "#64748b",
              boxShadow: selectedYear === yr ? "0 4px 20px rgba(29,78,216,0.4)" : "none",
            }}>
              {yr}
            </button>
          ))}
        </div>

        {/* Score Card */}
        <div style={{
          background: "linear-gradient(135deg, #0f172a, #1e293b)",
          borderRadius: 16, border: "1px solid #1e3a5f",
          padding: "24px", marginBottom: 20,
          boxShadow: "0 8px 40px rgba(0,0,0,0.6)",
        }}>
          <div style={{ textAlign: "center", marginBottom: 16 }}>
            <div style={{ color: "#475569", fontSize: 12, textTransform: "uppercase", letterSpacing: 2 }}>
              {match.date} · {match.venue}
            </div>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 16,
            alignItems: "center", textAlign: "center", marginBottom: 16,
          }}>
            <div>
              <div style={{ color: "#94a3b8", fontSize: 11, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>Sidemen FC</div>
              <div style={{
                fontSize: 52, fontWeight: 900,
                color: match.winner === "sidemen" ? "#10b981" : "#e2e8f0",
                lineHeight: 1,
              }}>{match.result.sidemen}</div>
            </div>
            <div style={{
              background: "rgba(255,255,255,0.06)", borderRadius: 10,
              padding: "8px 16px", color: "#64748b", fontWeight: 800, fontSize: 14,
            }}>VS</div>
            <div>
              <div style={{ color: "#94a3b8", fontSize: 11, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>YouTube Allstars</div>
              <div style={{
                fontSize: 52, fontWeight: 900,
                color: match.winner === "allstars" ? "#10b981" : "#e2e8f0",
                lineHeight: 1,
              }}>{match.result.allstars}</div>
            </div>
          </div>

          {match.winNote && (
            <div style={{ textAlign: "center", marginBottom: 12 }}>
              <span style={{ background: "rgba(16,185,129,0.15)", color: "#10b981", padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 600 }}>
                {match.winNote}
              </span>
            </div>
          )}

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            {[
              ["💰 Raised", match.raised],
              ["👥 Attendance", match.attendance],
              ["👁 Live Viewers", match.viewers],
            ].map(([label, value]) => (
              <div key={label} style={{
                background: "rgba(255,255,255,0.04)", borderRadius: 10, padding: "12px",
                textAlign: "center", border: "1px solid #1e293b",
              }}>
                <div style={{ color: "#64748b", fontSize: 11, marginBottom: 4 }}>{label}</div>
                <div style={{ color: "#e2e8f0", fontWeight: 700, fontSize: 14 }}>{value}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 12 }}>
            <div style={{ color: "#475569", fontSize: 11, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>Charities</div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {match.charities.map(c => (
                <span key={c} style={{
                  background: "rgba(139,92,246,0.15)", color: "#a78bfa",
                  padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 600,
                  border: "1px solid rgba(139,92,246,0.2)",
                }}>{c}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Goal Scorers */}
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20,
        }}>
          {[
            { key: "sidemen", label: "⚽ Sidemen FC Goals", color: "#3b82f6" },
            { key: "allstars", label: "⚽ YouTube Allstars Goals", color: "#f59e0b" },
          ].map(({ key, label, color }) => (
            <div key={key} style={{
              background: "rgba(255,255,255,0.03)", borderRadius: 12, padding: "16px",
              border: "1px solid #1e293b",
            }}>
              <div style={{ color, fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>
                {label}
              </div>
              {match.goalscorers[key].length === 0 ? (
                <div style={{ color: "#475569", fontSize: 13 }}>No goals scored</div>
              ) : (
                match.goalscorers[key].map((s, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                    <div style={{ color: "#e2e8f0", fontSize: 13, fontWeight: 600 }}>
                      {"⚽".repeat(s.goals)} {s.player}
                    </div>
                    <div style={{ color: "#64748b", fontSize: 11 }}>{s.times.join(", ")}</div>
                  </div>
                ))
              )}
            </div>
          ))}
        </div>

        {/* Rosters */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {[
            { key: "sidemen", label: "Sidemen FC", color: "#3b82f6" },
            { key: "allstars", label: "YouTube Allstars", color: "#f59e0b" },
          ].map(({ key, label, color }) => (
            <div key={key}>
              <div style={{
                color, fontWeight: 800, fontSize: 14, textTransform: "uppercase",
                letterSpacing: 2, marginBottom: 12, display: "flex", alignItems: "center", gap: 8,
              }}>
                <div style={{ width: 3, height: 16, background: color, borderRadius: 2 }} />
                {label}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {match.rosters[key].map(({ id, position }) => (
                  <PlayerCard
                    key={id}
                    playerId={id}
                    position={position}
                    year={selectedYear}
                    goals={getGoals(key, id)}
                    onSelect={setSelectedPlayer}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* All-time stats */}
        <div style={{
          marginTop: 24, background: "rgba(255,255,255,0.02)", borderRadius: 16,
          border: "1px solid #1e293b", padding: "20px",
        }}>
          <div style={{ color: "#94a3b8", fontWeight: 800, fontSize: 13, textTransform: "uppercase", letterSpacing: 2, marginBottom: 16 }}>
            📊 All-Time Top Scorers
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 10 }}>
            {[
              { id: "miniminter", goals: 11 }, { id: "manny", goals: 7 }, { id: "tbjzl", goals: 6 },
              { id: "chrismd", goals: 5 }, { id: "theobaker", goals: 4 }, { id: "nikoamilana", goals: 3 },
              { id: "joeweller", goals: 3 }, { id: "ksi", goals: 2 }, { id: "vikkstar", goals: 2 },
              { id: "loganpaul", goals: 2 },
            ].map(({ id, goals }, i) => (
              <button key={id} onClick={() => setSelectedPlayer(id)} style={{
                background: "rgba(255,255,255,0.04)", borderRadius: 10, padding: "10px",
                border: "1px solid #1e293b", cursor: "pointer", textAlign: "left",
                display: "flex", alignItems: "center", gap: 8,
                transition: "all 0.15s",
              }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.09)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.04)"}
              >
                <span style={{ color: i < 3 ? "#fbbf24" : "#475569", fontWeight: 900, width: 20 }}>#{i + 1}</span>
                <PlayerAvatar playerId={id} size={32} borderColor="#334155" />
                <div>
                  <div style={{ color: "#e2e8f0", fontSize: 12, fontWeight: 700 }}>{PLAYERS[id]?.youtube || id}</div>
                  <div style={{ color: "#10b981", fontSize: 11 }}>⚽ {goals} goals</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center", padding: "20px 0", color: "#1e293b", fontSize: 11 }}>
          Click any player to view their bio & stats
        </div>
      </div>

      {selectedPlayer && (
        <PlayerModal playerId={selectedPlayer} year={selectedYear} onClose={() => setSelectedPlayer(null)} />
      )}
    </div>
  );
}
