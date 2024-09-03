$(document).ready(() => {
  const params = new URLSearchParams(window.location.search);

  const pId = params.get("productId");

  const basket = JSON.parse(localStorage.getItem('data')) || []

  $.getJSON(
    `https://5d76bf96515d1a0014085cf9.mockapi.io/product/${pId}`,
    (productData) => {
      var container = document.getElementById("container");
      var imgPreview = document.createElement("div");
      // imgPreview.classList.add('imgPreview')
      imgPreview.id = "leftImgPreview";
      var mainPreview = document.createElement("img");
      mainPreview.src = productData.preview;

      var leftContainer = document.createElement("div");
      // leftContainer.classList.add('leftContainer')
      leftContainer.id = "leftContainer";
      var ProductHeading = document.createElement("h1");
      ProductHeading.innerText = productData.name;

      var brand = document.createElement("h3");
      brand.innerText = productData.brand;
      var price = document.createElement("h3");

      price.innerText = "Price: Rs " + productData.price;

      var description = document.createElement("h3");
      description.innerText = "Description";
      var info = document.createElement("p");
      info.innerText = productData.description;

      var pHeading = document.createElement("h3");
      pHeading.innerText = "Product Preview";

      var PdtPreview = document.createElement("div");
      PdtPreview.id = "pdtPreview";

      for (let i = 0; i < productData.photos.length; i++) {
        var preview = productData.photos[i];
        var smallImg = document.createElement("img");
        smallImg.id = "smallImgs";
        smallImg.src = preview;
        PdtPreview.append(smallImg);

        smallImg.addEventListener("click", onClick);

        function onClick(e) {
          let src = e.target.src;
          mainPreview.src = src;

          let activeElement = document.getElementsByClassName("active");
          activeElement[0].classList.remove("active");
          e.target.classList.add("active");
        }
        if (i == 0) {
          smallImg.classList.add("active");
        }
      }

      var addToCart = document.createElement("button");
      addToCart.innerText = `Add to Cart`;
      addToCart.id = "cartBtn";
      addToCart.dataset.item = productData.id;

      container.append(imgPreview, leftContainer);
      imgPreview.append(mainPreview);
      leftContainer.append(
        ProductHeading,
        brand,
        price,
        description,
        info,
        pHeading,
        PdtPreview,
        addToCart
      );

      $("#cartBtn").on("click", function (id) {
        let search = basket.find((x) => x.id === productData.id)
        if (search === undefined) {
          basket.push({
            id: productData.id,
            qty: 1
          })
        } else {
          search.qty += 1
        }
        // console.log(basket);
        calculation()
        localStorage.setItem('data', JSON.stringify(basket))

      });

      let calculation = () => {
        const cartIcon = $('#itemAmt').text(basket.map((x) => x.qty).reduce((x, y) => x + y, 0))

      }

    }
  ).fail(() => {
    console.error(`Error fetching data: ${error}`);
    // handle specific error, e.g., 404 or 500
    if (xhr.status === 404) {
      alert("Resource not found");
    } else {
      alert("An unexpected error occurred");
    }
  });
});
