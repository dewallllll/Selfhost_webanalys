document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('dropdownBtn');
    const sidebar = document.querySelector('.sidenav-m3'); // Обновлённый селектор

    btn.addEventListener('click', function () {
        if (sidebar.style.display === 'none' || !sidebar.style.display) {
            sidebar.style.display = 'block'; // Показываем меню
        } else {
            sidebar.style.display = 'none'; // Скрываем меню
        }
    });
});