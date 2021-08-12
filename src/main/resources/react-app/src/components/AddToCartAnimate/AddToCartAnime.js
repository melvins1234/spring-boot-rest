const AddToCartAnime = (e, img, parentElement) => {
  let shoppingCart = document.querySelector(".header__top--search-icon");
  let imgToDrag = img;

  if (imgToDrag) {
    var imgclone = imgToDrag.cloneNode(true);
    imgclone.style.cssText =
      "top: 0; left: 0; transform: opacity: 0.8; position: absolute; height: 150px; width: 150px; z-index: 100;";

    parentElement.appendChild(imgclone);

    imgclone.animate(
      [
        {
          opacity: "0.8",
          position: "absolute",
          height: "150px",
          width: "150px",
          "z-index": "100",
        },
        {
          top: shoppingCart.offsetTop - 1000 + "px",
          left: shoppingCart.offsetLeft + 10 + "px",
          width: "75px",
          height: "75px",
        },
      ],
      {
        easing: "cubic-bezier(0.42, 0, 0.58, 1)",
        duration: 1000,
      }
    );
    imgclone.animate([{}, { width: 0, height: 0 }], 1000);
    setTimeout(function () {
      imgclone.remove();
    }, 900);
  }
};

export default AddToCartAnime;
