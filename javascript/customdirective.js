

var jQueryMApp=angular.module('customdirective',[]).

directive('blog',function(){

	return {

		restrict:'E',
		replace:true,
		templateUrl:'[blog] (blog.html)',
		scope:{}

	};
}).

directive('videos',function(){

	return {

		restrict:'E',
		replace:true,
		templateUrl:'videos.html',
		scope:{}

	};
}).

directive('photos',function(){

	return {

		restrict:'E',
		replace:true,
		templateUrl:'photos.html',
		scope:{}

	};
}).

directive('city',function(){

	return {

		restrict:'E',
		replace:true,
		templateUrl:'city.html',
		scope:{}

	};
}).

directive('madagascar',function(){

	return {

		restrict:'E',
		replace:true,
		templateUrl:'madagascar.html',
		scope:{}

	};
}).

directive('animals',function(){

	return {

		restrict:'E',
		replace:true,
		templateUrl:'animals.html',
		scope:{}

	};
}).

directive('nature',function(){

	return {

		restrict:'E',
		replace:true,
		templateUrl:'nature.html',
		scope:{}

	};
}).

directive('pageheader',function(){

	return {

		restrict:'E',
		replace:true,
		templateUrl:'overall/pageheader.html',
		scope:true

	};
}).


directive('pagefooter',function(){

	return {

		restrict:'E',
		replace:true,
		templateUrl:'overall/pagefooter.html',
		scope:{}

	};
}).

directive('photosmain',function(){

	return {

		restrict:'E',
		replace:true,
		templateUrl:'photosbody/photosmain.html',
		scope:{}

	};
});

