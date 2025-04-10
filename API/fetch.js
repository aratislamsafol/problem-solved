function loadData(){
    const baseUrl = `https://jsonplaceholder.typicode.com/todos`;
    fetch(baseUrl)
        .then(res => res.json())
        .then(datum => loadData2(datum))
}

function loadData2(datum){
    for(let data of datum){
        console.log(data.title)
    }
}