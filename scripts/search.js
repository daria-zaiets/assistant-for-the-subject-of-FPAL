/**
  * menu filter by reference book topics
 * 
 * @param {NodeList} input - input element 
 * @param {NodeList} li - all menu items (menu>li)
 * @param {NodeList} a - all menu links (menu>li>a)
 * @param {string} filter - input value
 * 
 */
let input = document.querySelector("#mySearch");
input.oninput = () => {
  let filter, a, li;
  filter = input.value.toUpperCase();
  li = document.querySelectorAll(".item");
  a = document.querySelectorAll(".main-menu-link");
  // Search for all items in the list and hide those that don't match the search query
  for (let i = 0; i < li.length; i++) {
    if (~a[i].textContent.toUpperCase().indexOf(filter)) {
      li[i].style.display = "none";
    }
    else {
      li[i].style.display = "";
    }
  }
}