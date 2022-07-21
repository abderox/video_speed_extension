

func = () => {
  if (window.location.href.includes('courses.algofoundry.studio/course') && document.getElementById("ember110411") === null) {

    subject = document.querySelector('.course-material-lists');
    buttons =
      `<button onclick="document.querySelector('video').currentTime += 5;" class="btn btn-theme-dark-filled" style= "background-color : #3b41530f !important ; margin-right : 4px !important;">+5s</button>` +
      `<button onclick="document.querySelector('video').currentTime -= 5;" class="btn btn-theme-dark-filled" style= "background-color : #3b41530f !important ; ">-5s</button>`

    select = `<select class="form-control" style="border :2px solid   #23aa91 !important ; width : 20% ; font-size : 16px !important; margin-right : 4px" id="custom" onchange="document.querySelector('video').playbackRate = this.options[this.selectedIndex].value;">
      <option value="1">Normal</option>
      <option value="1.25">x1.25</option>
      <option value="1.5">x1.5</option>
      <option value="2">x2</option>
    </select>`

    const injectElement = document.createElement('li');
    injectElement.className = 'ember-view';
    injectElement.id = "ember110411"
    injectElement.innerHTML = '<div class="course-material-single"> <div class="course-material-header"> <span class="course-material-name material-name-alone">Video speed extension</span> ' + select + buttons + ' </div></div>';

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






