const subjectsData = {
    sem1: ["LA&C", "Eng.Graphics","Basics of Electrical & Electronics","Basics of Civil & Mechanical","Eng.Mechanics","Life Skills","Eng.Physics", "Eng.Chemistry"],
    sem2: ["Data Structures", "OOP", "Discrete Maths"],
    sem3: ["DBMS", "OS", "CN"],
    sem5: ["WAD", "FLAT","MSE","DCN","DM","OS"],
    sem6: ["AI", "Cyber Security"],
    sem8: ["Cloud Computing", "Blockchain"],
};

const modulesData = {
    WAD: [
        { name: "Module 1", link: "https://youtu.be/m9hm1ctTL6s?si=kLAanxJ_WROCWlbf" },
        { name: "Module 2", link: "https://youtube.com/your_video_link2" },
        { name: "Module 3", link: "https://youtube.com/your_video_link3" },
    ],
    FLAT: [
        { name: "Module 1", link: "https://youtu.be/m9hm1ctTL6s?si=kLAanxJ_WROCWlbf" },
        { name: "Module 2", link: "https://youtube.com/your_video_link7" },
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

    const modulesDiv = document.createElement("div");
    modulesDiv.classList.add("modules");

    modules.forEach(module => {
        const link = document.createElement("a");
        link.classList.add("module");
        link.href = module.link;
        link.innerText = module.name;
        link.target = "_blank";
        modulesDiv.appendChild(link);
    });

    container.appendChild(modulesDiv);
}
