//Get the modal
var modal = document.getElementById('modal');
//close button
var closeBtn = document.getElementById('closeBtn');
var modalBody =  document.getElementById('modal-body');
var modalTitle = document.getElementById('modal-title');

//Get Project buttons
var ddModalBtn = document.getElementById('drillDashModalBtn');
var gobModalBtn = document.getElementById('gobModalBtn');
var otrioModalBtn = document.getElementById('otrioModalBtn');
var frModalBtn = document.getElementById('frModalBtn');
var lwModalBtn = document.getElementById('lwModalBtn');
var apModalBtn = document.getElementById('apModalBtn');
var wdlModalBtn = document.getElementById('wdlModalBtn');
var fbModalBtn = document.getElementById('fbModalBtn');

//Add Event Listeners
closeBtn.addEventListener('click', CloseModal);
ddModalBtn.addEventListener('click',OpenDDModal);
gobModalBtn.addEventListener('click',OpenGobModal);
otrioModalBtn.addEventListener('click',OpenOtrioModal);
frModalBtn.addEventListener('click',OpenFRModal);
lwModalBtn.addEventListener('click',OpenLWModal);
apModalBtn.addEventListener('click',OpenAPModal);
wdlModalBtn.addEventListener('click',OpenWDLModal);
fbModalBtn.addEventListener('click',OpenFBModal);
window.addEventListener('click', OutsideClick);


function CloseModal()
{
    modal.style.display = 'none';
}

//Drill Dash
function OpenDDModal()
{
    modalBody.src= "ddslider.html";
    modalTitle.innerHTML = "Drill Dash";
    modal.style.display = 'block';
}

//Gob
function OpenGobModal()
{
    modalBody.src= "gobslider.html";
    modalTitle.innerHTML = "Gobsmax Galaxy Game";
    modal.style.display = 'block';
    modalBody.outerHTML
}

//Otrio
function OpenOtrioModal()
{
    modalBody.src= "otrioslider.html";
    modalTitle.innerHTML = "Otrio";
    modal.style.display = 'block';
}

//Flood Runner
function OpenFRModal()
{
    modalBody.src= "floodrunner.html";
    modalTitle.innerHTML = "Flood Runner";
    modal.style.display = 'block';
}

//Lightning Wizard
function OpenLWModal()
{
    modalBody.src= "lwslider.html";
    modalTitle.innerHTML = "Lightning Wizard";
    modal.style.display = 'block';
}

//Apollyon
function OpenAPModal()
{
    modalBody.src= "apslider.html";
    modalTitle.innerHTML = "Apollyon";
    modal.style.display = 'block';
}

//WDL
function OpenWDLModal()
{
    modalBody.src= "wdlslider.html";
    modalTitle.innerHTML = "World Demolition League";
    modal.style.display = 'block';
}

//The Fight Back
function OpenFBModal()
{
    modalBody.src= "fbslider.html";
    modalTitle.innerHTML = "The Fight Back";
    modal.style.display = 'block';
}

function OutsideClick(e)
{
    if(e.target == modal)
    {
        modal.style.display = 'none';
    }
}
