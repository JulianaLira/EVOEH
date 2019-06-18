// $(function() {
	// $("#btnenviar").click(function(){
		// alert("Chamou");
		// var dadosjson = {
			// autor: $("#autor").val(),
			// titulo: $("#titulo").val(),
			// assunto: $("#assunto").val(),
		// }		
	// });
// });

$(function() {	
	$("#btnenviar").click(function(){											
		var dadosjson = {
	        titulo: $("#titulo").val(),
			tipo: $("#tipo").val(),
			data: $("#datepicker").val(),
			numeroEdicao: $("#numeroEdicao").val(),    
			autor: $("#autor").val(),
			editora: $("#editora").val() ,
			descricao: $("#descricao").val(),		
		}
		
		$.ajax({  
		  type: "POST",  
		  url: "http://localhost:8080/rest-api/cadastrar",  
		  data: JSON.stringify(dadosjson),		  	  
		  dataType: "json",
		  contentType: "application/json; charset=utf-8",					
		  success:function(response){
			$("#msg").html('<div class="alert alert-success" role="alert">Cadastro edetuado com sucesso</div>');
		  },
		  error:function(response){	
			alert("Erro");
		  }
		});		 
	});	
});


$(function() {	
	$("#btnalterar").click(function(){											
		var dadosjson = {
	        titulo: $("#titulo").val(),
			tipo: $("#tipo").val(),
			dataP: $("#datepicker").val(),
			numeroEdicao: $("#numeroEdicao").val(),    
			autor: $("#autor").val(),
			editora: $("#editora").val() ,
			descricao: $("#descricao").val(),		
		}
		
		$.ajax({  
		  type: "PUT",  
		  url: "http://localhost:8080/rest-api/alterar/id",  
		  data: JSON.stringify(dadosjson),		  	  
		  dataType: "json",
		  contentType: "application/json; charset=utf-8",					
		  success:function(response){
			$("#msg").html('<div class="alert alert-success" role="alert">Alterado com sucesso</div>');
		  },
		  error:function(response){	
			alert("Erro");
		  }
		});		 
	});	
});
	

