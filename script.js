function checkAge() {
    const ageInput = document.getElementById('ageInput');
    const age = parseInt(ageInput.value);

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.style.display = 'none';
    });

    document.getElementById('ageCard').style.display = 'block';

    if (age >= 18) {
      document.getElementById('card-image').src = "https://www.shutterstock.com/shutterstock/photos/1070433977/display_1500/stock-vector-adult-man-cartoon-1070433977.jpg"
      document.getElementById('ageTitle').textContent = 'You are an adult';
      document.getElementById('ageDescription').textContent = 'Welcome to adulthood!';
    } else {

      document.getElementById('card-image').src ="https://i.pinimg.com/736x/ed/d6/95/edd6958648152244eb12dc0eec42ebd8.jpg"
      document.getElementById('ageTitle').textContent = 'You are a child';
      document.getElementById('ageDescription').textContent = 'Enjoy your childhood!';
    }
  }