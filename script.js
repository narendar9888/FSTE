const quizData = [
      { section: "Basics of Systems Thinking", question: "A system is defined as:", options: { A: "Random elements", B: "A set of interconnected elements producing patterns over time", C: "A single component", D: "Static structure" }, answer: "B" },
      { section: "Basics of Systems Thinking", question: "Systems thinking focuses on:", options: { A: "Individual parts", B: "Relationships between parts", C: "Random events", D: "Independent actions" }, answer: "B" },
      { section: "Basics of Systems Thinking", question: "Systems thinking is:", options: { A: "Linear", B: "Holistic", C: "Isolated", D: "Random" }, answer: "B" },
      { section: "Basics of Systems Thinking", question: "Systems thinking helps identify:", options: { A: "Symptoms", B: "Root causes", C: "Random outcomes", D: "Temporary results" }, answer: "B" },
      { section: "Basics of Systems Thinking", question: "Systems thinking mainly studies:", options: { A: "Events", B: "Patterns over time", C: "Individuals", D: "Random changes" }, answer: "B" },
      { section: "Basics of Systems Thinking", question: "A subsystem is:", options: { A: "A smaller system within a larger system", B: "A random component", C: "A disconnected element", D: "An independent system" }, answer: "A" },
      { section: "Basics of Systems Thinking", question: "Systems thinking is useful for solving:", options: { A: "Simple problems", B: "Complex problems", C: "Arithmetic problems", D: "Static problems" }, answer: "B" },
      { section: "Basics of Systems Thinking", question: "Systems thinking studies:", options: { A: "Interdependencies", B: "Isolation", C: "Randomness", D: "Static actions" }, answer: "A" },
      { section: "Basics of Systems Thinking", question: "Systems thinking approach focuses on:", options: { A: "Parts", B: "Relationships", C: "Isolation", D: "Events" }, answer: "B" },
      { section: "Basics of Systems Thinking", question: "Systems thinking helps understand:", options: { A: "System behaviour", B: "Random events", C: "Individual actions", D: "Static structures" }, answer: "A" },
      { section: "Basics of Systems Thinking", question: "The purpose of a system refers to:", options: { A: "Behaviour over time", B: "Events", C: "Rules", D: "Structures" }, answer: "A" },
      { section: "Basics of Systems Thinking", question: "Interconnections in systems mean:", options: { A: "Relationships between elements", B: "Isolation", C: "Boundaries", D: "Events" }, answer: "A" },
      { section: "Basics of Systems Thinking", question: "Systems thinking helps avoid:", options: { A: "Surface-level solutions", B: "Root causes", C: "Analysis", D: "Understanding" }, answer: "A" },
      { section: "Basics of Systems Thinking", question: "System behaviour is produced by:", options: { A: "Interactions", B: "Events", C: "Rules", D: "Individuals" }, answer: "A" },
      { section: "Basics of Systems Thinking", question: "Systems thinking is important for:", options: { A: "Policy making", B: "Problem solving", C: "Strategic planning", D: "All of the above" }, answer: "D" },
      { section: "Basics of Systems Thinking", question: "Systems are usually:", options: { A: "Static", B: "Dynamic", C: "Independent", D: "Fixed" }, answer: "B" },
      { section: "Basics of Systems Thinking", question: "Systems thinking studies:", options: { A: "Feedback", B: "Randomness", C: "Isolation", D: "Single events" }, answer: "A" },
      { section: "Basics of Systems Thinking", question: "Systems thinking encourages:", options: { A: "Holistic view", B: "Narrow view", C: "Linear thinking", D: "Isolation" }, answer: "A" },
      { section: "Basics of Systems Thinking", question: "Systems thinking identifies:", options: { A: "Patterns", B: "Causes", C: "Structures", D: "All of the above" }, answer: "D" },
      { section: "Basics of Systems Thinking", question: "Systems thinking approach is:", options: { A: "Fragmented", B: "Integrated", C: "Random", D: "Isolated" }, answer: "B" },


      { section: "Iceberg Model", question: "The iceberg model shows:", options: { A: "Ocean depth", B: "Hidden causes of events", C: "Weather", D: "Ice formation" }, answer: "B" },
      { section: "Iceberg Model", question: "The top of the iceberg represents:", options: { A: "Events", B: "Beliefs", C: "Structures", D: "Culture" }, answer: "A" },
      { section: "Iceberg Model", question: "The second level represents:", options: { A: "Patterns", B: "Events", C: "Mental models", D: "Beliefs" }, answer: "A" },
      { section: "Iceberg Model", question: "The third level is:", options: { A: "System structures", B: "Events", C: "Patterns", D: "Outcomes" }, answer: "A" },
      { section: "Iceberg Model", question: "The deepest level represents:", options: { A: "Mental models", B: "Patterns", C: "Events", D: "Outcomes" }, answer: "A" },
      { section: "Iceberg Model", question: "Mental models are:", options: { A: "Beliefs and assumptions", B: "Events", C: "Structures", D: "Patterns" }, answer: "A" },
      { section: "Iceberg Model", question: "Iceberg model helps identify:", options: { A: "Root causes", B: "Random behaviour", C: "Static structures", D: "Individual actions" }, answer: "A" },
      { section: "Iceberg Model", question: "Events are:", options: { A: "Observable actions", B: "Hidden causes", C: "Beliefs", D: "Values" }, answer: "A" },
      { section: "Iceberg Model", question: "Patterns represent:", options: { A: "Repeated events", B: "Random events", C: "Structures", D: "Beliefs" }, answer: "A" },
      { section: "Iceberg Model", question: "Structures influence:", options: { A: "Patterns", B: "Events", C: "Beliefs", D: "Actions" }, answer: "A" },
      { section: "Iceberg Model", question: "Iceberg model focuses on:", options: { A: "Systems behaviour", B: "Random data", C: "Static information", D: "Isolated events" }, answer: "A" },
      { section: "Iceberg Model", question: "Mental models influence:", options: { A: "System structure", B: "Events", C: "Patterns", D: "All" }, answer: "D" },
      { section: "Iceberg Model", question: "Iceberg model helps understand:", options: { A: "Deep causes", B: "Surface events", C: "Random actions", D: "Weather" }, answer: "A" },
      { section: "Iceberg Model", question: "The iceberg concept is used in:", options: { A: "Systems thinking", B: "Geography", C: "Biology", D: "Chemistry" }, answer: "A" },
      { section: "Iceberg Model", question: "The iceberg model explains:", options: { A: "Hidden system causes", B: "Surface-level events only", C: "Weather patterns", D: "Ocean currents" }, answer: "A" },

      { section: "Feedback Loops", question: "Feedback loops describe:", options: { A: "Circular cause-effect relationships", B: "Linear relationships", C: "Random actions", D: "Static structures" }, answer: "A" },
      { section: "Feedback Loops", question: "Positive feedback loop:", options: { A: "Reinforces change", B: "Stabilizes system", C: "Reduces growth", D: "Stops change" }, answer: "A" },
      { section: "Feedback Loops", question: "Negative feedback loop:", options: { A: "Reinforces growth", B: "Stabilizes system", C: "Creates chaos", D: "Destroys systems" }, answer: "B" },
      { section: "Feedback Loops", question: "Population growth is an example of:", options: { A: "Positive feedback", B: "Negative feedback", C: "Static system", D: "Random system" }, answer: "A" },
      { section: "Feedback Loops", question: "Body temperature regulation is:", options: { A: "Positive loop", B: "Negative loop", C: "Random loop", D: "Static loop" }, answer: "B" },
      { section: "Feedback Loops", question: "Feedback loops affect:", options: { A: "System behaviour", B: "Random behaviour", C: "Static behaviour", D: "Independent behaviour" }, answer: "A" },
      { section: "Feedback Loops", question: "Reinforcing loops are:", options: { A: "Positive loops", B: "Negative loops", C: "Static loops", D: "Random loops" }, answer: "A" },
      { section: "Feedback Loops", question: "Balancing loops are:", options: { A: "Positive loops", B: "Negative loops", C: "Growth loops", D: "Random loops" }, answer: "B" },
      { section: "Feedback Loops", question: "Feedback loops explain:", options: { A: "Patterns", B: "Events", C: "Structures", D: "Isolation" }, answer: "A" },
      { section: "Feedback Loops", question: "Feedback loops create:", options: { A: "System behaviour over time", B: "Random behaviour", C: "Static behaviour", D: "Isolated events" }, answer: "A" },
      { section: "Feedback Loops", question: "Feedback loops can cause:", options: { A: "Growth", B: "Stability", C: "Oscillation", D: "All" }, answer: "D" },
      { section: "Feedback Loops", question: "Feedback is important for:", options: { A: "System control", B: "Randomness", C: "Isolation", D: "Static systems" }, answer: "A" },
      { section: "Feedback Loops", question: "Feedback loops are central to:", options: { A: "Systems thinking", B: "Random theory", C: "Static analysis", D: "Linear models" }, answer: "A" },
      { section: "Feedback Loops", question: "Positive feedback loops lead to:", options: { A: "Exponential growth", B: "Stability", C: "Random behaviour", D: "Collapse" }, answer: "A" },
      { section: "Feedback Loops", question: "Negative feedback loops lead to:", options: { A: "System stability", B: "Unlimited growth", C: "Chaos", D: "Random outcomes" }, answer: "A" },

      { section: "System Archetypes", question: "\"Fixes That Fail\" refers to:", options: { A: "Permanent solutions", B: "Short-term solutions that create long-term problems", C: "Immediate success", D: "Stable systems" }, answer: "B" },
      { section: "System Archetypes", question: "Drifting Goals occurs when:", options: { A: "Standards increase", B: "Standards gradually decrease over time", C: "Systems collapse", D: "Competition increases" }, answer: "B" },
      { section: "System Archetypes", question: "Escalation occurs when:", options: { A: "Cooperation increases", B: "Two actors compete and continuously react to each other", C: "Systems stabilize", D: "Growth stops" }, answer: "B" },
      { section: "System Archetypes", question: "Limits to Success occurs when:", options: { A: "Resources are unlimited", B: "Growth slows due to constraints", C: "Growth continues forever", D: "Systems collapse suddenly" }, answer: "B" },
      { section: "System Archetypes", question: "Success to the Successful means:", options: { A: "Equal distribution of resources", B: "Early advantage leads to more resources and success", C: "Random success", D: "Declining growth" }, answer: "B" },
      { section: "System Archetypes", question: "Growth and Underinvestment occurs when:", options: { A: "Capacity expands quickly", B: "Investment is delayed while demand increases", C: "Systems collapse immediately", D: "Resources increase suddenly" }, answer: "B" },
      { section: "System Archetypes", question: "Shifting the Burden means:", options: { A: "Solving the root cause", B: "Using temporary fixes instead of fundamental solutions", C: "Ignoring the problem", D: "Eliminating symptoms" }, answer: "B" },
      { section: "System Archetypes", question: "Tragedy of the Commons occurs when:", options: { A: "Shared resources are used responsibly", B: "Individuals overuse shared resources for personal benefit", C: "Resources increase automatically", D: "Government control increases" }, answer: "B" },
      { section: "System Archetypes", question: "Overfishing is an example of:", options: { A: "Escalation", B: "Tragedy of the Commons", C: "Drifting goals", D: "Fixes that fail" }, answer: "B" },
      { section: "System Archetypes", question: "System archetypes help us:", options: { A: "Understand recurring system patterns", B: "Solve mathematical problems", C: "Analyze random events", D: "Study individual behavior" }, answer: "A" },
      { section: "System Archetypes", question: "Archetypes are:", options: { A: "Random system events", B: "Common structures that produce similar problems", C: "Static structures", D: "Linear solutions" }, answer: "B" },
      { section: "System Archetypes", question: "Archetypes help identify:", options: { A: "Leverage points in systems", B: "Random causes", C: "Weather patterns", D: "Static systems" }, answer: "A" },
      { section: "System Archetypes", question: "Escalation involves:", options: { A: "Balancing loops", B: "Reinforcing loops", C: "Static loops", D: "Random loops" }, answer: "B" },
      { section: "System Archetypes", question: "Limits to Success involve:", options: { A: "Reinforcing loops only", B: "Balancing loops that limit growth", C: "Random loops", D: "Static systems" }, answer: "B" },
      { section: "System Archetypes", question: "Archetypes are useful in:", options: { A: "Systems analysis", B: "Biology only", C: "Chemistry only", D: "Physics only" }, answer: "A" },
      { section: "System Archetypes", question: "Archetypes simplify:", options: { A: "Complex system behavior", B: "Mathematical equations", C: "Static systems", D: "Random data" }, answer: "A" },
      { section: "System Archetypes", question: "Archetypes explain:", options: { A: "Repeating system problems", B: "Random actions", C: "Isolated events", D: "Static behaviour" }, answer: "A" },
      { section: "System Archetypes", question: "System archetypes improve:", options: { A: "System design and decision making", B: "Weather prediction", C: "Random analysis", D: "Individual thinking" }, answer: "A" },
      { section: "System Archetypes", question: "Archetypes occur because:", options: { A: "Systems share similar structures", B: "Systems are random", C: "Systems are independent", D: "Systems collapse" }, answer: "A" },
      { section: "System Archetypes", question: "Archetypes help understand:", options: { A: "System dynamics", B: "Random events", C: "Static systems", D: "Individual behaviour" }, answer: "A" },


      { section: "Game Theory", question: "Game theory studies:", options: { A: "Random games", B: "Strategic decision making", C: "Weather patterns", D: "Physical systems" }, answer: "B" },
      { section: "Game Theory", question: "In game theory, players are:", options: { A: "Observers", B: "Decision makers", C: "Random actors", D: "Static units" }, answer: "B" },
      { section: "Game Theory", question: "Strategy refers to:", options: { A: "Plan of action", B: "Random event", C: "Static decision", D: "System boundary" }, answer: "A" },
      { section: "Game Theory", question: "Payoff refers to:", options: { A: "Risk", B: "Reward or outcome", C: "Cost only", D: "Random result" }, answer: "B" },
      { section: "Game Theory", question: "Nash Equilibrium is:", options: { A: "Random outcome", B: "Stable situation where no player benefits from changing strategy alone", C: "Temporary result", D: "Unstable system" }, answer: "B" },
      { section: "Game Theory", question: "Prisoner's Dilemma is:", options: { A: "Economic theory", B: "Game theory example", C: "Feedback loop", D: "System boundary" }, answer: "B" },
      { section: "Game Theory", question: "Game theory explains:", options: { A: "Cooperation and competition", B: "Weather systems", C: "Physical motion", D: "Chemical reactions" }, answer: "A" },
      { section: "Game Theory", question: "Free riding occurs when:", options: { A: "Individuals cooperate", B: "People benefit without contributing", C: "Systems stabilize", D: "Resources increase" }, answer: "B" },
      { section: "Game Theory", question: "Public goods problems involve:", options: { A: "Shared resources", B: "Private goods", C: "Individual goods", D: "Static resources" }, answer: "A" },
      { section: "Game Theory", question: "Game theory is widely used in:", options: { A: "Economics", B: "Politics", C: "Business strategy", D: "All of the above" }, answer: "D" },
      { section: "Game Theory", question: "Dominant strategy means:", options: { A: "Best choice regardless of others' actions", B: "Worst strategy", C: "Random strategy", D: "Unstable strategy" }, answer: "A" },
      { section: "Game Theory", question: "Strategic interaction means:", options: { A: "Decisions depend on actions of others", B: "Independent decisions", C: "Random decisions", D: "Static choices" }, answer: "A" },
      { section: "Game Theory", question: "Game theory assumes players are:", options: { A: "Irrational", B: "Rational decision makers", C: "Random actors", D: "Static players" }, answer: "B" },
      { section: "Game Theory", question: "Game theory is useful for studying:", options: { A: "Conflict situations", B: "Cooperation problems", C: "Strategic behaviour", D: "All of the above" }, answer: "D" },
      { section: "Game Theory", question: "Collective action problems arise when:", options: { A: "Individuals pursue personal interest over group interest", B: "Cooperation increases", C: "Systems stabilize", D: "Resources increase" }, answer: "A" },
      { section: "Game Theory", question: "Nash equilibrium does NOT guarantee:", options: { A: "Stability", B: "Optimal outcome", C: "Strategic balance", D: "Decision interaction" }, answer: "B" },
      { section: "Game Theory", question: "Game theory models:", options: { A: "Strategic interactions", B: "Random events", C: "Static systems", D: "Physical systems" }, answer: "A" },
      { section: "Game Theory", question: "Game theory can explain:", options: { A: "Price wars", B: "Arms race", C: "Business competition", D: "All of the above" }, answer: "D" },
      { section: "Game Theory", question: "Payoff matrix represents:", options: { A: "Player strategies and outcomes", B: "Weather data", C: "Static results", D: "Random outcomes" }, answer: "A" },
      { section: "Game Theory", question: "Cooperation in games often fails due to:", options: { A: "Incentives for self-interest", B: "Stability", C: "Equality", D: "Regulations" }, answer: "A" },
      { section: "Game Theory", question: "Game theory helps analyze:", options: { A: "Decision conflicts", B: "Strategic behaviour", C: "Competitive situations", D: "All of the above" }, answer: "D" },
      { section: "Game Theory", question: "In game theory, rational players aim to:", options: { A: "Maximize payoff", B: "Minimize effort", C: "Randomize actions", D: "Avoid decisions" }, answer: "A" },
      { section: "Game Theory", question: "Strategic games involve:", options: { A: "Multiple decision makers", B: "Single actor", C: "Random behaviour", D: "Static systems" }, answer: "A" },
      { section: "Game Theory", question: "Prisoner's dilemma shows:", options: { A: "Cooperation difficulty", B: "Random outcomes", C: "Static equilibrium", D: "Balanced systems" }, answer: "A" },
      { section: "Game Theory", question: "Game theory is also used in:", options: { A: "Evolutionary biology", B: "Economics", C: "Political science", D: "All of the above" }, answer: "D" },
      { section: "Game Theory", question: "Strategic behaviour involves:", options: { A: "Considering others' actions", B: "Random decisions", C: "Static planning", D: "Independent behaviour" }, answer: "A" },
      { section: "Game Theory", question: "Nash equilibrium occurs when:", options: { A: "Players cannot improve payoff by changing strategy alone", B: "Players cooperate fully", C: "Players stop playing", D: "Systems collapse" }, answer: "A" },
      { section: "Game Theory", question: "Game theory models are:", options: { A: "Mathematical models", B: "Random models", C: "Static models", D: "Physical models" }, answer: "A" },
      { section: "Game Theory", question: "Strategic conflicts often arise due to:", options: { A: "Limited resources", B: "Competing interests", C: "Incentives", D: "All of the above" }, answer: "D" },
      { section: "Game Theory", question: "Game theory helps understand:", options: { A: "Competitive strategies", B: "Cooperation dynamics", C: "Decision outcomes", D: "All of the above" }, answer: "D" },

      { section: "Behaviour Over Time", question: "Behaviour Over Time graphs show:", options: { A: "Static values", B: "System behaviour trends", C: "Random events", D: "Independent actions" }, answer: "B" },
      { section: "Behaviour Over Time", question: "BoT graphs help identify:", options: { A: "Patterns", B: "Trends", C: "Feedback loops", D: "All of the above" }, answer: "D" },
      { section: "Behaviour Over Time", question: "BoT graphs analyze:", options: { A: "Long-term system behaviour", B: "Random data", C: "Static values", D: "Individual actions" }, answer: "A" },
      { section: "Behaviour Over Time", question: "Dynamic equilibrium occurs when:", options: { A: "Inflow equals outflow", B: "Growth increases", C: "Decline happens", D: "Chaos occurs" }, answer: "A" },
      { section: "Behaviour Over Time", question: "Oscillation pattern means:", options: { A: "Continuous growth", B: "Up and down fluctuation", C: "Static system", D: "Constant decline" }, answer: "B" },
      { section: "Behaviour Over Time", question: "BoT graphs are used in:", options: { A: "Systems analysis", B: "Trend identification", C: "System modelling", D: "All of the above" }, answer: "D" },
      { section: "Behaviour Over Time", question: "BoT graphs help understand:", options: { A: "System dynamics", B: "Static behaviour", C: "Random outcomes", D: "Isolated events" }, answer: "A" },
      { section: "Behaviour Over Time", question: "BoT graphs reveal:", options: { A: "Patterns over time", B: "Static values", C: "Random actions", D: "Individual behaviour" }, answer: "A" },
      { section: "Behaviour Over Time", question: "BoT graphs help predict:", options: { A: "Future trends", B: "Random events", C: "Static systems", D: "Isolated actions" }, answer: "A" },
      { section: "Behaviour Over Time", question: "BoT graphs are important for:", options: { A: "Understanding system behaviour", B: "Random data analysis", C: "Static modelling", D: "Individual decisions" }, answer: "A" }




      
];
    let currentQuestionIndex = 0;
    let userAnswers = new Array(quizData.length).fill(null);
    let quizStarted = false;

    const totalQuestionsEl = document.getElementById('totalQuestions');
    const answeredCountEl = document.getElementById('answeredCount');
    const currentScoreEl = document.getElementById('currentScore');
    const progressFillEl = document.getElementById('progressFill');
    const progressTextEl = document.getElementById('progressText');
    const questionNumberEl = document.getElementById('questionNumber');
    const sectionNameEl = document.getElementById('sectionName');
    const questionTextEl = document.getElementById('questionText');
    const optionsContainerEl = document.getElementById('optionsContainer');
    const resultCardEl = document.getElementById('resultCard');
    const finalScoreEl = document.getElementById('finalScore');
    const percentageTextEl = document.getElementById('percentageText');
    const reviewListEl = document.getElementById('reviewList');

    function updateDashboard() {
      const answered = userAnswers.filter(answer => answer !== null).length;
      const score = quizData.reduce((sum, q, i) => sum + (userAnswers[i] === q.answer ? 1 : 0), 0);
      const progress = (answered / quizData.length) * 100;

      totalQuestionsEl.textContent = quizData.length;
      answeredCountEl.textContent = answered;
      currentScoreEl.textContent = score;
      progressFillEl.style.width = `${progress}%`;
      progressTextEl.textContent = `${Math.round(progress)}% completed`;
    }

    function renderQuestion() {
      if (!quizStarted) return;
      const current = quizData[currentQuestionIndex];
      questionNumberEl.textContent = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;
      sectionNameEl.textContent = current.section;
      questionTextEl.textContent = current.question;
      optionsContainerEl.innerHTML = '';

      Object.entries(current.options).forEach(([key, value]) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        if (userAnswers[currentQuestionIndex] === key) {
          optionDiv.classList.add('selected');
        }
        optionDiv.innerHTML = `<strong>${key}.</strong> <span>${value}</span>`;
        optionDiv.onclick = () => selectOption(key);
        optionsContainerEl.appendChild(optionDiv);
      });

      updateDashboard();
    }

    function selectOption(optionKey) {
      userAnswers[currentQuestionIndex] = optionKey;
      renderQuestion();
    }

    function nextQuestion() {
      if (!quizStarted) return;
      if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
      }
    }

    function previousQuestion() {
      if (!quizStarted) return;
      if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
      }
    }

    function startQuiz() {
      quizStarted = true;
      resultCardEl.style.display = 'none';
      renderQuestion();
    }

    function submitQuiz() {
      if (!quizStarted) return;
      const score = quizData.reduce((sum, q, i) => sum + (userAnswers[i] === q.answer ? 1 : 0), 0);
      const percentage = ((score / quizData.length) * 100).toFixed(2);
      finalScoreEl.textContent = `${score} / ${quizData.length}`;
      percentageTextEl.textContent = `Percentage: ${percentage}%`;
      resultCardEl.style.display = 'block';
      generateReview();
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }

    function generateReview() {
      reviewListEl.innerHTML = '';
      quizData.forEach((q, i) => {
        const item = document.createElement('div');
        const isCorrect = userAnswers[i] === q.answer;
        item.className = `review-item ${isCorrect ? 'correct-review' : 'wrong-review'}`;
        item.innerHTML = `
          <strong>Q${i + 1}. ${q.question}</strong>
          <p><strong>Your Answer:</strong> ${userAnswers[i] ? userAnswers[i] + '. ' + q.options[userAnswers[i]] : 'Not Answered'}</p>
          <p><strong>Correct Answer:</strong> ${q.answer}. ${q.options[q.answer]}</p>
          <p><strong>Section:</strong> ${q.section}</p>
        `;
        reviewListEl.appendChild(item);
      });
    }

    function resetQuiz() {
      userAnswers = new Array(quizData.length).fill(null);
      currentQuestionIndex = 0;
      quizStarted = false;
      questionNumberEl.textContent = 'Question 1';
      sectionNameEl.textContent = 'Section';
      questionTextEl.textContent = 'Click Start Quiz to begin.';
      optionsContainerEl.innerHTML = '';
      resultCardEl.style.display = 'none';
      updateDashboard();
    }

    function restartQuiz() {
      userAnswers = new Array(quizData.length).fill(null);
      currentQuestionIndex = 0;
      quizStarted = true;
      resultCardEl.style.display = 'none';
      renderQuestion();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function shuffleQuestions() {
      for (let i = quizData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [quizData[i], quizData[j]] = [quizData[j], quizData[i]];
      }
      userAnswers = new Array(quizData.length).fill(null);
      currentQuestionIndex = 0;
      quizStarted = true;
      resultCardEl.style.display = 'none';
      renderQuestion();
    }

    updateDashboard();