// quiz/script.js
const quizData = [
 
  {
    question: 'Kurikulum PAUD menekankan pada pendekatan pembelajaran yang bersifat...?',
    options: ['Tematik dan berbasis pengalaman langsung', 'Formal dan berbasis hafalan', 'Kompetitif dengan standar akademik tinggi', 'Berorientasi pada hasil ujian', 'Bebas tanpa aturan dan jadwal yang jelas'],
    answer: 'Tematik dan berbasis pengalaman langsung',
  },
  
  {
    question: 'Menurut prinsip dasar pengembangan kurikulum PAUD, pembelajaran pada anak usia dini harus bersifat...',
    options: [
      'Terstruktur dan berorientasi akademik',
      'Fleksibel dan menyesuaikan dengan minat serta kebutuhan anak',
      'Serius dan penuh aturan ketat',
      'Fokus pada hasil ujian dan evaluasi prestasi',
      ' Berbasis pada penguasaan teori yang kompleks',
    ],
    answer: 'Fleksibel dan menyesuaikan dengan minat serta kebutuhan anak',
  },
  {
    question: 'Apa langkah pertama yang harus dilakukan guru PAUD dalam merancang pembelajaran yang efektif?',
    options: ['Menyusun soal ujian akhir terlebih dahulu', 'Mengidentifikasi kebutuhan dan karakteristik anak didik', 'Menghafalkan teori pendidikan', 'Menyiapkan media ajar yang canggih', 'Meminta orang tua menentukan materi yang diajarkan'],
    answer: 'Mengidentifikasi kebutuhan dan karakteristik anak didik',
  },
  {
    question: ' Dalam pelaksanaan pembelajaran di PAUD, metode yang paling tepat untuk mengembangkan kreativitas anak adalah...',
    options: [
      'Ceramah panjang dengan materi yang padat',
      'Pembelajaran berbasis permainan (learning by playing)',
      'Hafalan materi tanpa interaksi',
      'Ujian setiap minggu',
      'Diskusi mendalam tentang konsep-konsep teori akademik'
    ],
    answer: 'Pembelajaran berbasis permainan (learning by playing)',
  },
  {
    question: ' Evaluasi dalam pembelajaran PAUD sebaiknya dilakukan dengan...',
    options: ['Hanya mengukur pencapaian akademik', 'Menggunakan tes tertulis setiap hari', 'Mengamati proses perkembangan anak melalui kegiatan sehari-hari', 'Menilai anak berdasarkan hafalan materi', 'Memberi nilai hanya berdasarkan hasil akhir pekerjaan anak'],
    answer: 'Mengamati proses perkembangan anak melalui kegiatan sehari-hari',
  },
  {
    question: 'Untuk memastikan pembelajaran berjalan efektif, guru PAUD perlu menggunakan media yang...',
    options: [
      'Kompleks dan sulit dipahami anak',
      'Sesuai dengan tingkat perkembangan dan minat anak',
      'Mahal dan modern agar menarik perhatian',
      'Tidak terlalu penting, karena fokus utama adalah teori',
      'Hanya berupa materi tulis saja',
    ],
    answer: 'Sesuai dengan tingkat perkembangan dan minat anak',
  },
  {
    question: 'Apa tujuan utama guru PAUD menggunakan berbagai strategi pembelajaran dalam kelas?',
    options: ['Agar anak cepat menguasai materi akademik', 'Agar anak terbiasa dengan suasana belajar yang kaku', 'Untuk merespons perbedaan gaya belajar dan kebutuhan individu setiap anak', ' Untuk meningkatkan nilai ujian anak secara keseluruhan', 'Agar pembelajaran lebih mudah diukur dengan angka'],
    answer: 'Untuk merespons perbedaan gaya belajar dan kebutuhan individu setiap anak',
  },
    {
    question: 'Apa manfaat utama penggunaan TIK dalam pembelajaran di PAUD?',
    options: ['Meningkatkan keterampilan anak dalam menggunakan teknologi canggih', 'Mempercepat proses penilaian akademik', 'Membuat pembelajaran lebih menarik dan interaktif bagi anak', ' Mengganti peran guru dalam mengajar', 'Mengurangi interaksi langsung antara guru dan anak'],
    answer: 'Membuat pembelajaran lebih menarik dan interaktif bagi anak',
  },
{
    question: 'Dalam penggunaan TIK di PAUD, hal yang perlu diperhatikan oleh guru adalah...',
    options: ['Memilih perangkat teknologi yang paling mahal', 'Memastikan perangkat TIK sesuai dengan usia dan perkembangan anak', 'Menggunakan TIK untuk semua kegiatan belajar tanpa pengecualian', 'Mengutamakan penggunaan internet dalam setiap aktivitas', 'Membiarkan anak belajar sendiri dengan perangkat teknologi'],
    answer: 'Memastikan perangkat TIK sesuai dengan usia dan perkembangan anak',
  },
     {
    question: 'Contoh penggunaan TIK yang efektif dalam pembelajaran di PAUD adalah...',
    options: ['Anak diminta menghafal materi dari internet', 'Guru menggunakan video interaktif untuk memperkenalkan konsep-konsep dasar', 'Setiap anak diwajibkan memiliki laptop sendiri', 'Menggunakan perangkat lunak yang kompleks dan berteknologi tinggi', 'Menggantikan seluruh metode pembelajaran manual dengan digital'],
    answer: 'Guru menggunakan video interaktif untuk memperkenalkan konsep-konsep dasar',
  },
       ];

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const retryButton = document.getElementById('retry');
const showAnswerButton = document.getElementById('showAnswer');

let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function displayQuestion() {
  const questionData = quizData[currentQuestion];

  const questionElement = document.createElement('div');
  questionElement.className = 'question';
  questionElement.innerHTML = questionData.question;

  const optionsElement = document.createElement('div');
  optionsElement.className = 'options';

  const shuffledOptions = [...questionData.options];
  shuffleArray(shuffledOptions);

  for (let i = 0; i < shuffledOptions.length; i++) {
    const option = document.createElement('label');
    option.className = 'option';

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'quiz';
    radio.value = shuffledOptions[i];

    const optionText = document.createTextNode(shuffledOptions[i]);

    option.appendChild(radio);
    option.appendChild(optionText);
    optionsElement.appendChild(option);
  }

  quizContainer.innerHTML = '';
  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(optionsElement);
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  if (selectedOption) {
    const answer = selectedOption.value;
    if (answer === quizData[currentQuestion].answer) {
      score++;
    } else {
      incorrectAnswers.push({
        question: quizData[currentQuestion].question,
        incorrectAnswer: answer,
        correctAnswer: quizData[currentQuestion].answer,
      });
    }
    currentQuestion++;
    selectedOption.checked = false;
    if (currentQuestion < quizData.length) {
      displayQuestion();
    } else {
      displayResult();
    }
  }
}

function displayResult() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'inline-block';
  resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
}

function retryQuiz() {
  currentQuestion = 0;
  score = 0;
  incorrectAnswers = [];
  quizContainer.style.display = 'block';
  submitButton.style.display = 'inline-block';
  retryButton.style.display = 'none';
  showAnswerButton.style.display = 'none';
  resultContainer.innerHTML = '';
  displayQuestion();
}

function showAnswer() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'none';

  let incorrectAnswersHtml = '';
  for (let i = 0; i < incorrectAnswers.length; i++) {
    incorrectAnswersHtml += `
      <p>
        <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
        <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
        <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
      </p>
    `;
  }

  resultContainer.innerHTML = `
    <p>You scored ${score} out of ${quizData.length}!</p>
    <p>Incorrect Answers:</p>
    ${incorrectAnswersHtml}
  `;
}

submitButton.addEventListener('click', checkAnswer);
retryButton.addEventListener('click', retryQuiz);
showAnswerButton.addEventListener('click', showAnswer);

displayQuestion();
