//send Email
function sendEmail() {
    $(".sendMsg").innerHTML = "Your message has been sent. Thank you!";

    // var name = $("#name").val();
    // var email = $("#email").val();
    // var message = $("#message").val();

    // if (name.length == 0) {
    //     alert("Please enter your name.");
    //     return;
    // }

    // if (message.length == 0) {
    //     alert("Please enter your message~");
    //     return;
    // }
    // $(".sendMsg").innerHTML = "Sending...";

    // var postData = "name=" + name + "&email=" + email + "&message=" + message;

    // $.ajax({
    //     type: "POST", 
    //     dataType: "text", 
    //     url: '', 
    //     data: postData,
    //     error: function (XMLHttpRequest, textStatus, errorThrown) {
    //         alert("Failed to send msg, please try again later.");
    //     },
    //     success: function (msg) {
    //         $(".sendMsg").innerHTML = "Your message has been sent. Thank you!";
    //     }
    // });
}