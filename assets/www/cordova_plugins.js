cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.cesidiodibenedetto.filechooser/www/filechooser.js",
        "id": "com.cesidiodibenedetto.filechooser.FileChooser",
        "clobbers": [
            "FileChooser"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.cesidiodibenedetto.filechooser": "1.0.0"
}
// BOTTOM OF METADATA
});