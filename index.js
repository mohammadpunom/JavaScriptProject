document.querySelector("button").addEventListener("click",handleClick);

function handleClick()
{
  alert("Thank you for your click..");
}

document.querySelector(".diceGame").addEventListener("click",game);

function game()
{
  var playername = prompt("What is your name buddy ?");
  var t= Math.random() * 6;
  t=Math.floor(t)+1;


    if(t === 6)
    {
      alert("Hi, "+ playername+", This is a dice game,   this time you pick up " +t+ ".  "+ t +" is a good score. :-)");
    }
    if(t>3 && t <=5)
    {
        alert("Hi, "+ playername+", This is a dice game,   this time you pick up " +t+ ".  "+ t +" is not a bad score.");

    }
    else
    {
      alert("Hi, "+ playername+", This is a dice game,   this time you pick up " +t+ ". "+ " You are a poor gamer :-(");
    }
  }

  document.querySelector(".nameslicer").addEventListener("mouseover",slicer);

  function slicer()
  {
        alert(prompt("What a funny name with slicer?      what is your name? ").slice(1,5)+", you are most welcome");
  }

  document.querySelector(".list").addEventListener("click",gb);

  function gb()
  {
    document.querySelector("a").attributes;
    document.querySelector("a").getAttribute("href");
    document.querySelector("a").setAttribute("href","http://bing.com");
  }

  document.querySelector("h2").addEventListener("mouseover",enlarger);

  function enlarger()
  {
  document.querySelector("h2").classList.add("huge");
  }

  document.querySelector(".tweetMSG").addEventListener("click",twt);
  function twt()
  {
    var tweeet = prompt("What is your msg for the viewers? MAX 140 letters");
    alert("Hi,"+" you have types a msg which is "+tweeet.length +" letters long."+ " You have remains "+ (140 - tweeet.length) + " letters");
  }


  function biggerImg(x) {
    x.style.height = "450px";
    x.style.width = "350px";
  }

  function normalImg(x) {
    x.style.height = "180px";
    x.style.width = "170px";
  }
