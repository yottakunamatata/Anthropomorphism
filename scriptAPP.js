// 紀錄 excel

function sendSheet1(fn) {

    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbwjZemU27uEkl6gnz8qTPZowf7NRFpCaAjKwwIgRdMYYN_brHIaKHmTrrCnFV3MAgnGNw/exec",
        data: {
            "time": Date.now(),
            "Charactor2": '小艾',
            "Png1": localStorage.getItem('iPng1'),
            "Png2": localStorage.getItem('iPng2'),
            "Png3": localStorage.getItem('iPng3'),
            "Png4": localStorage.getItem('iPng4'),
            "Png5": localStorage.getItem('iPng5'),
            "Png6": localStorage.getItem('iPng6'),
            "Png7": localStorage.getItem('iPng7'),

            "Ans1": localStorage.getItem('iAns1'),
            "Ans2": localStorage.getItem('iAns2'),
            "Ans3": localStorage.getItem('iAns3'),
            "Ans4": localStorage.getItem('iAns4'),
            "Ans5": localStorage.getItem('iAns5'),
            "Ans6": localStorage.getItem('iAns6'),
            "Ans7": localStorage.getItem('iAns7')


        },
        success: function (response) {
            if (response == "success") {
                btn1Count = 0, btn2Count = 0, btn3Count = 0, btn4Count = 0, btn5Count = 0, btn6Count = 0;
                console.log('感謝您')
                fn()
                //  localStorage.clear();
            }
        },
    });
}
function sendSheet2(fn) {

    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbwjZemU27uEkl6gnz8qTPZowf7NRFpCaAjKwwIgRdMYYN_brHIaKHmTrrCnFV3MAgnGNw/exec",
        data: {
            "time": Date.now(),
            "Charactor2": 'AI助理',
            "Png1": localStorage.getItem('aiPng1'),
            "Png2": localStorage.getItem('aiPng2'),
            "Png3": localStorage.getItem('aiPng3'),
            "Png4": localStorage.getItem('aiPng4'),
            "Png5": localStorage.getItem('aiPng5'),
            "Png6": localStorage.getItem('aiPng6'),
            "Png7": localStorage.getItem('aiPng7'),

            "Ans1": localStorage.getItem('aiAns1'),
            "Ans2": localStorage.getItem('aiAns2'),
            "Ans3": localStorage.getItem('aiAns3'),
            "Ans4": localStorage.getItem('aiAns4'),
            "Ans5": localStorage.getItem('aiAns5'),
            "Ans6": localStorage.getItem('aiAns6'),
            "Ans7": localStorage.getItem('aiAns7')


        },
        success: function (response) {
            if (response == "success") {
                btn1Count = 0, btn2Count = 0, btn3Count = 0, btn4Count = 0, btn5Count = 0, btn6Count = 0;
                console.log('感謝您')
                fn()
                //  localStorage.clear();
            }
        },
    });
}
function sendSheet3(fn) {
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbwjZemU27uEkl6gnz8qTPZowf7NRFpCaAjKwwIgRdMYYN_brHIaKHmTrrCnFV3MAgnGNw/exec",
        data: {
            "time": Date.now(),
            "Charactor2": '推薦系統',
            "Png1": localStorage.getItem('shinPng1'),
            "Png2": localStorage.getItem('shinPng2'),
            "Png3": localStorage.getItem('shinPng3'),
            "Png4": localStorage.getItem('shinPng4'),
            "Png5": localStorage.getItem('shinPng5'),
            "Png6": localStorage.getItem('shinPng6'),
            "Png7": localStorage.getItem('shinPng7'),

            "Ans1": localStorage.getItem('shinAns1'),
            "Ans2": localStorage.getItem('shinAns2'),
            "Ans3": localStorage.getItem('shinAns3'),
            "Ans4": localStorage.getItem('shinAns4'),
            "Ans5": localStorage.getItem('shinAns5'),
            "Ans6": localStorage.getItem('shinAns6'),
            "Ans7": localStorage.getItem('shinAns7')
        },
        success: function (response) {
            if (response == "success") {
                btn1Count = 0, btn2Count = 0, btn3Count = 0, btn4Count = 0, btn5Count = 0, btn6Count = 0;
                console.log('感謝您')
                fn()
                //  localStorage.clear();
            }
        },
    });















};
// function send() {
//     var oReq = new XMLHttpRequest();
//     oReq.open("GET", "https://script.google.com/macros/s/AKfycbwfA3JR9FXgftsdqheKGGXGc1iCnJ7s1UlFDNP7b6n_HJTWL2Bcr8yhQA/exec");
//     oReq.send();
// }
