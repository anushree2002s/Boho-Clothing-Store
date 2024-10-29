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
     function showModal() {
      const modal = document.getElementById('welcomeModal');
      modal.style.display = 'block'; 
    }

    function closeModal() {
      const modal = document.getElementById('welcomeModal');
      modal.style.display = 'none';
    }

    document.addEventListener('DOMContentLoaded', function() {
      showModal(); 
    });
