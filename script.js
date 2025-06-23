// const btn = document.getElementById("menu-btn");
// const sidebar = document.getElementById("sidebar");
// const sidebarRight = document.getElementById("sidebar-right");
// const overlay = document.getElementById("overlay");
// const iconOpen = document.getElementById("icon-open");
// const iconClose = document.getElementById("icon-close");

// btn.addEventListener("click", () => {
//   const isClosed = sidebar.classList.contains("-translate-x-full");

 

//   if (isClosed) {
//     sidebar.classList.remove("-translate-x-full");
//     overlay.classList.remove("hidden");

//     iconOpen.classList.add("hidden");
//     iconClose.classList.remove("hidden");
//   } else {
//     sidebar.classList.add("-translate-x-full");
//     overlay.classList.add("hidden");

//     iconClose.classList.add("hidden");
//     iconOpen.classList.remove("hidden");
//   }
// });


const btn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const iconOpen = document.getElementById("icon-open");
const iconClose = document.getElementById("icon-close");

// زر الفتح والإغلاق
btn.addEventListener("click", toggleSidebar);

// روابط الـ sidebar
const sidebarLinks = sidebar.querySelectorAll("a");
sidebarLinks.forEach(link => {
  link.addEventListener("click", () => {
    closeSidebar();
  });
});

// دالة التبديل
function toggleSidebar() {
  const isClosed = sidebar.classList.contains("-translate-x-full");
  if (isClosed) {
    sidebar.classList.remove("-translate-x-full");
    overlay.classList.remove("hidden");
    iconOpen.classList.add("hidden");
    iconClose.classList.remove("hidden");
  } else {
    closeSidebar();
  }
}

// دالة الإغلاق
function closeSidebar() {
  sidebar.classList.add("-translate-x-full");
  overlay.classList.add("hidden");
  iconClose.classList.add("hidden");
  iconOpen.classList.remove("hidden");
}



overlay.addEventListener("click", () => {
  sidebar.classList.add("-translate-x-full");
  overlay.classList.add("hidden");

  iconClose.classList.add("hidden");
  iconOpen.classList.remove("hidden");

  AOS.refresh();

});

 const nav = document.getElementById('main-nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('bg-black', 'bg-opacity-60', 'backdrop-blur');
    } else {
      nav.classList.remove('bg-black', 'bg-opacity-60', 'backdrop-blur');
    }
  }); 
  // const toTopBtn = document.getElementById("toTopBtn");

  // window.onscroll = () => {
  //   toTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  // };

  // toTopBtn.onclick = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

 const scrollPercent = document.getElementById("scrollPercent");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = Math.round((scrollTop / docHeight) * 100);

  const btn = document.getElementById("toTopBtn");
  if (scrollTop > 70) {
    btn.classList.remove("hidden");
  } else {
    btn.classList.add("hidden");
  }

  if(scrolled >= 100){
    scrollPercent.textContent = "↑";
  } else {
    scrollPercent.textContent = `${scrolled}%`;
  }
});

document.getElementById("toTopBtn").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


    function openModal() {
      const modal = document.getElementById('bookingModal');
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }

    function closeModal() {
      const modal = document.getElementById('bookingModal');
      modal.classList.remove('flex');
      modal.classList.add('hidden');
    }

    function submitBooking(event) {
      event.preventDefault();

      // Show success message
      document.getElementById("successMsg").classList.remove("hidden");

      // Reset form fields
      event.target.reset();

      // Hide modal after 2.5s
      setTimeout(() => {
        document.getElementById("successMsg").classList.add("hidden");
        closeModal();
      }, 2500);
    }



  

  function submitContact(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  // هنا تقدر تبعت البيانات لأي API أو خدمة
  console.log({ name, email, phone, message });

  // إظهار رسالة النجاح
  document.getElementById("successMessage").classList.remove("hidden");

  // تفريغ النموذج الصحيح بعد ثانيتين
  setTimeout(() => {
    document.getElementById("successMessage").classList.add("hidden");
    event.target.reset(); // ✅ دي الصح!
  }, 800);
}
