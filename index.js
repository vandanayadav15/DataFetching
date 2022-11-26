// async function getData() {
//     const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
//     let response = await fetch(url);
//     console.log(response);
//     let data = await response.json();
//     console.log(data);
//     return data;
// }
fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false").then((data) => {
    return data.json();
    console.log(data);
})
    .then((objectData) => {
    let tableData = " ";
        objectData.map((item) => {
            tableData +=
                `<tr>
        <th><img src="${item.image}"/></th>
        <th>${item.name}</th>
        <th>${item.id}</th>
        <th>${item.symbol}</th>
        <th>${item.current_price}</th>
        <th>${item.total_volume}</th>
        </tr>`;
        })
            document.getElementById("table_body").innerHTML = tableData;

})
// async function getOutput() {
//     let result = await getData();
//     let tableData = " ";
//     result.map((item) => {
//         tableData +=
//             `<tr>
//         <th>${item.name}</th>
//         <th>${item.id}</th>
//         <th>${item.image}</th>
//         <th>${item.symbol}</th>
//         <th>${item.current_price}</th>
//         <th>${item.total_volume}</th>
//         </tr>`;
        // console.log(item.name);
        // console.log(item.id);
        // console.log(item.image);
        // console.log(item.symbol);
        // console.log(item.current_price);
        // console.log(item.total_volume);
//     })
//     document.getElementById("table_body").innerHTML = tableData;
// }
// getData();
