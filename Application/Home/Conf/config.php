<?php
return array(
	//'配置项'=>'配置值'
    // 数据库配置
    'DB_DEPLOY_TYPE' => 1,
    'DB_TYPE'   => 'mysqli', // 数据库类型
    // 第一个数据库为主库，以后的为从库
    'DB_HOST'   => '127.0.0.1', // 用户名
    'DB_NAME'    => 'jifeng', // 密码
    'DB_USER' => 'root', // 数据库表前缀
    'DB_PWD' => 'password', // 数据库表前缀
    'DB_PORT' => '3306', // 数据库表前缀
    'DB_CHARSET' => 'utf8', // 数据库表前缀
    'DB_RW_SEPARATE' => true,
'URL_ROUTER_ON'   => true, //开启路由
);
