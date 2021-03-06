var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//form Submit
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup',filterItems);
//add item
function addItem(e){
    e.preventDefault();

    //Get input value
    var newItem = document.getElementById('item').value;

    //Create new li element
    var li = document.createElement('li');
    //add class
    li.className = 'list-group-item';
    // add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //Create del button element
    var deleteBtn = document.createElement('button');

    //Add class to del buttn
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // append button to li
    li.appendChild(deleteBtn);

    
    itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
    if(confirm('are you sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
    }
    }
}

//filter items
function filterItems(e){
    //conver text to lowercase
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    //conver to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else{
            item.style.display = 'none';
        }
    });
}