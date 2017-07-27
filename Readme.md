ting.js for 1.1.11 基于express的server工程化组件
==============================
<a href="https://travis-ci.org/294678380/Ting.js"><img src="https://api.travis-ci.org/294678380/Ting.js.svg?branch=master" alt="" data-canonical-src="https://api.travis-ci.org/294678380/Ting.js.svg?branch=master" style="max-width:100%;"></a>
<h2>你可以用它，工程化你的express项目。使项目变得更可靠</h2>


<p>
	nodejs版本：
	node >= 6.10.0
</p>


<div class="ta-right"><div><div id="jianshu" class="ta-title"><!-- react-text: 293 -->Ting.js简述<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></div><div class="ta-content"><div><!-- react-text: 297 -->Ting.js是一款基于express的server工程化组件，它的主要作用，在于简化express的较繁杂router操作，使nodejs的server端API变得更加友好。附加功能可以实时生成路由文档，使api请求一目了然，简洁代码的同时保持了express可扩展性能。<!-- /react-text --><br></div><div><h2 id="jianshu三大特性" style="color: rgb(255, 144, 0);">三大特性</h2><div class="ta-content-path"><h3 id="jianshu三大特性0"><!-- react-text: 303 -->1.简化express的路由<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></h3><p><span><!-- react-text: 307 --><!-- /react-text --><br></span></p><div></div></div><div class="ta-content-path"><h3 id="jianshu三大特性1"><!-- react-text: 312 -->2.使用es6的class语法接受请求，使工程更易于移植<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></h3><p><span><!-- react-text: 316 --><!-- /react-text --><br></span></p><div></div></div><div class="ta-content-path"><h3 id="jianshu三大特性2"><!-- react-text: 321 -->3.配置即文档，根据package的版本生成文档<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></h3><p><span><!-- react-text: 325 --><!-- /react-text --><br></span></p><div></div></div></div></div></div><div><div id="jiaocheng" class="ta-title"><!-- react-text: 330 -->使用教程<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></div><div class="ta-content"><div><!-- react-text: 334 --><!-- /react-text --><br></div><div><h2 id="jiaocheng步骤" style="color: rgb(255, 144, 0);">步骤</h2><div class="ta-content-path"><h3 id="jiaocheng步骤0"><!-- react-text: 340 -->开始之前<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></h3><p><span><!-- react-text: 344 -->在一切开始之前，你需要具备express知识,另外，需要生成一份package.json。<!-- /react-text --><br></span><span><!-- react-text: 347 -->准备就绪后,就开始吧！<!-- /react-text --><br></span></p><div></div></div><div class="ta-content-path"><h3 id="jiaocheng步骤1"><!-- react-text: 352 -->Step 1:　下载express<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></h3><p><span><!-- react-text: 356 -->你需要先下载express:<!-- /react-text --><br></span><span><!-- react-text: 359 -->项目目录打开命令行运行 npm install express --save<!-- /react-text --><br></span><span><!-- react-text: 362 --><!-- /react-text --><br></span></p><div></div></div><div class="ta-content-path"><h3 id="jiaocheng步骤2"><!-- react-text: 367 -->Step 2:　下载ting.js<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></h3><p><span><!-- react-text: 371 -->你需要先下载express:<!-- /react-text --><br></span><span><!-- react-text: 374 -->项目目录打开命令行运行 npm install ting.js --save<!-- /react-text --><br></span><span><!-- react-text: 377 --><!-- /react-text --><br></span></p><div></div></div><div class="ta-content-path"><h3 id="jiaocheng步骤3"><!-- react-text: 382 -->Step 3:　创建index.js<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></h3><p><span><!-- react-text: 386 -->入口文件<!-- /react-text --><br></span></p><div class="code_view"><pre class=" line-numbers language-javascript"><code id="codeview_3" class=" language-javascript">
		<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment" spellcheck="true">//引入express</span>
		<span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"express"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment" spellcheck="true">//express_app</span>
		<span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">var</span> ting <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"ting.js"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment" spellcheck="true">//定义routes</span>
		<span class="token keyword">var</span> routes <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./routes"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment" spellcheck="true">//引入_package</span>
		<span class="token keyword">var</span> _package <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./package.json"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment" spellcheck="true">//doc路径</span>
			_package<span class="token punctuation">.</span>doc<span class="token punctuation">.</span>path <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span>_package<span class="token punctuation">.</span>doc<span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment" spellcheck="true">//初始化</span>
		<span class="token keyword">var</span> ting_fn <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>init<span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token function">init</span><span class="token punctuation">(</span>routes<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment" spellcheck="true">//生成路由</span>
		<span class="token function">ting</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span>ting_fn<span class="token punctuation">,</span>_package<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment" spellcheck="true">//监听</span>
		app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8090</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token operator">&amp;</span>gt<span class="token punctuation">;</span><span class="token punctuation">{</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"ting_server started 8090"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre></div></div><div class="ta-content-path"><h3 id="jiaocheng步骤4"><!-- react-text: 393 -->Step 4:　创建routes.js<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></h3><p><span><!-- react-text: 397 -->配置routes规则<!-- /react-text --><br></span></p><div class="code_view"><pre class=" line-numbers language-javascript"><code id="codeview_4" class=" language-javascript">
	<span class="token comment" spellcheck="true">//处理类</span>
	<span class="token keyword">var</span> Home <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./home.class"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment" spellcheck="true">//定义规则</span>
	module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">[</span>
			<span class="token punctuation">{</span>
				brie<span class="token punctuation">:</span><span class="token string">"首页"</span><span class="token punctuation">,</span>
				desc<span class="token punctuation">:</span><span class="token string">"这是首页的整体说明"</span><span class="token punctuation">,</span>
				path<span class="token punctuation">:</span><span class="token string">"/"</span><span class="token punctuation">,</span>
				<span class="token keyword">class</span><span class="token punctuation">:</span>Home<span class="token punctuation">,</span>
				rules<span class="token punctuation">:</span><span class="token punctuation">{</span>
					<span class="token keyword">get</span><span class="token punctuation">:</span><span class="token punctuation">[</span>
						<span class="token punctuation">{</span>
							brie<span class="token punctuation">:</span><span class="token string">"这是首页的get访问方法"</span><span class="token punctuation">,</span>
							desc<span class="token punctuation">:</span><span class="token string">"返回了hello world"</span><span class="token punctuation">,</span>
							path<span class="token punctuation">:</span><span class="token string">"/"</span><span class="token punctuation">,</span>
							Examination<span class="token punctuation">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>	<span class="token comment" spellcheck="true">//开启代码视图</span>
							controller<span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token string">"getHome"</span><span class="token punctuation">]</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">]</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
	<span class="token punctuation">]</span>
<span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre></div></div><div class="ta-content-path"><h3 id="jiaocheng步骤5"><!-- react-text: 404 -->Step 5:　创建home.class.js<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></h3><p><span><!-- react-text: 408 -->替代复杂的router，使用类文件作为请求入口<!-- /react-text --><br></span></p><div class="code_view"><pre class=" line-numbers language-javascript"><code id="codeview_5" class=" language-javascript">
	<span class="token keyword">class</span> <span class="token class-name">Home</span><span class="token punctuation">{</span>
		<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token comment" spellcheck="true">/**
				main函数是每个类的入口函数， 它会在启动加载类时执行
			*/</span>
		<span class="token punctuation">}</span>
		<span class="token function">getHome</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span>res<span class="token punctuation">,</span>next<span class="token punctuation">)</span><span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"hello world"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	module<span class="token punctuation">.</span>exports <span class="token operator">=</span> Home<span class="token punctuation">;</span>
<span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre></div></div><div class="ta-content-path"><h3 id="jiaocheng步骤6"><!-- react-text: 415 -->Step 6:　运行测试<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></h3><p><span><!-- react-text: 419 -->项目目录打开命令行运行<!-- /react-text --><br></span><span><!-- react-text: 422 -->node index<!-- /react-text --><br></span><span><!-- react-text: 425 -->访问localhost:8090<!-- /react-text --><br></span><span><!-- react-text: 428 -->你可以看到类Home调用了getHome，顺利返回hello world<!-- /react-text --><br></span></p><div></div></div></div></div></div><div><div id="routes" class="ta-title"><!-- react-text: 433 -->配置routes<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></div><div class="ta-content"><div><!-- react-text: 437 -->你可以使用配置文件，也可以直接写在入口文件中，最终这个文件会生成router挂载到app上.<!-- /react-text --><br></div><div><!-- react-text: 440 --><!-- /react-text --><br></div><div><h2 id="routesroutes {Array}" style="color: rgb(255, 144, 0);">routes {Array}</h2><div class="ta-content-path"><h3 id="routesroutes {Array}0"><!-- react-text: 446 -->每一个数组项表示一个路由分支。<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></h3><p><span><!-- react-text: 450 -->抽象express中的app.use()功能，指定的类将被转换成对应的router<!-- /react-text --><br></span></p><div class="code_view"><pre class=" line-numbers language-javascript"><code id="codeview_0" class=" language-javascript">
	<span class="token keyword">var</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
			brie<span class="token punctuation">:</span><span class="token string">"简短描述"</span><span class="token punctuation">,</span>
			desc<span class="token punctuation">:</span><span class="token string">"具体的功能描述"</span><span class="token punctuation">,</span>
			path<span class="token punctuation">:</span><span class="token string">"/"</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">//路由地址</span>
			<span class="token keyword">class</span><span class="token punctuation">:</span>HomeClass<span class="token punctuation">,</span> <span class="token comment" spellcheck="true">//类</span>
			rules<span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment" spellcheck="true">//分支规则 </span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">]</span>
<span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre></div></div><div class="ta-content-path"><h3 id="routesroutes {Array}1"><!-- react-text: 457 -->routes[0].brie {String}<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></h3><p><span><!-- react-text: 461 -->路由简述，必填项。简短描述这个路由分支的主题。<!-- /react-text --><br></span></p><div></div></div><div class="ta-content-path"><h3 id="routesroutes {Array}2"><!-- react-text: 466 -->routes[0].desc {String}<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></h3><p><span><!-- react-text: 470 -->具体的功能描述，必填项。<!-- /react-text --><br></span></p><div></div></div><div class="ta-content-path"><h3 id="routesroutes {Array}3"><!-- react-text: 475 -->routes[0].path {String}<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></h3><p><span><!-- react-text: 479 -->分支路由，必填项。app.use的第一个参数。<!-- /react-text --><br></span></p><div></div></div><div class="ta-content-path"><h3 id="routesroutes {Array}4"><!-- react-text: 484 -->routes[0].class {class Function}<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></h3><p><span><!-- react-text: 488 -->router处理class，必填项。详细说明见下文<!-- /react-text --><br></span></p><div></div></div><div class="ta-content-path"><h3 id="routesroutes {Array}5"><!-- react-text: 493 -->routes[0].rules {Array or Object}<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></h3><p><span><!-- react-text: 497 -->分之下的路由规则，可选项，但推荐在routes中写入，你也可以在class中定义。详见下文。<!-- /react-text --><br></span></p><div></div></div></div></div></div><div><div id="class" class="ta-title"><!-- react-text: 502 -->class<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></div><div class="ta-content"><div><!-- react-text: 506 -->使用class定义server响应操作。它使用es6的class语法代替了相对不友好的router.get等语法。<!-- /react-text --><br></div><div><h2 id="classclass" style="color: rgb(255, 144, 0);">class</h2><div class="ta-content-path"><h3 id="classclass0"><!-- react-text: 512 -->es6语法定义router<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></h3><p><span><!-- react-text: 516 --><!-- /react-text --><br></span></p><div class="code_view"><pre class=" line-numbers language-javascript"><code id="codeview_0" class=" language-javascript">
	<span class="token keyword">class</span> <span class="token class-name">Home</span><span class="token punctuation">{</span>
		<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token punctuation">}</span>
		<span class="token function">getHome</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span>res<span class="token punctuation">,</span>next<span class="token punctuation">)</span><span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"hello world"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	module<span class="token punctuation">.</span>exports <span class="token operator">=</span> Home<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre></div></div><div class="ta-content-path"><h3 id="classclass1"><!-- react-text: 523 -->main()<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></h3><p><span><!-- react-text: 527 -->类入口，可选项,它在加载类时调用，你可以在这里指定rules，或者做一些其它的操作。<!-- /react-text --><br></span></p><div></div></div><div class="ta-content-path"><h3 id="classclass2"><!-- react-text: 532 -->class<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></h3><p><span><!-- react-text: 536 -->每一个class的方法都会接收router[method]的所有参数<!-- /react-text --><br></span></p><div></div></div></div></div></div><div><div id="rules" class="ta-title"><!-- react-text: 541 -->rules<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></div><div class="ta-content"><div><!-- react-text: 545 -->定义路由分支规则<!-- /react-text --><br></div><div><h2 id="rules在routes中定义" style="color: rgb(255, 144, 0);">在routes中定义</h2><div class="ta-content-path"><h3 id="rules在routes中定义0"><!-- react-text: 551 -->rules<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></h3><p><span><!-- react-text: 555 -->在routes中定义路由分支规则<!-- /react-text --><br></span></p><div class="code_view"><pre class=" line-numbers language-javascript"><code id="codeview_0" class=" language-javascript">
	<span class="token comment" spellcheck="true">//处理类</span>
	<span class="token keyword">var</span> Home <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./home.class"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment" spellcheck="true">//定义规则</span>
	module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">[</span>
			<span class="token punctuation">{</span>
				brie<span class="token punctuation">:</span><span class="token string">"首页"</span><span class="token punctuation">,</span>
				desc<span class="token punctuation">:</span><span class="token string">"这是首页的整体说明"</span><span class="token punctuation">,</span>
				path<span class="token punctuation">:</span><span class="token string">"/"</span><span class="token punctuation">,</span>
				<span class="token keyword">class</span><span class="token punctuation">:</span>Home<span class="token punctuation">,</span>
				rules<span class="token punctuation">:</span><span class="token punctuation">{</span>   <span class="token comment" spellcheck="true">//对象</span>
					<span class="token keyword">get</span><span class="token punctuation">:</span><span class="token punctuation">[</span>	
						<span class="token punctuation">{</span>
							brie<span class="token punctuation">:</span><span class="token string">"这是首页的get访问方法"</span><span class="token punctuation">,</span>
							desc<span class="token punctuation">:</span><span class="token string">"返回了hello world"</span><span class="token punctuation">,</span>
							path<span class="token punctuation">:</span><span class="token string">"/"</span><span class="token punctuation">,</span>
							Examination<span class="token punctuation">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>	<span class="token comment" spellcheck="true">// 开启代码视图</span>
							controller<span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token string">"getHome"</span><span class="token punctuation">]</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">]</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
	<span class="token punctuation">]</span>
<span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre></div></div></div><div><h2 id="rules在main()中定义" style="color: rgb(255, 144, 0);">在main()中定义</h2><div class="ta-content-path"><h3 id="rules在main()中定义0"><!-- react-text: 564 -->rules<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></h3><p><span><!-- react-text: 568 -->在main()中定义路由分支规则<!-- /react-text --><br></span></p><div class="code_view"><pre class=" line-numbers language-javascript"><code id="codeview_0" class=" language-javascript">
	<span class="token keyword">class</span> <span class="token class-name">Home</span><span class="token punctuation">{</span>
		<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token comment" spellcheck="true">//在main中定义rules</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>rules <span class="token operator">=</span> <span class="token punctuation">{</span>
				<span class="token keyword">get</span><span class="token punctuation">:</span><span class="token punctuation">[</span>
					<span class="token punctuation">{</span>
						brie<span class="token punctuation">:</span><span class="token string">"这是首页的get访问方法"</span><span class="token punctuation">,</span>
						desc<span class="token punctuation">:</span><span class="token string">"返回了hello world"</span><span class="token punctuation">,</span>
						path<span class="token punctuation">:</span><span class="token string">"/"</span><span class="token punctuation">,</span>
						Examination<span class="token punctuation">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>	<span class="token comment" spellcheck="true">//开启代码视图</span>
						controller<span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token string">"getHome"</span><span class="token punctuation">]</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">]</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token function">getHome</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span>res<span class="token punctuation">,</span>next<span class="token punctuation">)</span><span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"hello world"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	
<span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre></div></div></div><div><h2 id="rulesrules配置" style="color: rgb(255, 144, 0);">rules配置</h2><div class="ta-content-path"><h3 id="rulesrules配置0"><!-- react-text: 577 -->rules对象<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></h3><p><span><!-- react-text: 581 -->rules对象定义了路由分支规则，对象的键名表示请求method<!-- /react-text --><br></span><span><!-- react-text: 584 -->例如常见的get，post，delete，put等，值是一个数组，规定请求处理方法。这里我们以get方法示例<!-- /react-text --><br></span></p><div class="code_view"><pre class=" line-numbers language-javascript"><code id="codeview_0" class=" language-javascript">
	<span class="token punctuation">{</span>
				
				rules<span class="token punctuation">:</span><span class="token punctuation">{</span>  
					<span class="token keyword">get</span><span class="token punctuation">:</span><span class="token punctuation">[</span> <span class="token comment" spellcheck="true">//method	</span>
						<span class="token punctuation">{</span>
							
						<span class="token punctuation">}</span>
					<span class="token punctuation">]</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
<span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre></div></div><div class="ta-content-path"><h3 id="rulesrules配置1"><!-- react-text: 591 -->rules.get.brie {String}<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></h3><p><span><!-- react-text: 595 -->规则简述,必填项<!-- /react-text --><br></span></p><div></div></div><div class="ta-content-path"><h3 id="rulesrules配置2"><!-- react-text: 600 -->rules.get.desc {String}<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></h3><p><span><!-- react-text: 604 -->规则详细描述,必填项<!-- /react-text --><br></span></p><div></div></div><div class="ta-content-path"><h3 id="rulesrules配置3"><!-- react-text: 609 -->rules.get.path {String}<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></h3><p><span><!-- react-text: 613 -->规则路由，必填项，这个路由与routes.path形成组合，例如routes规定path：'/',这里规定为'/hello'则最后请求路径为:'/hello'，请注意这里不能与其他分支产生命名或路由冲突<!-- /react-text --><br></span></p><div></div></div><div class="ta-content-path"><h3 id="rulesrules配置4"><!-- react-text: 618 -->rules.get.controller {Array}<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></h3><p><span><!-- react-text: 622 -->控制响应方法，必填项。它有两个用法，如果数组项是函数引用，对应的路由会将请求分发到函数调用req,res等。如果数组项是字符串，那么将在类中寻找函数，找不到则抛出错误.<!-- /react-text --><br></span></p><div class="code_view"><pre class=" line-numbers language-javascript"><code id="codeview_4" class=" language-javascript">
	<span class="token punctuation">{</span>
		rules<span class="token punctuation">:</span><span class="token punctuation">{</span>  
			<span class="token keyword">get</span><span class="token punctuation">:</span><span class="token punctuation">[</span> <span class="token comment" spellcheck="true">//method	</span>
				<span class="token punctuation">{</span>
					brie<span class="token punctuation">:</span><span class="token string">""</span><span class="token punctuation">,</span>
					desc<span class="token punctuation">:</span><span class="token string">""</span><span class="token punctuation">,</span>
					path<span class="token punctuation">:</span><span class="token string">""</span><span class="token punctuation">,</span>
					controller<span class="token punctuation">:</span><span class="token punctuation">[</span>getfunc<span class="token punctuation">,</span><span class="token string">"getHome"</span><span class="token punctuation">]</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre></div></div><div class="ta-content-path"><h3 id="rulesrules配置5"><!-- react-text: 629 -->rules.get.Examination {Boolean}<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></h3><p><span><!-- react-text: 633 -->是否开启代码视图，可选项。如果为true则生成的doc对象会有一个codeView的属性，它的值就是controller处理代码<!-- /react-text --><br></span></p><div></div></div><div class="ta-content-path"><h3 id="rulesrules配置6"><!-- react-text: 638 -->rules.get.ver {Object}<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></h3><p><span><!-- react-text: 642 -->rules请求参数验证,可选项。<!-- /react-text --><br></span></p><div></div></div></div></div></div><div><div id="ver" class="ta-title"><!-- react-text: 647 -->rules.get.ver {Object}<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></div><div class="ta-content"><div><!-- react-text: 651 -->它可以验证发来的请求参数，如果你是用的是body-perse，或者任意一中请求参数格式化中间件，都可以使用它验证参数的正确性<!-- /react-text --><br></div><div><h2 id="ver指定req.params验证" style="color: rgb(255, 144, 0);">指定req.params验证</h2><div class="ta-content-path"><h3 id="ver指定req.params验证0"><!-- react-text: 657 -->代码示例<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></h3><p><span><!-- react-text: 661 -->你可以使用正则验证，也可以使用function自定义规则<!-- /react-text --><br></span></p><div class="code_view"><pre class=" line-numbers language-javascript"><code id="codeview_0" class=" language-javascript">
	<span class="token punctuation">{</span>
		rules<span class="token punctuation">:</span><span class="token punctuation">{</span>  
			<span class="token keyword">get</span><span class="token punctuation">:</span><span class="token punctuation">[</span> <span class="token comment" spellcheck="true">//method	</span>
				<span class="token punctuation">{</span>
					brie<span class="token punctuation">:</span><span class="token string">""</span><span class="token punctuation">,</span>
					desc<span class="token punctuation">:</span><span class="token string">""</span><span class="token punctuation">,</span>
					path<span class="token punctuation">:</span><span class="token string">"/"</span><span class="token punctuation">,</span>
					controller<span class="token punctuation">:</span><span class="token punctuation">[</span>getfunc<span class="token punctuation">,</span><span class="token string">"getHome"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
					ver<span class="token punctuation">:</span><span class="token punctuation">{</span>
						params<span class="token punctuation">:</span><span class="token punctuation">{</span>
							a<span class="token punctuation">:</span><span class="token regex">/^test$/</span><span class="token punctuation">,</span>
							b<span class="token punctuation">:</span><span class="token keyword">function</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span>params<span class="token punctuation">)</span><span class="token punctuation">{</span>
								<span class="token keyword">if</span><span class="token punctuation">(</span>value <span class="token operator">!==</span> <span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
									<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
								<span class="token punctuation">}</span>
								<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
							<span class="token punctuation">}</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre></div></div><div class="ta-content-path"><h3 id="ver指定req.params验证1"><!-- react-text: 668 -->验证是否通过<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></h3><p><span><!-- react-text: 672 -->验证不通过，请求参数req上名为_typeError的属性的值为true,或者是自定义的值，如果验证通过它的值是undefined。<!-- /react-text --><br></span></p><div class="code_view"><pre class=" line-numbers language-javascript"><code id="codeview_1" class=" language-javascript">
	<span class="token keyword">class</span> <span class="token class-name">Home</span><span class="token punctuation">{</span>
		<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			
		<span class="token punctuation">}</span>
		<span class="token function">getHome</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span>res<span class="token punctuation">,</span>next<span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token comment" spellcheck="true">//判断验证是否通过，不通过返回false</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>_typeError<span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token comment" spellcheck="true">//不通过</span>
				res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"false"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"hello world"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre></div></div><div class="ta-content-path"><h3 id="ver指定req.params验证2"><!-- react-text: 679 -->最后<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></h3><p><span><!-- react-text: 683 -->你可以验证所有在req上的值，headers、query、body、fields等<!-- /react-text --><br></span></p><div></div></div></div></div></div><div><div id="init" class="ta-title"><!-- react-text: 688 -->ting_init初始化函数<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></div><div class="ta-content"><div><!-- react-text: 692 -->在一个routes定义好之后。你需要一个函数初始化router，然后调用ting()方法<!-- /react-text --><br></div><div><h2 id="initinit" style="color: rgb(255, 144, 0);">init</h2><div class="ta-content-path"><h3 id="initinit0"><!-- react-text: 698 --><!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></h3><p><span><!-- react-text: 702 -->假设我们的routes已经配置好。<!-- /react-text --><br></span></p><div class="code_view"><pre class=" line-numbers language-javascript"><code id="codeview_0" class=" language-javascript">
	
	<span class="token keyword">var</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
		<span class="token comment" spellcheck="true">//routes配置 ...</span>
	<span class="token punctuation">]</span>
	<span class="token comment" spellcheck="true">/************************一切配置都已准备好************************/</span>
	<span class="token keyword">var</span> ting_init <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>init<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">init</span><span class="token punctuation">(</span>routes<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre></div></div></div></div></div><div><div id="ting" class="ta-title"><!-- react-text: 709 -->ting(req,ting_init,package)<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></div><div class="ta-content"><div><!-- react-text: 713 -->最后，调用ting方法生成router。对应的参数分别为<!-- /react-text --><br></div><div><!-- react-text: 716 -->req:express()<!-- /react-text --><br></div><div><!-- react-text: 719 -->ting_init:初始化函数<!-- /react-text --><br></div><div><!-- react-text: 722 -->package:package.json的引用<!-- /react-text --><br></div></div></div><div><div id="doc_mr" class="ta-title"><!-- react-text: 726 -->doc生成<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></div><div class="ta-content"><div><!-- react-text: 730 -->生成文档发生在应用启动时，如果配置了的话，生成文档内置了两个方法html、json，你也可以自定义自己的文档。<!-- /react-text --><br></div><div><h2 id="doc_mr配置" style="color: rgb(255, 144, 0);">配置</h2><div class="ta-content-path"><h3 id="doc_mr配置0"><!-- react-text: 736 -->在package中配置doc<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></h3><p><span><!-- react-text: 740 --><!-- /react-text --><br></span></p><div class="code_view"><pre class=" line-numbers language-javascript"><code id="codeview_0" class=" language-javascript">
	<span class="token comment" spellcheck="true">//在page中配置doc</span>
	<span class="token punctuation">{</span>
		<span class="token string">"doc"</span><span class="token punctuation">:</span><span class="token punctuation">{</span>
		    <span class="token string">"path"</span><span class="token punctuation">:</span> <span class="token string">"./doc/"</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">//必填项</span>
		    <span class="token string">"files"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>  <span class="token comment" spellcheck="true">//必填项，可为空</span>
		      <span class="token string">"html"</span><span class="token punctuation">,</span>		
		      <span class="token string">"json"</span><span class="token punctuation">,</span>
		      <span class="token string">"test"</span>
		    <span class="token punctuation">]</span>
		  <span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre></div></div><div class="ta-content-path"><h3 id="doc_mr配置1"><!-- react-text: 747 -->path<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></h3><p><span><!-- react-text: 751 -->参数由于json限制，需要在引用package后转换成绝对路径，当然如果你直接填绝对路径就不需要了<!-- /react-text --><br></span></p><div class="code_view"><pre class=" line-numbers language-javascript"><code id="codeview_1" class=" language-javascript">
	<span class="token comment" spellcheck="true">//引入_package</span>
<span class="token keyword">var</span> _package <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./package.json"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	_package<span class="token punctuation">.</span>doc<span class="token punctuation">.</span>path <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span>_package<span class="token punctuation">.</span>doc<span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span></span></code></pre></div></div></div><div><h2 id="doc_mrhtml" style="color: rgb(255, 144, 0);">html</h2><div class="ta-content-path"><h3 id="doc_mrhtml0"><!-- react-text: 760 -->生成html文档<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></h3><p><span><!-- react-text: 764 -->将在doc.path指定的路径生成文档，这个文档的样式与本api一致，源码将在后面给出。<!-- /react-text --><br></span></p><div></div></div></div><div><h2 id="doc_mrjson" style="color: rgb(255, 144, 0);">json</h2><div class="ta-content-path"><h3 id="doc_mrjson0"><!-- react-text: 771 -->生成json文档<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></h3><p><span><!-- react-text: 775 -->将在doc.path指定的路径生成文档,这是一个json文件<!-- /react-text --><br></span></p><div></div></div></div><div><h2 id="doc_mr自定义文档" style="color: rgb(255, 144, 0);">自定义文档</h2><div class="ta-content-path"><h3 id="doc_mr自定义文档0"><!-- react-text: 782 -->你可以自定义文档<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></h3><p><span><!-- react-text: 786 -->由于json限制，需要在引用package后加载，这里要注意的是，定义之后，你还需要在path的files中配置对应的名称，比如下面这个test。<!-- /react-text --><br></span></p><div class="code_view"><pre class=" line-numbers language-javascript"><code id="codeview_0" class=" language-javascript">
<span class="token comment" spellcheck="true">//引入_package</span>
<span class="token keyword">var</span> _package <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./package.json"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	_package<span class="token punctuation">.</span>doc<span class="token punctuation">.</span>addFiles <span class="token operator">=</span> <span class="token punctuation">{</span>
		test<span class="token punctuation">:</span><span class="token keyword">function</span><span class="token punctuation">(</span>doc<span class="token punctuation">,</span>opt<span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token comment" spellcheck="true">//返回doc对象</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>doc<span class="token punctuation">)</span><span class="token punctuation">;</span>
			
		<span class="token punctuation">}</span>
	<span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre></div></div></div></div></div><div><div id="kuozhan" class="ta-title"><!-- react-text: 793 -->扩展<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></div><div class="ta-content"><div><!-- react-text: 797 -->ting.js用法扩展<!-- /react-text --><br></div><div><h2 id="kuozhan多人开发" style="color: rgb(255, 144, 0);">多人开发</h2><div class="ta-content-path"><h3 id="kuozhan多人开发0"><!-- react-text: 803 -->利用router配置文件的机制<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></h3><p><span><!-- react-text: 807 -->你可以将router配置文件作为分发配置，<!-- /react-text --><br></span><span><!-- react-text: 810 -->开发a负责分支/page下的页面。<!-- /react-text --><br></span><span><!-- react-text: 813 -->开发b负责分支/hello下的页面<!-- /react-text --><br></span><span><!-- react-text: 816 -->分别开辟两份class分支。开发完成后再合并。<!-- /react-text --><br></span></p><div></div></div></div><div><h2 id="kuozhan工具类" style="color: rgb(255, 144, 0);">工具类</h2><div class="ta-content-path"><h3 id="kuozhan工具类0"><!-- react-text: 823 -->class的存在引发了更多可能<!-- /react-text --><span style="color: rgb(255, 144, 0);"></span></h3><p><span><!-- react-text: 827 -->1.extends关键字可以实现继承<!-- /react-text --><br></span><span><!-- react-text: 830 -->2.通过继承可以实现工具类。<!-- /react-text --><br></span></p><div class="code_view"><pre class=" line-numbers language-javascript"><code id="codeview_0" class=" language-javascript">
	<span class="token keyword">class</span> <span class="token class-name">Util</span><span class="token punctuation">{</span>
		<span class="token function">print</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">{</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">class</span> <span class="token class-name">Home</span> <span class="token keyword">extends</span> <span class="token class-name">Util</span><span class="token punctuation">{</span>
		<span class="token function">getHome</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span>res<span class="token punctuation">,</span>next<span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">new</span> <span class="token class-name">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getHome</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre></div></div></div></div></div></div>


