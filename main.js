$(document).ready((e) => {
    $('form').submit((e) => {
        e.preventDefault()
        $(`<li>${$('#tarefa').val()}</li>`).appendTo('ol')
        
        $('ol li').click((e) => {
            e.target.style.textDecoration = "line-through"
            e.target.style.color = "rgba(0, 179, 0, 0.5)"
        })
    })
})