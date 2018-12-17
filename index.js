const submitBtn = document.querySelector('.form-submit-btn')
const readBtn = document.querySelector('.read-btn')
const cardContainer = document.querySelector('.card-section')
const headerForm = document.querySelector('.header-form')


submitBtn.addEventListener('click', function (event) {
  event.preventDefault()
  const inputName = document.querySelector('.input-name')
  const inputUrl = document.querySelector('.input-url')
  const name = event.target.parentElement.name.value
  const url = event.target.parentElement.url.value

  inputName.classList.remove('input-clicked')
  inputUrl.classList.remove('input-clicked')


  cardContainer.innerHTML +=  `
    <div class='card card-unread'>
      <h2 class='card-name'>${name}</h2>
      <a class='card-url' href='${url}'>${url}</a>
      <button class='read-btn'>Read</button>
      <button class='remove-btn'>Remove</button>
    </div>
  `
  headerForm.reset()
})

cardContainer.addEventListener('click', function (event) {
  event.preventDefault()
  if (event.target.matches('.read-btn')) {
    event.target.closest('.card').classList.toggle('card-unread')
    event.target.closest('.card').classList.toggle('card-read')
    event.target.closest('.read-btn').classList.toggle('read-btn-read-card')
    event.target.nextElementSibling.closest('.remove-btn').classList.toggle('remove-btn-read-card')
  }
})

cardContainer.addEventListener('click', function (event) {
  event.preventDefault()
  if (event.target.matches('.remove-btn')) {
    event.target.closest('.card').remove()
  }
})

headerForm.addEventListener('click', function (event) {
  event.preventDefault()
  if (event.target.matches('input')) {  
    event.target.closest('input').classList.add('input-clicked')
  } 
})