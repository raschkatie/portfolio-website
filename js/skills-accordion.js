document.addEventListener("DOMContentLoaded", () => {
    const allDetails = document.querySelectorAll(".skills-collapsible details");

    allDetails.forEach((detail) => {
        const summary = detail.querySelector("summary");
        const content = detail.querySelector(".details-content");

        content.style.height = "0px";
        content.style.opacity = "0";

        summary.addEventListener("click", (e) => {
            e.preventDefault();

            const isOpening = !detail.hasAttribute("open");

            // close other sections
            allDetails.forEach((other) => {
                if (other !== detail && other.hasAttribute("open")) {
                    const otherContent = other.querySelector(".details-content");
                    const otherSummary = other.querySelector("summary");

                    otherContent.style.height = otherContent.scrollHeight + "px";
                    requestAnimationFrame(() => {
                        otherContent.style.height = "0px";
                        otherContent.style.opacity = "0";
                    });
                    
                    otherContent.addEventListener("transitionend", function handleClose(e) {
                        if (e.propertyName === "height" && parseInt(otherContent.style.height) === 0) {
                            other.removeAttribute("open");
                            otherSummary.classList.remove("rotate");
                            otherContent.removeEventListener("transitionend", handleClose);
                        }
                    });
                }
            });

            // toggle clicked section
            if (isOpening) {
                detail.setAttribute("open", "true");
                const fullHeight = content.scrollHeight + "px";
                content.style.height = fullHeight;
                content.style.opacity = "1";
                summary.classList.add("rotate");
            } else {
                content.style.height = content.scrollHeight + "px";
                requestAnimationFrame(() => {
                    content.style.height = "0px";
                    content.style.opacity = "0";
                });
                summary.classList.remove("rotate");
                
                content.addEventListener("transitionend", function handleClose(e) {
                    if (e.propertyName === "height" && parseInt(content.style.height) === 0) {
                        detail.removeAttribute("open");
                        content.removeEventListener("transitionend", handleClose);
                    }
                });
            }
        });
    });
});