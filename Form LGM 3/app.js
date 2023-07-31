function previewImage(event) {
  const imagePreview = document.getElementById('preview-image');
  imagePreview.src = URL.createObjectURL(event.target.files[0]);
}

document.getElementById('registrationForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const Name = formData.get('Name');
  const Father = formData.get('Father');
  const email = formData.get('email');
  const country = formData.get('country');

  const displayData = document.getElementById('displayData');
  displayData.innerHTML = `
      <h2>Registration Details</h2>
      <p><strong> Name:</strong> ${Name}</p>
      <p><strong>Father Name:</strong> ${Father}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Country:</strong> ${country}</p>
  `;
});
