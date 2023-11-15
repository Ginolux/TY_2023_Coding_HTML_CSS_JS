
// Function to add a new to-do item
function addTodo() {
    // Get the value entered in the input field
    var input = document.getElementById('todo-input');
    var newTodoText = input.value;
  
    // Check if the input field is not empty
    if (newTodoText !== '') {
      // Create a new list item element
      var li = document.createElement('li');
  
      // Set the text of the list item to the text entered in the input field
      li.textContent = newTodoText;
  
      // Append the new list item to our unordered list
      document.getElementById('todo-list').appendChild(li);
  
      // Clear the input field to ready it for a new entry
      input.value = '';
    } else {
      // If the input field was empty, alert the user
      alert('Please enter a to-do!');
    }
  }
  