$('#preview-btn').removeClass('active');
const form = document.getElementById('userform');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const phone = document.getElementById('phone');
const code = document.getElementById('code');
let isValid = true;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    isValid = validateForm();
    if (isValid) {
        addBadge();
        $("#userform")[0].reset();
        $('#preview-btn').toggleClass('active');
    } else {
        // Gérer le cas où le formulaire n'est pas valide
    }
});

function validateForm() {
    let isValid = true;

    // Validate first name (non-empty)
    if (firstname.value.trim() === '') {
        showError('firstname', 'First name is required.');
        isValid = false;
    } else {
        hideError('firstname');
    }

    // Validate last name (non-empty)
    if (lastname.value.trim() === '') {
        showError('lastname', 'Last name is required.');
        isValid = false;
    } else {
        hideError('lastname');
    }

    // Validate phone number (format: +257 xx xx xx xx)
    const phonePattern = /^\+\d{3} \d{2} \d{2} \d{2} \d{2}$/;
    if (!phonePattern.test(phone.value)) {
        showError('phone', 'Please enter a valid phone number (+257 xx xx xx xx).');
        isValid = false;
    } else {
        hideError('phone');
    }

    // Validate super agent code (non-empty)
    if (code.value.trim() === '') {
        showError('code', 'Super Agent Code is required.');
        isValid = false;
    } else {
        hideError('code');
    }

    return isValid;
}

function showError(fieldId, message) {
    const errorSpan = document.getElementById(`${fieldId}-error`);
    errorSpan.style.display = 'block';
    errorSpan.textContent = message;
    errorSpan.style.color = 'rgb(193, 57, 57)';
}

function hideError(fieldId) {
    const errorSpan = document.getElementById(`${fieldId}-error`);
    errorSpan.textContent = '';
}

function addBadge() {
      const namebadge = document.getElementById('namebadge');
      const phonebadge = document.getElementById('phonebadge');
      const codebadge = document.getElementById('codebadge');
  
      namebadge.innerHTML = `${firstname.value.toUpperCase()} ${lastname.value}`;
      phonebadge.innerHTML = `${phone.value}`;
      codebadge.innerHTML = `${code.value}`;
  
      // Générer le code QR une fois que le badge est ajouté
      var usercode = $('#code').val();
      if (usercode.trim() !== '') {
            document.getElementById("qrcode").innerHTML = '';
          var qrcode = new QRCode(document.getElementById("qrcode"), {
              text: `CODE : ${usercode}`,
              width: 60,
              height: 60,
              colorDark: "#000000",
              colorLight: "#ffffff",
              correctLevel: QRCode.CorrectLevel.H
          });
      }
  }