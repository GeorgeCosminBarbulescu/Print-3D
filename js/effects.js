$(document).ready(
	function()
	{
		var topMenu = $("#top-menu > nav > ul > li");
		
		topMenu.each(
			function()
			{
				var thePanel = $(this).find('div');
				
				if( $(thePanel).size() > 0 )
				{
					//$(this).find(' > :first-child').addClass('have-child');
					//$('<span class="have-child" />').appendTo(this);
					$(this).prepend('<span class="have-child"></span>');
				}
				
				$(this).hover(
					function()
					{
						$(thePanel).show();	
					},
					function()
					{
						$(thePanel).hide();	
					}
				);	
			}
		);
	}
);