export interface order {
    productname:string,
    paymentstatus:string,
    ordstatus:string,
    quantity:string,
    town:string,
    state:string,
    country:string,
    price:string,
    productid:string,
    ordid:string,
    request_order_id:string,
    shipping:boolean,
    localpickup:boolean,
    address:string,
    firstname:string,
    lastname:string,
    paymentmethod:string,
    postalcode:string,
    //paymentmethod:string,
    total:string,
    email:string,
    phone:string,
    tax:string,
    overalltotal:string 
    userid:string
    vendorname:string 
}

export interface cartproduct{
    categoryid:string
    id:string
    imageurl:string
    model: string
    proddescription: string
    productname:string
    productprice: string
    productquantity: string
    productstatus: string
    shortsummary: string
    size: string
    state: string
    tax: string
    vendorname: string
}













































































































