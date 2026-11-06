function str_obrab() {
    let blocks = document.getElementsByClassName("text");
    for (let i = 0; i < blocks.length; i++) {
        let str = blocks[i].textContent;
        blocks[i].textContent = str.substring(0, 10) + "...";
    }
}
