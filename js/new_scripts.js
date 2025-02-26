const modulesData = {
    WAD: [
        { name: "Module 1: Introduction to Web", link: "https://youtu.be/trDxyfEtEfY" },
        { name: "Module 2: HTML & CSS Basics", link: "https://youtu.be/o-ZTQuP4l_M" },
        { name: "Module 3: JavaScript Essentials", link: "https://youtu.be/4-HVP5pFPD8" },
        { name: "Module 4: Backend Development", link: "https://youtu.be/_IC6wEt6KRc" },
        { name: "Module 5: Deployment & Security", link: "https://youtu.be/Dgqsp57LmHc" }
    ],
    FLAT: [
        { name: "Module 1: Introduction to Automata", link: "https://youtu.be/6dIm-vYvtxc" },
        { name: "Module 2: Regular Expressions", link: "https://youtu.be/4C7ZQJDoK-g" },
        { name: "Module 3: Context-Free Grammars", link: "https://youtu.be/JxRWgobTYto" },
        { name: "Module 4: Turing Machines", link: "https://youtu.be/Lm80K4WrEe4" },
        { name: "Module 5: Complexity Theory", link: "https://youtu.be/_DA-r8ztyaM" }
    ],
    AI: [
        { name: "Module 1: Introduction to AI", link: "https://youtu.be/example11" },
        { name: "Module 2: Machine Learning Basics", link: "https://youtu.be/example12" },
        { name: "Module 3: Neural Networks", link: "https://youtu.be/example13" },
        { name: "Module 4: AI Ethics", link: "https://youtu.be/example14" },
        { name: "Module 5: Deep Learning", link: "https://youtu.be/example15" }
    ],
    DBMS: [
        { name: "Module 1: Introduction to Databases", link: "https://youtu.be/example16" },
        { name: "Module 2: SQL & Queries", link: "https://youtu.be/example17" },
        { name: "Module 3: Normalization", link: "https://youtu.be/example18" },
        { name: "Module 4: Transactions & Concurrency", link: "https://youtu.be/example19" },
        { name: "Module 5: NoSQL & Modern Databases", link: "https://youtu.be/example20" }
    ]
};

function showModules(subject) {
    const container = document.getElementById("modules-container");
    container.innerHTML = "";

    const modules = modulesData[subject] || [];
    if (modules.length === 0) {
        container.innerHTML = "<p>No modules available.</p>";
        return;
    }

    // Create a div to hold all modules in a single row
    const modulesRow = document.createElement("div");
    modulesRow.classList.add("modules"); // Uses the existing .modules class from CSS

    modules.forEach(module => {
        const moduleBox = document.createElement("a");
        moduleBox.classList.add("module"); // Uses the existing .module class from CSS
        moduleBox.innerText = module.name;
        moduleBox.href = module.link;
        moduleBox.target = "_blank";

        modulesRow.appendChild(moduleBox);
    });

    container.appendChild(modulesRow);
}
