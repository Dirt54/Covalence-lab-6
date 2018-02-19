$(document).ready(function () {
    var friends = ['Sam', 'Judah', 'Avery', 'Bailey', 'Joel'];
    var location = ['kitchen', 'bathroom', 'Waffle House', 'van', 'backyard', 'mall', 'garbage', 'shower', 'toilet', 'Krispy Creme'];
    var weapon = ['sword', 'bouncy ball', 'flute', 'knife', 'towel', 'gun', 'pillow', 'pencil', 'light saber', 'guitar', 'car', 'nun chucks', 'stick', 'airsoft gun', 'needle', 'finger', 'hat', 'lighter', 'paper', 'water bottle'];

    function lets(eye) {
        var h3 = $('<h3 class="curser">Accusation ' + (eye + 1) + '</h3>');
        var counter = 0;
        $('body').append(h3);
        h3.click(function () {
            alert("I accuse " + friends[eye % friends.length] + ", with the " + weapon[eye % weapon.length] + " in the " + location[eye % location.length] + "!");
        });
    }

    for (i = 0; i < 100; i++) {
        lets(i);
    }
});