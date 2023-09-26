$(".chevron-button").on("click", function(){
    if($("header").hasClass("slide-out")){
        $("header").removeClass("slide-out");
        $("header").addClass("slide-in");
    } else if($("header").hasClass("slide-in")){
        $("header").removeClass("slide-in");
        $("header").addClass("slide-out");
    } else{
        $("header").addClass("slide-in");
    }
})


$(".nav-btn").on("click", function(){
    $(".nav-btn").removeClass("clicked");
    $(this).addClass("clicked");
})

function newElement(){
    let li = $("ul");
    li.append(`
        <li class="my-list">
            <div class="list-content">
                <input type="text" name="list1" id="myInput">
            </div>
            <button type="button" class="check-button app-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                </svg>
            </button>
            <button type="button" class="del-button app-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                </svg> 
            </button>
            
        </li>`
    );
    
}



$(".add-list").on("click", function(){
    newElement();
    $(".the-list").animate({
        scrollTop: $(
          '.the-list').get(0).scrollHeight
    }, 500);
    // finishedClass();
    $("#myInput").on("keydown", function(event){
        let inputValue = $("#myInput").val();
        if(event.code === "Enter"){
            if(inputValue === ""){
                alert("You must write something!");
            } else{
                this.replaceWith(inputValue);
            }
        }
    })
    $(".del-button").on("click",function(){
        $(this).parent().remove();
    })
    
})

finishedClass();


function finishedClass(){
    $(document).on("click", ".check-button", function(){
        let listContent = $(this).siblings(".list-content");
        listContent.toggleClass("finished");
        $(this).toggleClass("checked");
    })
}




