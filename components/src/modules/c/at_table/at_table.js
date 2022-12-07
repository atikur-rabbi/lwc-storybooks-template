import { LightningElement, api, track } from 'lwc';

export default class Table extends LightningElement {
  @api tabledata = '';
  @track trackabledata;

  renderedCallback() {
    this.rendertable();
  }

  rendertable() {
    this.trackabledata = this.tabledata;
    var data = this.trackabledata;
    var componentName = 'c-datatable_datatable';
    var sortAscending = 'fales';

    var table = document.createElement('table');
    table.setAttribute('id', 'empTable');
    table.setAttribute(componentName, '');
    table.setAttribute('class', 'tableCustom');

    var arrHead = new Array();
    arrHead = Object.keys(data[0]);
    var arrValue = new Array();
    data.forEach((element) => {
      arrValue.push(Object.values(element));
    });

    var thead = table.createTHead();
    thead.setAttribute(componentName, '');
    var tr = thead.insertRow(-1);
    for (var h = 0; h < arrHead.length; h++) {
      var th = document.createElement('th'); // TABLE HEADER.
      th.innerHTML = arrHead[h];
      th.setAttribute(componentName, '');
      th.onclick = function () {
        // this.parentElement.removeChild(this);
        // console.log(this.innerHTML);
        // console.log(this.parentElement.parentElement.parentElement.parentElement.innerHTML);
        var parent = this.parentNode;
        var index = Array.prototype.indexOf.call(parent.children, this);
        // console.log(index);

        var headers = this.parentElement.childNodes;
        headers.forEach(function (item) {
          item.className = 'header';
        });

        var temprows =
          this.parentElement.parentElement.parentElement.parentElement.querySelector(
            'tbody'
          ).childNodes;

        if (sortAscending) {
          this.className = 'aes';
          sortRows(temprows, index, sortAscending);
          sortAscending = false;
        } else {
          this.className = 'des';
          sortRows(temprows, index, sortAscending);
          sortAscending = true;
        }
      };
      tr.appendChild(th);
      tr.setAttribute(componentName, '');
    }

    var tbody = table.appendChild(document.createElement('tbody'));
    tbody.setAttribute(componentName, '');
    for (var c = 0; c <= arrValue.length - 1; c++) {
      var tr = tbody.insertRow(-1);
      tr.setAttribute(componentName, '');
      for (var j = 0; j < arrHead.length; j++) {
        var td = document.createElement('td'); // TABLE DEFINITION.
        td = tr.insertCell(-1);
        td.innerHTML = arrValue[c][j]; // ADD VALUES TO EACH CELL.
        td.setAttribute(componentName, '');
        td.setAttribute('data-th', arrHead[j]);
      }
    }

    var divdata = this.template.querySelector('.dataTable');
    divdata.appendChild(table);
    // console.log(arrValue);

    function switchRow(rowA, rowB) {
      var len = rowA.childNodes.length || rowB.childNodes.length;
      for (var i = 0; i < len; i++) {
        var temp = rowA.childNodes[i].innerHTML;
        rowA.childNodes[i].innerHTML = rowB.childNodes[i].innerHTML;
        rowB.childNodes[i].innerHTML = temp;
      }
    }

    function sortRows(rows, index, order) {
      if (order) {
        for (var i = 0; i < rows.length - 1; i++) {
          for (var j = 0; j < rows.length - 1 - i; j++) {
            sortTwoRows(rows[j], rows[j + 1], index);
          }
        }
      } else {
        for (var i = 0; i < rows.length - 1; i++) {
          for (var j = 0; j < rows.length - 1 - i; j++) {
            sortTwoRowsDes(rows[j], rows[j + 1], index);
          }
        }
      }
    }
    function sortTwoRows(rowA, rowB, index) {
      if (rowA.childNodes[index].innerHTML < rowB.childNodes[index].innerHTML)
        switchRow(rowA, rowB);
    }
    function sortTwoRowsDes(rowA, rowB, index) {
      if (rowA.childNodes[index].innerHTML > rowB.childNodes[index].innerHTML)
        switchRow(rowA, rowB);
    }

    function checkdata(rowA, rowB, index) {
      if (rowA.childNodes[index].innerHTML > rowB.childNodes[index].innerHTML)
        return true;
      else return false;
    }
  }
}
