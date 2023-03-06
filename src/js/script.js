window.addEventListener('DOMContentLoaded', () => {

  // Select header
  const selectHeader = document.querySelector(".select__header");
  const selectBody = document.querySelector(".select__body");
  const selectItem = document.querySelectorAll(".select__item");
  const selectSpan = document.querySelector(".select__title");
  const selectImg = document.querySelector(".select__header img");

  selectHeader.addEventListener("click", () => {
    if (selectBody.classList.contains("select__body--active")) {
      selectBody.classList.remove("select__body--active");
      selectImg.style.transform = "rotate(0deg)";
      selectBody.style.maxHeight = null;
    } else {
      selectBody.classList.add("select__body--active");
      selectImg.style.transform = "rotate(180deg)";
      selectBody.style.maxHeight = selectBody.scrollHeight + "px";
    }
  });

  selectItem.forEach((item, i) => {
    item.addEventListener("click", () => {
      selectSpan.textContent = item.textContent;
      selectBody.classList.remove("select__body--active");
      selectImg.style.transform = "rotate(0deg)";
      selectBody.style.maxHeight = null;
    });
  });

  // Map
  let flag = 0;

  window.addEventListener('scroll', function () {
    let scrollY = window.scrollY;
    let mapOffset = document.querySelector('.map').offsetTop;

    if ((scrollY >= mapOffset - 500) && (flag == 0)) {
      let center = [59.949873623587585, 30.316037580080657];

      function init() {
        let map = new ymaps.Map(
          "map-element", {
          center: center,
          zoom: 15,
        }, {
          searchControlProvider: "yandex#search",
        }
        );

        let placemark = new ymaps.Placemark(
          [59.94807611217217, 30.311264014204237], {
          balloonContent: `
    
          <div class="ballon">
          
          <div class='ballon__info'>
          <h1 class='ballon__title'>Корюшка</h1>
          <h3 class='ballon__subtitle'>Ресторан</h3>
          <table>
          <tbody>
          <tr>
            <td style="text-align: left;">
              Понедельник
            </td>
            <td style="text-align: left;">
              10:00&nbsp;—&nbsp;20:00
            </td>
          </tr>
          <tr>
            <td style="text-align: left;">
          <b>Вторник</b>
            </td>
            <td style="text-align: left;">
          <b>выходной день</b>
            </td>
          </tr>
          <tr>
            <td style="text-align: left;">
              Среда
            </td>
            <td style="text-align: left;">
              10:00 —&nbsp;18:00
            </td>
          </tr>
          <tr>
            <td style="text-align: left;">
              Четверг
            </td>
            <td style="text-align: left;">
              13:00 —&nbsp;21:00
            </td>
          </tr>
          <tr>
            <td style="text-align: left;">
              Пятница
            </td>
            <td style="text-align: left;">
              10:00 —&nbsp;18:00
            </td>
          </tr>
          <tr>
            <td style="text-align: left;">
              Суббота
            </td>
            <td style="text-align: left;">
              10:00 — 18:00
            </td>
          </tr>
          <tr>
            <td style="text-align: left;">
              Воскресенье
            </td>
            <td style="text-align: left;">  
              10:00 — 18:00
            </td>
          </tr>
          </tbody>
          </table>
    
          <div class='ballon__adress' >Россия, Санкт-Петербург, территория Петропавловская крепость, 3У</div>
          </div>
          </div>
        `,
        }, {
          iconLayout: "default#image",
          iconImageHref: "img/maps/mark-cart.svg",
          iconImageSize: [50, 70],
          iconImageOffset: [-25, -70],
        }
        );

        let placemarkHi = new ymaps.Placemark(
          [59.94933601574282, 30.315899801696787], {
          balloonContent: `
          <div class="ballon">
          
          <div class='ballon__info'>
          <h1 class='ballon__title'>Cafe Hi</h1>
          <h3 class='ballon__subtitle'>Кафе</h3>
    
          <table>
          <tbody>
          <tr>
            <td style="text-align: left;">
               Понедельник - Воскресенье
            </td>
            <td style="text-align: left;">
               10:00&nbsp;—&nbsp;20:00
            </td>
          </tr>
          </tbody>
          </table>
    
          <div class='ballon__adress' >Россия, Санкт-Петербург, территория Петропавловская крепость, 3Т</div>
          </div>
          </div>
          `,
        }, {
          iconLayout: "default#image",
          iconImageHref: "img/maps/mark-cart.svg",
          iconImageSize: [20, 30],
          iconImageOffset: [-8, -30],
        }
        );

        let placemarkHarves = new ymaps.Placemark(
          [59.94955128351642, 30.301651907409692], {
          balloonContent: `
        <div class="ballon">
        
        <div class='ballon__info'>
        <h1 class='ballon__title'>Harvest</h1>
        <h3 class='ballon__subtitle'>Ресторан</h3>
    
        <table>
        <tbody>
        <tr>
          <td style="text-align: left;">
             Ежедневно
          </td>
          <td style="text-align: left;">
             90:00&nbsp;—&nbsp;22:00
          </td>
        </tr>
        </tbody>
        </table>
        <div class='ballon__adress' >Россия, Санкт-Петербург, проспект Добролюбова, 11</div>
        </div>
        </div>
        `,
        }, {
          iconLayout: "default#image",
          iconImageHref: "img/maps/mark-cart.svg",
          iconImageSize: [30, 40],
          iconImageOffset: [-15, -40],
        }
        );

        map.controls.remove("geolocationControl"); // удаляем геолокацию
        map.controls.remove("searchControl"); // удаляем поиск
        map.controls.remove("trafficControl"); // удаляем контроль трафика
        map.controls.remove("typeSelector"); // удаляем тип
        map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
        map.controls.remove("zoomControl"); // удаляем контрол зуммирования
        map.controls.remove("rulerControl"); // удаляем контрол правил
        map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты

        map.geoObjects.add(placemark).add(placemarkHi).add(placemarkHarves);
      }
      ymaps.ready(init);
      flag = 1;
    }
  });



  //mobile menu
  const headerMobile = document.querySelector(".header__mobile"),
    burger = document.querySelector(".header__burger"),
    cross = document.querySelector(".header__cross"),
    body = document.querySelector("body");

  burger.addEventListener("click", () => {
    headerMobile.classList.toggle("active");
    burger.style.display = 'none';
    cross.style.display = 'block';
    body.classList.add('noscroll');
  });


  cross.addEventListener("click", () => {
    headerMobile.classList.toggle("active");
    burger.style.display = 'block';
    cross.style.display = 'none';
    body.classList.remove('noscroll');
  });

  //modal
  const modal = document.querySelector(".modal"),
    modalButtons = document.querySelectorAll(".button-modal");

  modalButtons.forEach((item) => {
    item.addEventListener('click', () => {
      modal.classList.add('active');
      body.classList.add('noscroll');
    });
  });


  modal.addEventListener('click', (e) => {
    const isModal = e.target.closest('.modal__inner');
    const scrollY = document.body.style.top;
    if (!isModal) {
      modal.classList.remove('active');
      body.classList.remove('noscroll');

    }
  });


  //swiper
  const slider = new Swiper('.slider', {
    loop: true,
    pagination: {
      el: '.slider__pagination',
    },
    navigation: {
      nextEl: '.slider__arrow-right',
      prevEl: '.slider__arrow-left',
    }
  });
  const swiper = new Swiper('.mySwiper', {
    loop: true,
    spaceBetween: 6,
    pagination: {
      el: '.features__pagination',
    },
    navigation: {
      nextEl: '.slider__arrow-right',
      prevEl: '.slider__arrow-left',
    }
  });


  // iform send + validation
  const form = document.querySelector('.form__elements');

  const telSelector = form.querySelector('input[type="tel"]');
  const inputMask = new Inputmask('+7 (999) 999-99-99');
  const inputCheck = form.querySelector('input[type="checkbox"]');
  inputMask.mask(telSelector);

  const validation = new JustValidate('.form__elements');

  validation
    .addField('#name', [{
      rule: 'minLength',
      value: 2,
      errorMessage: 'Количество символов меньше 2!'
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Количество символов больше 30!'
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Введите имя'
    }
    ])
    .addField('#telephone', [{
      rule: 'required',
      value: true,
      errorMessage: 'Введите номер телефона!'
    },
    {
      rule: 'function',
      validator: function () {
        const phone = telSelector.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Введите корректный номер телефона!'
    }
    ])
    .addField('#check', [{
      rule: 'required',
      errorMessage: 'Дайте своё согласие!'
    },
    ])
    .onSuccess((e) => {
      const formSpan = document.querySelector('.form__text--color');
      if (document.querySelector('#check').checked) {
        formSpan.style.color = '';
        const sendForm = (data) => {
          return fetch('mail.php', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-type': 'application/json; charset=UTF-8'
            }
          }).then(res => res.json());
        };

        // form.addEventListener('submit', (e) => {
        //       e.preventDefault();

        const dataForm = new FormData(e.target);
        const user = {};

        dataForm.forEach((val, key) => {
          user[key] = val;
        });

        sendForm(user).then(data => {
          modal.style.zIndex = '1000';
          modal.classList.add('active');
          body.classList.add('noscroll');
        });

        e.target.reset();
        // });
      }
    });


  //accordion
  let accardion = document.querySelector('.facts__items'),
    tab = document.querySelectorAll('.facts__item'),
    answer = document.querySelectorAll('.facts__answer'),
    plus = document.querySelectorAll('.facts__plus'),
    minus = document.querySelectorAll('.facts__minus');

  accardion.addEventListener('click', (e) => {
    const target = e.target.closest('.facts__item');
    if (target) {
      tab.forEach((item, i) => {
        if (item === target) {
          answer[i].classList.add('active');
          tab[i].classList.add('facts__item--active');
          plus[i].style.display = 'none';
          minus[i].style.display = 'flex';
        } else {
          answer[i].classList.remove('active');
          tab[i].classList.remove('facts__item--active');
          plus[i].style.display = 'flex';
          minus[i].style.display = 'none';
        }
      });
    }
  });

  // $('.facts__item').click(function (e) {

  //   $('.facts__answer').removeClass('active');
  //   $('.facts__item').removeClass('facts__item--active');
  //   $('.facts__plus').css('display', 'flex');
  //   $('.facts__minus').css('display', 'none');


  //   let target = $(e.target.closest('.facts__item'));
  //   if (target) {
  //     $(this).find('.facts__answer').addClass('active');
  //     $(this).addClass('facts__item--active');
  //     $(this).find('.facts__plus').css('display', 'none');
  //     $(this).find('.facts__minus').css('display', 'flex');
  //   }

  // })




  //features
  const featuresDotOne = document.querySelector('.features__dot-1');
  const featuresDotTwo = document.querySelector('.features__dot-2');
  const featuresDotThree = document.querySelector('.features__dot-3');
  const featuresDotFour = document.querySelector('.features__dot-4');
  const featuresDotFive = document.querySelector('.features__dot-5');
  const featuresDotSix = document.querySelector('.features__dot-6');
  const featuresDotSeven = document.querySelector('.features__dot-7');
  const featuresDotEight = document.querySelector('.features__dot-8');
  const featuresItem = document.querySelectorAll('.features__item');

  (function () {
    featuresDotOne.style.cursor = 'pointer';
    featuresDotTwo.style.cursor = 'pointer';
    featuresDotThree.style.cursor = 'pointer';
    featuresDotFour.style.cursor = 'pointer';
    featuresDotFive.style.cursor = 'pointer';
    featuresDotSix.style.cursor = 'pointer';
    featuresDotSeven.style.cursor = 'pointer';
    featuresDotEight.style.cursor = 'pointer';
    featuresDotOne.addEventListener('mouseover', () => {
      featuresDotOne.style.backgroundColor = 'white';
      featuresItem.forEach((item, i) => {
        featuresItem[0].style.opacity = '1';
      });

    })
    featuresDotTwo.addEventListener('mouseover', () => {
      featuresDotTwo.style.backgroundColor = 'white';
      featuresItem.forEach((item, i) => {
        featuresItem[1].style.opacity = '1';
      });

    })
    featuresDotThree.addEventListener('mouseover', () => {
      featuresDotThree.style.backgroundColor = 'white';
      featuresItem.forEach((item, i) => {
        featuresItem[2].style.opacity = '1';
      });

    })
    featuresDotFour.addEventListener('mouseover', () => {
      featuresDotFour.style.backgroundColor = 'white';
      featuresItem.forEach((item, i) => {
        featuresItem[3].style.opacity = '1';
      });

    })
    featuresDotFive.addEventListener('mouseover', () => {
      featuresDotFive.style.backgroundColor = 'white';
      featuresItem.forEach((item, i) => {
        featuresItem[5].style.opacity = '1';
      });

    })
    featuresDotSix.addEventListener('mouseover', () => {
      featuresDotSix.style.backgroundColor = 'white';
      featuresItem.forEach((item, i) => {
        featuresItem[6].style.opacity = '1';
      });

    })
    featuresDotSeven.addEventListener('mouseover', () => {
      featuresDotSeven.style.backgroundColor = 'white';
      featuresItem.forEach((item, i) => {
        featuresItem[7].style.opacity = '1';
      });

    })
    featuresDotEight.addEventListener('mouseover', () => {
      featuresDotEight.style.backgroundColor = 'white';
      featuresItem.forEach((item, i) => {
        featuresItem[8].style.opacity = '1';
      });

    })

    featuresDotOne.addEventListener('mouseout', () => {
      featuresDotOne.style.backgroundColor = '';
      featuresItem.forEach((item, i) => {
        featuresItem[0].style.opacity = '0.5';
      });
    })
    featuresDotTwo.addEventListener('mouseout', () => {
      featuresDotTwo.style.backgroundColor = '';
      featuresItem.forEach((item, i) => {
        featuresItem[1].style.opacity = '0.5';
      });
    })
    featuresDotThree.addEventListener('mouseout', () => {
      featuresDotThree.style.backgroundColor = '';
      featuresItem.forEach((item, i) => {
        featuresItem[2].style.opacity = '0.5';
      });
    })
    featuresDotFour.addEventListener('mouseout', () => {
      featuresDotFour.style.backgroundColor = '';
      featuresItem.forEach((item, i) => {
        featuresItem[3].style.opacity = '0.5';
      });
    })
    featuresDotFive.addEventListener('mouseout', () => {
      featuresDotFive.style.backgroundColor = '';
      featuresItem.forEach((item, i) => {
        featuresItem[5].style.opacity = '0.5';
      });
    })
    featuresDotSix.addEventListener('mouseout', () => {
      featuresDotSix.style.backgroundColor = '';
      featuresItem.forEach((item, i) => {
        featuresItem[6].style.opacity = '0.5';
      });
    })
    featuresDotSeven.addEventListener('mouseout', () => {
      featuresDotSeven.style.backgroundColor = '';
      featuresItem.forEach((item, i) => {
        featuresItem[7].style.opacity = '0.5';
      });
    })
    featuresDotEight.addEventListener('mouseout', () => {
      featuresDotEight.style.backgroundColor = '';
      featuresItem.forEach((item, i) => {
        featuresItem[8].style.opacity = '0.5';
      });
    })
  }());




});