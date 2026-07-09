/* ==========================================================
   الأكواد التفاعلية للموقع (عداد الأرقام والـ Progress للحصالة)
   ========================================================== */
<!-- مكتبة تنبيهات تفاعلية فخمة ومناسبة لهوية قنديل -->
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
document.addEventListener("DOMContentLoaded", () => {

    // 1. أنيميشن عداد الأرقام (قسم قنديل في أرقام)
    const counters = document.querySelectorAll('.counter');
    const speed = 100; // سرعة حركة العداد التنازلية

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 15);
            } else {
                counter.innerText = target;
            }
        };

        // تشغيل العداد فور تحميل الصفحة تلقائياً
        updateCount();
    });

    // 2. تحديث شريط تقدم الحصالة تلقائياً بناءً على القيم الحالية والهدف
    const currentAmountEl = document.getElementById("current-amount");
    const progressFillEl = document.getElementById("progress-fill");

    if (currentAmountEl && progressFillEl) {
        const currentAmount = parseFloat(currentAmountEl.innerText);
        const targetAmount = 6000; // الهدف المالي الثابت للحصالة لتجهيز الحفل

        // حساب النسبة المئوية وتطبيقها على عرض الشريط
        let percentage = (currentAmount / targetAmount) * 100;
        if (percentage > 100) percentage = 100; // لضمان عدم خروج الشريط البصري عن حوافه

        progressFillEl.style.width = percentage + "%";
    }
});

function welcomeChild() {
    Swal.fire({
        title: 'أهلاً بك! ✨',
        text: 'سعيدين جداً بإنضمامك معنا في مبادرة قنديل',
        icon: 'success',
        confirmButtonText: 'شكراً لكم 🤍',
        confirmButtonColor: '#2A5647', // اللون الأخضر الرسمي لقنديل
        background: '#ffffff',
        border: 'none',
        border_radius: '15px'
    });
}