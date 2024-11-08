var updateBtns = document.getElementsByClassName('update-cart')
for (i=0; i < updateBtns.length;i++){
    updateBtns[i].addEventListener('click',function(){
        var productID = this.dataset.product
        var action =this.dataset.action
        console.log('productID',productID,'action',action)
        console.log('user',user)
        if (user === "AnonymousUser"){
            console.log('user didnt logged in, fail add')
        } else {
            updateUserOrder(productID,action)
        }
    })
}

function updateUserOrder(productID,action){
    console.log('user logged in, success add')
    var url = '/update_item/'
    fetch(url, {
        method: 'POST',
        headers:{
            'Content-Type':'aplication/json',
            'X-CSRFToken': csrftoken ,
        },
        body: JSON.stringify({'productID': productID,'action': action})
    })
    .then((response) =>{
        return response.json()
    })
    .then((data) =>{
        console.log('data',data)
        location.reload()
    })
}