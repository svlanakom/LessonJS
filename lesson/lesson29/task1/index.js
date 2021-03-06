// export const addImage = (imgSrc, callback) => {
//   const imgElem = document.createElement("img");
//   imgElem.setAttribute("alt", "My photo");
//   imgElem.src = imgSrc;
//   const containerElem = document.querySelector(".page");
//   containerElem.append(imgElem);

//   const onImageLoaded = () => {
//     const { width, height } = imgElem;
//     callback(null, { width, height });
//   };

//   imgElem.addEventListener("load", onImageLoaded);
//   imgElem.addEventListener("error", () => callback("Image load is failed"));
// };

// const onImageLoaded = (error, data) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
// const { width, height } = data;
// const sizeElem = document.querySelector(".image-size");

// sizeElem.textContent = `${width} x ${height}`;
// };

// examples
// addImage(
// "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg",
//   onImageLoaded
// );
export const addImage = (imgSrc, callback) => {
  const imgElem = document.createElement("img");
  imgElem.setAttribute("alt", "My photo");
  imgElem.src = imgSrc;
  const containerElem = document.querySelector(".page");
  containerElem.append(imgElem);

  imgElem.addEventListener("load", () => callback(null, imgElem));
  imgElem.addEventListener("error", (e) => callback("Image load is failed"));
};

const onImageLoaded = (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  const { width, height } = data;
  const sizeElem = document.querySelector(".image-size");

  sizeElem.textContent = `${width} x ${height}`;
};

// examples;
// addImage(
//   // "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg",
//   "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigsstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg",
//   onImageLoaded
// );
