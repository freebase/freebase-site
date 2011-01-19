var METADATA = {
  "app_version": "2", 
  "freebase": {
    "write_user": "appeditoruser"
  }, 
  "app_key": "schema", 
  "extensions": {
    "gif": {
      "handler": "tagged_static"
    }, 
    "mf.css": {
      "handler": "tagged_static"
    }, 
    "jpg": {
      "handler": "tagged_static"
    }, 
    "omf.js": {
      "handler": "js_manifest"
    }, 
    "mf.js": {
      "handler": "tagged_static"
    }, 
    "omf.css": {
      "handler": "css_manifest"
    }, 
    "png": {
      "handler": "tagged_static"
    }
  }, 
  "ttl": -1, 
  "mounts": {
    "lib": "//2m.lib.www.tags.svn.freebase-site.googlecode.dev"
  }, 
  "app_tag": "2d"
};

acre.require(METADATA.mounts.lib + "/loader.sjs").extend_metadata(METADATA);