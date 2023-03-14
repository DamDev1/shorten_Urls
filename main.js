const copy = document.querySelector(".copy")
const shorten = document.querySelector(".shorten");
const qrCode = document.querySelector(".qrCode img");
const shortenResult = document.querySelector(".shortenResult");
const fullShotLink = document.querySelector(".fullShotLink");

const animation = document.querySelector(".animation")
const popUp = document.querySelector(".popUp")


shorten.addEventListener("click", () =>{
    const inputUrls = document.querySelector(".urlPaste").value

    if(inputUrls == ""){
        alert("input Field can't be empty")
    }else{
        shortenResult.style.display = "flex"
        qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${inputUrls}`

        fetch(`https://api.shrtco.de/v2/shorten?url=${inputUrls}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            document.querySelector(".code").innerHTML = data.result.code

            document.querySelector(".shortlin").innerHTML = data.result.short_link

            document.querySelector(".realUrls").innerHTML = data.result.full_short_link2;

            document.querySelector(".fullShotLink").value = data.result.full_short_link;

            document.querySelector(".shareLink").innerHTML = data.result.share_link;
        })  
    }

})

copy.addEventListener("click", () =>{
    fullShotLink.setSelectionRange(0, 999999)
    navigator.clipboard.writeText(fullShotLink.value)

    popUp.classList.add("active")
    setTimeout(() =>{
        popUp.classList.remove("active")
    }, 2000)
})