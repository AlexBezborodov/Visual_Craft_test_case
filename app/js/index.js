function toggleMobileMenu() {
    document.querySelector('#menu').classList.toggle('active')
    document.querySelector('.mobile-bar').classList.toggle('active')
    console.log('clicked');
}




function ShowInfo(){
    let question = {
        name : " example",
        email: " example",
        text: "example ",
    };
    var questionArray =[];
    question.name = document.getElementById('input-name').value;
    question.email = document.getElementById('Email').value;
    question.text = document.getElementById('textarea-input').value;
    questionArray.push(question);
    console.log(questionArray[0]);  
}
