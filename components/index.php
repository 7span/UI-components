<!DOCTYPE HTML>
<html>
    <head>
        <!-- INCLUDE : HEAD -->
        <?php include 'inc/head.inc.php'; ?>
        <title>7UI</title>
    </head>
    <body>

        <!-- WRAP : STARTS -->
        <div class="wrap">

            <!-- INCLUDE : HEADER -->
            <?php include 'inc/header.inc.php'; ?>

            <!-- INCLUDE : HEADER -->
            <?php include 'inc/sidebar.inc.php'; ?>

            <div class="content">

            <!-------------------------------------------------------------------->
            <!-- COMPONENT CODE STARTS HERE -->
            <!-------------------------------------------------------------------->

            <div class="component_wrap">
              <p class="component_title"><?php echo $_GET['id'] ?></p>
              <?php include $_GET['id'].'/element.php'; ?>
            </div>

            <div class="code_wrap">
              <ul class="code_list ul_reset clearfix">
                <li>
                  <ul class="code_title tbl">
                    <li class="tbl_middle">HTML <button class="button button_small" type="button">COPY</button></li>
                  </ul>
                  <textarea class="code_html code_container" disabled=""><?php echo htmlentities(file_get_contents($_GET['id'].'/element.php')); ?></textarea>
                </li>
                <li>
                  <ul class="code_title tbl">
                    <li class="tbl_middle">LESS <button class="button button_small" type="button">COPY</button></li>
                  </ul>
                  <textarea class="code_less code_container" disabled=""><?php echo htmlentities(file_get_contents($_GET['id'].'/element.less')); ?></textarea>
                </li>
                <li>
                  <ul class="code_title tbl">
                    <li class="tbl_middle">JS <button class="button button_small" type="button">COPY</button></li>
                  </ul>
                  <textarea class="code_js code_container" disabled=""><?php echo htmlentities(file_get_contents($_GET['id'].'/element.js')); ?></textarea>
                </li>
                <li>
                  <ul class="code_title tbl">
                    <li class="tbl_middle">Dependency <button class="button button_small" type="button">COPY</button></li>
                  </ul>
                  <ul class="dep_wrap ul_reset">
                    <li><a href="../css/config.less" target="_blank">config.less</a></li>
                    <li><a href="../css/sevenspan.less">sevenspan.less</a></li>
                  </ul>
                </li>
              </ul>
            </div>

            <!-------------------------------------------------------------------->
            <!-- COMPONENT CODE ENDS HERE -->
            <!-------------------------------------------------------------------->

            </div>

            <!-- INCLUDE : COMMON ELEMENTS -->
            <?php include 'inc/common_elements.inc.php';?>

            <!-- INCLUDE : FOOTER -->
            <?php include 'inc/footer.inc.php'; ?>

            <!-- INCLUDE : FOOTER SCRIPTS -->
            <?php include 'inc/footer_scripts.inc.php'; ?>

        </div>
        <!-- WRAP : ENDS -->

    </body>
</html>
