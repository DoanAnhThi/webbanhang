var updateBtns = document.getElementsByClassName('update-cart')
for (i=0; i < updateBtns.length;i++){
    updateBtns[i].addEventListener('click',function(){
        var productID = this.dataset.product
        var action =this.dataset.action
        console.log('productID',productID,'action',action)
        console.log('user',user)
        if (user === "AnonymousUser"){
            updateUserOrder(productID, action)
        } else {
            console.log('user dont logged in, fail add')
        }
    })
}

function updateUserOrder(productID, action){
    console.log('user logged in, success add')
    var url = '/update_item/'
    fetch(url,{
        method: 'POST',
        headers:{
            'Content-Type':'aplication/json'
        },
        body: JSON.stringify({'productID': productID,'action': action})
    })
    .then((response)=>{
        response.json()
    })
    .then((data)=>{
        console.log('data',data)
    })
}