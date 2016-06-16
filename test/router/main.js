/**
 * Created by ubuntu on 16/6/16.
 */
module.exports=function(app)
{
    app.get('/' , function(req ,res){
        res.render('index.html');
    });
    app.get('/about' , function(req ,res ){
        res.render('about.html');
    });
};