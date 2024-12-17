var signout=document.getElementById("signout")
var animationimg=document.getElementById("animationimg")
var welcome=document.getElementById("welcome")
var box=document.getElementById("box")
var counter=document.getElementById("counter")
var bagshopping=document.getElementById("bagshopping")
var shoppingcart=document.getElementById("shoppingcart")
var closeshoppingcart=document.getElementById("closeshoppingcart")
var orders=document.getElementById("orders")
var bottom=document.getElementById("bottom")
var totalnum=document.getElementById("totalnum")
var buynow=document.getElementById("buynow")
var buy=document.getElementById("buy")
var line=document.getElementById("line")
var numberofitems=document.getElementById("numberofitems")

let count=+(localStorage.getItem("count"))||0
let itemsadded=JSON.parse(localStorage.getItem("itemsadded"))||[]

let Productes=[
    {
        id:1,
        src:"media/flower6.webp",
        name:"Sunflowers",
        price:1200,
        amout:localStorage.getItem("amount1")||0
    },
    {
        id:2,
        src:"media/flower2.jpeg",
        name:"Simple_flowers",
        price:2150,
        amout:localStorage.getItem("amount2")||0
    },

    {
        id:3,
        src:"media/flower8.jpeg",
        name:"box_flowers",
        price:1300,
        amout:localStorage.getItem("amount3")||0
    },
    {
        id:4,
        src:"media/flower4.jpeg",
        name:"Bink_flowers",
        price:950,
        amout:localStorage.getItem("amount4")||0
    },
    {
        id:5,
        src:"media/flower5.webp",
        name:"Red_flowers",
        price:1000,
        amout:localStorage.getItem("amount5")||0
    },
    {
        id:6,
        src:"media/flower7.jpeg",
        name:"Rose_vase",
        price:250,
        amout:localStorage.getItem("amount6")||0
    },
    {
        id:7,
        src:"media/flower9.jpeg",
        name:"Bouquet_flowers",
        price:3290,
        amout:localStorage.getItem("amount7")||0
    },
    {
        id:8,
        src:"media/flower10.jpeg",
        name:"Simple_gold",
        price:3150,
        amout:localStorage.getItem("amount8")||0
    },
    {
        id:9,
        src:"media/flower11.jpeg",
        name:"Purple_roses",
        price:1400,
        amout:localStorage.getItem("amount9")||0
    },
    {
        id:10,
        src:"media/flower12.jpeg",
        name:"Natural_roses",
        price:2150,
        amout:localStorage.getItem("amount10")||0
    },
    {
        id:11,
        src:"media/flower13.jpeg",
        name:"Big_box",
        price:1700,
        amout:localStorage.getItem("amount11")||0
    },
    {
        id:12,
        src:"media/flower14.jpeg",
        name:"Rose_flowers",
        price:2600,
        amout:localStorage.getItem("amount12")||0
    }
]
if(localStorage.getItem("count")){
    counter.innerHTML=count
}
function removeitem(id){
    --count
    localStorage.removeItem(`amount${id}`)
    document.getElementById(`amount${id}`).innerHTML=0
    orders.innerHTML=""
    var itemsafterdelete=itemsadded.filter(e=>{
        return e.id!=id
    })
    itemsadded=itemsafterdelete
    itemsadded.forEach((ele)=>{
        let amountnum=localStorage.getItem(`amount${ele.id}`)||0
        orders.innerHTML+=`<div class="item">
                <img src="${ele.src}" alt="img"/>
                <div>
                    <h2>${ele.name}</h2>
                    <h4>${ele.price}LE</h4>
                    <p>number of items is:${amountnum}</p>
                </div>
                <i class="fa-regular fa-circle-xmark" onclick="removeitem(${ele.id})"></i>
            </div>`
    })
    var prices=itemsadded.map(ele=>{
        let amountnum=+(localStorage.getItem(`amount${ele.id}`))||1
        return ele.price*amountnum})
    var costall=prices.reduce((e,c)=>{return e+c})        
    totalnum.innerHTML=`Total Price : ${costall} LE`
    counter.innerHTML=count
    numberofitems.innerHTML=`${count} items`
    const itemname=document.getElementById(`btn${id}`)
    itemname.style.border="revert"
    itemname.style.boxShadow="none"
    itemname.innerHTML="Add To Cart"
    localStorage.setItem("count",count)
    localStorage.setItem("itemsadded",JSON.stringify(itemsadded))
    
}
function additem(id){
    const itemname=document.getElementById(`btn${id}`)
    if(itemname.innerHTML=="Add To Cart"){
        itemname.style.border="none"
        itemname.style.boxShadow="inset 0 0 4px 0 black"
        itemname.innerHTML="Remove"
        ++count
        var newitem=Productes.find(e=>{return e.id==id})
        itemsadded=[...itemsadded,newitem]
        if(localStorage.getItem(`amount${id}`)){
            document.getElementById(`amount${id}`).innerHTML=+(localStorage.getItem(`amount${id}`))+1
            localStorage.setItem(`amount${id}`,+(localStorage.getItem(`amount${id}`))+1)
        }else{
            localStorage.setItem(`amount${id}`,1)
            document.getElementById(`amount${id}`).innerHTML=1
    
        }
    }else{
        itemname.style.border="revert"
        itemname.style.boxShadow="none"
        itemname.innerHTML="Add To Cart"
        --count
        var newitem=itemsadded.filter(e=>{return e.id!=id})
        itemsadded=newitem
        localStorage.setItem(`amount${id}`,0)
        document.getElementById(`amount${id}`).innerHTML=0
    }
    counter.innerHTML=count
    numberofitems.innerHTML=`${count} items`
    localStorage.setItem("count",count)
    localStorage.setItem("itemsadded",JSON.stringify(itemsadded))
    setTimeout(() => {
        orders.innerHTML=""
        var pricesofitems=[]
        itemsadded.forEach((ele)=>{
            let amountnum=+(localStorage.getItem(`amount${ele.id}`))||1
            var amounted=localStorage.getItem(`amount${ele.id}`)||0
            orders.innerHTML+=`<div class="item">
                    <img src="${ele.src}" alt="img"/>
                    <div>
                        <h2>${ele.name}</h2>
                        <h4>${ele.price}LE</h4>
                        <p>number of items is:${amounted}</p>
                    </div>
                    <i class="fa-regular fa-circle-xmark" onclick="removeitem(${ele.id})"></i>
                </div>`
            pricesofitems.push(ele.price*amountnum)
        })
        const p=pricesofitems.reduce((e,c)=>{return e+c})
        totalnum.innerHTML=`total price is : ${p} LE`
        bottom.style.display="block"
    }, 800);

}
var decrement=(id)=>{
    var amountid=document.getElementById(`amount${id}`)
    if(localStorage.getItem(`amount${id}`)){
        let amountum=+(localStorage.getItem(`amount${id}`))
        amountid.innerHTML=amountum+1
        localStorage.setItem(`amount${id}`,amountum+1)
    }else{
        amountid.innerHTML=1
        localStorage.setItem(`amount${id}`,1)
    }
    setTimeout(() => {
        orders.innerHTML=""
        itemsadded.forEach((ele)=>{
            let amounted=localStorage.getItem(`amount${ele.id}`)||0
            orders.innerHTML+=`<div class="item">
                    <img src="${ele.src}" alt="img"/>
                    <div>
                        <h2>${ele.name}</h2>
                        <h4>${ele.price}LE</h4>
                        <p>number of items is:${amounted}</p>
                    </div>
                    <i class="fa-regular fa-circle-xmark" onclick="removeitem(${ele.id})"></i>
                </div>`
        })
        var prices=itemsadded.map(ele=>{
            let amountnum=+(localStorage.getItem(`amount${ele.id}`))||1
            return ele.price*amountnum})
        var cost=prices.reduce((e,c)=>{return e+c})        
        totalnum.innerHTML=`Total Price : ${cost} LE`
        bottom.style.display="block"
    }, 800);
}
var increment=(id)=>{
    var amountid=document.getElementById(`amount${id}`)
    if(localStorage.getItem(`amount${id}`)&&localStorage.getItem(`amount${id}`)!=0){
        let amountum=+(localStorage.getItem(`amount${id}`))
        amountid.innerHTML=amountum-1
        localStorage.setItem(`amount${id}`,amountum-1)
    }else{
        amountid.innerHTML=0
        localStorage.removeItem(`amount${id}`)
    }
    setTimeout(() => {
        orders.innerHTML=""
        itemsadded.forEach((ele)=>{
            let amounted=localStorage.getItem(`amount${ele.id}`)||0
            orders.innerHTML+=`<div class="item">
                    <img src="${ele.src}" alt="img"/>
                    <div>
                        <h2>${ele.name}</h2>
                        <h4>${ele.price}LE</h4>
                        <p>number of items is:${amounted}</p>
                    </div>
                    <i class="fa-regular fa-circle-xmark" onclick="removeitem(${ele.id})"></i>
                </div>`
        })
        var prices=itemsadded.map(ele=>{
            let amountnum=+(localStorage.getItem(`amount${ele.id}`))||1
            return ele.price*amountnum})
        var cost=prices.reduce((e,c)=>{return e+c})        
        totalnum.innerHTML=`Total Price : ${cost} LE`
        bottom.style.display="block"
    }, 800);
}
Productes.forEach((item)=>{
    box.innerHTML+=`<div class="cart">
            <img src="${item.src}" alt="" >
            <h2>${item.name}</h2>
            <h4>${item.price} LE</h4>
            <div>
                <button class="minus" onclick="increment(${item.id})">-</button>
                <p id="amount${item.id}">${item.amout}</p>
                <button class="plus" onclick="decrement(${item.id})">+</button>
            </div>
            <button onclick="additem(${item.id})" id="btn${item.id}">Add To Cart</button>
        </div>`
})
if(localStorage.getItem("itemsadded")){
    const itemsbuttons=JSON.parse(localStorage.getItem("itemsadded"))
    itemsbuttons.forEach(ele=>{
        const itemname=document.getElementById(`btn${ele.id}`)
        itemname.style.border="none"
        itemname.style.boxShadow="inset 0 0 4px 0 black"
        itemname.innerHTML="Remove"
    })
}
if(localStorage.getItem("usernameSign")){
    welcome.innerHTML=`welcome for you "${localStorage.getItem("usernameSign")}" in our website, now you are ready to start`
}
animationimg.onload=()=>{
    animationimg.style.right="5%"
}
signout.onclick=()=>{
    location="index.html"
    localStorage.clear()
}
bagshopping.onclick=function(){
    let num=localStorage.getItem("count")||0
    numberofitems.innerHTML=`${num} items`
    shoppingcart.style.display="flex"
    setTimeout(()=>{ shoppingcart.style.height="100vh"},200)
    setTimeout(() => {
        orders.innerHTML=""
        itemsadded.forEach((ele)=>{
            let amounted=localStorage.getItem(`amount${ele.id}`)||0
            orders.innerHTML+=`<div class="item">
                    <img src="${ele.src}" alt="img"/>
                    <div>
                        <h2>${ele.name}</h2>
                        <h4>${ele.price}LE</h4>
                        <p>number of items is:${amounted}</p>
                    </div>
                    <i class="fa-regular fa-circle-xmark" onclick="removeitem(${ele.id})"></i>
                </div>`
        })
        var prices=itemsadded.map(ele=>{
            let amountnum=+(localStorage.getItem(`amount${ele.id}`))||1
            return ele.price*amountnum})
        var cost=prices.reduce((e,c)=>{return e+c})        
        totalnum.innerHTML=`Total Price : ${cost} LE`
        bottom.style.display="block"
    }, 800);
}

closeshoppingcart.onclick=()=>{
    orders.innerHTML=""
    bottom.style.display="none"
    shoppingcart.style.height="0vh"
    setTimeout(()=>{shoppingcart.style.display="none"},700)
}
buynow.onclick=()=>{
    buy.style.display="block"
    setTimeout(()=>{
        line.style.width="0%"
    },0)
    setTimeout(()=>{
        buy.style.display="none"
        line.style.width="100%"
    },2000)
}
