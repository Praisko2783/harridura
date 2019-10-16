	var zuzena,eran1,eran2,eran3;
	var hautua1,hautua2,hautua3;
	var auke1,auke2,auke3;
	var galdekop,puntukop;
	var g40,g25,g10 = 0;
	var puntua = 0;
	var galdera = 0;
	var txikiena = 0;
	var handiena = 30;
	var zenbakiak = new Array();//array honetan gordeko dira galderak
	var hastekoZenbakia = 0;
	var azalpena;
	var alde = document.getElementById("alde").addEventListener('click', aldegin);
	var info = document.getElementById("info").addEventListener('click', informazioa);

	function aldegin(){ 
			swal({
			  title: 'LASTIMA',
			  title: 'Seguru zaude alde egin nahi duzula?',
			  showCancelButton: true,
			  cancelButtonText: "Agian... ez, EZ",
			  confirmButtonColor: "#DD6B55",
			  confirmButtonText: "BAI",
			  closeOnConfirm: false,
			},
			function(isConfirm){
			  if (isConfirm) {
				  location.reload();
			  } 
			});
}
function informazioa(){ 
			swal({
			  title: 'INFO',
			  text:'Gure datu basean 30 perpaus daude euskaratzeko.\n Haietatik 15 euskaratzea eskatuko dizut.\nErdarazko bakoitzeko hiru proposamen agertuko zaizkizu.\n Zuzena aurkitzea egin klik haren gainean.',
			  confirmButtonColor: "#DD6B55",
			  confirmButtonText: "AURRERA",
			  closeOnConfirm: true,
			});
}

function aurrizkiak(){
	dados(handiena);
	ekin();
}

function ekin(handiena){
	hasteko(handiena);
	var botjarraitu = document.getElementById("jarraitu");
	botjarraitu.addEventListener("click", hasteko);
	document.getElementById("puntuak").innerHTML = "Zuzenak: "+puntua;
	document.getElementById("galderak").innerHTML = "Saioak: "+galdera;
	
	}

function dados(handiena){
	for (i=0;i < handiena-1;i++){
      temp = Math.round(Math.random() * handiena); //txikiena eta handienaren artean zenbaki bat ateratzen da
      biribilketa = parseInt((Math.floor(temp))+1); //biribildu egiten da hamarrekoak sahiesteko
      // zenbakia ez badago galderak[] -en gehitu (push), eta badago (continue;), jauzi hurrengo zenbakira, for-aren kontadoreari bat kenduta.
		if ((biribilketa >= txikiena) && (biribilketa <= handiena)) {                                         
			if(zenbakiak.indexOf(biribilketa)!=-1){
				i--; //balioa ez bada balekoa bat kentzen da 26 balio atera daitezen
				continue;
			} else {
					zenbakiak.push(biribilketa); //balekoa bada gehitu array-an zenbaki biribildua
					}
		}else{
		i--;//balioa ez bada balekoa bat kentzen da 26 balio atera daitezen
        continue;
		}
	}
}

function hasteko(){
	activa();
	document.getElementById("arraposta").innerHTML="";
	var itaunak = ekarriGaldera();

    document.getElementById('itauna').innerHTML = itaunak.galderak[zenbakiak[hastekoZenbakia]].galdera; 
	
	hautua1 = itaunak.galderak[zenbakiak[hastekoZenbakia]].auke1;
	document.getElementById("aukera1").innerHTML = itaunak.galderak[zenbakiak[hastekoZenbakia]].auke1;
	hautua2 = itaunak.galderak[zenbakiak[hastekoZenbakia]].auke2;
	document.getElementById("aukera2").innerHTML = itaunak.galderak[zenbakiak[hastekoZenbakia]].auke2 ;
	hautua3 = itaunak.galderak[zenbakiak[hastekoZenbakia]].auke3;
	document.getElementById("aukera3").innerHTML = itaunak.galderak[zenbakiak[hastekoZenbakia]].auke3 ;
	
	auk1 = document.getElementById('aukera1');
	auk1.addEventListener("click", erantzun1);
	
	auk2 = document.getElementById('aukera2');
	auk2.addEventListener("click", erantzun2);
		
	auk3 = document.getElementById('aukera3');
	auk3.addEventListener("click", erantzun3);

	zuzena = itaunak.galderak[zenbakiak[hastekoZenbakia]].zuzena ;
	
	eran1 = itaunak.galderak[zenbakiak[hastekoZenbakia]].eranfb1 ;
	eran2 = itaunak.galderak[zenbakiak[hastekoZenbakia]].eranfb2 ;
	eran3 = itaunak.galderak[zenbakiak[hastekoZenbakia]].eranfb3 ;

	hastekoZenbakia++;
	
	if(puntua <= galdera*0.5){emaitza = "ESKAS, OSO ESKAS, GAZTE!";}
	if(puntua <= galdera*0.7 && puntua > galdera*0.5){emaitza = "JUSTU-JUSTU, GAZTE!";}
	if(puntua > galdera*0.7){emaitza = "BIKAIN, GAZTE!";}
	
	if(hastekoZenbakia == 16){
		swal({
			  title: emaitza,
			  text: 'Zuzenak:  '+puntua+' Erantzundakoak:  ' +galdera,
			  confirmButtonColor: "#DD6B55",
			  confirmButtonText: "AURRERA",
			  closeOnConfirm: false,
			},
			function(isConfirm){
			  if (isConfirm) {
				  location.reload();
			  } 
			});
	}
}
function garbituErantzuna(){
	var erantzuna = document.getElementById("arraposta");
	erantzuna.innerHTML = ""; 
}
function erantzun1(){
	document.getElementById("arraposta").innerHTML = eran1;
	if(zuzena == "auke1"){	batu();	document.getElementById("aukera1").style.background = "green";
							document.getElementById("aukera1").style.border = "2px solid #610B0B";}
	else{document.getElementById("aukera1").style.background = "red";
		document.getElementById("aukera1").style.border = "2px solid #610B0B";}
	batugal();
	desactiva();	
}
function erantzun2(){
	document.getElementById("arraposta").innerHTML = eran2;
	if(zuzena == "auke2"){ batu();	document.getElementById("aukera2").style.background = "green";
									document.getElementById("aukera2").style.border = "2px solid #610B0B";}	
	else{document.getElementById("aukera2").style.background = "red";
		document.getElementById("aukera2").style.border = "2px solid #610B0B";}
	batugal();
	desactiva();	
}
function erantzun3(){
	document.getElementById("arraposta").innerHTML = eran3;
	if(zuzena == "auke3"){ 	batu();	document.getElementById("aukera3").style.background = "green";
							document.getElementById("aukera3").style.border = "2px solid #610B0B";}
	else{document.getElementById("aukera3").style.background = "red";
		document.getElementById("aukera3").style.border = "2px solid #610B0B";}		
	batugal();
	desactiva();
}
function batu(){
	puntua += 1;
	document.getElementById("puntuak").innerHTML = "Zuzenak: "+puntua;
}
function batugal(){
	galdera += 1;
	document.getElementById("galderak").innerHTML = "Saioak: "+galdera;
}

function activa(){
	document.getElementById("aukera1").style.background = "#1779ba";
	document.getElementById("aukera1").style.border = "2px solid #ccc";
	document.getElementById("aukera2").style.background = "#1779ba";
	document.getElementById("aukera2").style.border = "2px solid #ccc";
	document.getElementById("aukera3").style.background = "#1779ba";
	document.getElementById("aukera3").style.border = "2px solid #ccc";
	var botjarraitu = document.getElementById("jarraitu");
	botjarraitu.style.display = 'none';
}
function desactiva(){

	auk1.removeEventListener("click", erantzun1);
	auk2.removeEventListener("click", erantzun2);
	auk3.removeEventListener("click", erantzun3);
	var botjarraitu = document.getElementById("jarraitu");
	botjarraitu.style.display = 'block';
}

function aurrizki_zerrenda(){
	var handiena = 30;
	erakutsiZerrenda(handiena);
}

function erakutsiZerrenda(handiena){
	var itaunak = ekarriGaldera();
	var mezua = "";
	for (x = 0; x < handiena-1; x++) {
		mezua +=  "P.: " +itaunak.galderak[x].galdera+"\nR.: " +itaunak.galderak[x].zuzena+"\n---\n";
	};
	document.getElementById("galderantzunak").innerHTML = mezua; 	
}
