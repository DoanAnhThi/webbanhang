var updateBtns = document.getElementsByClassName('update-cart')
for (i=0; i < updateBtns.length;i++){
    updateBtns[i].addEventListener('click',function(){
        var productID = this.dataset.product
        var action =this.dataset.action
        console.log('productID',productID,'action',action)
        console.log('user',user)
        if (user === "AnonymousUser"){
            console.log('user not logged in')
        } else {
            console.log('user logged in, success add')
        }
    })
}