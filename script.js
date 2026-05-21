const gallery = document.getElementById("gallery");

const videos = [
  "VID_20260519_084107.mp4"
];

const images = [
  "Screenshot_2026-05-20-10-30-18-389-edit.jpg"
];

videos.forEach(video => {

gallery.innerHTML += `

<div class="reel">

<video autoplay muted loop controls playsinline>
<source src="${video}" type="video/mp4">
</video>

<div class="overlay">
<h1>😈 DR.BLACKS 😈</h1>
</div>

</div>

`;

});

images.forEach(image => {

gallery.innerHTML += `

<div class="reel">

<img src="${image}">

<div class="overlay">
<h1>🔥 BLACKHOUSE 🔥</h1>
</div>

</div>

`;

});
