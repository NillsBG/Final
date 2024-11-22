document.getElementById('login-button').addEventListener('click', function () {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username === 'alumno' && password === '2024') {
      document.getElementById('login-section').style.display = 'none';
      document.getElementById('course-content').style.display = 'block';
    } else {
      document.getElementById('login-message').textContent = 'Usuario o contraseña incorrectos.';
    }
  });
  
  document.getElementById('start-quiz').addEventListener('click', function () {
    document.getElementById('course-content').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'block';
  });
  
  document.getElementById('submit-quiz').addEventListener('click', function () {
    const answers = {
      question1: 'correct',
      question2: ['correct', 'correct'],
      question3: 'correct',
    };
  
    let score = 0;
  
    // Pregunta 1
    const question1 = document.querySelector('input[name="question1"]:checked');
    if (question1 && question1.value === answers.question1) score++;
  
    // Pregunta 2
    const question2 = Array.from(document.querySelectorAll('input[name="question2"]:checked'))
      .map(input => input.value);
    if (JSON.stringify(question2) === JSON.stringify(answers.question2)) score++;
  
    // Pregunta 3
    const question3 = document.querySelector('select[name="question3"]').value;
    if (question3 === answers.question3) score++;
  
    document.getElementById('quiz-result').textContent = `Tu calificación es: ${score}/3`;
  });
  