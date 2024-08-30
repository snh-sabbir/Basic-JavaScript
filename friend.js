var marksMe = 82;
var marksFriend = 57;

if (marksMe >= 80) {
    if (marksFriend >= 80) {
        console.log("Let's go for launch.");
    } else if (marksFriend < 80 && marksFriend >=60) {
        console.log("Good luck next time.");
    } else if (marksFriend < 60 && marksFriend >= 40) {
        console.log("Keeping friend's messege unseen.....");
    } else if (marksFriend < 40) {
        console.log("Blocked.....");
    }
}
else{
    console.log("I'm going to sleep and be sad all day.")
}
