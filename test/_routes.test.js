/**
	测试用例
*/
class Test{
	testPost(req,res,next){

	}
}
var routes = [
				{
					brie:"test",
					desc:"test pages",
					path:"/",
					class:Test,
					rules:{
						post:[
							{
								brie:"test",
								desc:"test pages",
								path:"/",
								controller:"testPost"
							}
						]
					}
				}
			] 
module.exports = routes;