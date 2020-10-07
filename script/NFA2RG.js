var input;
var state;
var start_state;
var final_state;
var state_initial = 0;

function getNFAinput(){
  
  input = document.getElementById('input').value.split(',');
  state = document.getElementById('state').value.split(',');
  start_state = document.getElementById('start_state').value;
  final_state = document.getElementById('final_state').value.split(',');

  var table = document.getElementById("transRG");
  var row_num = table.rows.length;

  document.getElementById("transRG1").colSpan = state.length + 2;

  var varaplha = table.insertRow(row_num);
  var cell0 = varaplha.insertCell(0);
  var element0 = document.createElement("text");
  cell0.innerHTML = "";
  cell0.appendChild(element0);

  for(var l = 0; l < state.length; l++){
    var cellalpha = varaplha.insertCell(l+1);
    var elementalpha = document.createElement("text");
    cellalpha.innerHTML = state[l];
    cellalpha.appendChild(elementalpha);
  }

  var cell00 = varaplha.insertCell(state.length+1);
  var element00 = document.createElement("text");
  cell00.innerHTML = "ε";
  cell00.appendChild(element00);

  row_num = table.rows.length;

  var row1 = [];
  var j1 = 0;

  for(var i = 1; i <= input.length; i++){
    row1[i] = table.insertRow(row_num);

    var cell1 = row1[i].insertCell(0);
    var element1 = document.createElement("text");
    if(input[j1] == start_state){
      cell1.innerHTML = "&#8594;" + start_state;
    }
    else{
      if(final_state.includes(input[j1])){
        cell1.innerHTML = "*" + input[j1];
      }
      else{
        cell1.innerHTML = input[j1];
      }
    }
    cell1.appendChild(element1);

    var m = 1;

    for(var k = 0; k <= state.length; k++){
      state_initial++;
      var cell2 = row1[i].insertCell(m);
      var element2 = document.createElement("input");
      cell2.appendChild(element2);
      element2.type = "text";
      element2.id = state_initial;
      document.getElementById(state_initial).style.width = "50px";
      m++;
    }

    j1++;
    row_num++;
  }
}

function convertRG(){
  var rg = document.getElementById("RG");
  var count = 1;
  var eps = "";
  var state_A = "";
  var state_B = "";
  var state_C = "";
  var output = "";

  if(input.length * 2 == state_initial){
    for(var j = 0; j < input.length; j++){
      if(j == 0){
        output = start_state + "&#8594;";
        if(document.getElementById(count).value != ""){
          state_A = document.getElementById(count).value.split(',');
          for(var i = 0; i < state_A.length; i++){
            if(i == 0){
               output = output + state[0]+state_A[i];
            }
            else if(i != 0){
              output = output + "|" + state[0]+state_A[i];
            }
          }
        }

        if(document.getElementById(count+1).value != ""){
          eps = document.getElementById(count+1).value.split(',');
          for(var i = 0; i < eps.length; i++){
            if(document.getElementById(count).value == "" && i==0){
              output = output + eps[i];
            }
            else if(document.getElementById(count).value != "" || i!=0){
              output = output + "|" + eps[i];
            }
          }
        }
        rg.innerHTML = output;
      }
      else if(j!=0){
        count = count + 2;
        output = output + "<br>" + input[j] + "&#8594;";
        if(document.getElementById(count).value != ""){
          state_A = document.getElementById(count).value.split(',');
          for(var i = 0; i < state_A.length; i++){
            if(i == 0){
              output = output + state[0]+state_A[i];
            }
            else if(i != 0){
              output = output + "|" + state[0]+state_A[i];
            }
          }
        }

        if(document.getElementById(count+1).value != ""){
          eps = document.getElementById(count+1).value.split(',');
          for(var i = 0; i < eps.length; i++){
            if(document.getElementById(count).value == "" && i==0){
              output = output + eps[i];
            }
            else if(document.getElementById(count).value != ""){
              output = output + "|" + eps[i];
            }
          }
        }
        rg.innerHTML = output;
      }

      if(final_state.includes(input[j])){
      output = output + "|ε";
      rg.innerHTML = output;
      }
    }
  }
  else if(input.length * 3 == state_initial){
    for(var j = 0; j < input.length; j++){
      if(j == 0){
        output = input[0] + "&#8594;";
        if(document.getElementById(count).value != ""){
          state_A = document.getElementById(count).value.split(',');
          for (var i = 0; i < state_A.length; i++){
            if (i == 0){
              output = output + state[0]+state_A[i];
            }
            else if (i != 0){
              output = output + "|" + state[0]+state_A[i];
            }
          }
        }

        if(document.getElementById(count+1).value != ""){
          state_B = document.getElementById(count+1).value.split(',');
          for(var k = 0; k < state_B.length; k++){
            if(document.getElementById(count).value == "" && k==0){
              output = output + state[1]+state_B[k];
            }
            else if(document.getElementById(count).value != "" || k!=0){
              output = output + "|" + state[1]+state_B[k];
            }
          }
        }

        if(document.getElementById(count+2).value != ""){
          eps = document.getElementById(count+2).value.split(',');
          for(var i = 0; i < eps.length; i++){
            if(document.getElementById(count).value == "" && document.getElementById(count+1).value == "" && i==0){
              output = output + eps[i];
            }
            else if(document.getElementById(count).value != "" || document.getElementById(count+1).value != "" || i!=0){
              output = output + "|" + eps[i];
            }
          }
        }
        rg.innerHTML = output;
      }
      else if(j!=0){
        count = count + 3;
        output = output + "\n" + input[j] + "&#8594;";
        if(document.getElementById(count).value != ""){
          state_A = document.getElementById(count).value.split(',');
          for(var i = 0; i < state_A.length; i++){
            if(i == 0){
              output = output + state[0]+state_A[i];
            }
            else if(i != 0){
              output = output + "|" + state[0]+state_A[i];
            }
          }
        }

        if(document.getElementById(count+1).value != ""){
          state_B = document.getElementById(count+1).value.split(',');
          for(var i = 0; i < state_B.length; i++){
            if(document.getElementById(count).value == "" && i==0){
              output = output + state[1]+state_B[i];
            }
            else if(document.getElementById(count).value != "" || i!=0){
              output = output + "|" + state[1]+state_B[i];
            }
          }
        }

        if(document.getElementById(count+2).value != ""){
          eps = document.getElementById(count+2).value.split(',');
          for(var i = 0; i < eps.length; i++){
            if(document.getElementById(count).value == "" && document.getElementById(count+1).value == "" && i==0){
              output = output + eps[i];
            }
            else if(document.getElementById(count).value != "" || document.getElementById(count+1).value != "" || i!=0){
              output = output + "|" + eps[i];
            }
          }
        }
        rg.innerHTML = output;
      }

      if(final_state.includes(input[j])){
        output = output + "|ε";
        rg.innerHTML = output;
      }
    }
  }
  else if(input.length * 4 == state_initial){
    for(var j = 0; j < input.length; j++){
      if(input[j] == start_state){
        output = input[0] + "&#8594;";
        if(document.getElementById(count).value != ""){
          state_A = document.getElementById(count).value.split(',');
          for(var i = 0; i < state_A.length; i++){
            if (i == 0){
              output = output + state[0]+state_A[i];
            }
            else if(i != 0){
              output = output + "|" + state[0]+state_A[i];
            }
          }
        }

        if(document.getElementById(count+1).value != ""){
          state_B = document.getElementById(count+1).value.split(',');
          for(var k = 0; k < state_B.length; k++){
            if(document.getElementById(count).value == "" && k==0){
              output = output + state[1]+state_B[k];
            }
            else if(document.getElementById(count).value != "" || k!=0){
              output = output + "|" + state[1]+state_B[k];
            }
          }
        }

        if(document.getElementById(count+2).value != ""){
          state_C = document.getElementById(count+2).value.split(',');
          for (var k = 0; k < state_C.length; k++){
            if (document.getElementById(count).value == "" && document.getElementById(count+1).value == "" && k==0){
              output = output + state[2]+state_C[k];
            }
            else if (document.getElementById(count).value != "" || document.getElementById(count+1).value != "" || k!=0){
              output = output + "|" + state[2]+state_C[k];
            }
          }
        }

        if(document.getElementById(count+3).value != ""){
          eps = document.getElementById(count+3).value.split(',');
          for(var i = 0; i < eps.length; i++){
            if (document.getElementById(count).value == "" && document.getElementById(count+1).value == "" && document.getElementById(count+2).value == "" && i==0){
              output = output + eps[i];
            }
            else if(document.getElementById(count).value != "" || document.getElementById(count+1).value != "" || document.getElementById(count+2).value != "" || i!=0){
              output = output + "|" + eps[i];
            }
          }
        }
        rg.innerHTML = output;
      }
      else if(j!=0){
        count = count + 4;
        output = output + "<br>" + input[j] + "&#8594;";
        if(document.getElementById(count).value != ""){
          state_A = document.getElementById(count).value.split(',');
          for(var i = 0; i < state_A.length; i++){
            if(i == 0){
              output = output + state[0]+state_A[i];
            }
            else if(i != 0){
              output = output + "|" + state[0]+state_A[i];
            }
          }
        }

        if(document.getElementById(count+1).value != ""){
          state_B = document.getElementById(count+1).value.split(',');
          for(var i = 0; i < state_B.length; i++){
            if (document.getElementById(count).value == "" && i==0){
              output = output + state[1]+state_B[i];
            }
            else if (document.getElementById(count).value != "" || i!=0){
              output = output + "|" + state[1]+state_B[i];
            }
          }
        }

        if(document.getElementById(count+2).value != ""){
          state_C = document.getElementById(count+2).value.split(',');
          for(var k = 0; k < state_C.length; k++){
            if(document.getElementById(count).value == "" && document.getElementById(count+1).value == "" && k==0){
              output = output + state[2]+state_C[k];
            }
            else if(document.getElementById(count).value != "" || document.getElementById(count+1).value != "" || k!=0){
              output = output + "|" + state[2]+state_C[k];
            }
          }
        }

        if(document.getElementById(count+3).value != ""){
          eps = document.getElementById(count+3).value.split(',');
          for(var i = 0; i < eps.length; i++){
            if(document.getElementById(count).value == "" && document.getElementById(count+1).value == "" && document.getElementById(count+2).value == "" && i==0){
              output = output + eps[i];
            }
            else if(document.getElementById(count).value != "" || document.getElementById(count+1).value != "" || document.getElementById(count+2).value != "" || i!=0){
              output = output + "|" + eps[i];
            }
          }
        }
        rg.innerHTML = output;
      }

      if(final_state.includes(input[j])){
        output = output + "|ε";
        rg.innerHTML = output;
      }
    }
  }
}

function checkString(){
  var count = 1;
  var accept = true;
  for(var i = 1; i < 6; i++){
    var temp_1 = document.getElementById('column_'+ i);
    var temp_2 = document.getElementById('row_'+ i);   
    if(input.length*3 == state_initial){
      for(var j = 0; j < input.length; j++){
        for(var k = 0; k < temp_1.length; k++){
          if(document.getElementById(count).value != temp_1.charCodeAt(k)){
            accept = false;
          }
          count += 2;
        }

        if(accept == false){
          temp_2.innerHTML = "NO";
        }
        else{
          temp_2.innerHTML = "OK";
        }
      }
    }
  }
}
