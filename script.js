//------ Uppgift 6a ------//
function onClick(e){
  console.log("Hello world");
}
var myButton = document.querySelector('#problem6abutton');
myButton.addEventListener('click', onClick);


//------ Uppgift 6b ------//
var p1 = document.createElement('p'); // skapa variabeln 'p1'. Variabeln ska vara ett <p>-element //
p1.textContent = 'Hello world'; // variabel 'p1' ska innehålla texten 'Hello world' //

myTag = document.querySelector('.pTag6b'); // hitta elementet <.pTag6b>, och gör det till ett 'parent-element'//
                                       // (våra <p>-taggar ska ligga i detta element.)//
myTag.appendChild(p1); // i <body>, lägg till elementet 'p1' (Hello world) //
