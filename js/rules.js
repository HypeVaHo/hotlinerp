let container = document.querySelector(`.ryle`);
let search = new URLSearchParams(window.location.search);
let i = search.get(`i`);
let rule = rules[i]

if(!rule){
    container.innerHTML = `Ошибка, редирект на предыдущую страницу через 5 секунд.`;
    setTimeout(() => {
        window.location.pathname = `C:/Users/ivans/OneDrive/Рабочий стол/site dsrp/rules.html`
    }, 5000);
} else {
container.innerHTML = `
        <div class="row">
          <div class="col-md-4">
            <img src="${rule.img}" alt="" class="img-fluid rounded-start">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${rule.title}</h5>
              <p class="card-text">${rule.description}</p>
            </div>
          </div>
      </div>`
}