import JustValidate from 'just-validate';

const validationRules = {
  name: [
    { rule: 'required', errorMessage: 'Name is required' },
    { rule: 'minLength', value: 2, errorMessage: 'Name must be at least 2 characters' },
    { rule: 'maxLength', value: 50, errorMessage: 'Name must be less than 50 characters' },
    { rule: 'customRegexp', value: /^[a-zA-Zа-яА-Я\s]+$/, errorMessage: 'Name can only contain letters and spaces' }
  ],
  email: [
    { rule: 'required', errorMessage: 'Email is required' },
    { rule: 'email', errorMessage: 'Please enter a valid email address' }
  ],
  question: [
    { rule: 'required', errorMessage: 'Question is required' },
    { rule: 'minLength', value: 10, errorMessage: 'Question must be at least 10 characters' },
    { rule: 'maxLength', value: 500, errorMessage: 'Question must be less than 500 characters' }
  ],
  terms: [
    { rule: 'required', errorMessage: 'You must agree to the terms' }
  ]
};

const showSuccessMessage = (form) => {
  const message = document.createElement('div');
  message.className = 'contact-form__success';
  message.textContent = 'Thank you! Your message has been sent successfully.';
  form.appendChild(message);
  setTimeout(() => message.remove(), 5000);
};

const handleFormSubmit = (form, validation) => {
  const submitButton = form.querySelector('.contact-form__submit');
  const originalText = submitButton.textContent;
  
  submitButton.textContent = 'SENDING...';
  submitButton.disabled = true;
  
  setTimeout(() => {
    showSuccessMessage(form);
    form.reset();
    validation.refresh();
    submitButton.textContent = originalText;
    submitButton.disabled = false;
  }, 2000);
};

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const validation = new JustValidate('#contactForm', {
    errorFieldCssClass: 'error',
    errorLabelCssClass: 'error',
    successFieldCssClass: 'success',
  });

  Object.entries(validationRules).forEach(([field, rules]) => {
    validation.addField(`#${field}`, rules);
  });

  validation.onSuccess((event) => {
    event.preventDefault();
    handleFormSubmit(form, validation);
  });

  form.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('blur', () => validation.validateField(input.id));
    input.addEventListener('input', function() {
      if (this.classList.contains('error')) {
        this.classList.remove('error');
      }
    });
  });
});
