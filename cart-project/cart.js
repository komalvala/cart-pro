let Ftitle = document.getElementById('ftitle');
let Fdescription = document.getElementById('fdescription');
let Fcategory = document.getElementById('fcategory');
let Fprice = document.getElementById('fprice');
const button = document.getElementById('btn');



const tbody = document.querySelector("#tbody");

button.addEventListener('click',() =>{
    let data = JSON.parse(localStorage.getItem('users')) || [];
    data.push(
        {
            title: Ftitle.value,
            description: Fdescription.value,
            category: Fcategory.value,
            price : Fprice.value
        }
    )
    localStorage.setItem('users',JSON.stringify(data))
    loadData()
});

const loadData = () =>{
    const users = JSON.parse(localStorage.getItem('users'))
let result = "";
users.forEach((user,index) =>{
    let row = `<tr>
                    <td>${index+1}</td>
                    <td>${user.title}</td>
                    <td>${user.description}</td>
                    <td>${user.category}</td>
                    <td>${user.price}</td>
               </tr> `
               
    result = result + row; 
})
      tbody.innerHTML = result
};
loadData()

