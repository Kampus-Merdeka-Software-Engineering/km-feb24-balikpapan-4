let content = [
    { image: "Resources/team/Ajar Basyar Tsani.png", name: "AJAR BASYAR", role: "FRONT-END DEV" },
    { image: "Resources/team/Halim Bagus.png", name: "HALIM BAGUS", role: "FRONT-END DEV" },
    { image: "Resources/team/Fikri Ramadhan.png", name: "FIKRI RAMADHAN", role: "FRONT-END DEV" },
    
    { image: "Resources/team/Audina Arifiani.png", name: "AUDINA ARIFIANI", role: "UI DESIGNER" },
    { image: "Resources/team/Dwi Ardita Izarotun.png", name: "DWI ARDITA IZAROTUN", role: "UI DESIGNER" },
    { image: "Resources/team/Sekar Nursyahidah.png", name: "SEKAR NURSYAHIDAH", role: "QUALITY ASSURANCE" },
    
    { image: "Resources/team/Andika Kurnia.png", name: "ANDIKA KURNIA", role: "FRONT-END DEV" },
    { image: "Resources/team/Ardanita Windy P.png", name: "ARDANITA WINDY P", role: "FRONT-END DEV" },
    { image: "Resources/team/Dennys Pranata Putra.png", name: "DENNYS PRANATA P", role: "DEPLOYMENT TEAM" },

    { image: "Resources/team/Sarah Nur Aulia.png", name: "SARAH NUR AULIA", role: "FRONT-END DEV" },
    { image: "Resources/team/Machfud Ubaidillah Anas.png", name: "MACHFUD UBAIDILLAH", role: "DEPLOYMENT TEAM" },
    { image: "Resources/team/Nurul Hafifah Caniago.png", name: "NURUL HAFIFA C", role: "QUALITY ASSURANCE" },

    { image: "Resources/team/Dini Hanifah.png", name: "DINI HANIFAH", role: "QUALITY ASSURANCE" },
];

// Current index to keep track of which content to display
let currentIndex = 0;

// Function to display previous content
function prevSlide() {
    if(currentIndex > 0){
        currentIndex = (currentIndex - 1 + content.length) % content.length;
        console.log(currentIndex)
        displayContent(currentIndex);
    }
    
}

// Function to display next content
function nextSlide() {
    if(currentIndex < (content.length - 3)){
        currentIndex = (currentIndex + 1) % content.length;
        console.log(currentIndex)
        displayContent(currentIndex);
    }
}

// Function to display content based on currentIndex
function displayContent(index) {
    document.getElementById("our-team-image1").src = content[index].image;
    document.getElementById("our-team-name1").textContent = content[index].name;
    let role1Elements = document.getElementsByClassName("role1");
    for (let i = 0; i < role1Elements.length; i++) {
        role1Elements[i].textContent = content[index].role;
    }

    document.getElementById("our-team-image2").src = content[index+1].image;
    document.getElementById("our-team-name2").textContent = content[index+1].name;
    let role2Elements = document.getElementsByClassName("role2");
    for (let i = 0; i < role2Elements.length; i++) {
        role2Elements[i].textContent = content[index+1].role;
    }

    document.getElementById("our-team-image3").src = content[index+2].image;
    document.getElementById("our-team-name3").textContent = content[index+2].name;
    let role3Elements = document.getElementsByClassName("role3");
    for (let i = 0; i < role3Elements.length; i++) {
        role3Elements[i].textContent = content[index+2].role;
    }
}

// Display initial content
displayContent();