$('.materia1').click(function(){
	$('.menuLateral ul .itens1').toggleClass('mostra');
	$('.menuLateral ul .seta1').toggleClass('gira');
});
$('.materia2').click(function(){
	$('.menuLateral ul .itens2').toggleClass('mostra');
	$('.menuLateral ul .seta2').toggleClass('gira');
});
$('.materia3').click(function(){
	$('.menuLateral ul .itens3').toggleClass('mostra');
	$('.menuLateral ul .seta3').toggleClass('gira');
});
$('.materia4').click(function(){
	$('.menuLateral ul .itens4').toggleClass('mostra');
	$('.menuLateral ul .seta4').toggleClass('gira');
});
$('.materia5').click(function(){
	$('.menuLateral ul .itens5').toggleClass('mostra');
	$('.menuLateral ul .seta5').toggleClass('gira');
});

$('.btnAbre').click(function(){
	$('.menuLateral').toggleClass('mostra');
});
$('.btnFecha').click(function(){
	$('.menuLateral').toggleClass('mostra');
});

const $menulateral = $('.menuLateral');
$(document).mouseup(e => {
	if(!$menulateral.is(e.target)
		&& $menulateral.has(e.target).length === 0)
	{
		$menulateral.removeClass('mostra');
	}
});
