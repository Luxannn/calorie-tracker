/* ============================================================
   DATA LAYER
   ============================================================ */
const DEFAULT_FOODS = [
  {id:'df1',name:'Rice (white, cooked)',brand:'',cal:130,prot:2.7,fat:0.3,carb:28.2,custom:false},
  {id:'df2',name:'Chicken Breast',brand:'',cal:165,prot:31,fat:3.6,carb:0,custom:false},
  {id:'df3',name:'Eggs',brand:'',cal:155,prot:13,fat:11,carb:1.1,custom:false},
  {id:'df4',name:'Oats',brand:'',cal:389,prot:16.9,fat:6.9,carb:66.3,custom:false},
  {id:'df5',name:'Buckwheat',brand:'',cal:343,prot:13.3,fat:3.4,carb:71.5,custom:false},
  {id:'df6',name:'Pasta (cooked)',brand:'',cal:131,prot:5,fat:1.1,carb:25,custom:false},
  {id:'df7',name:'Bread (white)',brand:'',cal:265,prot:9,fat:3.2,carb:49,custom:false},
  {id:'df8',name:'Banana',brand:'',cal:89,prot:1.1,fat:0.3,carb:22.8,custom:false},
  {id:'df9',name:'Apple',brand:'',cal:52,prot:0.3,fat:0.2,carb:13.8,custom:false},
  {id:'df10',name:'Milk (whole)',brand:'',cal:61,prot:3.2,fat:3.3,carb:4.8,custom:false},
  {id:'df11',name:'Beef (ground, 80/20)',brand:'',cal:254,prot:17.2,fat:20,carb:0,custom:false},
  {id:'df12',name:'Salmon',brand:'',cal:208,prot:20,fat:13,carb:0,custom:false},
  {id:'df13',name:'Potatoes',brand:'',cal:77,prot:2,fat:0.1,carb:17,custom:false},
  {id:'df14',name:'Greek Yogurt',brand:'',cal:59,prot:10,fat:0.7,carb:3.6,custom:false},
  {id:'df15',name:'Almonds',brand:'',cal:579,prot:21,fat:49.9,carb:21.6,custom:false},
  {id:'df16',name:'Peanut Butter',brand:'',cal:588,prot:25,fat:50,carb:20,custom:false},
  {id:'df17',name:'Olive Oil',brand:'',cal:884,prot:0,fat:100,carb:0,custom:false},
  {id:'df18',name:'Broccoli',brand:'',cal:34,prot:2.8,fat:0.4,carb:7,custom:false},
  {id:'df19',name:'Sweet Potato',brand:'',cal:86,prot:1.6,fat:0.1,carb:20,custom:false},
  {id:'df20',name:'Tuna (canned)',brand:'',cal:116,prot:25.5,fat:0.8,carb:0,custom:false},
  {id:'df21',name:'Turkey Breast',brand:'',cal:135,prot:30,fat:1,carb:0,custom:false},
  {id:'df22',name:'Cottage Cheese',brand:'',cal:98,prot:11,fat:4.3,carb:3.4,custom:false},
  {id:'df23',name:'Avocado',brand:'',cal:160,prot:2,fat:14.7,carb:8.5,custom:false},
  {id:'df24',name:'White Rice (raw)',brand:'',cal:365,prot:7.1,fat:0.7,carb:80,custom:false},
  {id:'df25',name:'Brown Rice (cooked)',brand:'',cal:123,prot:2.7,fat:1,carb:25.6,custom:false},
  {id:'df26',name:'Quinoa (cooked)',brand:'',cal:120,prot:4.4,fat:1.9,carb:21.3,custom:false},
  {id:'df27',name:'Lentils (cooked)',brand:'',cal:116,prot:9,fat:0.4,carb:20,custom:false},
  {id:'df28',name:'Chickpeas (cooked)',brand:'',cal:164,prot:8.9,fat:2.6,carb:27.4,custom:false},
  {id:'df29',name:'Tofu',brand:'',cal:76,prot:8,fat:4.8,carb:1.9,custom:false},
  {id:'df30',name:'Shrimp',brand:'',cal:99,prot:24,fat:0.3,carb:0.2,custom:false},
  {id:'df31',name:'Pork Chop',brand:'',cal:231,prot:25.7,fat:13.5,carb:0,custom:false},
  {id:'df32',name:'Bacon',brand:'',cal:541,prot:37,fat:42,carb:1.4,custom:false},
  {id:'df33',name:'Cheddar Cheese',brand:'',cal:403,prot:25,fat:33,carb:1.3,custom:false},
  {id:'df34',name:'Mozzarella',brand:'',cal:280,prot:28,fat:17,carb:3.1,custom:false},
  {id:'df35',name:'Butter',brand:'',cal:717,prot:0.9,fat:81,carb:0.1,custom:false},
  {id:'df36',name:'Honey',brand:'',cal:304,prot:0.3,fat:0,carb:82.4,custom:false},
  {id:'df37',name:'Oatmeal (instant, dry)',brand:'',cal:379,prot:13,fat:6.5,carb:67.7,custom:false},
  {id:'df38',name:'Corn',brand:'',cal:86,prot:3.3,fat:1.4,carb:19,custom:false},
  {id:'df39',name:'Green Peas',brand:'',cal:81,prot:5.4,fat:0.4,carb:14.5,custom:false},
  {id:'df40',name:'Spinach',brand:'',cal:23,prot:2.9,fat:0.4,carb:3.6,custom:false},
  {id:'df41',name:'Tomato',brand:'',cal:18,prot:0.9,fat:0.2,carb:3.9,custom:false},
  {id:'df42',name:'Cucumber',brand:'',cal:15,prot:0.7,fat:0.1,carb:3.6,custom:false},
  {id:'df43',name:'Carrot',brand:'',cal:41,prot:0.9,fat:0.2,carb:9.6,custom:false},
  {id:'df44',name:'Onion',brand:'',cal:40,prot:1.1,fat:0.1,carb:9.3,custom:false},
  {id:'df45',name:'Bell Pepper',brand:'',cal:31,prot:1,fat:0.3,carb:6,custom:false},
  {id:'df46',name:'Mushrooms',brand:'',cal:22,prot:3.1,fat:0.3,carb:3.3,custom:false},
  {id:'df47',name:'Watermelon',brand:'',cal:30,prot:0.6,fat:0.2,carb:7.6,custom:false},
  {id:'df48',name:'Orange',brand:'',cal:47,prot:0.9,fat:0.1,carb:11.8,custom:false},
  {id:'df49',name:'Strawberry',brand:'',cal:32,prot:0.7,fat:0.3,carb:7.7,custom:false},
  {id:'df50',name:'Blueberry',brand:'',cal:57,prot:0.7,fat:0.3,carb:14.5,custom:false},
  {id:'df51',name:'Milk (skim)',brand:'',cal:34,prot:3.4,fat:0.1,carb:5,custom:false},
  {id:'df52',name:'Beef Steak',brand:'',cal:271,prot:26,fat:18,carb:0,custom:false},
  {id:'df53',name:'Ground Beef (lean)',brand:'',cal:176,prot:20,fat:10,carb:0,custom:false},
];

function ls(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch{return d}}
function ss(k,v){localStorage.setItem(k,JSON.stringify(v))}

function getGoals(){return ls('mt_goals',{cal:2000,prot:150,fat:65,carb:250})}
function setGoals(g){ss('mt_goals',g)}
function getFoods(){return ls('mt_foods',[])}
function setFoods(f){ss('mt_foods',f)}
function getFavs(){return ls('mt_favs',[])}
function setFavs(f){ss('mt_favs',f)}
function isDark(){return ls('mt_dark',true)}
function setDark(v){ss('mt_dark',v)}

/*
  NEW MEAL SCHEMA (mt_meals):
  Each meal is a grouped object:
  {
    id: string,
    date: 'YYYY-MM-DD',
    type: 'breakfast'|'lunch'|'dinner'|'other',
    items: [
      { id, foodId, foodName, grams, cal, prot, fat, carb }
    ]
  }

  MIGRATION: Old mt_logs (flat entries) are converted to grouped meals on init.
*/
function getMeals(){return ls('mt_meals',[])}
function setMeals(m){ss('mt_meals',m)}

function allFoods(){
  const custom = getFoods();
  const all = [...DEFAULT_FOODS,...custom];
  const favs = getFavs();
  return all.map(f=>({...f,fav:favs.includes(f.id)}));
}
function dateKey(d){
  const y=d.getFullYear();
  const m=String(d.getMonth()+1).padStart(2,'0');
  const day=String(d.getDate()).padStart(2,'0');
  return `${y}-${m}-${day}`;
}
function todayKey(){return dateKey(new Date())}
function mealsForDate(dk){return getMeals().filter(m=>m.date===dk)}
function uid(){return 'u'+Date.now().toString(36)+Math.random().toString(36).slice(2,7)}
function r1(n){return Math.round(n*10)/10}
function esc(s){const d=document.createElement('div');d.textContent=s;return d.innerHTML}

/* Migrate old flat logs to grouped meals (one-time) */
function migrateOldLogs(){
  const oldLogs = ls('mt_logs',null);
  if(!oldLogs || !oldLogs.length) return;
  const existing = getMeals();
  // Group old logs by date+meal
  const groups = {};
  oldLogs.forEach(l=>{
    const key = l.date+'|'+l.meal;
    if(!groups[key]) groups[key]={date:l.date,type:l.meal==='snack'?'other':l.meal,items:[]};
    groups[key].items.push({
      id:l.id,foodId:l.foodId,foodName:l.foodName,grams:l.grams,
      cal:l.cal,prot:l.prot,fat:l.fat,carb:l.carb
    });
  });
  const migrated = Object.values(groups).map(g=>({id:uid(),date:g.date,type:g.type,items:g.items}));
  setMeals([...existing,...migrated]);
  localStorage.removeItem('mt_logs');
  localStorage.removeItem('mt_recent');
}

/* ============================================================
   TAB NAVIGATION
   ============================================================ */
function switchTab(name,btn){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.tab-bar button').forEach(b=>b.classList.remove('active'));
  document.getElementById('page'+name).classList.add('active');
  if(btn)btn.classList.add('active');
  if(name==='Dashboard')renderDashboard();
  if(name==='Log')renderLogPage();
  if(name==='Foods')renderMyFoods();
  if(name==='History')renderHistory();
  if(name==='Settings')renderSettings();
}

/* ============================================================
   TOAST
   ============================================================ */
function toast(msg){
  const t=document.getElementById('toast');
  t.textContent=msg;t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2000);
}

/* ============================================================
   CONFIRM DIALOG
   ============================================================ */
let confirmCb=null;
function showConfirm(msg,label,cb){
  document.getElementById('confirmMsg').textContent=msg;
  document.getElementById('confirmBtn').textContent=label||'Delete';
  confirmCb=cb;
  document.getElementById('confirmOverlay').classList.add('open');
}
function closeConfirm(){document.getElementById('confirmOverlay').classList.remove('open');confirmCb=null}

/* ============================================================
   DASHBOARD
   ============================================================ */
function renderDashboard(){
  const dk = todayKey();
  const meals = mealsForDate(dk);
  const goals = getGoals();
  const d = new Date();
  document.getElementById('dashDate').textContent = d.toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric'});

  let totCal=0,totProt=0,totFat=0,totCarb=0;
  meals.forEach(m=>m.items.forEach(i=>{totCal+=i.cal;totProt+=i.prot;totFat+=i.fat;totCarb+=i.carb}));

  const remaining = Math.max(0, goals.cal - totCal);
  const pct = Math.min(totCal / goals.cal, 1);
  const circumference = 2 * Math.PI * 85;
  const offset = circumference - (pct * circumference);

  const ringFill = document.getElementById('calRingFill');
  let ringColor = 'var(--green)';
  if(totCal/goals.cal >= 1) ringColor = 'var(--red)';
  else if(totCal/goals.cal >= .8) ringColor = 'var(--yellow)';
  ringFill.setAttribute('stroke', ringColor);
  ringFill.setAttribute('stroke-dashoffset', offset);

  document.getElementById('calRemaining').textContent = totCal >= goals.cal ? '0' : Math.round(remaining);
  document.getElementById('calOf').textContent = `${Math.round(totCal)} / ${goals.cal} kcal`;

  const macros = [
    {name:'Protein',cur:totProt,goal:goals.prot,color:'var(--blue)',letter:'P'},
    {name:'Fat',cur:totFat,goal:goals.fat,color:'var(--orange)',letter:'F'},
    {name:'Carbs',cur:totCarb,goal:goals.carb,color:'var(--purple)',letter:'C'},
  ];
  document.getElementById('macroBars').innerHTML = macros.map(m=>{
    const p = Math.min(m.cur/m.goal*100,100);
    const remain = Math.max(0,m.goal-m.cur);
    let barColor = m.color;
    if(m.cur/m.goal>=1) barColor='var(--red)';
    else if(m.cur/m.goal>=.8) barColor='var(--yellow)';
    return `<div class="macro-row">
      <div class="macro-icon" style="background:${m.color}">${m.letter}</div>
      <div class="macro-info">
        <div class="top"><span>${m.name}</span><span>${Math.round(m.cur)}/${m.goal}g (${Math.round(remain)}g left)</span></div>
        <div class="macro-bar-bg"><div class="macro-bar-fill" style="width:${p}%;background:${barColor}"></div></div>
      </div>
    </div>`;
  }).join('');

  // Meal summary chips
  const mealTypes = ['breakfast','lunch','dinner','other'];
  const mealLabels = {breakfast:'Breakfast',lunch:'Lunch',dinner:'Dinner',other:'Other'};
  const mealColors = {breakfast:'#FF9F0A',lunch:'#5AC8FA',dinner:'#BF5AF2',other:'#8E8E93'};
  document.getElementById('mealSummary').innerHTML = mealTypes.map(mt=>{
    const c = meals.filter(m=>m.type===mt).reduce((s,m)=>s+m.items.reduce((a,i)=>a+i.cal,0),0);
    return `<div class="meal-chip">${mealLabels[mt]} <span>${Math.round(c)} kcal</span></div>`;
  }).join('');

  // Grouped meal cards
  document.getElementById('dashMealSections').innerHTML = meals.length ? meals.map(m=>{
    const totalCal = m.items.reduce((s,i)=>s+i.cal,0);
    const totalProt = m.items.reduce((s,i)=>s+i.prot,0);
    const totalFat = m.items.reduce((s,i)=>s+i.fat,0);
    const totalCarb = m.items.reduce((s,i)=>s+i.carb,0);
    const color = mealColors[m.type]||'#8E8E93';
    return `<div class="dash-meal-card">
      <div class="dash-meal-header" onclick="toggleDashMeal(this)">
        <div class="left">
          <div class="meal-type-dot" style="background:${color}"></div>
          <div>
            <div class="meal-title">${mealLabels[m.type]||'Other'}</div>
            <div class="meal-meta">${m.items.length} item${m.items.length!==1?'s':''} &middot; P:${r1(totalProt)}g F:${r1(totalFat)}g C:${r1(totalCarb)}g</div>
          </div>
        </div>
        <div class="right">
          <div class="meal-cal">${Math.round(totalCal)}</div>
          <span class="chevron">&#9660;</span>
        </div>
      </div>
      <div class="dash-meal-body">
        ${m.items.map(i=>`<div class="dash-meal-item">
          <div>
            <div class="item-name">${esc(i.foodName)}</div>
            <div class="item-meta">${i.grams}g &middot; P:${r1(i.prot)}g F:${r1(i.fat)}g C:${r1(i.carb)}g</div>
          </div>
          <div class="item-cal">${Math.round(i.cal)} kcal</div>
        </div>`).join('')}
      </div>
      <div class="dash-meal-actions">
        <button onclick="editMeal('${m.id}')">&#9998; Edit</button>
        <button onclick="deleteMeal('${m.id}')">&#128465; Delete</button>
      </div>
    </div>`;
  }).join('') : '<p style="text-align:center;color:var(--text2);padding:30px 0">No meals logged today. Tap Log to get started!</p>';
}

function toggleDashMeal(header){
  header.classList.toggle('collapsed');
}

/* ============================================================
   LOG MEAL PAGE - Meal Type Selection
   ============================================================ */
function renderLogPage(){
  // The page just shows the 4 meal type cards — static HTML, nothing dynamic needed
}

function openMealBuilder(type){
  builderMealType = type;
  builderItems = [];
  builderEditingMealId = null;
  const labels = {breakfast:'Breakfast',lunch:'Lunch',dinner:'Dinner',other:'Other'};
  document.getElementById('builderTitle').textContent = labels[type]||'Other';
  document.getElementById('builderSearch').value = '';
  renderBuilderFoods();
  renderBuilderTray();
  document.getElementById('builderOverlay').classList.add('open');
}

/* ============================================================
   MEAL BUILDER
   ============================================================ */
let builderMealType = 'breakfast';
let builderItems = []; // {id,foodId,foodName,grams,cal,prot,fat,carb}
let builderEditingMealId = null;

function renderBuilderFoods(){
  const q = (document.getElementById('builderSearch')?.value||'').toLowerCase();
  let foods = allFoods();
  if(q) foods = foods.filter(f=>f.name.toLowerCase().includes(q)||(f.brand&&f.brand.toLowerCase().includes(q)));
  foods.sort((a,b)=>(b.fav?1:0)-(a.fav?1:0));
  document.getElementById('builderFoodList').innerHTML = foods.length ? foods.map(f=>`
    <div class="builder-food-item" onclick="openGramInput('${f.id}')">
      <div class="info">
        <div class="name">${f.fav?'&#11088; ':''}${esc(f.name)}</div>
        <div class="macros-sm">${f.cal} kcal &middot; P:${r1(f.prot)} F:${r1(f.fat)} C:${r1(f.carb)} /100g</div>
      </div>
      <div class="add-btn">+</div>
    </div>
  `).join('') : '<p style="text-align:center;color:var(--text2);padding:30px">No foods found</p>';
}

function renderBuilderTray(){
  const tray = document.getElementById('builderTray');
  const count = builderItems.length;
  document.getElementById('trayCount').textContent = count;

  if(!count){
    document.getElementById('trayItemsList').innerHTML = '<p style="text-align:center;color:var(--text2);padding:16px;font-size:14px">Add foods to your meal</p>';
    document.getElementById('builderTotals').innerHTML = '';
    document.getElementById('builderSaveBtn').disabled = true;
    document.getElementById('builderSaveBtn').style.opacity = '0.4';
    return;
  }

  document.getElementById('builderSaveBtn').disabled = false;
  document.getElementById('builderSaveBtn').style.opacity = '1';

  document.getElementById('trayItemsList').innerHTML = builderItems.map((item,idx)=>`
    <div class="tray-item">
      <div class="info">
        <div class="name">${esc(item.foodName)}</div>
        <div class="meta">${item.grams}g &middot; P:${r1(item.prot)}g F:${r1(item.fat)}g C:${r1(item.carb)}g</div>
      </div>
      <div class="cal">${Math.round(item.cal)}</div>
      <button class="remove-btn" onclick="removeBuilderItem(${idx})">&#10005;</button>
    </div>
  `).join('');

  const totals = builderItems.reduce((t,i)=>({cal:t.cal+i.cal,prot:t.prot+i.prot,fat:t.fat+i.fat,carb:t.carb+i.carb}),{cal:0,prot:0,fat:0,carb:0});
  document.getElementById('builderTotals').innerHTML = `
    <div class="total-cal">${Math.round(totals.cal)} kcal</div>
    <div class="total-macros">
      <span style="color:var(--blue)">P:${r1(totals.prot)}g</span> &middot;
      <span style="color:var(--orange)">F:${r1(totals.fat)}g</span> &middot;
      <span style="color:var(--purple)">C:${r1(totals.carb)}g</span>
    </div>
  `;
}

function removeBuilderItem(idx){
  builderItems.splice(idx,1);
  renderBuilderTray();
}

function closeBuilder(){
  document.getElementById('builderOverlay').classList.remove('open');
}

function saveMealFromBuilder(){
  if(!builderItems.length) return;
  const meals = getMeals();
  if(builderEditingMealId){
    const idx = meals.findIndex(m=>m.id===builderEditingMealId);
    if(idx>=0){
      meals[idx].type = builderMealType;
      meals[idx].items = builderItems;
    }
  } else {
    meals.push({id:uid(),date:todayKey(),type:builderMealType,items:builderItems});
  }
  setMeals(meals);
  closeBuilder();
  toast(builderEditingMealId?'Meal updated!':'Meal logged!');
  renderDashboard();
}

/* Gram input popup */
let gramFood = null;

function openGramInput(foodId){
  const foods = allFoods();
  gramFood = foods.find(f=>f.id===foodId);
  if(!gramFood) return;
  document.getElementById('gramFoodName').textContent = gramFood.name;
  document.getElementById('gramFoodMeta').textContent = `${gramFood.cal} kcal per 100g`;
  document.getElementById('gramInput').value = 100;
  updateGramPreview();
  document.getElementById('gramOverlay').classList.add('open');
  document.getElementById('gramInput').focus();
}

function updateGramPreview(){
  if(!gramFood) return;
  const g = parseFloat(document.getElementById('gramInput').value)||0;
  const cal = (gramFood.cal/100)*g;
  const prot = (gramFood.prot/100)*g;
  const fat = (gramFood.fat/100)*g;
  const carb = (gramFood.carb/100)*g;
  document.getElementById('gramPreview').innerHTML = `
    <span class="highlight">${Math.round(cal)} kcal</span> &middot;
    P:${r1(prot)}g F:${r1(fat)}g C:${r1(carb)}g
  `;
}

function closeGramInput(){
  document.getElementById('gramOverlay').classList.remove('open');
  gramFood=null;
}

function confirmGramInput(){
  if(!gramFood) return;
  const g = parseFloat(document.getElementById('gramInput').value);
  if(!g||g<=0){toast('Enter valid grams');return}
  const cal = (gramFood.cal/100)*g;
  const prot = (gramFood.prot/100)*g;
  const fat = (gramFood.fat/100)*g;
  const carb = (gramFood.carb/100)*g;
  builderItems.push({
    id:uid(),foodId:gramFood.id,foodName:gramFood.name,
    grams:g,cal,prot,fat,carb
  });
  closeGramInput();
  renderBuilderTray();
}

/* Edit / delete meals from dashboard */
function editMeal(mealId){
  const meals = getMeals();
  const meal = meals.find(m=>m.id===mealId);
  if(!meal) return;
  builderMealType = meal.type;
  builderItems = meal.items.map(i=>({...i}));
  builderEditingMealId = mealId;
  const labels = {breakfast:'Breakfast',lunch:'Lunch',dinner:'Dinner',other:'Other'};
  document.getElementById('builderTitle').textContent = 'Edit '+labels[meal.type];
  document.getElementById('builderSearch').value = '';
  renderBuilderFoods();
  renderBuilderTray();
  document.getElementById('builderOverlay').classList.add('open');
}

function deleteMeal(mealId){
  showConfirm('Delete this entire meal?','Delete',()=>{
    setMeals(getMeals().filter(m=>m.id!==mealId));
    toast('Meal deleted');
    renderDashboard();
  });
}

/* ============================================================
   MY FOODS PAGE
   ============================================================ */
let editingFoodId = null;

function renderMyFoods(){
  const q = (document.getElementById('foodSearch')?.value||'').toLowerCase();
  let foods = allFoods();
  if(q) foods = foods.filter(f=>f.name.toLowerCase().includes(q)||(f.brand&&f.brand.toLowerCase().includes(q)));
  foods.sort((a,b)=>(b.fav?1:0)-(a.fav?1:0)||(a.custom===b.custom?0:a.custom?-1:1));
  document.getElementById('myFoodList').innerHTML = foods.map(f=>`
    <div class="food-item">
      <button class="fav-btn" onclick="event.stopPropagation();toggleFav('${f.id}')">${f.fav?'&#11088;':'&#9734;'}</button>
      <div class="info">
        <div class="name">${esc(f.name)}${f.custom?' <span style="font-size:11px;color:var(--green)">(custom)</span>':''}</div>
        ${f.brand?`<div class="brand">${esc(f.brand)}</div>`:''}
        <div class="macros-sm">${f.cal} kcal | P:${r1(f.prot)}g F:${r1(f.fat)}g C:${r1(f.carb)}g per 100g</div>
      </div>
      ${f.custom?`<div class="edit-actions">
        <button onclick="event.stopPropagation();editFood('${f.id}')" title="Edit">&#9998;</button>
        <button onclick="event.stopPropagation();deleteFood('${f.id}')" title="Delete">&#128465;</button>
      </div>`:''}
    </div>
  `).join('');
}

function toggleFav(id){
  const favs=getFavs();
  const idx=favs.indexOf(id);
  if(idx>=0)favs.splice(idx,1);else favs.push(id);
  setFavs(favs);
  renderMyFoods();
}

function openFoodModal(food){
  editingFoodId=food?food.id:null;
  document.getElementById('foodModalTitle').textContent=food?'Edit Food':'Add Food';
  document.getElementById('fmName').value=food?food.name:'';
  document.getElementById('fmBrand').value=food?food.brand:'';
  document.getElementById('fmCal').value=food?food.cal:'';
  document.getElementById('fmProt').value=food?food.prot:'';
  document.getElementById('fmFat').value=food?food.fat:'';
  document.getElementById('fmCarb').value=food?food.carb:'';
  document.getElementById('fmSave').textContent=food?'Update Food':'Add Food';
  document.getElementById('foodModal').classList.add('open');
}
function closeFoodModal(){document.getElementById('foodModal').classList.remove('open');editingFoodId=null}

function saveFood(){
  const name=document.getElementById('fmName').value.trim();
  if(!name){toast('Name is required');return}
  const food={
    id:editingFoodId||uid(),
    name,
    brand:document.getElementById('fmBrand').value.trim(),
    cal:parseFloat(document.getElementById('fmCal').value)||0,
    prot:parseFloat(document.getElementById('fmProt').value)||0,
    fat:parseFloat(document.getElementById('fmFat').value)||0,
    carb:parseFloat(document.getElementById('fmCarb').value)||0,
    custom:true
  };
  const foods=getFoods();
  if(editingFoodId){
    const idx=foods.findIndex(f=>f.id===editingFoodId);
    if(idx>=0)foods[idx]=food;else foods.push(food);
  }else{foods.push(food)}
  setFoods(foods);
  closeFoodModal();
  toast(editingFoodId?'Food updated':'Food added!');
  renderMyFoods();
}

function editFood(id){
  const foods=getFoods();
  const f=foods.find(x=>x.id===id);
  if(f)openFoodModal(f);
}

function deleteFood(id){
  showConfirm('Delete this food?','Delete',()=>{
    setFoods(getFoods().filter(f=>f.id!==id));
    setFavs(getFavs().filter(f=>f!==id));
    toast('Food deleted');
    renderMyFoods();
  });
}

/* ============================================================
   HISTORY PAGE
   ============================================================ */
let histDate = new Date();
let histWeekStart = getWeekStart(new Date());
let histTab = 'day';
let weeklyChartInst = null;

function getWeekStart(d){
  const r=new Date(d);r.setDate(r.getDate()-r.getDay()+1);
  r.setHours(0,0,0,0);return r;
}

function setHistoryTab(tab,btn){
  histTab=tab;
  btn.parentElement.querySelectorAll('.seg-tab').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('historyDay').style.display=tab==='day'?'':'none';
  document.getElementById('historyWeek').style.display=tab==='week'?'':'none';
  renderHistory();
}

function renderHistory(){
  if(histTab==='day') renderHistoryDay();
  else renderHistoryWeek();
}

function histNavDay(dir){
  histDate.setDate(histDate.getDate()+dir);
  renderHistoryDay();
}

function renderHistoryDay(){
  const dk=dateKey(histDate);
  const meals=mealsForDate(dk);
  const goals=getGoals();
  document.getElementById('histDateDisplay').textContent=histDate.toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric',year:'numeric'});

  let t={cal:0,prot:0,fat:0,carb:0};
  meals.forEach(m=>m.items.forEach(i=>{t.cal+=i.cal;t.prot+=i.prot;t.fat+=i.fat;t.carb+=i.carb}));

  document.getElementById('histDaySummary').innerHTML=`
    <div class="day-stat"><div class="val" style="color:var(--green)">${Math.round(t.cal)}</div><div class="lbl">kcal</div></div>
    <div class="day-stat"><div class="val" style="color:var(--blue)">${r1(t.prot)}g</div><div class="lbl">Protein</div></div>
    <div class="day-stat"><div class="val" style="color:var(--orange)">${r1(t.fat)}g</div><div class="lbl">Fat</div></div>
    <div class="day-stat"><div class="val" style="color:var(--purple)">${r1(t.carb)}g</div><div class="lbl">Carbs</div></div>
  `;

  const mealLabels={breakfast:'Breakfast',lunch:'Lunch',dinner:'Dinner',other:'Other'};
  document.getElementById('histDayEntries').innerHTML = meals.length ? meals.map(m=>{
    const mCal = m.items.reduce((s,i)=>s+i.cal,0);
    return `<div class="card" style="padding:12px">
      <h3 style="font-size:15px;margin-bottom:8px">${mealLabels[m.type]||'Other'} <span style="color:var(--text2);font-weight:400;font-size:13px">${Math.round(mCal)} kcal</span></h3>
      ${m.items.map(e=>`<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--border)">
        <div><span style="font-weight:600">${esc(e.foodName)}</span> <span style="color:var(--text2);font-size:12px">${e.grams}g</span></div>
        <span style="font-weight:700;color:var(--green)">${Math.round(e.cal)}</span>
      </div>`).join('')}
    </div>`;
  }).join('') : '<p style="text-align:center;color:var(--text2);padding:40px">No entries for this day</p>';
}

function histNavWeek(dir){
  histWeekStart.setDate(histWeekStart.getDate()+(dir*7));
  renderHistoryWeek();
}

function renderHistoryWeek(){
  const goals=getGoals();
  const days=[];
  for(let i=0;i<7;i++){
    const d=new Date(histWeekStart);d.setDate(d.getDate()+i);
    days.push(d);
  }
  const wEnd=new Date(days[6]);
  document.getElementById('histWeekDisplay').textContent=`${days[0].toLocaleDateString('en-US',{month:'short',day:'numeric'})} - ${wEnd.toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'})}`;

  const dayData=days.map(d=>{
    const meals=mealsForDate(dateKey(d));
    let t={cal:0,prot:0};
    meals.forEach(m=>m.items.forEach(i=>{t.cal+=i.cal;t.prot+=i.prot}));
    return t;
  });

  const avgCal=dayData.reduce((s,d)=>s+d.cal,0)/7;
  const avgProt=dayData.reduce((s,d)=>s+d.prot,0)/7;
  const daysOnGoal=dayData.filter(d=>d.cal>0&&d.cal<=goals.cal*1.05).length;

  document.getElementById('histWeekSummary').innerHTML=`
    <div class="day-stat"><div class="val" style="color:var(--green)">${Math.round(avgCal)}</div><div class="lbl">Avg Cal</div></div>
    <div class="day-stat"><div class="val" style="color:var(--blue)">${r1(avgProt)}g</div><div class="lbl">Avg Prot</div></div>
    <div class="day-stat"><div class="val">${Math.round(daysOnGoal/7*100)}%</div><div class="lbl">On Goal</div></div>
  `;

  const labels=days.map(d=>d.toLocaleDateString('en-US',{weekday:'short'}));
  const calData=dayData.map(d=>Math.round(d.cal));
  const protData=dayData.map(d=>r1(d.prot));

  if(weeklyChartInst){weeklyChartInst.destroy()}
  const ctx=document.getElementById('weeklyChart').getContext('2d');
  weeklyChartInst=new Chart(ctx,{
    type:'bar',
    data:{
      labels,
      datasets:[
        {label:'Calories',data:calData,backgroundColor:'rgba(76,217,100,.7)',borderRadius:6,yAxisID:'y'},
        {label:'Protein (g)',data:protData,backgroundColor:'rgba(90,200,250,.7)',borderRadius:6,yAxisID:'y1'}
      ]
    },
    options:{
      responsive:true,
      maintainAspectRatio:false,
      plugins:{legend:{labels:{color:'#8E8E93',font:{family:'-apple-system,BlinkMacSystemFont,sans-serif'}}}},
      scales:{
        x:{ticks:{color:'#8E8E93'},grid:{color:'rgba(44,44,46,.5)'}},
        y:{position:'left',ticks:{color:'#8E8E93'},grid:{color:'rgba(44,44,46,.3)'},title:{display:true,text:'kcal',color:'#8E8E93'}},
        y1:{position:'right',ticks:{color:'#8E8E93'},grid:{display:false},title:{display:true,text:'g',color:'#8E8E93'}}
      }
    }
  });
}

/* ============================================================
   SETTINGS PAGE
   ============================================================ */
function renderSettings(){
  const g=getGoals();
  document.getElementById('goalCal').value=g.cal;
  document.getElementById('goalProt').value=g.prot;
  document.getElementById('goalFat').value=g.fat;
  document.getElementById('goalCarb').value=g.carb;
  const toggle=document.getElementById('darkToggle');
  if(isDark()){toggle.classList.add('on')}else{toggle.classList.remove('on')}
}

function saveGoals(){
  setGoals({
    cal:parseInt(document.getElementById('goalCal').value)||2000,
    prot:parseInt(document.getElementById('goalProt').value)||150,
    fat:parseInt(document.getElementById('goalFat').value)||65,
    carb:parseInt(document.getElementById('goalCarb').value)||250,
  });
  toast('Goals saved!');
}

function toggleDark(){
  const dark=!isDark();
  setDark(dark);
  document.body.classList.toggle('light',!dark);
  document.getElementById('darkToggle').classList.toggle('on',dark);
  if(histTab==='week')renderHistoryWeek();
}

function exportData(){
  const data={
    goals:getGoals(),foods:getFoods(),favs:getFavs(),
    meals:getMeals(),dark:isDark()
  };
  const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);
  a.download='macrotrack-backup.json';
  a.click();
  URL.revokeObjectURL(a.href);
  toast('Data exported!');
}

function importData(e){
  const file=e.target.files[0];
  if(!file)return;
  const reader=new FileReader();
  reader.onload=function(ev){
    try{
      const data=JSON.parse(ev.target.result);
      if(data.goals)setGoals(data.goals);
      if(data.foods)setFoods(data.foods);
      if(data.favs)setFavs(data.favs);
      if(data.meals)setMeals(data.meals);
      if(typeof data.dark==='boolean'){setDark(data.dark);document.body.classList.toggle('light',!data.dark)}
      toast('Data imported!');
      renderDashboard();renderSettings();
    }catch{toast('Invalid file')}
  };
  reader.readAsText(file);
  e.target.value='';
}

function clearAllData(){
  showConfirm('Delete ALL data? This cannot be undone.','Clear All',()=>{
    ['mt_goals','mt_foods','mt_favs','mt_meals','mt_dark'].forEach(k=>localStorage.removeItem(k));
    document.body.classList.remove('light');
    toast('All data cleared');
    renderDashboard();renderSettings();
  });
}

/* ============================================================
   INIT
   ============================================================ */
(function init(){
  if(!isDark()) document.body.classList.add('light');
  migrateOldLogs();
  if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/service-worker.js').catch(()=>{});
  }
  document.getElementById('confirmBtn').addEventListener('click',()=>{if(confirmCb)confirmCb();closeConfirm()});
  document.getElementById('builderSearch').addEventListener('input',renderBuilderFoods);
  document.getElementById('gramInput').addEventListener('input',updateGramPreview);
  document.getElementById('foodSearch').addEventListener('input',renderMyFoods);
  renderDashboard();
})();
