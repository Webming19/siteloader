
// import SiteLoader from "https://www.unpkg.com/siteloader/dist/sl.js";
// import SiteLoader from 'siteloader'
// import SiteLoader from "./lib/siteLoader"

const sl = new SiteLoader(
  [
    {
      sources: [
        {
          sourceType: 'image',
          selectors: ['.selected', '.ppp']
        },
        {
          sourceType: 'media',
          selectors: ['#video']
        }
      ]

    },

  ]
)

const loadingBar = document.querySelector('.loading-color')

sl.addEventListener('progress', (e) => {

  loadingBar.style.transform = `translateX(-${100 - e.progress}%)`

})


sl.setTargetTextDom('.loading-num')

// sl.needSpeedUp = true
sl.startLoad()


