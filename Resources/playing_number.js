

(function () {

    const butt = document.querySelectorAll('.button')
    let count = 1
    const head2 = document.querySelector('.head2')
    head2.textContent = count
    butt[0].addEventListener('click', function () {
        var inval = document.getElementById('message1')
        var myvalue = Number(inval.value)
        count = (count + myvalue)
        head2.innerText = count
        if (count < 0) {
            head2.style.color = 'red'
        }
        else if (count > 0) {
            head2.style.color = 'green'
        }
        else {
            head2.style.color = 'black'
        }
        console.log("button1")

    })
    butt[1].addEventListener('click', function () {
        var inval = document.getElementById('message1')
        var myvalue = Number(inval.value)
        count = (count - myvalue)
        head2.innerText = count
        if (count < 0) {
            head2.style.color = 'red'
        }
        else if (count > 0) {
            head2.style.color = 'green'
        }
        else {
            head2.style.color = 'black'
        }
        console.log("button2")

    })
    butt[2].addEventListener('click', function () {
        var inval = document.getElementById('message1')
        var myvalue = Number(inval.value)

        count = (count * myvalue)
        head2.innerText = count
        if (count < 0) {
            head2.style.color = 'red'
        }
        else if (count > 0) {
            head2.style.color = 'green'
        }
        else {
            head2.style.color = 'black'
        }
        console.log("button3")

    })
    butt[3].addEventListener('click', function () {
        var inval = document.getElementById('message1')
        var myvalue = Number(inval.value)

        count = (count / myvalue)
        head2.innerText = count
        if (count < 0) {
            head2.style.color = 'red'
        }
        else if (count > 0) {
            head2.style.color = 'green'
        }
        else {
            head2.style.color = 'black'
        }
        console.log("button4")

    })

})()

