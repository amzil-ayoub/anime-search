var method="GET",req=new XMLHttpRequest,container=document.querySelector(".container");document.getElementById("btn").onclick=function(){var e,t,n,r,d;2<document.querySelector(".title").value.trim().length?(req.onreadystatechange=function(){if(4==this.readyState&&200==this.status){var t=JSON.parse(this.responseText);if(0==t.results.length)document.querySelector(".resultText").classList.add("notFound"),document.querySelector(".resultText").innerHTML="Your request : "+document.querySelector(".title").value.trim()+", is not found! Try again.";else{document.querySelector(".resultText").classList.remove("notFound"),document.querySelector(".resultText").innerHTML="",container.innerHTML="";for(let e=0;e<t.results.length;e++){var n=document.createElement("img"),r=document.createElement("div"),d=document.createElement("div"),a=document.createElement("div"),l=document.createElement("div"),c=document.createElement("p"),s=document.createElement("span"),i=document.createElement("span"),u=document.createElement("p"),o=document.createElement("span"),m=document.createElement("span"),p=document.createElement("p"),h=document.createElement("span"),L=document.createElement("span"),E=document.createElement("p"),T=document.createElement("span"),y=document.createElement("span"),C=document.createElement("p"),q=document.createElement("span"),v=document.createElement("span"),M=document.createElement("p"),H=document.createElement("span"),S=document.createElement("p"),g=document.createElement("button"),b=document.createElement("a"),f=document.createAttribute("href"),x=document.createAttribute("target"),A=document.createAttribute("src");s.innerHTML="Title :",c.appendChild(s),i.innerHTML=t.results[e].title,c.appendChild(i),h.innerHTML="Episodes :",p.appendChild(h),L.innerHTML=t.results[e].episodes,p.appendChild(L),o.innerHTML="Type :",u.appendChild(o),m.innerHTML=t.results[e].type,u.appendChild(m),T.innerHTML="Score :",E.appendChild(T),y.innerHTML=t.results[e].score,E.appendChild(y),q.innerHTML="Rated :",c.appendChild(q),v.innerHTML=t.results[e].rated,c.appendChild(v),H.innerHTML="Synopsis :",H.classList.add("synBorder"),M.appendChild(H),S.innerHTML=t.results[e].synopsis,S.classList.add("synoAnime"),A.value=t.results[e].image_url,n.setAttributeNode(A),n.classList.add("imgAnime"),r.appendChild(n),r.classList.add("images"),f.value=t.results[e].url,b.setAttributeNode(f),x.value="_blank",b.setAttributeNode(x),b.innerHTML="visit!",g.appendChild(b),g.classList.add("btnWatch"),l.classList.add("info"),r.appendChild(n),r.appendChild(g),l.appendChild(c),l.appendChild(u),l.appendChild(p),l.appendChild(E),l.appendChild(C),l.appendChild(M),l.appendChild(S),d.appendChild(r),d.appendChild(l),d.classList.add("card"),a.appendChild(d),a.classList.add("cardContainer"),container.appendChild(a)}}}},e=document.querySelector(".title").value.trim().replace(/[ ]/gim,"+").trim(),t=document.querySelector(".type").value,n=document.querySelector(".status").value,r=document.querySelector(".limit").value,d=document.querySelector(".order").value,req.open(method,"https://api.jikan.moe/v3/search/anime?genre=12+9+26+28+33+34&genre_exclude=0&limit="+r+"&order_by="+d+"&q="+e+"&type="+t+"&status="+n,!0),req.send()):(document.querySelector(".resultText").classList.add("notFound"),document.querySelector(".resultText").innerHTML="Must be at least 3 characters")};
//# sourceMappingURL=../maps/main.js.map