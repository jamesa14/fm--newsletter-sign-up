const newsletter = document.querySelector('.js-newsletter');
const newsletterSuccess = document.querySelector('.js-newsletter-success');
const form = document.querySelector('form');
const message = document.querySelector('.message');
const closeButton = document.querySelector('.js-close-success');

function handleFormSubmit(e) {
  e.preventDefault();
  const email = form.querySelector('[name="email"]');

  if (email.value === '') {
    message.textContent = 'Email cannot be blank';
    email.classList.add('has-error');
  } else {
    if (validateEmail(email.value)) {
      message.textContent = '';
      email.classList.remove('has-error');
      newsletter.classList.add('hidden');
      newsletterSuccess.classList.remove('hidden');
      form.reset();
    } else {
      message.textContent = 'Valid email required';
      email.classList.add('has-error');
    }
  }
} 

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function closeSuccessMessage() {
  newsletter.classList.remove('hidden');
  newsletterSuccess.classList.add('hidden');
}

form.addEventListener('submit', handleFormSubmit);
closeButton.addEventListener('click', closeSuccessMessage);