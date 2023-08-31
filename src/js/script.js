'use strict';

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
// VIDEO UPLOAD

document.addEventListener('DOMContentLoaded', function () {
  let filenameInput = document.getElementById('filename');
  let dummyFileInput = document.getElementById('dummy_file');

  filenameInput.addEventListener('change', function () {
    let file = this.files[0];
    if (file !== null) {
      dummyFileInput.value = file.name;
    }
  });

  if (document.forms.form1.filename.value === '') {
    dummyFileInput.value = '';
  }
});

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

class Memory {
  data = new Date();
  id = (Date.now() + '').slice(-10);

  constructor(
    coords,
    day,
    title,
    people,
    satisfaction,
    thumbnail,
    img1,
    img2,
    img3,
    img4,
    video,
    dialy
  ) {
    this.coords = coords;
    this.day = day;
    this.title = title;
    this.people = people;
    this.satisfaction = satisfaction;
    this.thumbnail = thumbnail;
    this.img1 = img1;
    this.img2 = img2;
    this.img3 = img3;
    this.img4 = img4;
    this.video = video;
    this.dialy = dialy;
  }
}

class Daily extends Memory {
  type = 'daily';

  constructor(
    coords,
    day,
    title,
    people,
    satisfaction,
    thumbnail,
    img1,
    img2,
    img3,
    img4,
    video,
    dialy,
    place
  ) {
    super(
      coords,
      day,
      title,
      people,
      satisfaction,
      thumbnail,
      img1,
      img2,
      img3,
      img4,
      video,
      dialy
    );
    this.place = place;
  }
}
class Travel extends Memory {
  type = 'travel';

  constructor(
    coords,
    day,
    title,
    people,
    satisfaction,
    thumbnail,
    img1,
    img2,
    img3,
    img4,
    video,
    dialy,
    transportation
  ) {
    super(
      coords,
      day,
      title,
      people,
      satisfaction,
      thumbnail,
      img1,
      img2,
      img3,
      img4,
      video,
      dialy
    );
    this.transportation = transportation;
  }
}

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
const map = document.getElementById('map');

const info = document.querySelector('.info');
const overlay = document.querySelector('.overlay');
const infoBtn = document.querySelector('.infomation-btn');

const form = document.querySelector('.form');
const mainContainer = document.querySelector('.memories');
const containerMemories = document.querySelector('.memories-container');
const memory = document.querySelector('.memory');
const inputTitle = document.querySelector('.form__input--title');
const inputDay = document.querySelector('.form__input--day');
const inputType = document.querySelector('.form__input--type');
const inputPeople = document.querySelector('.form__input--people');
const inputTrans = document.querySelector('.form__input--transportation');
const inputPlace = document.querySelector('.form__input--place');
const inputSatisfy = document.querySelector('.form__input--satisfaction');
const inputText = document.querySelector('.form__input--dialy');

const input0 = document.getElementById('input0');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const input4 = document.getElementById('input4');

const img0 = document.getElementById('memory-img-0');
const img1 = document.getElementById('memory-img-1');
const img2 = document.getElementById('memory-img-2');
const img3 = document.getElementById('memory-img-3');
const img4 = document.getElementById('memory-img-4');

const formImg0 = document.querySelector('.form__img-0');
const formImg1 = document.querySelector('.form__img-1');
const formImg2 = document.querySelector('.form__img-2');
const formImg3 = document.querySelector('.form__img-3');
const formImg4 = document.querySelector('.form__img-4');

let thumbnailUrl;
let imgUrl1;
let imgUrl2;
let imgUrl3;
let imgUrl4;

const description = document.querySelector('.detail');
const detailBtn = document.querySelector('.detail__row--btn');

const detailImg0 = document.querySelector('.detail__img-0');
const detailImg1 = document.querySelector('.detail__img-1');
const detailImg2 = document.querySelector('.detail__img-2');
const detailImg3 = document.querySelector('.detail__img-3');
const detailImg4 = document.querySelector('.detail__img-4');

//////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////

class App {
  #map;
  #mapEvent;
  #mapZoomLevel = 13;
  #memories = [];

  constructor() {
    // Get user's position
    this._getPosition();
    // Get data from local storage
    this._getLocalStorage();
    // get thumbnail URL and other photos URL
    input0.addEventListener('change', this._getThumbnail);
    input1.addEventListener('change', this._getUrl1);
    input2.addEventListener('change', this._getUrl2);
    input3.addEventListener('change', this._getUrl3);
    input4.addEventListener('change', this._getUrl4);
    ///////////////////////////
    // Attach event handlers
    form.addEventListener('submit', this._newMemory.bind(this));
    inputType.addEventListener('change', this._toggleInput);
    containerMemories.addEventListener('click', this._moveToPopup.bind(this));

    // Show informatation page
    infoBtn.addEventListener('click', this._openInfo);
    overlay.addEventListener('click', this._closeInfo);

    // show direct image on form
    input0.addEventListener('change', this._directImg0);
    input1.addEventListener('change', this._directImg1);
    input2.addEventListener('change', this._directImg2);
    input3.addEventListener('change', this._directImg3);
    input4.addEventListener('change', this._directImg4);

    // close description
    detailBtn.addEventListener('click', this._closeDescription);
    ///////////////////////////////////////////////////////u

    // If you need delete your data, You have to use 'reset()' function
    // this.reset();
  }

  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not get your position');
        }
      );
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    const coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      maxZoom: 18,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    }).addTo(this.#map);

    // Handlings clicks on map
    this.#map.on('click', this._showForm.bind(this));

    this.#memories.forEach(memory => {
      this._renderMemoryMarker(memory);
    });
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    // inputTitle.focus();

    // Show form
    form.classList.remove('hidden');
    inputTitle.focus();
  }

  _hideForm() {
    // Empty inputs
    inputTitle.value =
      inputDay.value =
      inputPeople.value =
      inputTrans.value =
      inputPlace.value =
      inputSatisfy.value =
      inputText.value =
      inputType.value =
      thumbnailUrl =
        '';

    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);

    // empty directing photo on form
    formImg0.style.opacity =
      formImg1.style.opacity =
      formImg2.style.opacity =
      formImg3.style.opacity =
      formImg4.style.opacity =
        0;
  }

  _toggleInput() {
    inputTrans.closest('.form__row').classList.toggle('form__row--hidden');
    inputPlace.closest('.form__row').classList.toggle('form__row--hidden');
  }

  //////////////////////////////////////////////////////////////////
  // Photo URL
  _getThumbnail(e) {
    let input = e.target;

    if (input.files && input.files[0]) {
      let reader = new FileReader();

      reader.onload = function (e) {
        thumbnailUrl = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
  _getUrl1(e) {
    let input = e.target;

    if (input.files && input.files[0]) {
      let reader = new FileReader();

      reader.onload = function (e) {
        imgUrl1 = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
  _getUrl2(e) {
    let input = e.target;

    if (input.files && input.files[0]) {
      let reader = new FileReader();

      reader.onload = function (e) {
        imgUrl2 = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
  _getUrl3(e) {
    let input = e.target;

    if (input.files && input.files[0]) {
      let reader = new FileReader();

      reader.onload = function (e) {
        imgUrl3 = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
  _getUrl4(e) {
    let input = e.target;

    if (input.files && input.files[0]) {
      let reader = new FileReader();

      reader.onload = function (e) {
        imgUrl4 = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  //////////////////////////////////////////////////////////////////
  // Information
  _openInfo() {
    info.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
  }

  _closeInfo() {
    info.classList.add('hidden');
    overlay.classList.add('hidden');
  }
  //////////////////////////////////////////////////////////////////
  // Direct image
  _directImg0(event) {
    let input = event.target;
    let img = img0;

    if (input.files && input.files[0]) {
      let reader = new FileReader();

      reader.onload = function (e) {
        img.src = e.target.result;
        formImg0.style.opacity = 1;
      };

      reader.readAsDataURL(input.files[0]);
    }
  }
  _directImg1(event) {
    let input = event.target;
    let img = img1;

    if (input.files && input.files[0]) {
      let reader = new FileReader();

      reader.onload = function (e) {
        img.src = e.target.result;
        formImg1.style.opacity = 1;
      };

      reader.readAsDataURL(input.files[0]);
    }
  }
  _directImg2(event) {
    let input = event.target;
    let img = img2;

    if (input.files && input.files[0]) {
      let reader = new FileReader();

      reader.onload = function (e) {
        img.src = e.target.result;
        formImg2.style.opacity = 1;
      };

      reader.readAsDataURL(input.files[0]);
    }
  }
  _directImg3(event) {
    let input = event.target;
    let img = img3;

    if (input.files && input.files[0]) {
      let reader = new FileReader();

      reader.onload = function (e) {
        img.src = e.target.result;
        formImg3.style.opacity = 1;
      };

      reader.readAsDataURL(input.files[0]);
    }
  }
  _directImg4(event) {
    let input = event.target;
    let img = img4;

    if (input.files && input.files[0]) {
      let reader = new FileReader();

      reader.onload = function (e) {
        img.src = e.target.result;
        formImg4.style.opacity = 1;
      };

      reader.readAsDataURL(input.files[0]);
    }
  }

  _newMemory(e) {
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));
    const allPositive = (...inputs) => inputs.every(inp => inp > 0);
    const allString = (...inputs) =>
      inputs.every(inp => typeof inp === 'string');

    e.preventDefault();

    // get data from form
    const title = inputTitle.value;
    const day = inputDay.value;
    const type = inputType.value;
    const people = +inputPeople.value;
    const satisfy = +inputSatisfy.value;
    const text = inputText.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let memory;

    /////////////////////
    // const video = inputVideo.value;
    /////////////////////

    // If memory daily, create daily object
    if (type === 'daily') {
      const place = inputPlace.value;
      // check if data is valid and string

      if (
        !validInputs(people, satisfy) ||
        !allPositive(people, satisfy) ||
        !allString(title, day, place, text)
      )
        return alert(
          'Satisfaction and number of people must be positive numbers. Otherwise, it must be a string.'
        );

      memory = new Daily(
        [lat, lng],
        day,
        title,
        people,
        satisfy,
        thumbnailUrl,
        imgUrl1,
        imgUrl2,
        imgUrl3,
        imgUrl4,
        '', // video
        text,
        place
      );
    }

    // If memory travel, create travel object
    if (type === 'travel') {
      const way = inputTrans.value;
      // check if data is valid

      if (
        !validInputs(people, satisfy) ||
        !allPositive(people, satisfy) ||
        !allString(title, day, way, text)
      )
        return alert(
          'Satisfaction and number of people must be positive numbers. Otherwise, it must be a string.'
        );

      memory = new Travel(
        [lat, lng],
        day,
        title,
        people,
        satisfy,
        thumbnailUrl,
        imgUrl1,
        imgUrl2,
        imgUrl3,
        imgUrl4,
        '', // video
        text,
        way
      );
    }

    // Add new object to memories array
    this.#memories.push(memory);
    console.log(memory);

    // Render memory on map as marker
    this._renderMemoryMarker(memory);

    // Render memory on list
    this._renderMemory(memory);

    // Hide form + clear input fields
    this._hideForm();

    // Set local storage to all memories
    this._setLocalStorage();

    //////////////////////
  }

  _renderMemoryMarker(memory) {
    L.marker(memory.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${memory.type}-popup`,
        })
      )
      .setPopupContent(memory.title)
      .openPopup()
      .on('click', e => this._openDescription(e));

    ////////////////////////////////////////////////////////
  }

  _openDescription(e) {
    ////////////////////////////////////////////////////////
    description.classList.remove('hidden');

    const { lat, lng } = e.latlng;
    const memory = this.#memories.find(
      memory => memory.coords.toString() === [lat, lng].toString()
    );
    ////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////
    console.log(memory);
    this._renderDetails(memory);
  }

  _renderDetails(memory) {
    const detailDate = document.querySelector('.detail__date--txt');
    const detailTitle = document.querySelector('.detail__title--txt');
    const detailLocation = document.querySelector('.detail__location--txt');
    const detailType = document.querySelector('.detail__row--type');
    const detailTravel = document.querySelector('.detail__type--travel');
    const detailDaily = document.querySelector('.detail__type--daily');
    const detailPeople = document.querySelector('.detail__value--people');
    const detailWay = document.querySelector('.detail__value--way');
    const detailPlace = document.querySelector('.detail__value--place');
    const detailSatisfy = document.querySelector('.detail__value--satisfy');
    const detailImg0 = document.getElementById('detailImg-0');
    const detailImg1 = document.getElementById('detailImg-1');
    const detailImg2 = document.getElementById('detailImg-2');
    const detailImg3 = document.getElementById('detailImg-3');
    const detailImg4 = document.getElementById('detailImg-4');
    const detailDialy = document.querySelector('.detail__row--dialy');

    /////////////////
    fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${memory.coords[0]}&longitude=${memory.coords[1]}&localityLanguage=en`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        const { city, countryName } = data;
        detailLocation.textContent = `${city}: ${countryName}`;
      });
    ////////////////

    detailDate.textContent = memory.day;
    detailTitle.textContent = memory.title;
    detailPeople.textContent = memory.people;
    detailSatisfy.textContent = memory.satisfaction;
    detailDialy.textContent = memory.dialy;

    if (memory.type === 'travel') {
      detailWay.textContent = memory.transportation;

      detailDaily.classList.add('hidden');
      detailTravel.classList.remove('hidden');
    }

    if (memory.type === 'daily') {
      detailPlace.textContent = memory.place;

      detailTravel.classList.add('hidden');
      detailDaily.classList.remove('hidden');
    }

    if (memory.thumbnail) {
      detailImg0.src = memory.thumbnail;
      detailImg0.style.opacity = 1;
    }
    if (memory.img1) {
      detailImg1.src = memory.img1;
      detailImg1.style.opacity = 1;
    }
    if (memory.img2) {
      detailImg2.src = memory.img2;
      detailImg2.style.opacity = 1;
    }
    if (memory.img3) {
      detailImg3.src = memory.img3;
      detailImg3.style.opacity = 1;
    }
    if (memory.img4) {
      detailImg4.src = memory.img4;
      detailImg4.style.opacity = 1;
    }
  }

  _closeDescription() {
    description.classList.add('hidden');
  }

  _renderMemory(memory) {
    let htmlList = `
    <li class="memory memory--${memory.type}" data-id="${memory.id}">
      <div class="memory__date">
        <ion-icon class="memory__date--icon" name="calendar"></ion-icon>
        <span>${memory.day}</span>
      </div>
      <h2 class="memory__title">
        ${memory.type === 'daily' ? 'Daily' : 'Travel'}&nbsp;&nbsp;&nbsp;${
      memory.title
    }
      </h2>
      <div class="memory__details">
        <span class="memory__icon">👪</span>
        <span class="memory__value">${memory.people}</span>
        <span class="memory__unit">人</span>
      </div>
    `;

    if (memory.type === 'daily')
      htmlList += `
        <div class="memory__details">
          <span class="memory__icon">🗺️</span>
          <span class="memory__value">${memory.place}</span>
        </div>
        <div class="memory__details">
        <span class="memory__icon">⭐</span>
        <span class="memory__value">${memory.satisfaction}</span>
        <span class="memory__unit">つ</span>
      </div>
      <div class="memory__thumbnail">
        <img
          src="${memory.thumbnail}"
          alt="IMAGE"
          class="memory__thumbnail--img"
        />
      </div>
    </li>
      `;

    if (memory.type === 'travel')
      htmlList += `
      <div class="memory__details">
        <span class="memory__icon">🚶</span>
        <span class="memory__value">${memory.transportation}</span>
      </div>
      <div class="memory__details">
        <span class="memory__icon">⭐</span>
        <span class="memory__value">${memory.satisfaction}</span>
        <span class="memory__unit">つ</span>
      </div>
      <div class="memory__thumbnail">
        <img
          src="${memory.thumbnail}"
          alt="IMAGE"
          class="memory__thumbnail--img"
        />
      </div>
    </li>
      `;

    containerMemories.insertAdjacentHTML('beforeend', htmlList);
  }

  _moveToPopup(e) {
    // BUGFIX: When we click on a workout before the map has loaded, we get an error. But there is an easy fix:
    if (!this.#map) return;

    const memoryEl = e.target.closest('.memory');

    if (!memoryEl) return;

    const memory = this.#memories.find(
      memory => memory.id === memoryEl.dataset.id
    );

    this.#map.setView(memory.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });
  }

  _setLocalStorage() {
    localStorage.setItem('memories', JSON.stringify(this.#memories));
  }

  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('memories'));

    if (!data) return;

    this.#memories = data;

    this.#memories.forEach(memory => {
      this._renderMemory(memory);
    });
  }

  reset() {
    localStorage.removeItem('memories');
    location.reload();
  }
}
const app = new App();
