//i keeps track of current picture in function next
var i = 0;

//make view $1 million functional

function view() {
    window.location.href = "./falconF50/falcon.html";
    console.log('window location directed to page highend html');
}

//pop up message

function contact() {
    alert('C: Please reach out to us on this number \n +256756750996 or +256779662303');
}

function order() {
    alert('O: Please reach out to us on this number \n +256756750996 or +256779662303');

    // let tour = prompt('Which tour would you like? high or low end');
    // let contact = prompt('Please put your phone number below, we will reach out to you :)')
}

//Opens a side menue to links
function openSlideMenu() {
    document.getElementById('side-menu').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
}

function closeSlideMenu() {
    document.getElementById('side-menu').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
}