import {hideSubMenu} from "./modules/functions.js";



const filterItems = document.querySelectorAll("[data-sub='submenu']"),
      body =  document.querySelector("body"),
      btnShema = document.querySelectorAll(".header__btn-shema");
     
    document.addEventListener('click', e => {
        let target = e.target;
        filterItems.forEach(el => {
            let itsMenu = target == el || el.contains(target);
            let menuIsActive = el.classList.contains('--active');
                if (!itsMenu && menuIsActive) {
                    hideSubMenu(filterItems)
                    // el.classList.toggle("--active")
            }
        })        
      })
    


filterItems.forEach(el => {
    el.addEventListener("click", (e) => {
        
        
        for (let elem of el.lastElementChild.children) {
                
            if (elem != e.target || el.lastChild != e.target) {
                console.log(e.target)
                console.log(elem)
                el.classList.toggle("--active")
            } else {
                console.log(5456)
                   if (el.classList.contains("--active")) {
                            el.classList.remove("--active")
                        } else {
                            hideSubMenu(filterItems)
                        el.classList.add("--active");
                        }
                        }
    
            
        }

        
     
        //          if (el.classList.contains("--active")) {
        //     el.classList.remove("--active")
        // } else {
        //     hideSubMenu(filterItems)
        // el.classList.add("--active");
        // }
    })
})



    btnShema.forEach(el => {
        el.addEventListener("click", () => {
            if (!el.classList.contains("--active")) {
                hideSubMenu(btnShema)
                el.classList.add("--active");
                body.removeAttribute("class");
                body.classList.add(el.getAttribute('data-shema'));
            }
        })
})


    
