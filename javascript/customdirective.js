

var jQueryMApp=angular.module('customdirective',[]).

directive('blog',function(){

	return {

		restrict:'E',
		replace:true,
		templateUrl:'https://rawgit.com/elnesone/jqmproject/master/pages/blog.html',
		scope:{}

	};
}).

directive('videos',function(){

	return {

		restrict:'E',
		replace:true,
		templateUrl:'https://rawgit.com/elnesone/jqmproject/master/pages/videos.html',
		scope:{}

	};
}).

directive('photos',function(){

	return {

		restrict:'E',
		replace:true,
		templateUrl:'https://rawgit.com/elnesone/jqmproject/master/pages/photos.html',
		scope:{}

	};
}).

directive('city',function(){

	return {

		restrict:'E',
		replace:true,
		templateUrl:'https://rawgit.com/elnesone/jqmproject/master/pages/city.html',
		scope:{}

	};
}).

directive('madagascar',function(){

	return {

		restrict:'E',
		replace:true,
		templateUrl:'https://rawgit.com/elnesone/jqmproject/master/pages/madagascar.html',
		scope:{}

	};
}).

directive('animals',function(){

	return {

		restrict:'E',
		replace:true,
		templateUrl:'https://rawgit.com/elnesone/jqmproject/master/pages/animals.html',
		scope:{}

	};
}).

directive('nature',function(){

	return {

		restrict:'E',
		replace:true,
		templateUrl:'https://rawgit.com/elnesone/jqmproject/master/pages/nature.html',
		scope:{}

	};
}).

directive('pageheader',function(){

	return {

		restrict:'E',
		replace:true,
		templateUrl:'https://rawgit.com/elnesone/jqmproject/master/pages/overall/pageheader.html',
		scope:true

	};
}).


directive('pagefooter',function(){

	return {

		restrict:'E',
		replace:true,
		templateUrl:'https://rawgit.com/elnesone/jqmproject/master/pages/overall/pagefooter.html',
		scope:{}

	};
}).

directive('photosmain',function(){

	return {

		restrict:'E',
		replace:true,
		templateUrl:'https://rawgit.com/elnesone/jqmproject/master/pages/photosbody/photosmain.html',
		scope:{}

	};
});

