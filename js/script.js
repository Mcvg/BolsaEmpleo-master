icono = document.getElementById("icon");
menu = document.getElementById("menuresponsive");

 // SideNav Initialization
 $(".button-collapse").sideNav();
 $(document).ready(function () {
     $('.mdb-select').material_select();
 });
 // Data Picker Initialization
 $('.datepicker').pickadate();
 $(function () {
     $('[data-toggle="tooltip"]').tooltip()
 })

icono.addEventListener("click",esconder);


function esconder() {

 var clase = menu.className;
 
 if (clase == "invisible"){
     menu.classList.remove("invisible");
     menu.classList.add("visible");
     icono.classList.add("activo");
 }
 else
 {
    menu.classList.remove("visible");
    menu.classList.add("invisible");
    icono.classList.remove("activo"); 
 }
}

function iniciosesion(entra){
    inicio = document.getElementById("containerLogin");
    inicio.style.display = 'block';
    if(entra == "entrar"){
        inicio.style.display = 'block';
    }else if (entra == "cerrar"){
        inicio.style.display = 'none';
    }
}

  // Minimalist chart
        $(function () {
            $('.min-chart#chart-sales').easyPieChart({
                barColor: "#4caf50",
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        });
        // Main chart
        var ctxL = document.getElementById("lineChart").getContext('2d');
        var myLineChart = new Chart(ctxL, {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "My First dataset",
                    fillColor: "#fff",
                    backgroundColor: 'rgba(255, 255, 255, .3)',
                    borderColor: 'rgba(255, 99, 132)',
                    data: [0, 10, 5, 2, 20, 30, 45],
                }]
            },
            options: {
                legend: {
                    labels: {
                        fontColor: "#fff",
                    }
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            display: true,
                            color: "rgba(255,255,255,.25)"
                        },
                        ticks: {
                            fontColor: "#fff",
                        },
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            display: true,
                            color: "rgba(255,255,255,.25)"
                        },
                        ticks: {
                            fontColor: "#fff",
                        },
                    }],
                }
            }
        });

        $(function () {
            $('#folder-1').click(function () {
                toastr.error("Folder 1 has been clicked!", "Folder 1", {
                    "positionClass": "toast-top-right",
                });
            });
            $('#folder-2').click(function () {
                // make it not dissappear
                toastr.info("Folder 2 has been clicked!", "Folder 2", );
            });
            $('#folder-3').click(function () {
                // make it not dissappear
                toastr.info("Folder 3 has been clicked!", "Folder 3", );
            });
        });