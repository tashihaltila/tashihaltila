// سنة الفوتر
document.getElementById('year')?.appendChild(document.createTextNode(new Date().getFullYear()));

// فتح/إغلاق قائمة الجوال
const navToggle = document.querySelector('.nav-toggle');
const mainnav   = document.getElementById('mainnav');

navToggle?.addEventListener('click', () => {
  const opened = mainnav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', opened ? 'true' : 'false');
});

// جعل القوائم المنسدلة تبقى مفتوحة على اللمس/الضغط في الموبايل
document.querySelectorAll('.has-dropdown').forEach((item)=>{
  const btn = item.querySelector('.dropdown-toggle');
  if(!btn) return;

  btn.addEventListener('click', (e)=>{
    // على الشاشات الصغيرة فقط
    if (window.matchMedia('(max-width: 900px)').matches){
      e.preventDefault();
      const open = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
  });
});

// تحسين: إغلاق القائمة عند الضغط خارجها (موبايل)
document.addEventListener('click', (e)=>{
  const isInsideNav = e.target.closest('.main-nav, .nav-toggle');
  if(!isInsideNav && mainnav?.classList.contains('open')){
    mainnav.classList.remove('open');
    navToggle?.setAttribute('aria-expanded','false');
  }
});
