//definitions
document.addEventListener('DOMContentLoaded', function(){
  let tabs = document.querySelectorAll('.autotoc-level-1');
  for (tab of tabs) {
    if (tab.innerHTML == "Ownership"){
        tab.innerHTML = "Authors";
     }
}
});