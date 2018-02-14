import * as express from 'express';
import {Route,relation} from 'auto-api'

pessoaRes = new Route('pessoa',{
    "id":{
        "key":true,
        "type":'number'
    },
    "name":'string',
    "adress":'reference'
})

//add in last fase
pessoaRes.get(function(req,res,next){

    next();
})

pessoaRes.get(function(req,res,next){

    next();
})

//list all get functions
pessoaRes.method.get()
//remove method 1 from the list
delete pessoaRes.method.get()[1]

//must pass a key
relation.add()