//script for hamburger menu
function hideSidebar() {
  const sidebar = document.querySelector('.sidebar')
      sidebar.style.display = 'none'
}

function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'flex'
  }
  
// script for the modal
$(document).ready(function(){       
    $('#welcomeModal').modal('show');
     }); 

// document.querySelector('.no-thanks-btn').addEventListener('click', function(){
//     $('#welcomeModal').modal('.hide');
// })