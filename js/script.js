var input = document.querySelector("input");

var data = [
    { name: "vishwa", src: "https://plus.unsplash.com/premium_photo-1682088935745-089fbb1dc447?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    { name: "vishwangi", src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    { name: "vishwajeet", src: "https://media.istockphoto.com/id/1167770705/photo/young-indian-man-wearing-orange-sweater-over-isolated-white-background-approving-doing.jpg?s=1024x1024&w=is&k=20&c=GjuKHaqpDs1sn-JH5Gge6N376yq4cr22mnP4JM5MKHs="},
    { name: "vishweshwar", src: "https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

]

var pers = "";
data.forEach(function(elem){
    pers += `<div class="person">
    <div class="img">
        <img src="${elem.src}" alt="">
    </div>
    <h4>${elem.name}</h4>
</div>`;
})

document.querySelector(".people").innerHTML = pers;

input.addEventListener("input",function(){
    var matching = data.filter(function(e){
        return e.name.startsWith(input.value)
    })

    var newusers = "";
    matching.forEach(function(elem){
        newusers += `<div class="person">
        <div class="img">
            <img src="${elem.src}" alt="">
        </div>
        <h4>${elem.name}</h4>
    </div>`;
    })

    document.querySelector(".people").innerHTML = newusers;
})