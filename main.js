const gallery = [];
for (var category of "space cat dog nature".split(" ")) {
  for (var i = 1; i <= 3; i++) gallery.push(`${category}-${i}`);
}
console.log(gallery);

const galleryImages = document.querySelectorAll(".img_grid img");
galleryImages.forEach((image, i) => {
  image.src = `./img/gallery/${gallery[i]}.jpg`;
});
