document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".list li");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const slideCount = slides.length;

    let currentIndex = 0;
    let autoSlide;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active1", i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        showSlide(currentIndex);
    }

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    function startAutoSlide() {
        autoSlide = setInterval(nextSlide, 5000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlide);
    }

    slides.forEach(slide => {
        slide.addEventListener("mouseenter", stopAutoSlide);
        slide.addEventListener("mouseleave", startAutoSlide);
    });

    showSlide(currentIndex);
    startAutoSlide();

    const tabLinks = document.querySelectorAll(".tab_link");
    const tabContents = document.querySelectorAll(".tab_contents");
    const slides3 = document.querySelectorAll(".swiper-slide");
    const contentItems = document.querySelectorAll(".content_txt>div");
    const viewTabs = document.querySelectorAll(
        '[data-tab="tab-11"], [data-tab="tab-21"], [data-tab="tab-31"]'
    );
    const swiperActive = document.querySelectorAll(".swiper-slide");

    tabLinks.forEach(function (tab) {
        tab.addEventListener("click", function () {
            if (this.classList.contains("active")) {
                return;
            }

            const tabID = this.getAttribute("data-tab");

            // 모든 탭에서 active 클래스 제거
            tabLinks.forEach(function (link) {
                link.classList.remove("active");
            });

            // 모든 콘텐츠에서 active 클래스 제거
            tabContents.forEach(function (content) {
                content.classList.remove("active");
                if (content.getAttribute("data-tab") === tabID) {
                    content.classList.add("active");
                }
            });

            // 모든 contentItems에서 active 클래스 제거
            contentItems.forEach(function (item) {
                item.classList.remove("active");
            });
            slides3.forEach(function (slides3) {
                slides3.classList.remove("active");
                slides3.classList.remove("none_active");
            });
            // 모든 viewTabs에서 active, none_active 제거 후 처리
            viewTabs.forEach(function (viewTab) {
                let correspondingTabID = tabID
                    .replace("tab-1", "tab-11")
                    .replace("tab-2", "tab-21")
                    .replace("tab-3", "tab-31");

                // 기존 active 및 none_active 클래스 제거
                viewTab.classList.remove("active");
                viewTab.classList.remove("none_active");

                // 대응되는 data-tab 속성값에 active 클래스 추가
                if (viewTab.getAttribute("data-tab") === correspondingTabID) {
                    viewTab.classList.add("active");
                } else {
                    viewTab.classList.add("none_active");
                }
            });

            // 클릭된 탭에 active 클래스 추가
            this.classList.add("active");
        });
    });

    slides3.forEach(function (slide3) {
        slide3.addEventListener("click", function () {
            const tabID = this.getAttribute("data-tab");

            // 모든 콘텐츠에서 active 클래스 제거
            contentItems.forEach(function (item) {
                item.classList.remove("active");
            });

            // 호버된 슬라이드와 관련된 콘텐츠에 active 클래스 추가
            const activeContent = document.querySelector(
                `.content_txt div[data-tab="${tabID}"]`
            );
            if (activeContent) {
                activeContent.classList.add("active");
            } else {
                console.log("No matching content found for tab:", tabID);
            }
        });
    });

    // swiperActive 관리 로직
    swiperActive.forEach(function (swiperA) {
        swiperA.addEventListener("click", function () {
            // 모든 슬라이드에서 active 제거 후 none_active 추가
            swiperActive.forEach(function (swiperB) {
                swiperB.classList.remove("active");
                swiperB.classList.add("none_active");
            });

            // 클릭된 슬라이드에 active 추가
            swiperA.classList.add("active");
            swiperA.classList.remove("none_active");
        });
    });

    const tabLinks1 = document.querySelectorAll(".tab_link1");
    const tabContents1 = document.querySelectorAll(".tab_contents1");

    tabLinks1.forEach(function (tab) {
        tab.addEventListener("click", function () {
            const tabID = this.getAttribute("data-tab");

            // 모든 탭과 콘텐츠에서 active 클래스 제거
            tabLinks1.forEach(function (link) {
                link.classList.remove("active");
            });
            tabContents1.forEach(function (content) {
                if (content.getAttribute("data-tab") === tabID) {
                    content.classList.add("active");
                } else {
                    content.classList.remove("active");
                }
            });

            // 클릭된 탭과 관련된 콘텐츠에 active 클래스 추가
            this.classList.add("active");
        });
    });

    const titles = document.querySelectorAll(".m_title");

    titles.forEach(function (title) {
        title.addEventListener("click", function () {
            var isActive = title.classList.contains("active");

            // 모든 제목과 내용 초기화
            titles.forEach(function (t) {
                t.classList.remove("active");
                t.nextElementSibling.classList.remove("show");
                t.nextElementSibling.style.height = "0px"; // 초기 높이 설정
                t.nextElementSibling.style.opacity = "0"; // 초기 opacity 설정
                t.nextElementSibling.style.visibility = "hidden"; // 초기 visibility 설정
                // title.style.fontWeight = "100";
            });

            // 클릭된 제목이 활성화되지 않은 경우 활성화
            if (!isActive) {
                title.classList.add("active");
                title.nextElementSibling.classList.add("show");
                title.nextElementSibling.style.height =
                    title.nextElementSibling.scrollHeight + "px"; // 내용 높이 조정
                title.nextElementSibling.style.opacity = "1"; // opacity 설정
                title.nextElementSibling.style.visibility = "visible"; // visibility 설정
                // title.style.fontWeight = "bold";
            }
        });
    });

    // const list15 = document.querySelector(".list15");
    // const list15Items = document.querySelectorAll(".list15 li");
    // const itemWidth =
    //     list15Items[0].offsetWidth +
    //     parseFloat(getComputedStyle(list15Items[0]).marginRight);
    // const totalItems = list15Items.length;
    // let isAnimating = false;

    // // 처음에 모든 아이템을 가로로 정렬
    // // list15.style.width = itemWidth * totalItems + "px";

    // // 다음 버튼 클릭 시
    // document
    //     .querySelector(".left_arrow")
    //     .addEventListener("click", function () {
    //         if (!isAnimating) {
    //             isAnimating = true;
    //             list15.style.transition = "margin-left 0.6s ease";
    //             list15.style.marginLeft = `-${itemWidth}px`;

    //             list15.addEventListener(
    //                 "transitionend",
    //                 function () {
    //                     // 첫 번째 항목을 마지막으로 이동
    //                     list15.appendChild(list15.firstElementChild);
    //                     // 이동 후, margin-left를 원래대로 초기화
    //                     list15.style.transition = "none";
    //                     list15.style.marginLeft = "0px";
    //                     isAnimating = false;
    //                 },
    //                 { once: true }
    //             );
    //         }
    //     });

    // // 이전 버튼 클릭 시
    // document
    //     .querySelector(".right_arrow")
    //     .addEventListener("click", function () {
    //         if (!isAnimating) {
    //             isAnimating = true;
    //             // 마지막 항목을 첫 번째로 이동하고 즉시 margin-left를 변경
    //             list15.insertBefore(
    //                 list15.lastElementChild,
    //                 list15.firstElementChild
    //             );
    //             list15.style.transition = "none";
    //             list15.style.marginLeft = `-${itemWidth}px`;

    //             // 그런 다음 슬라이드가 왼쪽에서 오른쪽으로 이동
    //             setTimeout(function () {
    //                 list15.style.transition = "margin-left 0.6s ease";
    //                 list15.style.marginLeft = "0px";
    //             }, 20);

    //             list15.addEventListener(
    //                 "transitionend",
    //                 function () {
    //                     isAnimating = false;
    //                 },
    //                 { once: true }
    //             );
    //         }
    //     });

    const carousel = document.querySelector(".css_carousel .list15");
    const leftArrow = document.querySelector(".left_arrow");
    const rightArrow = document.querySelector(".right_arrow");

    let currentIndex2 = 0;

    // 오른쪽 버튼 클릭 시
    rightArrow.addEventListener("click", () => {
        if (currentIndex2 > -100) {
            currentIndex2 -= 100;
            carousel.style.marginLeft = currentIndex2 + "%";
        }
    });

    // 왼쪽 버튼 클릭 시
    leftArrow.addEventListener("click", () => {
        if (currentIndex2 < 0) {
            currentIndex2 += 100;
            carousel.style.marginLeft = currentIndex2 + "%";
        }
    });
});
