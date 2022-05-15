<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            margin;15px;
        }
        
    </style>
</head>
<body>
    <h1>Mesaj ileten kişinin bilgileri</h1>
    <table>
        <tr>
            <td>ADİ :</td>
            <td>
                <?php
                    echo $_POST['adi']."&nbsp;"
                ?>
            </td>
        </tr>
        <tr>
            <td>SOYADİ :</td>
            <td>
                <?php
                    echo $_POST['soyadi']."&nbsp;"
                ?>
            </td>
        </tr>
        <tr>
            <td>EMAİL :</td>
            <td>
                <?php
                    echo $_POST['eposta']."&nbsp;"
                ?>
            </td>
        </tr>
        <tr>
            <td>CİNSİYET :</td>
            <td>
                <?php
                    echo $_POST['cinsiyet']."&nbsp;"
                ?>
            </td>
        </tr>
        <tr>
            <td>KONU :</td>
            <td>
                <?php
                    echo $_POST['konu']."&nbsp;"
                ?>
            </td>
        </tr>
    </table>
    <h3>İLETİ :</h3>
    <p>
        <?php
            echo $_POST['mesag']."&nbsp;"
        ?>
    </p>
    <h3>İLGİLİ PDF :</h3>
    <div>
        


    </div>
</body>
</html>