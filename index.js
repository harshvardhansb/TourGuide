
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const backtotop = document.getElementById('Bottom');

toggle.addEventListener('click', function(){
    if(this.checked){
        // Dark mode is enabled
        body.style.background = '#1d212b';
        body.style.color = 'white';
        backtotop.style.color = 'white'; // Changed the color for 'backtotop' element
        body.style.transition = '2s';
    }else{
        // Dark mode is disable
        body.style.background = 'white';
        body.style.color = 'black';
        backtotop.style.color = 'black'; // Changed the color for 'backtotop' element
        body.style.transition = '2s';

    }
});

function mailto(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const object = {};
    data.forEach((value, key) => (object[key] = value));

    var name = object["contact_name"];
    var place = object["contact_place"];
    var email = "harshvardhanhbtu@gmail.com";

    var subject = `Name: ${name} and Place: ${place}`;
    var encodedSubject = encodeURI(subject);
    var mailto_link = "mailto:" + email + `?subject=${encodedSubject}`;

    window.location.href = mailto_link;
    
    document.getElementById("contact").reset();
}

document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}
  