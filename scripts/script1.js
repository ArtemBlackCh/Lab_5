let arrExams = [];
arrExams[0] = {
    Subject: "Математичний аналіз",
    Data: "07.11.2026",
    Room: "305"
};
arrExams[1] = {
    Subject: "Фізика",
    Data: "06.11.2026",
    Room: ""
};
arrExams[2] = {
    Subject: "Програмування",
    Data: "12.11.2026",
    Room: "112"
};
arrExams[3] = {
    Subject: "Історія України",
    Data: "07.11.2026",
    Room: ""
};
arrExams[4] = {
    Subject: "Англійська мова",
    Data: "01.11.2026",
    Room: "208"
};
arrExams[5] = {
    Subject: "Дискретна математика",
    Data: "06.11.2026",
    Room: "401"
};

let html = "";

function ras_diff_Days(text) {
    let currentDate = new Date();
    let date1 = new Date(text.replace(/(\d+)\.(\d+)\.(\d+)/, '$3/$2/$1'));
    currentDate.setHours(0, 0, 0, 0);
    date1.setHours(0, 0, 0, 0);
    let timeDiff = date1.getTime() - currentDate.getTime();
    let daysDiff = Math.round(timeDiff / (1000 * 3600 * 24));
    return daysDiff;
}

function vivod(item, i, array) {
    let text = item['Data'];
    let diffDays = ras_diff_Days(text);
    let message = "";
    if (diffDays == 1) {
        html = html + "<tr style='background:yellow;'>";
        message = "Сьогодні повинна бути консультація";
    } else if (diffDays == 0) {
        html = html + "<tr style='background:lightgreen;'>";
        message = "Сьогодні іспит";
    } else if (diffDays > 1) {
        html = html + "<tr>";
        message = "До іспиту залишилось днів: " + diffDays;
    } else {
        html = html + "<tr style='background:lightgray;'>";
        message = "Іспит вже відбувся";
    }
    if ((diffDays == 0 || diffDays == 1) && item['Room'] == "") {
        message = message + "<br>Невідоме місце проведення консультації/іспиту";
    }
    for (let key in item) {
        html = html + "<td>" + item[key] + "</td>";
    }
    html = html + "<td>" + message + "</td>";
    html = html + "</tr>";
}

function ras() {
    html = "<table>";
    html = html + "<tr><td>Предмет</td><td>Дата іспиту</td><td>Аудиторія</td><td>Повідомлення</td></tr>";
    arrExams.forEach(vivod);
    html = html + "</table>";
    document.getElementById("rezult").innerHTML = html;
}
