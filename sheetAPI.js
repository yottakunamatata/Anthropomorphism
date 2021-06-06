

//https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/get?apix_params=%7B%22spreadsheetId%22%3A%222PACX-1vQ33NI541wm27oJX34H2S84kq68pNUif73HwHiCQpJo_96f3Blg1dO7eWWbsLbM7pbJx1uFUXCG4Gkw%22%2C%22ranges%22%3A%5B%221%3A2%22%5D%7D
//https://docs.google.com/spreadsheets/d/e/2PACX-1vQ33NI541wm27oJX34H2S84kq68pNUif73HwHiCQpJo_96f3Blg1dO7eWWbsLbM7pbJx1uFUXCG4Gkw/pubhtml
function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

var abcde = httpGet('https://script.google.com/a/macros/mail.nuk.edu.tw/s/AKfycbzUEuJwnf8Yi8FCg-FCjeL_-KcvbAtINgB_uRDNQkM3-smZ7qoFYMbl5Q/exec')