AFRAME.registerComponent("tour", {
    schema: {
        selectedItemId: { default: "", type: "string" },
    },
    init:function(){
        this.comicsContainer = this.el;
        this.createCards();
    },
    createCards:function(){
        const thumbNailsRef = [
            {
                id: "marvel-comics-1",
                title: "Marvel Comics #1",
                url:"./assets/thumbnails/MarvelComics1.jpg",
            },
            {
                id: "the-fantastic-four-1",
                title: "The Fantastic Four #1",
                url:"./assets/thumbnails/MarvelComics2.jpg",
            },
            {
                id: "avengers-1",
                title: "Avengers (1963) #1",
                url:"./assets/thumbnails/MarvelComics3.jpg",
            },
            {
                id: "howard-the-duck-1",
                title: "Howard The Duck #1",
                url:"./assets/thumbnails/MarvelComics4.jpg",
            }
        ];
        
        
        let previousXPosition = -60;

        for (var item of thumbNailsRef) {
        const posX = previousXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        previousXPosition = posX;

        // Border Element
        const borderEl = this.createBorder(position, item.id);

        // Thumbnail Element
        const thumbNail = this.createThumbNail(item);
        borderEl.appendChild(thumbNail);

        // Title Text Element
        const titleEl = this.createTitleEl(position, item);
        borderEl.appendChild(titleEl);

        this.comicsContainer.appendChild(borderEl);
        }
    },
    createBorder: function (position, id) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("id", id);
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
        primitive: "box",
        width: 16,
        height: 20.3,
        borderRadius: 10,
        depth: -0.1
        });
        entityEl.setAttribute("position", position);
        // entityEl.setAttribute("material", {
        // color: "#0077CC",
        // opacity: 1,
        // });

        //Add cursor-listener component to the ring border entity to change it's color 
        //On Cursor 'mouseenter' and 'mouseleave' entity
        entityEl.setAttribute("cursor-listener", {});

        return entityEl;
    },
    createThumbNail: function (item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 14,
        height: 18,
        });
        entityEl.setAttribute("material", { src: item.url });

        return entityEl;
    },
    createTitleEl: function (position, item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("text", {
        font: "exo2bold",
        align: "center",
        width: 100,
        fontborder: "50px solid #000000",
        color: "#ffffff",
        padding: "20px 40px",
        value: item.title,
        });
        const elPosition = position;
        elPosition.y = -20;
        entityEl.setAttribute("position", elPosition);
        entityEl.setAttribute("visible", true);
        return entityEl;
    },
})