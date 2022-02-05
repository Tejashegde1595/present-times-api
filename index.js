const express = require('express');
var axios = require('axios');
var cors = require('cors')
const app = express();
const port = 8080;
const API_KEY="08e3fdb043fc41f8b43e35ccf3d18b8f";
const category = `&category=`;
const country = `country=`;
const baseUrl='https://newsapi.org/v2/top-headlines?';
var path = require('path');
app.use(cors());

app.get('/news', (req, res) => {
  const countryCode = req.query.country;
  const categoryCode = req.query.category;
  var data=[];
  const config = {
    headers: {
        "X-Api-Key": API_KEY,
        }
  }
  axios.get(baseUrl+country+countryCode+category+categoryCode,config)
  .then(response => {
      data=response.data;
      res.send(data);
  });
});

app.get('/documents', function(req, res) {
  console.log("getting documents");
  res.header('Content-Type', 'application/json');
  res.json(docs);
});

// Returns the HTML content of a single AMP document.
app.get('/:document', function(req, res) {
    var options = {
      root: path.join(__dirname,'/content/')
  };
  var fileName = req.params.document;
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err);
    } else {
        console.log('Sent:', fileName);
    }
  });
});

// Returns the hero image of AMP document.
app.get('/hero/:document', function(req, res) {
  var options = {
    root: path.join(__dirname,'/content/hero/')
};
var fileName = req.params.document;
res.sendFile(fileName, options, function (err) {
  if (err) {
    console.log(err);
  } else {
      console.log('Sent:', fileName);
  }
});
});


// When testing the production build (via `npm run build`), simply serve the compiled html and js in the `build` dir.
app.use(express.static('build'));

var docs = [
  {
    "title": "16 Top Spots for Hiking",
    "section": "Top Spots",
    "kicker": "Don't forget your walking stick",
    "author": "Demetria T. Edwards",
    "date": "Sep 24, 2016 10:04 AM",
    "image": "/hero/21.jpeg",
    "url": "/21.amp.html"
  },
  {
    "title": "Vancouver in 48 Hours",
    "section": "48 Hours",
    "kicker": "A Marvel in British Columbia",
    "author": "Todd M. Smallwood",
    "date": "Sep 22, 2016 5:04 AM",
    "image": "/hero/6.jpeg",
    "url": "/6.amp.html"
  },
  {
    "title": "18 Top Spots for Backpacking",
    "section": "Top Spots",
    "kicker": "Pack your backpack",
    "author": "Demetria T. Edwards",
    "date": "Sep 20, 2016 7:06 AM",
    "image": "/hero/29.jpeg",
    "url": "/29.amp.html"
  },
  {
    "title": "Bucket List: New Zealand",
    "section": "Bucket List Adventures",
    "kicker": "This majestic land is offers everything from volcanic terrain to lush pastures",
    "author": "Nolan C. Sundquist",
    "date": "Sep 18, 2016 7:02 AM",
    "image": "/hero/12.jpeg",
    "url": "/12.amp.html"
  },
  {
    "title": "Bucket List: Sweden",
    "section": "Bucket List Adventures",
    "kicker": "Go Nordic and be amazed",
    "author": "Nolan C. Sundquist",
    "date": "Sep 16, 2016 1:37 PM",
    "image": "/hero/20.jpeg",
    "url": "/20.amp.html"
  },
  {
    "title": "Bucket List: Scotland",
    "section": "Bucket List Adventures",
    "kicker": "Venture into the highlands and see some truly remarkable sights",
    "author": "Nolan C. Sundquist",
    "date": "Sep 16, 2016 7:21 AM",
    "image": "/hero/17.jpeg",
    "url": "/17.amp.html"
  },
  {
    "title": "Bucket List: Grand Canyon",
    "section": "Bucket List Adventures",
    "kicker": "How to spend days exploring this US national treasure",
    "author": "Carol R. Wright",
    "date": "Sep 16, 2016 2:34 AM",
    "image": "/hero/16.jpeg",
    "url": "/16.amp.html"
  },
  {
    "title": "Bucket List: UK Countryside",
    "section": "Bucket List Adventures",
    "kicker": "Get outside the cities to relax in the idyllic heartland of the country",
    "author": "Shannon W. Marshall",
    "date": "Sep 14, 2016 9:25 AM",
    "image": "/hero/15.jpeg",
    "url": "/15.amp.html"
  },
  {
    "title": "Paris in 48 Hours",
    "section": "48 Hours",
    "kicker": "The City of Lights",
    "author": "Joan P. Cypert",
    "date": "Sep 13, 2016 2:14 PM",
    "image": "/hero/3.jpeg",
    "url": "/3.amp.html"
  },
  {
    "title": "Bucket List: Banff",
    "section": "Bucket List Adventures",
    "kicker": "Don't miss all that this scenic spot in Alberta's Rockies can offer",
    "author": "Shannon W. Marshall",
    "date": "Sep 13, 2016 1:56 PM",
    "image": "/hero/14.jpeg",
    "url": "/14.amp.html"
  },
  {
    "title": "Bucket List: Romania",
    "section": "Bucket List Adventures",
    "kicker": "Some of the most scenic spots on earth",
    "author": "Nolan C. Sundquist",
    "date": "Sep 12, 2016 6:19 AM",
    "image": "/hero/19.jpeg",
    "url": "/19.amp.html"
  },
  {
    "title": "Hamburg in 48 Hours",
    "section": "48 Hours",
    "kicker": "Gateway to the World",
    "author": "Joan P. Cypert",
    "date": "Sep 10, 2016 10:15 PM",
    "image": "/hero/1.jpeg",
    "url": "/1.amp.html"
  },
  {
    "title": "Chicago in 48 Hours",
    "section": "48 Hours",
    "kicker": "The Windy City",
    "author": "Joan P. Cypert",
    "date": "Sep 7, 2016 9:14 AM",
    "image": "/hero/7.jpeg",
    "url": "/7.amp.html"
  },
  {
    "title": "Montreal in 48 Hours",
    "section": "48 Hours",
    "kicker": "The City of Saints",
    "author": "Joan P. Cypert",
    "date": "Sep 7, 2016 4:39 AM",
    "image": "/hero/4.jpeg",
    "url": "/4.amp.html"
  },
  {
    "title": "Melbourne in 48 Hours",
    "section": "48 Hours",
    "kicker": "Australia's Second City",
    "author": "Todd M. Smallwood",
    "date": "Sep 6, 2016 4:37 PM",
    "image": "/hero/2.jpeg",
    "url": "/2.amp.html"
  },
  {
    "title": "14 Top Spots for a Music-Loving Adventurer",
    "section": "Top Spots",
    "kicker": "From EDM to sitars",
    "author": "Russell D. Hogan",
    "date": "Sep 6, 2016 5:50 AM",
    "image": "/hero/28.jpeg",
    "url": "/28.amp.html"
  },
  {
    "title": "8 Top Spots to Experience America's Heartland",
    "section": "Top Spots",
    "kicker": "Sooie!",
    "author": "Russell D. Hogan",
    "date": "Sep 4, 2016 5:45 PM",
    "image": "/hero/22.jpeg",
    "url": "/22.amp.html"
  },
  {
    "title": "San Francisco in 48 Hours",
    "section": "48 Hours",
    "kicker": "The City By the Bay",
    "author": "Joan P. Cypert",
    "date": "Sep 4, 2016 11:41 AM",
    "image": "/hero/9.jpeg",
    "url": "/9.amp.html"
  },
  {
    "title": "11 Top Spots for Woodsy Splendor",
    "section": "Top Spots",
    "kicker": "Pitch your tent",
    "author": "Russell D. Hogan",
    "date": "Sep 3, 2016 1:16 PM",
    "image": "/hero/27.jpeg",
    "url": "/27.amp.html"
  },
  {
    "title": "New York City in 48 Hours",
    "section": "48 Hours",
    "kicker": "The Big Apple",
    "author": "Joan P. Cypert",
    "date": "Sep 2, 2016 3:51 PM",
    "image": "/hero/11.jpeg",
    "url": "/11.amp.html"
  },
  {
    "title": "Seattle in 48 Hours",
    "section": "48 Hours",
    "kicker": "The Emerald City",
    "author": "Todd M. Smallwood",
    "date": "Aug 29, 2016 1:46 PM",
    "image": "/hero/5.jpeg",
    "url": "/5.amp.html"
  },
  {
    "title": "23 Top Spots to Just Relax",
    "section": "Top Spots",
    "kicker": "Ahhhhhh...",
    "author": "Demetria T. Edwards",
    "date": "Aug 28, 2016 2:18 PM",
    "image": "/hero/23.jpeg",
    "url": "/23.amp.html"
  },
  {
    "title": "15 Top Spots for Underwater Adventuring",
    "section": "Top Spots",
    "kicker": "Grab your snorkel",
    "author": "Demetria T. Edwards",
    "date": "Aug 28, 2016 12:18 PM",
    "image": "/hero/26.jpeg",
    "url": "/26.amp.html"
  },
  {
    "title": "Bucket List: Yosemite",
    "section": "Bucket List Adventures",
    "kicker": "From Mariposa Grove to Glacier Point, beautiful waterfalls and rock formations await you",
    "author": "Carol R. Wright",
    "date": "Aug 28, 2016 11:12 AM",
    "image": "/hero/13.jpeg",
    "url": "/13.amp.html"
  },
  {
    "title": "Bucket List: Switzerland",
    "section": "Bucket List Adventures",
    "kicker": "From gorgeous lakes to the beautiful Alps",
    "author": "Nolan C. Sundquist",
    "date": "Aug 26, 2016 4:10 PM",
    "image": "/hero/18.jpeg",
    "url": "/18.amp.html"
  },
  {
    "title": "Kuala Lumpur in 48 Hours",
    "section": "48 Hours",
    "kicker": "The Garden City of Lights",
    "author": "Todd M. Smallwood",
    "date": "Aug 25, 2016 4:47 PM",
    "image": "/hero/10.jpeg",
    "url": "/10.amp.html"
  },
  {
    "title": "12 Top Spots for Surfing",
    "section": "Top Spots",
    "kicker": "Hang Ten!",
    "author": "Demetria T. Edwards",
    "date": "Aug 23, 2016 3:07 PM",
    "image": "/hero/25.jpeg",
    "url": "/25.amp.html"
  },
  {
    "title": "17 Top Spots for Incredible Wildlife",
    "section": "Top Spots",
    "kicker": "W-hoot knew?",
    "author": "Demetria T. Edwards",
    "date": "Aug 23, 2016 8:41 AM",
    "image": "/hero/30.jpeg",
    "url": "/30.amp.html"
  },
  {
    "title": "Kyoto in 48 Hours",
    "section": "48 Hours",
    "kicker": "Japan's Former Thousand-Year Capital",
    "author": "Todd M. Smallwood",
    "date": "Aug 22, 2016 11:26 PM",
    "image": "/hero/8.jpeg",
    "url": "/8.amp.html"
  },
  {
    "title": "11 Top Spots for Incredible Photography",
    "section": "Top Spots",
    "kicker": "Say cheese!",
    "author": "Russell D. Hogan",
    "date": "Aug 21, 2016 10:57 AM",
    "image": "/hero/24.jpeg",
    "url": "/24.amp.html"
  }
];




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// Returns a list of AMP document metadata to display on the app shell.
