const restaurantData = [
    {
        "id": 1,
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMHdlc3Rlcm58ZW58MHx8MHx8fDA%3D",
        "name": "Western Grill House",
        "averagePrice": "$$",
        "averageRating": 4.3,
        "totalReviews": 120,
        "foodCategory": ["Steaks", "Burgers", "Salads", "Sandwiches"],
        "phoneNumber": "+1234567890",
        "location": "123 Main Street, City A, Country",
        "mapLocation": {
          "latitude": 40.7128,
          "longitude": -74.006
        }
      },
      {
        "id": 2,
        "image": "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc3RhdXJhbnQlMjB3ZXN0ZXJufGVufDB8fDB8fHww",
        "name": "BBQ Haven",
        "averagePrice": "$$$",
        "averageRating": 4.8,
        "totalReviews": 280,
        "foodCategory": ["BBQ Ribs", "Grilled Chicken", "Pulled Pork", "Cornbread"],
        "phoneNumber": "+1987654321",
        "location": "456 Broad Street, City B, Country",
        "mapLocation": {
          "latitude": 34.0522,
          "longitude": -118.2437
        }
      },
      {
        "id": 3,
        "image": "https://images.unsplash.com/photo-1474898856510-884a2c0be546?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudCUyMHdlc3Rlcm58ZW58MHx8MHx8fDA%3D",
        "name": "Burger Point",
        "averagePrice": "$",
        "averageRating": 4.0,
        "totalReviews": 90,
        "foodCategory": ["Burgers", "Fries", "Milkshakes"],
        "phoneNumber": "+1122334455",
        "location": "789 Center Street, City C, Country",
        "mapLocation": {
          "latitude": 51.5074,
          "longitude": -0.1278
        }
      },
      {
        "id": 4,
        "image": "https://images.unsplash.com/photo-1526234362653-3b75a0c07438?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHJlc3RhdXJhbnQlMjB3ZXN0ZXJufGVufDB8fDB8fHww",
        "name": "Smokehouse Grill",
        "averagePrice": "$$$",
        "averageRating": 4.5,
        "totalReviews": 150,
        "foodCategory": ["Smoked Brisket", "Ribs", "Pulled Pork", "Mac and Cheese"],
        "phoneNumber": "+1122334455",
        "location": "789 Oak Street, City D, Country",
        "mapLocation": {
          "latitude": 35.6895,
          "longitude": 139.6917
        }
      },
      {
        "id": 5,
        "image": "https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxyZXN0YXVyYW50JTIwd2VzdGVybnxlbnwwfHwwfHx8MA%3D%3D",
        "name": "SteakHouse Central",
        "averagePrice": "$$$$",
        "averageRating": 4.9,
        "totalReviews": 300,
        "foodCategory": ["Steaks", "Seafood", "Salads", "Cocktails"],
        "phoneNumber": "+9876543210",
        "location": "101 Pine Street, City E, Country",
        "mapLocation": {
          "latitude": 37.7749,
          "longitude": -122.4194
        }
      },
      {
        "id": 6,
        "image": "https://images.unsplash.com/photo-1520209268518-aec60b8bb5ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxyZXN0YXVyYW50JTIwd2VzdGVybnxlbnwwfHwwfHx8MA%3D%3D",
        "name": "Grill Master's Delight",
        "averagePrice": "$$",
        "averageRating": 4.2,
        "totalReviews": 80,
        "foodCategory": ["Grilled Chicken", "Burgers", "Steak Fajitas"],
        "phoneNumber": "+1122334455",
        "location": "456 Maple Street, City F, Country",
        "mapLocation": {
          "latitude": 40.7128,
          "longitude": -74.006
        }
      },
      {
        "id": 7,
        "image": "https://images.unsplash.com/photo-1521917441209-e886f0404a7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHxyZXN0YXVyYW50JTIwd2VzdGVybnxlbnwwfHwwfHx8MA%3D%3D",
        "name": "Smoke & Grill Haven",
        "averagePrice": "$$$",
        "averageRating": 4.6,
        "totalReviews": 180,
        "foodCategory": ["Smoked Brisket", "Pulled Pork", "Ribs", "Mac and Cheese"],
        "phoneNumber": "+1122334455",
        "location": "789 Oak Street, City I, Country",
        "mapLocation": {
          "latitude": 37.7749,
          "longitude": -122.4194
        }
      },
      {
        "id": 8,
        "image": "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgwfHxyZXN0YXVyYW50JTIwd2VzdGVybnxlbnwwfHwwfHx8MA%3D%3D",
        "name": "The Rib Shack",
        "averagePrice": "$$",
        "averageRating": 4.3,
        "totalReviews": 120,
        "foodCategory": ["BBQ Ribs", "Burgers", "Fries", "Onion Rings"],
        "phoneNumber": "+1122334455",
        "location": "123 Main Street, City G, Country",
        "mapLocation": {
          "latitude": 34.0522,
          "longitude": -118.2437
        }
      },
      {
        "id": 9,
        "image": "https://images.unsplash.com/photo-1504940892017-d23b9053d5d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE1fHxyZXN0YXVyYW50JTIwd2VzdGVybnxlbnwwfHwwfHx8MA%3D%3D",
        "name": "Famous Grill House",
        "averagePrice": "$$",
        "averageRating": 4.5,
        "totalReviews": 300,
        "foodCategory": ["BBQ", "Burgers", "Grilled Steaks", "Salads"],
        "phoneNumber": "+1122334455",
        "location": "321 Pine Street, City J, Country",
        "mapLocation": {
          "latitude": 40.7128,
          "longitude": -74.0060
        }
      },
      {
        "id": 10,
        "image": "https://images.unsplash.com/photo-1532634781-dc90b4952f08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjIyfHxyZXN0YXVyYW50JTIwd2VzdGVybnxlbnwwfHwwfHx8MA%3D%3D",
        "name": "Smokestack & Grill",
        "averagePrice": "$$$",
        "averageRating": 4.8,
        "totalReviews": 400,
        "foodCategory": ["Smoked Brisket", "Ribs", "Pulled Pork", "Grilled Chicken"],
        "phoneNumber": "+9876543210",
        "location": "567 Cedar Street, City K, Country",
        "mapLocation": {
          "latitude": 34.0522,
          "longitude": -118.2437
        }
      },
];

export { restaurantData };