(function() {

    /**
     * Will identify all H2s, create links for each, and then
     * add a table of contents to the DOM
     */
    window.Outliner = (function() {

        function makeLinks(h2_array) {
            h2_array.forEach((h2, ndx) => {
                h2.setAttribute("id", `section-${ndx}`) // "section-" + ndx
            })
        }

        function setupToC(h2_array) {

            const ul = document.createElement("ul");
            ul.classList.add("toc");

            h2_array.forEach((h2, ndx) => {
                const li = document.createElement("li");
                const a = document.createElement("a");
                a.setAttribute("href", `#section-${ndx}`);
                a.textContent = h2.textContent;

                li.appendChild(a);
                ul.appendChild(li);
            });

            return ul;
        }

        function doTheThing(selector) {
            console.log('init', selector);

            const element = document.querySelector(selector);
            const h2s = element.querySelectorAll("h2");

            makeLinks(h2s);

            const toc = setupToC(h2s);
            element.prepend(toc);
        }

        return {
            init: doTheThing
        }

    })();
    
})();