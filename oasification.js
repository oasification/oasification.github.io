//
/* FilePathName: oasification_htm/oasification.js */
/* Uploaded: 13:02:03,  Thu 10 Feb 2022 */
/* LineNo: 99 */
'use strict'

function tc(e){alert(e.stack);return;}
function gS(i){return document.getElementById(i).style;}
function cE(t){return document.createElement(t);}
function gE(i){return document.getElementById(i);}
function qS(t){return document.querySelector(t);}
function sA(p, a, v){p.setAttribute(a, v);}
function aC(p,c){p.appendChild(c);}
function clA(p,c){p.classList.add(c);}
function sT(p,t){p.style.cssText=t;}
function cN(p,n){p.className=n;}
function iH(p,t){p.innerHTML=t;} 
var svgNS='http://www.w3.org/2000/svg';
function cENS(t){return document.createElementNS(svgNS, t);}
function sAENS(o,t,a,v){o.setAttributeNS(t,a,v);}
function cTN(t){return document.createTextNode(t);}

 function roundRect(c, x, y, w, h, oS, t, sC, r) {
        /*
         * Draws a rounded rectangle using the current state of the canvas.
       */
        x-=oS; y-=oS; w+=(oS*2); h+=(oS*2);
        c.stroke();
        c.lineWidth=t;
        c.fill();
        c.strokeStyle=sC;
        c.beginPath();
        // Configure the roundedness of the rectangles corners
        if ((w >= r * 2) && (h >= r * 2)) {
            // Handles width and height larger than diameter
            // Keep radius fixed
            c.moveTo(x + r, y);  // tr start
            c.lineTo(x + w - r, y);  // tr
            c.quadraticCurveTo(x + w, y, x + w, y + r);  //tr
            c.lineTo(x + w, y + h - r);  // br
            c.quadraticCurveTo(x + w, y + h, x + w - r, y + h);  // br
            c.lineTo(x + r, y + h);  // bl
            c.quadraticCurveTo(x, y + h, x, y + h - r);  // bl
            c.lineTo(x, y + r);  // tl
            c.quadraticCurveTo(x, y, x + r, y);  // tl
        } else if ((w < r * 2) && (h > r * 2)) {
            // Handles width lower than diameter
            // Radius must dynamically change as half of width
            r = w / 2;
            c.moveTo(x + w, y + h - r);  // br start
            c.quadraticCurveTo(x + w, y + h, x + w - r, y + h);  // br curve
            c.quadraticCurveTo(x, y + h, x, y + h - r)  // bl curve
            c.lineTo(x, y + r);  // line
            c.quadraticCurveTo(x, y, x + r, y);  // tl
            c.quadraticCurveTo(x + w, y, x + w, y + r);  // tl
            c.lineTo(x + w, y + h - r);  // line
        } else if ((w > r * 2) && (h < r * 2)) {
            // Handles height lower than diameter
            // Radius must dynamically change as half of height
            r = h / 2;
            c.moveTo(x + w - r, y + h);  // br start
            c.quadraticCurveTo(x + w, y + h, x + w, y + r);  // br curve
            c.quadraticCurveTo(x + w, y, x + w - r, y);  // tr curve
            c.lineTo(x + r, y);  // line between tr tl
            c.quadraticCurveTo(x, y, x, y + r);  // tl curve
            c.quadraticCurveTo(x, y + h, x + r, y + h);  // bl curve
        } else if ((w < 2 * r) && (h < 2 * r)) {
            // Handles width and height lower than diameter
            c.moveTo(x + w / 2, y + h);
            c.quadraticCurveTo(x + w, y + h, x + w, y + h / 2);  // bl curve
            c.quadraticCurveTo(x + w, y, x + w / 2, y);  // tr curve
            c.quadraticCurveTo(x, y, x, y + h / 2);  // tl curve
            c.quadraticCurveTo(x, y + h, x + w / 2, y + h);  // bl curve
        }
        c.closePath();
        c.stroke();
    }
var c,d,oa,a,e,i,k,o,p,r,u,x,y,s,R,n=0,dF=document.createDocumentFragment();
 i=cENS('svg'); sA(i,'width','100%'); sA(i,'height','100%'); 
 sA(i,'viewBox','150 0 600 600'); sA(i,'fill','none'); sA(i,'stroke','black');
 c="svg{width:290px;height:140px;font:bold 70px '';"+
     'fill:#fff;stroke:#07f;stroke-width:6;stroke-linecap:round;}'+
     "text{text-anchor:middle;dominant-baseline:middle;stroke:none;fill:#000;}";
  o=cENS('style'); aC(o,cTN(c)); aC(i,o);
  o=cENS('rect'); sA(o,'x',2); sA(o,'y',34); sA(o,'rx',12); sA(o,'ry',12);
   sA(o,'style','width:75;height:75;'); aC(i,o);
   o=cENS('line'); sA(o,'x1',41); sA(o,'y1',46); sA(o,'x2',41); sA(o,'y2',20);
   sA(o,'style','stroke:#fff;stroke-width:26;'); aC(i,o);
   o=cENS('line'); sA(o,'x1',41); sA(o,'y1',9); sA(o,'x2',41); sA(o,'y2',68); aC(i,o);
   o=cENS('line'); sA(o,'x1',25); sA(o,'y1',19); sA(o,'x2',41); sA(o,'y2',4); aC(i,o);
   o=cENS('line'); sA(o,'x1',57); sA(o,'y1',19); sA(o,'x2',41); sA(o,'y2',4); aC(i,o);
  o=cENS('text');sA(o,'x',500);sA(o,'y',70);
  aC(o,cTN("then, 'Add to Homescreen'")); aC(i,o);
  aC(document.body,i);
  
  c=90;
  s=180;
  i=cE('canvas'); i.height=s; i.width=s; o=i.getContext("2d");
  i.style.cssText='display:none';
  o.fillStyle="#afa"; o.fillRect(0, 0, s,s);
  roundRect(o, 0, 0, s, s, -10, 5, '#000', 37);
  roundRect(o, 0, 0, s, s, 10, 36, '#e55', 60);
  o.strokeStyle='#e55'; o.lineCap='round'; o.lineWidth=8;
  o.beginPath();
  R=1; d=292;
  for(a=-d;a<d+121;a++){
   if(a==0) { R=-0.7; continue;  }
   
   r=parseInt((Math.sqrt(Math.abs(a/4))*8));
   R+=Math.asin(2/r);
   if(parseInt(10*Math.abs(a))<180) continue;
   if(Math.abs(a)%10!=0) continue;
   if(a>0) {
      x=parseInt(c+7+r*Math.sin(R));
      y=parseInt(c-6+r*Math.cos(R));
    } else {
      x=parseInt(c+7+r*Math.cos(R));
      y=parseInt(c-6+r*Math.sin(R));
    }
    o.lineTo(x,y);
  }
  o.stroke(); o.strokeStyle='lime'; o.lineWidth=3;
  o.beginPath();
  R=1;
  for(a=-d;a<d+121;a++){
   if(a==0) { R=-0.7; continue;  }
   r=parseInt((Math.sqrt(Math.abs(a/4))*8));
   R+=Math.asin(2/r);
   if(parseInt(10*Math.abs(a))<180) continue;
   if(Math.abs(a)%10!=0) continue;
   if(a>0) {
      x=parseInt(c+7+r*Math.sin(R));
      y=parseInt(c-6+r*Math.cos(R));
    } else {
      x=parseInt(c+7+r*Math.cos(R));
      y=parseInt(c-6+r*Math.sin(R));
    }
    o.lineTo(x,y);
  }
  o.stroke();
  aC(document.body,i);

  u=i.toDataURL();
  o=cE('meta'); o.name='apple-mobile-web-app-title';
  o.content='Oasification'; aC(document.head,o);
  o=cE('link'); o.rel='apple-touch-icon'; o.sizes='180x180';
  o.href=u; aC(document.head,o);
  o=cE('link'); o.rel='favicon'; o.sizes='180x180';
  o.href=u; aC(document.head,o);






























