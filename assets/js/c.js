//comments obvi
const subtitles = [
    "welcome",
    "stop reading start playing",
    "shuttle",
    "made",
    "github.com is col",
    "thx for visiting!",
    "stop touching me please",
    "over 260+ games and your reading a subtitle rn",
    "chinese song goes hard",
    "youtube.com",
    "i did not spend time doing this. you did",
    "enjoy ur stay thx",
    "gitlab",
    "someone out there cares for you. ",
    "this is cool",
    "play then work",
    "imagination is important smt smt - einstin",
    "chat is this real???",
    "over 260+ games.",
    "this is randomized",
    "this hits dif",
    "no im not adding roblox.",
    "no im not adding fortnite.",
    "no im not adding google.",
    "did you pray today?",
];

function xd() {
    const subtitleElement = document.getElementById("subtitle");
    const randomIndex = Math.floor(Math.random() * subtitles.length);
    const randomSubtitle = subtitles[randomIndex];
    subtitleElement.textContent = randomSubtitle;
}

xd();
setInterval(updateSubtitle, 10);
