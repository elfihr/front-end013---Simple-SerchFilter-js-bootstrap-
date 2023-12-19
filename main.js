document.querySelector('#searchInput').addEventListener('input', filterList)


function filterList(){

    const searchInput = document.querySelector('#searchInput');
    const filter = searchInput.value.toLocaleLowerCase();
    const listItems = document.querySelectorAll('.lis-group-item');
    
    listItems.forEach((item) => {
        let text = item.textContent;
        if(text.toLowerCase().includes(filter.toLowerCase())){
            item.style.display = '';
        }else{
            item.style.display = 'none';

        }
    });
}