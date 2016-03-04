/**
 * Created by dengjing on 16/3/1.
 */

Package.describe({
    summary: "a available 1.2.7",
    version: "1.2.7",
    name: "shanyue:meteor-highlight",
    git: "https://github.com/mybigjsdream/meteor-highlight"
});

Package.on_use(function (api) {
    api.versionsFrom("METEOR@1.2.1");
    api.use("templating", "client", {weak: true});

    api.add_files("default.min.css");

    api.add_files("pre-hljs.js");
    api.add_files("highlight.pack.js");
    api.add_files("post-hljs.js");


    api.export('hljs');
});