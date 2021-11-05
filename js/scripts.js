/*
 Este software foi criado pelo o programador abaixo!!!!

     *Nome→ Fillipe Pascoall
     *Nacionalidade→ Angolana
     *Email→ pascoalfilipe5@gmail.com
     *Morada→ Viana/ Luanda/ Angola
     *Telefone→ +244 941556751
     *Telegram→ @Fillipe5 / t.me/Fillipe5
     *Facebook → Fillipe Pascoall
     *Whatsapp→ +244 941556751 
     *Instagram → @fillipe_pascoall
     *CodePen → fillipe_pascoall

*/

function inser(x) {
		tela.value +=x;
}
function apagar() {
		tela.value=tela.value.substring(0,tela.value.length -1);
}
function reset() {
		tela.value="";
}
function igual() {
		if(tela.value=="") {
				tela.value="";
				return;
		}
		tela.value=eval(tela.value);
}


/*          ****Aqui terminou****        */
