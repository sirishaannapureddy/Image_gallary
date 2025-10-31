 const api_key=`SCklesFhaM275gZ7HQUYMuquIX0IOgzMzIqe8hFv`;

    
    let button = document.getElementById("click")
     let result = document.getElementById("result")

    button.addEventListener("click",getdata);

     async function getdata(){
        let date = document.getElementById("date").value
      
           if(!date){
               alert("please select a date!")
               return 
            }
            result.innerHTML = "";
       
        const url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${date}`;
        try{
         const response=await fetch(url);
         const data=await response.json();
            console.log(data)

        
          let card=document.createElement("div")
           let title=document.createElement("h4")
           title.classList.add("title")
            title.textContent=data.title;
             card.appendChild(title)

            if(data.media_type==="image"){
            let image = document.createElement("img")
            image.src = data.url;
            image.alt=data.title;
            image.classList.add("image")
            card.appendChild(image)
            } 
            else if(data.media_type==="video"){
                const iframe=document.createElement("iframe");
                iframe.src=data.url;
                 
                iframe.allowFullscreen = true;
                 iframe.width = "580";
                    iframe.height = "345";
                card.appendChild(iframe)
            }
           

            const explanation = document.createElement("p");
            explanation.textContent = data.explanation;
            explanation.classList.add("p")
            card.appendChild(explanation)
            result.append(card)
                    
            }catch(error) {
            //   console.error(error);
            
               result.textContent = "Something went wrong. Please try again.";
               
            }
        
        }
    