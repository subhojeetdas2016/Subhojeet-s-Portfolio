window.addEventListener("load", function () {
    console.log("Window loaded"); // Check if this logs in the console
    let loader = document.querySelector(".loader-container");
    let mainContent = document.querySelector(".cmp-bdy");
    console.log(loader); // Check if this logs the loader element
    if (loader) {
        loader.style.display = "none";
    }
    if (mainContent) {
        mainContent.style.display = "block";
        mainContent.style.filter = "none"; // Remove the blur effect
    }
});