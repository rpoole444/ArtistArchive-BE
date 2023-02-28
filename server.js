const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.set("port", process.env.PORT || 3001);
app.locals.title = "Reid's Top Thirty";

app.get("/", (request, response) => {
  response.send("Heyo! From Reid!");
});

app.listen(app.get("port"), () => {
  console.log(
    `${app.locals.title} is running on http://localhost:${app.get("port")}.`
  );
});

app.locals.artists = [
  {
    id: "1",
    name: "Louis Armstrong",
    image:
      "https://www.celebstoner.com/assets/components/directresize/cache/dr_LouisArmstrongSmoking_w625_h495.jpg",
    rank: 1,
    description:"Louis Armstrong was born in New Orleans, Louisiana on August 4, 1901. He was raised by his mother Mayann in a neighborhood so dangerous it was called “The Battlefield.” He only had a fifth-grade education, dropping out of school early to go to work. An early job working for the Jewish Karnofsky family allowed Armstrong to make enough money to purchase his first cornet.  On New Year’s Eve 1912, he was arrested and sent to the Colored Waif’s Home for Boys. There, under the tutelage of Peter Davis, he learned how to properly play the cornet, eventually becoming the leader of the Waif’s Home Brass Band. Released from the Waif’s Home in 1914, Armstrong set his sights on becoming a professional musician. Mentored by the city’s top cornetist, Joe “King” Oliver, Armstrong soon became one of the most in-demand cornetists in town, eventually working steadily on Mississippi riverboats. In 1922, King Oliver sent for Armstrong to join his band in Chicago. Armstrong and Oliver became the talk of the town with their intricate two-cornet breaks and started making records together in 1923. By that point, Armstrong began dating the pianist in the band, Lillian Hardin. In 1924, Armstrong married Hardin, who urged Armstrong to leave Oliver and try to make it on his own. A year in New York with Fletcher Henderson and His Orchestra proved unsatisfying so Armstrong returned to Chicago in 1925 and began making records under his own name for the first time. " ,
    video: "gEdq64SIp4E",
  },
  {
    id: "2",
    name: "Duke Ellington",
    image:
      "https://i.etsystatic.com/32739938/r/il/f368b5/3674648375/il_340x270.3674648375_coyf.jpg",
    rank: 2,
    description: "A major figure in the history of jazz music, Duke Ellington's career spanned more than half a century, during which time he composed thousands of songs for the stage, screen and contemporary songbook. He created one of the most distinctive ensemble sounds in Western music and continued to play what he called American Music until shortly before his death in 1974. Born on April 29, 1899, Ellington was raised by two talented, musical parents in a middle-class neighborhood of Washington, D.C. At the age of seven, he began studying piano and earned the nickname Duke for his gentlemanly ways. Inspired by his job as a soda jerk, he wrote his first composition, Soda Fountain Rag, at the age of 15. Despite being awarded an art scholarship to the Pratt Institute in Brooklyn, New York, Ellington followed his passion for ragtime and began to play professionally at age 17.In the 1920s, Ellington performed in Broadway nightclubs as the bandleader of a sextet, a group which in time grew to a 10-piece ensemble. Ellington sought out musicians with unique playing styles, such as Bubber Miley, who used a plunger to make the wa-wa sound, and Joe Nanton, who gave the world his trombone growl. At various times, his ensemble included the trumpeter Cootie Williams, cornetist Rex Stewart and alto saxophonist Johnny Hodges. Ellington made hundreds of recordings with his bands, appeared in films and on radio, and toured Europe on two occasions in the 1930s.",
    video: "RTFK1M5hY0A",
  },
  {
    id: "3",
    name: "John Coltrane",
    image:
      "https://cdn.britannica.com/22/7722-004-BC536F2A/John-Coltrane-1966.jpg",
    rank: 3,
    description: "John Coltrane, in full John William Coltrane, byname Trane, (born September 23, 1926, Hamlet, North Carolina, U.S.—died July 17, 1967, Huntington, New York), American jazz saxophonist, bandleader, and composer, an iconic figure of 20th-century jazz. Coltrane’s first musical influence was his father, a tailor and part-time musician. John studied clarinet and alto saxophone as a youth and then moved to Philadelphia in 1943 and continued his studies at the Ornstein School of Music and the Granoff Studios. He was drafted into the navy in 1945 and played alto sax with a navy band until 1946; he switched to tenor saxophone in 1947. During the late 1940s and early ’50s, he played in nightclubs and on recordings with such musicians as Eddie (“Cleanhead”) Vinson, Dizzy Gillespie, Earl Bostic, and Johnny Hodges. Coltrane’s first recorded solo can be heard on Gillespie’s “We Love to Boogie” (1951).   Coltrane came to prominence when he joined Miles Davis’s quintet in 1955. His abuse of drugs and alcohol during this period led to unreliability, and Davis fired him in early 1957. He embarked on a six-month stint with Thelonious Monk and began to make recordings under his own name; each undertaking demonstrated a newfound level of technical discipline, as well as increased harmonic and rhythmic sophistication. ",
    video: "qYMO133wY0s",
  },
  {
    id: "4",
    name: "Radiohead",
    image:
      "https://pyxis.nymag.com/v1/imgs/134/4c1/df826334bc9661a34dfcf000d38d11db3d-11-radiohead-new.rsquare.w330.jpg",
    rank: 4,
    description:"Radiohead, British rock group that was arguably the most accomplished art-rock band of the early 21st century. This revered quintet made some of the most majestic—if most angst-saturated—music of the postmodern era. Formed in the mid-1980s at Abingdon School in Oxfordshire, Radiohead comprised singer-guitarist Thom Yorke (b. October 7, 1968, Wellingborough, Northamptonshire, England), bassist Colin Greenwood (b. June 26, 1969, Oxford, Oxfordshire), guitarist Ed O’Brien (b. April 15, 1968, Oxford), drummer Phil Selway (b. May 23, 1967, Hemingford Grey, Huntingdon, Cambridgeshire), and guitarist-keyboardist Jonny Greenwood (b. November 5, 1971, Oxford).  ",
    video: "EtZ6RMV-kXs",
  },
  {
    id: "5",
    name: "Notorious B.I.G",
    image:
      "https://news.artnet.com/app/news-upload/2020/09/10395-Barron-Claiborne-Notorious-B.I.G.-as-the-K.O.N.Y-King-of-New-York.jpg",
    rank: 5,
    description:"Christopher Wallace, aka Biggie Smalls and the Notorious B.I.G., lived a short life. He was 24 years old when he was gunned down in 1997 in Los Angeles, a murder that has never been solved. Smalls was from New York and had almost single-handedly reinvented East Coast hip hop — overtaken in the early 1990s by the West Coast g-funk sound of Dr. Dre and Death Row Records. With his clear, powerful baritone, effortless flow on the mic and willingness to address the vulnerability, as well as the harshness, of the hustler lifestyle, Smalls swung the spotlight back towards New York and his label home, Bad Boy Records. He styled himself as a gangster and although he was no angel, in reality he was more of a performer than a hardened criminal. In this regard, he was similar to Tupac Shakur, his one-time friend turned bitter rival — a contest that spiraled horrifyingly out of control leaving neither man alive to tell the tale.",
    video: "it1K68opMd0",
  },
  {
    id: "6",
    name: "Dinah Washington",
    image:
      "https://media.cnn.com/api/v1/images/stellar/prod/131206134718-02-dinah-washington.jpg?q=w_5004",
    rank: 6,
    description:"Dinah Washington, legendary singer and ‘Queen of the Blues,’ was born Ruth Lee Jones on August 29, 1924. Born in Tuscaloosa, Alabama she moved with her family to Chicago as a young child.  Music was in Washington’s family, her mother was a pianist in St. Luke’s Baptist Church, and from a young age, Washington sang gospel and played piano with her church choir. Influenced by other female singers such as Billie Holiday, Washington began to take an interest in blues music and started playing in local clubs in Chicago. At the age of 18, Washington joined Lionel Hampton’s band and a year later she also signed with Keynote Records, releasing her first hit “Evil Gal Blues” under the name Dinah Washington. Washington was never to record any of her gospel music, despite her obvious talent for it, believing that the secular world of professional music should be kept apart from the spiritual.",
    video: "T49iAgRs5c8",
  },
  {
    id: "7",
    name: "Michael Jackson",
    image:
      "https://charts-static.billboard.com/img/1971/10/michael-jackson-9to-344x344.jpg",
    rank: 7,
    description: "Michael Joseph Jackson was born on August 29, 1958 in Gary, Indiana, and entertained audiences nearly his entire life. His father, Joe Jackson (no relation to Joe Jackson, also a musician), had been a guitarist, but was forced to give up his musical ambitions following his marriage to Michael's mother Katherine Jackson (née Katherine Esther Scruse). Together, they prodded their growing family's musical interests at home. By the early 1960s, the older boys Jackie, Tito and Jermaine had begun performing around the city; by 1964, Michael and Marlon had joined in.A musical prodigy, Michael's singing and dancing talents were amazingly mature, and he soon became the dominant voice and focus of the Jackson 5. An opening act for such soul groups as the O-Jays and James Brown, it was Gladys Knight (not Diana Ross) who officially brought the group to Berry Gordy's attention, and by 1969, the boys were producing back-to-back chart-busting hits as Motown artists (I Want You Back, ABC, Never Can Say Goodbye, Got to Be There, etc.). As a product of the 1970s, the boys emerged as one of the most accomplished black pop / soul vocal groups in music history, successfully evolving from a group like The Temptations to a disco phenomenon.",
    video: "h_D3VFfhvs4",
  },
  {
    id: "8",
    name: "Sam Cooke",
    image:
      "https://www.billboard.com/wp-content/uploads/media/sam-cooke-1960s-u-billboard-1548.jpg",
    rank: 8,
    description: "Sam Cooke, byname of Samuel Cook, (born January 22, 1931, Clarksdale, Mississippi, U.S.—died December 11, 1964, Los Angeles, California), American singer, songwriter, producer, and entrepreneur who was a major figure in the history of popular music and, along with Ray Charles, one of the most influential Black vocalists of the post-World War II period. If Charles represented raw soul, Cooke symbolized sweet soul. To his many celebrated disciples—Smokey Robinson, James Taylor, and Michael Jackson among them—he was an icon of unrivaled stature.",
    video: "eltCoCoR2Yg",
  },
  {
    id: "9",
    name: "Stevie Wonder",
    image:
      "https://charts-static.billboard.com/img/1970/12/stevie-wonder-12f-344x344.jpg",
    rank: 9,
    description:"Stevie Wonder gained prominence in the early 1960s as a musical prodigy, and his dance hits and love songs have segued over the years into thoughtful commentaries on the joy and injustice in our world. Born in Saginaw, Michigan in 1950, Wonder became blind shortly after birth. He learned to play the harmonica, piano and drums by age 9. By the time he was 10, his singing and other musical skills were known throughout his neighborhood, and when the family moved to Detroit, impressed adults made his talents known to the owners of Motown Records, who gave him a recording contract when he was age 12.",
    video: "pUj9frKY46E",
  },
  {
    id: "10",
    name: "Fats Domino",
    image:
      "https://npr.brightspotcdn.com/legacy/sites/wwno/files/201710/fats-domino-college.jpg",
    rank: 10,
    description: "Antoine “Fats” Domino was born in New Orleans LA, in the lower ninth ward on February 26, 1928. His parents, Antoine Domino Sr. and Donatile Gros Domino were born in Vacherie, LA. Antoine Jr. was the youngest of eight siblings. During his adolescence he held many jobs ranging from working on an ice truck to working at the Crescent City Bed Factory. However, at a very early age he had an affinity for playing the piano. His brother-in-law, Harrison Verrett was very influential in his piano playing. Little did he know at that time that this would lead to an amazing career. Is unique piano style and voice what later attract millions from all over the world.",
    video: "kFZrXw0ccwQ",
  },
  {
    id: "11",
    name: "Chris Thile",
    image:
      "https://static01.nyt.com/images/2021/05/30/arts/30CHRIS-THILE1/30CHRIS-THILE1-mobileMasterAt3x-v3.jpg",
    rank: 11,
    description: "A virtuoso mandolin player, singer, composer, bandleader, and radio personality, Chris Thile is one of the leading lights of progressive bluegrass. A founding member of Nickel Creek and Punch Brothers, he's been at the forefront of bluegrass, creative folk, and roots music since debuting in the late 1980s. He has also issued an array of acclaimed solo albums, including 2004's Deceiver and 2006's How to Grow a Woman from the Ground. Thile took home Grammy Awards for his work with Nickel Creek (2002's This Side), his genre-bending collaboration with cellist Yo-Yo Ma, bassist Edgar Meyer, and violinist Stuart Duncan (2011's Goat Rodeo Sessions), his duo album with Meyer (2014's Bass & Mandolin), and with Punch Brothers (2018's All Ashore). He has also colllaborated with the likes of pianist Brad Mehldau, banjo player Béla Fleck, and singer/guitarist Michael Daves, among others. Between 2016 and 2020, Thile hosted NPR's A Prairie Home Companion (later titled Live from Here), and in 2021, he released his first entirely solo album, Laysongs.",
    video: "iXE_K2Kpoqc",
  },
  {
    id: "12",
    name: "Hank Jones",
    image:
      "https://tarahanks.files.wordpress.com/2010/05/hank-jones-bn-web.jpg",
    rank: 12,
    description: "The oldest of the Jones brothers, Hank Jones has been a supreme accompanist and underrated soloist. He's among the most accomplished sight readers in jazz, and his flexibility and sensitive style have kept him extremely busy cutting sessions and working in various groups and styles ranging from swing to bebop. He's worked with vocalists, played in big bands and done many solo, trio, and combo dates.  Born in 1918 in Vicksburg, Mississippi, Jones moved with his family to the Detroit area while still a child, and studied piano early, listening carefully to Art Tatum, Teddy Wilson, Earl Hines, and Fats Waller. He began playing in the midwest at age 13, and worked in territory bands. Jones met Lucky Thompson in one of these groups, and Thompson invited him to New York in 1944 to work with Hot Lips Page at the Onyx Club. Jones worked for a while with John Kirby, Howard McGhee, Coleman Hawkins, Andy Kirk, and Billy Eckstine, then began touring in 1947. He worked with Jazz at the Philharmonic, then accompanied Ella Fitzgerald from 1948 to 1953. Jones also cut many sessions for Norman Granz's labels in the late '40s and early '50s, many with Charlie Parker. He worked and recorded in the '50s with Artie Shaw, Benny Goodman, Lester Young, Milt Jackson, and Cannonball Adderley before joining CBS' staff in 1959.",
    video: "c3LpzQJ31OQ",
  },
  {
    id: "13",
    name: "Cecile Mclorin Salvant",
    image:
      "https://s3.amazonaws.com/media.thecrimson.com/photos/2021/03/08/202104_1348818.jpg",
    rank: 13,
    description: "Cécile McLorin Salvant, is a composer, singer, and visual artist. The late Jessye Norman described Salvant as“a unique voice supported by an intelligence and  full-fledged musicality, which light up every note she sings”.  Salvant has developed a passion for storytelling and finding the connections between vaudeville, blues, theater, jazz, baroque and folkloric music. Salvant is an eclectic curator, unearthing rarely recorded, forgotten songs with strong narratives, interesting power dynamics, unexpected twists, and humor.  Salvant won the Thelonious Monk competition in 2010. She has received three consecutive Grammy Awards for Best Jazz Vocal Album for “The Window”, “Dreams and Daggers”, and “For One To Love”, and was nominated for the award in 2014 for her album “WomanChild”.",
    video: "NkmGue2WQyg",
  },
  {
    id: "14",
    name: "Bob Marley",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0PAHaQLlkCHsznHLQAx8BS5mWg_X7wN2uAA&usqp=CAU",
    rank: 14,
    description: "Robert Nesta Marley OM (6 February 1945 – 11 May 1981) was a Jamaican singer, musician, and songwriter. Considered one of the pioneers of reggae, his musical career was marked by fusing elements of reggae, ska, and rocksteady, as well as his distinctive vocal and songwriting style.[2][3] Marley's contributions to music increased the visibility of Jamaican music worldwide, and made him a global figure in popular culture to this day.[4][5] Over the course of his career, Marley became known as a Rastafari icon, and he infused his music with a sense of spirituality.[6] He is also considered a global symbol of Jamaican music and culture and identity, and was controversial in his outspoken support for democratic social reforms.[citation needed] In 1976, Marley survived an assassination attempt in his home, which was thought to be politically motivated.[7] He also supported legalisation of marijuana, and advocated for Pan-Africanism.[8]",
    video: "69RdQFDuYPI",
  },
  {
    id: "15",
    name: "Ron Miles",
    image:
      "https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/1/2/3/3/aea0-dca3-4206-b200-2d6cfaf4d238",
    rank: 15,
    description: "Ron Miles is a songwriter and cornet player based in Denver, Colorado. Ron was born in Indianapolis, Indiana in 1963 and moved to Denver with his family in 1974. Ron Miles has previously recorded as a leader for the Prolific, Capri, Gramavision, and Sterling Circle labels. He is one of the finest improvisers and composers of his generation and has been called one of the greatest melodists by clarinetist Ben Goldberg. In addition to leading his own bands, Ron Miles has performed in the ensembles of Joshua Redman, Bill Frisell, Mercer Ellington, Don Byron, Myra Melford, Joe Henry, Madeleine Peyroux, Jason Moran, Matt Wilson, the Bad Plus, Harriet Tubman, Ginger Baker, and Goldberg.",
    video: "7JphUOBchsY",
  },
  {
    id: "16",
    name: "Dirty Projectors",
    image:
      "https://www.dominomusic.com/res/zz1Q/1200_1200/Dirty-Projectors---PC--Jason-Frank-Rothenberg-2465-Launch---300dpi.jpg",
    rank: 16,
    description:,
    video: "cfhzD3QWipU",
  },
  {
    id: "17",
    name: "Jazz at Lincoln Center Orchestra",
    image:
      "https://www.aso.org/assets/img/JLCO_piper_ferguson-3-daae86db99-6895a93371.jpg",
    rank: 17,
    description:,
    video: "PhI_QuMZ26c",
  },
  {
    id: "18",
    name: "Ludwig Van Beethoven",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Beethoven.jpg",
    rank: 18,
    description:,
    video: "y1mZ6gWnCQI",
  },
  {
    id: "19",
    name: "Bessie Smith",
    image:
      "https://media.npr.org/assets/img/2019/08/02/gettyimages-74296266_wide-afcc02a47199a49733c9e68a4a43a7e414c7f8e3-s1100-c50.jpg",
    rank: 19,
    description:,
    video: "5Bo3f_9hLkQ",
  },
  {
    id: "20",
    name: "Charley Patton",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/af/Charley_Patton_%281929_photo_portrait%29.jpg",
    rank: 20,
    description:,
    video: "IT_7slkQbsQ",
  },
  {
    id: "21",
    name: "Igor Stravinsky",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Igor_Stravinsky_LOC_32392u.jpg/1200px-Igor_Stravinsky_LOC_32392u.jpg",
    rank: 21,
    description:,
    video: "pHxstiIybz4",
  },
  {
    id: "22",
    name: "Yo Yo Ma",
    image:
      "https://media.newyorker.com/photos/635c5d25074e40aefdf45dd3/master/pass/ra1073.jpg",
    rank: 22,
    description:,
    video: "3uiUHvET_jg",
  },
  {
    id: "23",
    name: "Erykah Badu",
    image:
      "https://media.newyorker.com/photos/590975ff1c7a8e33fb38f63a/master/w_2560%2Cc_limit/160425_r28041.jpg",
    rank: 23,
    description:,
    video: "3qpyDUfMq-8",
  },
  {
    id: "24",
    name: "J Dilla",
    image:
      "https://media.gq.com/photos/57124fccbf3a8ba177b0c911/4:3/w_1000,h_750,c_limit/j-dilla-02.jpg",
    rank: 24,
    description:,
    video: "Agl1TgVfls0",
  },
  {
    id: "25",
    name: "Atmosphere",
    image:
      "https://images.squarespace-cdn.com/content/v1/520ed800e4b0229123208764/1643693510653-USQYC5H458A5XGLOW7VG/34319a9c-943e-4e3f-9475-afc0fc8557a7.jpeg",
    rank: 25,
    description:,
    video: "Ij3Bmw0QgkE",
  },
  {
    id: "26",
    name: "The Fugees",
    image:
      "https://yt3.googleusercontent.com/ytc/AL5GRJUOiJk411L8lgfeIq8BkF5AART8n-rjZTWuvjkB=s900-c-k-c0x00ffffff-no-rj",
    rank: 26,
    description:,
    video: "aIXyKmElvv8",
  },
  {
    id: "27",
    name: "Bad Plus",
    image:
      "https://media.npr.org/assets/img/2014/03/19/badplus_wide-ce010832ad4ecb119280cdd62eb818169ee290f9-s1100-c50.jpg",
    rank: 27,
    description:,
    video: "vZI76J1UDKw",
  },
  {
    id: "28",
    name: "Charlie Parker",
    image:
      "https://s3.amazonaws.com/allaboutjazz/photos/a_large/ac568513cd95ba448502af33057719bd.jpg",
    rank: 28,
    description:,
    video: "DmRkZeGFONg",
  },
  {
    id: "29",
    name: "Nicholas Payton",
    image:
      "https://communique.uccs.edu/wp-content/uploads/2020/02/ars_864x486-nicholas-payton-quartet.jpg",
    rank: 29,
    description:,
    video: "f_dSlxgD2Fo",
  },
  {
    id: "30",
    name: "Randy Newman",
    image:
      "https://media.pitchfork.com/photos/5e40c6d00ad70b00084a00c5/2:1/w_2560%2Cc_limit/Randy%2520Newman-GettyImages-1205160724.jpg",
    rank: 30,
    description:,
    video: "1wFWR5qCB2k",
  },
];

app.get("/api/v1/artists", (request, response) => {
  console.log(response);
  const { artists } = app.locals;

  response.json({ artists });
});

app.get("/api/v1/artists/:id", (request, response) => {
  console.log(request.params);
  const { id } = request.params;

  const artist = app.locals.artists.find((artist) => artist.id === id);
  if (!artist) {
    return response.status(404).send("No id Matches");
  } else {
    response.status(200).json(artist);
  }
});

app.post("/api/v1/artists", (request, response) => {
  const id = Date.now();
  const artist = request.body;
  for (let requiredParameter of ["name", "image", "rank"]) {
    if (!artist[requiredParameter]) {
      response.status(422).send({
        error: `Expected format: { name: <String>, image: <https>rank: <Number> }. You're missing a "${requiredParameter}" property.`,
      });
    }
  }
  const { name, image, rank } = artist;
  app.locals.artists.push({ id, name, image, rank, video });
  response.status(201).json({ id, name, image, rank, video });
});
