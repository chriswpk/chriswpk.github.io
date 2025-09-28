import"../chunks/DsnmJJEf.js";import{i as h}from"../chunks/B9Cnf6MI.js";import{o as x}from"../chunks/VJ5-Hy5n.js";import{F as w,G as b,I as t,J as i,a as y,K as S,$ as E,M as n,O as C}from"../chunks/8RpJur3B.js";import{d as D}from"../chunks/3R2fBcEG.js";import{h as k}from"../chunks/B9iyDKzr.js";var M=e=>e.preventDefault(),_=e=>e.preventDefault(),L=()=>goFullScreen(),B=b(`<main id="love-page"><header class="svelte-1vgb52r"><a href="/" class="svelte-1vgb52r">Back</a></header> <center><div class="love-div svelte-1vgb52r"><canvas id="loadingCanvas" width="800" height="600"></canvas> <canvas id="canvas" class="svelte-1vgb52r"></canvas></div></center> <footer class="svelte-1vgb52r"><p>Built with <a href="https://github.com/Davidobot/love.js" class="svelte-1vgb52r">love.js</a> <button>Go Fullscreen</button><br/>Hint: Reload the page if
			screen is blank</p></footer></main>`);function j(e,g){w(g,!1),x(()=>{const a=document.getElementById("love-page"),c=document.createElement("script");c.type="text/javascript",c.innerHTML=`
            function goFullScreen() {
                var canvas = document.getElementById("canvas");
                if (canvas.requestFullScreen) canvas.requestFullScreen();
                else if (canvas.webkitRequestFullScreen)
                    canvas.webkitRequestFullScreen();
                else if (canvas.mozRequestFullScreen) canvas.mozRequestFullScreen();
            }
            function FullScreenHook() {
                var canvas = document.getElementById("canvas");
                canvas.width =
                    window.innerWidth ||
                    document.documentElement.clientWidth ||
                    document.body.clientWidth;
                canvas.height =
                    window.innerHeight ||
                    document.documentElement.clientHeight ||
                    document.body.clientHeight;
            }
            let loadingContext = document
                .getElementById("loadingCanvas")
                .getContext("2d");
            function drawLoadingText(text) {
                var canvas = loadingContext.canvas;

                loadingContext.fillStyle = "rgb(142, 195, 227)";
                loadingContext.fillRect(
                    0,
                    0,
                    canvas.scrollWidth,
                    canvas.scrollHeight
                );

                loadingContext.font = "2em arial";
                loadingContext.textAlign = "center";
                loadingContext.fillStyle = "rgb( 11, 86, 117 )";
                loadingContext.fillText(
                    text,
                    canvas.scrollWidth / 2,
                    canvas.scrollHeight / 2
                );

                loadingContext.fillText(
                    "Powered By Emscripten.",
                    canvas.scrollWidth / 2,
                    canvas.scrollHeight / 4
                );
                loadingContext.fillText(
                    "Powered By LÖVE.",
                    canvas.scrollWidth / 2,
                    (canvas.scrollHeight / 4) * 3
                );
            }

            window.onload = function () {
                window.focus();
            };
            window.onclick = function () {
                window.focus();
            };

            window.addEventListener(
                "keydown",
                function (e) {
                    // space and arrow keys
                    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
                        e.preventDefault();
                    }
                },
                false
            );
            var Module = {
                arguments: ["./game.love"],
                INITIAL_MEMORY: 16777216,
                printErr: console.error.bind(console),
                canvas: (function () {
                    var canvas = document.getElementById("canvas");

                    // As a default initial behavior, pop up an alert when webgl context is lost. To make your
                    // application robust, you may want to override this behavior before shipping!
                    // See http://www.khronos.org/registry/webgl/specs/latest/1.0/#5.15.2
                    canvas.addEventListener(
                        "webglcontextlost",
                        function (e) {
                            alert(
                                "WebGL context lost. You will need to reload the page."
                            );
                            e.preventDefault();
                        },
                        false
                    );

                    return canvas;
                })(),
                setStatus: function (text) {
                    if (text) {
                        drawLoadingText(text);
                    } else if (Module.remainingDependencies === 0) {
                        document.getElementById("loadingCanvas").style.display =
                            "none";
                        document.getElementById("canvas").style.visibility =
                            "visible";
                    }
                },
                totalDependencies: 0,
                remainingDependencies: 0,
                monitorRunDependencies: function (left) {
                    this.remainingDependencies = left;
                    this.totalDependencies = Math.max(this.totalDependencies, left);
                    Module.setStatus(
                        left
                            ? "Preparing... (" +
                                (this.totalDependencies - left) +
                                "/" +
                                this.totalDependencies +
                                ")"
                            : "All downloads complete."
                    );
                },
            };
            Module.setStatus("Downloading...");
            window.onerror = function (event) {
                // TODO: do not warn on ok events like simulating an infinite loop or exitStatus
                Module.setStatus("Exception thrown, see JavaScript console");
                Module.setStatus = function (text) {
                    if (text) Module.printErr("[post-exception status] " + text);
                };
            };

            var applicationLoad = function (e) {
                Love(Module);
            };`,a.appendChild(c);const r=document.createElement("script");r.type="text/javascript",r.src="/assets/love/shootinghell/game.js",a.appendChild(r);const o=document.createElement("script");o.type="text/javascript",o.src="/assets/love/shootinghell/love.js",o.onload=applicationLoad.bind(this),a.appendChild(o)}),h();var l=B();k(a=>{E.title="Shooting Hell - LOVE2D"});var s=i(t(l),2),d=t(s),v=t(d);v.__contextmenu=[M];var m=i(v,2);m.__contextmenu=[_],n(d),n(s);var u=i(s,2),p=t(u),f=i(t(p),3);f.__click=[L],C(2),n(p),n(u),n(l),y(e,l),S()}D(["contextmenu","click"]);export{j as component};
