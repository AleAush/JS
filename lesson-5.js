function chess1() {
    var newTable = document.createElement('table'),
        letters = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''],
        blackFigs = ['8', '&#9820', '&#9822', '&#9821', '&#9819', '&#9818', '&#9821', '&#9822', '&#9820', '8'],
        blackPawn = ['7', '&#9823', '&#9823', '&#9823', '&#9823', '&#9823', '&#9823', '&#9823', '&#9823', '7'],
        whitePawn = ['2', '&#9817', '&#9817', '&#9817', '&#9817', '&#9817', '&#9817', '&#9817', '&#9817', '2'],
        whiteFigs = ['1', '&#9814', '&#9816', '&#9815', '&#9813', '&#9812', '&#9815', '&#9816', '&#9814', '1']
    for (var i = 0, a = 9; i < 10, a > 0; i++, a--) {
        var newTr = newTable.insertRow(i);
        for (var j = 0; j < 10; j++) {
            var newTd = newTr.insertCell(j);
            switch (i) {
                case 0:
                    newTd.innerText = letters[j];
                    break;
                case 1:
                    newTd.innerHTML = blackFigs[j];
                    break;
                case 2:
                    newTd.innerHTML = blackPawn[j];
                    break;
                case 7:
                    newTd.innerHTML = whitePawn[j];
                    break;
                case 8:
                    newTd.innerHTML = whiteFigs[j];
                    break;
                case 9:
                    newTd.innerText = letters[j];
                    break;


                default:
                    if (j == 0 || j == 9) {
                        newTd.innerHTML = a;
                    }
                    break;
            }
        }
    }

    document.body.append(newTable);

}
chess1();