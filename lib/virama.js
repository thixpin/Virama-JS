"use strict"

class MyVirama {

  constructor(testerID) {

		this.testerID = testerID;
		
	}
	
	addTestDivToBody(){

		const newDiv = document.createElement('div');
		newDiv.style.cssText = 'position:absolute;width:100%;opacity:0.3;z-index:-10; top: -50px; height: 20px; display: none';
		newDiv.id = this.testerID;
		const spanCss    = 'font-family: initial; margin: 0; padding: 0; font-size: 20px; line-height: 20px; height: 20px;';
		const testSpans  = '<span style="'+spanCss+'" id="one_ka">&#x1000;</span>\n' + 
							'<span style="'+spanCss+'" id="two_ka">&#x1000;&#x1039;&#x1000;</span>\n';
		newDiv.innerHTML = testSpans;
		document.body.appendChild(newDiv);

		return true;
	
	}
	

}

const Virama = new MyVirama('fontTester');


module.exports = Virama;

