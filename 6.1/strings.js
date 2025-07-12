function validateInputs(){
    let first = document.getElementById("firstName").value.trim();
    let last= document.getElementById("lastName").value.trim();
    let zip=document.getElementById("zip").value.trim();
    let fullName= first + " " + last;
    let output = document.getElementById("output");
    let img= document.getElementById("secretimg");
    output.innerHTML= "";
    img.style.display= "none";
    if(fullName > 20){
        output.innerHTML= "Your full name is too long (moore than 20 characters!).";
        return;
    }
    // this makes a notification appear letting the user know there needs to be at least and no more than 5 numerical charaters
    if(zip.length!==  5 || isNaN(zip)){
        output.innerHTML= "Zip code must be exactly 5 numeric digits.";
        return;
    }
    output.innerHTML =`<h2>Access Granted!</h2><p>Welcome, ${fullName} from ${zip}.<br>Here is your secret message:</p><p><strong> "This is my dog Rufus and he likes glasses! For more fun scroll to bottom! _/¯(ツ)_/¯" </strong></p>`;
    img.style.display= "inline"; 
}
// this  function allows the program to display an image with a click of the button in HTML
function displayimage(){
    let img= document.getElementById("sprscrt")
    img.style.display = "inline";
    document.getElementById("supersecret")
    if("click"){
        displayimage
    }
}
  function startPalindromeChecker() {
    // this opens the prompt allowing the bos to open for user input
    const userInput = prompt("Enter word to check for palindrome:");

    if (!userInput) return;
  // this is a list of words that are palindromes from the internet for the prompt to check
    const palindromes = [
      "ada", "anna", "racecar", "civic", "bob", "bub", "bib", "dad", "did", "deed", 
      "eve", "eye", "ewe", "gag", "kayak", "level", "lil", "mum", "mom", "madam", 
      "nan", "otto", "peep", "pip", "pep", "pop", "redder", "rotor", "radar", 
      "rotator", "sees", "sagas", "sis", "stats", "solos", "tenet", "tnt", "toot", 
      "tot", "tut", "wow"
    ];
  //  this checks the palindromes and converts them to lowercase
    const inputNormalized = userInput.toLowerCase();
  // this then tells the program that if the input = one of the listed words it is true and otherwise it is false
    if (palindromes.includes(inputNormalized)) {
      alert("This is a Palindrome!");
    } else {
      alert("Not a Palindrome! :(");
    }
  }
