$(document).ready(readyNow);

// Global variables
let employees = [];
let monthlyTotal = 0;

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
    //render();
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
    if (firstName === ''){
        firstName = '-';
    }
    let lastName = $('.inputLN').val();
    if (lastName === ''){
        lastName = '-';
    }
    let id = $('.inputID').val();
    if (id === ''){
        id = '####';
    }
    let title = $('.inputTitle').val();
    if (title === ''){
        title = '-';
    }
    let annualSalary = $('.inputAS').val();
    if (annualSalary === 'Annual Salary' || annualSalary === ''){
        annualSalary = '0.00';
    }

    employees.push({ firstName: firstName, lastName:lastName, ID: id, jobTitle: title, annualSalary: annualSalary});
    console.log('Employees array after pushing new object: ', employees)
    render();
    console.groupEnd();
}

function emptyInput(){
    $(this).val('');
}

function deleteInput(){  
    console.groupCollapsed('DeleteInput'); 
    console.log('Remove this items index.val()',$(this).val() ,'from array', $(this))
    let indexToRemove = $(this).val();
    employees.splice(indexToRemove,1);
    render();
    console.groupEnd();
}

function render(){
    let index = 0;
    let monthlyTotal = 0
    $('.table').empty();
    //$('input').val('');
    console.group('Render:');
    $('.table').append(`
        <tr class="tableHead">
            <td class="firstName">First Name</td>
            <td class="lastName">Last Name</td>
            <td class="ID">ID</td>
            <td class="title">Title</td>
            <td class="annualSalary">Annual Salary</td>
        </tr>`
    )
    for( employee of employees){
        $('.table').append(`
        <tr>
            <td class="firstName" >${employee.firstName}</td>
            <td class="lastName">${employee.lastName}</td>
            <td class="ID">${employee.ID}</td>
            <td class="title">${employee.jobTitle}</td>
            <td class="annualSalary">$${employee.annualSalary}</td>
            <td class="button"><button class="deleteButton" value="${index}">Delete</button></td>
        </tr>`
        )
        index++
        monthlyTotal += (employee.annualSalary/12);
    }

    $('.totalMonthly').empty();
    $('.totalMonthly').append(`
        <h2>Total Monthly: $${Math.round(monthlyTotal*100)/100}</h2>
    `)
    // If monthly cost exceeds $20000; change <h2>Total Monthly<h2> background to red
        // add class of .exceedMonthlyLimit to .totalMonthly 
    if (monthlyTotal > 20000){
        $('.totalMonthly').addClass('exceedMonthlyLimit');
    } else {
        $('.totalMonthly').removeClass('exceedMonthlyLimit');
    }
    $('input').val('');
    console.groupEnd();
}
