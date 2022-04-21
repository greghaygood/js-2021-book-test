(function() {

    window.Tooltip = (function() {

        function handleMouseOver(evt) {
            // console.log('mouseover', evt.target)

            // const rect = evt.target.getBoundingClientRect();

            const tt = evt.target.querySelector('.tooltip-info');
            if (tt) {
                tt.style.display = 'block';           
                // tt.style.top = (rect.y - 300) + 'px';
                tt.classList.add("visible");
            }
        }
        
        function handleMouseOut(evt) {
            // console.log('mouseout', evt.target)

            const tt = evt.target.querySelector('.tooltip-info');
            if (tt) {
                tt.classList.remove("visible");
                tt.style.display = 'none';
            }
        }

        function setupTooltip(element, index, options) {
            const ttData = element.dataset;

            // combine values from multiple sources into one object
            // the ES5 way:
            const v5options = Object.assign(
                {
                    color: '#444',
                }, 
                options, 
                ttData);
            console.log("v5options", v5options);
            
            // the ES6 way:
            const v6options = {
                color: '#444',
                fontWeight: 'bold',

                ...options,
                ...ttData,
            }
            console.log("v6options", v6options);

            // const info = element.getAttribute("data-tooltip");
            const info = ttData.tooltip;
            if (info) {
                element.classList.add("tooltip-on");
                if (v6options.color) { 
                    element.style.color = v6options.color
                }
                if (v6options.backgroundColor) {
                    element.style.backgroundColor = v6options.backgroundColor;
                }
                // element.style.left = element.style.left + 100;

                const tooltip = document.createElement("div");
                tooltip.textContent = info;
                tooltip.classList.add("tooltip-info");
    
                element.appendChild(tooltip);

                element.addEventListener("mouseover", handleMouseOver);
                element.addEventListener("mouseout", handleMouseOut);
            }

        }

        function init(selector, options) {
            // console.log("setting up tooltips...", selector)
            /*  
                function doA(paramA, paramB) { ... }
                var doA = function(paramA, paramB) { ... }
                var doA = (paramA, paramB) => { ... }
                var doA = (paramA, paramB) => oneLineFunctionBody()
                var doA = (paramA) => { ... }
                var doA = paramA => { ... }
            */
            document.querySelectorAll(selector).forEach((element, index) => setupTooltip(element, index, options))
        }

        return {
            init: init
        }
    })()

})();