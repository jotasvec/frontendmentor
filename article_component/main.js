const sharedButton = document.getElementById("shareButton");
const shareGroup = document.getElementById("share-group");
const shareGroupBottom = document.getElementById("share-group-bottom");

const shareList = document.createElement("div");
shareList.className = "share-list flex-col bottom-16 right-0 z-20 w-50 h-12"; // add hidden
shareList.innerHTML = `
    <div class="icons-groups h-11 ps-1 flex rounded-2xl items-center justify-evenly">
        <p class="mr-2 uppercase">Share</p>
        <a href="#" ><img src="./images/icon-facebook.svg" alt="Facebook" srcset="" /></a>
        <a href="#" ><img src="./images/icon-twitter.svg" alt="Twitter / X" srcset="" /></a>
        <a href="#" ><img src="./images/icon-pinterest.svg" alt="Pinterest" srcset="" /></a>
    </div>
    <div class="t_bottom mx-auto justify-self-center"></div> <!-- triangle bellow the share group -->
  `;

const mediaQuery = window.matchMedia("(max-width: 40rem)");

function handleResponsive(e) {
  if (e.matches) {
    console.log("passing to small screen");
    shareGroupBottom.appendChild(shareList);
  } else {
    shareGroup.appendChild(shareList);
  }
}

mediaQuery.addEventListener("change", handleResponsive);
handleResponsive(mediaQuery);

sharedButton.addEventListener("click", (e) => {
  console.log("clicked :>> ", e);
  if (mediaQuery.matches) {
    shareGroupBottom.classList.toggle("hidden");
  } else {
    shareGroup.classList.toggle("hidden");
  }
});
