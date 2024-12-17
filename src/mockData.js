export const pointData = [
    { id: 1, lat: 38.8951, lng: -77.0364, title: "Washington DC" },
    { id: 2, lat: 38.8816, lng: -77.0910, title: "Arlington, VA" },
    { id: 3, lat: 40.7128, lng: -74.0060, title: "New York City, NY" },
    { id: 4, lat: 34.0522, lng: -118.2437, title: "Los Angeles, CA" },
    { id: 5, lat: 41.8781, lng: -87.6298, title: "Chicago, IL" },
    { id: 6, lat: 29.7604, lng: -95.3698, title: "Houston, TX" },
    { id: 7, lat: 39.7392, lng: -104.9903, title: "Denver, CO" },
  ];
  

export const polygonData = [
    {
      id: "montana",
      name: "Montana",
      density: 6.85, 
      coordinates: [
        [
          [49, -116],
          [49, -104],
          [45, -104],
          [45, -116],
          [49, -116],
        ],
      ],
    },
    {
      id: "california",
      name: "California",
      density: 253.9,
      coordinates: [
        [
          [42, -124.4],
          [32.5, -124.4],
          [32.5, -114.1],
          [42, -114.1],
          [42, -124.4],
        ],
      ],
    },
    {
      id: "new-york",
      name: "New York",
      density: 421.0,
      coordinates: [
        [
          [45.0, -79.76259],
          [40.5, -79.76259],
          [40.5, -71.8527],
          [45.0, -71.8527],
          [45.0, -79.76259],
        ],
      ]
    },
  ];


  export const multipolygonData = [
    {
      id: 1,
      name: "Multi-Region Park Zone",
      coordinates: [
        // Region 1
        [
          [
            [39.7800, -104.9000],
            [39.7800, -104.8700],
            [39.7500, -104.8700],
            [39.7500, -104.9000],
            [39.7800, -104.9000],
          ],
        ],
        // Region 2
        [
          [
            [39.7200, -104.9500],
            [39.7200, -104.9200],
            [39.6900, -104.9200],
            [39.6900, -104.9500],
            [39.7200, -104.9500],
          ],
        ],
      ],
    },
    {
      id: 2,
      name: "Island Regions - Houston",
      coordinates: [
        // Region 1
        [
          [
            [29.7900, -95.4100],
            [29.7900, -95.3800],
            [29.7600, -95.3800],
            [29.7600, -95.4100],
            [29.7900, -95.4100],
          ],
        ],
        // Region 2
        [
          [
            [29.7300, -95.4500],
            [29.7300, -95.4200],
            [29.7000, -95.4200],
            [29.7000, -95.4500],
            [29.7300, -95.4500],
          ],
        ],
      ],
    },
  ];