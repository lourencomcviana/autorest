import {IRouterMatcher,Application}from 'express';
import * as express from 'express';

express().get('teste',function(req,res){

})
class Method{

}
class Route{
    private gets:IRouterMatcher<Application>[]
    private posts:IRouterMatcher<Application>[]
    private puts:IRouterMatcher<Application>[]
    private deletes:IRouterMatcher<Application>[]

    get:Method
    post:Method
    put:Method
    delete:Method


}


