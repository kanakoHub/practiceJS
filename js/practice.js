jQuery(function($) {

    $("#user-status").change( function(){
        var status = $(this).val();
        console.log(status);
        if (status === "visiter") {
            $('#register').text('登録').removeClass('btn_login').addClass('btn_reg');
            $("#goodby").remove();
        } else if(status === "user") {
            $('#register').text('ログイン').removeClass('btn_reg').addClass('btn_login');
            $('.login-area').append('<a href="#" id="goodby" class="btn">退会</a>')
        } else {
            $('#register').text('ボタン').removeClass('btn_login btn_reg');
            $("#goodby").remove();
            // return false;
        }
    });
    
});



