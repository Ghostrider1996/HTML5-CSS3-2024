document.addEventListener("DOMContentLoaded", function () {

    let maxCount = 600

    const previousGuild = document.getElementById('previous-guild')
    previousGuild.addEventListener("click", () => {
        raceSelect.disabled = false
    })

    const raceSelect = document.getElementById("race");
    const classSelect = document.getElementById("class");
    const specSelect = document.getElementById("spec");

    const raceOptionsMap = {
        Human: { availableClasses: ["Warrior", "Paladin", "Mage", "Warlock", "Priest", "Rogue"] },
        Dwarf: { availableClasses: ["Warrior", "Paladin", "Rogue", "Hunter", "Priest"] },
        Gnome: { availableClasses: ["Mage", "Warlock", "Warrior", "Rogue"] },
        "Night-Elf": { availableClasses: ["Druid", "Hunter", "Rogue", "Priest"] }
    };

    const availableSpecs = {
        Warrior: ["Protection", "Fury-Protection", "Fury", "Arms"],
        Druid: ["Feral-Tank", "Feral", "Balance", "Restoration"],
        Paladin: ["Protection", "Retribution", "Holy"],
        Rogue: ["Assassination", "Combat", "Subtlety"],
        Mage: ["Fire", "Frost", "Arcane"],
        Warlock: ["Affliction", "Destruction", "Demonology"],
        Priest: ["Holy", "Discipline", "Holy-Discipline", "Shadow"],
        Hunter: ["Beastmastery", "Marksmanship", "Survival"]
    };

    let previousRace = "None";

    raceSelect.addEventListener("change", function () {
        const selectedRace = this.value;

        if (selectedRace !== previousRace) {
            classSelect.value = "None";
            specSelect.value = "None";
            specSelect.disabled = true;
            previousRace = selectedRace;
        }

        classSelect.disabled = false;

        if (selectedRace in raceOptionsMap) {
            const availableClasses = raceOptionsMap[selectedRace].availableClasses;

            classSelect.innerHTML = "";

            const firstOption = document.createElement("option");
            firstOption.text = "None Selected";
            firstOption.value = "None";
            firstOption.disabled = true;
            classSelect.add(firstOption);
            classSelect.value = "None";

            availableClasses.forEach(classOption => {
                const option = document.createElement("option");
                option.text = classOption;
                option.value = classOption;
                classSelect.add(option);
            });

            if (classSelect.value === "None") {
                specSelect.value = 'None';
                specSelect.disabled = true;
            }
        }
    });

    classSelect.addEventListener("change", function () {
        const selectedClass = this.value;
        specSelect.disabled = false;

        if (selectedClass in availableSpecs) {
            const specs = availableSpecs[selectedClass];

            specSelect.innerHTML = "";

            const firstOption = document.createElement("option");
            firstOption.text = "None Selected";
            firstOption.value = "None";
            firstOption.defaultSelected = true;
            firstOption.disabled = true;
            specSelect.add(firstOption);

            specs.forEach(spec => {
                const option = document.createElement("option");
                option.text = spec;
                option.value = spec;
                specSelect.add(option);
            });
        }
        specSelect.addEventListener("change", () => {
            const secondaryPrimaryProfession = document.querySelector('#main-professions')
            secondaryPrimaryProfession.disabled = false

            secondaryPrimaryProfession.addEventListener('change', () => {
                firstPrimaryProfession.disabled = false
            })
        });
    });

    const firstPrimaryProfession = document.querySelector('#main-professions-1');
    const secondPrimaryProfession = document.querySelector('#main-professions-2');

    firstPrimaryProfession.addEventListener('change', () => {
        const selectedValue = firstPrimaryProfession.value;
        secondPrimaryProfession.disabled = false;

        const secondPrimaryProfessions = secondPrimaryProfession.querySelectorAll('option');

        secondPrimaryProfessions.forEach(option => {
            if (option.value === selectedValue) {
                option.style.display = "none";
            } else {
                option.style.display = "block";
            }
        });
    });

    const secondPrimaryProfessionElement = document.getElementById('main-professions-2');

    secondPrimaryProfessionElement.addEventListener('change', () => {
        const raidDays = document.getElementById('raid-days');
        const contribute = document.getElementById('contribute');
        const favoriteStyle = document.getElementById("playstyle");
        const favoriteSide = document.getElementById('game-side');
        const additionalInformation = document.getElementById('additional-information')

        favoriteSide.disabled = false;
        favoriteStyle.disabled = false;
        raidDays.disabled = false;
        contribute.disabled = false;
        additionalInformation.disabled = false;
    });

    const counter = document.querySelector('.counter')
    const limitedTextArea = document.querySelector('#additional-information')

    limitedTextArea.addEventListener('keydown', (e) => {

        if (maxCount == 0 && e.key !== 'Backspace' || maxCount == 600 && e.key == "Backspace") {
            e.preventDefault();
            return;
        } else if (e.key == "Backspace") {
            maxCount += 1
            counter.innerHTML = maxCount

        } else {
            maxCount -= 1
            counter.innerHTML = maxCount;
        }

    })
});









