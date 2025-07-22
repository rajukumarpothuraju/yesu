

<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

// ✅ Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyD9juuO9qTf66xywHKZvVraDVYIOo0XABw",
  authDomain: "new-bible-quiz-app.firebaseapp.com",
  databaseURL: "https://new-bible-quiz-app-default-rtdb.firebaseio.com",
  projectId: "new-bible-quiz-app",
  storageBucket: "new-bible-quiz-app.firebasestorage.app",
  messagingSenderId: "686170969568",
  appId: "1:686170969568:web:31d3e10ed615dba548c785"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

// --------------------
// ✅ GLOBAL VARIABLES
// --------------------
let score = 0;
let answered = {};
document.getElementById("scoreBoard").textContent = "Score: 0";

// --------------------
// ✅ Login అయ్యిన వెంటనే score reset చేయడం
// --------------------
onAuthStateChanged(auth, (user) => {
  if (user) {
    // 👉 ప్రతి సారి login లేదా page reload తర్వాత score reset
    set(ref(db, 'scores/' + user.uid), {
      score: 0,
      timestamp: Date.now()
    })
    .then(() => {
      console.log("✅ Score reset done");
      score = 0;
      answered = {};
      document.getElementById("scoreBoard").textContent = "Score: 0";
    })
    .catch((err) => console.error("❌ reset error", err));
  } else {
    console.warn("⚠️ user not logged in");
  }
});

// --------------------
// ✅ Save score
// --------------------
function saveScoreToFirebase() {
  const user = auth.currentUser;
  if (!user) {
    console.log("❌ User not logged in so not saving");
    return;
  }
  set(ref(db, 'scores/' + user.uid), {
    score: score,
    timestamp: Date.now()
  })
    .then(() => console.log("✅ Score Saved to Firebase:", score))
    .catch((err) => console.error("❌ Score Save Error", err));
}

// --------------------
// ✅ Levenshtein helper
// --------------------
function levenshtein(a, b) {
  const matrix = Array.from({ length: a.length + 1 }, () => []);
  for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
  for (let j = 0; j <= b.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      matrix[i][j] =
        a[i - 1] === b[j - 1]
          ? matrix[i - 1][j - 1]
          : Math.min(
              matrix[i - 1][j - 1] + 1,
              matrix[i][j - 1] + 1,
              matrix[i - 1][j] + 1
            );
    }
  }
  return matrix[a.length][b.length];
}

// --------------------
// ✅ ANSWER LIST
// --------------------
const answerlist = {
  1: ["2వ రోజు","2 రోజు","రెండవ రోజు","2nd day","second day"],
  2: ["మోషే","moshe","moses"],
  3: ["1533","ఒకవేలు ఐదు వందలు ముప్పైమూడు","1533 verses"],
  4: ["ఆదికాండము 3:15","genesis 3:15","3:15","మూడవ అధ్యాయం 15వ వచనం"],
  5: ["నోదు","nod","nothu","nodo"],
  6: ["యూబాలు","jubal","yubalu"],
  7: ["ఓదార్పు","comfort","odaarpu","odarp"],
  8: ["చితిసారకపు చెట్టు","gopher wood","gofor","gopher","chitisarapu"],
  9: ["ఏడవ నెల 17వ రోజు","7th month 17th day","seventh month","17వ రోజు"],
  10: ["హవీలా","havila","havilah"],
  11: ["నిమ్రోదు","nimrod","nimrodhu"],
  12: ["షావే లోయ","shaveh valley","shave","shawe"],
  13: ["మెల్కీసెదెకు","melchizedek","melkisedeku"],
  14: ["యిష్మాయేలు","ishmael","ishmail"],
  15: ["అబీమెలెకు","abimelech","abimelek"],
  16: ["బేతేలు","bethel","betelu"],
  17: ["అనా","anah","ana"],
  18: ["జప్నత్ప నేహు","zaphnath paaneah","zapnath","japnathpanehu"],
  19: ["ఫరోరాజు","pharaoh","pharo","paro"],
  20: ["సప్తజల ధారలు కలిగిన బావి","beersheba","beer sheba","seven wells"],
  21: ["జెబూలూను","zebulun","jebulunu"],
  22: ["నఫ్తాలి","naphtali","nafthali"],
  23: ["దాసు","dan","daasu"],
  24: ["బెన్యామీను","benjamin","benyamin","benyaminu"],
  25: ["హిత్తీయుడు ఎఫ్రోను","ephron","hitthiyudu","hethite ephron"],
  26: ["తూబల్కయీను","tubal-cain","tubal kayin","tubal"],
  27: ["ఆదా","సిల్లా","adha","zilla","adah","zillah"],
  28: ["ఏడవ నెల పదియేడవ రోజు","7th month 17th day","seventeenth","17వ రోజు"],
  29: ["నేబాయోతు","nebaoth","nebayoth"],
  30: ["బాశెమతు","bashemath","basemath"],
  31: ["భక్ష్యకారుల అధిపతి","chief baker","baker head","bhakshyakaarula adhipathi"],
  32: ["ఆసెనతు","asenath","asenatu"],
  33: ["పోతీఫెరు","potiphera","potipherah","potipheru","ఓనుకు యాజకుడు"],
  34: ["గోషెను","goshen","gosenu"],
  35: ["బెన్నమ్మి","ben-ammi","benammi"],
  36: ["బెతూయేలు","bethuel","bethuyel","bethuvel"],
  37: ["పీషోను","pishon","pison","peeshonu"],
  38: ["హవీలా","havila","havilah"],
  39: ["గీహోను","gihon","gihonu"],
  40: ["బేయేర్ లహాయిరోయి","beer-lahai-roi","beer lahai roi","bayyer lahairoi"],
  41: ["దెబోరా","deborah","debora"],
  42: ["నూట ముప్పది","130","130 years","nootu muppadi"],
  43: ["ఏరు","er","eru","airu"],
  44: ["జప్నత్ప నేహు","zaphnath paaneah","zapnath"],
  45: ["డెబ్బది ఐదు సంవత్సరములు","75 years","debbaidi aidu","75"],
  46: ["బేత్లెహేము ఎఫ్రాతా మార్గమున","bethlehem","efratha road","bethlehem ephrath"],
  47: ["నూటపది సంవత్సరములు","110 years","110","nootapadi samvatsaralu"],
  48: ["పిచుల వృక్షము","tamarisk tree","tamarisk","pichula vruksham"],
  49: ["పదుమూడేళ్ళవాడు","13 years","13","padumoodu samvatsaralu"],
  50: ["నోదు","nod","nodo","nodu"]
};

// --------------------
// ✅ CHECK ANSWER
// --------------------
window.checkanswer = function(qno) {
  const input = document.getElementById("question" + qno);
  const result = document.getElementById("result" + qno);
  let userAnswer = input.value.trim().toLowerCase();

  if (answered[qno]) {
    result.textContent = "🔒 ఈ ప్రశ్నకి సమాధానం ఇప్పటికే submit అయ్యింది!";
    result.style.color = "blue";
    return false;
  }
  if (userAnswer === "") {
    result.textContent = "❌ దయచేసి సమాధానం ఇవ్వండి";
    result.style.color = "red";
    return false;
  }

  let isCorrect = false;
  for (let ans of answerlist[qno]) {
    let cleanAns = ans.toLowerCase().trim();
    if (cleanAns === userAnswer || levenshtein(cleanAns, userAnswer) <= 2) {
      isCorrect = true;
      break;
    }
  }

  if (isCorrect) {
    result.textContent = "✅ Correct answer!";
    result.style.color = "green";
    score++;
  } else {
    result.innerHTML = `❌ Wrong answer!<br>✅ సరైన సమాధానం: <span style="color:green;">${answerlist[qno][0]}</span>`;
    result.style.color = "red";
  }

  answered[qno] = true;
  input.disabled = true;
  document.getElementById("scoreBoard").textContent = "Score: " + score;

  // ⭐ Save every time
  saveScoreToFirebase();
  return false;
};
</script>

