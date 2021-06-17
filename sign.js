
 const password = "12345";
 const name = 'virus';

document.getElementById('myForm').addEventListener('submit', signId);

function signId(e){
    const input = document.querySelector('input')
        if(input.value === password || input.value === name ){
           e.preventDefault() 
           localStorage.setItem('password', JSON.stringify(password));
           localStorage.setItem('name', JSON.stringify(name));
           window.location.href='sign2.0.html'
            
        }
         else{
             alert('Не правильно! Введи правильний пароль')
         }
    };

// document.querySelector('button').onclick = () => {
//     console.log(document.querySelector('#one').value)  
//       console.log(document.querySelector('#two').value)   
// };
// async function getResponse() {
//     let response =  await fetch('https://swapi.dev/api/planets/2/')
//         .then((response) => {
//             return response.json()
//         });
//     console.log(response)

// };
  
// getResponse();
// const show = document.querySelector('.button').onclick = ()=>{
//     console.log(document.querySelector('.message'));
// }