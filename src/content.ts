import { createModal } from './modal';

const injectSidebarSection = () => {
  const sidebar = document.querySelector('#partial-discussion-sidebar');

  if (sidebar) {
    const newSection = document.createElement('div');
    newSection.classList.add('discussion-sidebar-item');
    newSection.innerHTML = `
      <h3 class="discussion-sidebar-heading">Custom Extension</h3>
      <button id="custom-extension-button" class="btn btn-sm">Open Modal</button>
    `;

    sidebar.appendChild(newSection);

    // Add event listener to the button
    const button = document.getElementById('custom-extension-button');
    button?.addEventListener('click', () => {
      createModal();
    });
  }
};

const observePageChanges = () => {
  const observer = new MutationObserver(() => {
    if (document.querySelector('#partial-discussion-sidebar')) {
      injectSidebarSection();
      observer.disconnect(); // Prevent duplicate injections
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
};

// Run the injection script on page load
observePageChanges();
alert("github loaded")
