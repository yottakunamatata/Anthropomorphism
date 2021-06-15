// 紀錄 excel

function sendSheet1(fn) {

    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbxOfYzldviTM7JQna5OKIxIn6qISZCbybiezlsJGAHowWVHOcYJLDKuwW5KDf75nUCJ/exec",
        data: {
            "time": Date.now(),
            "Charactor2": '小艾_非個人化',
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
            "Ans7": localStorage.getItem('iAns7'),
            "Ans8": localStorage.getItem('iAns8'),
            "Ans9": localStorage.getItem('iAns9'),
            "Ans10": localStorage.getItem('iAns10'),
            "Ans11": localStorage.getItem('iAns11'),
            "Ans12": localStorage.getItem('iAns12'),
            "Ans13": localStorage.getItem('iAns13'),
            "Ans14": localStorage.getItem('iAns14'),
            "Ans15": localStorage.getItem('iAns15'),
            "Ans16": localStorage.getItem('iAns16'),
            "Ans17": localStorage.getItem('iAns17'),
            "Ans18": localStorage.getItem('iAns18'),
            "Ans19": localStorage.getItem('iAns19')


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

function sendSheet1_1(fn) {

    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbxOfYzldviTM7JQna5OKIxIn6qISZCbybiezlsJGAHowWVHOcYJLDKuwW5KDf75nUCJ/exec",
        data: {
            "time": Date.now(),
            "Charactor2": '小艾_個人化',
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
            "Ans7": localStorage.getItem('iAns7'),
            "Ans8": localStorage.getItem('iAns8'),
            "Ans9": localStorage.getItem('iAns9'),
            "Ans10": localStorage.getItem('iAns10'),
            "Ans11": localStorage.getItem('iAns11'),
            "Ans12": localStorage.getItem('iAns12'),
            "Ans13": localStorage.getItem('iAns13'),
            "Ans14": localStorage.getItem('iAns14'),
            "Ans15": localStorage.getItem('iAns15'),
            "Ans16": localStorage.getItem('iAns16'),
            "Ans17": localStorage.getItem('iAns17'),
            "Ans18": localStorage.getItem('iAns18'),
            "Ans19": localStorage.getItem('iAns19')


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
        url: "https://script.google.com/macros/s/AKfycbxOfYzldviTM7JQna5OKIxIn6qISZCbybiezlsJGAHowWVHOcYJLDKuwW5KDf75nUCJ/exec",
        data: {
            "time": Date.now(),
            "Charactor2": 'AI助理_非個人化',
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
            "Ans7": localStorage.getItem('aiAns7'),
            "Ans8": localStorage.getItem('aiAns8'),
            "Ans9": localStorage.getItem('aiAns9'),
            "Ans10": localStorage.getItem('aiAns10'),
            "Ans11": localStorage.getItem('aiAns11'),
            "Ans12": localStorage.getItem('aiAns12'),
            "Ans13": localStorage.getItem('aiAns13'),
            "Ans14": localStorage.getItem('aiAns14'),
            "Ans15": localStorage.getItem('aiAns15'),
            "Ans16": localStorage.getItem('aiAns16'),
            "Ans17": localStorage.getItem('aiAns17'),
            "Ans18": localStorage.getItem('aiAns18'),
            "Ans19": localStorage.getItem('aiAns19')


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


function sendSheet2_1(fn) {

    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbxOfYzldviTM7JQna5OKIxIn6qISZCbybiezlsJGAHowWVHOcYJLDKuwW5KDf75nUCJ/exec",
        data: {
            "time": Date.now(),
            "Charactor2": 'AI助理_個人化',
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
            "Ans7": localStorage.getItem('aiAns7'),
            "Ans8": localStorage.getItem('aiAns8'),
            "Ans9": localStorage.getItem('aiAns9'),
            "Ans10": localStorage.getItem('aiAns10'),
            "Ans11": localStorage.getItem('aiAns11'),
            "Ans12": localStorage.getItem('aiAns12'),
            "Ans13": localStorage.getItem('aiAns13'),
            "Ans14": localStorage.getItem('aiAns14'),
            "Ans15": localStorage.getItem('aiAns15'),
            "Ans16": localStorage.getItem('aiAns16'),
            "Ans17": localStorage.getItem('aiAns17'),
            "Ans18": localStorage.getItem('aiAns18'),
            "Ans19": localStorage.getItem('aiAns19')


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
        url: "https://script.google.com/macros/s/AKfycbxOfYzldviTM7JQna5OKIxIn6qISZCbybiezlsJGAHowWVHOcYJLDKuwW5KDf75nUCJ/exec",
        data: {
            "time": Date.now(),
            "Charactor2": '推薦系統_非個人化',
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
            "Ans7": localStorage.getItem('shinAns7'),
            "Ans8": localStorage.getItem('shinAns8'),
            "Ans9": localStorage.getItem('shinAns9'),
            "Ans10": localStorage.getItem('shinAns10'),
            "Ans11": localStorage.getItem('shinAns11'),
            "Ans12": localStorage.getItem('shinAns12'),
            "Ans13": localStorage.getItem('shinAns13'),
            "Ans14": localStorage.getItem('shinAns14'),
            "Ans15": localStorage.getItem('shinAns15'),
            "Ans16": localStorage.getItem('shinAns16'),
            "Ans17": localStorage.getItem('shinAns17'),
            "Ans18": localStorage.getItem('shinAns18'),
            "Ans19": localStorage.getItem('shinAns19')
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

function sendSheet3_1(fn) {
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbxOfYzldviTM7JQna5OKIxIn6qISZCbybiezlsJGAHowWVHOcYJLDKuwW5KDf75nUCJ/exec",
        data: {
            "time": Date.now(),
            "Charactor2": '推薦系統_個人化',
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
            "Ans7": localStorage.getItem('shinAns7'),
            "Ans8": localStorage.getItem('shinAns8'),
            "Ans9": localStorage.getItem('shinAns9'),
            "Ans10": localStorage.getItem('shinAns10'),
            "Ans11": localStorage.getItem('shinAns11'),
            "Ans12": localStorage.getItem('shinAns12'),
            "Ans13": localStorage.getItem('shinAns13'),
            "Ans14": localStorage.getItem('shinAns14'),
            "Ans15": localStorage.getItem('shinAns15'),
            "Ans16": localStorage.getItem('shinAns16'),
            "Ans17": localStorage.getItem('shinAns17'),
            "Ans18": localStorage.getItem('shinAns18'),
            "Ans19": localStorage.getItem('shinAns19')
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

function sendSheet_Info(fn) {
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbxOfYzldviTM7JQna5OKIxIn6qISZCbybiezlsJGAHowWVHOcYJLDKuwW5KDf75nUCJ/exec",
        data: {
            "time": Date.now(),
            'gender': localStorage.getItem('gender'),
            "age": localStorage.getItem('age'),
            "email": localStorage.getItem('email'),
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
