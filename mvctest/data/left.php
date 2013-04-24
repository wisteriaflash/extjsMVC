<?php 
  // $sub1 = '[{id: "1_1", title: "首页"}]';
  $sub2 = '[{id: "2_1", title: "用户列表"}]';
  $sub3 = '[{id: "3_1", title: "子菜单一"},{id: "3_2", title: "子菜单二"},{id: "3_3", title: "子菜单三"}]';


  $menu = '{"success": "true", "menu": ['.
      '{"id": "1", "title": "首页"},'.
      '{"id": "2", "title": "用户", "sub": '.$sub2.'},'.
      '{id: "3", title: "菜单三", sub: '.$sub3.'}'.
    ']}';

echo $menu;

 ?>