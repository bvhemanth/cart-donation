var movies=[];

$(document).ready(function(){
           
	$('#search').on('click',function(){
                $('#search').prop("disabled",true);
		var movie_name=$('#mov_ip').val();
		get_data(movie_name);
	});
});

function get_data(movie_name)
{	
	movies=[];
	var dataString={'t':movie_name,'y':'','plot':'short','r':'json'}; 
	$.ajax({
		type:"get",
		url:"http://www.omdbapi.com/",
		data:dataString,
		success:function(data)
		{	
			if(!data.Error)
			{	
                $('#search').prop("disabled",false);               
				var movie_details=document.getElementById('library');
				$(movie_details).html('');
				movies.push(data);
				update_library();
			}
			if(data.Error)
			{
				alert(data.Error);
                $('#search').prop("disabled",false);
                return false;
			}		
		},
		error: function(xhr, status, error) {
		  var err = eval("(" + xhr.responseText + ")");
		  $('#search').prop("disabled",false);
		  alert(err.Message);
		}
	})
}

function update_library()
{	
        $('#search').css('disabled','false');    
	var movie_details=document.getElementById('library');
	var top_title=document.createElement('div');
	$(top_title).addClass('row results_title');
	var ip_val=$('#mov_ip').val();
	$(top_title).html('<b style="color:#398439;">Result/s for '+ip_val+"..........</b>");
	$(movie_details).append(top_title);
	for(var i=0;i<movies.length;i++)
	{
			var each_row=document.createElement('div');
			$(each_row).addClass('row');
			//$(each_row).css('border','2px solid #ddd');	
			$(each_row).css('padding','10px 10px 10px 10px');
				var mov_img_act=document.createElement('div');
				$(mov_img_act).addClass('col-md-4 col-sm-4 col-lg-4 col_l_r0');
					
					var movi_pic_row=document.createElement('div');
					$(movi_pic_row).addClass('');
					var img_row=document.createElement('div');
					$(img_row).addClass('');
					var img=document.createElement('img');
					if(movies[i].Poster!='N/A')
					{		
						$(img).attr('src',movies[i].Poster);
					}
					if(movies[i].Poster=='N/A')
					{
						$(img).attr('src','img/image5.jpg');
					}
					$(img).addClass('img-rounded');
					$(img).attr('height','200');
					//$(movi_pic_row).append(img);
					$(img_row).append(img);
					$(mov_img_act).append(img_row);
					
					var rating=document.createElement('div');
					$(rating).addClass('');
					$(rating).css('text-align','center');
					$(rating).html("Rating: "+movies[i].Rated);
					$(mov_img_act).append(rating);
					
					var imdb=document.createElement('div');
					$(imdb).addClass('');
					var left=document.createElement('div');
					$(left).addClass('col-md-6 col-sm-6 col-lg-6 col_l_r0');
					$(left).css('text-align','center');
					$(left).html('<i class="fa fa-star-o" aria-hidden="true"></i> '+movies[i].imdbRating);
					$(imdb).append(left);
					var right=document.createElement('div');
					$(right).addClass('col-md-6 col-sm-6 col-lg-6 col_l_r0');
					$(right).css('text-align','center');
					$(right).html('<i class="fa fa-thumbs-up" aria-hidden="true"></i> '+movies[i].imdbVotes);
					$(imdb).append(right);
				$(mov_img_act).append(imdb);
				
				var empty_1=document.createElement('div');
				$(empty_1).addClass('col-md-4 col-sm-4 col-lg-4 col_l_r0');
					
					var title=document.createElement('div');
					$(title).addClass('row');
					$(title).html("<label><b>Movie Title:</b></label> "+movies[i].Title);
					$(empty_1).append(title);
					
					var actors=document.createElement('div');
					$(actors).addClass('row');
					$(actors).html("<label><b>Actors:</b></label> "+movies[i].Actors);
					$(empty_1).append(actors);
					
					var direct=document.createElement('div');
					$(direct).addClass('row');
					$(direct).html("<label><b>Director:</b></label> "+movies[i].Director);
					$(empty_1).append(direct);
					
					var country=document.createElement('div');
					$(country).addClass('row');
					$(country).html("<label><b>Country:</b></label> "+movies[i].Country);
					$(empty_1).append(country);
					
					var language=document.createElement('div');
					$(language).addClass('row');
					$(language).html("<label><b>Language:</b></label> "+movies[i].Language);
					$(empty_1).append(language);
					
					var awards=document.createElement('div');
					$(awards).addClass('row');
					$(awards).html("<label><b>Awards:</b></label> "+movies[i].Awards);
					$(empty_1).append(awards);
					
					var released=document.createElement('div');
					$(released).addClass('row');
					$(released).html("<label><b>Released Date:</b></label> "+movies[i].Released);
					$(empty_1).append(released);
					
					var genre=document.createElement('div');
					$(genre).addClass('row');
					$(genre).html("<label><b>Genre:</b></label> "+movies[i].Genre);
					$(empty_1).append(genre);
					//Response Runtime
					
					var resp=document.createElement('div');
					$(resp).addClass('row');
					$(resp).html("<label><b>Response:</b></label> "+movies[i].Response);
					$(empty_1).append(resp);
					
					var run=document.createElement('div');
					$(run).addClass('row');
					$(run).html("<label><b>Duration:</b></label> "+movies[i].Runtime);
					$(empty_1).append(run);
					
				var empty_2=document.createElement('div');
				$(empty_2).addClass('col-md-4 col-sm-4 col-lg-4 col_l_r0');	
					
					var Plot=document.createElement('div');
					$(Plot).addClass('row');
					$(Plot).css('text-align','justify');
					$(Plot).html("<label><b>Plot:</b></label> "+movies[i].Plot);
					$(empty_2).append(Plot);
					
					var meta=document.createElement('div');
					$(meta).addClass('row');
					$(meta).html("<label><b>Metascore:</b></label> "+movies[i].Metascore);
					$(empty_2).append(meta);
					//Writer
					
					var writer=document.createElement('div');
					$(writer).addClass('row');
					$(writer).html("<label><b>Writers:</b></label> "+movies[i].Writer);
					$(empty_2).append(writer);
					
				$(each_row).append(mov_img_act);
				$(each_row).append(empty_1);
			$(each_row).append(empty_2);
			
			$(movie_details).append(each_row);	
	}
	
}
