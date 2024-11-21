export const createModal = () => {
  // Check if modal already exists
  if (document.getElementById('custom-extension-modal')) return;

  // Create the modal wrapper
  const modal = document.createElement('div');
  modal.id = 'custom-extension-modal';
  modal.classList.add('Overlay', 'Overlay--wide');
  modal.style.zIndex = '1000'; // Ensure it appears on top of other elements

  modal.innerHTML = `
    <div class="Overlay-content">
      <div class="Box Box--overlay">
        <div class="Box-header">
          <h3 class="Box-title">Custom Modal</h3>
          <button class="Box-btn-octicon btn-octicon float-right" aria-label="Close" id="modal-close">
            <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="16" height="16">
              <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 01-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
            </svg>
          </button>
        </div>
        <div class="Box-body">
          <p>This is a custom modal styled to match GitHub's interface.</p>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // Add close functionality
  const closeButton = document.getElementById('modal-close');
  closeButton?.addEventListener('click', () => {
    modal.remove();
  });

  // Close on overlay click
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.remove();
    }
  });
};
