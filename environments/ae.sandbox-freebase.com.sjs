var app_labels = {
    "admin"                   : "//12f.admin.site.tags.svn.freebase-site.googlecode.dev",
    "homepage"                : "//20a.homepage.site.tags.svn.freebase-site.googlecode.dev",
    "routing"                 : "//61.routing.site.branches.svn.freebase-site.googlecode.dev"
};

var routing = acre.require(app_labels["routing"] + "/routes");
routing.host_based_redirects(acre.request);
routing.path_based_routing(acre.request, app_labels);