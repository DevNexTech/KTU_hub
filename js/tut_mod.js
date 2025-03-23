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
    "MSE": [
        { "name": "Module 1: Introduction to Software Engineering", "link": "https://youtu.be/WxkP5KR_Emk?si=zmhwdFYODQpdLOtT" },
        { "name": "Module 2: Software Development Life Cycle (SDLC)", "link": "https://youtu.be/Fi3_BjVzpqk?si=AmVBRDRPfVhmtRj5" },
        { "name": "Module 3: Software Requirements Analysis", "link": "https://youtu.be/1TlRQeql5xg?si=zZzij_WRFU5HUn0m" },
        { "name": "Module 4: Software Design Principles", "link": "https://youtu.be/1ZM88C_CLDY?si=yF2RRL62s6JijeMu" },
        { "name": "Module 5: Software Testing and Quality Assurance", "link": "https://youtu.be/u6QfIXgjwGQ?si=BZiZiOvsbVjAeDuW" }
    ],
    "DCN": [
        { "name": "Module 1: Introduction to Data Communication", "link": "https://youtu.be/YGmn2GZeR5Y?si=kkwv-oWUi7OX8eBA" },
        { "name": "Module 2: Network Models and Protocols", "link": "https://youtu.be/vv4y_uOneC0?si=PNPYPDTsv3ZiuqJk" },
        { "name": "Module 3: Transmission Media and Switching", "link": "https://youtu.be/HryzQDpKvwA?si=lrVwjfdWBJbAxBQ8" },
        { "name": "Module 4: Network Layer and Routing", "link": "https://youtu.be/9zvfSN_F7vM?si=0erEBG6FFTbo_Pjx" },
        { "name": "Module 5: Transport Layer and Network Security", "link": "https://youtu.be/dchq8igJtSc?si=Idmn_Wovfz6FYxBw" }
    ],
    "DM": [
        { "name": "Module 1: Introduction to Disaster Management", "link": "https://youtu.be/v6mPtEmHLD8?si=r7ZQFQFc1UYymje5" },
        { "name": "Module 2: Hazard, Risk, and Vulnerability Analysis", "link": "https://youtu.be/2B823bEBKGU?si=UPE2MwgMYLOFxC3t" },
        { "name": "Module 3: Disaster Preparedness and Mitigation", "link": "https://youtu.be/KwAKjtkpdP4?si=B0Lb0OpKTMSQZ4WD" },
        { "name": "Module 4: Emergency Response and Recovery", "link": "https://youtu.be/pCV9kpcJFME?si=L4I4Gj4Yvvx4IKOf" },
        { "name": "Module 5: Disaster Risk Reduction Strategies", "link": "https://youtu.be/y16aMLeh91Q?si=eC83eJy5I5Iq2iZD" }
    ],
    "OS": [
        { "name": "Module 1: Introduction to Operating Systems", "link": "https://youtu.be/vBURTt97EkA?si=H4strwPqK2lzomYF" },
        { "name": "Module 2: Process Management and Scheduling", "link": "https://youtu.be/OrM7nZcxXZU?si=aWdMCMzkuroDN2-Q" },
        { "name": "Module 3: Memory Management", "link": "https://youtu.be/p9yZNLeOj4s?si=JWKO4YR60qKiJMKf" },
        { "name": "Module 4: File Systems and Storage", "link": "https://youtu.be/gK6L3v1b8AM?si=D65azbCCkfJfWKaU" },
        { "name": "Module 5: Security and Protection in OS", "link": "https://youtu.be/DKb7KhfoZmU?si=w6f4JN5TZJ9Ht3XG" }
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
