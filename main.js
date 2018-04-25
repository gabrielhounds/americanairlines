$(document).ready(function(){
	init();
});

function init() {
	var t = TweenMax;

	console.log('init');

	var intro = $('#intro');
	var overlay1 = $('#overlay1');
	var overlay2 = $('#overlay2');
	var overlay3 = $('#overlay3');

	t.set('#main', {autoAlpha:0});
	t.set([intro, overlay1, overlay2, overlay3], {autoAlpha:0});

	var panorama, viewer, infospot1, infospot2, infospot3;
	var main = document.getElementById('pano');

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


	$(infospot1).click(function(){
		//alert('CLICK 1');
		t.set('#main', {autoAlpha:1});
		t.to(overlay1, 0.3, {autoAlpha:1, ease:Power2.easeOut});
	});

	$(infospot2).click(function(){
		//alert('CLICK 2');
		t.set('#main', {autoAlpha:1});
		t.to(overlay2, 0.3, {autoAlpha:1, ease:Power2.easeOut});
	});

	$(infospot3).click(function(){
		//alert('CLICK 3');
		t.set('#main', {autoAlpha:1});
		t.to(overlay3, 0.3, {autoAlpha:1, ease:Power2.easeOut});
	});

	$('.overlay .close').click( function(){
		t.set('#main', {autoAlpha:0});
		t.set('.overlay', {autoAlpha:0});
	});


	viewer = new PANOLENS.Viewer({
		container: main,
		cameraFov: 70,
		autoHideInfospot: false,
		controlBar: false,
		output: 'console'
	});

	viewer.add( panorama );
	//viewer.enableControl( PANOLENS.Controls.DEVICEORIENTATION )
	viewer.getControl().rotateLeft(-90 * Math.PI / 180);
    viewer.getControl().update();





}