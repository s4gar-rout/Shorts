const posts = [
  {
    profileImg: "https://randomuser.me/api/portraits/men/11.jpg",
    name: "Aarav Sharma",
    isFollowed: false,
    isLiked: false,
    likes: 120,
    comments: 34,
    shares: 10,
    description: "Exploring new horizons in web development every day!",
    video: "Assets/video-1.mp4",
  },
  {
    profileImg: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Priya Mehta",
    isFollowed: true,
    isLiked: true,
    likes: 250,
    comments: 67,
    shares: 22,
    description: "Learning React has been an amazing experience so far!",
    video: "Assets/video-2.mp4",
  },
  {
    profileImg: "https://randomuser.me/api/portraits/men/13.jpg",
    name: "Rohan Verma",
    isFollowed: false,
    isLiked: true,
    likes: 89,
    comments: 12,
    shares: 5,
    description: "Just finished my JavaScript basics today!",
    video: "Assets/video-3.mp4",
  },
  {
    profileImg: "https://randomuser.me/api/portraits/women/14.jpg",

    name: "Sara Khan",
    isFollowed: true,
    isLiked: false,
    likes: 310,
    comments: 54,
    shares: 18,
    description: "UI/UX design is so fascinating to learn!",
    video: "Assets/video-4.webm",
  },
  {
    profileImg: "https://randomuser.me/api/portraits/men/15.jpg",

    name: "Dev Patel",
    isFollowed: false,
    isLiked: true,
    likes: 175,
    comments: 28,
    shares: 9,
    description: "Building projects is the best way to learn coding.",
    video: "Assets/video-5.webm",
  },
  {
    profileImg: "https://randomuser.me/api/portraits/women/16.jpg",

    name: "Ishita Roy",
    isFollowed: true,
    isLiked: true,
    likes: 420,
    comments: 90,
    shares: 30,
    description: "CSS animations are so much fun to experiment with!",
    video: "Assets/video-6.mp4",
  },
  {
    profileImg: "https://randomuser.me/api/portraits/men/17.jpg",

    name: "Kunal Singh",
    isFollowed: false,
    isLiked: false,
    likes: 98,
    comments: 17,
    shares: 4,
    description: "On a mission to master full-stack development.",
    video: "Assets/video-7.mp4",
  },
  {
    profileImg: "https://randomuser.me/api/portraits/women/18.jpg",
    name: "Neha Gupta",
    isFollowed: true,
    isLiked: false,
    likes: 260,
    comments: 42,
    shares: 13,
    description: "Starting my MERN journey — super excited!",
    video: "Assets/video-8.mp4",
  },
];
var wrapper = document.querySelector(".wrapper");

function addData() {
  var clutter = "";
  posts.forEach(function (dets, idx) {
    clutter += `   <div class="card">
                <div class="reel">
                    <div class="video">
                       <video src="${dets.video}" autoplay  loop></video>
                    </div>
                    <div class="btm">
                        <div class="btm-top">
                            <img src="${dets.profileImg}"
                                alt="">
                            <h3>${dets.name}</h3>
                            <button class="followBtn" id="${idx}">${
      dets.isFollowed ? "Unfollow" : "Follow"
    }</button>
                        </div>
                        <p>${dets.description}</p>

                    </div>
                    <div class="icons">
                        <div id=${idx} class="like">
                          ${
                            dets.isLiked
                              ? `<i  class="love ri-heart-fill"></i>`
                              : `<i class="ri-heart-line"></i>`
                          }
                            <h3>${dets.likes}</h3>
                        </div>
                        <div class="comment">
                            <i class="ri-message-3-line"></i>
                            <h3>${dets.comments}</h3>
                        </div>
                        <div class="share">
                            <i class="ri-share-forward-line"></i>
                            <h3>${dets.shares}</h3>
                        </div>
                        <div class="menu">
                            <i class="ri-more-2-line"></i>
                        </div>

                    </div>
                </div>
            </div>`;
  });

  wrapper.innerHTML = clutter;
}

addData();

wrapper.addEventListener("click", function (dets) {
  if (dets.target.className == "like") {
    if (!posts[dets.target.id].isLiked) {
      posts[dets.target.id].likes++;
      posts[dets.target.id].isLiked = true;
    } else {
      posts[dets.target.id].likes--;
      posts[dets.target.id].isLiked = false;
    }
  }
  if (dets.target.className == "followBtn") {
    if (!posts[dets.target.id].isFollowed) {
      posts[dets.target.id].isFollowed = true;
    } else {
      posts[dets.target.id].isFollowed = false;
    }
  }

  addData();
});
