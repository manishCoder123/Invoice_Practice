

function myFunction() {
    var flag = 1;

    document.getElementById("id_add").addEventListener("click", function (event) {

        //
        const target = document.getElementById("index");
        const copyElement = target.cloneNode(true);
        copyElement.setAttribute("id", "index-" + (flag + 1))
        document.getElementById("addInputSection").appendChild(copyElement);

        //<h4 id="id_remove" onclick="deleteRow(this)"> X </h4>

        const createH4Element = document.createElement("h4");
        createH4Element.setAttribute("onclick", "deleteRow(this)");
        createH4Element.textContent = "X";
        copyElement.appendChild(createH4Element);

        document.querySelector("#index-" + (flag + 1) + "> .rateInput > input").onchange = function (e) {
            // some things
            console.log("Changed");
        }

        flag++;
        event.preventDefault();
    });
}

function rateRow() {

}

function qtyRow() {

}

function amount() {

}

function deleteRow(rowElementIndex) {
    var element = rowElementIndex.parentNode;
    element.remove();
}

myFunction();


function findTotal() {
    var arr = document.getElementsByClassName('amount');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i].value))
            tot += parseFloat(arr[i].value);
    }
    document.getElementById('subtotal').value = "$ " + tot;
}