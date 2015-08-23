<?php
namespace Home\Controller;
use Think\Controller;
use Think\Model;

class UserController extends Controller {
    public function index(){


    }
    public function login(){
        $username = I('post.username');
        $password = I('post.password');
        $data['username'] = $username;
        $data['password'] = md5($password);
        $result =  D('User')->where($data)->find();

        if(empty($result)){
            $this->error('用户名输入错误');
            exit;
        }else{
                session('user.id',$result['id']);
            $this->success('成功登录');
            exit;
        }

    }

    public function register(){

            if(IS_POST){
                $username = I('post.username');
                $password = I('post.password');
                $res_password = I('post.res_password');
                $email = I('post.email');
                $phone = I('post.phone');

                $where['username'] = $username;
                $where['email'] = $email;
                $where['phone'] = $phone;
                $where['_logic'] = 'OR';;

                $result = D('user')->where($where)->find();
                if($result){
                    $this->error('用户账号信息已被注册');
                    exit;
                } else {

                    $User = M('User');
                    $data['nickname']= $username;
                    $data['name']= $username;
                    $data['password']= md5($password);
                    $data['key']= rand(1000,2000);
                    $data['phone']= $phone;
                    $data['email']= $email;
                    $data['address']= '';
                    $data['create_time']= time();
                    $User->add($data);
                    $this->success('用户注册成功，请去登录');
                }
                   // $this->success('注册成功');
                exit;
            }


        $this->display('Default/User/register');

    }


    public function logout()
    {
        session_destroy();
        cookie('userId', null); //退出登录的时候清除cookie
        setcookie('is_login', 'yes', time()-86400, '/', '.touzila.com');
        //$this->redirect('/Home/Index/index');
        redirect('/?c=Index&a=index');
    }



}