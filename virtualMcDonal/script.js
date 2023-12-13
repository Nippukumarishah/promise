const foodImages ={
    Burgers: 'https://s7d1.scene7.com/is/image/mcdonalds/DC_201907_0005_BigMac_832x472:1-4-product-tile-desktop',
    Fries: 'https://s7d1.scene7.com/is/image/mcdonalds/DC_202002_6050_SmallFrenchFries_Standing_832x472:1-4-product-tile-desktop',
    Brownieandhotfudge: 'https://s7d1.scene7.com/is/image/mcdonalds/DC_201907_0337_HotFudgeSundae_832x472:1-4-product-tile-desktop',
    Beverages: 'https://s7d1.scene7.com/is/image/mcdonalds/DC_202112_0521_MediumCoke_Glass_832x472:1-4-product-tile-desktop',
    Coffee: 'https://s7d1.scene7.com/is/image/mcdonalds/DC_201906_2731_MediumMocha_Glass_A1_HL_832x472:1-4-product-tile-desktop',
    Mcchiken: 'https://s7d1.scene7.com/is/image/mcdonalds/DC_201909_4314_McChicken_832x472:1-4-product-tile-desktop',
    
  };
  const getRandomSeconds = () => Math.floor(Math.random() * (10 - 3 + 1) + 3) * 1000;
  const placeOrder = () => {
    const foodItems = document.querySelectorAll('input[name="foodItem"]:checked');
    if (foodItems.length === 0) {
      alert('Please select at least one food item.');
      return;
    }
    const orderDetails = document.getElementById('orderDetails');
    orderDetails.style.display = 'none';
    const orderStatus = document.getElementById('orderStatus');
    orderStatus.innerText = 'Placing order...';
    const foodImagesContainer = document.getElementById('foodImages');
    foodImagesContainer.innerHTML = '';  // Clear previous content
    const orderPromises = Array.from(foodItems).map(item => {
      const foodItem = item.value;
      return new Promise((resolve, reject) => {
       const processingTime = getRandomSeconds();
        setTimeout(() => {
          resolve({ foodItem, orderId: Math.floor(Math.random() * 1000) + 1 });
        }, processingTime);
      });
    });
   Promise.all(orderPromises)
    .then(completedOrders => {
      orderStatus.innerText = 'Orders complete!';
      completedOrders.forEach(({ foodItem, orderId }) => {
        const img = document.createElement('img');
        img.src = foodImages[foodItem];
        img.alt = foodItem;
        img.className="img-center"
        const orderInfo = document.createElement('div');
        orderInfo.innerText = `Order ID: ${orderId}`;
        const orderContainer = document.createElement('div');
        orderContainer.appendChild(orderInfo);
        orderContainer.appendChild(img);
        foodImagesContainer.appendChild(orderContainer);
      });
      orderDetails.style.display = 'block';
    });
  }