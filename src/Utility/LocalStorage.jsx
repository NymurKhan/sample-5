const getStoredReadList = () =>{
    const storedReadList = localStorage.getItem('read-list');
    if(storedReadList){
        return JSON.parse(storedReadList);
    }
    return [];
}





const saveReadList = id =>{
    const getStoredReadLists = getStoredReadList();
    const exists = getStoredReadLists.find(bookId => bookId === id)
    if(!exists){
        getStoredReadLists.push(id);
        localStorage.setItem('read-list', JSON.stringify(getStoredReadLists))
    }


}
export{getStoredReadList, saveReadList}