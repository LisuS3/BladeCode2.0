const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelectorAll(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");
const imgPortfolio = document.querySelector(".preview-web")
const titlePortfolio = document.querySelector(".titlePortfolio")
const textPortfolio = document.querySelector(".textPortfolio")

// close modal function
const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

// close the modal when the close button and overlay is clicked
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});

// open modal function
const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};
// open modal event
openModalBtn.forEach(item => {
    item.addEventListener("click", openModal)
});



function showDetails(portfolio) {
    const portfoliosList = portfolio.getAttribute("data-portfolio-img");
    const dataTitlePortfolio = portfolio.getAttribute("data-portfolio-title");
    const dataTextPortfolio = portfolio.getAttribute("data-portfolio-text");

    titlePortfolio.innerText = dataTitlePortfolio
    textPortfolio.innerText = dataTextPortfolio
    imgPortfolio.setAttribute("src", portfoliosList)


}
