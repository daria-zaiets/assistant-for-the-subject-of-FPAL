/** 
 * open/close dropdown menu
 * 
 * @param {NodeList} menubtn - switch element 
 * @param {NodeList} dropdown - dropdown menu content
 * 
 */

let menubtn = document.querySelector("#nav-toggle");
menubtn.onclick = () => {
    let dropdown = document.querySelector("#myDropdown");
    dropdown.classList.toggle("show");
}