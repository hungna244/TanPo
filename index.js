function showFlowers() {
    let getNumber = document.getElementById("inputNumber").value;
    let number = parseInt(getNumber)

    if (number < 10 || number >20 || number ==""){
        document.getElementById("arlert").innerHTML = "Lỗi, Vui lòng nhập số trong khoảng từ 10 đến 20!!!"
        return

    }

    let flowersContairner = document.getElementById("flowers-container")
    flowersContairner.innerHTML = ""
    let count = 0
    let time = document.getElementById("time")
    showFlower = setInterval(function() {
        if (count >= number){
            clearInterval(showFlower)
            return
        }
        document.getElementById("arlert").style.display = "none"
        let image = document.createElement("img")
        image.className="flower"
        image.src = "./css/flower.jpg"
        flowersContairner.appendChild(image)

        count++;
        time.innerHTML = count;
    }, 1000)
    
}



   