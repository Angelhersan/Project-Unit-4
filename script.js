let opening = document.querySelector('.opening-animal');
let betterAnimal = document.querySelector('.betterScreen')
let pickAnimal = document.querySelector('.animalScreen');
let blobfish = document.querySelector('.blobfishScreen');
let lumpSucker = document.querySelector('.lumpSuckerScreen');
let bear = document.querySelector('.bearScreen');
let pig = document.querySelector('.pigScreen');
let optionBlobfish = document.querySelector('.blobfishButton');
let optionLumpSucker = document.querySelector('.lumpSuckerButton');
let optionBear = document.querySelector('.bearButton');
let optionPig = document.querySelector('.pigButton');
let optionWater = document.querySelector('.waterButton');
let optionLand = document.querySelector('.landButton');
let optionShark = document.querySelector('.sharkButton');
let optionLion = document.querySelector('.lionButton');
let startOption = document.querySelector('.startButton');
let result = document.querySelector('.resultButton')
let resultBlobfish = false
let resultLumpSucker = false
let resultBear = false
let resultPig = false
let waterOption = false
let landOption = false
let sharkOption = false
let lionOption = false


optionShark.addEventListener("click", function(){
    sharkOption = true;
    optionLion.style.display = "none";
    optionShark.style.display = "none";
    result.style.display = "block";
});

optionLion.addEventListener("click", function(){
    lionOption = true;
    optionLion.style.display = "none";
    optionShark.style.display = "none";
    result.style.display = "block";

});


result.addEventListener("click", function(){
    if(waterOption === true && sharkOption === true){
        pickAnimal.style.display = "none"
        result.style.display = "none"
        lumpSucker.style.display = "block";
    }
    if(waterOption === true && lionOption === true){
        pickAnimal.style.display = "none"
        result.style.display = "none"
        pig.style.display = "block";
    }
    if(landOption === true && sharkOption === true){
        pickAnimal.style.display = "none"
        result.style.display = "none"
        blobfish.style.display = "block";
    }
    if(landOption === true && lionOption === true){
        pickAnimal.style.display = "none"
        result.style.display = "none"
        bear.style.display = "block";
    }
});

startOption.addEventListener("click", function(){
    opening.style.display = "none";
    betterAnimal.style.display = "block";
});

optionWater.addEventListener("click", function(){
    waterOption = true;
    betterAnimal.style.display = "none";
    pickAnimal.style.display = "block";
});

optionLand.addEventListener("click", function(){
    landOption = true;
    betterAnimal.style.display = "none";
    pickAnimal.style.display = "block";
});

optionBlobfish.addEventListener("click", function(){
    blobfish.style.display = "none";
    opening.style.display = "block";
});

optionLumpSucker.addEventListener("click", function(){
    lumpSucker.style.display = "none";
    opening.style.display = "block";
});

optionBear.addEventListener("click", function(){
    bear.style.display = "none";
    opening.style.display = "block";
});

optionPig.addEventListener("click", function(){
    pig.style.display = "none";
    opening.style.display = "block";
});











