const quizData = [
      { section: "Basics of Systems Thinking", question: "A system is defined as:", options: { A: "A random collection of elements", B: "A set of interconnected elements producing patterns over time", C: "A single independent component", D: "A static structure" }, answer: "B" },
      { section: "Basics of Systems Thinking", question: "Systems thinking focuses mainly on:", options: { A: "Individual components", B: "Relationships and interactions", C: "Random behaviour", D: "Isolated events" }, answer: "B" },
      { section: "Basics of Systems Thinking", question: "Systems thinking is considered:", options: { A: "Linear", B: "Holistic and non-linear", C: "Static", D: "Individualistic" }, answer: "B" },
      { section: "Basics of Systems Thinking", question: "Systems thinking helps identify:", options: { A: "Short-term events", B: "Root causes of problems", C: "Random outcomes", D: "Individual behaviour only" }, answer: "B" },
      { section: "Basics of Systems Thinking", question: "Which of the following is NOT a characteristic of a system?", options: { A: "Elements", B: "Interconnections", C: "Purpose", D: "Isolation" }, answer: "D" },
      { section: "Basics of Systems Thinking", question: "Systems thinking mainly studies:", options: { A: "Immediate events", B: "Long-term patterns", C: "Random actions", D: "Individual decisions" }, answer: "B" },
      { section: "Basics of Systems Thinking", question: "A subsystem is:", options: { A: "A larger system", B: "A smaller system inside a larger system", C: "An unrelated element", D: "A random process" }, answer: "B" },
      { section: "Basics of Systems Thinking", question: "Systems thinking is useful for solving:", options: { A: "Simple problems", B: "Complex problems", C: "Mathematical problems only", D: "Mechanical problems only" }, answer: "B" },
      { section: "Basics of Systems Thinking", question: "Systems thinking studies:", options: { A: "Independent elements", B: "Interdependencies", C: "Random behaviour", D: "Static events" }, answer: "B" },
      { section: "Basics of Systems Thinking", question: "Systems thinking approach is mostly used in:", options: { A: "Complex systems", B: "Simple arithmetic", C: "Isolated problems", D: "Static environments" }, answer: "A" },

      { section: "Iceberg Model", question: "The Iceberg Model explains:", options: { A: "Ocean temperature", B: "Hidden structures behind events", C: "Weather conditions", D: "Ice formation" }, answer: "B" },
      { section: "Iceberg Model", question: "The top of the iceberg represents:", options: { A: "Mental models", B: "System structure", C: "Events", D: "Beliefs" }, answer: "C" },
      { section: "Iceberg Model", question: "The second level of the iceberg represents:", options: { A: "Events", B: "Patterns and trends", C: "Beliefs", D: "Policies" }, answer: "B" },
      { section: "Iceberg Model", question: "The third level of the iceberg is:", options: { A: "System structures", B: "Events", C: "Patterns", D: "Actions" }, answer: "A" },
      { section: "Iceberg Model", question: "The deepest level of iceberg model is:", options: { A: "System behaviour", B: "Mental models", C: "Events", D: "Trends" }, answer: "B" },
      { section: "Iceberg Model", question: "Mental models represent:", options: { A: "Physical structures", B: "Beliefs and assumptions", C: "Events", D: "Policies" }, answer: "B" },
      { section: "Iceberg Model", question: "The iceberg model is used to understand:", options: { A: "Ice melting", B: "Root causes of problems", C: "Ocean currents", D: "Weather patterns" }, answer: "B" },
      { section: "Iceberg Model", question: "Events in the iceberg model are:", options: { A: "Hidden causes", B: "Observable actions", C: "Beliefs", D: "Structures" }, answer: "B" },
      { section: "Iceberg Model", question: "Patterns represent:", options: { A: "Random behaviour", B: "Repeated events over time", C: "Structures", D: "Beliefs" }, answer: "B" },
      { section: "Iceberg Model", question: "The iceberg model helps identify:", options: { A: "Surface-level events", B: "Deep systemic causes", C: "Ocean systems", D: "Random data" }, answer: "B" },

      { section: "Feedback Loops", question: "A feedback loop is:", options: { A: "A linear process", B: "A circular cause-effect relationship", C: "A random action", D: "A single event" }, answer: "B" },
      { section: "Feedback Loops", question: "Positive feedback loops:", options: { A: "Stabilize systems", B: "Reinforce change", C: "Stop growth", D: "Reduce effects" }, answer: "B" },
      { section: "Feedback Loops", question: "Negative feedback loops:", options: { A: "Increase growth", B: "Stabilize systems", C: "Cause chaos", D: "Destroy systems" }, answer: "B" },
      { section: "Feedback Loops", question: "Example of positive feedback loop:", options: { A: "Population growth", B: "Temperature control", C: "Homeostasis", D: "Regulation" }, answer: "A" },
      { section: "Feedback Loops", question: "Example of negative feedback loop:", options: { A: "Climate warming cycle", B: "Body temperature regulation", C: "Viral spread", D: "Population explosion" }, answer: "B" },
      { section: "Feedback Loops", question: "Feedback loops explain:", options: { A: "Random changes", B: "System behaviour", C: "Weather patterns", D: "Mathematical equations" }, answer: "B" },
      { section: "Feedback Loops", question: "Reinforcing loops are also called:", options: { A: "Positive loops", B: "Negative loops", C: "Balanced loops", D: "Static loops" }, answer: "A" },
      { section: "Feedback Loops", question: "Balancing loops are also called:", options: { A: "Positive loops", B: "Negative loops", C: "Growth loops", D: "Random loops" }, answer: "B" },
      { section: "Feedback Loops", question: "Feedback loops mainly affect:", options: { A: "System behaviour over time", B: "Random events", C: "Static systems", D: "Single elements" }, answer: "A" },
      { section: "Feedback Loops", question: "Feedback loops can create:", options: { A: "Patterns", B: "Randomness", C: "Isolation", D: "Static conditions" }, answer: "A" },

      { section: "Elements & Interconnections", question: "Elements of a system are:", options: { A: "Parts of the system", B: "Random variables", C: "Independent objects", D: "Isolated units" }, answer: "A" },
      { section: "Elements & Interconnections", question: "Tangible elements are:", options: { A: "Visible components", B: "Invisible ideas", C: "Beliefs", D: "Policies" }, answer: "A" },
      { section: "Elements & Interconnections", question: "Intangible elements include:", options: { A: "Buildings", B: "Machines", C: "Beliefs and culture", D: "Roads" }, answer: "C" },
      { section: "Elements & Interconnections", question: "Intangible elements are often:", options: { A: "Less important", B: "More powerful", C: "Unnecessary", D: "Static" }, answer: "B" },
      { section: "Elements & Interconnections", question: "Interconnections describe:", options: { A: "Relationships between elements", B: "Isolated parts", C: "Independent systems", D: "Static structures" }, answer: "A" },
      { section: "Elements & Interconnections", question: "Material flow refers to:", options: { A: "Movement of tangible items", B: "Ideas", C: "Beliefs", D: "Policies" }, answer: "A" },
      { section: "Elements & Interconnections", question: "Information flow refers to:", options: { A: "Physical movement", B: "Data and signals", C: "Buildings", D: "Machines" }, answer: "B" },
      { section: "Elements & Interconnections", question: "System purpose reflects:", options: { A: "Behaviour over time", B: "Random events", C: "Individual actions", D: "Static goals" }, answer: "A" },
      { section: "Elements & Interconnections", question: "System purpose is often determined by:", options: { A: "Official mission", B: "Actual behaviour", C: "Government policy", D: "Design" }, answer: "B" },
      { section: "Elements & Interconnections", question: "Overanalyzing elements can cause:", options: { A: "Better understanding", B: "Fragmented understanding", C: "Growth", D: "Stability" }, answer: "B" },

      { section: "System Archetypes", question: "System archetypes represent:", options: { A: "Random events", B: "Common patterns in systems", C: "Unique problems", D: "Static models" }, answer: "B" },
      { section: "System Archetypes", question: "\"Fixes that Fail\" refers to:", options: { A: "Successful solutions", B: "Short-term fixes causing long-term problems", C: "Random failures", D: "Quick improvements" }, answer: "B" },
      { section: "System Archetypes", question: "Drifting goals occur when:", options: { A: "Standards increase", B: "Standards gradually decline", C: "Goals disappear", D: "Systems collapse" }, answer: "B" },
      { section: "System Archetypes", question: "Escalation happens when:", options: { A: "Cooperation increases", B: "Competition intensifies", C: "Systems stabilize", D: "Growth stops" }, answer: "B" },
      { section: "System Archetypes", question: "Limits to Success occurs due to:", options: { A: "Infinite resources", B: "Resource constraints", C: "Random behaviour", D: "Technology growth" }, answer: "B" },
      { section: "System Archetypes", question: "Success to the Successful means:", options: { A: "Equal resource distribution", B: "Early advantage leads to more success", C: "Random growth", D: "Declining success" }, answer: "B" },
      { section: "System Archetypes", question: "Growth and Underinvestment occurs when:", options: { A: "Capacity increases quickly", B: "Investment is delayed", C: "Systems collapse immediately", D: "Resources increase" }, answer: "B" },
      { section: "System Archetypes", question: "Shifting the Burden occurs when:", options: { A: "Root causes are solved", B: "Quick fixes replace fundamental solutions", C: "Problems disappear", D: "Systems stabilize" }, answer: "B" },
      { section: "System Archetypes", question: "Tragedy of the Commons occurs when:", options: { A: "Shared resources are overused", B: "Resources increase", C: "Cooperation improves", D: "Regulation increases" }, answer: "A" },
      { section: "System Archetypes", question: "Overfishing is an example of:", options: { A: "Tragedy of commons", B: "Escalation", C: "Fixes that fail", D: "Drift goals" }, answer: "A" },

      { section: "Game Theory", question: "Game theory studies:", options: { A: "Random games", B: "Decision making when outcomes depend on others", C: "Computer gaming", D: "Sports" }, answer: "B" },
      { section: "Game Theory", question: "Players in game theory are:", options: { A: "Observers", B: "Decision makers", C: "Random actors", D: "Systems" }, answer: "B" },
      { section: "Game Theory", question: "Payoff refers to:", options: { A: "Cost", B: "Reward or outcome", C: "Risk", D: "Penalty" }, answer: "B" },
      { section: "Game Theory", question: "Nash equilibrium is:", options: { A: "Random outcome", B: "Stable strategy situation", C: "Temporary result", D: "Unstable system" }, answer: "B" },
      { section: "Game Theory", question: "Prisoner's dilemma is an example of:", options: { A: "Linear thinking", B: "Game theory", C: "Feedback loop", D: "System boundary" }, answer: "B" },
      { section: "Game Theory", question: "Game theory helps explain:", options: { A: "Cooperation and competition", B: "Weather patterns", C: "Economic inflation", D: "Energy systems" }, answer: "A" },
      { section: "Game Theory", question: "Game theory examines:", options: { A: "Strategic interaction", B: "Random events", C: "Static systems", D: "Isolated behaviour" }, answer: "A" },
      { section: "Game Theory", question: "Collective action problems include:", options: { A: "Public goods", B: "Free riding", C: "Resource depletion", D: "All of the above" }, answer: "D" },
      { section: "Game Theory", question: "Free riding occurs when:", options: { A: "People cooperate", B: "People benefit without contributing", C: "Systems stabilize", D: "Resources increase" }, answer: "B" },
      { section: "Game Theory", question: "Nash equilibrium occurs when:", options: { A: "Players benefit by changing strategy", B: "No player benefits from changing strategy alone", C: "Cooperation always happens", D: "Competition ends" }, answer: "B" },

      { section: "Behaviour Over Time", question: "Behaviour Over Time graphs show:", options: { A: "Random data", B: "Variable changes over time", C: "Static values", D: "Isolated events" }, answer: "B" },
      { section: "Behaviour Over Time", question: "BoT graphs help identify:", options: { A: "Patterns", B: "Trends", C: "Feedback loops", D: "All of the above" }, answer: "D" },
      { section: "Behaviour Over Time", question: "Dynamic equilibrium occurs when:", options: { A: "Inflow equals outflow", B: "Growth increases", C: "Decline happens", D: "Systems collapse" }, answer: "A" },
      { section: "Behaviour Over Time", question: "Oscillation patterns show:", options: { A: "Continuous growth", B: "Up-down fluctuations", C: "Stability", D: "Decline" }, answer: "B" },
      { section: "Behaviour Over Time", question: "Systems thinking uses BoT graphs to:", options: { A: "Predict random events", B: "Understand system behaviour", C: "Remove feedback loops", D: "Stabilize systems" }, answer: "B" }
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