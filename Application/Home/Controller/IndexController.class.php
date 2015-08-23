<?php
namespace Home\Controller;
use Think\Controller;
use Think\Model;

class IndexController extends Controller {
    public function index(){

        $this->assign('session_id',session('user.id'));
        $this->display('Default/Index/index');

    }
}