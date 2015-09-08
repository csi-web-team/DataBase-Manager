(function () {
	var flag = true;
	//$("#managerType_0").addClass("sidebar-Active");	
    onScroll();
  	$('.scroll').click(function(){
	    $('html,body').animate({ 
	    	scrollTop: $(this.hash).offset().top - 60
	    }, 500, function(){
            console.log($(window).scrollTop())
        });
	});
	document.getElementsByClassName('add-notes-heading')[0].addEventListener("mousedown",function(){
		if($(".add-notes-body").css('display') == 'none'){	
			$(".add-notes-body").show();
			$(".add-notes-footer").show();
		}else{
			$(".add-notes-body").hide();
			$(".add-notes-footer").hide();
		}
	},true);

    jQuery.fn.extend({
        ok: function(){
            return $(this).each(function(){
                console.log("hi this is console for jquery extend")
            });
        }
    });
    //$("#managerType_0").ok();
}());
/*Validation part*/

$(function(){
	var ValidationSec;
	ValidationSec = (function(){
		function ValidationSec(){} // empty scope function

		ValidationSec.prototype.badgeType = function(){
			var oData = {
				memberId: $("#memberId_badgeType").val(),
				piececodeId: $("#piececodeId_badgeType").val(),
				memberstatusId: $("#memberstatusId_badgeType").val(),
				prioritycodeId: $("#prioritycodeId_badgeType").val(),
				ordId: $("#ordId_badgeType").val(),
				badgeId: $("#badgeId_badgeType").val(),
				regcodeId:$("#regcodeId_badgeType").val(),
				dateId: $("#dateId_badgeType").val()
			};
			for(var i in oData){
				if(oData[i] === ''){
					$("#"+i+"_badgeType").css("border","1px solid red");
					//return;
				}else{
					$("#"+i+"_badgeType").css("border","1px solid #ccc");
				}
			}
			return oData;
		};

		ValidationSec.prototype.badgeInfo = function(){
			var oData = {
				firstname: $("#firstname_badgeInfo").val(),
				company: $("#company_badgeInfo").val(),
				lastname: $("#lastname_badgeInfo").val(),
				address: $("#address_badgeInfo").val(),
				title: $("#title_badgeInfo").val(),
				city: $("#city_badgeInfo").val(),
				email:$("#email_badgeInfo").val(),
				state: $("#state_badgeInfo").val(),
				altEmail_1: $("#altEmail_1_badgeInfo").val(),
				zipcode: $("#zipcode_badgeInfo").val()
			};
			for(var i in oData){
				if(oData[i] === ''){
					$("#"+i+"_badgeInfo").css("border","1px solid red");
					//return;
				}else{
					$("#"+i+"_badgeInfo").css("border","1px solid #ccc");
				}
			}
			return oData;
		};

		ValidationSec.prototype.emailValidator = function($event,email){
          	var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
          	var emailTest = re.test(email)
          	return emailTest;
      	};



		ValidationSec.prototype.vali = function(){
			return(function(ins){
				return $(".save-btn").click(function (e) {
                	/*var badgeTypeData = ins.badgeType();
                	var badgeInfoData = ins.badgeInfo();
                	console.log(badgeTypeData, badgeInfoData)
                	var emailValidatorResult = ins.emailValidator(e, badgeInfoData.email);
                	if(!emailValidatorResult)
                		alert("please Enter valied email address");*/
                });
			})(this);
		};
		return ValidationSec;
	})();
	return (new ValidationSec).vali();
});
/*Customize collapsible sidebar functionality*/
$(function () {
        var SideBAR;
        SideBAR = (function () {
            function SideBAR() {}

            SideBAR.prototype.expandMyMenu = function () {
                return $("nav.sidebar").removeClass("sidebar-menu-collapsed").addClass("sidebar-menu-expanded");
            };

            SideBAR.prototype.collapseMyMenu = function () {
                return $("nav.sidebar").removeClass("sidebar-menu-expanded").addClass("sidebar-menu-collapsed");
            };

            SideBAR.prototype.showMenuTexts = function () {
                return $("nav.sidebar ul a span.expanded-element").show();
            };

            SideBAR.prototype.hideMenuTexts = function () {
                return $("nav.sidebar ul a span.expanded-element").hide();
            };

            SideBAR.prototype.showActiveSubMenu = function () {
                $("li.active ul.level2").show();
                return $("li.active a.expandable").css({
                    width: "100%"
                });
            };

            SideBAR.prototype.hideActiveSubMenu = function () {
                return $("li.active ul.level2").hide();
            };

            SideBAR.prototype.adjustPaddingOnExpand = function () {
                $("ul.level1 li a.expandable").css({
                    padding: "1px 4px 4px 0px"
                });
                return $("ul.level1 li.active a.expandable").css({
                    padding: "1px 4px 4px 4px"
                });
            };

            SideBAR.prototype.resetOriginalPaddingOnCollapse = function () {
                $("ul.nbs-level1 li a.expandable").css({
                    padding: "4px 4px 4px 0px"
                });
                return $("ul.level1 li.active a.expandable").css({
                    padding: "4px"
                });
            };

            SideBAR.prototype.ignite = function () {
                return (function (instance) {
                    return $(".navbar-brand").click(function (e) {
                        if ($("nav.sidebar").hasClass("sidebar-menu-expanded")) {
                            instance.resetOriginalPaddingOnCollapse();
                            instance.collapseMyMenu();
                            instance.hideMenuTexts();
                            instance.hideActiveSubMenu();
                            
                            $(".main_icon").css({
                               color: "#FFF"
                           });
                            $('.brandName').css({
                                display :"none"
                            });
                            $('.row-offcanvas').toggleClass('active');
                        } else if ($("nav.sidebar").hasClass("sidebar-menu-collapsed")) {
                            instance.adjustPaddingOnExpand();
                            instance.expandMyMenu();
                            instance.showMenuTexts();
                            instance.showActiveSubMenu();
                            $(".main_icon").css({
                                color: "#000"
                            });
                            $('.brandName').attr({
                                style :""
                            });

                            $('.row-offcanvas').toggleClass('active');
                        }
                        return false;
                    });
                })(this);
            };

            return SideBAR;

        })();
        return (new SideBAR).ignite();
    });
(function($){
    $(document).on("scroll", onScroll);
   $('.managerType > a[href^="#"]').on('click', function (e) {
       e.preventDefault();
       $(document).off("scroll");
       
       $('a').each(function () {
           $(this).removeClass('sidebar-Active');
       })
       $(this).addClass('sidebar-Active');
     
       var target = this.hash,
           menu = target;
       $target = $(target);
       $('html, body').stop().animate({
           'scrollTop': $target.offset().top
       }, 500, 'swing', function () {
           window.location.hash = target;
           $(document).on("scroll", onScroll);
       });
   });
})(jQuery);

function onScroll(event){
   var scrollPos = $(document).scrollTop();
   $('.sidebar-nav a').each(function () {
       var currLink = $(this);
       var refElement = $(currLink.attr("href"));
       if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
           $('.sidebar-nav li a').removeClass("sidebar-Active");
           $(".managerType").removeClass("sidebar-Active");
            currLink.addClass("sidebar-Active");
       }
       else{
           currLink.removeClass("sidebar-Active");
       }
   });
}

// header bar color - #00567D
// highlight - # 007297
// hover sidebar -#6CC04A
//border - #ABABAB
// hover color for sidebar - #F2F2F2