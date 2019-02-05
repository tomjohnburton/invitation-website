document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("IronGenerator JS imported successfully!");

    if (document.getElementsByClassName("main").length === 1) {
      document.body.classList.add("scrollblock");
      console.log("block");
    }
  },
  false
);
