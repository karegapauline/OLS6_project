// Upon clicking this workshop button\
var myArray = [
    {'workshopName':'Introduction to Bacterial Genomics Bioinformatics Workshop', 'workshopDate': '23-27th January', 'applicationLink' : 'Sign up here: https://t.co/Bi1PN0bITb'},
    {'workshopName':'Shotgun Metagenomics Analysis Workshop','workshopDate':'Dec 12-14','applicationLink':'Sign up here: https://t.co/kUx64lS6s4'}
   ]

buildTable(myArray)

    function buildTable(data){
        var table = document.getElementById('myTable')

            for (var i = 0; i < data.length; i++){
                var row = `<tr>
                                <td>${data[i].workshopName}</td>
                                <td>${data[i].workshopDate}</td>
                                <td>${data[i].applicationLink}</td>

                            </tr>`
                 table.innerHTML += row
               }
            }

            
