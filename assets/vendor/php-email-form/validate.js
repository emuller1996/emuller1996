(function () {
  "use strict";

  const URL = "https://formsubmit.co/b94b4dfb7ce168e62a7a2565193d2728";

  let forms = document.getElementById('form-contact');
  let loading = document.querySelector(".loading");
  let errorMessage = document.querySelector(".error-message")
  let sentMessage = document.querySelector(".sent-message")

  console.log(loading);

  console.log(forms);

  console.log(URL);

  forms.addEventListener("submit", async function (e) {
    e.preventDefault()
    try {
      loading.classList.remove("visually-hidden");
      const result = await fetch(URL, {
        method: "POST",
        body: new FormData(e.target)
      })
      console.log(result);
      loading.classList.add("visually-hidden");
      if (result.status === 200) {  
        console.log(result.text()) 
        sentMessage.classList.remove("visually-hidden");
      }

    } catch (error) {
      console.log(error);

    }
  });
})();
