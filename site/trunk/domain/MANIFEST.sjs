var MF = {

  version: {
    "/freebase/site/core": null
  },

  stylesheet: {
    "project-manifest.css": ["/freebase/site/core/core.less", "project.less"]
  },

  javascript: {
    "project.js": ["/freebase/site/core/core.js", "project.js", "jquery.lazyload.js", "jquery.masonry.js"]
  }

};

acre.require("/freebase/site/core/MANIFEST", MF.version["/freebase/site/core"]).init(MF, this);