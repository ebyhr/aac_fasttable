$(window).on('message', function (event) {

    var data = event.originalEvent.data;
    var dataUrl = data.dataUrl + '?limit=9999';
    console.log(data);

    $.getJSON(dataUrl, function (jsonData) {
        var columnData = [];

        for (var i = 0; i < jsonData.metaData.column_names.length; i++) {
            columnData.push({ title: jsonData.metaData.column_names[i] });
        };

        $('#example').DataTable({
            data: jsonData.data,
            columns: columnData,
            iDisplayLength: 500,
            colReorder: true,
            aLengthMenu: [[10, 25, 50, 100, 500, 1000, -1], [10, 25, 50, 100, 500, 1000, "All"]],
            dom: 'iBClfrtp',
            buttons: [
                'copyHtml5',
                'excelHtml5',
                'csvHtml5'
            ]
        });
    });
});
