const container = document.querySelector('.left-part__calendar');

for (let i = 1; i <= new Date(2025, 3, 0).getDate(); i++) {
    const button = document.createElement('button');
    button.className = ('month__day button');
    if (new Date(2025, 2, i).getDay() === 0 || new Date(2025, 2, i).getDay() === 6) {
        button.classList.add('weekend');
    } else {
        button.classList.add('default')
    }
    button.textContent = (`${i}`);
    button.id = (`day-${i}`);
    button.onclick = () => {
        const container = document.querySelector('.container');
        const rem = container.querySelector('.main-field');
        if (rem) {
            container.removeChild(rem);
        }
        const schedule = document.createElement("div");
        schedule.className = 'main-field';
        schedule.textContent = (`day-${i}`);
        container.appendChild(schedule);
    }
    container.appendChild(button);
}