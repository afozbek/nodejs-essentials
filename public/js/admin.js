const deleteProduct = (btn) => {
    // console.log(btn);
    //Retrieve the ıd of the product when clicking the delete button
    const prodId = btn.parentNode.querySelector('[name=productId]').value;
    const csrf = btn.parentNode.querySelector('[name=_csrf]').value;


};