/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
export const hideSubMenu = (elemArray) => {
    elemArray.forEach(el => {
        el.closest("[data-parent]").classList.remove('--active');
    })
}

