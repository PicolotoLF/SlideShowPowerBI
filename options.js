// Saves options to chrome.storage
document.addEventListener('DOMContentLoaded', restore_options);

function save_options() {
  var slide_time = document.getElementById('slide_time').value;
  chrome.storage.sync.set({
    slide_time: slide_time,
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    slide_time: 5,
  }, function(items) {
    document.getElementById('slide_time').value = items.slide_time;
  });
}

document.getElementById('save').addEventListener('click',
    save_options);