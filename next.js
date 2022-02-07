function tao()
{
  value = document.getElementById("tao").value;

  if (value == "tao" || value == "Tao")
  {
      document.getElementById("answer").innerHTML = "Correct !";
  }
  else{
    document.getElementById("answer").innerHTML = "Wrong correct answer - Tao";
  }
}

function next()
{
    window.location = "last.html";
}