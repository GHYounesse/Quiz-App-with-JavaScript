// 
const Quest = [{
	q: "Which one of the five is least like the other four?",
	a: [{ text: "Dog", isCorrect: false },
	{ text: "Mouse", isCorrect: false },
	{ text: "Lion", isCorrect: false },
	{ text: "Snake", isCorrect: true }
	]

},
{
	q: "29, 27, 24, 20, 15… What is next?",
	a: [{ text: "7", isCorrect: false, isSelected: false },
	{ text: "9", isCorrect: true },
	{ text: "10", isCorrect: false },
	{ text: "11", isCorrect: false }
	]

},
{
	q: "Which one of the five choices makes the best comparison? PEACH is to HCAEP as 46251 is to:",
	a: [{ text: "25641", isCorrect: false },
	{ text: "26451", isCorrect: false },
	{ text: "15264", isCorrect: true },
	{ text: "12654", isCorrect: false }
	]

},
{
	q: "Mary, who is sixteen years old, is four times as old as her brother.How old will Mary be when she is twice as old as her brother?",
	a: [{ text: "20", isCorrect: false },
	{ text: "24", isCorrect: true },
	{ text: "25", isCorrect: false },
	{ text: "26", isCorrect: false }
	]

},
{
	q: "121, 144, 169, 196… What is next?",
	a: [{ text: "89", isCorrect: false },
	{ text: "95", isCorrect: true },
	{ text: "121", isCorrect: false },
	{ text: "135", isCorrect: false }
	]

}

]

let currQuest = 0
let total = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")
    const link = document.getElementById("link")
    link.style.display="none";
	question.textContent = Quest[currQuest].q;
	opt.innerHTML = ""

	for (let i = 0; i < Quest[currQuest].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Quest[currQuest].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadTotal() {
	const totalScore = document.getElementById("score")
    const link = document.getElementById("link")
    link.style.display="block";
	totalScore.textContent = `You scored ${total} out of ${Quest.length}`
}


function nextQuest() {
	if (currQuest < Quest.length - 1) {
		currQuest++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadTotal();
	}
}

function Vrai() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Quest[currQuest].a[selectedAns].isCorrect) {
		total++;
		console.log("Correct")
		nextQuest();
	} else {
		nextQuest();
	}
}
