/* Festive extras for sanjeevtpatil.github.io. This file is fetched only on festival days (see the script at the end of <head>),
   so it costs nothing the rest of the year. It adds, depending on the day:
     santa      a reindeer sleigh crossing the page head (Rudolph's nose blinks like a sensor), a Santa hat on the photo frame,
                peeking elves and a small snow scene above the footer
     fireworks  rockets, bursts and flower-pot fountains in the page head (Diwali, New Year), a row of diyas above the footer
     holi       gulal colour puffs and water sprays in the page head, mounds of colour above the footer
   and, on every festival, strings of lights down the empty side margins of wide screens.
   Rules it keeps: decorations never take clicks, never sit on top of text, are hidden by the header's festive button, and stay
   still when the visitor asks for reduced motion. All drawings are original. */
(function(){
  var X=window.__festive;if(!X||X.loaded)return;X.loaded=1;
  var S=X.S,fx=S.fx,still=X.still,rgba=X.rgba,host=X.host,rnd=Math.random,TAU=6.2832,
      PAL=fx==='holi'?S.lights:['#ffd27a','#ff8c42','#ff5fa2','#7fdca4','#6fc3ff','#b08cff','#ffe9c2'];
  function pick(a){return a[Math.floor(rnd()*a.length)]}
  function svg(vb,body,cls){return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="'+vb+'"'+(cls?' class="'+cls+'"':'')+'>'+body+'</svg>'}
  function add(cls,html,parent,before){var d=document.createElement('div');d.className='fx '+cls;d.setAttribute('aria-hidden','true');d.innerHTML=html;parent.insertBefore(d,before||null);return d}

  var css=
   '.fx{position:absolute;pointer-events:none;-webkit-user-select:none;user-select:none}.fx svg{display:block;width:100%;height:auto;overflow:visible}'+
   ':root.fx-off .fx,:root.fx-off #festive-side{display:none}'+
   '#festive-side{position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:15}'+
   // sleigh
   '.fx-sleigh{left:0;top:2px;width:clamp(140px,17vw,220px);transform:translate(-110%,10px);animation:fx-fly 26s linear 1.2s infinite}'+
   '.pagehead .fx-sleigh{top:0;width:clamp(130px,15vw,190px)}'+
   '.fx-sleigh svg{animation:fx-bob 2.6s ease-in-out infinite}'+
   '@keyframes fx-fly{0%{transform:translate(-110%,10px)}48%,100%{transform:translate(calc(100vw + 10%),-4px)}}'+
   '@keyframes fx-bob{50%{transform:translateY(-6px) rotate(-1.4deg)}}'+
   '.fx-nose,.fx-glow{animation:fx-nose 1.5s infinite}.fx-ping{transform-box:fill-box;transform-origin:center;animation:fx-ping 1.5s ease-out infinite}'+
   '@keyframes fx-nose{0%,50%{opacity:1}56%,94%{opacity:.14}100%{opacity:1}}'+
   '@keyframes fx-ping{0%{transform:scale(1);opacity:.9}45%,100%{transform:scale(4.2);opacity:0}}'+
   // hat and elves
   '.fx-hat{left:-31px;top:-37px;width:86px;z-index:2;transform:rotate(-19deg);filter:drop-shadow(0 4px 6px rgba(0,0,0,.35))}'+
   '.fx-elf{width:50px}.fx-elf svg{animation:fx-peek 9s ease-in-out infinite}'+
   '.portrait .fx-elf{right:26px;top:-44px;z-index:0}.fx-elf.low{right:7%;bottom:-13px}.fx-elf.low svg{animation-delay:-4s}'+
   '@keyframes fx-peek{0%,8%{transform:translateY(105%)}16%,30%{transform:translateY(0)}34%{transform:translateY(0) rotate(-7deg)}38%,62%{transform:translateY(0) rotate(5deg)}66%{transform:translateY(0)}76%,100%{transform:translateY(105%)}}'+
   // footer scene
   ':root[data-season] .contact{position:relative}.fx-foot{left:0;right:0;bottom:0;height:62px;overflow:hidden;display:flex;align-items:flex-end;justify-content:space-between;padding:0 max(14px,3vw)}'+
   '.fx-foot>svg,.fx-foot>span{flex:none;position:relative}.fx-foot .drift{position:absolute;left:0;right:0;bottom:0;width:100%;height:13px}'+
   '.fx-foot.snow>svg:not(.drift),.fx-foot.snow>span{margin-bottom:7px}.fx-foot .tree{width:40px}.fx-foot .gift{width:40px}.fx-foot .man{width:32px}.fx-foot span.e{width:40px;height:30px;overflow:hidden}.fx-foot span.e svg{animation:fx-peek 11s ease-in-out -2s infinite}'+
   '.fx-foot .tw{animation:fx-tw 1.8s ease-in-out infinite}.fx-foot .t2{animation-delay:-.6s}.fx-foot .t3{animation-delay:-1.2s}@keyframes fx-tw{50%{opacity:.25}}'+
   '.fx-foot .diya{width:34px;margin-bottom:5px}.fx-foot .fl{transform-box:fill-box;transform-origin:50% 100%;animation:fx-flick .9s ease-in-out infinite alternate}'+
   '.fx-foot .diya:nth-child(2n) .fl{animation-duration:1.15s}.fx-foot .diya:nth-child(3n) .fl{animation-delay:-.4s}@keyframes fx-flick{to{transform:scale(.88,1.14) rotate(-4deg)}}'+
   '.fx-foot .heap{width:42px;margin-bottom:4px}'+
   '@media (max-width:860px){.fx-hat{left:-20px;top:-24px;width:56px}.portrait .fx-elf{right:16px;top:-29px;width:36px}.fx-elf.low{width:40px;bottom:-10px}'+
   '.fx-foot{height:46px}.fx-foot .tree,.fx-foot .gift{width:30px}.fx-foot .man{width:24px}.fx-foot span.e{width:30px;height:23px}.fx-foot .diya{width:26px}.fx-foot .heap{width:32px}'+
   '}'+
   '@media (prefers-reduced-motion:reduce){.fx *,.fx{animation:none!important}.fx-sleigh{transform:translate(calc(100vw - 118%),6px)}}'+
   '@media print{.fx,#festive-side{display:none!important}}';
  var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);

  // ---------- drawings ----------
  var INK='#dfeaf3',RED='#d8372b',SNOW='#f4f7fa',GOLD='#ffd27a',SKIN='#eec19c';
  var ELF=svg('0 0 80 72','<path d="M19 46 3 33 21 55ZM61 46 77 33 59 55Z" fill="#e3b089"/><ellipse cx="40" cy="50" rx="23" ry="19" fill="'+SKIN+'"/><path d="M15 42C22 16 38 6 54 3 51 15 58 30 65 42Z" fill="#2f9e62"/><path d="M13 41Q40 33 67 41V47Q40 39 13 47Z" fill="'+RED+'"/><circle cx="55" cy="4" r="4" fill="'+GOLD+'"/><circle cx="32" cy="54" r="2.6" fill="#2a2420"/><circle cx="48" cy="54" r="2.6" fill="#2a2420"/><circle cx="25" cy="60" r="3.4" fill="#f29b8a" opacity=".6"/><circle cx="55" cy="60" r="3.4" fill="#f29b8a" opacity=".6"/>');
  function santa(){
    var deer='<g id="fx-deer" fill="'+INK+'"><ellipse cx="48" cy="50" rx="22" ry="9.5" transform="rotate(-6 48 50)"/><path d="M62 44 75 24 84 29 72 56Z"/><ellipse cx="84" cy="27" rx="9" ry="5.2" transform="rotate(14 84 27)"/><path d="M75 23l-6-5 8 1zM27 46l-6-5 2 7z"/><path d="M77 22q-1-9-8-14M73.5 14q3-3 3-8M76.5 18q5-3 9-9M81 13q3 0 6-2" fill="none" stroke="'+INK+'" stroke-width="1.8" stroke-linecap="round"/><path d="M64 55 78 63 86 60M60 57 70 70 78 71M32 53 18 62 11 59M36 56 25 69 17 70" fill="none" stroke="'+INK+'" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M66 41 73 47" stroke="'+RED+'" stroke-width="2.6" stroke-linecap="round"/></g>';
    var sleigh='<g transform="translate(2 26)"><path d="M14 14C8 2 22-6 30 2 34 8 30 16 26 20Z" fill="#b5793f"/><path d="M30 31C28 18 34 10 42 10 50 10 54 20 52 31Z" fill="'+RED+'"/><path d="M44 18 58 21" stroke="'+RED+'" stroke-width="4.2" stroke-linecap="round"/><circle cx="43" cy="5" r="5.5" fill="#f0c8a4"/><path d="M37.5 5q5.5 9 11.5 0-1 9-5.8 10-4.7-1-5.7-10z" fill="#fff"/><path d="M37.5 2C38-6 46-9 51-4 48-4 47-1 48.5 2Z" fill="'+RED+'"/><circle cx="51.5" cy="-4" r="2.2" fill="#fff"/><path d="M37.5 2.5h11.5" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/><path d="M6 14C4 34 10 42 24 42H54C66 42 72 34 72 22 72 17 69 14 65.5 14 62 14 60 17 61 21 62 27 58 31 52 31H34C26 31 20 26 18 12 17 8 7 8 6 14Z" fill="#c8372d"/><path d="M10 52H58C67 52 72 48 73 42M22 42V52M50 42V52" fill="none" stroke="#e0a45c" stroke-width="2.2" stroke-linecap="round"/></g>';
    // Rudolph leads: his nose is a red indicator that blinks on and off, with a faint ring going out on each "reading".
    var nose='<circle class="fx-glow" cx="269.4" cy="28.3" r="8" fill="#ff3b2b" opacity=".28"/><circle class="fx-ping" cx="269.4" cy="28.3" r="3" fill="none" stroke="#ff6a5c" stroke-width=".7"/><circle class="fx-nose" cx="269.4" cy="28.3" r="2.8" fill="#ff3b2b"/>';
    add('fx-sleigh',svg('0 -10 300 104','<defs>'+deer+'</defs><g transform="rotate(-4 150 42)"><path d="M62 46Q150 58 258 40" fill="none" stroke="#e0a45c" stroke-width="1" opacity=".8"/>'+sleigh+'<use href="#fx-deer" transform="translate(84 20) scale(.62)"/><use href="#fx-deer" transform="translate(148 15) scale(.62)"/><use href="#fx-deer" transform="translate(212 10) scale(.62)"/>'+nose+'</g>'),host,host.querySelector('.wrap'));
    add('fx-elf low',ELF,host,host.querySelector('.wrap'));
    var ph=document.querySelector('.portrait');
    if(ph){
      add('fx-elf',ELF,ph,ph.firstChild);
      add('fx-hat',svg('0 0 104 84','<path d="M16 60C18 32 38 8 62 10 80 12 92 28 94 48 88 36 80 31 73 33 77 43 79 52 79 60Z" fill="'+RED+'"/><path d="M73 33C77 43 79 52 79 60H62C66 50 70 40 73 33Z" fill="#b82a22"/><rect x="8" y="55" width="78" height="19" rx="9.5" fill="'+SNOW+'"/><circle cx="94" cy="50" r="9.5" fill="'+SNOW+'"/>'),ph);
    }
  }

  // ---------- footer scene ----------
  function foot(){
    var ct=document.querySelector('.contact');if(!ct)return;
    var w=document.documentElement.clientWidth,n,i,h='',cls='';
    if(fx==='santa'){
      cls=' snow';
      var tree=svg('0 0 44 58','<path d="M19 48h6v9h-6z" fill="#8a5a33"/><path d="M22 6 34 24H10Z" fill="#2f9e62"/><path d="M22 16 38 38H6Z" fill="#2a9159"/><path d="M22 28 42 50H2Z" fill="#268551"/><path d="M22 0l1.8 3.8 4.2.5-3.1 2.9.8 4.1-3.7-2-3.7 2 .8-4.1-3.1-2.9 4.2-.5z" fill="'+GOLD+'"/><circle class="tw" cx="17" cy="22" r="1.9" fill="#ff7d6e"/><circle class="tw t2" cx="27" cy="31" r="1.9" fill="'+GOLD+'"/><circle class="tw t3" cx="14" cy="39" r="1.9" fill="#6fc3ff"/><circle class="tw" cx="30" cy="44" r="1.9" fill="#ff7d6e"/><circle class="tw t2" cx="21" cy="45" r="1.9" fill="#fff"/>','tree'),
          gift=svg('0 0 46 30','<rect x="2" y="10" width="22" height="20" rx="2" fill="'+RED+'"/><path d="M11 10h4v20h-4z" fill="'+GOLD+'"/><path d="M13 10C8 2 4 8 13 10 22 8 18 2 13 10" fill="none" stroke="'+GOLD+'" stroke-width="2"/><rect x="27" y="16" width="16" height="14" rx="2" fill="#2f9e62"/><path d="M33.5 16h3v14h-3z" fill="'+SNOW+'"/>','gift'),
          man=svg('0 0 36 54','<circle cx="18" cy="39" r="14" fill="'+SNOW+'"/><circle cx="18" cy="19" r="9.5" fill="'+SNOW+'"/><path d="M9.5 27q8.5 4.5 17 0" stroke="'+RED+'" stroke-width="3.4" fill="none" stroke-linecap="round"/><path d="M24 28v9" stroke="'+RED+'" stroke-width="3.4" stroke-linecap="round"/><circle cx="15" cy="17" r="1.3" fill="#2a2420"/><circle cx="21.5" cy="17" r="1.3" fill="#2a2420"/><path d="M18 20l8 2-8 1.5z" fill="#ff8c42"/><path d="M10 11h16M12.5 11V3h11v8z" fill="#4a6478" stroke="#4a6478" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/><circle cx="18" cy="35" r="1.3" fill="#2a2420"/><circle cx="18" cy="42" r="1.3" fill="#2a2420"/>','man'),
          elf='<span class="e">'+ELF+'</span>';
      h=tree+gift+(w>700?elf+tree:'')+(w>1100?gift+man:'')+elf+man+(w>520?gift:'')+tree+
        svg('0 0 1200 20" preserveAspectRatio="none','<path d="M0 20V10Q60 2 130 9T290 8 470 11 640 6 820 10 1010 7 1200 10V20Z" fill="#eef4f8"/>','drift');
    }else if(S.id==='diwali'){
      n=Math.max(4,Math.min(13,Math.floor(w/105)));
      for(i=0;i<n;i++)h+=svg('0 0 44 40','<circle cx="22" cy="13" r="13" fill="#ffb347" opacity=".2"/><path class="fl" d="M22 2C28 10 27 19 22 20 17 19 16 10 22 2Z" fill="#ffc45a"/><path class="fl" d="M22 9c3 4 2.5 9 0 10-2.5-1-3-6 0-10z" fill="#fff4c8"/><path d="M3 21h38q-3 16-19 16T3 21z" fill="#c9772f"/><path d="M3 21h38q-.6 3-2 5.5H5Q3.6 24 3 21z" fill="#e0934a"/><path d="M12 31q10 5 20 0" fill="none" stroke="#f1c27a" stroke-width="1.2" stroke-dasharray="1.5 3" stroke-linecap="round"/>','diya');
    }else if(fx==='holi'){
      n=Math.max(4,Math.min(12,Math.floor(w/115)));
      for(i=0;i<n;i++)h+=svg('0 0 48 34','<ellipse cx="24" cy="29" rx="23" ry="4.5" fill="#c9a25a"/><ellipse cx="24" cy="28.3" rx="20" ry="3.3" fill="#a8843f"/><path d="M6 28Q24-12 42 28Q24 32 6 28Z" fill="'+S.lights[i%S.lights.length]+'"/><path d="M24 9Q31 18 35 27" fill="none" stroke="#fff" stroke-opacity=".28" stroke-width="2" stroke-linecap="round"/>','heap');
    }
    if(!h)return;
    var old=ct.querySelector('.fx-foot');if(old)old.parentNode.removeChild(old);
    ct.style.paddingBottom='';var el=add('fx-foot'+cls,h,ct),wr=ct.querySelector('.wrap'),last=wr&&wr.lastElementChild,
        gap=last?ct.getBoundingClientRect().bottom-last.getBoundingClientRect().bottom:999,need=el.offsetHeight+16-gap;
    if(need>0)ct.style.paddingBottom=(parseFloat(getComputedStyle(ct).paddingBottom)+need)+'px';   // keep the scene clear of the contact details
  }

  // ---------- fireworks ----------
  function Fire(){
    var RK=[],P=[],FL=[],FN=[];
    function burst(x,y,rad,c){
      var n=Math.round(Math.max(16,Math.min(64,rad*.5))),c2=rnd()<.4?pick(PAL):c,ring=rnd()<.25,i,a,v,k=1.9;
      for(i=0;i<n;i++){a=ring?i/n*TAU:rnd()*TAU;v=rad*k*(ring?1:.3+.7*Math.sqrt(rnd()));P.push({x:x,y:y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,l:0,m:1.1+rnd()*.8,c:i%2?c:c2,g:34,k:k,w:rad>60?1.8:1.3,h:1});}
      FL.push({x:x,y:y,l:0,r:rad*.55,c:c});
    }
    return{
      n:function(){return P.length},
      clear:function(){RK=[];P=[];FL=[];FN=[]},
      burst:burst,
      launch:function(x,y0,ty,rad){RK.push({x:x,y0:y0,ty:ty,t:0,d:.7+rnd()*.5,dx:(rnd()-.5)*30,r:rad,c:pick(PAL)})},
      fountain:function(x,y,h){FN.push({x:x,y:y,t:2.4,v:Math.sqrt(2*520*h)})},
      step:function(g,dt){
        var i,r,p,k,x,y,a,q,dr;g.lineCap='round';
        for(i=FN.length;i--;){q=FN[i];q.t-=dt;if(q.t<=0){FN.splice(i,1);continue}
          for(k=Math.max(1,Math.round(dt*80));k--;)P.push({x:q.x,y:q.y,vx:(rnd()-.5)*q.v*.34,vy:-q.v*(.55+.45*rnd()),l:0,m:.6+rnd()*.6,c:pick(['#ffd27a','#ffe9c2','#ffb347']),g:520,k:.4,w:1.2});}
        for(i=RK.length;i--;){r=RK[i];r.t+=dt/r.d;k=1-(1-r.t)*(1-r.t);x=r.x+r.dx*r.t;y=r.y0+(r.ty-r.y0)*k;
          if(r.t>=1){RK.splice(i,1);burst(x,y,r.r,r.c);continue}
          g.strokeStyle=rgba('#ffe9c2',.85);g.lineWidth=1.6;g.beginPath();g.moveTo(x,y);g.lineTo(x-r.dx*.04,y+4+16*(1-r.t));g.stroke();}
        for(i=FL.length;i--;){q=FL[i];q.l+=dt;if(q.l>.22){FL.splice(i,1);continue}
          a=g.createRadialGradient(q.x,q.y,0,q.x,q.y,q.r);a.addColorStop(0,rgba('#ffffff',.5*(1-q.l/.22)));a.addColorStop(.4,rgba(q.c,.25*(1-q.l/.22)));a.addColorStop(1,rgba(q.c,0));g.fillStyle=a;g.beginPath();g.arc(q.x,q.y,q.r,0,TAU);g.fill();}
        for(i=P.length;i--;){p=P[i];p.l+=dt;if(p.l>=p.m){P.splice(i,1);continue}
          x=p.x;y=p.y;dr=Math.exp(-p.k*dt);p.vx*=dr;p.vy=p.vy*dr+p.g*dt;p.x+=p.vx*dt;p.y+=p.vy*dt;
          a=1-p.l/p.m;a=a<.4?a*2.5*(.55+.45*rnd()):1;
          g.strokeStyle=rgba(p.c,a);g.lineWidth=p.w;g.beginPath();g.moveTo(x-p.vx*.075,y-p.vy*.075);g.lineTo(p.x,p.y);g.stroke();
          if(p.h){g.fillStyle=rgba('#ffffff',a*.9);g.beginPath();g.arc(p.x,p.y,p.w*.62,0,TAU);g.fill();}}
      }};
  }

  // ---------- Holi: gulal puffs and water sprays ----------
  var SPR={};
  function spr(c){if(SPR[c])return SPR[c];var o=document.createElement('canvas');o.width=o.height=64;var q=o.getContext('2d'),gr=q.createRadialGradient(32,32,0,32,32,32);gr.addColorStop(0,rgba(c,1));gr.addColorStop(.4,rgba(c,.6));gr.addColorStop(1,rgba(c,0));q.fillStyle=gr;q.fillRect(0,0,64,64);return SPR[c]=o}
  function Holi(){
    var B=[],D=[],JT=[];
    return{
      n:function(){return D.length},
      clear:function(){B=[];D=[];JT=[]},
      puff:function(x,y,rad,c){
        c=c||pick(PAL);var i,a,v;
        for(i=0;i<11;i++){a=rnd()*TAU;v=rad*2.3*(.15+.85*rnd());B.push({x:x,y:y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-rad*.3,l:0,m:1.3+rnd()*1.1,s:rad*(.24+.3*rnd()),c:c});}
        for(i=0;i<14;i++){a=rnd()*TAU;v=rad*3.4*(.4+.6*rnd());D.push({x:x,y:y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,l:0,m:.7+rnd()*.8,c:c,w:1+rnd()*1.5,g:140,k:2.2,dot:1});}
      },
      jet:function(x,y,ang,v,c){JT.push({x:x,y:y,a:ang,v:v,c:c||pick(PAL),t:.9+rnd()*.6})},
      step:function(g,dt,H,soft){
        var i,j,k,a,v,b,d,f,s,x,y,dr;
        for(i=JT.length;i--;){j=JT[i];j.t-=dt;if(j.t<=0){JT.splice(i,1);continue}
          for(k=Math.max(1,Math.round(dt*140));k--;){a=j.a+(rnd()-.5)*.11;v=j.v*(.9+.2*rnd());D.push({x:j.x,y:j.y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,l:0,m:4,c:j.c,w:1.5+rnd()*1.7,g:520,k:.12});}}
        for(i=B.length;i--;){b=B[i];b.l+=dt;if(b.l>=b.m){B.splice(i,1);continue}
          dr=Math.exp(-2.4*dt);b.vx*=dr;b.vy=b.vy*dr+14*dt;b.x+=b.vx*dt;b.y+=b.vy*dt;f=b.l/b.m;s=b.s*(1+1.7*f);
          g.globalAlpha=.4*(1-f)*Math.min(1,f*14);g.drawImage(spr(b.c),b.x-s,b.y-s,2*s,2*s);}
        g.globalAlpha=1;g.lineCap='round';
        for(i=D.length;i--;){d=D[i];d.l+=dt;if(d.l>=d.m||d.y>H+20){D.splice(i,1);continue}
          x=d.x;y=d.y;dr=Math.exp(-d.k*dt);d.vx*=dr;d.vy=d.vy*dr+d.g*dt;d.x+=d.vx*dt;d.y+=d.vy*dt;
          if(d.dot){g.fillStyle=rgba(d.c,.85*(1-d.l/d.m));g.beginPath();g.arc(d.x,d.y,d.w,0,TAU);g.fill();}
          else{g.strokeStyle=rgba(d.c,soft?.5:.78);g.lineWidth=d.w;g.beginPath();g.moveTo(x-d.vx*.02,y-d.vy*.02);g.lineTo(d.x,d.y);g.stroke();}}
      }};
  }

  // ---------- page head (drawn on the overlay canvas, called from the main loop) ----------
  var fw=fx==='fireworks'?Fire():null,ho=fx==='holi'?Holi():null,t1=.4,t2=3,t3=1.2,side=0;
  X.toggle=function(on){if(!on){if(fw)fw.clear();if(ho)ho.clear();}sideKick();};
  var QUIET=[[.6,.16],[.94,.2],[.7,.9],[.04,.86]];   // where the still versions go (reduced motion): clear of the text column
  X.draw=function(g,dt,T,W,H){
    var i,m=Math.min(W,H),th,ha;
    if(fw){
      if(still){fw.clear();for(i=0;i<3;i++)fw.burst(W*QUIET[i][0],H*QUIET[i][1],m*(.12+.06*rnd()),pick(PAL));fw.step(g,.2);fw.step(g,.2);fw.step(g,.2);return}
      t1-=dt;t2-=dt;
      if(t1<=0&&fw.n()<420){fw.launch(W*(.05+.9*rnd()),H+4,H*(.1+.42*rnd()),m*(.14+.13*rnd()));t1=.35+rnd()*.95;}
      if(t2<=0){fw.fountain(W*(.08+.84*rnd()),H+2,Math.min(120,H*.2));t2=5+rnd()*4;}
      fw.step(g,dt);
    }
    if(ho){
      if(still){ho.clear();for(i=0;i<4;i++)ho.puff(W*QUIET[i][0],H*QUIET[i][1],m*(.07+.04*rnd()));ho.step(g,.4,H);return}
      t1-=dt;t3-=dt;
      if(t1<=0){ho.puff(W*(.04+.92*rnd()),H*(.08+.84*rnd()),m*(.06+.06*rnd()));t1=.9+rnd()*1.4;}
      if(t3<=0&&ho.n()<420){side=1-side;th=(54+rnd()*16)*Math.PI/180;ha=Math.min(H*.45,W*.42)*(.6+.4*rnd());
        ho.jet(side?W+6:-6,H*(.5+.42*rnd()),side?Math.PI+th:-th,Math.sqrt(2*520*ha)/Math.sin(th));t3=1.6+rnd()*1.8;}
      ho.step(g,dt,H,W<700);   // fainter spray on phones, where it passes behind the text
    }
  };

  // ---------- side margins: light strings, plus the day's particles, only where the page is empty ----------
  var sc=document.createElement('canvas'),sg=sc.getContext('2d'),SW=0,SH=0,GW=0,sraf=0,slast=0,SP=[],sfw=fx==='fireworks'?Fire():null,sho=fx==='holi'?Holi():null,st1=1,light=false;
  sc.id='festive-side';sc.setAttribute('aria-hidden','true');document.body.appendChild(sc);
  function isLight(){var m=/(\d+),\s*(\d+),\s*(\d+)/.exec(getComputedStyle(document.body).backgroundColor);return!!m&&(+m[1]+ +m[2]+ +m[3])>380}
  function sideSetup(){
    var w=document.querySelector('main .wrap')||document.querySelector('.wrap'),D=Math.min(window.devicePixelRatio||1,2),i,n;
    SW=document.documentElement.clientWidth;SH=window.innerHeight;GW=w?Math.floor(w.getBoundingClientRect().left+4):0;if(GW<64)GW=0;
    sc.style.display=GW?'':'none';if(!GW)return;
    sc.width=SW*D;sc.height=SH*D;sg.setTransform(D,0,0,D,0,0);light=isLight();SP=[];
    if(S.particles){n=Math.round(SH/(S.particles==='snow'?34:60));for(i=0;i<n*2;i++)SP.push({x:rnd()*GW,y:rnd()*SH,s:1.4+rnd()*rnd()*4.6,v:12+rnd()*22,p:rnd()*TAU,a:.45+.5*rnd(),c:S.lights[i%S.lights.length],r:i%2});}
  }
  function gx(p){return p.r?SW-GW+p.x:p.x}
  function sideFrame(t){
    sraf=0;if(!GW)return;var dt=Math.min(.05,(t-slast)/1000||0),T=t/1000,i,k,y,x,xc=Math.max(30,Math.min(84,GW*.46)),off=still?0:-(window.pageYOffset||0)*.18,sp=62,kind=S.particles,b,e,snow=light?'#7fa3bd':'#f2f8fd';slast=t;
    sg.clearRect(0,0,SW,SH);
    for(k=0;k<2;k++){
      sg.save();sg.beginPath();sg.rect(k?SW-GW:0,0,GW,SH);sg.clip();
      // the string: a thin wavy wire with a bulb every so often, drifting slowly as the page scrolls
      sg.strokeStyle=light?'rgba(70,95,115,.4)':'rgba(190,210,225,.3)';sg.lineWidth=1;sg.beginPath();
      for(y=-10;y<=SH+10;y+=10){x=(k?SW-xc:xc)+Math.sin((y-off)/74+k*2)*Math.min(14,GW*.12);if(y<0)sg.moveTo(x,y);else sg.lineTo(x,y);}
      sg.stroke();
      for(i=Math.floor(off/sp)-1,y=0;y<SH+sp;i++){y=i*sp-off+sp;if(y<-20)continue;x=(k?SW-xc:xc)+Math.sin((y-off)/74+k*2)*Math.min(14,GW*.12);
        var n=((i%97)+97)%97,c=S.lights[(n+k)%S.lights.length],tw=still?.85:.4+.6*Math.pow(.5+.5*Math.sin(T*(1.1+(n%5)*.35)+n*1.7+k),2);
        sg.globalAlpha=tw*(light?.75:.9);sg.drawImage(spr(c),x-15,y-9,30,30);sg.globalAlpha=1;
        sg.fillStyle=rgba(c,.6+.4*tw);sg.beginPath();sg.arc(x,y+6,3,0,TAU);sg.fill();sg.fillStyle=rgba('#ffffff',tw*.9);sg.beginPath();sg.arc(x,y+6,1.2,0,TAU);sg.fill();
        sg.strokeStyle=light?'rgba(70,95,115,.5)':'rgba(190,210,225,.4)';sg.beginPath();sg.moveTo(x,y);sg.lineTo(x,y+3);sg.stroke();}
      sg.restore();
    }
    // particles stay inside their own margin
    SP.forEach(function(p){
      if(!still){p.y+=(kind==='snow'?1:-.6)*p.v*dt;p.x+=Math.sin(T*.6+p.p)*7*dt;if(p.y>SH+10)p.y=-10;if(p.y<-10)p.y=SH+10;if(p.x>GW-8)p.x=4;if(p.x<4)p.x=GW-8;}
      x=gx(p);
      if(kind==='snow'){
        if(p.s>3){var L=p.s*1.5,a,th;sg.strokeStyle=rgba(snow,p.a);sg.lineWidth=1;sg.lineCap='round';sg.beginPath();for(a=0;a<6;a++){th=p.p+T*.2+a*1.0472;sg.moveTo(x,p.y);sg.lineTo(x+Math.cos(th)*L,p.y+Math.sin(th)*L);}sg.stroke();}
        else{sg.fillStyle=rgba(snow,p.a);sg.beginPath();sg.arc(x,p.y,Math.max(1,p.s*.6),0,TAU);sg.fill();}
      }else if(kind==='sparks'){e=p.a*(.5+.5*Math.sin(T*3*p.v/12+p.p));sg.fillStyle=rgba(p.c,e*.5);sg.beginPath();sg.arc(x,p.y,p.s*1.4,0,TAU);sg.fill();}
      else{sg.fillStyle=rgba(p.c,p.a*.75);sg.beginPath();sg.arc(x,p.y,Math.max(1.2,p.s*.7),0,TAU);sg.fill();}
    });
    if(!still&&(sfw||sho)){
      st1-=dt;b=rnd()<.5;x=(b?SW-GW:0)+GW*(.3+.4*rnd());
      if(st1<=0){if(sfw)sfw.launch(x,SH+4,SH*(.15+.6*rnd()),Math.min(70,GW*.42));else sho.puff(x,SH*(.1+.8*rnd()),Math.min(46,GW*.26));st1=1.3+rnd()*2.2;}
      sg.save();sg.beginPath();sg.rect(0,0,GW-6,SH);sg.rect(SW-GW+6,0,GW-6,SH);sg.clip();if(sfw)sfw.step(sg,dt);else sho.step(sg,dt,SH);sg.restore();
    }
    if(X.on()&&!still&&!document.hidden)sraf=requestAnimationFrame(sideFrame);
  }
  function sideKick(){if(sraf){cancelAnimationFrame(sraf);sraf=0;}if(X.on()&&GW){slast=performance.now();sraf=requestAnimationFrame(sideFrame);}}
  var rt;window.addEventListener('resize',function(){clearTimeout(rt);rt=setTimeout(function(){sideSetup();sideKick();foot();},280);});
  document.addEventListener('visibilitychange',function(){if(!document.hidden)sideKick();});
  function retheme(){light=isLight();if(still)sideKick();}
  if(window.MutationObserver)new MutationObserver(retheme).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
  if(window.matchMedia){var mq=window.matchMedia('(prefers-color-scheme: dark)');if(mq.addEventListener)mq.addEventListener('change',retheme);}

  if(fx==='santa')santa();
  foot();sideSetup();sideKick();X.redraw();
})();
