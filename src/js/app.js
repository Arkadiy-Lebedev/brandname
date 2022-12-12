import {
    hideSubMenu
} from "./modules/functions.js";



const filterItems = document.querySelectorAll("[data-sub='submenu']"),
    body = document.querySelector("body"),
    gamburger = document.querySelector(".gumburger"),
    mobileMenu = document.querySelector(".mobile-menu"),
    mobileBtnClose = document.querySelector(".mobile-close"),
    // btnShema = document.querySelectorAll(".header__btn-shema"),
    btnShemaMobile = document.querySelectorAll("[data-shema]"),
    settingGalery = document.querySelectorAll("[data-gallery] .sort__item-text"),
    settingCategory = document.querySelectorAll("[data-category] .sort__item-text");

    const hideElementsAll = (elemArray) => {
        elemArray.forEach(el => {
            el.classList.remove('--active');
        })
    }


const tabSetting = (tabArray) => {
    tabArray.forEach(el => {
    el.addEventListener("click", () => {
        if (!el.classList.contains("--active")) {
            hideElementsAll(tabArray);
            el.classList.add("--active");
           
        }
    })
})
}


tabSetting(settingGalery);
tabSetting(settingCategory);


const mobileMenuHide = () => {
    mobileMenu.classList.remove("--mobile-show")
}

gamburger.addEventListener("click", () => {
    mobileMenu.classList.add("--mobile-show")
})

mobileBtnClose.addEventListener("click", () => {
    mobileMenuHide()
})


document.addEventListener('click', e => {
    let target = e.target;    
    filterItems.forEach(el => {
        let parentTag = "[data-parent]";
        let itsMenu = target == el || el.closest(parentTag).contains(target);
        let menuIsActive = el.closest(parentTag).classList.contains('--active');
        if (!itsMenu && menuIsActive) {
            console.log(55555)
            hideSubMenu(filterItems)
        }
    })
})


filterItems.forEach(el => {
    el.addEventListener("click", (e) => {
        let parentDiv = el.closest("[data-parent]")

        if (parentDiv.classList.contains("--active")) {
            parentDiv.classList.remove("--active")
        } else {
            hideSubMenu(filterItems)
            parentDiv.classList.add("--active");
        }
    })
})

// btnShema.forEach(el => {
//     el.addEventListener("click", () => {
//         if (!el.classList.contains("--active")) {
//             hideElementsAll(btnShema);
//             el.classList.add("--active");
//             body.removeAttribute("class");
//             body.classList.add(el.getAttribute('data-shema'));
//         }
//     })
// })


btnShemaMobile.forEach(el => {
    el.addEventListener("click", () => {
        if (!el.classList.contains("--active")) {
            hideElementsAll(btnShemaMobile);
            el.classList.add("--active");
            body.removeAttribute("class");
            body.classList.add(el.getAttribute('data-shema'));
        }
    })
})

// копка показать фильтры

const btnFilterGallery = document.querySelector("[data-btn='filter-gallery']");
const filterGallery = document.querySelector("[data-filter='gallery']");

const btnFilterCategory = document.querySelector("[data-btn='filter-catagory']");
const filterCategory = document.querySelector("[data-filter='catagory']");


const filterToggle = (btn, filter) => {
    btn.addEventListener("click", () => {
        if (!btn.classList.contains("--active")) {
            btn.classList.add("--active")
            filter.classList.add("filter__wrapper--show")
        } else {
            btn.classList.remove("--active")
            filter.classList.remove("filter__wrapper--show")
        }    
    })
}

filterToggle(btnFilterGallery, filterGallery)
filterToggle(btnFilterCategory, filterCategory)





