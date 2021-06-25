    var x, y;
    var block = document.createElement("div");
    var element = document.getElementById("innerdiv");
    var inner_element = element.getElementsByTagName("div");
    var resize_button = document.getElementById("resize");
    resize_button.addEventListener("change", inputchange);


    // Resizing The Grid 
    function inputchange() {
        deleteGrid();
        createGrid(resize_button.value);
    }


    function deleteGrid(xxx) {
        // Deleting The Grid 
        var parent = document.getElementById("innerdiv");
        var child = parent.getElementsByTagName("div");
        while (inner_element.length != 0) {
            for (let i of child) {
                //  child[i].remove();
                // parent.removeChild(child[i]);
                //    parent.elements[i].remove();
                //    document.getElementById("innerdiv").childNodes[i].remove();
                i.remove();
            }

            parent.style.gridTemplateColumns = "";

        }
    }

    function createGrid(squares) {
        // Creating The Grid 
        for (y = 0; y < (squares * squares); y++) {

            block = document.createElement("div");
            element = document.getElementById("innerdiv");
            element.appendChild(block);

        }
        var i, txt = "";
        for (i = 0; i < squares; i++) {
            txt += " auto";
        }
        document.getElementById("innerdiv").style.gridTemplateColumns = txt;


        //Coloring Effect 
        for (i = 0; i < inner_element.length; i++) {
            inner_element[i].addEventListener("mouseover", changetoblack);
            inner_element[i].addEventListener("mouseout", changetoblack);
        }

        function changetoblack() {
            this.style.backgroundColor = "black";
        }

    }

    createGrid(resize_button.value);






    // Reset Button
    function reset() {
        for (i = 0; i < inner_element.length; i++) {
            inner_element[i].style.backgroundColor = "white";
        }
    }