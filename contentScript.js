

const init = function () {

  if(window.location.href.includes('courses.algofoundry.studio/course')){
  subject = document.querySelector('.course-material-lists');
  buttons = `<button onclick="document.querySelector('video').playbackRate = 1;" class="btn btn-theme-filled">x1</button>`+
`<button onclick="document.querySelector('video').playbackRate = 1.25;" class="btn btn-theme-filled">x1.25</button>`+
`<button onclick="document.querySelector('video').playbackRate = 1.5;" class="btn btn-theme-filled">x1.5</button>`+
`<button onclick="document.querySelector('video').currentTime += 5;" class="btn btn-theme-dark-filled">+5s</button>`+
`<button onclick="document.querySelector('video').currentTime -= 5;" class="btn btn-theme-dark-filled">-5s</button>`

 
  const injectElement = document.createElement('li');
    injectElement.className = 'ember-view';
    injectElement.id="ember110411"
    injectElement.innerHTML = '<div class="course-material-single"> <div class="course-material-header"> <span class="course-material-name material-name-alone">Video speed extension</span> '+buttons+' </div></div>';
    
    if(subject.children[1]===undefined)
    {
      subject.appendChild(injectElement)
    }
    else {
      
      subject.insertBefore(injectElement, subject.children[1]);
    }

  }
 

}
window.onload = () => {
 
  setTimeout(()=>{
    init()
  },5000);
}

