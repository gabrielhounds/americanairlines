$(document).ready(function(){
	init();
});

function init() {
	console.log('init');

	var panorama, viewer, infospot1, infospot2, infospot3;

	var main = document.getElementById('main');

	panorama = new PANOLENS.ImagePanorama( 'aa_pano_50.jpg' );


	infospot1 = new PANOLENS.Infospot( 1000, 'hotspot1.png');
	infospot1.position.set( 3368.82, -3505.08, 1154.51 );

	infospot2 = new PANOLENS.Infospot( 1000, 'hotspot2.png');
	infospot2.position.set( 4672.24, -946.25, -1491.54 );


	infospot3 = new PANOLENS.Infospot( 1000, 'hotspot3.png' );
	infospot3.position.set( 2483.25, -2204.09, -3728.25 );


	//infospot.addHoverText( 'Hello Panolens', 30 );

	panorama.add( infospot1 );
	panorama.add( infospot2 );
	panorama.add( infospot3 );

	//infospot1.addEventListener( 'click', function(){ alert('CLICK'); });
	//infospot1.addEventListener( 'click', function(){ alert('CLICK'); });

	$(infospot1).click(function(){
		alert('CLICK 1');
	});

	$(infospot2).click(function(){
		alert('CLICK 2');
	});

	$(infospot3).click(function(){
		alert('CLICK 3');
	});


	viewer = new PANOLENS.Viewer({
		container: main,
		cameraFov: 100,
		autoHideInfospot: false,
		output: 'console'
	});

	viewer.add( panorama );
	viewer.getControl().rotateLeft(-90 * Math.PI / 180);
    viewer.getControl().update();





}