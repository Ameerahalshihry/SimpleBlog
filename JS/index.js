$("#add-post").click(function () {
    let postTitle = $("#exampleModal #post-title").val().trim();
    let postBody = $("#exampleModal #post-body").val().trim();
    let postAuthor = $("#exampleModal #post-author").val().trim();

    $("#post-container").append(`<div class="col-lg-4 col-md-6 ">
    <div class="card m-3" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${postTitle}</h5>
            <h6 class="card-subtitle mb-2 text-muted">written by <em>${postAuthor}</em></h6>
            <p class="card-text"> ${postBody}</p>
            <a href="#" class="card-link">Read More</a>
        </div>
    </div>
</div>`)

$("input:text").val("")
$("textarea").val("")
$('#exampleModal').modal('toggle');
});