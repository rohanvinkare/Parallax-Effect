document.addEventListener('DOMContentLoaded', function () {

    // Function to get stored content from localStorage
    function getStoredContent(id) {
        return localStorage.getItem(id) || '';
    }

    // Function to set content to localStorage on input
    function setContentToStorage(id, content) {
        try {
            localStorage.setItem(id, content);
            console.log('Content saved to localStorage for ' + id);
        } catch (e) {
            console.error('Error saving content to localStorage for ' + id + ':', e);
        }
    }

    // Get the 'edit' element by its ID
    var edit = document.getElementById('edit');

    // Try to retrieve and set content from localStorage
    var storedContent = localStorage.getItem('edit');

    if (storedContent !== null) {
        edit.innerHTML = storedContent;
        edit.style.display = 'block'; // Show the editable area after content is loaded
    } else {
        edit.style.display = 'block'; // Show the editable area even if localStorage is empty
    }

    // Event listener for 'edit' element
    edit.addEventListener('input', function () {
        // Save content to localStorage on input
        setContentToStorage('edit', this.innerHTML);
        console.log('In local storage');
    });

    // Get elements by their IDs
    var parallax1 = document.getElementById('parallax1');
    var editableTitle = document.getElementById('editableTitle');
    var paragraph1 = document.getElementById('paragraph1');
    var parallax2 = document.getElementById('parallax2');
    var paragraph2 = document.getElementById('paragraph2');
    // Add more elements as needed

    // Set initial content from localStorage or use default content
    parallax1.innerHTML = getStoredContent('parallax1') || parallax1.innerHTML;
    editableTitle.innerHTML = getStoredContent('editableTitle') || editableTitle.innerHTML;
    paragraph1.innerHTML = getStoredContent('paragraph1') || paragraph1.innerHTML;
    parallax2.innerHTML = getStoredContent('parallax2') || parallax2.innerHTML;
    paragraph2.innerHTML = getStoredContent('paragraph2') || paragraph2.innerHTML;
    // Set initial content for additional elements

    // Event listeners for content editable areas
    parallax1.addEventListener('input', function () {
        setContentToStorage('parallax1', this.innerHTML);
    });

    editableTitle.addEventListener('input', function () {
        setContentToStorage('editableTitle', this.innerHTML);
    });

    paragraph1.addEventListener('input', function () {
        setContentToStorage('paragraph1', this.innerHTML);
    });

    parallax2.addEventListener('input', function () {
        setContentToStorage('parallax2', this.innerHTML);
    });

    paragraph2.addEventListener('input', function () {
        setContentToStorage('paragraph2', this.innerHTML);
    });
    // Add event listeners for additional elements
});
