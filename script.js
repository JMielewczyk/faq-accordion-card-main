const questionBox = document.querySelectorAll('.section_faq div')

questionBox.forEach(box => box.addEventListener('click', (e) => {
    console.log(e.path[1])
    if (e.path[1].classList == 'active') {
        e.path[1].classList.remove('active');
        return
    }
    questionBox.forEach(box => box.classList.remove('active'))
    box.classList.toggle('active');
}))