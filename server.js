const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.set("port", process.env.PORT || 3000);
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
    video: "gEdq64SIp4E",
  },
  {
    id: "2",
    name: "Duke Ellington",
    image:
      "https://i.etsystatic.com/32739938/r/il/f368b5/3674648375/il_340x270.3674648375_coyf.jpg",
    rank: 2,
    video: "RTFK1M5hY0A",
  },
  {
    id: "3",
    name: "John Coltrane",
    image:
      "https://cdn.britannica.com/22/7722-004-BC536F2A/John-Coltrane-1966.jpg",
    rank: 3,
    video: "qYMO133wY0s",
  },
  {
    id: "4",
    name: "Radiohead",
    image:
      "https://pyxis.nymag.com/v1/imgs/134/4c1/df826334bc9661a34dfcf000d38d11db3d-11-radiohead-new.rsquare.w330.jpg",
    rank: 4,
    video: "EtZ6RMV-kXs",
  },
  {
    id: "5",
    name: "Notorious B.I.G",
    image:
      "https://news.artnet.com/app/news-upload/2020/09/10395-Barron-Claiborne-Notorious-B.I.G.-as-the-K.O.N.Y-King-of-New-York.jpg",
    rank: 5,
    video: "it1K68opMd0",
  },
  {
    id: "6",
    name: "Dinah Washington",
    image:
      "https://media.cnn.com/api/v1/images/stellar/prod/131206134718-02-dinah-washington.jpg?q=w_5004",
    rank: 6,
    video: "T49iAgRs5c8",
  },
  {
    id: "7",
    name: "Michael Jackson",
    image:
      "https://charts-static.billboard.com/img/1971/10/michael-jackson-9to-344x344.jpg",
    rank: 7,
    video: "h_D3VFfhvs4",
  },
  {
    id: "8",
    name: "Sam Cooke",
    image:
      "https://www.billboard.com/wp-content/uploads/media/sam-cooke-1960s-u-billboard-1548.jpg",
    rank: 8,
    video: "eltCoCoR2Yg",
  },
  {
    id: "9",
    name: "Stevie Wonder",
    image:
      "https://charts-static.billboard.com/img/1970/12/stevie-wonder-12f-344x344.jpg",
    rank: 9,
    video: "pUj9frKY46E",
  },
  {
    id: "10",
    name: "Fats Domino",
    image:
      "https://npr.brightspotcdn.com/legacy/sites/wwno/files/201710/fats-domino-college.jpg",
    rank: 10,
    video: "kFZrXw0ccwQ",
  },
  {
    id: "11",
    name: "Chris Thile",
    image:
      "https://static01.nyt.com/images/2021/05/30/arts/30CHRIS-THILE1/30CHRIS-THILE1-mobileMasterAt3x-v3.jpg",
    rank: 11,
    video: "iXE_K2Kpoqc",
  },
  {
    id: "12",
    name: "Hank Jones",
    image:
      "https://tarahanks.files.wordpress.com/2010/05/hank-jones-bn-web.jpg",
    rank: 12,
    video: "c3LpzQJ31OQ",
  },
  {
    id: "13",
    name: "Cecile Mclorin Salvant",
    image:
      "https://s3.amazonaws.com/media.thecrimson.com/photos/2021/03/08/202104_1348818.jpg",
    rank: 13,
    video: "NkmGue2WQyg",
  },
  {
    id: "14",
    name: "Bob Marley",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0PAHaQLlkCHsznHLQAx8BS5mWg_X7wN2uAA&usqp=CAU",
    rank: 14,
    video: "69RdQFDuYPI",
  },
  {
    id: "15",
    name: "Ron Miles",
    image:
      "https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/1/2/3/3/aea0-dca3-4206-b200-2d6cfaf4d238",
    rank: 15,
    video: "7JphUOBchsY",
  },
  {
    id: "16",
    name: "Dirty Projectors",
    image:
      "https://www.dominomusic.com/res/zz1Q/1200_1200/Dirty-Projectors---PC--Jason-Frank-Rothenberg-2465-Launch---300dpi.jpg",
    rank: 16,
    video: "cfhzD3QWipU",
  },
  {
    id: "17",
    name: "Jazz at Lincoln Center Orchestra",
    image:
      "https://www.aso.org/assets/img/JLCO_piper_ferguson-3-daae86db99-6895a93371.jpg",
    rank: 17,
    video: "PhI_QuMZ26c",
  },
  {
    id: "18",
    name: "Ludwig Van Beethoven",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Beethoven.jpg",
    rank: 18,
    video: "y1mZ6gWnCQI",
  },
  {
    id: "19",
    name: "Bessie Smith",
    image:
      "https://media.npr.org/assets/img/2019/08/02/gettyimages-74296266_wide-afcc02a47199a49733c9e68a4a43a7e414c7f8e3-s1100-c50.jpg",
    rank: 19,
    video: "5Bo3f_9hLkQ",
  },
  {
    id: "20",
    name: "Charley Patton",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/af/Charley_Patton_%281929_photo_portrait%29.jpg",
    rank: 20,
    video: "IT_7slkQbsQ",
  },
  {
    id: "21",
    name: "Igor Stravinsky",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Igor_Stravinsky_LOC_32392u.jpg/1200px-Igor_Stravinsky_LOC_32392u.jpg",
    rank: 21,
    video: "pHxstiIybz4",
  },
  {
    id: "22",
    name: "Yo Yo Ma",
    image:
      "https://media.newyorker.com/photos/635c5d25074e40aefdf45dd3/master/pass/ra1073.jpg",
    rank: 22,
    video: "3uiUHvET_jg",
  },
  {
    id: "23",
    name: "Erykah Badu",
    image:
      "https://media.newyorker.com/photos/590975ff1c7a8e33fb38f63a/master/w_2560%2Cc_limit/160425_r28041.jpg",
    rank: 23,
    video: "3qpyDUfMq-8",
  },
  {
    id: "24",
    name: "J Dilla",
    image:
      "https://media.gq.com/photos/57124fccbf3a8ba177b0c911/4:3/w_1000,h_750,c_limit/j-dilla-02.jpg",
    rank: 24,
    video: "Agl1TgVfls0",
  },
  {
    id: "25",
    name: "Atmosphere",
    image:
      "https://images.squarespace-cdn.com/content/v1/520ed800e4b0229123208764/1643693510653-USQYC5H458A5XGLOW7VG/34319a9c-943e-4e3f-9475-afc0fc8557a7.jpeg",
    rank: 25,
    video: "Ij3Bmw0QgkE",
  },
  {
    id: "26",
    name: "The Fugees",
    image:
      "https://yt3.googleusercontent.com/ytc/AL5GRJUOiJk411L8lgfeIq8BkF5AART8n-rjZTWuvjkB=s900-c-k-c0x00ffffff-no-rj",
    rank: 26,
    video: "aIXyKmElvv8",
  },
  {
    id: "27",
    name: "Bad Plus",
    image:
      "https://media.npr.org/assets/img/2014/03/19/badplus_wide-ce010832ad4ecb119280cdd62eb818169ee290f9-s1100-c50.jpg",
    rank: 27,
    video: "vZI76J1UDKw",
  },
  {
    id: "28",
    name: "Charlie Parker",
    image:
      "https://s3.amazonaws.com/allaboutjazz/photos/a_large/ac568513cd95ba448502af33057719bd.jpg",
    rank: 28,
    video: "DmRkZeGFONg",
  },
  {
    id: "29",
    name: "Nicholas Payton",
    image:
      "https://communique.uccs.edu/wp-content/uploads/2020/02/ars_864x486-nicholas-payton-quartet.jpg",
    rank: 29,
    video: "f_dSlxgD2Fo",
  },
  {
    id: "30",
    name: "Randy Newman",
    image:
      "https://media.pitchfork.com/photos/5e40c6d00ad70b00084a00c5/2:1/w_2560%2Cc_limit/Randy%2520Newman-GettyImages-1205160724.jpg",
    rank: 30,
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
