function debounce(fn, time) {
    let timeSearch;
    return function (...args) {
        if (timeSearch) clearTimeout(timeSearch);
        timeSearch = setTimeout(() => {
            fn.apply(this,args)
        }, time)
    }

}
function search(query) {
    console.log("searching for :" + query);

}
let deb = debounce(search, 2000)
deb("apple")
deb("apple pi")
deb("apple pine")
deb("pine apple")