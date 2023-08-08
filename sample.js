
    ej.base.enableRipple(true);
    var sportsData = ['Menu', 'Excel', 'FilterBar'];
    var dropDownListObject = new ej.dropdowns.DropDownList({
        dataSource: sportsData,
        change: ddChange,
        placeholder: "Select a Filter"
    });
    dropDownListObject.appendTo('#ddlelement1');
    var data = [];
    var fields = [];
    for (var i = 1; i < 51; i++) {
        fields.push("Field" + i);
    }
    var dropDownListObject2 = new ej.dropdowns.DropDownList({
        dataSource: fields,
        placeholder: "Select a field"
    });
    dropDownListObject2.appendTo('#ddlelement2');
    for (var i = 1; i < 111; i++) {
        var rowData = {};
        for (var j = 0; j < fields.length; j++) {
            if (j == 0) {
                rowData[fields[j]] = i;
            }
            else if (j == 19) {
                rowData[fields[j]] = 10;
            }
            else if (j % 3 == 1) {
                rowData[fields[j]] = 'row' + i + ' - data' + (j + 1);
            }
            else if (j % 3 == 2) {
                rowData[fields[j]] = 'row' + i + ' - view' + (j + 1);
            }
            else {
                rowData[fields[j]] = 'row' + i + ' - text' + (j + 1);
            }
        }
        data.push(rowData);
    }
    // grid_1.Grid.Inject(page_1.Page, virtual_scroll_1.VirtualScroll, filter_1.Filter, sort_1.Sort, toolbar_1.Toolbar, group_1.Group, resize_1.Resize, reorder_1.Reorder, edit_1.Edit, aggregate_1.Aggregate, context_menu_1.ContextMenu);
    var grid = new ej.grids.Grid({
        dataSource: data,
        allowFiltering: true,
        allowSorting: true,
        filterSettings: { type: "Menu" },
        allowGrouping: true,
        allowResizing: true,
        allowReordering: true,
        editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
        enableColumnVirtualization: true,
        allowPaging: true,
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', "Search"],
        height: 300,
        // frozenColumns: 2,
        // frozenRows: 2,
        columns: [
            // { type: 'checkbox' },
            { field: 'Field1', isPrimaryKey: true, width: 140 },
            { field: 'Field2', width: 140 },
            { field: 'Field3', width: 140 },
            { field: 'Field4', width: 140 },
            { field: 'Field5', width: 140 },
            { field: 'Field6', width: 140 },
            { field: 'Field7', width: 140 },
            { field: 'Field8', width: 140 },
            { field: 'Field9', width: 140 },
            { field: 'Field10', width: 140 },
            { field: 'Field11', width: 140 },
            { field: 'Field12', width: 140 },
            { field: 'Field13', width: 140 },
            { field: 'Field14', width: 140 },
            { field: 'Field15', width: 140 },
            { field: 'Field16', width: 140 },
            { field: 'Field17', width: 140 },
            { field: 'Field18', width: 140 },
            { field: 'Field19', width: 140 },
            { field: 'Field20', width: 140 },
            { field: 'Field21', width: 140 },
            { field: 'Field22', width: 140 },
            { field: 'Field23', width: 140 },
            { field: 'Field24', width: 140 },
            { field: 'Field25', width: 140 },
            { field: 'Field26', width: 140 },
            { field: 'Field27', width: 140 },
            { field: 'Field28', width: 140 },
            { field: 'Field29', width: 140 },
            { field: 'Field30', width: 140 },
            { field: 'Field31', width: 140 },
            { field: 'Field32', width: 140 },
            { field: 'Field33', width: 140 },
            { field: 'Field34', width: 140 },
            { field: 'Field35', width: 140 },
            { field: 'Field36', width: 140 },
            { field: 'Field37', width: 140 },
            { field: 'Field38', width: 140 },
            { field: 'Field39', width: 140 },
            { field: 'Field40', width: 140 },
            { field: 'Field41', width: 140 },
            { field: 'Field42', width: 140 },
            { field: 'Field43', width: 140 },
            { field: 'Field44', width: 140 },
            { field: 'Field45', width: 140 },
            { field: 'Field46', width: 140 },
            { field: 'Field47', width: 140 },
            { field: 'Field48', width: 140 },
            { field: 'Field49', width: 140 },
            { field: 'Field50', width: 140 },
        ],
        contextMenuItems: ['AutoFit', 'AutoFitAll', 'SortAscending', 'SortDescending',
            'Copy', 'Edit', 'Delete', 'Save', 'Cancel',
            'PdfExport', 'ExcelExport', 'CsvExport', 'FirstPage', 'PrevPage',
            'LastPage', 'NextPage'],
    });
    grid.appendTo('#Grid');
    function ddChange(args) {
        grid.filterSettings.type = args.value;
    }
    function btnClick1(args) {
        grid.showColumns(dropDownListObject2.value, 'field');
    }
    function btnClick2(args) {
        grid.hideColumns(dropDownListObject2.value, 'field');
    }
    document.getElementById('btn1').addEventListener('click', btnClick1);
    document.getElementById('btn2').addEventListener('click', btnClick2);