const $ = (selector) => {
    return document.querySelector(selector);
}

const toggleDark = $('#toggle-dark');
const progressWeb = $('#progress-skill-web');
const progressWebPersen = $('#progress-web');
const progressProgramming = $('#progress-skill-programming');
const progressProgrammingPersen = $('#progress-programming');
const progressUnknown1 = $('.progress-skill-unknown1');
const progressUnknown2 = $('.progress-skill-unknown2');
const progressDrawPersen = $('#progress-draw');
const progressDraw = $('#progress-skill-draw');
const htmlPersen = $('#html-persen');
const htmlProgress = $('#html-progress');
const cssPersen = $('#css-persen');
const cssProgress = $('#css-progress');
const jsPersen = $('#js-persen');
const jsProgress = $('#js-progress');
const phpPersen = $('#php-persen');
const phpProgress = $('#php-progress');
const pyPersen = $('#py-persen');
const pyProgress = $('#py-progress');
const bpPersen = $('#bp-persen');
const bpProgress = $('#bp-progress');
const twcPersen = $('#twc-persen');
const twcProgress = $('#twc-progress');
const jsxPersen = $('#jsx-persen');
const jsxProgress = $('#jsx-progress');
const njsPersen = $('#njs-persen');
const njsProgress = $('#njs-progress');
const bladePersen = $('#blade-persen');
const bladeProgress = $('#blade-progress');
const nama = $('#in-name');
const email = $('#in-email');
const messages = $('#in-messages');

// Fungsi Menambahkan Border bottom navbar
window.onscroll = function() {
    const navbar = $("#navbar");
    if (window.scrollY > 0) {
        navbar.classList.add("border-bottom");
        navbar.style.backgroundColor = 'rgba(0, 0 , 0, 0.3)';
        navbar.style.transition = 'all .5s ease-out';
        navbar.style.backdropFilter = 'blur(3px)';
    } else {
        navbar.classList.remove("border-bottom");
        navbar.style.backgroundColor = 'rgba(0, 0 , 0, 0)';
        navbar.style.backdropFilter = 'blur(0)';
    }
};
//Fungsi Toggle Dark Mode
toggleDark.addEventListener('click', function() {
    Swal.fire({
        title: "Belum Tersedia!",
        text: "Fitur Toggle Dark/Light Belum Tersedia",
        icon: "warning"
      });
})

// document.addEventListener("DOMContentLoaded", () => {
//     const body = document.body;
  
//     const savedTheme = localStorage.getItem("theme") || "light-mode";
//     body.classList.add(savedTheme);
  
//     toggleDark.addEventListener("click", () => {
//       if (body.classList.contains("light-mode")) {
//         body.classList.replace("light-mode", "dark-mode");
//         localStorage.setItem("theme", "dark-mode");
//       } else {
//         body.classList.replace("dark-mode", "light-mode");
//         localStorage.setItem("theme", "light-mode");
//       }
//     });
//   });
  
//Scrollspy

document.addEventListener("DOMContentLoaded", () => {
  const skillSection = document.querySelector("#skills"); // Ganti sesuai ID bagian Skills
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startSkillAnimations(); // Memulai animasi saat terlihat
        observer.unobserve(skillSection); // Hentikan pengamatan setelah animasi berjalan
      }
    });
  }, { threshold: 0.5 }); // 50% elemen harus terlihat untuk memicu

  observer.observe(skillSection);
});
// Fungsi delay untuk animasi
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function animateProgress(element, percentage, delayTime, textElement = null) {
  for (let i = 1; i <= percentage; i++) {
    if (textElement) textElement.textContent = `${i}%`; // Tampilkan persentase
    element.style.width = `${i}%`;
    await delay(delayTime);
  }
}
function startSkillAnimations() {
    animateProgress(progressWeb, 35, 50, progressWebPersen);
    animateProgress(progressProgramming, 12, 50, progressProgrammingPersen);
    animateProgress(progressUnknown1, 100, 15);
    animateProgress(progressUnknown2, 100, 20);
    animateProgress(progressDraw, 40, 45, progressDrawPersen);
    animateProgress(htmlProgress, 75, 30, htmlPersen);
    animateProgress(cssProgress, 60, 33, cssPersen);
    animateProgress(jsProgress, 30, 40, jsPersen);
    animateProgress(phpProgress, 20, 45, phpPersen);
    animateProgress(pyProgress, 25, 40, pyPersen);
    animateProgress(bpProgress, 60, 40, bpPersen);
    animateProgress(twcProgress, 10, 40, twcPersen);
    animateProgress(jsxProgress, 100, 25);
    animateProgress(njsProgress, 100, 25);
    animateProgress(bladeProgress, 100, 25);
}

//Fungsi Validasi Form Contact Me
(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
      }, false);
    });
  })();

//Fungsi Kirim Email Dengan EmailJS
emailjs.init('ivHJpvj0u2-S-42PS');
document.getElementById('formMessage').addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;
    const loading = document.getElementById('loading');

    if (!form.checkValidity()) {
        form.classList.add('was-validated'); 
        return; 
    }
    loading.classList.remove('d-none');
    try {
        const response = await emailjs.send('service_b5wdvvn', 'template_6pzgkff', {
            name: nama.value,
            email: email.value,
            message: messages.value
        });

        Swal.fire({
        title: "Terkirim!",
        text: "Pesan berhasil dikirim!",
        icon: "success",
        footer: `Success : ${response.status, response.text}`
        });

        document.getElementById('formMessage').reset();
        form.classList.remove('was-validated');
    } catch(error) {
        Swal.fire({
            icon: "error",
            title: "Gagal!",
            text: "Pesan tidak terkirim!",
            footer: `Error : ${error}`
        });      
        console.log('Error:', error);
    } 
    loading.classList.add('d-none');
});