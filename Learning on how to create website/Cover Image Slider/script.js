const sliderTabs = document.querySelectorAll(".slider-tab");
const sliderIndicator = document.querySelector(".slider-indicator");

//Update the indicator height and width
const updateIndicator = (tab, index) => { 
    sliderIndicator.style.transform = `translateX(${tab.offsetLeft - 20}px)`; 
    sliderIndicator.style.width = `${tab.getBoundingClientRect().width}px`;
}

// Initialize Swiper Instance
const swiper = new Swiper(".slider-container", {
    effect: "fade", 
    speed: 1300,
    // autoplay: { delay: 4000 }
    navigation: {
        prevE1: "#slide-prev",
        nextE1: "#slide-next"
    },
    on: {
        //Update indicator on slide change 
        slideChange: () => {
            const currentTabIndex = [...sliderTabs].indexOf(sliderTabs[swiper.activeIndex]);
            updateIndicator(sliderTabs[swiper.activeIndex],currentTabIndex);
        }
    }
});

// Update the slide and indicator on tab click
sliderTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        swiper.slideTo(index);
        updateIndicator(tab, index);
    });
});

updateIndicator(sliderTabs[0], 0);
window.addEventListener("resize", () => updateIndicator(sliderTabs[swiper.activeIndex], 0));