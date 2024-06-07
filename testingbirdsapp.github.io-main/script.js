// script.js
document.addEventListener("DOMContentLoaded", function() {
    const birdsData = [
        { name: "The Indian Roller",  image: "images/bird1.jpg", sound: "sounds/bird1.mp3", position: { x: 30, y: 70 }, icon: "icons/bird1-icon.png", size: 30 },
        { name: "Common Kingfishertetest",  image: "images/bird2.jpg", sound: "sounds/bird2.mp3", position: { x: 20, y: 90 }, icon: "icons/bird2-icon.png", size: 30 },
        { name: "Eurasian skylark",  image: "images/bird3.jpg", sound: "sounds/bird3.mp3", position: { x: 8, y: 65 }, icon: "icons/bird3-icon.png", size: 30 },
        { name: "Green Bee Eater",  image: "images/bird4.jpg", sound: "sounds/bird4.mp3", position: { x: 60, y: 85 }, icon: "icons/bird4-icon.png", size: 30 },
        { name: "Blue Tailed Bee Eater",  image: "images/bird5.jpg", sound: "sounds/bird5.mp3", position: { x: 90, y: 90 }, icon: "icons/bird5-icon.png", size: 30 },
        { name: "Black winged kite",  image: "images/bird6.jpg", sound: "sounds/bird6.mp3", position: { x: 30, y: 30 }, icon: "icons/bird6-icon.png", size: 30 },
        { name: "Jacobin Cuckoo",  image: "images/bird7.jpg", sound: "sounds/bird7.mp3", position: { x: 60, y: 20 }, icon: "icons/bird7-icon.png", size: 40 },
        { name: "Chestnut Winged Cuckoo",  image: "images/bird8.jpg", sound: "sounds/bird8.mp3", position: { x: 73, y: 30 }, icon: "icons/bird8-icon.png", size: 20 },
        { name: "Asian Koel",  image: "images/bird9.jpg", sound: "sounds/bird9.mp3", position: { x: 55, y: 48 }, icon: "icons/bird9-icon.png", size: 40 },
        { name: "Greater Coucal",  image: "images/bird10.jpg", sound: "sounds/bird10.mp3", position: { x: 60, y: 80 }, icon: "icons/bird10-icon.png", size: 40 },
        { name: "Rose Ringed Parakeet",  image: "images/bird11.jpg", sound: "sounds/bird11.mp3", position: { x: 73, y: 50 }, icon: "icons/bird11-icon.png", size: 30 },
        { name: "Common Hawk Cuckoo",  image: "images/bird12.jpg", sound: "sounds/bird12.mp3", position: { x: 25, y: 16 }, icon: "icons/bird12-icon.png", size: 20 },
        { name: "Black Kite",  image: "images/bird13.jpg", sound: "sounds/bird13.mp3", position: { x: 50, y: 10 }, icon: "icons/bird13-icon.png", size: 40 },
        { name: "Shikra", image: "images/bird14.jpg", sound: "sounds/bird14.mp3", position: { x: 18, y: 13 }, icon: "icons/bird14-icon.png", size: 40 },
        { name: "Oriental honey buzzard",  image: "images/bird15.jpg", sound: "sounds/bird15.mp3", position: { x: 80, y: 10 }, icon: "icons/bird15-icon.png", size: 30 },
        { name: "Rufous Treepie",  image: "images/bird16.jpg", sound: "sounds/bird16.mp3", position: { x: 6, y: 12 }, icon: "icons/bird16-icon.png", size: 20 },
        { name: "Bay-backed shrike",  image: "images/bird17.jpg", sound: "sounds/bird17.mp3", position: { x: 80, y: 90 }, icon: "icons/bird17-icon.png", size: 30 },
        { name: "House crow",  image: "images/bird18.jpg", sound: "sounds/bird18.mp3", position: { x: 60, y: 60 }, icon: "icons/bird18-icon.png", size: 40 },
        { name: "Ashy Woodswallow",  image: "images/bird19.jpg", sound: "sounds/bird19.mp3", position: { x: 40, y: 59 }, icon: "icons/bird19-icon.png", size: 20 },
        { name: "The Indian Golden Oriole",  image: "images/bird20.jpg", sound: "sounds/bird20.mp3", position: { x: 35, y: 60 }, icon: "icons/bird20-icon.png", size: 20 },
        { name: "Black-headed Cuckooshrike",  image: "images/bird21.jpg", sound: "sounds/bird21.mp3", position: { x: 60, y: 30 }, icon: "icons/bird21-icon.png", size: 20 },
        { name: "Black Drongo",  image: "images/bird22.jpg", sound: "sounds/bird22.mp3", position: { x: 30, y: 95 }, icon: "icons/bird22-icon.png", size:20 },
        { name: "Asian Paradise Flycatcher",  image: "images/bird23.jpg", sound: "sounds/bird23.mp3", position: { x: 70, y: 53 }, icon: "icons/bird23-icon.png", size: 50 },
        { name: "The Common Iora",  image: "images/bird24.jpg", sound: "sounds/bird24.mp3", position: { x: 10, y: 20 }, icon: "icons/bird24-icon.png", size: 20 },
        { name: "The common Woodshrike", image: "images/bird25.jpg", sound: "sounds/bird25.mp3", position: { x: 64, y: 67 }, icon: "icons/bird25-icon.png", size: 30 },
        { name: "Purple rumped sunbird", image: "images/bird26.jpg", sound: "sounds/bird26.mp3", position: { x: 20, y: 67 }, icon: "icons/bird26-icon.png", size: 20 },
        { name: "Lotens sunbird", image: "images/bird27.jpg", sound: "sounds/bird27.mp3", position: { x: 6, y: 25 }, icon: "icons/bird27-icon.png", size: 20 },
        { name: "White browed wagtail",  image: "images/bird28.jpg", sound: "sounds/bird28.mp3", position: { x: 14, y: 72 }, icon: "icons/bird28-icon.png", size: 30 },
        { name: "Grey wagtail",  image: "images/bird29.jpg", sound: "sounds/bird29.mp3", position: { x: 10, y: 80 }, icon: "icons/bird29-icon.png", size: 30 },
        { name: "Paddyfield pipit",  image: "images/bird30.jpg", sound: "sounds/bird30.mp3", position: { x: 70, y: 90 }, icon: "icons/bird30-icon.png", size: 30 },
        { name: "Asian palm Swift",  image: "images/bird31.jpg", sound: "sounds/bird31.mp3", position: { x: 40, y: 20 }, icon: "icons/bird31-icon.png", size: 20 },
       { name: "House Swift",  image: "images/bird32.jpg", sound: "sounds/bird32.mp3", position: { x: 84, y: 50 }, icon: "icons/bird32-icon.png", size: 40 },
       { name: "Barn owl",  image: "images/bird33.jpg", sound: "sounds/bird33.mp3", position: { x: 80, y: 30 }, icon: "icons/bird33-icon.png", size: 40 },
       { name: "Collared scops owl",  image: "images/bird34.jpg", sound: "sounds/bird34.mp3", position: { x: 70, y: 40 }, icon: "icons/bird34-icon.png", size: 20 },
       { name: "Spotted owlet",  image: "images/bird35.jpg", sound: "sounds/bird35.mp3", position: { x: 50, y: 40 }, icon: "icons/bird35-icon.png", size: 20 },
       { name: "Common pigeon",  image: "images/bird36.jpg", sound: "sounds/bird36.mp3", position: { x: 60, y: 90 }, icon: "icons/bird36-icon.png", size: 30 },
       { name: "Spotted dove",  image: "images/bird37.jpg", sound: "sounds/bird37.mp3", position: { x: 40, y: 10 }, icon: "icons/bird37-icon.png", size: 40 },
       { name: "White breasted waterhen",  image: "images/bird38.jpg", sound: "sounds/bird38.mp3", position: { x: 50, y: 70 }, icon: "icons/bird38-icon.png", size: 30 },
       { name: "Red wattled lapwing",  image: "images/bird39.jpg", sound: "sounds/bird39.mp3", position: { x: 60, y: 70 }, icon: "icons/bird39-icon.png", size: 30 },
       { name: "Osprey",  image: "images/bird40.jpg", sound: "sounds/bird40.mp3", position: { x: 85, y: 20 }, icon: "icons/bird40-icon.png", size: 20 },
       { name: "Little Cormorant",  image: "images/bird41.jpg", sound: "sounds/bird41.mp3", position: { x: 40, y: 70 }, icon: "icons/bird41-icon.png", size: 30 },
       { name: "Little egret",  image: "images/bird42.jpg", sound: "sounds/bird42.mp3", position: { x: 40, y: 90 }, icon: "icons/bird42-icon.png", size: 80 },
       { name: "Indian pond heron",  image: "images/bird43.jpg", sound: "sounds/bird43.mp3", position: { x: 90, y: 80 }, icon: "icons/bird43-icon.png", size: 30 },
       { name: "Asian openbill",  image: "images/bird44.jpg", sound: "sounds/bird44.mp3", position: { x: 50, y: 87 }, icon: "icons/bird44-icon.png", size: 70 },
       { name: "Pitta",  image: "images/bird45.jpg", sound: "sounds/bird45.mp3", position: { x: 10, y: 90 }, icon: "icons/bird45-icon.png", size: 30 },
       { name: "Brown Shrike ",  image: "images/bird46.jpg", sound: "sounds/bird46.mp3", position: { x: 95, y: 92 }, icon: "icons/bird46-icon.png", size: 30 },
       
        // // Add more bird data as needed
    ];

    const birdsContainer = document.getElementById("birds-container");
    const landscapeImg = document.getElementById("landscape-img");
    const birdInfoContainer = document.getElementById("bird-info-container");

    function updateBirdsPosition() {
        const landscapeWidth = landscapeImg.offsetWidth;
        const landscapeHeight = landscapeImg.offsetHeight;
        birdsContainer.innerHTML = ""; // Clear previous bird markers
        birdsData.forEach(bird => {
            const birdIcon = document.createElement("img");
            birdIcon.src = bird.icon;
            birdIcon.classList.add("bird-icon");
            birdIcon.style.left = `${landscapeWidth * (bird.position.x / 100) - (bird.size / 2)}px`;
            birdIcon.style.top = `${landscapeHeight * (bird.position.y / 100) - (bird.size / 2)}px`;
            birdIcon.style.width = `${bird.size}px`; // Set the size of the bird icon
            birdIcon.addEventListener("click", () => {
                showBirdInfo(bird);
                playBirdSound(bird);
            });
            birdsContainer.appendChild(birdIcon);
        });
    }

    function showBirdInfo(bird) {
        const modal = document.createElement("div");
        modal.classList.add("modal");
    
        const modalContent = document.createElement("div");
        modalContent.classList.add("modal-content");
    
        const birdImg = document.createElement("img");
        birdImg.src = bird.image;
        birdImg.alt = bird.name;
        birdImg.classList.add("bird-image"); // Add class for styling
    
        const birdName = document.createElement("h2");
        birdName.textContent = bird.name;
    
        const birdDescription = document.createElement("p");
        birdDescription.textContent = bird.description;
    
        const closeBtn = document.createElement("span");
        closeBtn.classList.add("close-btn");
        closeBtn.textContent = "×";
        closeBtn.addEventListener("click", () => {
            modal.remove();
        });
    
        modalContent.appendChild(closeBtn);
        modalContent.appendChild(birdImg);
        modalContent.appendChild(birdName);
        modalContent.appendChild(birdDescription);
        modal.appendChild(modalContent);
    
        document.body.appendChild(modal);
    }
    
    function playBirdSound(bird) {
        const birdSound = new Audio(bird.sound);
        birdSound.play();
    }

    // Update bird positions when the window is resized
    window.addEventListener("resize", updateBirdsPosition);

    // Trigger resize event on page load to initially set bird positions
    window.dispatchEvent(new Event("resize"));
});
// Function to handle orientation change
// function handleOrientationChange(mediaQueryList) {
//     if (mediaQueryList.matches) {
//         // If device is in landscape mode, redirect to the index.html page
//         window.location.href = "index.html";
//     } else {
//         // If device is in portrait mode, redirect to the landscape-only.html page
//         window.location.href = "landscape-only.html";
//     }
// }

// // Create a media query for landscape orientation
// const landscapeMediaQuery = window.matchMedia("(orientation: landscape)");

// // Check orientation on page load
// handleOrientationChange(landscapeMediaQuery);

// // Listen for orientation change
// landscapeMediaQuery.addListener(handleOrientationChange);
