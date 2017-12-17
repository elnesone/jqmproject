
// $(document).on("pagecreate",function(){

// 	var idIncr=1;

// 	$("#add").click(function(){

// 		idIncr++;

// 		var content="<div id='set"+idIncr+"' data-role='collapsible' data-collapsed='true'>"
// 					+"<h3>Section "+idIncr+" </h3>"
// 					+"<p>I'm the collapsible content</p>"
// 					+"</div>";

// 		$("#set").append(content).collapsibleset("refresh");

// 	});

// 	$("#delete").click(function(){

// 		idIncr--;

// 		$("#set").children(":last").remove();
// 	});

// 	$("#expand").click(function(){		

// 		$("#set").children(":last").collapsible("expand");
// 	});

// 	$("#collapse").click(function(){		

// 		$("#set").children(":last").collapsible("collapse");
// 	});



// });



(function(){

    

    $( document ).on( "pagecreate", "#home", function() {
        $( document ).on( "swipeleft swiperight", "#home", function( e ) {
            // We check if there is no open panel on the page because otherwise
            // a swipe to close the left panel would also open the right panel (and v.v.).
            // We do this by checking the data that the framework stores on the page element (panel: open).
            if ( $( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {//panel is closed
                if ( e.type === "swipeleft" ) {
                    $( "#homepanel" ).panel( "open" );
                } 
            }else{//panel is open
            	if ( e.type === "swiperight" ) {
                    $( "#homepanel" ).panel( "close" );
                }
            }
        });



    });


    $(document).on('swipeleft swiperight', function (event) {
        
        if(event.type == 'swiperight') {
            var prevpage = '#' + $.mobile.activePage.prev('div[data-role="page"]')[0].id;
                if(prevpage=='#home'|| prevpage == '#blog' || prevpage=='#videos'){
                    $.mobile.changePage(prevpage, {
                    transition: 'flip',
                    reverse: true
                });
            }    
        }

        //we want to open -videos- and -photos-, not blog because of panel
        if(event.type == 'swipeleft') {
            var nextpage = '#' + $.mobile.activePage.next('div[data-role="page"]')[0].id;
                if( nextpage === '#videos' || nextpage ==='#photos'){
                    $.mobile.changePage(nextpage, {
                    transition: 'turn',
                    reverse: false
                });
            }
        }  

    });
    
    $(document).on( "pagecontainerchange", function() {
       
        var current = $( ".ui-page-active" ).prop("id");   
        // Remove active class from nav buttons
        $( "[data-role='navbar'] a.ui-btn-active" ).removeClass( "ui-btn-active" );
        // Add active class to current nav button
        $( "[data-role='navbar'] a" ).each(function() {
            var href = $( this ).prop("href");
            if ( href.indexOf(current, href.length - current.length) !== -1 ) {
                $( this ).addClass( "ui-btn-active" );
            }
        }); 



    });

    

    var app=angular.module('jQueryMApp',['customdirective']);

    app.controller('ListController',function(){

        this.items=[

            {title:'city',image:'../images/col1.jpg'},
            {title:'madagascar',image:'../images/col2.jpg'},
            {title:'animals',image:'../images/col3.jpg'},
            {title:'nature',image:'../images/col4.jpg'}
        
        ];


    })

    app.controller('TabController',function(){        

        this.tabs=[
            
            {title:'home',icon:'home'},
            {title:'blog',icon:'user'},
            {title:'videos',icon:'video'},
            {title:'photos',icon:'camera'}
            
        ];        

    })

})();










