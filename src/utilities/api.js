export let fetchData =[];

fetch('https://dummyjson.com/products?limit=100')
  .then(res => res.json())
  .then(json => {
    fetchData = json; // Assign fetched data to fetchData
    console.log(fetchData); // Use fetchData as needed
  });



