document.addEventListener('DOMContentLoaded', () => {
    const hideSkillsBtn = document.getElementById('hide-skills-btn') as HTMLButtonElement;
    const skillsList = document.getElementById('skills-list') as HTMLUListElement;

    if (hideSkillsBtn && skillsList) {
        hideSkillsBtn.addEventListener('click', () => {
            if (skillsList.style.display === 'none') {
                skillsList.style.display = 'block';
                hideSkillsBtn.textContent = 'Hide Skills';
            } else {
                skillsList.style.display = 'none';
                hideSkillsBtn.textContent = 'Show Skills';
            }
        });
    }
});
