function searchBooks() {
    document.querySelector('.dataSearch').addEventListener('click', function () {
        let xhr = new XMLHttpRequest();
        let formSearch = document.forms['searchBook'];
        let inputValue = formSearch.inputData.value;
        xhr.open('GET', `https://api.itbook.store/1.0/search/${inputValue}`);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let parseData = JSON.parse(this.responseText);
                document.querySelector('.data').innerHTML = parseData;
            }
        };
        formSearch.reset();
    });
}
searchBooks();




