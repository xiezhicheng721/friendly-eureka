<?php
//1.获取文件上传对应的对象
$fileInfo = $_FILES['upFile'];
//2.获取上传文件的名称
$fileName = $fileInfo['name'];
//3.获取上传文件保存的临时路径
$filePath = $fileInfo['tmp_name'];
//4.移动文件到新路径
move_uploaded_file($filePath,destination:"./source".$fileName)
?>