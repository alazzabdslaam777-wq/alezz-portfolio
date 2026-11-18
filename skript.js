// 1. التحكم في قائمة الجوال المنسدلة
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
};

// إغلاق القائمة تلقائياً عند النقر على أي رابط
document.querySelectorAll('.nav-links a').forEach(link => {
    link.onclick = () => {
        navLinks.classList.remove('active');
    };
});

// 2. زر فتح وإغلاق قصة التطوع بسلاسة
const toggleStoryBtn = document.getElementById('toggle-story-btn');
const storyBox = document.getElementById('volunteering-story-box');

toggleStoryBtn.addEventListener('click', () => {
    storyBox.classList.toggle('open');
    
    if (storyBox.classList.contains('open')) {
        toggleStoryBtn.innerHTML = '<i class="fa-solid fa-chevron-up"></i> Hide Volunteering Story';
    } else {
        toggleStoryBtn.innerHTML = '<i class="fa-solid fa-book-open"></i> Read My Volunteering Story';
    }
});

// 3. نافذة تكبير الشهادات (Modal)
function openModal(card) {
    const img = card.querySelector('img');
    const title = card.querySelector('h4').innerText;
    
    // تنبيه لطيف في حال لم تضع مسار صورة الشهادة بعد
    if (!img.getAttribute('src')) {
        alert("Please add the certificate image file path in index.html first!");
        return;
    }

    const modal = document.getElementById('cert-modal');
    const modalImg = document.getElementById('modal-img');
    const captionText = document.getElementById('modal-caption');

    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = title;
}

function closeModal() {
    document.getElementById('cert-modal').style.display = "none";
}