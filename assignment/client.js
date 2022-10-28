$(document).ready(readyNow);

// Global variables
let employees = [];

/*
let employee = [
    {
        firstName:
        lastName:
        ID: 
        jobTitle:
        annualSalary:
    }
]
*/

function readyNow() {
    console.log(" JQ ");
    // records employee salaries
    $('#submit').on('click', addEmployeeInfo);

    // delete employee info
    $('.table').on('click', '.deleteButton', deleteInput);

    // remove values of inputs on click
    $('input').on('click', emptyInput);

    
}

function addEmployeeInfo() {
    console.group('submit');
    //add employee info
    let firstName = $('.inputFN').val();
    console.log(firstName);
    let lastName = $('.inputLN').val();
    let id = $('.inputID').val();
    let title = $('.inputTitle').val();
    let annualSalary = $('.inputAS').val();
    employees.push({ firstName: firstName, lastName:lastName, ID: id, jobTitle: title, annualSalary: annualSalary});
    console.log('Employees array after pushing new object: ', employees)
    render();
    console.groupEnd();
}

function emptyInput(){
    $(this).val('');
}

function deleteInput(){   
    let i = $(this).val();
    console.log(i);
    employees.splice(i,1);
    render();
}

function render(){
    let index = 0;
    $('.table').empty();
    console.group('Render:');
    $('.table').append(`
        <tr>
            <td class="firstName" >First Name</td>
            <td class="lastName">Last Name</td>
            <td class="ID">ID</td>
            <td class="title">Title</td>
            <td class="annualSalary">Annual Salary</td>
            <td class="deleteButtons"></td>
        </tr>`
    )
    for( employee of employees){
        $('.table').append(`
        <tr>
            <td class="firstName" >${employee.firstName}</td>
            <td class="lastName">${employee.lastName}</td>
            <td class="ID">${employee.ID}</td>
            <td class="title">${employee.jobTitle}</td>
            <td class="annualSalary">${employee.annualSalary}</td>
            <td><button class="deleteButton" value="${index}">Delete</button></td>
        </tr>`
        )
        index++
    }
    $('.table').append(`
    <tr>' '</tr>
    `)
    
    console.groupEnd();
}
