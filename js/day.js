var d = new Date();
m = d.getMonth() + 1;
dd = d.getDate();
y = d.getFullYear();

// 公祭日
if (m == 9 && dd == 18) {
    document.getElementsByTagName("html")[0].setAttribute("style", "filter: grayscale(60%);");
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("今天是九一八事变" + (y - 1931).toString() + "周年纪念日\n🪔勿忘国耻，振兴中华🪔");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 7 && dd == 7) {
    document.getElementsByTagName("html")[0].setAttribute("style", "filter: grayscale(60%);");
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("今天是卢沟桥事变" + (y - 1937).toString() + "周年纪念日\n🪔勿忘国耻，振兴中华🪔");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 12 && dd == 13) {
    document.getElementsByTagName("html")[0].setAttribute("style", "filter: grayscale(60%);");
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("今天是南京大屠杀" + (y - 1937).toString() + "周年纪念日\n🪔勿忘国耻，振兴中华🪔");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 8 && dd == 14) {
    document.getElementsByTagName("html")[0].setAttribute("style", "filter: grayscale(60%);");
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("今天是世界慰安妇纪念日\n🪔勿忘国耻，振兴中华🪔");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}


// 节假日
if (m == 10 && dd <= 3) {//国庆节
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("祝祖国母亲" + (y - 1949).toString() + "岁生日快乐🎂！繁荣昌盛🌼!");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 1 && dd == 1) {//元旦节
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire(y.toString() + "年元旦快乐！🎉");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 3 && dd == 8) {//妇女节
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("各位女神们，妇女节快乐！👩");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
l = ["非常抱歉，因为不可控原因，博客将于明天停止运营！", "您的计算机CPU温度过高，建议立即关机！", "嘿嘿，节日快乐🎉！"]
if (m == 4 && dd == 1) {//愚人节，随机谎话
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire(l[Math.floor(Math.random() * l.length)]);
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 5 && dd == 1) {//劳动节
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("打工人，打工魂！\n各行各业辛勤工作的人们劳动节快乐🍾！");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 5 && dd == 4) {//青年节
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("青年、青春、奋斗\n青春不是回忆逝去,而是把握现在！");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 5 && dd == 20) {//520
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("今年是520情人节\n有没有找到另一半啊？💑");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 7 && dd == 1) {//建党节
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("祝中国共产党" + (y - 1921).toString() + "岁生日快乐！");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 9 && dd == 10) {//教师节
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("教师节怎么不放假👨‍🏫？教师节快乐(假笑 ");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 12 && dd == 25) {//圣诞节
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("Merry Christmas! 🎄");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}

//传统节日部分

if ((y == 2023 && m == 4 && dd == 5) || (y == 2024 && m == 4 && dd == 4) || (y == 2025 && m == 4 && dd == 4)) {//清明节
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("清明时节雨纷纷,一束鲜花祭故人. 💐");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if ((y == 2023 && m == 12 && dd == 22) || (y == 2024 && m == 12 && dd == 21) || (y == 2025 && m == 12 && dd == 21)) {//冬至
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("冬至冻耳朵\n有没有吃饺子啊？ 🥟");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}

var lunar = calendarFormatter.solar2lunar();

//农历采用汉字计算，防止出现闰月导致问题

if ((lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初六") || (lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初五") || (lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初四") || (lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初三") || (lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初二") || (lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初一") || (lunar["IMonthCn"] == "腊月" && lunar["IDayCn"] == "三十") || (lunar["IMonthCn"] == "腊月" && lunar["IDayCn"] == "廿九")) {
    //春节，本来只有大年三十到初六，但是有时候除夕是大年二十九，所以也加上了
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire(y.toString() + "年新年快乐\n🎊祝你心想事成，诸事顺利🎊");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if ((lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "十五")) {
    //元宵节
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("元宵节快乐\n送你一个大大的灯笼🧅");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if ((lunar["IMonthCn"] == "五月" && lunar["IDayCn"] == "初五")) {
    //端午节
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("端午节快乐\n 你吃的粽子是什么馅儿的？🍚");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if ((lunar["IMonthCn"] == "七月" && lunar["IDayCn"] == "初七")) {
    //七夕节
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("七夕节快乐\n 还不抓紧机会找对象🏃‍♂️!");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if ((lunar["IMonthCn"] == "八月" && lunar["IDayCn"] == "十五")) {
    //中秋节
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("中秋节快乐\n 没回家的话给家人打个视频电话吧 📱！");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if ((lunar["IMonthCn"] == "九月" && lunar["IDayCn"] == "初九")) {
    //重阳节
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("重阳节快乐\n独在异乡为异客，每逢佳节倍思亲");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}

// 切换主题提醒
// if (y == 2022 && m == 12 && (dd >= 18 && dd <= 20)) {
//     if (sessionStorage.getItem("isPopupWindow") != "1") {
//         Swal.fire("网站换成冬日限定主题啦⛄");
//         sessionStorage.setItem("isPopupWindow", "1");
//     }
// }
