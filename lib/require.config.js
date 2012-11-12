var jam = {
    "packages": [
        {
            "name": "angularjs-modules",
            "location": "../lib/angular-modules"
        },
        {
            "name": "angularjs",
            "location": "../lib/angularjs",
            "main": "angular.js"
        },
        {
            "name": "jquery",
            "location": "../lib/jquery",
            "main": "jquery.js"
        },
        {
            "name": "less",
            "location": "../lib/less",
            "main": "./lib/less/index"
        },
        {
            "name": "underscore",
            "location": "../lib/underscore",
            "main": "underscore.js"
        }
    ],
    "version": "0.2.11",
    "shim": {}
};

if (typeof require !== "undefined" && require.config) {
    require.config({packages: jam.packages, shim: jam.shim});
}
else {
    var require = {packages: jam.packages, shim: jam.shim};
}

if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = jam;
}