var n = 0,
    m = 0;

function generate_arr() {
    let table = document.getElementById("table1");
    n = table.rows.length;
    m = table.rows[0].cells.length;
    let arr = [];
    for (i = 0; i < n; i++) {
        arr[i] = [];
        for (j = 0; j < m; j++) {
            arr[i][j] = table.rows[i].cells[j].innerHTML;
        }
    }
    return arr;
}

function list_html(arr) {
    let html = "<ul>";
    for (i = 0; i < n; i++) {
        html += "<li>Рядок " + (i + 1) + "<ul>";
        for (j = 0; j < m; j++) {
            html += "<li>" + arr[i][j] + "</li>";
        }
        html += "</ul></li>";
    }
    html += "</ul>";
    return html;
}

function table_obrab() {
    let arr = generate_arr();
    document.getElementById("result_list").innerHTML = list_html(arr);
}
