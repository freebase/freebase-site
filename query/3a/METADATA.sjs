var METADATA = {
  "mounts": {
    "lib": "//14c.lib.www.tags.svn.freebase-site.googlecode.dev"
  }, 
  "app_version": 3, 
  "app_tag": "3a", 
  "app_key": "query"
};

acre.require(METADATA.mounts.lib + "/loader.sjs").extend_metadata(METADATA);