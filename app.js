const shareHover = document.querySelector(".share-hover");
const share = document.querySelector(".share-image");
const removeShare = document.querySelector(".share-image-2");
const shareHoverShow = document.querySelector(".share-hover-show");


share.addEventListener("click", function() {

  shareHover.classList.add("share-hover-show");

  removeShare.addEventListener("click", function() {
    shareHover.classList.remove("share-hover-show");
  });

});
