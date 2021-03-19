var player_1_name = localStorage.getItem("player1")
var player_2_name = localStorage.getItem("player2")

var player_1_score = 0
var player_2_score = 0

document.getElementById("player1_name").innerHTML = player_1_name + ":";
document.getElementById("player2_name").innerHTML = player_2_name + ":";

document.getElementById("player1_score").innerHTML = player_1_score
document.getElementById("player2_score").innerHTML = player_2_score

document.getElementById("player_question").innerHTML = "question turn -" + player_1_name
document.getElementById("player_answer").innerHTML = "answer turn -" + player_2_name

function send(){
    var get_word = document.getElementById("word").value
    var word = get_word.toLowerCase()

    var lineat1 = word.charAt(1)

    var divide = Math.floor(word.length/2)
    var lineat2 = word.charAt(divide);

    var subtract = word.length - 1
    var lineat3 = word.charAt(subtract);

    var remove_lineAt1 = word.replace(lineat1,"_")
    var remove_lineAt2 = remove_lineAt1.replace(lineat2,"_")
    var remove_lineAt3 = remove_lineAt2.replace(lineat3,"_")   

    var question_word = "<h4 id='word_display'> Q._"+remove_lineAt3+"</h4>"
    var input_box = "<br> answer : <input type='text' id='input_check_box'>"
    var check_button = "<br><br> <button class='btn btn-info' onclick='check()'>Check</button>"
    var row = question_word + input_box + check_button
    document.getElementById("output").innerHTML = row
    document.getElementById("word").value = "";
}