async function get()
{
    const response =await fetch("https://www.breakingbadapi.com/api/characters");
    const data = await response.json();
    console.log(data[0].name);

    document.querySelector("#content1 p").innerHTML = "<p>" +data[0].name+"("+data[0].nickname+")</p>";
    document.querySelector("#content1 img").src = data[0].img;
    
    document.querySelector("#content2 p").innerHTML = "<p>" +data[1].name+"("+data[1].nickname+")</p>";
    document.querySelector("#content2 img").src = data[1].img;

    document.querySelector("#content3 p").innerHTML = "<p>" +data[2].name+"("+data[2].nickname+")</p>";
    document.querySelector("#content3 img").src = data[2].img;

    document.querySelector("#content4 p").innerHTML = "<p>" +data[3].name+"("+data[3].nickname+")</p>";
    document.querySelector("#content4 img").src = data[3].img;

    document.querySelector("#content5 p").innerHTML = "<p>" +data[4].name+"("+data[4].nickname+")</p>";
    document.querySelector("#content5 img").src = data[4].img;

    document.querySelector("#content6 p").innerHTML = "<p>" +data[5].name+"("+data[5].nickname+")</p>";
    document.querySelector("#content6 img").src = data[5].img;

    document.querySelector("#content7 p").innerHTML = "<p>" +data[6].name+"("+data[6].nickname+")</p>";
    document.querySelector("#content7 img").src = data[6].img;

    document.querySelector("#content8 p").innerHTML = "<p>" +data[7].name+"("+data[7].nickname+")</p>";
    document.querySelector("#content8 img").src = data[7].img;

    document.querySelector("#content9 p").innerHTML = "<p>" +data[8].name+"("+data[8].nickname+")</p>";
    document.querySelector("#content9 img").src = data[8].img;

    document.querySelector("#content10 p").innerHTML = "<p>" +data[9].name+"("+data[9].nickname+")</p>";
    document.querySelector("#content10 img").src = data[9].img;


    
}

get();