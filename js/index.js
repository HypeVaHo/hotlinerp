let container = document.querySelector(`.rules`);

for(let i = 0; i < rules.length; i++) {
    let rule = rules[i]
    container.innerHTML += `<div class="col">
    <a href="rulesn.html?i=${i}" class="text-decoration-none">
    <div class="card">
      <img src="${rule.img}" alt="" class="card-img-top">
      <div class="card-body">
        <p class="card-text">${rule.title}</p>
      </div>
    </div>
  </a>
</div>`
}