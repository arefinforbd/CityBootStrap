var uCities = $("#ulCities > :first-child");

$(document).ready(function () {
    LoadCities();
});

//this function loads the cities from repository through AJAX and json data
function LoadCities() {

    var sortingOrderVal = "asc";

    urlVal = "/City/GetCities";

    $.ajaxSetup({ cache: false });
    $.ajax({
        url: urlVal,
        type: "GET",
        data: { sortingOrder: sortingOrderVal },
        dataType: "json",
        success: function (data) {
            if (data != null) {
                var html = '<li id="0" style="cursor:pointer"><a>Select City</a></li>';

                $.each(data, function (i, city) {
                    html += '<li id=' + city.ID + ' style="cursor:pointer"><a>' + city.Name + '</a></li>';
                });
                $("#ulCities").html(html);
            } else {
                //if no data returned
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert("An error occurred while retrieving city information, please try again.");
        },
        complete: function (jqXHR, textStatus) {

        }
    });
}

//this is for making the selected item visible and yellow coloured
$(document.body).on('click', '#ulCities li', function (event) {
    var $target = $(event.currentTarget);
    uCities.css("background-color", "#FFFFFF");

    $(this).css("background-color", "#f9f9c0");

    $target.closest('.btn-group')
       .find('[data-bind="label"]').text($target.text())
          .end()
       .children('.dropdown-cities').dropdown('toggle');

    SearchCityInformation($(this).attr("id"));

    return false;
});

//this function will get data in json format from controller and fill the datatable
function SearchCityInformation(id) {

    var urlVal = "/City/GetCityInformation";

    $.ajaxSetup({ cache: false });
    $.ajax({
        url: urlVal,
        type: "GET",
        data: { cityID: id },
        dataType: "json",
        success: function (data) {
            if (data != null) {
                var html = "";
                var html_tbl_row = "";

                html += '<table class="table table-striped table-bordered table-hover" id="datatablefiles" style="font-size: 12px;"><thead><tr><th>City ID</th><th>Area</th><th>Description</th></tr></thead><tbody>';
                var pathName = "fileSelected";
                
                $.each(data, function (i, info) {
                    html_tbl_row += '<tr class="odd gradeX">'
                        + '<td class="clickme" style="cursor:pointer;"><strong>Click ME : </strong>' + info.ID + '</td>'
                        + '<td>' + info.Area + '</td>'
                        + '<td class="citydesc">' + info.Description + '</td>'
                        + '<td>' + info.ID + '</td>'
                        + '</tr>';
                });
                html += html_tbl_row + '</tbody></table>';
                $('#divCityInfo').html(html);
                //this is for sorting the datatable by 4th column in ascending order
                //and making the 4th column invisible and non-searchable
                if (data.length > 0) {
                    $('#datatablefiles').dataTable({
                        "order": [[3, "asc"]],
                        "columnDefs": [
                        {
                            "targets": [3],
                            "visible": false,
                            "searchable": false
                        }]
                    });
                    $("#datatablefiles_wrapper .row .col-sm-6").addClass("col-lg-6 col-md-6 col-xs-6");
                }
            } else {
                $("#divCityInfo").hide();
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert("An error occurred while retrieving city information, please try again.");
        },
        complete: function (jqXHR, textStatus) {

        }
    });
}

$(document.body).on('click', '.clickme', function (event) {
    var cityvalue = $(this).parent().parent().find('.citydesc').html();
    alert(cityvalue);
});