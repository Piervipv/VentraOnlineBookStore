function getOrderedIndexes(names) {
    var indexes = []
    var copy = names.slice(0);
    //console.log(names);
    let ordered = copy.sort();
    //console.log(names)
    //console.log(ordered);
    for (let i = 0; i< ordered.length; i++){
        for (let index = 0; index < names.length; index++)  {
            if (names[index]== ordered[i]){
                indexes.push(index)
            }
        }
    }
    //console.log(indexes);
    return indexes;

}

function getData(string){
    // string is like gg/mm/yyyy
    let elements = string.split('/');
    let year = parseInt(elements[2]);
    let month = parseInt((elements[1]));
    let day = parseInt(elements[0]);
    //console.log("year: " + year.toString());
    //console.log("month: " + month.toString());
    //console.log("day: " + day.toString());
    let d = new Date(year, month-1, day);
    return d;
}

function getCookies(str) {
    console.log(str);
    var cookies = {};
    var ca = str.split(';');
    for(var i=0;i < ca.length;i++) {
        ca[i].trim();
        var slices = ca[i].trim().split('=');
        cookies[slices[0].toString()] = slices[1];
    }
    return cookies;
}

module.exports = {
    getOrderedIndexes: getOrderedIndexes,
    getData: getData,
    getCookies: getCookies
};