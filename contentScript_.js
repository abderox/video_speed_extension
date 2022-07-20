

func = () => {
  if (window.location.href.includes('courses.algofoundry.studio/course') && document.getElementById("ember110411") === null) {

    subject = document.querySelector('.course-material-lists');
    buttons = `<button onclick="document.querySelector('video').playbackRate = 1;" class="btn btn-theme-filled">x1</button>` +
      `<button onclick="document.querySelector('video').playbackRate = 1.25;" class="btn btn-theme-filled">x1.25</button>` +
      `<button onclick="document.querySelector('video').playbackRate = 1.5;" class="btn btn-theme-filled">x1.5</button>` +
      `<button onclick="document.querySelector('video').playbackRate = 2;" class="btn btn-theme-filled">x2</button>` +
      `<button onclick="document.querySelector('video').currentTime += 5;" class="btn btn-theme-dark-filled">+5s</button>` +
      `<button onclick="document.querySelector('video').currentTime -= 5;" class="btn btn-theme-dark-filled">-5s</button>`


    const injectElement = document.createElement('li');
    injectElement.className = 'ember-view';
    injectElement.id = "ember110411"
    injectElement.innerHTML = '<div class="course-material-single"> <div class="course-material-header"> <span class="course-material-name material-name-alone">Video speed extension</span> ' + buttons + ' </div></div>';

    if (subject.children[1] === undefined) {
      subject.appendChild(injectElement)
    }
    else {

      subject.insertBefore(injectElement, subject.children[1]);
    }



  }
}
func()

timeout = null;
document.addEventListener("DOMSubtreeModified", function () {

  subject = document.querySelector('.course-material-lists');
  injected = document.getElementById("ember110411");
  if (timeout) {
    clearTimeout(timeout);
  }
  if (subject && injected === null) {

    timeout = setTimeout(() => {
      if (injected === null) {

        func()
      }

    }, 1000);

  }

}, false);






