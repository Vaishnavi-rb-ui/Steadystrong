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
  { name:'Goblet squat', equipment:'Dumbbell or kettlebell', type:'both', focus:'Legs · hips', cue:'Hold one weight close to your chest. Sit between your hips, then stand with control.', option:'Make it easier: squat to a chair or use a lighter weight.' },
  { name:'Dumbbell bench press', equipment:'Dumbbells · bench', type:'dumbbell', focus:'Chest · arms', cue:'Lie on the bench with feet supported. Lower the weights toward your chest, then press up smoothly.', option:'Alternative: use a lighter pair or do a floor press.' },
  { name:'Single-arm dumbbell row', equipment:'Dumbbell · bench', type:'dumbbell', focus:'Back · arms', cue:'Support one hand on the bench. Pull the weight toward your hip, then lower it slowly.', option:'Keep your back steady; switch sides after the reps.' },
  { name:'Farmer carry', equipment:'Dumbbells or kettlebells', type:'both', focus:'Grip · trunk', cue:'Hold a weight in each hand and walk with short, steady steps. Stand tall and breathe normally.', option:'Start light and use a clear, level path.' },
  { name:'Kettlebell swing', equipment:'Kettlebell', type:'kettlebell', focus:'Hips · posterior chain', cue:'Hinge at the hips and let the bell swing between your thighs. Stand tall to send it forward; arms guide, hips drive.', option:'Use only a familiar, manageable bell and a practiced hinge. Otherwise substitute a light RDL.' },
  { name:'Standing strict press', equipment:'Dumbbells or kettlebells', type:'both', focus:'Shoulders · arms', cue:'Start at shoulder height. Keep your ribs comfortably stacked and press overhead without leaning back.', option:'Use one light dumbbell at a time or press seated.' },
  { name:'Reverse lunge', equipment:'Bodyweight', type:'bodyweight', focus:'Legs · balance', cue:'Step one foot back, lower only as far as comfortable, then push through the front foot to stand.', option:'Hold a wall or chair for balance; shorten the step if needed.' },
  { name:'Plank', equipment:'Bodyweight', type:'bodyweight', focus:'Trunk', cue:'Support yourself on forearms and knees or toes. Keep your body steady and breathe; stop before your position sags.', option:'Start with a short hold from your knees.' },
  { name:'Dumbbell Romanian deadlift', equipment:'Dumbbells', type:'dumbbell', focus:'Hips · hamstrings', cue:'Hold weights in front of your thighs. Push your hips back with a soft knee bend, then stand by bringing your hips forward.', option:'Lower only as far as you can keep a comfortable, steady back.' },
  { name:'Low step-up', equipment:'Low step · bodyweight', type:'bodyweight', focus:'Legs · balance', cue:'Use a stable, low step. Place one whole foot on it, stand up smoothly, and step down with control.', option:'Use a chair sit-to-stand if the step feels uncomfortable.' },
  { name:'Dumbbell floor press', equipment:'Dumbbells · floor', type:'dumbbell', focus:'Chest · arms', cue:'Lie on the floor with knees bent. Lower your upper arms gently to the floor, then press the weights up.', option:'Use a light load and a comfortable range.' },
  { name:'Suitcase carry', equipment:'One dumbbell or kettlebell', type:'both', focus:'Grip · trunk', cue:'Hold one weight at your side. Walk slowly without leaning; switch hands and repeat.', option:'Begin with a light weight and a short distance.' }
];

const exerciseGrid = document.querySelector('#exercise-grid');
if (exerciseGrid) {
  const search = document.querySelector('#exercise-search');
  const filters = document.querySelectorAll('.exercise-filter');
  const empty = document.querySelector('#exercise-empty');
  const count = document.querySelector('#exercise-count');
  let activeFilter = 'all';
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
      card.append(top, heading, equipment, cue, option);
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


