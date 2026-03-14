window.addEventListener('load', () => {
  const categories = document.querySelectorAll('.category');
  const serviceItems = document.querySelectorAll('.service-item');
  const searchInput = document.getElementById('searchService');

  function filterServices() {
    const searchValue = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const activeCategoryElem = document.querySelector('.category.active');
    const activeCategory = activeCategoryElem ? activeCategoryElem.dataset.target : 'all';

    serviceItems.forEach(item => {
      const text = item.textContent.toLowerCase();
      const matchesSearch = searchValue === '' || text.includes(searchValue);
      const matchesCategory = activeCategory === 'all' || item.dataset.category === activeCategory;

      item.style.display = (matchesSearch && matchesCategory) ? 'block' : 'none';
    });
  }

  // 1️⃣ Odczyt hash z URL
  const hash = window.location.hash.substring(1); // usuwa #

  if(hash){
    categories.forEach(c => c.classList.remove('active'));
    const targetCat = document.querySelector(`.category[data-target="${hash}"]`);
    if(targetCat){
      targetCat.classList.add('active');
      filterServices();

      // 2️⃣ Usuwamy hash z URL po ustawieniu kategorii
      history.replaceState(null, '', window.location.pathname);
    }
  } else {
    // domyślnie wszystkie
    const allCat = document.querySelector('.category[data-target="all"]');
    if(allCat) allCat.classList.add('active');
    filterServices();
  }

  // Kategorie klikane
  categories.forEach(cat => {
    cat.addEventListener('click', () => {
      categories.forEach(c => c.classList.remove('active'));
      cat.classList.add('active');
      filterServices();
      // zmieniamy hash w URL bez reloadu (opcjonalnie)
      history.replaceState(null, '', window.location.pathname);
    });
  });

  // Dynamiczne wyszukiwanie
  if(searchInput){
    searchInput.addEventListener('input', filterServices);
  }

  // Rozwijanie szczegółów usług
  document.querySelectorAll('.service-title').forEach(title => {
    title.addEventListener('click', () => {
      const parent = title.parentElement;
      parent.classList.toggle('active');
    });
  });
});