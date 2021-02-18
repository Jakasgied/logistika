
function paspaudusPirma()
{
    var pirmasTabContent = document.getElementById("pirmas-turinys");
    var antrasTabContent = document.getElementById("antras-turinys");
    var treciasTabContent = document.getElementById("trecias-turinys");
    var ketvirtasTabContent = document.getElementById("ketvirtas-turinys");

    pirmasTabContent.style.display = "initial";
    antrasTabContent.style.display = "none";
    treciasTabContent.style.display = "none";
    ketvirtasTabContent.style.display = "none";
}

function paspaudusAntra()
{
    var pirmasTabContent = document.getElementById("pirmas-turinys");
    var antrasTabContent = document.getElementById("antras-turinys");
    var treciasTabContent = document.getElementById("trecias-turinys");
    var ketvirtasTabContent = document.getElementById("ketvirtas-turinys");

    pirmasTabContent.style.display = "none";
    antrasTabContent.style.display = "initial";
    treciasTabContent.style.display = "none";
    ketvirtasTabContent.style.display = "none";
}
function paspaudusTrecia()
{
    var pirmasTabContent = document.getElementById("pirmas-turinys");
    var antrasTabContent = document.getElementById("antras-turinys");
    var treciasTabContent = document.getElementById("trecias-turinys");
    var ketvirtasTabContent = document.getElementById("ketvirtas-turinys");

    pirmasTabContent.style.display = "none";
    antrasTabContent.style.display = "none";
    treciasTabContent.style.display = "initial";
    ketvirtasTabContent.style.display = "none";
}
function paspaudusKetvirta()
{
    var pirmasTabContent = document.getElementById("pirmas-turinys");
    var antrasTabContent = document.getElementById("antras-turinys");
    var treciasTabContent = document.getElementById("trecias-turinys");
    var ketvirtasTabContent = document.getElementById("ketvirtas-turinys");

    pirmasTabContent.style.display = "none";
    antrasTabContent.style.display = "none";
    treciasTabContent.style.display = "none";
    ketvirtasTabContent.style.display = "initial";
}

