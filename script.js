// Sample Workout A, B, and C movements and repetitions. The wider 90-day
// progression and weekly schedule remain unknown, so this file does not invent them.
const plans = {
  one: {
    kicker: 'WORKOUT A · SAMPLE', title: 'Workout A', time: '3 rounds',
    copy: 'Sample movements and repetitions. Choose loads that suit your current ability and move with control.',
    moves: [['Goblet squat', '3 × 10 · load not specified'], ['Bench press', '3 × 10 · equipment/load not specified'], ['Single-arm row', '3 × 10 each arm · load not specified'], ["Farmer’s carry", '60 seconds each round · 3 rounds · load not specified']]
  },
  two: {
    kicker: 'WORKOUT B · SAMPLE', title: 'Workout B', time: '100 swings total',
    copy: 'The sample lists 100 swings total. Only use a volume and pace that match your current skill and conditioning; stop if form breaks down.',
    moves: [['Kettlebell swings', '10 × 10 reps · 100 total'], ['Strict press', '3 × 10 · implement/load not specified'], ['Bodyweight reverse lunges', '3 × 10 each leg'], ['Plank', '60 seconds']]
  },
  three: {
    kicker: 'WORKOUT C · SAMPLE', title: 'Workout C', time: '25–35 min · controlled',
    copy: 'Rest 60–90 seconds between sets. Keep 2–3 good reps in reserve. For step-ups or sit-to-stands, choose the option that feels comfortable for your knees and ankles.',
    moves: [['Dumbbell Romanian deadlift', '2 × 10 · choose a manageable load'], ['Low step-ups or chair sit-to-stands', '2 × 8 each leg OR 10 sit-to-stands · bodyweight'], ['Dumbbell floor press', '3 × 10 · choose a manageable load'], ['Suitcase carry', '2 × 20–30 sec each side · choose a manageable load']]
  }
};

const tabs = document.querySelectorAll('.day');
const kicker = document.querySelector('#session-kicker');
const title = document.querySelector('#session-title');
const time = document.querySelector('#session-time');
const copy = document.querySelector('#session-copy');
const moves = document.querySelector('#moves');

function showPlan(key) {
  const plan = plans[key];
  kicker.textContent = plan.kicker;
  title.textContent = plan.title;
  time.textContent = plan.time;
  copy.textContent = plan.copy;
  moves.replaceChildren();
  plan.moves.forEach(([name, detail], index) => {
    const row = document.createElement('div');
    row.className = 'move';
    const number = document.createElement('span');
    number.className = 'move-index';
    number.textContent = String(index + 1).padStart(2, '0');
    const label = document.createElement('span');
    label.textContent = name;
    const amount = document.createElement('small');
    amount.textContent = detail;
    row.append(number, label, amount);
    moves.append(row);
  });
}

tabs.forEach((tab) => tab.addEventListener('click', () => {
  tabs.forEach((item) => {
    const selected = item === tab;
    item.classList.toggle('active', selected);
    item.setAttribute('aria-selected', String(selected));
  });
  showPlan(tab.dataset.day);
}));

showPlan('one');

// A small built-in exercise guide; it works offline and needs no account.
const exerciseLibrary = [
  { name:'Goblet squat', equipment:'Dumbbell or kettlebell', type:'both', pose:'squat', image:{type:'video',src:'https://upload.wikimedia.org/wikipedia/commons/c/c3/Kettlebell_Goblet_Squat.webm',alt:'Taco fleur demonstrates a kettlebell goblet squat in a short video',author:'Taco fleur',authorUrl:'https://commons.wikimedia.org/wiki/User:Taco_fleur',license:'CC BY-SA 4.0',licenseUrl:'https://creativecommons.org/licenses/by-sa/4.0/deed.en',source:'https://commons.wikimedia.org/wiki/File:Kettlebell_Goblet_Squat.webm'}, focus:'Legs · hips', cue:'Hold one weight close to your chest. Sit between your hips, then stand with control.', option:'Make it easier: squat to a chair or use a lighter weight.', steps:['Stand with feet about shoulder-width and hold one weight close to your chest.','Bend your knees and hips together, lowering only as far as you can stay balanced.','Press through your whole foot to stand tall again.'] },
  { name:'Dumbbell bench press', equipment:'Dumbbells · bench', type:'dumbbell', pose:'bench', image:{src:'https://wger.de/media/exercise-images/97/Dumbbell-bench-press-1.png.400x400_q85.jpg',alt:'Wger illustration showing a dumbbell bench press',author:'Everkinetic',license:'CC BY-SA 3.0',licenseUrl:'https://creativecommons.org/licenses/by-sa/3.0/deed.en',source:'https://wger.de/en/exercise/75/view/benchpress-dumbbells'}, focus:'Chest · arms', cue:'Lie on the bench with feet supported. Lower the weights toward your chest, then press up smoothly.', option:'Alternative: use a lighter pair or do a floor press.', steps:['Lie on the bench with your feet supported and weights above your chest.','Bend your elbows and lower the weights with control toward either side of your chest.','Press them back up smoothly without bouncing or forcing your elbows to lock.'] },
  { name:'Single-arm dumbbell row', equipment:'Dumbbell · bench', type:'dumbbell', pose:'row', image:{src:'https://wger.de/media/exercise-images/81/a751a438-ae2d-4751-8d61-cef0e9292174.png.400x400_q85.jpg',alt:'Wger image demonstrating a single-arm dumbbell row',author:'Franpol',license:'CC BY-SA 4.0',licenseUrl:'https://creativecommons.org/licenses/by-sa/4.0/deed.en',source:'https://wger.de/en/exercise/81/view/bent-over-dumbbell-rows-single-arm'}, focus:'Back · arms', cue:'Support one hand on the bench. Pull the weight toward your hip, then lower it slowly.', option:'Keep your back steady; switch sides after the reps.', steps:['Place one hand and knee or foot on the bench; keep your back comfortably steady.','Let the weight hang below your shoulder, then pull your elbow toward your hip.','Lower the weight slowly and complete the same number of reps on the other side.'] },
  { name:'Farmer carry', equipment:'Dumbbells or kettlebells', type:'both', pose:'carry', focus:'Grip · trunk', cue:'Hold a weight in each hand and walk with short, steady steps. Stand tall and breathe normally.', option:'Start light and use a clear, level path.', steps:['Pick up two manageable weights from a stable position.','Stand tall, keep your shoulders relaxed, and walk with short controlled steps.','Set the weights down gently before you get tired or your posture changes.'] },
  { name:'Kettlebell swing', equipment:'Kettlebell', type:'kettlebell', pose:'swing', image:{src:'https://upload.wikimedia.org/wikipedia/commons/3/3b/Kettlebell_swing_with_arms_fully_extended.jpg',alt:'Kettlebell swing with the arms extended forward',author:'Taco fleur',authorUrl:'https://commons.wikimedia.org/wiki/User:Taco_fleur',license:'CC BY-SA 4.0',licenseUrl:'https://creativecommons.org/licenses/by-sa/4.0/deed.en',source:'https://commons.wikimedia.org/wiki/File:Kettlebell_swing_with_arms_fully_extended.jpg'}, focus:'Hips · posterior chain', cue:'Hinge at the hips and let the bell swing between your thighs. Stand tall to send it forward; arms guide, hips drive.', option:'Use only a familiar, manageable bell and a practiced hinge. Otherwise substitute a light RDL.', steps:['Set the bell in front of you, hinge back, and grip it with both hands.','Hike it between your thighs, then snap your hips open to send it forward; keep your arms relaxed.','Let the bell return and hinge back again. Stop if your back position or control changes.'] },
  { name:'Standing strict press', equipment:'Dumbbells or kettlebells', type:'both', pose:'press', image:{src:'https://upload.wikimedia.org/wikipedia/commons/0/08/Girl_doing_dumbbell_shoulder_press.jpg',alt:'Dumbbell shoulder press demonstration',author:'Trainer Academy',authorUrl:'https://traineracademy.org/',license:'CC BY-SA 3.0',licenseUrl:'https://creativecommons.org/licenses/by-sa/3.0/deed.en',source:'https://commons.wikimedia.org/wiki/File:Girl_doing_dumbbell_shoulder_press.jpg'}, focus:'Shoulders · arms', cue:'Start at shoulder height. Keep your ribs comfortably stacked and press overhead without leaning back.', option:'Use one light dumbbell at a time or press seated.', steps:['Stand with feet comfortable and weights at shoulder height.','Brace gently and press up until your arms are overhead, without leaning back.','Lower the weights to your shoulders with control.'] },
  { name:'Reverse lunge', equipment:'Bodyweight', type:'bodyweight', pose:'lunge', image:{src:'https://upload.wikimedia.org/wikipedia/commons/4/45/Rear-lunges-1-1024x1015.png',alt:'Illustration of a reverse lunge',author:'Everkinetic',authorUrl:'https://commons.wikimedia.org/wiki/User:Everkinetic',license:'CC BY-SA 3.0',licenseUrl:'https://creativecommons.org/licenses/by-sa/3.0/deed.en',source:'https://commons.wikimedia.org/wiki/File:Rear-lunges-1-1024x1015.png'}, focus:'Legs · balance', cue:'Step one foot back, lower only as far as comfortable, then push through the front foot to stand.', option:'Hold a wall or chair for balance; shorten the step if needed.', steps:['Stand beside a wall or chair if you want support.','Step one foot back and bend both knees a little, only as far as comfortable.','Push through the front foot to return to standing, then switch legs.'] },
  { name:'Plank', equipment:'Bodyweight', type:'bodyweight', pose:'plank', image:{src:'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/65/Woman_performing_plank_exercise_at_home_gym.jpg/960px-Woman_performing_plank_exercise_at_home_gym.jpg',alt:'Person demonstrating a forearm plank',author:'Shixart1985 / Nenad Stojković',authorUrl:'https://commons.wikimedia.org/wiki/User:Shixart1985',license:'CC BY 2.0',licenseUrl:'https://creativecommons.org/licenses/by/2.0/deed.en',source:'https://commons.wikimedia.org/wiki/File:Woman_performing_plank_exercise_at_home_gym.jpg'}, focus:'Trunk', cue:'Support yourself on forearms and knees or toes. Keep your body steady and breathe; stop before your position sags.', option:'Start with a short hold from your knees.', steps:['Place your forearms on the floor and set your knees down or extend your legs.','Keep your head, trunk, and hips in a comfortable line while breathing steadily.','End the hold before your hips sag or your back feels strained.'] },
  { name:'Dumbbell Romanian deadlift', equipment:'Dumbbells', type:'dumbbell', pose:'hinge', focus:'Hips · hamstrings', cue:'Hold weights in front of your thighs. Push your hips back with a soft knee bend, then stand by bringing your hips forward.', option:'Lower only as far as you can keep a comfortable, steady back.', steps:['Stand tall with weights near your thighs and knees slightly bent.','Push your hips back as the weights slide close down your legs; stop when you feel a comfortable stretch.','Press through your feet and bring your hips forward to stand tall.'] },
  { name:'Low step-up', equipment:'Low step · bodyweight', type:'bodyweight', pose:'stepup', image:{src:'https://upload.wikimedia.org/wikipedia/commons/c/ca/Step_up-CDC_strength_training_for_older_adults.gif',alt:'Centers for Disease Control and Prevention step-up exercise animation',author:'Centers for Disease Control and Prevention',authorUrl:'https://commons.wikimedia.org/wiki/Author:Centers_for_Disease_Control_and_Prevention',license:'Public domain (U.S. federal work)',licenseUrl:'https://commons.wikimedia.org/wiki/File:Step_up-CDC_strength_training_for_older_adults.gif',source:'https://commons.wikimedia.org/wiki/File:Step_up-CDC_strength_training_for_older_adults.gif'}, focus:'Legs · balance', cue:'Use a stable, low step. Place one whole foot on it, stand up smoothly, and step down with control.', option:'Use a chair sit-to-stand if the step feels uncomfortable.', steps:['Choose a low, stable step and stand close to it.','Place one whole foot on the step and push through it to stand up.','Step down slowly and repeat on the same side before switching.'] },
  { name:'Dumbbell floor press', equipment:'Dumbbells · floor', type:'dumbbell', pose:'floorpress', focus:'Chest · arms', cue:'Lie on the floor with knees bent. Lower your upper arms gently to the floor, then press the weights up.', option:'Use a light load and a comfortable range.', steps:['Lie on your back with knees bent and weights above your chest.','Lower your elbows until your upper arms touch the floor gently.','Press the weights up smoothly, then lower them with control.'] },
  { name:'Suitcase carry', equipment:'One dumbbell or kettlebell', type:'both', pose:'suitcase', focus:'Grip · trunk', cue:'Hold one weight at your side. Walk slowly without leaning; switch hands and repeat.', option:'Begin with a light weight and a short distance.', steps:['Pick up one manageable weight and let it rest by your side.','Walk slowly while keeping your trunk upright and shoulders level.','Set it down gently, switch hands, and walk back.'] }
];

const exerciseGrid = document.querySelector('#exercise-grid');
if (exerciseGrid) {
  const search = document.querySelector('#exercise-search');
  const filters = document.querySelectorAll('.exercise-filter');
  const empty = document.querySelector('#exercise-empty');
  const count = document.querySelector('#exercise-count');
  let activeFilter = 'all';
  function exerciseVisual(exercise) {
    const visual = document.createElement('div');
    visual.className = 'exercise-visual';
    if (!exercise.image) {
      const note = document.createElement('p');
      note.className = 'exercise-image-unavailable';
      note.textContent = 'No verified matching openly licensed reference image is available for this movement yet.';
      const browse = document.createElement('a');
      browse.href = 'https://commons.wikimedia.org/wiki/Commons:Licensing';
      browse.target = '_blank';
      browse.rel = 'noopener noreferrer';
      browse.textContent = 'About image licenses ↗';
      visual.append(note, browse);
      return visual;
    }
    let media;
    if (exercise.image.type === 'video') {
      media = document.createElement('video');
      media.className = 'exercise-reference-video';
      media.controls = true;
      media.preload = 'none';
      media.playsInline = true;
      media.setAttribute('aria-label', exercise.image.alt);
      const videoSource = document.createElement('source');
      videoSource.src = exercise.image.src;
      videoSource.type = 'video/webm';
      media.append(videoSource);
    } else {
      media = document.createElement('img');
      media.className = 'exercise-reference-image';
      media.src = exercise.image.src;
      media.alt = exercise.image.alt;
      media.loading = 'lazy';
      media.referrerPolicy = 'no-referrer';
    }
    const credit = document.createElement('p');
    credit.className = 'exercise-image-credit';
    credit.append(document.createTextNode((exercise.image.type === 'video' ? 'Video: ' : 'Image: ')));
    if (exercise.image.authorUrl) {
      const authorLink = document.createElement('a');
      authorLink.href = exercise.image.authorUrl;
      authorLink.target = '_blank';
      authorLink.rel = 'noopener noreferrer';
      authorLink.textContent = exercise.image.author;
      credit.append(authorLink);
    } else credit.append(document.createTextNode(exercise.image.author));
    credit.append(document.createTextNode(' · '));
    const licenseLink = document.createElement('a');
    licenseLink.href = exercise.image.licenseUrl;
    licenseLink.target = '_blank';
    licenseLink.rel = 'noopener noreferrer';
    licenseLink.textContent = exercise.image.license;
    const sourceLink = document.createElement('a');
    sourceLink.href = exercise.image.source;
    sourceLink.target = '_blank';
    sourceLink.rel = 'noopener noreferrer';
    sourceLink.textContent = exercise.image.source.includes('wger.de') ? 'wger source' : 'Commons source';
    credit.append(licenseLink, document.createTextNode(' · '), sourceLink);
    visual.append(media, credit);
    return visual;
  }
  function renderExercises() {
    const query = search.value.trim().toLowerCase();
    const matches = exerciseLibrary.filter((exercise) => {
      const textMatch = `${exercise.name} ${exercise.equipment} ${exercise.focus} ${exercise.cue}`.toLowerCase().includes(query);
      const equipmentMatch = activeFilter === 'all' || exercise.type === activeFilter || exercise.type === 'both';
      return textMatch && equipmentMatch;
    });
    exerciseGrid.replaceChildren();
    matches.forEach((exercise, index) => {
      const card = document.createElement('article');
      card.className = 'exercise-card';
      const top = document.createElement('div'); top.className = 'exercise-card-top';
      const number = document.createElement('span'); number.className = 'exercise-number'; number.textContent = String(index + 1).padStart(2, '0');
      const focus = document.createElement('span'); focus.className = 'exercise-focus'; focus.textContent = exercise.focus;
      top.append(number, focus);
      const heading = document.createElement('h4'); heading.textContent = exercise.name;
      const equipment = document.createElement('p'); equipment.className = 'exercise-equipment'; equipment.textContent = exercise.equipment;
      const cue = document.createElement('p'); cue.className = 'exercise-cue'; cue.textContent = exercise.cue;
      const option = document.createElement('p'); option.className = 'exercise-option'; option.textContent = exercise.option;
      const detail = document.createElement('details'); detail.className = 'exercise-details';
      const summary = document.createElement('summary'); summary.textContent = exercise.image ? 'See reference media & steps' : 'See steps';
      const illustration = exerciseVisual(exercise);
      const stepsHeading = document.createElement('h5'); stepsHeading.textContent = 'How to do it';
      const steps = document.createElement('ol');
      exercise.steps.forEach((step) => { const item = document.createElement('li'); item.textContent = step; steps.append(item); });
      const pictureNote = document.createElement('p'); pictureNote.className = 'illustration-note'; pictureNote.textContent = 'Images, video, and animation are references; follow the written steps and use a comfortable range of motion.';
      detail.append(summary, illustration, stepsHeading, steps, pictureNote);
      card.append(top, heading, equipment, cue, option, detail);
      exerciseGrid.append(card);
    });
    empty.hidden = matches.length !== 0;
    count.textContent = `${matches.length} ${matches.length === 1 ? 'movement' : 'movements'}`;
  }
  search.addEventListener('input', renderExercises);
  filters.forEach((button) => button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    filters.forEach((item) => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    renderExercises();
  }));
  renderExercises();
}

// Food entries and optional daily targets stay in this browser only.
const manualFoodForm = document.querySelector('#manual-food-form');
if (manualFoodForm) {
  const foodLogDate = document.querySelector('#food-log-date');
  const foodLogList = document.querySelector('#food-log-list');
  const foodEntryCount = document.querySelector('#food-entry-count');
  const calorieTarget = document.querySelector('#food-calorie-target');
  const proteinTarget = document.querySelector('#food-protein-target');
  const targetSummary = document.querySelector('#food-target-summary');
  const foodLogStorageKey = 'steadyStrong.foodEntries.v1';
  const targetStorageKey = 'steadyStrong.foodTargets.v1';
  const foodTotalIds = { calories: '#food-total-calories', protein: '#food-total-protein', carbs: '#food-total-carbs', fat: '#food-total-fat' };
  let foodEntries = [];
  try {
    const saved = JSON.parse(localStorage.getItem(foodLogStorageKey) || '[]');
    if (Array.isArray(saved)) foodEntries = saved.filter((entry) => entry && /^\d{4}-\d{2}-\d{2}$/.test(entry.date) && typeof entry.name === 'string' && Number.isFinite(Number(entry.calories)));
  } catch { /* The page still works without browser storage. */ }

  const now = new Date();
  const localToday = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  foodLogDate.value = localToday;
  try {
    const targets = JSON.parse(localStorage.getItem(targetStorageKey) || '{}');
    if (Number(targets.calories) > 0) calorieTarget.value = targets.calories;
    if (Number(targets.protein) > 0) proteinTarget.value = targets.protein;
  } catch { /* Targets are optional. */ }

  const offLookupForm = document.querySelector('#off-lookup-form');
  offLookupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const barcode = document.querySelector('#off-barcode').value.replace(/\D/g, '');
    const status = document.querySelector('#off-lookup-status');
    const result = document.querySelector('#off-product-result');
    status.className = 'food-log-status';
    result.replaceChildren();
    if (![8, 12, 13, 14].includes(barcode.length)) {
      status.textContent = 'Enter a product barcode with 8, 12, 13, or 14 digits.';
      status.classList.add('error');
      result.hidden = true;
      return;
    }
    const heading = document.createElement('h5');
    heading.textContent = 'Product page ready';
    const note = document.createElement('p');
    note.textContent = 'Open the product page, check its nutrition panel, then enter the values from the package below.';
    const link = document.createElement('a');
    link.href = `https://world.openfoodfacts.org/product/${encodeURIComponent(barcode)}`;
    link.target = '_blank';
    link.rel = 'noreferrer';
    link.textContent = 'View this product on Open Food Facts ↗';
    result.append(heading, note, link);
    result.hidden = false;
    status.textContent = 'Product lookup link created. No food or log data is sent from this page.';
    status.classList.add('success');
  });

  function saveFoodEntries() {
    try { localStorage.setItem(foodLogStorageKey, JSON.stringify(foodEntries)); return true; }
    catch { return false; }
  }
  function saveTargets() {
    const targets = { calories: Number(calorieTarget.value) || null, protein: Number(proteinTarget.value) || null };
    try { localStorage.setItem(targetStorageKey, JSON.stringify(targets)); } catch { /* Targets remain editable for this visit. */ }
  }
  function renderFoodLog() {
    const date = foodLogDate.value;
    const dayEntries = foodEntries.filter((entry) => entry.date === date);
    const totals = dayEntries.reduce((sum, entry) => {
      ['calories', 'protein', 'carbs', 'fat'].forEach((key) => { sum[key] += Number(entry[key]) || 0; });
      return sum;
    }, { calories: 0, protein: 0, carbs: 0, fat: 0 });
    document.querySelector(foodTotalIds.calories).textContent = Math.round(totals.calories).toLocaleString();
    ['protein', 'carbs', 'fat'].forEach((key) => { document.querySelector(foodTotalIds[key]).textContent = totals[key].toFixed(1).replace(/\.0$/, ''); });
    const calorieGoal = Number(calorieTarget.value);
    const proteinGoal = Number(proteinTarget.value);
    const targetParts = [];
    if (calorieGoal > 0) targetParts.push(`${Math.round(totals.calories).toLocaleString()} of ${calorieGoal.toLocaleString()} kcal`);
    if (proteinGoal > 0) targetParts.push(`${totals.protein.toFixed(1).replace(/\.0$/, '')} of ${proteinGoal} g protein`);
    targetSummary.textContent = targetParts.length ? `Optional targets · ${targetParts.join(' · ')}` : 'Targets are optional and saved in this browser.';
    foodEntryCount.textContent = `${dayEntries.length} ${dayEntries.length === 1 ? 'entry' : 'entries'}`;
    foodLogList.replaceChildren();
    if (!dayEntries.length) {
      const empty = document.createElement('p'); empty.className = 'food-log-empty'; empty.textContent = 'Nothing logged for this date yet.'; foodLogList.append(empty); return;
    }
    dayEntries.forEach((entry) => {
      const row = document.createElement('article'); row.className = 'food-log-item';
      const description = document.createElement('div');
      const name = document.createElement('h5'); name.textContent = entry.name;
      const meta = document.createElement('p'); meta.textContent = `${entry.meal} · ${entry.servings} serving${Number(entry.servings) === 1 ? '' : 's'} · P ${Number(entry.protein || 0).toFixed(1)}g · C ${Number(entry.carbs || 0).toFixed(1)}g · F ${Number(entry.fat || 0).toFixed(1)}g`;
      description.append(name, meta);
      const calories = document.createElement('strong'); calories.textContent = `${Math.round(Number(entry.calories) || 0)} kcal`;
      const remove = document.createElement('button'); remove.type = 'button'; remove.className = 'food-log-remove'; remove.textContent = 'Remove'; remove.setAttribute('aria-label', `Remove ${entry.name}`);
      remove.addEventListener('click', () => { foodEntries = foodEntries.filter((item) => item.id !== entry.id); if (saveFoodEntries()) renderFoodLog(); });
      row.append(description, calories, remove); foodLogList.append(row);
    });
  }
  manualFoodForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(manualFoodForm);
    const servings = Number(form.get('servings'));
    const entry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      date: foodLogDate.value,
      meal: String(form.get('meal')),
      name: String(form.get('name')).trim().slice(0, 100),
      servings,
      calories: Number(form.get('calories')) * servings,
      protein: Number(form.get('protein') || 0) * servings,
      carbs: Number(form.get('carbs') || 0) * servings,
      fat: Number(form.get('fat') || 0) * servings
    };
    foodEntries = [...foodEntries, entry];
    if (saveFoodEntries()) {
      renderFoodLog();
      manualFoodForm.reset();
      manualFoodForm.elements.servings.value = '1';
      manualFoodForm.elements.protein.value = '0';
      manualFoodForm.elements.carbs.value = '0';
      manualFoodForm.elements.fat.value = '0';
    } else {
      foodEntries = foodEntries.filter((item) => item.id !== entry.id);
      window.alert('This browser could not save the food entry. Your data was not added.');
    }
  });
  foodLogDate.addEventListener('change', renderFoodLog);
  calorieTarget.addEventListener('input', () => { saveTargets(); renderFoodLog(); });
  proteinTarget.addEventListener('input', () => { saveTargets(); renderFoodLog(); });
  renderFoodLog();
}

// Weekly weigh-ins stay in this browser only; no server or external service is used.
const weightForm = document.querySelector('#weight-form');
if (weightForm) {
  const weightDate = document.querySelector('#weight-date');
  const weightValue = document.querySelector('#weight-value');
  const weightNote = document.querySelector('#weight-note');
  const weightEntries = document.querySelector('#weight-entries');
  const latestWeight = document.querySelector('#latest-weight');
  const weightChange = document.querySelector('#weight-change');
  const weightStatus = document.querySelector('#weight-status');
  const weightBackup = document.querySelector('#weight-backup');
  const storageKey = 'steadyStrong.weeklyWeighIns.v1';
  let weighIns = [];
  let storageAvailable = true;

  const now = new Date();
  const localToday = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  weightDate.value = localToday;

  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
    if (Array.isArray(saved)) {
      weighIns = saved.filter((entry) => entry && /^\d{4}-\d{2}-\d{2}$/.test(entry.date) && Number.isFinite(Number(entry.weight)) && Number(entry.weight) > 0)
        .map((entry) => ({ date: entry.date, weight: Number(entry.weight), note: String(entry.note || '').slice(0, 120) }));
    }
  } catch {
    storageAvailable = false;
    weightStatus.textContent = 'This browser cannot save data for this local page. Your entries will not persist.';
  }

  function formatWeight(value) {
    return `${Number(value).toLocaleString(undefined, { maximumFractionDigits: 1 })} lb`;
  }

  function saveEntries() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(weighIns));
      return true;
    } catch {
      storageAvailable = false;
      weightStatus.textContent = 'The browser could not save this entry. It has not been added.';
      return false;
    }
  }

  weightBackup.addEventListener('click', () => {
    const backup = new Blob([JSON.stringify({ format: 'steady-strong-weigh-ins-v1', entries: weighIns }, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(backup);
    const link = document.createElement('a');
    link.href = url;
    link.download = `steady-strong-weigh-ins-${localToday}.json`;
    link.click();
    URL.revokeObjectURL(url);
    weightStatus.textContent = 'A backup file was downloaded. Keep it somewhere safe.';
  });

  function renderEntries() {
    const ordered = [...weighIns].sort((a, b) => a.date.localeCompare(b.date));
    const latest = ordered[ordered.length - 1];
    if (latest) {
      latestWeight.textContent = formatWeight(latest.weight);
      if (ordered.length > 1) {
        const previous = ordered[ordered.length - 2];
        const difference = latest.weight - previous.weight;
        const sign = difference > 0 ? '+' : '';
        weightChange.textContent = `${sign}${difference.toFixed(1)} lb since the previous entry`;
      } else {
        weightChange.textContent = 'First entry saved; the next one will show the change.';
      }
    } else {
      latestWeight.textContent = 'No weigh-ins yet';
      weightChange.textContent = 'Add your first entry to begin.';
    }

    weightEntries.replaceChildren();
    if (!ordered.length) {
      const row = document.createElement('tr');
      row.className = 'empty-row';
      const cell = document.createElement('td');
      cell.colSpan = 5;
      cell.textContent = 'Your saved weekly check-ins will appear here.';
      row.append(cell);
      weightEntries.append(row);
      return;
    }

    ordered.slice().reverse().forEach((entry) => {
      const index = ordered.findIndex((item) => item.date === entry.date);
      const previous = ordered[index - 1];
      const row = document.createElement('tr');
      const dateCell = document.createElement('td');
      dateCell.textContent = new Date(`${entry.date}T00:00:00`).toLocaleDateString();
      const valueCell = document.createElement('td');
      valueCell.textContent = formatWeight(entry.weight);
      const changeCell = document.createElement('td');
      if (previous) {
        const difference = entry.weight - previous.weight;
        changeCell.textContent = `${difference > 0 ? '+' : ''}${difference.toFixed(1)} lb`;
      } else {
        changeCell.textContent = '—';
      }
      const noteCell = document.createElement('td');
      noteCell.textContent = entry.note || '—';
      const actionCell = document.createElement('td');
      const removeButton = document.createElement('button');
      removeButton.type = 'button';
      removeButton.className = 'delete-entry';
      removeButton.textContent = 'Remove';
      removeButton.setAttribute('aria-label', `Remove weigh-in for ${dateCell.textContent}`);
      removeButton.addEventListener('click', () => {
        const previousEntries = weighIns;
        weighIns = weighIns.filter((item) => item.date !== entry.date);
        if (saveEntries()) {
          renderEntries();
          weightStatus.textContent = 'Weigh-in removed.';
        } else {
          weighIns = previousEntries;
        }
      });
      actionCell.append(removeButton);
      row.append(dateCell, valueCell, changeCell, noteCell, actionCell);
      weightEntries.append(row);
    });
  }

  weightForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!storageAvailable) {
      weightStatus.textContent = 'This browser cannot save data for this local page. Your entry was not saved.';
      return;
    }
    const date = weightDate.value;
    const weight = Number(weightValue.value);
    if (!date || !Number.isFinite(weight) || weight <= 0 || weight > 1000) {
      weightStatus.textContent = 'Enter a valid date and weight in pounds.';
      return;
    }
    const entry = { date, weight, note: weightNote.value.trim().slice(0, 120) };
    const existingIndex = weighIns.findIndex((item) => item.date === date);
    const updating = existingIndex >= 0;
    const previousEntries = weighIns;
    weighIns = updating
      ? weighIns.map((item, index) => index === existingIndex ? entry : item)
      : [...weighIns, entry];
    if (saveEntries()) {
      renderEntries();
      weightStatus.textContent = updating ? 'Updated the weigh-in for that date.' : 'Weigh-in saved in this browser.';
      weightValue.value = '';
      weightNote.value = '';
    } else {
      weighIns = previousEntries;
    }
  });

  renderEntries();
}


