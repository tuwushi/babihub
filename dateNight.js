function showDateGenerator() {
    document.getElementById("date-generator").style.display = "block";
}

function generateDate() {
    const activities = [
        "Movie Marathon", 
        "Cook Dinner Together", 
        "Cuddle Sesh", 
        "Game Night", 
        "Hangout at the tree house", 
        "Night Walk", 
        "Eat outside",
        "Hardcore Sex",
        "Drink Again",
        "Karaoke Night in your room",
        "Eat you out till you cum"
    ];


    const randomActivity = activities[Math.floor(Math.random() * activities.length)];
    

    document.getElementById("activity").innerText = randomActivity;
    document.getElementById("result").style.display = "block";
}