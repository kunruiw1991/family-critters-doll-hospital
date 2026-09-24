const $ = s => document.querySelector(s);
const CHARACTERS = [
 {id:'luna',name:'LunaBat',role:['Little dreamer','小小梦想家'],charm:'☾',adventures:[['A little moonlit mishap','月光下的小意外'],['After the cloud picnic','云朵野餐之后'],['A sleepy star adventure','晚安星星奇遇']]},
 {id:'sunny',name:'SunnyFox',role:['A warm little glow','温暖的小太阳'],charm:'🏮',adventures:[['A very muddy garden day','花园里的泥巴日'],['The lantern picnic','灯笼野餐'],['A tumble in the daisies','雏菊丛里的小翻滚']]},
 {id:'poppy',name:'PoppyDash',role:['A fluffy bundle of joy','毛茸茸的开心果'],charm:'🍿',adventures:[['A popcorn party cleanup','爆米花派对之后'],['The fluffy tail trail','大尾巴的森林之旅'],['A puddle-hopping day','快乐踩水坑']]}
];
const I18N={
 eyebrow:['A LITTLE CARE. A LOT OF LOVE.','一点点照顾，满满的爱'],title:['Every friend deserves a little love.','给每位小伙伴，一点点爱。'],subtitle:['Wash, mend & make them smile again.','洗一洗，补一补，让笑容回来。'],shelf:['My toy shelf','我的玩偶架'],friends:['YOUR LITTLE FRIENDS','你的小伙伴'],note:['Little hands.<br>Very big hearts.','小小的手。<br>大大的爱。'],appointment:["TODAY’S LITTLE ADVENTURE",'今天的小小奇遇'],carePlan:['A LITTLE TLC','温柔照顾'],careHeading:['Happy doll,<br>happy heart.','玩偶开心，<br>心里甜甜。'],reward:['A little surprise<br>after every hug','每一个拥抱后<br>都有小惊喜'],toolbox:['THE LITTLE TOOLBOX','小小工具箱'],footer:['Made for little hands & big imaginations','为小小的手和大大的想象力而做'],pace:['Play at your own pace','慢慢玩，不着急'],welcome:['Your cozy little repair shop','你的温暖玩偶修理铺'],start:["Let’s help LunaBat",'来帮助 LunaBat'],next:['Next','继续'],collection:['A SHELF FULL OF LOVE','装满爱的玩偶架'],back:['Back to the shop','回到修理铺'],wonderful:['LOOK WHAT YOU DID!','看，你做得多棒！'],celebration:['A happy friend, all thanks to you.','谢谢你，小伙伴又开心啦。'],again:['Another little adventure →','再来一次小冒险 →'],
 readyTitle:['A friend is waiting for your care','小伙伴在等你的照顾'],readyText:['Pick a friend, then let the little adventure begin.','选个小伙伴，开始温暖的小冒险吧。'],doneTitle:['Lovely work!','做得真棒！'],doneText:['Ready for the next little bit of care?','准备好下一步了吗？'],toolTip:['One little step at a time','一步一步，慢慢来'],saved:['Your happy friends and special stickers live here.','开心的伙伴和奖励贴纸都在这里。'],empty:['Give your first friend a hug to start your collection.','完成第一次照顾并拥抱伙伴，就能开始收藏啦。'],allFixed:['All cozy again!','又变得暖暖的啦！'],tryAgain:['Let’s give another friend some love.','再来照顾一位小伙伴吧。'],hug:['Give a big hug ♡','给一个大大的拥抱 ♡'],charmHint:['Drag the charm to the glowing circle, or tap the circle.','把吊坠拖到亮圈里，也可以直接点亮圈。']
};
const STEPS=[
 {id:'wash',name:['Wash','洗洗'],title:['Bubble bath time','泡泡洗澡时间'],hint:['Rub or tap each muddy spot to wash it away.','揉一揉或点一点，把泥巴洗干净。'],icon:'wash'},
 {id:'brush',name:['Brush','梳毛'],title:['Fluff, fluff, fluffy!','毛茸茸，软乎乎！'],hint:['Brush every little tangle until the fur is soft.','摸一摸每个打结的地方，把毛梳顺。'],icon:'brush'},
 {id:'mend',name:['Mend','缝补'],title:['A tiny patch of love','一块充满爱的小补丁'],hint:['Follow the glowing dots to stitch the little patch.','按顺序点亮小圆点，缝好爱心补丁。'],icon:'mend'},
 {id:'charm',name:['Charm','吊坠'],title:['A little sparkle returns','让小吊坠闪闪发光'],hint:['Bring the charm back to its glowing home.','把吊坠放回发光的小圆圈里。'],icon:'charm'},
 {id:'dress',name:['Decorate','装饰'],title:['Make it extra special','装扮得更可爱'],hint:['Choose a lovely little finishing touch.','挑一个喜欢的小装饰吧。'],icon:'dress'},
 {id:'hug',name:['Hug','拥抱'],title:['The most important finishing touch','最后一步：满满的爱'],hint:['A big warm hug makes everything better.','给小伙伴一个温暖的大拥抱。'],icon:'hug'}
];
const iconPaths={wash:'<path d="M12 27q10-8 23-1l-3 14q-10 6-23-1Z" fill="#dfbf71"/><circle cx="16" cy="17" r="7" fill="#cae4e4"/><circle cx="29" cy="12" r="6" fill="#d9eceb"/><circle cx="35" cy="23" r="5" fill="#bddcdd"/><path d="m12 32 19 1" stroke="#c9a851" stroke-width="2"/>',brush:'<path d="m24 28-7 16q-4 3-6-2l9-17" fill="#cdb693"/><rect x="17" y="6" width="21" height="26" rx="10" fill="#b3c7ae" transform="rotate(25 27 20)"/><path d="m23 11-5 13m11-11-5 13m11-11-5 13" stroke="#e6eedf" stroke-width="2"/>',mend:'<path d="M10 12 35 9l4 26-25 5Z" fill="#e9bfd2"/><path d="m14 16 17-3 4 18-17 4Z" fill="none" stroke="#b98aa5" stroke-width="1.5" stroke-dasharray="3 3"/><path d="m27 10-9 30" stroke="#fff" stroke-width="3"/>',charm:'<path d="M29 8a15 15 0 1 0 9 26A15 15 0 0 1 29 8Z" fill="#e5c581"/><path d="m35 12 2 6 6 2-6 2-2 6-2-6-6-2 6-2Z" fill="#efdb9f"/>',dress:'<path d="M24 25C5 0 3 37 23 29 47 39 46 0 24 25Z" fill="#d8b1cc"/><circle cx="24" cy="26" r="5" fill="#b896b4"/><path d="m20 29-5 14 9-5 8 4-5-14" fill="#d8b1cc"/>',hug:'<path d="M24 40C-6 21 12 1 24 16 37 1 55 21 24 40Z" fill="#e3b0b5"/><path d="m12 22 9 8m15-8-9 8" stroke="#f6dbd5" stroke-width="3" stroke-linecap="round"/>'};
const svg = id => `<svg viewBox="0 0 48 48" aria-hidden="true">${iconPaths[id]}</svg>`;
let lang=0,sound=true,character=0,step=-1,completed=0,active=false,stageDone=false,decoration='',busy=false,audioCtx;
let collection={};try{collection=JSON.parse(localStorage.getItem('little-hugs-v1')||'{}');if(!collection||typeof collection!=='object'||Array.isArray(collection))collection={};}catch{}
const c=()=>CHARACTERS[character];
const tr=k=>I18N[k]?.[lang]||k;
const rounds=id=>Array.isArray(collection[id])?collection[id].length:0;
const adventure=()=>rounds(c().id)%3;
function tone(kind='tap'){
 if(!sound)return;try{audioCtx??=new(window.AudioContext||window.webkitAudioContext)();audioCtx.resume();const now=audioCtx.currentTime;const notes=kind==='win'?[523,659,784,1047]:kind==='next'?[523,659]:[660+Math.random()*100];notes.forEach((freq,i)=>{const o=audioCtx.createOscillator(),g=audioCtx.createGain();o.type='sine';o.frequency.value=freq;g.gain.setValueAtTime(0,now+i*.12);g.gain.linearRampToValueAtTime(.055,now+i*.12+.015);g.gain.exponentialRampToValueAtTime(.001,now+i*.12+.24);o.connect(g).connect(audioCtx.destination);o.start(now+i*.12);o.stop(now+i*.12+.25)});}catch{}
}
function speak(){if(!sound||!('speechSynthesis'in window))return;speechSynthesis.cancel();const u=new SpeechSynthesisUtterance($('#instructionTitle').textContent+'. '+$('#instructionText').textContent);u.lang=lang?'zh-CN':'en-US';u.rate=.85;speechSynthesis.speak(u);}
function renderFriends(){
 $('#friendList').innerHTML=CHARACTERS.map((ch,i)=>`<button class="friend-card ${i===character?'selected':''}" data-friend="${i}" aria-pressed="${i===character}" ${busy?'disabled':''}><span class="portrait ${ch.id}" aria-hidden="true"></span><span><strong>${ch.name}</strong><small>${ch.role[lang]}</small></span>${i===character?'<span class="check">✓</span>':''}</button>`).join('');
 $('#friendList').querySelectorAll('button').forEach(b=>b.onclick=()=>selectFriend(+b.dataset.friend));
}
function renderText(){
 document.documentElement.lang=lang?'zh-CN':'en';document.querySelectorAll('[data-i18n]').forEach(e=>e.innerHTML=tr(e.dataset.i18n));$('#language').textContent=lang?'EN':'中文';$('#toolTip').textContent=tr('toolTip');$('#scenarioTitle').textContent=c().adventures[adventure()][lang];$('#start span:first-child').textContent=lang?`来帮助 ${c().name}`:`Let’s help ${c().name}`;renderFriends();renderSteps();renderInstruction();renderShelf();
}
function renderSteps(){
 $('#stepList').innerHTML=STEPS.map((s,i)=>`<li class="${i===step?'active':''} ${i<step?'done':''}"><span>${i<step?'✓':i+1}</span>${s.name[lang]}</li>`).join('');
 $('#tools').innerHTML=STEPS.map((s,i)=>`<button class="tool ${i===step?'selected':''}" data-step="${i}" aria-label="${s.name[lang]}" aria-pressed="${i===step}" ${i!==step||busy?'disabled':''}>${svg(s.icon)}<span class="tool-name">${s.name[lang]}</span>${i<step?'<b class="done-dot">✓</b>':''}</button>`).join('');
 $('#tools').querySelectorAll('button').forEach(b=>b.onclick=()=>{tone();speak();});
 $('#progressFill').style.width=`${step<0?0:((step+(stageDone?1:0))/6)*100}%`;
}
function renderInstruction(){
 $('#stepBadge').innerHTML=step<0?'♡':svg(STEPS[step].icon);$('#stepBadge svg')?.setAttribute('width','28');
 $('#instructionTitle').textContent=step<0?tr('readyTitle'):stageDone?tr('doneTitle'):STEPS[step].title[lang];
 $('#instructionText').textContent=step<0?tr('readyText'):stageDone?tr('doneText'):STEPS[step].hint[lang];
 $('#next').hidden=!stageDone||step===5;
}
function selectFriend(i){if(busy)return;character=i;step=-1;active=false;completed=0;stageDone=false;decoration='';$('#doll').className=`doll ${c().id} idle`;$('#doll').ariaLabel=`${c().name} plush doll`;$('#targets').replaceChildren();$('#decoration').textContent='';$('#welcome').hidden=false;$('#successBubble').hidden=true;renderText();}
function start(){tone('next');active=true;$('#welcome').hidden=true;setStage(0);}
function burst(x,y,chars=['✦','♡','·']){for(let i=0;i<5;i++){const p=document.createElement('span');p.className='particle';p.textContent=chars[i%chars.length];p.style.cssText=`left:${x+(Math.random()-.5)*30}px;top:${y}px;--dx:${(Math.random()-.5)*90}px;color:${['#b59bca','#e7b1bd','#d9bb78'][i%3]};animation-delay:${i*.035}s`;$('#particles').append(p);setTimeout(()=>p.remove(),1100)}}
function hitEffect(el,chars){const a=el.getBoundingClientRect(),b=$('#scene').getBoundingClientRect();burst(a.left-b.left+a.width/2,a.top-b.top+a.height/2,chars);tone();}
function finishStage(){if(stageDone)return;stageDone=true;$('#successBubble').textContent=lang?'太棒啦！ ✨':'Lovely! ✨';$('#successBubble').hidden=false;setTimeout(()=>$('#successBubble').hidden=true,1500);renderSteps();renderInstruction();tone('next');}
function target(x,y,cls,label,fn){const e=document.createElement('button');e.className=`target ${cls}`;e.style.left=x+'%';e.style.top=y+'%';e.setAttribute('aria-label',label);e.onclick=()=>fn(e);$('#targets').append(e);return e;}
function mark(e,chars){if(e.classList.contains('complete'))return;e.classList.add('complete');e.disabled=true;hitEffect(e,chars);completed++;if(completed>=5)finishStage();}
function setStage(n){
 step=n;stageDone=false;completed=0;$('#targets').replaceChildren();$('#successBubble').hidden=true;renderSteps();renderInstruction();
 const shift=(adventure()-1)*4;
 if(n===0||n===1){const coords=[[42,38],[57,46],[46,63],[58,77],[36,65]];coords.forEach(([x,y],i)=>{const e=target(x+shift,y,n===0?'dirt':'brush',`${n===0?'Wash muddy spot':'Brush tangle'} ${i+1}`,e=>mark(e,n===0?['○','◌','✧']:['✦','♡']));e.textContent=n===0?'· ·':'〰';});}
 if(n===2){
 const patch=document.createElement('div');patch.className='patch';patch.style.cssText=`left:${c().id==='luna'?35:51}%;top:65%`;$('#targets').append(patch);
 const coords=[[28,58],[39,74],[50,58],[61,74],[72,58]];
 coords.forEach(([x,y],i)=>{const e=target(x,y,'stitch'+(i===0?' active':''),`Stitch ${i+1}`,el=>{if(i!==completed||stageDone)return;el.textContent='♥';el.classList.remove('active');el.disabled=true;hitEffect(el,['♡','✦']);if(i>0){const [px,py]=coords[i-1],r=$('#scene').getBoundingClientRect(),dx=(x-px)*r.width/100,dy=(y-py)*r.height/100,line=document.createElement('div');line.className='seam-line';line.style.cssText=`left:${px}%;top:${py}%;width:${Math.hypot(dx,dy)}px;transform:rotate(${Math.atan2(dy,dx)}rad)`;$('#targets').append(line);}completed++;$('#targets').querySelectorAll('.stitch')[completed]?.classList.add('active');if(completed===5)finishStage();});e.textContent=i+1;});
 }
 if(n===3){
 const home=target(50,62,'charm-target',lang?'放好吊坠':'Place the charm',()=>place());home.textContent='✧';const piece=target(80,72,'charm-piece',lang?'拖动吊坠':'Drag the charm',()=>place());piece.textContent=c().charm;
 let dragging=false,moved=false;function place(){if(stageDone)return;piece.style.left='50%';piece.style.top='62%';piece.style.pointerEvents='none';home.style.opacity=0;hitEffect(home,['✦','✧']);finishStage();}
 piece.onpointerdown=e=>{dragging=true;moved=false;piece.setPointerCapture(e.pointerId);};piece.onpointermove=e=>{if(!dragging||stageDone)return;moved=true;const r=$('#scene').getBoundingClientRect();piece.style.left=((e.clientX-r.left)/r.width*100)+'%';piece.style.top=((e.clientY-r.top)/r.height*100)+'%';};piece.onpointerup=e=>{if(!dragging)return;dragging=false;const r=home.getBoundingClientRect();if(!moved||Math.hypot(e.clientX-(r.left+r.width/2),e.clientY-(r.top+r.height/2))<95)place();else{piece.style.left='80%';piece.style.top='72%';}};piece.onpointercancel=()=>{dragging=false;piece.style.left='80%';piece.style.top='72%';};piece.onclick=e=>{if(!moved)place();e.preventDefault();};
 }
 if(n===4){const row=document.createElement('div');row.className='decoration-options';['🎀','🌼','⭐','🦋'].forEach((s,i)=>{const b=document.createElement('button');b.textContent=s;b.setAttribute('aria-label',(['Pink bow','Daisy','Gold star','Butterfly'])[i]);b.onclick=()=>{decoration=s;$('#decoration').textContent=s;hitEffect(b,['♡','✦']);finishStage();};row.append(b);});$('#targets').append(row);}
 if(n===5){const b=document.createElement('button');b.className='primary hug-button';b.textContent=tr('hug');b.onclick=finishGame;$('#targets').append(b);}
}
// Pointer strokes work alongside individual taps and keyboard activation.
let brushing=false;$('#scene').addEventListener('pointerdown',e=>{if(step===0||step===1){brushing=true;stroke(e);}});$('#scene').addEventListener('pointermove',e=>{if(brushing)stroke(e);});window.addEventListener('pointerup',()=>brushing=false);window.addEventListener('pointercancel',()=>brushing=false);
function stroke(e){if(stageDone||step<0||step>1)return;document.querySelectorAll('.target:not(.complete)').forEach(el=>{const r=el.getBoundingClientRect();if(e.clientX>=r.left-8&&e.clientX<=r.right+8&&e.clientY>=r.top-8&&e.clientY<=r.bottom+8)mark(el,step===0?['○','◌','✧']:['✦','♡']);});}
function finishGame(){if(busy||stageDone)return;busy=true;stageDone=true;renderFriends();renderSteps();$('#targets').replaceChildren();$('#doll').classList.add('hugging');tone('win');const r=$('#scene').getBoundingClientRect();for(let i=0;i<7;i++)setTimeout(()=>burst(r.width/2+(Math.random()-.5)*130,r.height/2,['♡','♥','✦']),i*130);
 const id=c().id,sticker=['🌙','🌈','⭐','🌼','🦋','🍓','☀️','🎀','🍿'][(character*3+rounds(id))%9];collection[id]??=[];if(!Array.isArray(collection[id]))collection[id]=[];collection[id].push({sticker,decoration,date:new Date().toISOString()});collection[id]=collection[id].slice(-60);try{localStorage.setItem('little-hugs-v1',JSON.stringify(collection));}catch{}
 setTimeout(()=>{busy=false;$('#doll').classList.remove('hugging');$('#rewardDoll').className=`doll mini ${id}`;$('#celebrationTitle').textContent=lang?`${c().name} 开心啦！`:`${c().name} feels loved!`;$('#rewardSticker').textContent=sticker;renderShelf();$('#celebration').showModal();renderFriends();},1250);
}
function renderShelf(){const total=CHARACTERS.reduce((a,ch)=>a+rounds(ch.id),0);$('#shelfCount').textContent=total;$('#collectionText').textContent=total?tr('saved'):tr('empty');$('#collectionGrid').innerHTML=CHARACTERS.map(ch=>`<div class="collection-card ${rounds(ch.id)?'':'empty'}"><div class="doll ${ch.id}"></div><strong>${ch.name}</strong><p>${rounds(ch.id)} ${lang?'个温暖拥抱':'happy hugs'}</p><div class="sticker-row">${(Array.isArray(collection[ch.id])?collection[ch.id]:[]).slice(-3).map(x=>['🌙','🌈','⭐','🌼','🦋','🍓','☀️','🎀','🍿'].includes(x?.sticker)?x.sticker:'♡').join('')}</div></div>`).join('');}
$('#start').onclick=start;$('#next').onclick=()=>{if(stageDone&&step<5){tone('next');setStage(step+1);}};$('#language').onclick=()=>{if(busy)return;lang=1-lang;renderText();if(step===5&&!stageDone)$('#targets button').textContent=tr('hug');};$('#sound').onclick=()=>{sound=!sound;$('#sound').textContent=sound?'♫':'♪̸';$('#sound').setAttribute('aria-pressed',String(sound));if(!sound&&'speechSynthesis'in window)speechSynthesis.cancel();else tone();};$('#speak').onclick=speak;
$('#shelfButton').onclick=()=>{renderShelf();$('#shelfDialog').showModal();};$('#closeShelf').onclick=$('#backToShop').onclick=()=>$('#shelfDialog').close();$('#again').onclick=()=>{$('#celebration').close();selectFriend((character+1)%3);};$('#showShelf').onclick=()=>{$('#celebration').close();selectFriend(character);$('#shelfDialog').showModal();};$('#celebration').addEventListener('cancel',()=>selectFriend(character));
selectFriend(0);
