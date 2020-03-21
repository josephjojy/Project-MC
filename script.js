

st="";
var s = new Array();
str="";
var i=0;
	
function dispTable(sa){
	console.log(sa.length);

	
		for(i=0; i<sa.length; i++) {
		let row = window.document.createElement('textarea');
		row.setAttribute('id',"a"+i);
		var text=document.createTextNode(sa[i]);
		row.appendChild(text);
		document.getElementById('output').appendChild(row);
		}
		


}
function writeText(that){

}












	function readText(that){
		alert(that.files[0].name);

		if(that.files && that.files[0]){
			var reader = new FileReader();
			reader.onload = function (e) {  
				var output=e.target.result;

				//process text to show only lines with "@":				
				output=output.split("\n").filter( (line, index, arr) => {
					if (line.match('.*?</mc>')) {                                  
      					st=st+line+'\n\n\n\n\n';
						str=str+line;
						
      					s.push(str);
      					str="";
    				}
    				
   					if (line.match('<mc>')) {
			    	do{
    					st=st+arr[index]+'\n';
    					str=str+arr[index]+'\n';
    					index++;
    				  }while(!arr[index].match('.*?</mc>'));
   					}
				});


				//document.getElementById('code-area').innerHTML= st;
				dispTable(s);
			
			};//end onload()
			reader.readAsText(that.files[0]);
		
		}//end if html5 filelist support
	}
