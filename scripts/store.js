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
  const findById = function(id){
    return this.items.find(id => items.id === id);
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
    let foundId = this.findById(id);
    foundId.checked = !foundId.checked;
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
    let itemIndex = this.items.findIndex(id);
    this.items.splice(itemIndex, 1);
  };

  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
  };

}() );