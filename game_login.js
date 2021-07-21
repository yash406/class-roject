
function addUser(){
    player_1_name = document.getElementById("Player_1_nameinput").value;

    player_2_name = document.getElementById("Player_2_nameinput").value;
    localStorage.setItem("player_1_name", player_1_name);

    localStorage.setItem("player_2_name", player_2_name);
    window.location = "game_page.html";


}