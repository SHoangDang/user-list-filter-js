let users = [
    {name: 'Melisa', gender: 'female'},
    {name: 'John', gender: 'male'},
    {name: 'Selena', gender: 'female'},
    {name: 'Jessie', gender: 'male'},
    {name: 'Spencer', gender: 'male'}
];

const optionsGender = $('#optionsGender');
const usersList = $('#usersList');

render(usersList, users);

optionsGender.change(function(){
    let optionGender = this.value;
    
    let userFilter = users.filter(function(item){
        if(optionGender === 'null'){
            return users;
        }
        return optionGender === item.gender;
    });

    render(usersList, userFilter);
});

function render(htmlUserList, items)
{
    let userList = items.map(function(item){
        return '<li class="list-group-item">' + item.name + '</li>';
    });

    let html = userList.join('');

    htmlUserList.html(html);
    
}