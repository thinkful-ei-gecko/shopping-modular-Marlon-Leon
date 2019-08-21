'use strict';


const store = (function(){
  let items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  let hideCheckedItems = false;
  let searchTerm = '';
  const findById = function(id){ //returns the object that matches the ID
    return this.items.find(item => item.id === id);
  };
  const addItem = function(name){
    try {
      Item.validateName(name);
      Item.create(name);
      this.items.push({id: cuid(), name: name, checked: false});
    }
    catch(e){
      console.error('Name not valid');
    }
  };

  const findAndToggleChecked = function(id){
    let obj = this.findById(id);
    obj.checked = !obj.checked;
  };

  const findAndUpdateName = function(id, name){
    try{
      Item.validateName(name);
      let foundObject = this.findById(id);
      foundObject.name = name;    
    }
    catch(e){
      console.error('Cannot update name');
    }
  };
  const findAndDelete = function(id) {
    let obj = this.findById(id); //returns the object
    let itemIndex = this.items.findIndex(item => item === obj);
    // console.log(itemIndex);
    // console.log(`test`);
    this.items.splice(itemIndex, 1);
    console.log('spliced');
  };

  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete
  };

}() );