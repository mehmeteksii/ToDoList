
var list = document.querySelector("#myList")




list.addEventListener("click", function(item){
    if (item.target.tagName == "LI"){
        item.target.classList.toggle("checked")
        toggleDeleteButton()
    }
})

document.querySelector("#btnCreate").onclick=function(){
    var item = document.querySelector("#txtItem").value
    if (item == ""){
        alert("Lütfen Bir Görev Giriniz")
        return
    }

    createItem(item)
    let txt = document.querySelector("#txtItem")
    txt.value = ""

}

document.querySelector("#deleteAll").onclick = function(){
    var elements = document.querySelectorAll(".checked")
    elements.forEach(function(item){
        item.style.display = "none"
        item.classList.remove("checked")
        toggleDeleteButton()
    })
}

function toggleDeleteButton() {
    var checkList = document.querySelectorAll(".checked")
    
    if(checkList.length > 0){
        document.querySelector("#deleteAll").classList.remove("d-none")
    }else{
        document.querySelector("#deleteAll").classList.add("d-none")
    }
}

function createItem(item) {
    var li = document.createElement("li")
    var t = document.createTextNode(item)
    li.className = "list-group-item"
    li.appendChild(t)
    list.appendChild(li)

    var span = document.createElement("span")
    var text = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(text)
    li.appendChild(span)

    span.onclick = function(){
        var li = this.parentElement
        li.style.display = "none" 
        li.classList.remove("checked")
    }
}