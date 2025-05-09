document.addEventListener('DOMContentLoaded', function() {
  const blankButton = document.getElementById('blankButton');
  const mergeButton = document.getElementById('mergeButton');
  const releaseButton = document.getElementById('releaseButton');
  const releaseInput = document.getElementById('releaseInput');
  const successMessage = document.getElementById('successMessage');

  // Load saved release version when popup opens
  chrome.storage.local.get(['lastReleaseVersion'], function(result) {
    if (result.lastReleaseVersion) {
      releaseInput.value = result.lastReleaseVersion;
    }
  });

  // Function to format date as DD.MM.YYYY
  function formatDate() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    
    return `${day}.${month}.${year}`;
  }

  // Function to show success message temporarily
  function showSuccessMessage() {
    successMessage.style.display = 'block';
    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 2000);
  }

  // Handle "Blank message" button click
  blankButton.addEventListener('click', function() {
    const date = formatDate();
    const text = `Viktor ${date}: `;
    
    navigator.clipboard.writeText(text)
      .then(() => {
        showSuccessMessage();
      })
      .catch(err => {
        console.error('Could not copy text: ', err);
      });
  });

  // Handle "Merged to develop" button click
  mergeButton.addEventListener('click', function() {
    const date = formatDate();
    const text = `Viktor ${date}: Merged to develop.`;
    
    navigator.clipboard.writeText(text)
      .then(() => {
        showSuccessMessage();
      })
      .catch(err => {
        console.error('Could not copy text: ', err);
      });
  });

  // Handle "Release" button click
  releaseButton.addEventListener('click', function() {
    const releaseVersion = releaseInput.value.trim();
    if (!releaseVersion) {
      alert('Please enter a release version');
      return;
    }
    
    // Save the release version
    chrome.storage.local.set({ lastReleaseVersion: releaseVersion });
    
    const date = formatDate();
    const text = `Viktor ${date}: Release ${releaseVersion}.`;
    
    navigator.clipboard.writeText(text)
      .then(() => {
        showSuccessMessage();
      })
      .catch(err => {
        console.error('Could not copy text: ', err);
      });
  });
}); 