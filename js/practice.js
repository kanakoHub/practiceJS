jQuery(function($) {

    var no = 1
    // キャッシュを無効にする
    $.ajaxSetup({
        cache: false
    });
    // 記事をとってきて表示
    var getArticle = function(){
        var keyword = $("#keyword").val();
        // var url = `https://qiita.com/api/v2/items?query=${keyword}`
        $.get('https://qiita.com/api/v2/items?',{ page:no, per_page:"20", query:keyword }).done(function(data) {
            // debugger
            $.each(data, function(i, v){
                // aタグオブジェクトをつくってhrefにv.urlをセット
                // v.titleをテキスト形式で表示
                var a = $("<a>").attr("href", v.url).text(v.title);
                // liタグオブジェクトをつくって先程作ったaをappend
                // それを#js_append_areaに追加
                $("#js_append_area").append($("<li>").append(a));
            })
        });
    }
    // 最初の20件を初期表示
    $("#button").click(function () {
        getArticle();
    });
    // ボタンを押すごとに次の20件を表示
    $("#next").click(function () {
        ++no;
        console.log(no);
        getArticle();
    });
    
});