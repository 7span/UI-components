<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1.0">


<!-- CSS/LESS -->
<?php
	require_once '../less_compiler/Autoloader.php';
	Less_Autoloader::register();

	try{
		$options = array( 'compress'=>false );
		$parser = new Less_Parser($options);
		$parser->parseFile('../css/config.less');
		$parser->parseFile('../css/common.less');
		$parser->parseFile('../css/sevenspan.less');
		$parser->parseFile($_GET["id"].'/element.less');
		$css = $parser->getCss();
		file_put_contents($_GET["id"].'/element.css', $css);
	}catch(Exception $e){
	    $error_message = $e->getMessage();
			echo '<pre>'.$error_message.'</pre>';
	}
?>

<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700' rel='stylesheet' type='text/css'>
<link rel="stylesheet" type="text/css" href="../css/style.css" />
<link rel="stylesheet" type="text/css" href="<?php echo $_GET['id']; ?>/element.css" />
