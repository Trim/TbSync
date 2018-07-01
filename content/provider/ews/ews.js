"use strict";

var ews = {
    bundle: Services.strings.createBundle("chrome://tbsync/locale/ews.strings"),

    init: Task.async (function* ()  {
    }),

    //this is  called, after lighning has become available - it is called by tbSync.onLightningLoad
    init4lightning: Task.async (function* ()  {
    }),

    //this is  called during tbSync cleanup (if lighning is enabled)
    cleanup4lightning: function ()  {
    },

};
