function kontrolet()
{
    const button = document.getElementById("git");
    if(IsimKontrol())
    {
        if(SoyIsimKontrol())
        {
            if(EpostaKontrol())
            {
                if(CinsiyetKontrol())
                {
                    if(KonuKontrol())
                    {
                        if(MesagKontrol())
                        {
                            button.disabled = false;
                        }
                    }
                }
            }
        }
    }
    else
    {
        button.disabled=true;
    }



}

function IsimKontrol()
{
    var ad = document.forms["ilet"]["adi"].value;
    var result = document.getElementById("adisml");
    if(ad ==null || ad =="")
    {
        result.innerHTML ="AD : alanı zorunludur";
        result.style.border = "1px solid red";
        return false;
    }
    else 
    {
        result.innerHTML ="Tamamdır";
        result.style.border = "1px solid green";   
        return true;
    }

}
function SoyIsimKontrol()
{
    
    var soyad = document.forms["ilet"]["soyadi"].value;
    var result = document.getElementById("soyadisml");
    if(soyad ==null || soyad =="")
    {
        result.innerHTML ="SOYAD : alanı zorunludur";
        result.style.border = "1px solid red";
        return false;
    }
    else 
    {
        result.innerHTML ="Tamamdır";
        result.style.border = "1px solid green";
        return true;
    }

}

function EpostaKontrol() {
    var eposta = document.forms["ilet"]["eposta"].value;
    var result = document.getElementById("epostasml");
 //    var mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
     var email = document.getElementById("eposta").value;
     var cntrl = email.indexOf("@");
     var cntr2 = email.indexOf(".");
    if(eposta ==""||eposta==null || cntrl==-1 || cntr2 == -1 )
    {
        if(eposta==""||eposta==null)
        {
            result.innerHTML = "E-POSTA ADRES : alanı zorunludur";
        }
        else if(cntrl==-1 || cntr2 == -1)
        {
            result.innerHTML = "girdiğiniz yazi email formatında değildir!!!";
        }
        result.style.border ="1px solid red";
        return false;
    }
    else 
    {
        result.innerHTML ="Tamamdır";
        result.style.border = "1px solid green";
        return true;
    }
 }

function CinsiyetKontrol()
{
    var erkek = document.getElementById("erkek");
    var kadin = document.getElementById("kadin");
    var result = document.getElementById("cinsiyetsml");
    if(erkek.checked || kadin.checked)
    {
        result.innerHTML ="Tamamdır";
        result.style.border = "1px solid green";
        return true;
    }
    else 
    {
        result.innerHTML = "lütfen cinsiyetinizi seçiniz";
        result.style.border ="1px  solid red";
        return false;
    }
}

function KonuKontrol()
{
    var seciniz = document.getElementById("seciniz");
    var result = document.getElementById("secinizsml");
    if(seciniz.selected)
    {
        result.innerHTML ="lütfen bir konu veya (Diğer) seçeneği seçiniz";
        result.style.border ="1px solid red";
        return false;
    }
    else
    {
        result.innerHTML ="Tamamdır";
        result.style.border = "1px solid green";
        return true;
    }
}

function MesagKontrol()
{
    var mesag = document.forms["ilet"]["mesag"].value;
    var result = document.getElementById("mesagsml");
    if(mesag==null||mesag=="")
    {
        result.innerHTML ="İLETİ : alanı zorunlu";
        result.style.border="1px solid red";
        return false;
    }
    else 
    {
        result.innerHTML ="Tamamdır";
        result.style.border = "1px solid green";
        return true;
    }
}


// function resetyap() {
//     document.getElementById("ilet").reset();
//   }