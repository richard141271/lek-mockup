const storageKey = 'lek-toolkit-state';

function loadModuleState() {
  try {
    return JSON.parse(localStorage.getItem(storageKey) || '{}');
  } catch {
    return {};
  }
}

function saveModuleState(state) {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function syncModules() {
  const state = loadModuleState();
  const toggles = document.querySelectorAll('[data-module]');
  let activeCount = 0;

  toggles.forEach((button) => {
    const moduleName = button.dataset.module;
    const nextState = state[moduleName] ?? button.dataset.default === 'on';
    button.classList.toggle('is-on', nextState);
    button.setAttribute('aria-checked', String(nextState));

    const row = button.closest('.module-row');
    const marker = row?.querySelector('[data-module-marker]');
    if (marker) marker.textContent = nextState ? '✅' : '⬜';
    if (nextState) activeCount += 1;
  });

  const countTarget = document.querySelector('[data-active-count]');
  if (countTarget) countTarget.textContent = String(activeCount);
}

function initToolkit() {
  const state = loadModuleState();
  document.querySelectorAll('[data-module]').forEach((button) => {
    button.addEventListener('click', () => {
      const moduleName = button.dataset.module;
      const currentState = state[moduleName] ?? button.dataset.default === 'on';
      state[moduleName] = !currentState;
      saveModuleState(state);
      syncModules();
    });
  });
  syncModules();
}

function initTasks() {
  document.querySelectorAll('[data-task-toggle]').forEach((row) => {
    row.addEventListener('click', () => {
      row.classList.toggle('is-done');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initToolkit();
  initTasks();
});
