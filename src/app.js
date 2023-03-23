var betetInput = document.querySelector('#betet');
var tokesitesInput = document.querySelector('#tokesites_szam');
var nevlegesInput = document.querySelector('#nevleges');
var calcButton = document.querySelector('#calcButton');
var tenyleges_kamatInput = document.querySelector('#tenyleges_kamat');

calcButton.addEventListener('click', () => {
    inputCon();
});

function inputCon() {
    let betet = Number(betetInput.value);
    let tokesites = Number(tokesitesInput.value);
    let nevleges = Number(nevlegesInput.value);
    let tenyleges_kamat = calcTenylegesKamat(nevleges, tokesites, betet);
    tenyleges_kamatInput.value ="Tényleges éves kamat: " + tenyleges_kamat +"ft";

}

function calcTenylegesKamat(nevleges, tokesites, betet) {
    let tenyleges = (
        Math.pow((
            1+(nevleges/(100*tokesites))
        ), tokesites)-1
    )*betet;
    return tenyleges;
}