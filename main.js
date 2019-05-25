    // getElementByClass gives an HTMLCollection and not an array.
    const collapsiblesCollection = document.getElementsByClassName("collapsible");
    // spread the collection to an array
    const collapsibles = [...collapsiblesCollection];

    // Add event listeners to all collapsible buttons
    collapsibles.forEach((coll) => {
      coll.addEventListener("click", () => {
        // run through array to check if another button is active
        collapsibles.forEach((otherColl) => {
          if(coll !== otherColl && otherColl.classList.contains("active")) {
            // close the other collabsible
            otherColl.classList.toggle("active");
            const otherContent = otherColl.nextElementSibling;
            if (otherContent.style.maxHeight) {
              otherContent.style.maxHeight = null;
            }
          }
        });
        // open or close the collabsible we clicked
        coll.classList.toggle("active");
        const content = coll.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    });

  //NAV-BAR BACKGROUND ON SCROLL
    window.addEventListener('scroll', function(e) {
      const nav = document.getElementById('navbar-web');
      if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
        nav.classList.add('nav-colored');
        nav.classList.remove('nav-transparent');
      } else {
        nav.classList.add('nav-transparent');
        nav.classList.remove('nav-colored');
      }
    });
