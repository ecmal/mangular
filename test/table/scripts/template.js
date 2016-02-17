System.register(["./template/main-header", "./template/selected-header", "./template/content", "./template/paginator"], function(exports_1) {
    var main_header_1, selected_header_1, content_1, paginator_1;
    return {
        setters:[
            function (main_header_1_1) {
                main_header_1 = main_header_1_1;
            },
            function (selected_header_1_1) {
                selected_header_1 = selected_header_1_1;
            },
            function (content_1_1) {
                content_1 = content_1_1;
            },
            function (paginator_1_1) {
                paginator_1 = paginator_1_1;
            }],
        execute: function() {
            exports_1("default","\n" + main_header_1.default + "\n" + selected_header_1.default + "\n" + content_1.default + "\n" + paginator_1.default + "\n");
        }
    }
});
//# sourceMappingURL=template.js.map