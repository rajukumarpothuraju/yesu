let score = 0;
let answered = {};

let answerlist={
    1: ["genesis","ఆదికాండము", "adhikhandamu", "adikandamu","adikandamu","genesis", "Genesis", "GENESIS",
    "adikandamu", "Adhikandamu", "ADIKANDAMU","adikandamu",
    "ఆదికాండము", "ఆదికాండమును"],
  2: ["light", "వెలుగు", "velugu","Light", "LIGHT",
    "ప్రకాశం", "వెలుగు",],
  3:["Adam", "ఆదాము","adam","adamu","aadamu","adam", "Adam", "ADAM", "ఆదాము", "ఆదాం"],
  4:["eve","హవ్వ", "Eve", "EVE", "హవ్వ", "హవా","avva","ava","havva"] ,
  5: [
  "cain","కయిను", "Cain", "CAIN","kayenu",
  "kain", "Kain", "KAIN",
  "kayen", "Kayen", "KAYEN",
  "kayin", "Kayin", "KAYIN",
  "కాయిన్", "కయిను", "కయిన", "కయేను", "కయేను"
],
6: ["rainbow", "ధనుస్సు", "ధనుసు", "bow", "వర్ణధనుస్సు","indradanusu"],
  7: ["eve", "హవ్వ", "Eve", "EVE", "హవ్వ", "హవా","avva","ava","havva"],
  8: [ "హాబేలు","hebel","ఆబేలు", "హాబేలు","hebel", "abel","habel"],
  9: ["ship", "నౌక", "ఆర్క్", "ark","ship","padava","nouka","ship"],
  10: ["హాము","యాఫెత్","shem","ham","japheth","shemu","hamu","yapheth"],
  11: ["devunikanna paina vundamu ani","పేరు సంపాదించుకోవడం","peru sampadinchadam","self name","name"],
  12: ["సారా","sara","sarah","sarayi"],
  13: ["ఇస్సాకు","isaac","issaku","isaac"],
  14: ["agni cheta నాశనం cheyabadindi" ,"sodom destroyed"],
  15: ["ఉప్పు స్తంభం","salt pillar","uppu stambam","pillar of salt"],
  16: ["ఇస్సాకు","isaac","issaku"],
  17: ["రిబ్కా","rebecca","rebekah","ribka","rebkah","rebka"],
  18: ["యాకోబు మరియు ఈశావు","jacob","esau","yakobu","esavu","yakobu esavu","yakobu mariyu esavu"],
  19: ["బేతేలు","bethel","betelu"],
  20: ["లేయా","leah","leya"],
  21: ["రాహేలు","rahel","rachel"],
  22: ["యాకోబు","jacob","yakobu","jacob"],
  23: ["ఇష్మాయేలీయులకు",
  "ishmaelites",
  "ishmailites",
  "ఇష్మాయేలీయులు",
  "ఇష్మాయేలీయ",
  "ishmaelite traders",
  "merchantmen",
  "ishmayeliyaluku"
    
  ],
  24: ["ఈజిప్టు","egypt","ejiptu"],
  25: ["పోతిఫరు","ఇష్మాయేలీయుల",
  "ishmaelites",
  "ishmailites",
  "ఇష్మాయేలీయులు",
  "ఇష్మాయేలీయ",
  "ishmaelite traders",
  "merchantmen",
  "ishmayeliyaluku","potiphar","potiparu"],
  26: [
  "రంగులా రంగుల వస్త్రం", "వస్త్రం",
  "coat",
  "vastram",
  "dress",
  "వర్ణవస్త్రం",
  "colorful coat",
  "special coat",
  "రంగులా రంగులా వస్త్రం" // ✅ నీ కోరినది కూడా add చేశాను
],
27: [
  "రాహేలు",
  "rahel",
  "rachel",
  "leah rachel","rahelu" // ఎవరికైనా mix చేసి చెప్పినా గుర్తు పడతాం
],

  28: ["యోసేపు","joseph","yosepu"],
  29: ["యోసేపు","joseph","yosepu"],
 30: [
  "పోతిఫరు",
  "potiphar",
  "potiparu",
  "పోతిఫర్",
  "potipar"
],

  31: ["యోసేపు","joseph","yosepu"],
  32: ["రూబేను","reuben","rubenu"],
  33: ["రాహేలు","rahel","rachel"],
  34: ["యాకోబు","jacob","yakobu"],
  35: ["పన్నెండు","12","twelve","pannendu"],
  36: ["మనష్షే","manasseh","manashe","మనశ్శే","mannishe","manishe"],
  37: ["ఎఫ్రయిము","ephraim","efrayim","ఎఫ్రయిమ్","eprayemu"],
  38: ["lothu","lot","lotu"],
  39: ["esavu","esavu"],
  40: ["అబ్రాహాము","abraham","abrahamu"],
  41: ["రిబ్కా","rebecca","rebekah","ribka"],
  42: ["ఇష్మాయేలు","ishmael","ishmail","ఇష్మాయేలు"],
  43: ["రూబేను","reuben","rubenu"],
  44: ["బెన్యామీను","benjamin","benyamin","benyaminu"],
  45: ["సారా","sara","sarah"],
  46: ["హాగరు","hagar","haggar","hagru","hagaru"],
  47: ["కానాను","canaan","kaananu","కానాను దేశం"],
  48: ["బేతూయేలు","bethuel","betuel","బేతూయేలు","bethuyelu","bethuyel"],
  49: ["లాబాను","laban","labanu"],
  50: ["బేతూయేలు","bethuel","betuel","bethuyel"],
  51: ["రాహేలు","rachel","rahel","rahelu"],
  52: ["లేయా రాహేలు","leah rachel","leya rahel","leah and rachel","leya rahelu"],
  53: ["బెన్యామీను","benjamin","benyamin","benyaminu"],
  54: ["రాహేలు","rachel","rahel","rahelu"],
  55: ["యాకోబు ఈశావు","jacob esau","yakobu esavu","yakob esav"],
 56: [
  "బేతేలు",
  "bethel",
  "betelu"
],

  57: ["ఇస్రాయేలు","israel","israyelu"],
 58: [
  "దోతాను",
  "దోతాను బావి",
  "dothan",
  "dothanu",
  "dothan pit"
],

  59: ["యాకోబు","jacob","yakobu"],
  60: ["రూబేను షిమ్యోను లేవీ యూదా ఇస్సాఖారు జెబులూను","6 members","షిమ్యోను","లేవీ","యూదా","ఇస్సాఖారు","జెబులూను",
       "reuben","simeon","levi","judah","issachar","zebulun"]

  
};
function checkanswer(qno){
  // input box value తీసుకోవడం
  const input = document.getElementById("question" + qno);
  let userAnswer = input.value.trim().toLowerCase();
  let result = document.getElementById("result" + qno);

  // 1️⃣ Empty check
  if(userAnswer === ""){
    result.textContent = "❌ దయచేసి సమాధానం ఇవ్వండి";
    result.style.color = "red";
    return false;
  }

  // 2️⃣ Already answered check
  if(answered[qno]){
    result.textContent = "✅ ఈ ప్రశ్నకి ఇప్పటికే mark ఇచ్చారు!";
    result.style.color = "blue";
    return false;
  }

  // 3️⃣ Correct/Wrong check
  if(answerlist[qno].includes(userAnswer)){
    result.textContent = "✅ Correct answer!";
    result.style.color = "green";
    score++;
    answered[qno] = true; // mark as answered
  } else {
    // అన్ని సరైన సమాధానాలు చూపించాలి
    let htmlAnswers = answerlist[qno]
    .slice(0, 2)
    .map(ans => {
      return `<span style="color:green;">${ans}</span>`;
    });
    let finalString = htmlAnswers.join(", ");
    result.innerHTML = `❌ Wrong answer! <br> ✅ సరైన సమాధానాలు: ${finalString}`;
  }

  // 4️⃣ Score update
  document.getElementById("scoreBoard").textContent = "Score: " + score;
  return false;
}


