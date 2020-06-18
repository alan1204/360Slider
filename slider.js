const slider = document.querySelector("#slider");
const canvas = document.querySelector("#canvas");
slider.addEventListener("input", handleInputSlider);
const ctx = canvas.getContext("2d");
const images = [];
window.addEventListener("load", pageLoaded);

function pageLoaded() {
  for (let i = 1; i <= 36; i += 1) {
    const number = i.toString().padStart(2, "00");
    const url = `https://stockx-360.imgix.net/Nike-Air-Force-1-Low-White-07/Images/Nike-Air-Force-1-Low-White-07/Lv2/img${number}.jpg?auto=format,compress&q=90&updated_at=1561409052&w=1000`;
    const image = new Image();
    image.src = url;
    image.addEventListener("load", () => {
      images[i] = image;
      if (i == 1) {
        loadImage(i);
      }
    });
  }
}

function loadImage(index) {
  ctx.drawImage(images[index], 0, 0, canvas.width, canvas.height);
}

function handleInputSlider() {
  //console.log(this.value);
  loadImage(this.value);
}
