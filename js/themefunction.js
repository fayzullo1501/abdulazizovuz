jQuery(document).on('ready', function() {
	"use strict";
	/* -------------------------------------
			NAVIGATION TOGGLE
	-------------------------------------- */
	jQuery('.bt-btntogglemenu').on('click', function(event) {
		event.preventDefault();
		jQuery('#bt-nav').slideToggle('slow');
		jQuery('body.bt-homeone').toggleClass('bt-pagescrolldiable');
		jQuery('body.bt-hometwo').toggleClass('bt-pagescrolldiable');
	});
	/* -------------------------------------
			SHARE ICONS TOGGLE
	-------------------------------------- */
	var _bt_btnshare = jQuery('.bt-btnshare');
	_bt_btnshare.on('click', function(event) {
		event.preventDefault();
		var _bt_shapreicons = jQuery('.bt-shapreicons');
		jQuery(this).parent('li').toggleClass('bt-showicon');
	});
	/* -------------------------------------
			HOME BANNER SLIDER				
	-------------------------------------- */
	var _bt_homeslidervone = jQuery('#bt-homeslidervone');
	_bt_homeslidervone.pogoSlider({
		pauseOnHover: false,
		autoplay: true,
		generateNav: false,
		generateButtons: true,
		displayProgess: false,
		autoplayTimeout: 6000,
		responsive: true,
		onSlideStart: (function(){
			var _slideslength = jQuery('.pogoSlider-slide').length;
			var _currentSlide = this.currentSlideIndex + 1;
			jQuery('#bt-totalslides').text(_slideslength);
			jQuery('#bt-currentslides').text(_currentSlide);
		}),
	}).data('plugin_pogoSlider');
	/* -------------------------------------
			ALBUMBS GALLERY
	-------------------------------------- */
	var _tg_categoryAlbumbs = jQuery('[id="bt-weddingalbum"],[id="bt-kidsalbum"], [id="bt-twinssisteralbum"], [id="bt-halloweenalbum"], [id="bt-stationphotographyalbum"]');
	if(_tg_categoryAlbumbs.hasClass('bt-album')){
		_tg_categoryAlbumbs.jGallery({
			textColor: '#FFF',
			mode: 'full-screen',
			canChangeMode: false,
			browserHistory: false,
			backgroundColor: '#000',
		});
	}
	jQuery('.bt-callalbum').on('click', function(event) {
		event.preventDefault();
		var clickedValue = jQuery(this).attr('data-number');
		console.log(clickedValue);
		jQuery('.jgallery').each(function(){
			jQuery(this).hide();
			if(jQuery(this).attr('data-jgallery-id') == clickedValue) {
				jQuery(this).show();
			}
		});
		jQuery('body.bt-homevtwo').toggleClass('bt-showalbum');
	});
	jQuery('#bt-btnclosealbum').on('click', function(event){
		jQuery('body.bt-homevtwo').toggleClass('bt-showalbum');
	});
	/* -------------------------------------
			BANNER FADEOUT
	-------------------------------------- */
	function bannerFadeout(){
		jQuery('body').on('click', function(){
			jQuery('.bt-homevtwo').removeClass('bt-fixed');
			jQuery('.bt-backgroundvideo').fadeOut('slow');
			jQuery('.bt-backgroundimg').fadeOut('slow');
		});
		jQuery(window).on('scroll', function(){
			jQuery('.bt-homevtwo').removeClass('bt-fixed');
			jQuery('.bt-backgroundvideo').fadeOut('slow');
			jQuery('.bt-backgroundimg').fadeOut('slow');
		});
	}
	bannerFadeout();
	/* -------------------------------------
			PRETTY PHOTO GALLERY
	-------------------------------------- */
	jQuery("a[data-rel]").each(function () {
		jQuery(this).attr("rel", jQuery(this).data("rel"));
	});
	jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({
		animation_speed: 'normal',
		theme: 'dark_square',
		slideshow: 3000,
		autoplay_slideshow: false,
		social_tools: false,
		//overlay_gallery: false
	});
	/*--------------------------------------
			PADDING EQUEL TO WINDOW HEIGHT
	--------------------------------------*/
	function paddingequlheight(){
		var $_height = jQuery(window).height();
		jQuery('body.bt-homevthree .bt-wrapper').css({'padding-top': $_height + 'px'});
	}
	paddingequlheight();
	/* -------------------------------------
			HOME BANNER SLIDER				
	-------------------------------------- */
	var mySlider = jQuery('#bt-homeslidervthree');
	mySlider.pogoSlider({
		generateButtons: true,
		autoplayTimeout: 6000,
		displayProgess: false,
		pauseOnHover: false,
		generateNav: false,
		responsive: true,
		autoplay: false,
		onSlideStart: function(current){ 
			var currentSlide = jQuery(this)[0].currentSlideIndex + 1; 
			jQuery('.bt-albumpost').each(function(){
				jQuery(this).removeClass('active').fadeOut();
				var dataSlide = jQuery(this).data('slide');
				if(currentSlide == dataSlide){
					jQuery(this).addClass('active').delay(300).fadeIn();
				}
			});
		}
	}).data('plugin_pogoSlider');
	/*--------------------------------------
			HOME PAGE FOUR SLIDER
	--------------------------------------*/
	var _bt_sliderfour = jQuery('#bt-sliderfour');
	_bt_sliderfour.slick({
		infinite: true,
		slidesToShow: 1,
		dots: true,
		arrows: false,
		dotsClass: 'bt-slidernav',
	});
	/*--------------------------------------
			HOME PAGE FIVE SLIDER
	--------------------------------------*/
	function slickSlider(){
		var _status = jQuery('.tg-bannerfullwidthslidecount');
		var _slider = jQuery('#tg-postfullslider');
		_slider.on('init reInit afterChange', function (event, slick, currentSlide) {
			var i = (currentSlide ? currentSlide : 0) + 1;
			_status.html("<span>" + i + "</span><span>" + slick.slideCount + "</span>");
		});
		_slider.slick({
			fade: true,
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			asNavFor: '#tg-postthumbnail',
		});
		jQuery('#tg-postthumbnail').slick({
			dots: false,
			arrows: false,
			vertical: true,
			infinite: true,
			slidesToShow: 9,
			centerMode: true,
			slidesToScroll: 1,
			focusOnSelect: true,
			asNavFor: _slider,
		});
		jQuery('#bt-togglethumbnails').on('click', function(){
			jQuery('body.bt-homevfive').toggleClass('bt-hidethumbnail');
		});
	}
	slickSlider();
	/* ---------------------------------------
			PORTFOLIO FILTERABLE
	-------------------------------------- */
	var _elements = jQuery('[id="bt-masonrygallery"]');
	if(_elements.hasClass('bt-masonrygallery')){
		function doIsotopeFilter() {
			var $container = jQuery('.bt-masonrygallery');
				var $optionSets = jQuery('#bt-navfilterbale');
				var $optionLinks = $optionSets.find('a');
			if (jQuery().isotope) {
				var isotopeFilter = '';
				$optionLinks.each(function () {
					var selector = jQuery(this).attr('data-filter');
					var link = window.location.href;
					var firstIndex = link.indexOf('filter=');
					if (firstIndex > 0) {
						var id = link.substring(firstIndex + 7, link.length);
						if ('.' + id == selector) {
							isotopeFilter = '.' + id;
						}
					}
				});
				$container.isotope({
					filter: isotopeFilter
				});
				$optionLinks.each(function () {
					var $this = jQuery(this);
					var selector = $this.attr('data-filter');
					if (selector == isotopeFilter) {
						if (!$this.hasClass('bt-active')) {
							var $optionSet = $this.parents('#bt-navfilterbale');
							$optionSet.find('.bt-active').removeClass('bt-active');
							$this.addClass('bt-active');
						}
					}
				});
				$optionLinks.on('click', function () {
					var $this = jQuery(this);
					var selector = $this.attr('data-filter');
					$container.isotope({itemSelector: '.bt-masonrygallerygrid', filter: selector});
					if (!$this.hasClass('bt-active')) {
						var $optionSet = $this.parents('#bt-navfilterbale');
						$optionSet.find('.bt-active').removeClass('bt-active');
						$this.addClass('bt-active');
					}
					return false;
				});
			}
		}
		var isotopeTimer = window.setTimeout(function () {
			window.clearTimeout(isotopeTimer);
			doIsotopeFilter();
		}, 1000);
	}
	/* --------------------------------------
			LOAD MORE GALLERY
	-------------------------------------- */
	function loadMoregallery() {
		jQuery(".bt-loaditem").slice(0, 9).show();
		jQuery("#bt-btnloadmore").on('click', function (e) {
			e.preventDefault();
			jQuery(".bt-loaditem:hidden").slice(0, 2).slideDown();
			if (jQuery(".bt-loaditem:hidden").length == 0) {
				jQuery("#bt-btnloadmore").fadeOut('slow');
			}
			jQuery('html,body').animate({
				scrollTop: jQuery(this).offset().top -30
			}, 1500);
		});
	}
	loadMoregallery();
	function indexfourloadMoregallery() {
		jQuery(".bt-indexfourloaditem").slice(0, 6).show();
		jQuery("#bt-indexfourbtnloadmore").on('click', function (e) {
			e.preventDefault();
			jQuery(".bt-indexfourloaditem:hidden").slice(0, 2).slideDown();
			if (jQuery(".bt-indexfourloaditem:hidden").length == 0) {
				jQuery("#bt-indexfourbtnloadmore").fadeOut('slow');
			}
			jQuery('html,body').animate({
				scrollTop: jQuery(this).offset().top -30
			}, 1500);
		});
	}
	indexfourloadMoregallery();
	function indexsixloadMoregallery() {
		jQuery(".bt-indexsixloaditem").slice(0, 11).show();
		jQuery("#bt-indexsixbtnloadmore").on('click', function (e) {
			e.preventDefault();
			jQuery(".bt-indexsixloaditem:hidden").slice(0, 2).slideDown();
			if (jQuery(".bt-indexsixloaditem:hidden").length == 0) {
				jQuery("#bt-indexsixbtnloadmore").fadeOut('slow');
			}
			jQuery('html,body').animate({
				scrollTop: jQuery(this).offset().top -30
			}, 1500);
		});
	}
	indexsixloadMoregallery();
	function galleryloadMore() {
		jQuery(".bt-threecolumn").slice(0, 9).show();
		jQuery("#bt-threecolumnbtnloadmore").on('click', function (e) {
			e.preventDefault();
			jQuery(".bt-threecolumn:hidden").slice(0, 3).slideDown();
			if (jQuery(".bt-threecolumn:hidden").length == 0) {
				jQuery("#bt-threecolumnbtnloadmore").fadeOut('slow');
			}
			jQuery('html,body').animate({
				scrollTop: jQuery(this).offset().top -30
			}, 1500);
		});
	}
	galleryloadMore();
	function threecolumnvtwo() {
		jQuery(".bt-threecolumnvtwo").slice(0, 15).show();
		jQuery("#bt-threecolumnvtwobtnloadmore").on('click', function (e) {
			e.preventDefault();
			jQuery(".bt-threecolumnvtwo:hidden").slice(0, 3).slideDown();
			if (jQuery(".bt-threecolumnvtwo:hidden").length == 0) {
				jQuery("#bt-threecolumnvtwobtnloadmore").fadeOut('slow');
			}
			jQuery('html,body').animate({
				scrollTop: jQuery(this).offset().top -30
			}, 1500);
		});
	}
	threecolumnvtwo();
	function photogalleryboxed() {
		jQuery(".bt-threecolumnvthree").slice(0, 9).show();
		jQuery("#bt-threecolumnvthreebtnloadmore").on('click', function (e) {
			e.preventDefault();
			jQuery(".bt-threecolumnvthree:hidden").slice(0, 3).slideDown();
			if (jQuery(".bt-threecolumnvthree:hidden").length == 0) {
				jQuery("#bt-threecolumnvthreebtnloadmore").fadeOut('slow');
			}
			jQuery('html,body').animate({
				scrollTop: jQuery(this).offset().top -30
			}, 1500);
		});
	}
	photogalleryboxed();
	/* ---------------------------------------
			HOME EIGHT SLIDER
	-------------------------------------- */
	var homeEightSlider = jQuery('#bt-homesliderveight');
	homeEightSlider.slick({
		dots: false,
		arrows: true,
		slidesToShow: 3,
		infinite: false,
		slidesToScroll: 1,
		prevArrow: '<span class="tg-btnprev"><i class="fa fa-angle-left"></i></span>',
		nextArrow: '<span class="tg-btnnext"><i class="fa fa-angle-right"></i></span>',
		responsive: [{
			breakpoint: 1080,
			settings: {slidesToShow: 2}
		},
		{
			breakpoint: 600,
			settings: {slidesToShow: 2}
		},
		{
			breakpoint: 480,
			settings: {slidesToShow: 1}
		}]
	});
	/* -------------------------------------
			COUNTER
	-------------------------------------- */
	var _bt_counters = jQuery('.bt-counters');
	_bt_counters.appear(function () {
		var _bt_timer = jQuery('.bt-count h3');
		_bt_timer.countTo();
	});
	/* -------------------------------------
			PROGRESS BAR
	-------------------------------------- */
	var _bt_memberskills = jQuery('#bt-memberskills');
	_bt_memberskills.appear(function () {
		var _bt_memberskillholder = jQuery('.bt-memberskillholder');
		_bt_memberskillholder.each(function () {
			jQuery(this).find('.bt-memberskillbar').animate({
				width: jQuery(this).attr('data-percent')
			}, 2500);
		});
	});
	/*--------------------------------------
			HOME PAGE FOUR SLIDER
	--------------------------------------*/
	var _bt_portfolioslider = jQuery('#bt-portfolioslider');
	_bt_portfolioslider.slick({
		infinite: true,
		slidesToShow: 1,
		arrows: true,
		prevArrow: '<span class="tg-btnprev"><i class="fa fa-angle-left"></i></span>',
		nextArrow: '<span class="tg-btnnext"><i class="fa fa-angle-right"></i></span>',
	});
	/* -------------------------------------
			TOGGLE CONTACT US
	-------------------------------------- */
	jQuery("#bt-btnplus").on('click', function() {
		jQuery("#bt-contactinfo").toggle("slow");
	});
	/* -------------------------------------
			TOGGLE CONTACT US
	-------------------------------------- */
	var _bt_btnheadertoggle = jQuery("#bt-btnheadertoggle");
	_bt_btnheadertoggle.on('click', function() {
		jQuery("body").toggleClass('bt-showheader');
	});
	/* -------------------------------------
			Google Map
	-------------------------------------- */
	var gmapStyles = [
		{"featureType": "poi", "elementType": "labels", "stylers": [{ "visibility": "off" }]},
		{"featureType": "poi", "elementType": "geometry.fill", "stylers": [{ "visibility": "off" }]},
		{"featureType": "transit", "elementType": "labels.text", "stylers": [{ "visibility": "off" }]},
		{"featureType": "road", "elementType": "labels.text", "stylers": [{ "visibility": "on" }]},
		{"featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#7b7b7b" }]},
		{"featureType": "road", "elementType": "labels.text", "stylers": [{ "color": "#7b7b7b" }]},
		{"featureType": "road", "elementType": "labels.text", "stylers": [{ "color": "#7b7b7b" }]},
		{"featureType": "road", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "off" }]},
		{"featureType": "road.local", "elementType": "geometry.fill", "stylers": [{ "color": "#7b7b7b" }]},
		{"featureType": "road.highway", "elementType": "labels", "stylers": [{ "visibility": "off" }]},
		{"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }]},
		{"featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{ "color": "#2b2b2b" }]},
		{"featureType": "road.arterial", "elementType": "geometry.stroke", "stylers": [{ "color": "#2b2b2b" }]},
		{"featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{ "color": "#2b2b2b" }]},
		{"featureType": "water", "elementType": "geometry", "stylers": [{ "visibility": "on" }]},
		{"featureType": "water", "elementType": "labels.text", "stylers": [{ "color": "#2b2b2b" }]},
		{"featureType": "water", "elementType": "labels.text.stroke", "stylers": [{ "color": "#2b2b2b" }]},
		{"featureType": "water", "elementType": "labels", "stylers": [{"visibility": "on"},{"color": "#2b2b2b"}]},
		{"featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#333" }]},
		{"featureType": "administrative", "elementType": "labels", "stylers": [{ "color": "#333" }]},
		{"featureType": "administrative.locality", "elementType": "labels.text.stroke", "stylers": [{ "color": "#333" }]},
		{"featureType": "transit.line", "stylers": [ { "visibility": "off" }]},
		{"featureType": "landscape.natural", "stylers": [ { "visibility": "off" }]},
		{"featureType": "landscape.natural", "stylers": [ { "visibility": "on" },{ "color": "#2b2b2b" }]},
		{"featureType": "administrative.province", "elementType": "geometry", "stylers": [{ "color": "#2b2b2b" }]},
		{"elementType": "geometry.fill", "stylers": [ { "color": "#2b2b2b" }]},
		{"featureType": "poi", "elementType": "geometry", "stylers": [{ "visibility": "off" }]},
		{"featureType": "administrative.land_parcel", "elementType": "labels.text.fill", "stylers": [{ "visibility": "off" }]},
		{"featureType": "landscape", "elementType": "labels.text", "stylers": [{ "visibility": "off" }]},
		{"featureType": "administrative", "elementType": "labels", "stylers": [{ "visibility": "off" }]},
	]
	jQuery("#bt-locationmap").gmap3({
		marker: {
			address: "447 Elizabeth St, Melbourne, Victoria, Australia",
			options: {
				title: "TASVER HTML5 CSS3 Theme",
				icon: "images/mapmarker.png",
			}
		},
		map: {
			options: {
				zoom: 16,
				styles: gmapStyles,
				scaleControl: true,
				scrollwheel: false,
				mapTypeControl: false,
				disableDefaultUI: true,
				navigationControl: false,
				streetViewControl: false,
				disableDoubleClickZoom: true,
			}
		}
	});
});
/* -------------------------------------
		THEME PRELOADER
-------------------------------------- */
jQuery(window).on('load', function () {
	var $preloader = jQuery('#bt-preloader'),
	$spinner = $preloader.find('.bt-preloadericon');
	$spinner.fadeOut();
	$preloader.delay(350).fadeOut('slow');
});