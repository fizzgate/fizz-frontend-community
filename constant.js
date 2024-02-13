var Constant = (function(){
    return {
        document:{
            plugins:{
                openDocument:{
                    "name" : "openDocument",
                    "entry": NODE_ENV === 'development' ? "//localhost:1890/module/open-document/" : '/module/open-document/index.html'
                }
            }
        },
        node:{
            plugins:{
                // mysql:{
                //     name:"mysql",
                //     entry: "//localhost:1890",
                //     nodeSize:{width:140, height:80},
                //     panelItem: {
                //         text: 'mysql',
                //         type: 'mysql',
                //         class: 'node-mysql',
                //         style: "background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAAH6ji2bAAAABGdBTUEAALGPC/xhBQAAAOVJREFUOBGtVMENwzAIjKP++2026ETdpv10iy7WFbqFyyW6GBywLCv5gI+Dw2Bluj1znuSjhb99Gkn6QILDY2imo60p8nsnc9bEo3+QJ+AKHfMdZHnl78wyTnyHZD53Zzx73MRSgYvnqgCUHj6gwdck7Zsp1VOrz0Uz8NbKunzAW+Gu4fYW28bUYutYlzSa7B84Fh7d1kjLwhcSdYAYrdkMQVpsBr5XgDGuXwQfQr0y9zwLda+DUYXLaGKdd2ZTtvbolaO87pdo24hP7ov16N0zArH1ur3iwJpXxm+v7oAJNR4JEP8DoAuSFEkYH7cAAAAASUVORK5CYII=');background-size: cover;}"
                //     },
                // }
            }
        }
    }
})();