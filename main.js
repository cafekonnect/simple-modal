//get modal element
var modal=document.getElementById('simpleModal');
//Get the open button
var modalBtn=document.getElementById('modalBtn');
//Get close button
var closeBtn=document.getElementsByClassName('closeBtn')[0];
//Listen for open click and run the function
modalBtn.addEventListener('click',openModal);
//Listen for close click and run the function
closeBtn.addEventListener('click',closeModal);
// listen for outside click
window.addEventListener('click',clickOutside);

//function to open modal
function openModal(){
modal.style.display='block';
}
//function to close modal
function closeModal(){
    modal.style.display='none';
    }
    //function to close modal after outside click
    /*function clickOutside(e){
        if(e.target==modal){
            modal.style.display='none';
        }
      
        }*/
    