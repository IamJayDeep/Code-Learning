var playlistData = [
  {
    id: "1",
    title: "Croissants | Flour and Stone",
    thumbnail: "https://i.vimeocdn.com/video/600595198_390x220.webp",
  },
  {
    id: "2",
    title: "Perfect Mashed Potatoes and Gravy",
    thumbnail: "https://i.vimeocdn.com/video/604150056_390x220.webp",
  },
  {
    id: "3",
    title: "The Heart of Soba",
    thumbnail: "https://i.vimeocdn.com/video/726986673_390x220.webp",
  },
  {
    id: "4",
    title: "Grilled Cheese 9 Ways",
    thumbnail: "https://i.vimeocdn.com/video/570486309_390x220.webp",
  },
  {
    id: "5",
    title: "Pineapple Cheesecake",
    thumbnail: "https://i.vimeocdn.com/video/602705517_390x220.webp",
  },
  {
    id: "6",
    title: "Lemony Chicken Noodle Soup",
    thumbnail: "https://i.vimeocdn.com/video/537261616_390x220.jpg",
  },
  {
    id: "7",
    title: "Pumpkin Roll",
    thumbnail: "https://i.vimeocdn.com/video/608805594_590x332.jpg",
  },
  {
    id: "8",
    title: "How to Brine a Turkey",
    thumbnail: "https://i.vimeocdn.com/video/601730519_590x332.jpg",
  },
  {
    id: "9",
    title: "Stop Motion Dry-Brined Turkey Recipe",
    thumbnail: "https://i.vimeocdn.com/video/456852083_590x332.jpg",
  },
  {
    id: "10",
    title: "Butternut Squash Ravioli",
    thumbnail: "https://i.vimeocdn.com/video/600328152_590x332.jpg",
  },
];

var videoPlaySectionData = [
  {
    id: "1",
    title: "Croissants | Flour and Stone",
    description:
      "There is no other way but to commit wholeheartedly to a relationship with a croissant. We have all found ourselves at the mercy of its allure. Here, in another epic film by the uber talented Nathan Rodger, our Erin divulges her personal romance with The Croissant.",
    views: 22500,
    vimeoId: 190062231,
    isLiked: true,
    isSaved: true,
  },
  {
    id: "2",
    title: "Perfect Mashed Potatoes and Gravy",
    description:
      "Get the recipe for potatoes at http://bit.ly/mashedpotatoesandgravy.",
    views: 22200,
    vimeoId: 192650599,
    isLiked: false,
    isSaved: false,
  },
  {
    id: "3",
    title: "The Heart of Soba",
    description:
      "Binge more: MOONCAKE: THE LOST ART - foodtalkies.com/mooncake THE GIFT OF MOCHI - foodtalkies.com/mochi NIRVANA - foodtalkies.com/nirvana EARTH - foodtalkies.com/earth Special thanks to: Mutsuko Soma & Tiffany Ran. Direction, Cinematography & Edit: Andrew Gooi - andrewgooi.com Seattle-based chef and soba artisan, Mutsuko Soma, of Kamonegi / kamonegiseattle.com / shares the craft behind these amazing buckwheat noodles.",
    views: 6297820,
    vimeoId: 192834629,
    isLiked: false,
    isSaved: true,
  },
  {
    id: "4",
    title: "Grilled Cheese 9 Ways",
    description:
      "The best grilled cheese sandwich recipes clubbed into one video. Cheers!!",
    views: 38600,
    vimeoId: 166409731,
    isLiked: false,
    isSaved: true,
  },
  {
    id: "5",
    title: "Pineapple Cheesecake",
    description:
      "Pineapple Cheesecake: 150g butter snap cookies; 90g butter, melted; 2 packs cream cheese, room temperature; 3/4 cup sugar; 1/2 tsp vanilla extract; 4 eggs; 4 slices canned pineapple (drained first); Preheat oven at 320°F. Lightly grease mini muffin pans with melted butter, then line each recess with strips of wax paper (1in wide x 3in long), crossing at base. Pulse cookies in a food processor until finely crumbled, then add melted butter to combine. Divide mixture into muffin pans and press firmly into bases. Prepare filling by mixing cream cheese, sugar and vanilla extract with an electric mixer. Add eggs, one at a time, beating well after each addition. Pulse sliced pineapple in a food processor into pulp and add to cream cheese mixture. Divide filling into muffin pans and bake 25-30 minutes until just firm. Cool slightly, then chill for at least 2 hours. Serving suggestion: Pipe some whipped cream over the cheesecake and top with a small slice of pineapple that's been dipped in Li-hing powder. Garnish with mint leaves.",
    views: 998110,
    vimeoId: 191626548,
    isLiked: true,
    isSaved: true,
  },
  {
    id: "6",
    title: "Lemony Chicken Noodle Soup",
    description: "blog.moonberry.com/recipe-lemony-chicken-noodle-soup/",
    views: 30210,
    vimeoId: 140657270,
    isLiked: true,
    isSaved: true,
  },
  {
    id: "7",
    title: "Pumpkin cream cheese swiss roll",
    description:
      "The ultimate Pumpkin cream cheese swiss roll recipe. Really simple to follow.",
    views: 19829,
    vimeoId: 196351090,
    isLiked: true,
    isSaved: true,
  },
  {
    id: "8",
    title: "How to Brine a Turkey",
    description: "Get the recipe at http://bit.ly/tbrine.",
    views: 12230,
    vimeoId: 190907060,
    isLiked: true,
    isSaved: true,
  },
  {
    id: "9",
    title: "Stop Motion Dry-Brined Turkey Recipe",
    description:
      "This is a short stop motion video of a recipe I created for a turkey cook-off(wine pairing towards the end). With a special thanks to City Winery Chicago. *Background song - 'Go Bang' by SBTRKT",
    views: 30010,
    vimeoId: 80687436,
    isLiked: true,
    isSaved: true,
  },
  {
    id: "10",
    title: "Butternut Squash Ravioli with Brown Butter Sage Sauce",
    description: "Get the recipe at http://bit.ly/ButternutRav.",
    views: 851029,
    vimeoId: 189860660,
    isLiked: true,
    isSaved: true,
  },
];

$(document).ready(function () {
  function onCardClick(e) {
    $(".fa-heart").removeClass("fa-solid");
    $(".fa-bookmark").removeClass("fa-solid");
    console.log(`clicked`, e.currentTarget.id);
    let cardId = e.currentTarget.id;
    $(".playlist-card").removeClass("active-card");
    $(`#${cardId}`).addClass("active-card");

    let videoData;
    for (let i = 0; i < videoPlaySectionData.length; i++) {
      if (videoPlaySectionData[i].id === cardId) {
        videoData = videoPlaySectionData[i];
        break;
      }
    }

    $("#video-player").attr(
      "src",
      `https://player.vimeo.com/video/${videoData.vimeoId}`
    );

    $("video-title").text(videoData.title);
    $("#video-description").text(videoData.description);
    const viewsInK = videoData.views / 1000;
    $("#views-count").text(viewsInK.toFixed(1) + "k");

    if (videoData.isLiked === true) {
      $("#.fa-heart").addClass("fa-solid");
    }
    if (videoData.isSaved === true) {
      $(".fa-bookmark").addClass("fa-solid");
    }
  }

  function createPlaylistCard(obj, pos) {
    // <div id="card3" class="playlist-card">
    //     <img class="thumbnail" src="https://i.vimeocdn.com/video/726986673_390x220.webp" />
    //     <h3 class="video-card-title">The Heart of Soba</h3>
    // </div>

    var mainDiv = document.createElement("div");
    mainDiv.id = obj.id;
    mainDiv.className = "playlist-card";
    mainDiv.addEventListener("click", onCardClick);
    $(".playlist-card:first").addClass("active-card");

    var thumbnail = document.createElement("img");
    thumbnail.src = obj.thumbnail;
    thumbnail.className = "thumbnail";

    var title = document.createElement("h3");
    title.className = "video-card-title";
    title.innerHTML = obj.title;

    mainDiv.appendChild(thumbnail);
    mainDiv.appendChild(title);

    return mainDiv;
  }

  for (let i = 0; i < playlistData.length; i++) {
    $("#playlist-wrapper").append(createPlaylistCard(playlistData[i]));
  }
});
