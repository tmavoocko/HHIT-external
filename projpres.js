//mobile responsible beehav activation
var meta = document.createElement('meta');
meta.name = 'viewport';            
meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1';
//document.getElementsByTagName('head')[0].appendChild(meta);

//global vars
var entrypoint=document.getElementById("api-hhitEntrypoint").parentElement;
var flpth="";//file url - must be on ssl type

////style stuff
var bckdsgblob="background-color: #101010;";
var bck="background-color: black;";
var clr0="#a8b741";
var clr1="#fffccc";
var clr3="black";
var bckclr1="background-color: #fffccc;";
var mnWdth70="min-width: 69%";
var mnWdth60="min-width: 59%";
var mnWdth50="min-width: 49%";
var mnWdth40="min-width: 39%";
var mnWdth30="min-width: 29%";
var mnWdth20="min-width: 19%";

//Bootsrap,jquery activation
scriptlink_add();
function scriptlink_add() {
    var detectscrptslnks=document.getElementsByClassName("hhit_added");
    if (detectscrptslnks.length==0) {
        //J Query
        {
            var scrpt=document.createElement('script');
            scrpt.className='hhit_added';
            scrpt.src="https://code.jquery.com/jquery-3.4.1.slim.min.js";
            scrpt.setAttribute("integrity","sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n");
            scrpt.setAttribute("crossorigin","anonymous");
            scrpt.setAttribute("asp-append-version","true");
            document.head.appendChild(scrpt);
        }
        //Popper - bootstrap dependency 
        {
            var scrpt=document.createElement('script');            
            scrpt.className='hhit_added';
            scrpt.src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js";
            scrpt.setAttribute("integrity","sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo");
            scrpt.setAttribute("crossorigin","anonymous");
            scrpt.setAttribute("asp-append-version","true");
            entrypoint.appendChild(scrpt);
        }
        //Bootstrap js 
        {
            var scrpt=document.createElement('script');            
            scrpt.className='hhit_added';
            scrpt.src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js";
            scrpt.setAttribute("integrity","sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6");
            scrpt.setAttribute("crossorigin","anonymous");
            scrpt.setAttribute("asp-append-version","true");
            entrypoint.appendChild(scrpt);
        }
        //Bootstrap css 
        {
            var lnk=document.createElement('link');            
            lnk.className='hhit_added';
            lnk.href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css";
            lnk.setAttribute("rel","stylesheet");
            //lnk.setAttribute("crossorigin","anonymous");
            entrypoint.appendChild(lnk);
        }
        
    }
}
//jQuery
var jqrOk = jQuery;


//local aryys of json objects
let projpresObjcts=[];        
//let projectsSmObj=[];





//MAIN code and fnctions

//Div aaddon holder adding
var addndiv=document.createElement('div');
addndiv.id="prjctsaddonhldr";
addndiv.className="dsgblob";
entrypoint.appendChild(addndiv);

//load json data filepath must be placed on ssl-url adress
flpth="https://raw.githubusercontent.com/tmavoocko/HHIT-external/main/projjson0.1.txt";
var myStuff = loadFile(flpth,"jsn");
projpres_prep(myStuff);    
function loadFile(filePath,expectations) {
    


    let result = null;
    var xmlhttp = new XMLHttpRequest();
    
    
    xmlhttp.open("GET", filePath, false);
    //xmlhttp.timeout=500;
    //xmlhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
    //xmlhttp.setRequestHeader('Accept', 'application/json');
    //xmlhttp.setRequestHeader('Content-Type', 'application/json');        
    xmlhttp.send();
    if (xmlhttp.readyState === 4) {
        if (xmlhttp.status === 200) {
            //alert(xmlhttp.status);
            ////callback.apply(xmlhttp, args);
            var newstr="";
            var str=xmlhttp.responseText;
            if (expectations==="jsn") {
                {
                    var strarr=str.split('\n');
                
                    for (var i = 0; i < strarr.length; i++) {
                        newstr =newstr+ strarr[i];
                        
                    }
                }
            }
            
            if (newstr=="") {
                newstr=str;
            }
            //result=await newstr;
            result= newstr;
            //console.log(result);
            return result;
            //projpres_prep(result)
        } else {
            console.error(xmlhttp.statusText);
        }
    }
    
    
}
function projpres_prep(inctxt) {
    projpresObjcts=[];
    var objctsToParse=[];
    objctsToParse=inctxt.split('SplTr');
    if (objctsToParse.length>0) {
        for (var i = 0; i < objctsToParse.length; i++) {
            const obj =JSON.parse(objctsToParse[i]);
            projpresObjcts.push(obj);
        }
    } else {
        alert('inctxt does not contain "SplTr"!')
    }
    
    //alert(projpresObjcts.length);
    if (projpresObjcts.length>0) {
        myStuff="";
        projsm_spwnElmsInRowFlex("prjctsaddonhldr",projpresObjcts.length,"prjctPrsnt");
        projsm_displdata(projpresObjcts);
    }
}


async function firstAsync(filePath) {
    let promise = new Promise((res, rej) => {
        setTimeout(() => res(loadFile(filePath)), 500)
    });

    // wait until the promise returns us a value
    let result = await promise; 

    // "Now it's done!"
    alert(result); 
}
//firstAsync(flpth);


projsm_stlyes();

function projsm_stlyes(){

    
    var style = document.createElement('style');
    style.type = 'text/css';
    style.id="projSMstyles"
    style.innerHTML = '';
    style.innerHTML = style.innerHTML+'.vrtcl-hrzntl-Centered { text-align:center;margin-top: 50%;margin-bottom: 50%; }';
    style.innerHTML = style.innerHTML+'.hrzntl-Centered { text-align:center; }';                
    style.innerHTML = style.innerHTML+'.dsgblob { font-family: "Pangolin";margin:5px;margin-top:5px;margin-bottom:5px; padding: 15px 15px 15px 15px;border-radius: 45px;'+bckdsgblob+'box-shadow: 1px 1px 0px 0px rgba(168,183,65,0.7),2px 2px 5px yellow;}';
    style.innerHTML = style.innerHTML+'.dsgblob .col-sm { border-radius: 45px;}';
    style.innerHTML = style.innerHTML+'.third{'+mnWdth50+'}';
    style.innerHTML = style.innerHTML+'.even{'+mnWdth30+';margin-top: auto;margin-bottom: auto;}';
    style.innerHTML = style.innerHTML+'.odd{'+mnWdth20+';margin-top: auto;margin-bottom: auto;font-size:10px;}';

    style.innerHTML = style.innerHTML+'.imgprojSm0,.imgprojSm2{height: auto;width: 21%;position: relative;display: inline;margin-bottom: 10%;padding: 3%;}';

    style.innerHTML = style.innerHTML+'.imgprojSm0:hover,.imgprojSm2:hover{transition: all ease-in-out 0.5s;padding: 0%!important;width: 29%!important;}';

    style.innerHTML = style.innerHTML+'.imgprojSm0{transform: translate3d(40%, 0px, 0px) skew(-0deg, -10deg);}';
    style.innerHTML = style.innerHTML+'.imgprojSm2{transform: translate3d(-40%, 0px, 0px) skew(-0deg, 10deg);}';

    style.innerHTML = style.innerHTML+'.imgprojSm1{height: auto;width: 37%;position: relative;display: inline;z-index: 1;box-shadow: 0 1px 6px rgba(168, 183, 65,0.9);}';
    style.innerHTML = style.innerHTML+'.imgprojSm1{'+bck+'}';

    style.innerHTML = style.innerHTML+'.projectpresentation{cursor:pointer;padding: 15px;padding-top: 20px;padding-bottom: 20px;justify-content: center;margin-left: auto;}';
    //style.innerHTML = style.innerHTML+'.projectpresentation{display: inline-flex;}';   
    //style.innerHTML = style.innerHTML+'.projectpresentation:hover{padding-top: 60px;padding-bottom: 50px;}';        
    // animations
    style.innerHTML = style.innerHTML+'.projectpresentation:hover .imgprojSm0,.projectpresentation:hover .imgprojSm2{border-top: 1px solid '+clr1+';}';
    style.innerHTML = style.innerHTML+'.projectpresentation:hover .imgprojSm0,.projectpresentation:hover .imgprojSm2{animation: rotate3dLikeY-Ffw 2s linear 1 alternate-reverse;padding: 1%;width:26%;transform: none;filter: brightness(1.1);}';
    style.innerHTML = style.innerHTML+'@keyframes rotate3dLikeY-Ffw {0% {transform: rotateY(0deg) skew(0deg, 0deg);opacity:0.7;}100% {transform: rotateY(270deg) skew(0deg, 0deg);opacity:1;}}';
    style.innerHTML = style.innerHTML+'.projectpresentation:hover .imgprojSm1{animation: bounce-7-orignl 2s linear 1 alternate;}';
    style.innerHTML = style.innerHTML+'@keyframes bounce-7-orignl { 0% {transform: scale(1,1) translateY(0);}10% {transform: scale(1.1,.9) translateY(0);}30% {transform: scale(.9,1.1) translateY(-10px);}50% {transform: scale(1.05,.95) translateY(0);}57% {transform: scale(1,1) translateY(-7px);}64% {transform: scale(1,1) translateY(0);}71% {transform: scale(1.05,0.95) translateY(7px);}78% {transform: scale(1,1) translateY(0);}100% {transform: scale(1,1) translateY(0);} }';

    style.innerHTML = style.innerHTML+'.tpwrtr{text-align:center;color:transparent;padding-top:25px;margin-bottom:0px;}';
    //style.innerHTML = style.innerHTML+'.projectpresentation:hover .tpwrtr{text-transform: uppercase;color:'+clr1+';overflow:hidden;border-right: .15em solid '+clr0+';white-space: nowrap;margin: 0 auto;letter-spacing: .15em;animation: typing 2.0s steps(20, end), blink-caret .5s step-end infinite;}';
    style.innerHTML = style.innerHTML+'.projectpresentation:hover .tpwrtr{animation: typing 2.0s linear;text-transform: uppercase;color:'+clr1+';overflow:hidden;white-space: nowrap;margin: 0 auto;letter-spacing: .15em;}';
    style.innerHTML = style.innerHTML+'@keyframes typing {from { width: 0 }to { width: 100% }}';
    style.innerHTML = style.innerHTML+'@keyframes blink-caret {from, to { border-color: transparent }50% { border-color: '+clr0+'; }}';


    // transition
    style.innerHTML = style.innerHTML+'.projectpresentation:hover .imgprojSm1,.projectpresentation:hover .imgprojSm0,.projectpresentation:hover .imgprojSm2{transition: all ease-in-out 1s;}';





    style.innerHTML = style.innerHTML+'.modal {height: 100%;width: 100%;padding:15px;background-color:'+clr0+'}';
    style.innerHTML = style.innerHTML+'.projicn {float: left;height: 40px;width: auto;}';
    style.innerHTML = style.innerHTML+'.mdltitle {text-align:center;margin-left:-0px;margin-right:-0px}';
    style.innerHTML = style.innerHTML+'.mdltitle *{display: inline;margin-top:auto;margin-bottom:auto;}';
    style.innerHTML = style.innerHTML+'.mdltitle .close{margin-top:5px;}';
    style.innerHTML = style.innerHTML+'.mdltitle hr{display: block;'+bck+'margin-top:1rem;margin-bottom:1rem;}';

    style.innerHTML = style.innerHTML+'#prevNext {position: relative;top:50px;}';
    style.innerHTML = style.innerHTML+'#prev,#next {font-family: Pangolin;cursor: pointer;width: 32px;height: 32px;padding:3px;color: #fffccc;background-color: rgba(0,0,0,99);opacity: 0.8;-webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;}';
    style.innerHTML = style.innerHTML+'#prev span,#next span{color: '+clr0+';}';
    style.innerHTML = style.innerHTML+'#prev {float: left;}';
    //style.innerHTML = style.innerHTML+'#prev span:after {content: '+"''"+';background-color: rgba(168, 183, 65, 0.99);border-radius: 45px;border: 7px solid transparent;opacity: 0;transform: rotateY(-360deg) scale(0.5);transform-origin: right;position:absolute; top: 20px;bottom: 20px;transition: all .5s ease;}';
    style.innerHTML = style.innerHTML+'#prev span:after {content: '+"''"+';background-color: rgba(168, 183, 65, 0.99);border-radius: 45px;border: 7px solid transparent;opacity: 0;transform: translate3d(-37px, 0, 0) scale(0.5);position:absolute; top: 20px;bottom: 20px;transition: all .5s ease;}';
    style.innerHTML = style.innerHTML+'#prev:hover span:after {border-radius: 90px;opacity: 1;transform: translate3d(-30px, 0, 0) scale(1);}';

    //style.innerHTML = style.innerHTML+'#next:after {content: '+"''"+';background-color: rgba(168, 183, 65, 0.99);border-radius: 45px;border: 7px solid transparent;opacity: 0;transform: rotateY(360deg) scale(0.5);transform-origin: right;position: absolute;top: 20px;bottom: 20px;transition: all .5s ease;}';
    style.innerHTML = style.innerHTML+'#next:after {content: '+"''"+';background-color: rgba(168, 183, 65, 0.99);border-radius: 45px;border: 7px solid transparent;opacity: 0;transform: translate3d(7px, 0, 0) scale(0.5);transform-origin: right;position: absolute;top: 20px;bottom: 20px;transition: all .5s ease;}';
    style.innerHTML = style.innerHTML+'#next:hover:after {border-radius: 90px;opacity: 1;transform: translate3d(-0px, 0, 0) scale(1);}';

    style.innerHTML = style.innerHTML+'#next {float: right;}';

    style.innerHTML = style.innerHTML+'.scrlme {padding:15px;overflow: scroll;max-height: 80%;;max-width: 90%;margin-left:auto;margin-right:auto;}';

    //.scrlMe::scrollbar
    //width
    style.innerHTML = style.innerHTML+'.scrlme::-webkit-scrollbar {width: 10px;}';
    //hrzbar
    style.innerHTML = style.innerHTML+'.scrlme::-webkit-scrollbar:horizontal {display: none;}';
    //Track
    style.innerHTML = style.innerHTML+'.scrlme::-webkit-scrollbar-track {box-shadow: inset 0 0 5px grey;border-radius: 5px;}';
    //Corner
    style.innerHTML = style.innerHTML+'.scrlme::-webkit-scrollbar-corner {background: transparent;}';
    //Handle
    style.innerHTML = style.innerHTML+'.scrlme::-webkit-scrollbar-thumb {background: #fffccc;border-radius: 5px;transition: all .4s ease-in-out;}';
    //Handle:hover
    style.innerHTML = style.innerHTML+'.scrlme::-webkit-scrollbar-thumb:hover {background: rgba(0,0,0,99);transition: all .4s ease-in-out;}';

    style.innerHTML = style.innerHTML+'.collft,.colrght {padding:5px;max-width: 20%;}';
    style.innerHTML = style.innerHTML+'.colcntr {padding:5px;max-width: 60%;}';
    style.innerHTML = style.innerHTML+'.mdlimglft,.mdlimgrght,.viewwebimg {width: 100%;height:auto}';
    style.innerHTML = style.innerHTML+'.mdlimglft {margin-bottom: 15px;}';
    style.innerHTML = style.innerHTML+'.viewwebimg {width: 50%;height:auto}';
    style.innerHTML = style.innerHTML+'@media only screen and (max-width:575px) { .collft,.colrght,.colcntr { max-width: 100%;} }';
    style.innerHTML = style.innerHTML+'@media only screen and (min-width:575px) { .collft,.colrght, { max-width: 20%;} }';
    style.innerHTML = style.innerHTML+'@media only screen and (min-width:575px) { .colcntr { max-width: 60%;} }';
    document.getElementById('prjctsaddonhldr').appendChild(style);
    //document.getElementsByTagName('body')[0].appendChild(style);
    //document.getElementById('prjctsaddonhldr')[0].appendChild(style);
}
     

function projsm_displdata(data) {
    
    for (var i = 0; i < data.length; i++) {
        //alert(yearsAll[i].toString());

        var col=document.getElementById('prjctPrsnt'+i);
        // var innerP=col.getElementsByTagName('p')[0];
        // col.classList.add("oneyear");
        var tst=[];
        var check=JSON.stringify(data[i]);
        //alert(JSON.stringify(data))
        tst=check.split("},{");
        
        if(tst.length>1){
            for (var j = 0; j < tst.length; j++) {
                
                
                var toelmid='col-inside-row'+i;
                if(j==0){
                    
                    tst[0]=tst[0]+"}";
                    var projObj = JSON.parse(tst[0].toString());
                    //subfnc_addYearBadge(toelmid,projObj.yearnumber);
                    //subfnc_displProj(toelmid,projObj);
                    //col.classList.add(projObj.yearnumber);
                    
                }
                else{
                    if(j==(tst.length-1)){
                        tst[tst.length-1]="{"+tst[tst.length-1];
                        var projObj = JSON.parse(tst[tst.length-1].toString());
                        //subfnc_displProj(toelmid,projObj);
                    }
                    else{
                        tst[j]="{"+tst[j]+"}";
                        //alert(tst[j].toString());
                        var projObj = JSON.parse(tst[j].toString());
                        //subfnc_displProj(toelmid,projObj);
                    }
                }
            }
            
            
            
            

            
        }
        else{
            try {
                var toelmid='prjctPrsnt'+'_inside'+i;                            
                var projObj = data[i];
                //subfnc_addYearBadge(toelmid,projObj.yearnumber);
                subfnc_displPresentation(toelmid,projObj,i);
                //col.classList.add(projObj.yearnumber);
                
            } catch (e) {
                

                alert(e.toString());
            }
            
        }
        
        
    }


    // var dsplTmlPanelData=document.createElement("div");
    // dsplTmlPanelData.id="dsplTmlPanelData";
    // (document.getElementById('prjctsaddonhldr')).appendChild(dsplTmlPanelData);
   
    
}


function subfnc_displPresentation(toelmid,projObj,incI) {
    var col=document.getElementById(toelmid);
    //col.setAttribute("onclick","document.getElementById('"+projObj.onclc+"').style.display='block';document.getElementsByClassName('l-h')[0].style.display='none'");
        
    //var innerElm=col.getElementsByClassName('year')[0];
    let divOnClick=projsm_spwnElm(toelmid,"div","projectpresentation");

    //divOnClick.className="projectpresentation";
    divOnClick.id="onclc"+incI;
    //divOnClick.setAttribute("onlick",'document.getElementById("'+projObj.onclc+'").style.display="block";document.getElementsByClassName("l-h")[0].style.display="none";')
    divOnClick.setAttribute("onclick","document.getElementById('"+projObj.onclc+"').style.display='block';document.getElementsByClassName('l-h')[0].style.display='none'");
    innerElm= divOnClick; 
    if (projObj.img_src0!="") {
        let img00=projsm_spwnElm(divOnClick.id,"img","projSm");
        img00.setAttribute("src",projObj.img_src0);
        img00.className="imgprojSm0" ;
    }
    if (projObj.img_src1!="") {
        let img01=projsm_spwnElm(divOnClick.id,"img","projSm");
        img01.setAttribute("src",projObj.img_src1);
        img01.className="imgprojSm1" ;
    }
    if (projObj.img_src2!="") {
        let img02=projsm_spwnElm(divOnClick.id,"img","projSm");
        img02.setAttribute("src",projObj.img_src2);
        img02.className="imgprojSm2" ; 
    }
                
    if (projObj.ttl!="") {
        let txtTypewrterCss=projsm_spwnElm(divOnClick.id,"p","tpwrtr");
        txtTypewrterCss.innerText=projObj.ttl;
    }
    
}

function projsm_spwnElm(parentId,elmtag,elmclss,innerhtml,id) {
    
    if (elmtag==null|elmtag==""|elmtag==undefined) {
        alert("projsm_spwnElm(elmtag - is empty!!");
        return;
    }
    let elm=document.createElement(elmtag);
    //alert(elm.outerHTML);
    
    if (elmclss!=null|elmclss!="") {
        elm.className=elmclss;
    }
    //alert(innerhtml);
    if (id!=null|id!=""|id!="undefined"|id!=undefined) {

        var tst=id;
        //alert(tst);
        elm.id=id;
        if (tst==null|tst==""|tst=="undefined"|tst==undefined) {

            
            elm.id="";
        }
        //elm.innerHTML=innerhtml;
    }
    if (innerhtml!=null|innerhtml!=""|innerhtml!="undefined"|innerhtml!=undefined) {

        var tst=innerhtml;
        //alert(tst);
        elm.innerHTML=innerhtml;
        if (tst==null|tst==""|tst=="undefined"|tst==undefined) {

            
            elm.innerHTML="";
        }
        //elm.innerHTML=innerhtml;
    }
    if (parentId==null|parentId==""|parentId==undefined) {
        alert("projsm_spwnElm(parentId - is empty!!");
        return;
    }
    document.getElementById(parentId).appendChild(elm);
    
    return elm;
}


function projsm_spwnElmsInRowFlex(toelmid,elmsCount,clmnId) {
    
    var parent=document.getElementById(toelmid);
    var hldr=document.createElement("div");
    hldr.className="container-fluid";
    parent.appendChild(hldr);
    var rowhldr=document.createElement("div");
    rowhldr.className="row";
    //rowhldr.className=" dsgblob";
    hldr.appendChild(rowhldr);
    var clmnid=""
    var clmnCount=2;
    if (elmsCount!=undefined) {
        //alert(elmsCount);
        clmnCount=Number(elmsCount);
    }
    else{
        alert("incomming array not yet filled");
        return;

    }
    if (clmnId!=undefined|"") {
        //alert(elmsCount);
        clmnId=clmnId;
    }
    else{
        alert("incomming column id not yet filled");
        return;

    }
    // var wndWdth=window.innerWidth;
    // var colWdth=wndWdth/clmnCount;
    for (let i = 0; i < clmnCount; i++) {
        var col=document.createElement("div");

        col.className="col-sm";
        if ((i % 3) == 0) {
            //3 ze tri "==0" znamena prvni z trojice
            col.className="col-sm "+clmnId+" third";
            
        }
        else
        {
            //1  ze dvou
            if ((i % 2) == 0) {
                // znamena prvni z dvojice
                col.className="col-sm "+clmnId+" odd";
                
            }
            else
            {
                // znamena druha z dvojice
                col.className="col-sm "+clmnId+" even";
            }
            //col.className="col-sm "+clmnId+" othrs";
        }
        col.id=clmnId+i;
        // col.innerText=i;
        //// col.style.width=colWdth+"px";
        //// col.style.minWidth=colWdth+"px";
        ////// col.style.color="#"+i*i+""+i*i+""+i*i+""+i*i+""+i*i+""+i*i+"";

        // var clrGrwth=0;
        // clrGrwth=i*30*i+i*4;
        // if(clrGrwth>255){clrGrwth=255;}
        // col.style.color="rgb("+clrGrwth+","+clrGrwth+","+clrGrwth+")";
        // if(clrGrwth>127){col.style.backgroundColor="#000000";}
        rowhldr.appendChild(col);
        //var pI=document.createElement("p");
        let hrz_centered= projsm_spwnElm(clmnId+i,"div","hrzntl-Centered");
        hrz_centered.id=clmnId+"_inside"+i;
        //col.appendChild(pI);
        //pI.className="vrtcl-hrzntl-Centered";
        //pI.innerText=i;
    }
    
}
projmdl_stlyes();
function projmdl_stlyes(){
    var style = document.createElement('style');
    style.type = 'text/css';
    style.id="projMDLstyles"
    style.innerHTML = '';
    // projMDL
    style.innerHTML = style.innerHTML+'.third{'+mnWdth50+'}';
    style.innerHTML = style.innerHTML+'.even{'+mnWdth30+';margin-top: auto;margin-bottom: auto;}';
    style.innerHTML = style.innerHTML+'.odd{'+mnWdth20+';margin-top: auto;margin-bottom: auto;font-size:10px;}';
    // projMDL
    style.innerHTML = style.innerHTML+'.modal {height: 100%;width: 100%;padding:15px;background-color:'+clr0+'}';
    style.innerHTML = style.innerHTML+'.projicn {float: left;height: 40px!important;width: auto;}';
    style.innerHTML = style.innerHTML+'.mdltitle {text-align:center;margin-left:-0px;margin-right:-0px}';
    style.innerHTML = style.innerHTML+'.mdltitle *{display: inline;margin-top:auto;margin-bottom:auto;}';
    style.innerHTML = style.innerHTML+'.mdltitle .close{margin-top:5px;}';
    style.innerHTML = style.innerHTML+'.mdltitle hr{display: block;'+bck+'margin-top:1rem;margin-bottom:1rem;}';

    style.innerHTML = style.innerHTML+'.prevNext {position: relative;top:50px;}';
    style.innerHTML = style.innerHTML+'.prev,.next {font-family: Pangolin;cursor: pointer;width: 32px;height: 32px;padding:3px;color: #fffccc;background-color: rgba(0,0,0,99);opacity: 0.8;-webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;}';
    style.innerHTML = style.innerHTML+'.prev span,.next span{color: '+clr0+';}';
    style.innerHTML = style.innerHTML+'.prev {float: left;}';
    //style.innerHTML = style.innerHTML+'#prev span:after {content: '+"''"+';background-color: rgba(168, 183, 65, 0.99);border-radius: 45px;border: 7px solid transparent;opacity: 0;transform: rotateY(-360deg) scale(0.5);transform-origin: right;position:absolute; top: 20px;bottom: 20px;transition: all .5s ease;}';
    style.innerHTML = style.innerHTML+'.prev span:after {content: '+"''"+';background-color: rgba(168, 183, 65, 0.99);border-radius: 45px;border: 7px solid transparent;opacity: 0;transform: translate3d(-37px, 0, 0) scale(0.5);position:absolute; top: 20px;bottom: 20px;transition: all .5s ease;}';
    style.innerHTML = style.innerHTML+'.prev:hover span:after {border-radius: 90px;opacity: 1;transform: translate3d(-30px, 0, 0) scale(1);}';
    
    //style.innerHTML = style.innerHTML+'#next:after {content: '+"''"+';background-color: rgba(168, 183, 65, 0.99);border-radius: 45px;border: 7px solid transparent;opacity: 0;transform: rotateY(360deg) scale(0.5);transform-origin: right;position: absolute;top: 20px;bottom: 20px;transition: all .5s ease;}';
    style.innerHTML = style.innerHTML+'.next:after {content: '+"''"+';background-color: rgba(168, 183, 65, 0.99);border-radius: 45px;border: 7px solid transparent;opacity: 0;transform: translate3d(7px, 0, 0) scale(0.5);transform-origin: right;position: absolute;top: 20px;bottom: 20px;transition: all .5s ease;}';
    style.innerHTML = style.innerHTML+'.next:hover:after {border-radius: 90px;opacity: 1;transform: translate3d(-0px, 0, 0) scale(1);}';
    
    style.innerHTML = style.innerHTML+'.next {float: right;}';

    style.innerHTML = style.innerHTML+'.scrlme {padding:15px;overflow: scroll;max-height: 80%;;max-width: 90%;margin-left:auto;margin-right:auto;}';
    
    //.scrlme::scrollbar
    //width
    style.innerHTML = style.innerHTML+'.scrlme::-webkit-scrollbar {width: 10px;}';
    //hrzbar
    style.innerHTML = style.innerHTML+'.scrlme::-webkit-scrollbar:horizontal {display: none;}';
    //Track
    style.innerHTML = style.innerHTML+'.scrlme::-webkit-scrollbar-track {box-shadow: inset 0 0 5px grey;border-radius: 5px;}';
    //Corner
    style.innerHTML = style.innerHTML+'.scrlme::-webkit-scrollbar-corner {background: transparent;}';
    //Handle
    style.innerHTML = style.innerHTML+'.scrlme::-webkit-scrollbar-thumb {background: #fffccc;border-radius: 5px;transition: all .4s ease-in-out;}';
    //Handle:hover
    style.innerHTML = style.innerHTML+'.scrlme::-webkit-scrollbar-thumb:hover {background: rgba(0,0,0,99);transition: all .4s ease-in-out;}';
    
    //scrlme:columns all
    style.innerHTML = style.innerHTML+'.collft,.colrght {padding:5px;max-width: 20%;}';
    style.innerHTML = style.innerHTML+'.colcntr {padding:5px;max-width: 60%;}';        
    style.innerHTML = style.innerHTML+'@media only screen and (max-width:575px) { .collft,.colrght,.colcntr { max-width: 100%;} }';
    style.innerHTML = style.innerHTML+'@media only screen and (min-width:575px) { .collft,.colrght, { max-width: 20%;} }';
    style.innerHTML = style.innerHTML+'@media only screen and (min-width:575px) { .colcntr { max-width: 60%;} }';
    //left clmn
    style.innerHTML = style.innerHTML+'.mdlimglft,.mdlimgrght,.viewwebimg {width: 100%;height:auto}';
    style.innerHTML = style.innerHTML+'.mdlimglft {margin-bottom: 15px;}';
    style.innerHTML = style.innerHTML+'#mdlimglft1 {width:50%;}';
    style.innerHTML = style.innerHTML+'@media only screen and (max-width:575px) { #mdlimglft1,#mdlimglft2 { display: none;} }';
    //cntr clmn
    style.innerHTML = style.innerHTML+'.mdlclmn1 {color: '+clr1+';box-shadow: 0 0 8px 8px '+clr3+';'+bck+'}';
    
    //right clmn
    style.innerHTML = style.innerHTML+'.worktype {display:block;}';
    style.innerHTML = style.innerHTML+'.viewwebimg {'+bckclr1+';border-radius: 100%;padding:1px;width: 60%;height:auto}';
    // blured inset
    //    box-shadow: 0px 0px 8px 8px inset #a8b741;
    style.innerHTML = style.innerHTML+'.composition {justify-content: center;}';
    style.innerHTML = style.innerHTML+'.composition *{display:inline;position: relative;}';
    style.innerHTML = style.innerHTML+'.imgcomposition {filter: drop-shadow(10px 10px 4px black);}';
    style.innerHTML = style.innerHTML+'#imgcompos0{height: auto;width: 60%;float:right;right:10px;display: inline;}';
    style.innerHTML = style.innerHTML+'#imgcompos1{height: auto;width: 30%;float:left;left:0px;display: inline;padding-top: 5%;}';
    style.innerHTML = style.innerHTML+'#imgcompos2{height: auto;width: 50%;float:right;right:-5%;top:-0px;display: inline;padding: 3%;}';
    style.innerHTML = style.innerHTML+'#imgcompos3{height: auto;width: 19%;float:left;left:0%;top:-0px;display: inline;padding: 3%;}';
    

    document.getElementById('prjctsaddonhldr').appendChild(style);
}
jqrOk(document).ready(spwnMdlrows(projpresObjcts),projmdl_displdata(projpresObjcts));

function spwnMdlrows(projpresdata) {
    
    if (projpresdata.length>0) {
        for (var i = 0; i < projpresdata.length; i++) {
            if (projpresdata[i].clmncount==0) {
                //alert(data[i].clmncount);
                return;
            }
            
            projmdl_spwnElmsInRowFlex("prjctsaddonhldr",projpresdata[i].clmncount,"modal-content"+i+"-");
            
        } 

    }
    
}

function projmdl_spwnElmsInRowFlex(toelmid,elmsCount,clmnId) {
    
    var parent=document.getElementById(toelmid);
    var hldr=document.createElement("div");
    hldr.className=" modal";
    parent.appendChild(hldr);
    var rowttl=document.createElement("div");
    rowttl.className="mdltitle";
    hldr.appendChild(rowttl);
    var rowhldr=document.createElement("div");
    rowhldr.className="row scrlme";
    //rowhldr.className=" dsgblob";
    hldr.appendChild(rowhldr);
    var clmnid=""
    var clmnCount=2;
    if (elmsCount!=undefined) {
        
        clmnCount=Number(elmsCount);
    }
    else{
        alert("incomming array not yet filled");
        return;

    }
    if (clmnId!=undefined|"") {
        
        clmnId=clmnId;
    }
    else{
        alert("incomming column id not yet filled");
        return;

    }
    
    for (let i = 0; i < clmnCount; i++) {
        var col=document.createElement("div");
        col.className="col-sm";
        if (i==0) {
            col.className="col-sm collft";
        }
        if (i==1) {
            col.className="col-sm colcntr";                
        }
        if (i==2) {
            col.className="col-sm colrght";
        }
        
        col.id=clmnId+i;
        
        rowhldr.appendChild(col);
        
        let hrz_centered= projsm_spwnElm(clmnId+i,"div","hrzntl-Centered");
        hrz_centered.id=clmnId+"_inside"+i;
        
    }
    
}
function projmdl_displdata(projectsMdlObj) {
    //alert(mdls.length);
    for (var i = 0; i < projectsMdlObj.length; i++) {
        subfnc_displMdl(projectsMdlObj[i],i);
        
    }
}
function subfnc_displMdl(projObj,incI) {
    //alert(toelmid+projObj+incI+incJ);
    //alert(projObj.clmncount)
    if (projObj.clmncount==0) {
        return;
    }
    var mdldiv=document.getElementsByClassName("modal")[incI];
    mdldiv.id=projObj.prewnext;
    
    var scrlme=mdldiv.getElementsByClassName("scrlme")[0];
    for (var j = 0; j < projObj.clmncount; j++) {
        var tlmd='modal-content'+incI+'-'+'_inside'+j
        var inside=document.getElementById(tlmd);
        let clmnmdl=projsm_spwnElm(tlmd,"div","mdlclmn"+j);
        clmnmdl.id=projObj.ttl+j;
        if (j==0) {
            var mdltitle=mdldiv.getElementsByClassName("mdltitle")[0];
            mdltitle.id="mdltitle"+incI;

            //icn
            if (projObj.img_logo0!="") {
                let projicn=projsm_spwnElm(mdltitle.id,"img","projicn");
                projicn.setAttribute("src",projObj.img_logo0);
            }


            //ttl
            if (projObj.ttl!="") {
                //alert(projObj.ttl)
                let projttl=projsm_spwnElm(mdltitle.id,"H2","projname");
                projttl.innerText=projObj.ttl;
            }
            //close
            let projcls=projsm_spwnElm(mdltitle.id,"span","close","x");
            projcls.setAttribute("onclick","document.getElementById('"+projObj.prewnext+"').style.display='none';document.getElementsByClassName('l-h')[0].style.display='block'");
            let hr=projsm_spwnElm(mdltitle.id,"hr","");
            let prewnext=projsm_spwnElm(mdltitle.id,"div","prevNext");
            prewnext.id="prevNext"+incI;
            let lblprev=projsm_spwnElm(prewnext.id,"label","prev");
            lblprev.id="prev"+incI;
            lblprev.setAttribute("onclick","prview('"+projObj.prewnext+"');");
            let spanpr=projsm_spwnElm(lblprev.id,"span","","<");
            
            let lblnext=projsm_spwnElm(prewnext.id,"label","next");
            lblnext.id="next"+incI;
            lblnext.setAttribute("onclick","nxt('"+projObj.prewnext+"');");
            let spannx=projsm_spwnElm(lblnext.id,"span","",">");
            
            
            //scrlme

            //first clmnmdl0
            //var elmid=projObj.ttl+incJ;
            if (projObj.mdlimg_src0!="") {
                let mdlimg=projsm_spwnElm(clmnmdl.id,"img","mdlimglft","","mdlimglft0");
                mdlimg.setAttribute("src",projObj.mdlimg_src0);
                
            }
            if (projObj.mdlimg_src1!="") {
                let mdlimg=projsm_spwnElm(clmnmdl.id,"img","mdlimglft","","mdlimglft1");
                mdlimg.setAttribute("src",projObj.mdlimg_src1);
                
            }
            if (projObj.mdlimg_src2!="") {
                let mdlimg=projsm_spwnElm(clmnmdl.id,"img","mdlimglft","","mdlimglft2");
                mdlimg.setAttribute("src",projObj.mdlimg_src2);
                
            }
            if (clmnmdl.innerHTML=='') {
                
                var lftclmn=document.getElementById('modal-content'+incI+'-0');
                
                lftclmn.parentElement.removeChild(lftclmn);
                

                var middclmn=document.getElementById('modal-content'+incI+'-1');
                
                middclmn.style.minWidth="70%";
                middclmn.style.width="100%";

                var rghtclmn=document.getElementById('modal-content'+incI+'-2');
                rghtclmn.className="col-sm";
                rghtclmn.style.marginLeft="5%";
            }
        }
        if (j==1) {
            

            //scrlme

            //second clmnmdl1
            //var elmid=projObj.ttl+incJ;
            if (projObj.mdltxt0!="") {
                let mdltxt=projsm_spwnElm(clmnmdl.id,"H6","projdescr",projObj.mdltxt0,"txt0");
            }
            if (projObj.mdltxt1!="") {
                let mdltxt=projsm_spwnElm(clmnmdl.id,"p","projdescr",projObj.mdltxt1,"txt1");
            }
            if (projObj.mdltxt2!="") {
                let mdltxt=projsm_spwnElm(clmnmdl.id,"p","projdescr",projObj.mdltxt2,"txt2");
            }
            if (projObj.mdltxt3!="") {
                let mdltxt=projsm_spwnElm(clmnmdl.id,"p","projdescr",projObj.mdltxt3,"txt3");
            }
            if (projObj.mdltxt4!="") {
                let mdltxt=projsm_spwnElm(clmnmdl.id,"p","projdescr",projObj.mdltxt4,"txt4");
            }
            
            
        }
        if (j==2) {
            //scrlme
            //third clmnmdl2
            //var elmid=projObj.ttl+incJ;
            if (projObj.worksdone.length>0) {
                let p=projsm_spwnElm(clmnmdl.id,"p","","Provedené práce");
                // fa fa-fw fa-check-circle-o
                
                let mdltxt=projsm_spwnElm(clmnmdl.id,"div","worksdone","",projObj.ttl+"-worksdone");
                
                let hr=projsm_spwnElm(clmnmdl.id,"hr","");
                hr.style.backgroundColor="#fffccc"
            }
            if (projObj.viewwebimg_src!=""&projObj.viewweba_href!="") {
                let p=projsm_spwnElm(clmnmdl.id,"p","","Navštívit web");
                let a=projsm_spwnElm(clmnmdl.id,"a","viewweba","",projObj.ttl+"-viewweba");
                a.setAttribute("href",projObj.viewweba_href);
                a.setAttribute("target","blank");
                let logo=projsm_spwnElm(a.id,"img","viewwebimg","",projObj.ttl+"-viewwebimg");
                logo.setAttribute("src",projObj.viewwebimg_src);
                

                let hr=projsm_spwnElm(clmnmdl.id,"hr","");
                hr.style.backgroundColor="#fffccc"
            }
            if (projObj.viewwebimg_src!=""&projObj.viewweba_href=="") {
                let p=projsm_spwnElm(clmnmdl.id,"p","","Logo projektu");
                let div=projsm_spwnElm(clmnmdl.id,"a","viewlogodiv","",projObj.ttl+"-viewlogodiv");
                
                let logo=projsm_spwnElm(div.id,"img","viewwebimg","",projObj.ttl+"-viewwebimg");
                logo.setAttribute("src",projObj.viewwebimg_src);
                

                let hr=projsm_spwnElm(clmnmdl.id,"hr","");
                hr.style.backgroundColor="#fffccc"
            }
            // if (projObj.mdlimg_src3!="") {
            //     let mdlimg=projsm_spwnElm(clmnmdl.id,"img","mdlimgrght","","mdlimgrght3");
            //     mdlimg.setAttribute("src",projObj.mdlimg_src3);
                
            // }
            if (projObj.mdlimg_src0!=""&projObj.mdlimg_src1!=""&projObj.mdlimg_src2!=""&projObj.mdlimg_src3!="") {
                let mdldiv=projsm_spwnElm(clmnmdl.id,"div","mdldivrght composition","","mdldivrght"+incI);
                {
                    let mdlimg=projsm_spwnElm(mdldiv.id,"img","imgcomposition","","imgcompos0");
                    mdlimg.setAttribute("src",projObj.mdlimg_src0);
                }
                {
                    let mdlimg=projsm_spwnElm(mdldiv.id,"img","imgcomposition","","imgcompos1");
                    mdlimg.setAttribute("src",projObj.mdlimg_src1);
                }
                {
                    let mdlimg=projsm_spwnElm(mdldiv.id,"img","imgcomposition","","imgcompos2");
                    mdlimg.setAttribute("src",projObj.mdlimg_src2);
                }
                {
                    let mdlimg=projsm_spwnElm(mdldiv.id,"img","imgcomposition","","imgcompos3");
                    mdlimg.setAttribute("src",projObj.mdlimg_src3);
                }
            }
        }
        
    }
    var wrksdone=document.getElementById(projObj.ttl+"-worksdone");
    for (var index = 0; index < projObj.worksdone.length; index++) {
        //const element = array[index];
        var htmlprep="<i class='fa fa-fw fa-check-circle-o'></i>"+projObj.worksdone[index];
        let span=projsm_spwnElm(wrksdone.id,"span","worktype",htmlprep);
    }
    
    
}

function prview(inctxt) {

    var mineDiv = document.getElementById("prjctsaddonhldr");

    var allModaldivs = mineDiv.getElementsByClassName('modal');
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

    var mineDiv = document.getElementById("prjctsaddonhldr");

    var allModaldivs = mineDiv.getElementsByClassName('modal');
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
