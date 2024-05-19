let content = [
    { image: "Resources/team/FikriRamadhan.png", name: "Fikri Ramadhan", role: "Front End" },
    { image: "Resources/team/FikriRamadhan.png", name: "orang 2", role: "Quality Assurance" },
    { image: "Resources/team/FikriRamadhan.png", name: "orang 3", role: "Leader" },
    
    { image: "Resources/team/FikriRamadhan.png", name: "orang 4", role: "Leader" },
    { image: "Resources/team/FikriRamadhan.png", name: "orang 5", role: "Front End" },
    { image: "Resources/team/FikriRamadhan.png", name: "orang 6", role: "Quality Assurance" },
    
    { image: "Resources/team/FikriRamadhan.png", name: "orang 7", role: "Quality Assurance" },
    { image: "Resources/team/FikriRamadhan.png", name: "orang 8", role: "Leader" },
    { image: "Resources/team/FikriRamadhan.png", name: "orang 9", role: "Front End" },

    { image: "Resources/team/FikriRamadhan.png", name: "orang 10", role: "Leader" },
    { image: "Resources/team/FikriRamadhan.png", name: "orang 11", role: "Front End" },
    { image: "Resources/team/FikriRamadhan.png", name: "orang 12", role: "Quality Assurance" },

    { image: "Resources/team/FikriRamadhan.png", name: "orang 13", role: "Leader" }
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
    document.getElementById("myimage1").src = content[index].image;
    document.getElementById("myname1").textContent = content[index].name;
    document.getElementById("myrole1").textContent = content[index].role;

    document.getElementById("myimage2").src = content[index+1].image;
    document.getElementById("myname2").textContent = content[index+1].name;
    document.getElementById("myrole2").textContent = content[index+1].role;

    document.getElementById("myimage3").src = content[index+2].image;
    document.getElementById("myname3").textContent = content[index+2].name;
    document.getElementById("myrole3").textContent = content[index+2].role;
}

// Display initial content
displayContent();