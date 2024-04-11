console.log('hello');

//2. fetch demo
fetch("assets/data/content.json")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(errors => console.log("errors: ", errors))

//1. XHR demo
// const xhr = new XMLHttpRequest();
// xhr.open('GET',"../data/content.json")
// xhr.send();

// xhr.addEventListener('load', function(){
//   try {
//     console.log("XHR response: ", this.responseText);
//   } catch (error) {
//     console.log("Error: ", error);
//   }
// })


 

//3. async/await demo
// async function demoFunction(){
//   try {
//     const navHolder = document.getElementById('listId')

//     const temp = await fetch("assets/data/content.json")
//     const data = await temp.json();
//     // console.log(data);

//     data.mainnav.forEach(menuitem=>{
//       // console.log(menuitem);
//       const listItem = document.createElement('li');
//       listItem.innerHTML = `<a href="${menuitem.url}">${menuitem.text}</a>`
//       navHolder.append(listItem);      
//     })



//   } catch (error) {
//     console.log('error: '. error);

//   }
// }

// demoFunction();