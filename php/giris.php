<!DOCTYPE html>
<html lang="tr-TR">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../css/maincss.css">
  <link href="./style/css" rel="stylesheet">
  <!-- BOOSTRAP LİNK -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
  <title>HOŞGELDİN</title>
</head>

<body>

<header>
        <nav class="navbar navbar-expand-lg bg-dark navbar-primary">
            <a href="../html/index.html" class="navbar-brand logoresmi">
                <img src="http://www.ismailma.com/wp-content/uploads/2018/01/ISMAIL-Logo-Gray.png" alt="İSMAİL">
            </a>
            <a href="#göster" data-toggle="collapse" class="navbar-toggler">
                <i class="fa-solid fa-bars"></i>
            </a>
            <div id="göster" class="collapse navbar-collapse" >
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link" href="../html/index.html" >anasayfa</a></li>
                    <li class="nav-item"><a class="nav-link" href="../html/CV.html" style="text-transform:uppercase;">cv</a></li>
                    <li class="nav-item"><a class="nav-link" href="../html/sehrim.html" >şehrim</a></li>
                    <li class="nav-item"><a class="nav-link" href="../html/" >İlgili alanlar</a></li>
                    <li class="nav-item"><a class="nav-link" href="../html/iletisim.html" >İletişim</a></li>
                    <li class="nav-item"><a class="nav-link" href="../html/adming.html" >admin giriş</a></li>
                </ul>
            </div>
        </nav>
    </header>

    
  
  <div class="container mt-5 w-50 text-center p-5">
	
  <?php 

$user = "ismail.kattan@sakarya.edu.tr";
$pass = "G211210554";
if (($_POST["email"] == $user) and ($_POST["password"] == $pass))
{
$_SESSION["login"] = "true";
$_SESSION["user"] = $user;
$_SESSION["pass"] = $pass;

echo( "GİRİŞ BAŞARILI");
header("Refresh: 2; url=../index.html");
}

else 
{
     echo "Kullancı Adı veya Şifre Yanlış.<br>";
     echo "!!!TEKRAR DENEYİNİZ!!!";
     header("Refresh: 2; url=../html/adming.html");
}

?>
			
    </div>

    
</body>