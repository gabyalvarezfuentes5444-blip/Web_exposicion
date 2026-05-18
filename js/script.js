window.onload = function() {
    let modal = document.getElementById("modal");
    let cerrar = document.getElementById("cerrar");
    

    let figures = document.querySelectorAll(".galeria > figure");

    figures.forEach(function(figure) {
        figure.onclick = function() {
            document.getElementById("modal-figure").innerHTML = this.innerHTML;
            modal.style.display = "flex";
        };
    });

    cerrar.onclick = function() {
        modal.style.display = "none";
    };
};