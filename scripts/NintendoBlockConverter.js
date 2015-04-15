$(document).ready(function() {
	
	var validateNumber = function(strNumber){
		strNumber = strNumber.replace(/\D/g, '');
		var number = isNaN(strNumber) ? 1 : Number(strNumber)
		return number < 1 ? 1 : number;
	};
	
	var updateInputs = function(blocks, mb){
		$("#blocksInput").val(blocks);
		$("#megabytesInput").val(mb);
	};
	
	var convertBlocks2MB = function(blocks){
		var mb = (blocks) / 8;
		mb = Math.round(mb * 100) / 100;
		updateInputs(blocks, mb);
	};
	
	var convertMB2Blocks = function(mb){
		var blocks = mb * 8;
		blocks = Math.round(blocks * 100) / 100;
		updateInputs(blocks, mb);
	};
	
	var blocksInputEventHandler = function(){
		var number = validateNumber($(this).val());
		convertBlocks2MB(number);		
	};
	
	var megabytesEventHandler = function(){
		var number = validateNumber($(this).val());
		convertMB2Blocks(number);
	};
	
	$("#blocksInput").change(blocksInputEventHandler);
	
	$("#megabytesInput").change(megabytesEventHandler);

});