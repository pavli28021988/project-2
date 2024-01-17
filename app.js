let filterArray = [];

let galleryArray = [

    {
        id:1,
        name: "samsung watch",
        scr: "./img/watch1.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, inventore aut. Molestias deserunt totam officiis."

    },
    {
        id:2,
        name: "iphone 13 pro",
        scr: "./img/iphone1.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, inventore aut. Molestias deserunt totam officiis."
        

    },
    {
        id:3,
        name: "iphone 11",
        scr: "./img/iphone2.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, inventore aut. Molestias deserunt totam officiis."
        

    },
    {
        id:4,
        name: "simple white watch",
        scr: "./img/watch2.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, inventore aut. Molestias deserunt totam officiis."
        

    },
    {
        id:5,
        name: "headphone",
        scr: "./img/headphone.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, inventore aut. Molestias deserunt totam officiis."
        

    },
    {
        id:6,
        name: "smart watch",
        scr: "./img/watch3.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, inventore aut. Molestias deserunt totam officiis."
        

    },
]


showGallery(galleryArray);

//create a function to show teh gallery

function showGallery(currentArray){

    document.getElementById("card").innerText = '';


    for(let i = 0; i < currentArray.length;i++){
        document.getElementById('card').innerHTML += `
         <div class="col-md-4 mt-3">
         <div class="card p-3 ps-5 pe-5">

         <h4 class="text-capitalize text-center">${currentArray[i].name}</h4>
         <img src="${currentArray[i].scr}" width="100%" height="320px"/>
         <p class="mt-2">${currentArray[i].desc}</p>
         <button class="btn btn-primary w-100 mx-auto">More<button/>

         </div>
         </div>

        
        `
    }
}

// live searching using keyup input


document.getElementById("myinput").addEventListener("keyup",function(){ //<input type="text" onkeyup="myFunction()">
    let text = document.getElementById('myinput').value;

    filterArray = galleryArray.filter((a)=>{
        if(a.name.toLowerCase().includes(text.toLowerCase())){
            return a.name
        }
    })

    if(this.value == ''){
        showGallery(galleryArray);

    }else{
        if(filterArray == ''){
            document.getElementById("para").style.display = 'block';
            document.getElementById("card").innerHTML = "";
        }else{
            showGallery(filterArray);
            document.getElementById('para').style.display = 'none';
        }
    }

})