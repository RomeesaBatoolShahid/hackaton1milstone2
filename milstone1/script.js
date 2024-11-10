document.addEventListener('DOMContentLoaded', function () {
    var hideSkillsBtn = document.getElementById('hide-skills-btn');
    var skillsList = document.getElementById('skills-list');
    if (hideSkillsBtn && skillsList) {
        hideSkillsBtn.addEventListener('click', function () {
            if (skillsList.style.display === 'none') {
                skillsList.style.display = 'block';
                hideSkillsBtn.textContent = 'Hide Skills';
            }
            else {
                skillsList.style.display = 'none';
                hideSkillsBtn.textContent = 'Show Skills';
            }
        });
    }
});
