let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v) => {
        return v.json()
}).then((c) => {
        ihtml = "";
        

        for (item in c) {
            const ds=c[item].start_time;
            const de=c[item].end_time;
            const datts = new Date(ds);
            const datte=new Date(de);

                ihtml += `
                <div class="card mx-3 my-2" style="width: 10rem; height:16rem; background-color:#93B1A6">
                <div class="top-img mx-2">
                                <img src="./x.png" class="card-img-top" alt="coading pic">
                                </div>
                                <div class="card-body">
                                        <p style="font-size:0.9rem;"><b>${c[item].site}</b></p>
                                        <p> <b>Starts at: </b>${datts.toLocaleString()}</p>
                                        <p><b> Ends at: </b>${datte.toLocaleString()}</p>
                                        <a id="xc"class="btn btn-primary"style="width:60px;height:25px;font-size:x-small;" href="${c[item].url}" role="button">Link</a>
                                       
                                </div>
                        </div>
                `
                
        }
        cardContainer.innerHTML = ihtml;

     let numberofbtns=document.querySelectorAll("#xc").length;
     for(let i=0;i<numberofbtns;i++)
     {
        document.querySelectorAll("#xc")[i].addEventListener("click",function()
        {
                var link =  document.querySelectorAll("#xc")[i].getAttribute("href");
                openLinkInNewTab(link);
                function openLinkInNewTab(link) {
                        window.open(link, '_blank');
                      }
                      
        })
     }


          
})
