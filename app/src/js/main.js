var method = "GET",
    req = new XMLHttpRequest(),
    container = document.querySelector(".container");

document.getElementById("btn").onclick=function(){
    if(document.querySelector(".title").value.trim().length>2){
        req.onreadystatechange =function(){
            if(this.readyState==4&&this.status==200){
                var objAnime = JSON.parse(this.responseText);
                if(objAnime.results.length==0){
                        document.querySelector(".resultText").classList.add("notFound");
                        document.querySelector(".resultText").innerHTML="Your request : "+document.querySelector(".title").value.trim()+", is not found! Try again.";
                    }else{
                        document.querySelector(".resultText").classList.remove("notFound");
                        document.querySelector(".resultText").innerHTML="";
                        container.innerHTML="";
                        for(let i=0;i<objAnime.results.length;i++){  
                            var img = document.createElement("img"),
                            divImage = document.createElement("div"),
                            divCard = document.createElement("div"),
                            divCardContainer = document.createElement("div"),
                            divInfo = document.createElement("div"),
                            pTit = document.createElement("p"),
                            spTit1 = document.createElement("span"),
                            spTit2 = document.createElement("span"),
                            pTyp = document.createElement("p"),
                            spTyp1 = document.createElement("span"),
                            spTyp2 = document.createElement("span"),
                            pEpi = document.createElement("p"),
                            spEpi1 = document.createElement("span"),
                            spEpi2 = document.createElement("span"),
                            pSco = document.createElement("p"),
                            spSco1 = document.createElement("span"),
                            spSco2 = document.createElement("span"),
                            pRat = document.createElement("p"),
                            spRat1 = document.createElement("span"),
                            spRat2 = document.createElement("span"),
                            pSyn = document.createElement("p"),
                            spSyn = document.createElement("span"),
                            psynAnim = document.createElement("p"),
                            button = document.createElement("button"),
                            linkTag = document.createElement("a"),
                            linkAnime = document.createAttribute("href"),
                            linkTar = document.createAttribute("target"),
                            srcImg = document.createAttribute("src");
                            //--
                            spTit1.innerHTML="Title :";
                            pTit.appendChild(spTit1);
                            spTit2.innerHTML=objAnime.results[i].title;
                            pTit.appendChild(spTit2);
                            //--
                            spEpi1.innerHTML="Episodes :";
                            pEpi.appendChild(spEpi1);
                            spEpi2.innerHTML=objAnime.results[i].episodes;
                            pEpi.appendChild(spEpi2);
                            //--
                            spTyp1.innerHTML="Type :";
                            pTyp.appendChild(spTyp1);
                            spTyp2.innerHTML=objAnime.results[i].type;
                            pTyp.appendChild(spTyp2);
                            //--
                            spSco1.innerHTML="Score :";
                            pSco.appendChild(spSco1);
                            spSco2.innerHTML=objAnime.results[i].score;
                            pSco.appendChild(spSco2);
                            //--
                            spRat1.innerHTML="Rated :";
                            pTit.appendChild(spRat1);
                            spRat2.innerHTML=objAnime.results[i].rated;
                            pTit.appendChild(spRat2);
                            //--
                            spSyn.innerHTML="Synopsis :";
                            spSyn.classList.add("synBorder");
                            pSyn.appendChild(spSyn);
                            //--
                            psynAnim.innerHTML=objAnime.results[i].synopsis;
                            psynAnim.classList.add("synoAnime");
                            //--
                            srcImg.value = objAnime.results[i].image_url;
                            img.setAttributeNode(srcImg);
                            img.classList.add("imgAnime");
                            divImage.appendChild(img);
                            divImage.classList.add("images");                      
                            //--
                            linkAnime.value=objAnime.results[i].url;
                            linkTag.setAttributeNode(linkAnime);
                            linkTar.value="_blank";
                            linkTag.setAttributeNode(linkTar);
                            linkTag.innerHTML="visit!";
                            //--
                            button.appendChild(linkTag);
                            button.classList.add("btnWatch");
                            //--
                            divInfo.classList.add("info");
                            //--
                            divImage.appendChild(img);
                            divImage.appendChild(button);
                            divInfo.appendChild(pTit);
                            divInfo.appendChild(pTyp);
                            divInfo.appendChild(pEpi);
                            divInfo.appendChild(pSco);
                            divInfo.appendChild(pRat);
                            divInfo.appendChild(pSyn);
                            divInfo.appendChild(psynAnim);
                            divCard.appendChild(divImage);
                            divCard.appendChild(divInfo);
                            divCard.classList.add("card");
                            divCardContainer.appendChild(divCard);
                            divCardContainer.classList.add("cardContainer");
                            container.appendChild(divCardContainer);

                            }// end for
                    }// end else        
            }// end if server/requ status

        };// end onreadystatechange 
        var name = document.querySelector(".title").value.trim().replace(/[ ]/igm,"+").trim(),
            type = document.querySelector(".type").value,
            status = document.querySelector(".status").value,
            limit = document.querySelector(".limit").value,
            order = document.querySelector(".order").value;


        var url  = 'https://api.jikan.moe/v3/search/anime?genre=12+9+26+28+33+34&genre_exclude=0'+
            '&limit='+limit+
            '&order_by='+order+
            '&q='+name+
            '&type='+type+
            '&status='+status;

        req.open(method,url,true);
        req.send();
      }else{
            document.querySelector(".resultText").classList.add("notFound");
            document.querySelector(".resultText").innerHTML="Must be at least 3 characters";
       }
};// end click function 
