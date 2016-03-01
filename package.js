/**
 * Created by dengjing on 16/3/1.
 */

Package.describe({
    summary: "a available 0.0.1",
    version: "0.0.1",
    name: "shanyue:meteor-highlight",
    git: "https://github.com/mybigjsdream/meteor-highlight"
});

Package.on_use(function (api) {
    api.versionsFrom("METEOR@1.2.1");
    api.use("templating", "client", {weak: true});

    api.add_files("highlight.js");
    api.add_files("exporthljs.js");

    //api.add_files('template-integration.js', 'client');
    api.export('hljs');
});