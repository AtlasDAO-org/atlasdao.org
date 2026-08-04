// =====================================
// Atlas DAO v1.0
// script.js
// =====================================

// Копирование адреса контракта
const copyButton = document.getElementById("copyButton");

if (copyButton) {

    copyButton.addEventListener("click", () => {

        const contract =
            document.getElementById("contract").innerText;

        navigator.clipboard.writeText(contract);

        copyButton.innerText = "Copied!";

        setTimeout(() => {
            copyButton.innerText = "Copy";
        }, 2000);

    });

}


// Плавное появление секций
const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});


document.querySelectorAll(".section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});


// Затемнение Header при прокрутке
window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    if(window.scrollY>80){

        header.style.background="rgba(5,5,5,.92)";
        header.style.boxShadow="0 5px 20px rgba(0,0,0,.45)";

    }else{

        header.style.background="rgba(8,8,8,.55)";
        header.style.boxShadow="none";

    }

});
