
function insert_Row() 
{
    var table = document.getElementById('sampleTable').insertRow(0);
    var cell1 = table.insertCell(0);
    var cell2 = table.insertCell(1);

    cell1.innerHTML="New Cell1";
    cell2.innerHTML="New Cell2";
};

