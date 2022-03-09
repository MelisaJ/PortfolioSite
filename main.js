//Get the modal
var modal = document.getElementById('DrillDashModal');
//get the open modal button
var modalBtn = document.getElementById('modalBtn');
//close button
var closeBtn = document.getElementById('closeBtn');


modalBtn.addEventListener('click',OpenModal)
closeBtn.addEventListener('click', CloseModal);
window.addEventListener('click', OutsideClick);

function OpenModal(){
    modal.style.display = 'block';
}
function CloseModal()
{
    modal.style.display = 'none';
}
function OutsideClick(e){
    if(e.target == modal)
    {
        modal.style.display = 'none';
    }
}
