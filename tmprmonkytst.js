//modal automatic
    {
        var wpImgs_elementsAll =document.body.querySelectorAll('[loading="lazy"]');//= document.getElementsByClassName("image-element");
        
        //prep IMGS
        var imgs=[];
        var figures=document.body.getElementsByTagName("figure");
        for (var i = 0; i < figures.length; i++) {
            
            var fgimgs = figures[i].getElementsByTagName("img");//imgsInElement[0];
            //alert(img.src);
            for (var j = 0; j < fgimgs.length; j++) {
                var img = fgimgs[j];
                //img.setAttribute("id", "gallImg" + i+"_"+j);
                //alert(img.parentElement.tagName);
                if(img.parentElement.tagName=="A" | img.parentElement.tagName=="a"){continue;}else{imgs.push(img);}
                
                
                //crete mdl here?
            }
            //img.id = "gallImg" + i;
            //img.onclick = "document.getElementById('gallModal'"+i+").style.display='block';"
            
            
        }
        

        //create mdls
        for (var i = 0; i < imgs.length; i++) {
            //const element = imgs[i];
            if (screen.width >= 220) {

                //var imgsInElement = wpImgs_elementsAll[i].getElementsByTagName("img");
                var img =  imgs[i];//imgsInElement[0];
                //img.id = "gallImg" + i;
                //img.onclick = "document.getElementById('gallModal'"+i+").style.display='block';"
                img.setAttribute("id", "gallImg" + i);
                img.classList.add('gallimg');
                var srctxt="";
                srctxt=img.src;
                
                if (img.src != "") 
                {
                    //alert(srctxt);
                    img.setAttribute("onclick", 'document.getElementById("gallModal' + i + '").style.display="block";');
                    img.setAttribute("style", 'cursor:pointer');
                    img.setAttribute("src", srctxt);
                    
                    
                    var mdlDiv = document.createElement("div");
                    //mdlDiv.className = "modal fixed website-width";// prevent-auto-z-index
                    mdlDiv.className = "modal fixed";
                    mdlDiv.id = "gallModal" + i;
                    mdlDiv.style.maxWidth = screen.width - 20;
                    //mdlDiv.style.height = window.height - 130;
                    //mdlDiv.style.width = window.width - 30;
                    document.body.appendChild(mdlDiv);

                    var mdlContent = document.createElement("div");
                    //mdlContent.innerHTML = silexImgs_elementsAll[i].innerHTML;
                    mdlContent.innerHTML=img.outerHTML;
                    //mdlContent.className = "modal-content website-width";
                    mdlContent.className = "modal-content";
                    mdlDiv.appendChild(mdlContent);

                    var imgsInElement1 = mdlContent.getElementsByTagName("img");
                    var mdlCntImg = imgsInElement1[0];
                    mdlCntImg.setAttribute("onclick", 'document.getElementById("gallModal' + i + '").style.display="none";');
                    // mdlCntImg.setAttribute("style", '');
                    mdlCntImg.src = srctxt;
                    var mximgH = (screen.height / 100) * 77.8;
                    mdlCntImg.setAttribute("style", 'max-height:' + mximgH + 'px; cursor:pointer');
                    //var mdlget = document.body.getElementById(mdlDiv.id);
                    //img.setAttribute("onclick", 'alert("gallModal' + i +'");');
                    var clsLbl = document.createElement('label');
                    clsLbl.setAttribute("onclick", 'document.getElementById("gallModal' + i + '").style.display="none";');
                    clsLbl.className = "clsbtt";
                    //prviewLbl.innerHTML = '<i class="fa fa-arrow-left"></i>';
                    clsLbl.innerHTML = 'X';
                    mdlContent.appendChild(clsLbl);






                    




                    if (imgs.length>1) {
                        var prviewLbl = document.createElement('label');
                        prviewLbl.setAttribute("onclick", 'prview("' + mdlDiv.id + '");');
                        prviewLbl.className = "prview";
                        //prviewLbl.innerHTML = '<i class="fa fa-arrow-left"></i>';
                        prviewLbl.innerHTML = '<i class="fa fa-caret-left"></i>';
                        mdlContent.appendChild(prviewLbl);
                        var nxtLbl = document.createElement('label');
                        nxtLbl.setAttribute("onclick", 'nxt("' + mdlDiv.id + '");');
                        nxtLbl.className = "nxt";
                        //nxtLbl.innerHTML = '<i class="fa fa-arrow-right"></i>';
                        nxtLbl.innerHTML = '<i class="fa fa-caret-right"></i>';
                        mdlContent.appendChild(nxtLbl);
                    }
                    
                }


                //Escape keyup EventListener
                document.addEventListener('keyup', function (evt) {
                    if (evt.keyCode === 27) {
                        modalsAll = document.getElementsByClassName("modal");
                        for (let i = 0; i < modalsAll.length; i++) {
                            modalsAll[i].style.display = "none"

                        }

                    }
                });

            }

        }
        function prview(inctxt) {

            //var mineDiv = document.getElementById("hldrModalsDivs");

            var allModaldivs = document.getElementsByClassName('modal');
            var incId = "";
            incId = inctxt;
            //alert(incId);

            for (var i = 0; i < allModaldivs.length; i++) {

                if (allModaldivs[i].id == incId) {
                    var nr = i;
                    nr -= 1;
                    if (nr < 0) {
                        nr = allModaldivs.length - 1;
                    }
                    //alert(allModaldivs[nr].className);
                    allModaldivs[nr].style.display = "block";
                    allModaldivs[i].style.display = "none";
                    return;
                }




            }


        }
        function nxt(inctxt) {

            //var mineDiv = document.getElementById("hldrModalsDivs");

            var allModaldivs = document.getElementsByClassName('modal');
            var incId = "";
            incId = inctxt;
            //alert(incId);

            for (var i = 0; i < allModaldivs.length; i++) {

                if (allModaldivs[i].id == incId) {
                    var nr = 1;
                    nr += i;
                    if (nr > allModaldivs.length - 1) {
                        nr = 0;
                    }
                    //alert(allModaldivs[nr].className);
                    allModaldivs[nr].style.display = "block";
                    allModaldivs[i].style.display = "none";
                    return;
                }




            }


        }
        


        window.addEventListener('scroll', function () {
			
			checkIfInView("gallimg");
		})
		document.body.setAttribute("onload","fncdealeyed(300);");
		function fncdealeyed(timedelay) {
			setTimeout(
				checkIfInView("gallimg")
			, timedelay);
		}
		function checkIfInView(clss0) {
    
    
			//alert(intfxdelm0);
			var pgbottom=window.outerHeight;
			var pgbottominner=window.innerHeight;
			var anim_el = document.getElementsByClassName(clss0);
			//alert("onscrol fnc for elms:"+animation_elements.length)
			for (var i = 0; i < anim_el.length; i++) {
        
				//var fxdbotom=fxdelm.bottom;
				var rect=anim_el[i].getBoundingClientRect();
				//alert(rect.top);
				//alert(anim_el[i].outerHeight);
				var elTop = rect.top;
				var elBottom = rect.bottom;
        
				if (elBottom<=pgbottominner&&elTop>=50) {
					//alert("el in view, elbotom"+elBottom+", PGbotom"+pgbottom)
					if (!anim_el[i].classList.contains('animated')) {
						anim_el[i].className=anim_el[i].className+(" animated");
					}
            
            
				} else {
					//alert("el out of view, elbotom"+elBottom+", PGbotom"+pgbottom)
					var elclss=anim_el[i].className;
					prep=[];
					prep=elclss.split(" animated")
					
					//anim_el[i].className=prep[0];
				}
        
			} 
		}
    }
