onload = function () {
    let buttons = document.querySelectorAll(".carousel-custom__box button"), prevButton;
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            if (prevButton)
                prevButton.className = "";

            this.className = "active";
            prevButton = this;
        }
    }
}