var Jasmine = require('jasmine');
var jasmine = new Jasmine();
var reporters = require('jasmine-reporters');

jasmine.loadConfig({
    spec_dir: 'tests',
    spec_files: [
        '**/*.spec.js'
    ]
});

jasmine.configureDefaultReporter({
    showColors: true
});

var junitReporter = new reporters.JUnitXmlReporter({
    savePath: __dirname + '/results',
    consolidateAll: false
});

jasmine.addReporter(junitReporter);

jasmine.execute();