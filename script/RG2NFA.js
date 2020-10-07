function getRGinput() {

var lines = document.querySelector("textarea").value.split(/\r\n|\r|\n/).length; // Calculate number of lines in the textarea.
var lines1 = $('textarea').val().split('\n'); // Splits textarea into seperate lines.

var v = document.getElementById('variables'); // Store variables from RG.
var s = document.getElementById('starting'); // Store starting variable from RG.
var f = document.getElementById('final'); // Store final variables from RG.
var a = document.getElementById('alphabets'); // Store aphabets from RG.


var table = document.getElementById("transNFA");
var rowCount = table.rows.length;

var row=[];
var j=0;
var variables="";
var starting="";
var final="";
var alphabets="";
var eAccess = 0;
var aAlpha = false;
var bAlpha = false;
var cAlpha = false;

for (var i =1; i <= lines; i++)
{
      var res = lines1[j].split(" -> ");
      row[i] = table.insertRow(rowCount);

      if(i==1)
      {
        variables = res[0];
        starting = res[0];
      }
      else {
        variables = variables + "," + res[0];
      }

			var cell1 = row[i].insertCell(0);
			var element1 = document.createElement("text");
      if (i==1)
      {
         cell1.innerHTML = " -> "+res[0];
      }
      else{
      cell1.innerHTML = res[0];
      }
			cell1.appendChild(element1);



      var res1 = res[1].split(" | ");
      var a="";
      var b="";
      var c="";
      var e="";
      var aAccess = 0;
      var bAccess = 0;
      var cAccess = 0;
      for (var k=0; k < res1.length; k++)
      {
        if(res1[k].charAt(0)=='a')
        {
          aAlpha = true;
          aAccess++;
          if (aAccess > 1)
          {
          a = a + "," + res1[k].charAt(1);
          }
          else {
            a = res1[k].charAt(1);
          }
        }
        else if(res1[k].charAt(0)=='b')
        {
          bAlpha = true;
          bAccess++;
          if (bAccess > 1)
          {
          b = b + "," + res1[k].charAt(1);
          }
          else {
            b = res1[k].charAt(1);
          }
        }
        else if(res1[k].charAt(0)=='c')
        {
          cAlpha = true;
          cAccess++;
          if (cAccess > 1)
          {
          c = c + "," + res1[k].charAt(1);
          }
          else {
            c = res1[k].charAt(1);
          }
        }
        else if(res1[k].charAt(0)=='e')
        {
          eAccess++;
          cell1.innerHTML = "*"+res[0];
          if (eAccess == 1)
          {
            final = res[0];
          }
          else {
            final = final + "," + res[0];
          }
        }
        else if(res1[k].charAt(0)!='a' && res1[k].charAt(0)!='b' && res1[k].charAt(0)!='c' && res1[k].charAt(0)!='e')
        {
          e = res1[k].charAt(0);
        }
      }

      if (aAlpha == true && bAlpha == true && cAlpha == true)
      {
        alphabets = "a,b,c";
      }
      else if (aAlpha == true && bAlpha == false && cAlpha == true) {
        alphabets = "a,c";
      }
      else if (aAlpha == true && bAlpha == true && cAlpha == false) {
        alphabets = "a,b";
      }
      else if (aAlpha == false && bAlpha == true && cAlpha == true) {
        alphabets = "b,c";
      }
      else if (aAlpha == true && bAlpha == false && cAlpha == false) {
        alphabets = "a";
      }
      else if (aAlpha == false && bAlpha == true && cAlpha == false) {
        alphabets = "b";
      }
      else if (aAlpha == false && bAlpha == false && cAlpha == true) {
        alphabets = "c";
      }

      document.getElementById('variables').innerHTML = variables;
      document.getElementById('starting').innerHTML = starting;
      document.getElementById('final').innerHTML = final;
      document.getElementById('alphabets').innerHTML = alphabets;

      var cell2 = row[i].insertCell(1);
			var element2 = document.createElement("text");
      cell2.innerHTML = a;
			cell2.appendChild(element2);

      var cell3 = row[i].insertCell(2);
			var element3 = document.createElement("text");
      cell3.innerHTML = b;
			cell3.appendChild(element3);

      var cell4 = row[i].insertCell(3);
			var element4 = document.createElement("text");
      cell4.innerHTML = c;
			cell4.appendChild(element4);

      var cell5 = row[i].insertCell(4);
			var element5 = document.createElement("text");
      cell5.innerHTML = e;
			cell5.appendChild(element5);
      rowCount++;
      j++;
}

/*


var cell2 = row.insertCell(1);
cell2.innerHTML = rowCount + 1;


var rg1A = document.getElementById('rg1A').value;
var rg2A = document.getElementById('rg2A').value;
var rg3A = document.getElementById('rg3A').value;
var rg4A = document.getElementById('rg4A').value;

rg1B.textContent = "->"+ rg1A;
rg2B.textContent = rg2A;
rg3B.textContent = rg3A;
rg4B.textContent = "*" + rg4A;

var rg1C = rg1C.split("|");
var rg2C = rg2C.split("|");
var rg3C = rg3C.split("|");
var rg4C = rg4C.split("|");

  for (var i = 0; i < rg1C.length; i++)
  {
    var alpha = "rg1" + String.fromCharCode('D'.charCodeAt() + i);
    document.getElementById(alpha).innerHTML = rg1C[i];
  }

  for (var i = 0; i < rg2C.length; i++)
  {
    var alpha = "rg2" + String.fromCharCode('D'.charCodeAt() + i);
    document.getElementById(alpha).innerHTML = rg2C[i];
  }
  for (var i = 0; i < rg3C.length; i++)
  {
    var alpha = "rg3" + String.fromCharCode('D'.charCodeAt() + i);
    document.getElementById(alpha).innerHTML = rg3C[i];
  }
  for (var i = 0; i < rg4C.length; i++)
  {
    var alpha = "rg4" + String.fromCharCode('D'.charCodeAt() + i);
    document.getElementById(alpha).innerHTML = rg4C[i];
  }

*/
}


function checkRG()
{

  var count1=1;
  var accept=true;
  for (var d=1; d <= 5; d++)
  {


    var temp = document.getElementById('cs'+d).value;
    var temp1 = document.getElementById('rs'+d);
    document.getElementById('test').innerHTML = document.getElementById(count1).value;
    if (variables1.length * 2 == unique)
    {
      for (var d1=0; d1 < variables1.length; d1++)
      {
        for(var d2=0; d2 < temp.length; d2++)
        {
          if (document.getElementById(count1).value != temp.charCodeAt(d2))
          {
            accept = false;
          }
          count1 = count1 + 2;
        }
        if (accept == false)
        {
          temp1.innerHTML = "NO";
        }
        else if (accept == true)
        {
          temp1.innerHTML = "OK";
        }
      }
    }



  }
}