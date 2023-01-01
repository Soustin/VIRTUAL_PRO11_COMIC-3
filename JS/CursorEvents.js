AFRAME.registerComponent("cursor-listener", {
  schema: {
    selectedItemId: { default: "", type: "string" },
  },
  init: function () {
    this.handleClickEvents();
    this.handleMouseEnterEvents();
    this.handleMouseLeaveEvents();
  },

  // update: function () {
  //   const fadeBackgroundEl = document.querySelector('#fadeBackground');

  //   //check if the infoBanner plane already has comic text info child entity
  //   //if so remove the child to avoid the overlapping of the text
  //   c = fadeBackgroundEl.children;
  //   if(c.length > 0) {
  //     var i;
  //     for(i = 0; i < c.length; i++) {
  //       fadeBackgroundEl.removeChild(c[i]);
  //     }
  //   } else {
  //     this.handleClickEvents();
  //   }
  // },

  handleClickEvents: function() {
    this.el.addEventListener("click", evt =>{
      //check the selected item to set the "info-banner" component on the plane
      if (selectedItemId) {
        fadeBackgroundEl.setAttribute("visible", true);
        fadeBackgroundEl.setAttribute("info-banner", {
          itemId: selectedItemId,
        });
        titleEl.setAttribute("visible", false);
        cursorEl.setAttribute("position", {x: 0, y: 0, z: -1});
        cursorEl.setAttribute("geometry", {
          radiusInner: 0.03,
          radiusOuter: 0.04,
        })
      } else {
        //else make the plane invisible
        fadeBackgroundEl.setAttribute("visible", false);
        titleEl.setAttribute("visible", true);
        cursorEl.setAttribute("position", {x: 0, y: 0, z: -3});
        cursorEl.setAttribute("geometry", {
          radiusInner: 0.08,
          radiusOuter: 0.12,
        })
      }
    //   const comicsContainer = document.querySelector("#comics-container");
    //   const {state} = comicsContainer.getAttribute("tour");
    //   if (state === "comics-list") {
    //     const id = this.el.getAttribute("id");
    //     const placesId = [
    //       "marvel-comics-1",
    //       "the-fantastic-four-1",
    //       "avengers-1",
    //       "howard-the-duck-1"
    //     ];
    //     if (placesId.includes(id)) {
    //       placesContainer.setAttribute("tour", {
    //         state: "view",
    //         selectedCard: id
    //       });
    //     }
    // });
    })
  },
  handlePlacesListState: function () {
    const id = this.el.getAttribute("id");
    const comicsId = ["marvel-comics-1", "the-fantastic-four-1", "avengers-1", "howard-the-duck-1"];
    if (comicsId.includes(id)) {
      const comicContainer = document.querySelector("#comics-container");
      comicContainer.setAttribute("cursor-listener", {
        selectedItemId: id,
      });
      this.el.setAttribute("material", {
        color: "#D76B30",
        opacity: 1,
      });
    }
  },
  handleMouseEnterEvents: function () {
    //Cursor 'mouseenter' Events
    this.el.addEventListener("mouseenter", () => {
      this.handlePlacesListState();
    });
  },
  handleMouseLeaveEvents: function () {
    //Cursor 'mouseleave' Events
    this.el.addEventListener("mouseleave", () => {
      const { selectedItemId } = this.data;
      if (selectedItemId) {
        const el = document.querySelector(`#${selectedItemId}`);
        const id = el.getAttribute("id");
        if (id == selectedItemId) {
          el.setAttribute("material", {
            color: "#0077CC",
            opacity: 1,
          });
        }
      }
    });
  },
});
  