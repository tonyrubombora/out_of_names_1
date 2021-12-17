TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "id": "panorama_A81980FD_A30C_F1C9_41BF_0445CEE13069",
  "hfovMin": 60,
  "adjacentPanoramas": [
   {
    "backwardYaw": 141.97,
    "panorama": {
     "id": "panorama_AE933D86_A30D_F03B_41C0_D69513F3FE47",
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "backwardYaw": 140.45,
       "panorama": {
        "id": "panorama_A8CEFB75_A30C_D0D8_41E0_D10E12556340",
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "backwardYaw": -28.22,
          "panorama": "this.panorama_AE933D86_A30D_F03B_41C0_D69513F3FE47",
          "yaw": 140.45,
          "distance": 1,
          "class": "AdjacentPanorama"
         },
         {
          "backwardYaw": 95.59,
          "panorama": {
           "id": "panorama_AF27EF00_A314_D037_41DC_267C5941F319",
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "backwardYaw": 11.4,
             "panorama": "this.panorama_A8CEFB75_A30C_D0D8_41E0_D10E12556340",
             "yaw": 95.59,
             "distance": 1,
             "class": "AdjacentPanorama"
            },
            {
             "backwardYaw": -139.17,
             "panorama": "this.panorama_A81980FD_A30C_F1C9_41BF_0445CEE13069",
             "yaw": 11.21,
             "distance": 1,
             "class": "AdjacentPanorama"
            }
           ],
           "class": "Panorama",
           "thumbnailUrl": "media/panorama_AF27EF00_A314_D037_41DC_267C5941F319_t.jpg",
           "hfov": 360,
           "pitch": 0,
           "partial": false,
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_AF27EF00_A314_D037_41DC_267C5941F319_t.jpg",
             "sphere": {
              "levels": [
               {
                "height": 750,
                "width": 1500,
                "url": "media/panorama_AF27EF00_A314_D037_41DC_267C5941F319_hq.jpeg",
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             },
             "overlays": [
              {
               "useHandCursor": true,
               "enabledInCardboard": true,
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "levels": [
                   {
                    "height": 69,
                    "width": 72,
                    "url": "media/panorama_AF27EF00_A314_D037_41DC_267C5941F319_0_HS_1_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 11.21,
                 "hfov": 34.59,
                 "pitch": 1.43
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_AF27DF00_A314_D037_41CB_691041FD82DC",
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_A81980FD_A30C_F1C9_41BF_0445CEE13069, this.camera_B700B8FE_BB09_D3C3_41C0_72E8CC7D4BEC); this.mainPlayList.set('selectedIndex', 0)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "rollOverDisplay": false,
               "items": [
                {
                 "yaw": 11.21,
                 "hfov": 34.59,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "levels": [
                   {
                    "height": 138,
                    "width": 144,
                    "url": "media/panorama_AF27EF00_A314_D037_41DC_267C5941F319_0_HS_1_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": 1.43
                }
               ]
              },
              {
               "useHandCursor": true,
               "enabledInCardboard": true,
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "levels": [
                   {
                    "height": 55,
                    "width": 60,
                    "url": "media/panorama_AF27EF00_A314_D037_41DC_267C5941F319_0_HS_2_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 95.59,
                 "hfov": 29.27,
                 "pitch": 0.96
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_AF27CF01_A314_D039_419B_8C8DA3078177",
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_A8CEFB75_A30C_D0D8_41E0_D10E12556340, this.camera_B70CB8E9_BB09_D3C1_41D9_6B94E6819802); this.mainPlayList.set('selectedIndex', 7)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "rollOverDisplay": false,
               "items": [
                {
                 "yaw": 95.59,
                 "hfov": 29.27,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "levels": [
                   {
                    "height": 111,
                    "width": 121,
                    "url": "media/panorama_AF27EF00_A314_D037_41DC_267C5941F319_0_HS_2_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": 0.96
                }
               ]
              }
             ]
            }
           ],
           "hfovMax": 120,
           "label": "IMG_20201016_101752_358",
           "vfov": 180
          },
          "yaw": 11.4,
          "distance": 1,
          "class": "AdjacentPanorama"
         }
        ],
        "class": "Panorama",
        "thumbnailUrl": "media/panorama_A8CEFB75_A30C_D0D8_41E0_D10E12556340_t.jpg",
        "hfov": 360,
        "pitch": 0,
        "partial": false,
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_A8CEFB75_A30C_D0D8_41E0_D10E12556340_t.jpg",
          "sphere": {
           "levels": [
            {
             "height": 750,
             "width": 1500,
             "url": "media/panorama_A8CEFB75_A30C_D0D8_41E0_D10E12556340_hq.jpeg",
             "class": "ImageResourceLevel"
            }
           ],
           "class": "ImageResource"
          },
          "overlays": [
           {
            "useHandCursor": true,
            "enabledInCardboard": true,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "levels": [
                {
                 "height": 76,
                 "width": 84,
                 "url": "media/panorama_A8CEFB75_A30C_D0D8_41E0_D10E12556340_0_HS_1_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 11.4,
              "hfov": 40.68,
              "pitch": 1.62
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_A8CE9B76_A30C_D0DB_41E0_BF9F6E3B834A",
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_AF27EF00_A314_D037_41DC_267C5941F319, this.camera_B06719FD_BB09_D5C1_41C8_F48DD6122A3A); this.mainPlayList.set('selectedIndex', 8)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": 11.4,
              "hfov": 40.68,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 152,
                 "width": 169,
                 "url": "media/panorama_A8CEFB75_A30C_D0D8_41E0_D10E12556340_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 1.62
             }
            ]
           },
           {
            "useHandCursor": true,
            "enabledInCardboard": true,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "levels": [
                {
                 "height": 65,
                 "width": 70,
                 "url": "media/panorama_A8CEFB75_A30C_D0D8_41E0_D10E12556340_0_HS_2_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 140.45,
              "hfov": 33.23,
              "pitch": -9.04
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_A8CE8B76_A30C_D0DB_41DE_DC395F52E8F3",
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_AE933D86_A30D_F03B_41C0_D69513F3FE47, this.camera_B06959F3_BB09_D5C1_41AE_3D39A7E56127); this.mainPlayList.set('selectedIndex', 6)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": 140.45,
              "hfov": 33.23,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 130,
                 "width": 140,
                 "url": "media/panorama_A8CEFB75_A30C_D0D8_41E0_D10E12556340_0_HS_2_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -9.04
             }
            ]
           }
          ]
         }
        ],
        "hfovMax": 120,
        "label": "IMG_20201016_101631_356",
        "vfov": 180
       },
       "yaw": -28.22,
       "distance": 1,
       "class": "AdjacentPanorama"
      },
      {
       "backwardYaw": 8.45,
       "panorama": "this.panorama_A81980FD_A30C_F1C9_41BF_0445CEE13069",
       "yaw": 141.97,
       "distance": 1,
       "class": "AdjacentPanorama"
      }
     ],
     "class": "Panorama",
     "thumbnailUrl": "media/panorama_AE933D86_A30D_F03B_41C0_D69513F3FE47_t.jpg",
     "hfov": 360,
     "pitch": 0,
     "partial": false,
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_AE933D86_A30D_F03B_41C0_D69513F3FE47_t.jpg",
       "sphere": {
        "levels": [
         {
          "height": 750,
          "width": 1500,
          "url": "media/panorama_AE933D86_A30D_F03B_41C0_D69513F3FE47_hq.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "overlays": [
        {
         "useHandCursor": true,
         "enabledInCardboard": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "height": 88,
              "width": 91,
              "url": "media/panorama_AE933D86_A30D_F03B_41C0_D69513F3FE47_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -28.22,
           "hfov": 43.75,
           "pitch": 0.1
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_AE90ED86_A30D_F03B_41D9_D361EDA014DB",
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_A8CEFB75_A30C_D0D8_41E0_D10E12556340, this.camera_B04D79B1_BB09_D241_41C8_A7156904029F); this.mainPlayList.set('selectedIndex', 7)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": -28.22,
           "hfov": 43.75,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 176,
              "width": 182,
              "url": "media/panorama_AE933D86_A30D_F03B_41C0_D69513F3FE47_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 0.1
          }
         ]
        },
        {
         "useHandCursor": true,
         "enabledInCardboard": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "height": 76,
              "width": 91,
              "url": "media/panorama_AE933D86_A30D_F03B_41C0_D69513F3FE47_0_HS_2_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 141.97,
           "hfov": 43.94,
           "pitch": 0.77
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_AE90CD86_A30D_F03B_41DD_14B5BAB3E799",
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_A81980FD_A30C_F1C9_41BF_0445CEE13069, this.camera_B04939BB_BB09_D241_41CA_00BB8461C77F); this.mainPlayList.set('selectedIndex', 0)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": 141.97,
           "hfov": 43.94,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 153,
              "width": 183,
              "url": "media/panorama_AE933D86_A30D_F03B_41C0_D69513F3FE47_0_HS_2_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 0.77
          }
         ]
        }
       ]
      }
     ],
     "hfovMax": 120,
     "label": "IMG_20201016_101559_355",
     "vfov": 180
    },
    "yaw": 8.45,
    "distance": 1,
    "class": "AdjacentPanorama"
   },
   {
    "backwardYaw": -95.48,
    "panorama": {
     "id": "panorama_BC1F40E6_B713_346F_41D6_C8AE02637D50",
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "backwardYaw": 103.49,
       "panorama": "this.panorama_A81980FD_A30C_F1C9_41BF_0445CEE13069",
       "yaw": -95.48,
       "distance": 1,
       "class": "AdjacentPanorama"
      },
      {
       "backwardYaw": 91.21,
       "panorama": {
        "id": "panorama_9BE2321F_95B7_8AC7_41E1_BF9B7E732A1E",
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "backwardYaw": 1.59,
          "panorama": "this.panorama_BC1F40E6_B713_346F_41D6_C8AE02637D50",
          "yaw": 91.21,
          "distance": 1,
          "class": "AdjacentPanorama"
         }
        ],
        "class": "Panorama",
        "thumbnailUrl": "media/panorama_9BE2321F_95B7_8AC7_41E1_BF9B7E732A1E_t.jpg",
        "hfov": 360,
        "pitch": 0,
        "partial": false,
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_9BE2321F_95B7_8AC7_41E1_BF9B7E732A1E_t.jpg",
          "sphere": {
           "levels": [
            {
             "height": 3456,
             "width": 6912,
             "url": "media/panorama_9BE2321F_95B7_8AC7_41E1_BF9B7E732A1E_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_9BE2321F_95B7_8AC7_41E1_BF9B7E732A1E.jpeg",
             "class": "ImageResourceLevel"
            }
           ],
           "class": "ImageResource"
          },
          "overlays": [
           {
            "useHandCursor": true,
            "enabledInCardboard": true,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "levels": [
                {
                 "height": 200,
                 "width": 186,
                 "url": "media/panorama_9BE2321F_95B7_8AC7_41E1_BF9B7E732A1E_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 91.21,
              "hfov": 44.81,
              "pitch": -11.04
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_98E5B6C5_95B6_8BBB_41D3_8756FB4CAC38",
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_BC1F40E6_B713_346F_41D6_C8AE02637D50, this.camera_B752E95B_BB09_D2C1_41D0_40B74975E286); this.mainPlayList.set('selectedIndex', 1)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": 91.21,
              "hfov": 44.81,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 939,
                 "width": 876,
                 "url": "media/panorama_9BE2321F_95B7_8AC7_41E1_BF9B7E732A1E_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -11.04
             }
            ]
           }
          ]
         }
        ],
        "hfovMax": 120,
        "label": "IMG_20201016_102359_365",
        "vfov": 180
       },
       "yaw": 1.59,
       "distance": 1,
       "class": "AdjacentPanorama"
      },
      {
       "backwardYaw": -93.84,
       "panorama": {
        "id": "panorama_98EC368E_95B6_8BC9_4161_A0810B0176FC",
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "backwardYaw": 170.86,
          "panorama": "this.panorama_BC1F40E6_B713_346F_41D6_C8AE02637D50",
          "yaw": -93.84,
          "distance": 1,
          "class": "AdjacentPanorama"
         },
         {
          "backwardYaw": -104.79,
          "panorama": {
           "id": "panorama_973B0CBE_986D_73DC_41DB_E6B12F5EC8B6",
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "backwardYaw": 80.92,
             "panorama": "this.panorama_98EC368E_95B6_8BC9_4161_A0810B0176FC",
             "yaw": -104.79,
             "distance": 1,
             "class": "AdjacentPanorama"
            },
            {
             "backwardYaw": -141.55,
             "panorama": {
              "id": "panorama_986ADE67_95BF_9B47_41C9_732D217DCD56",
              "hfovMin": 60,
              "adjacentPanoramas": [
               {
                "backwardYaw": 76.26,
                "panorama": "this.panorama_973B0CBE_986D_73DC_41DB_E6B12F5EC8B6",
                "yaw": -141.55,
                "distance": 1,
                "class": "AdjacentPanorama"
               }
              ],
              "class": "Panorama",
              "thumbnailUrl": "media/panorama_986ADE67_95BF_9B47_41C9_732D217DCD56_t.jpg",
              "hfov": 360,
              "pitch": 0,
              "partial": false,
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_986ADE67_95BF_9B47_41C9_732D217DCD56_t.jpg",
                "sphere": {
                 "levels": [
                  {
                   "height": 3456,
                   "width": 6912,
                   "url": "media/panorama_986ADE67_95BF_9B47_41C9_732D217DCD56_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 1608,
                   "width": 3217,
                   "url": "media/panorama_986ADE67_95BF_9B47_41C9_732D217DCD56.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ],
                 "class": "ImageResource"
                },
                "overlays": [
                 {
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "levels": [
                      {
                       "height": 196,
                       "width": 200,
                       "url": "media/panorama_986ADE67_95BF_9B47_41C9_732D217DCD56_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -141.55,
                    "hfov": 43.26,
                    "pitch": -8.57
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_9863E8D4_95BF_8759_41CB_F32568BC4A76",
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_973B0CBE_986D_73DC_41DB_E6B12F5EC8B6, this.camera_B0785A08_BB09_D64F_41D7_327D693656F9); this.mainPlayList.set('selectedIndex', 4)",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "yaw": -141.55,
                    "hfov": 43.26,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "height": 822,
                       "width": 839,
                       "url": "media/panorama_986ADE67_95BF_9B47_41C9_732D217DCD56_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -8.57
                   }
                  ]
                 }
                ]
               }
              ],
              "hfovMax": 120,
              "label": "heckie F50 lavatory 20",
              "vfov": 180
             },
             "yaw": 76.26,
             "distance": 1,
             "class": "AdjacentPanorama"
            }
           ],
           "class": "Panorama",
           "thumbnailUrl": "media/panorama_973B0CBE_986D_73DC_41DB_E6B12F5EC8B6_t.jpg",
           "hfov": 360,
           "pitch": 0,
           "partial": false,
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_973B0CBE_986D_73DC_41DB_E6B12F5EC8B6_t.jpg",
             "sphere": {
              "levels": [
               {
                "height": 3456,
                "width": 6912,
                "url": "media/panorama_973B0CBE_986D_73DC_41DB_E6B12F5EC8B6_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_973B0CBE_986D_73DC_41DB_E6B12F5EC8B6.jpeg",
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             },
             "overlays": [
              {
               "useHandCursor": true,
               "enabledInCardboard": true,
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "levels": [
                   {
                    "height": 200,
                    "width": 194,
                    "url": "media/panorama_973B0CBE_986D_73DC_41DB_E6B12F5EC8B6_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -104.79,
                 "hfov": 37.75,
                 "pitch": -6.95
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_973B3CBF_986D_73DD_41CB_89528CA994CE",
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_98EC368E_95B6_8BC9_4161_A0810B0176FC, this.camera_B775196F_BB09_D2C1_41C7_ABEB7B238AED); this.mainPlayList.set('selectedIndex', 3)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "rollOverDisplay": false,
               "items": [
                {
                 "yaw": -104.79,
                 "hfov": 37.75,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "levels": [
                   {
                    "height": 753,
                    "width": 730,
                    "url": "media/panorama_973B0CBE_986D_73DC_41DB_E6B12F5EC8B6_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -6.95
                }
               ]
              },
              {
               "useHandCursor": true,
               "enabledInCardboard": true,
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "levels": [
                   {
                    "height": 200,
                    "width": 186,
                    "url": "media/panorama_973B0CBE_986D_73DC_41DB_E6B12F5EC8B6_0_HS_1_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 76.26,
                 "hfov": 37.19,
                 "pitch": -10.66
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_973B2CBF_986D_73DD_41E0_D5AB92DD64DD",
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_986ADE67_95BF_9B47_41C9_732D217DCD56, this.camera_B79B9982_BB09_D243_41C8_FDEA3FC85DA8); this.mainPlayList.set('selectedIndex', 5)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "rollOverDisplay": false,
               "items": [
                {
                 "yaw": 76.26,
                 "hfov": 37.19,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "levels": [
                   {
                    "height": 778,
                    "width": 726,
                    "url": "media/panorama_973B0CBE_986D_73DC_41DB_E6B12F5EC8B6_0_HS_1_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -10.66
                }
               ]
              }
             ]
            }
           ],
           "hfovMax": 120,
           "label": "IMG_20201016_102154_363",
           "vfov": 180
          },
          "yaw": 80.92,
          "distance": 1,
          "class": "AdjacentPanorama"
         }
        ],
        "class": "Panorama",
        "thumbnailUrl": "media/panorama_98EC368E_95B6_8BC9_4161_A0810B0176FC_t.jpg",
        "hfov": 360,
        "pitch": 0,
        "partial": false,
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_98EC368E_95B6_8BC9_4161_A0810B0176FC_t.jpg",
          "sphere": {
           "levels": [
            {
             "height": 3456,
             "width": 6912,
             "url": "media/panorama_98EC368E_95B6_8BC9_4161_A0810B0176FC_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_98EC368E_95B6_8BC9_4161_A0810B0176FC.jpeg",
             "class": "ImageResourceLevel"
            }
           ],
           "class": "ImageResource"
          },
          "overlays": [
           {
            "useHandCursor": true,
            "enabledInCardboard": true,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "levels": [
                {
                 "height": 199,
                 "width": 183,
                 "url": "media/panorama_98EC368E_95B6_8BC9_4161_A0810B0176FC_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -93.84,
              "hfov": 38.22,
              "pitch": -0.47
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_98AD94AF_95BB_8FC7_41D8_642B086644A9",
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_BC1F40E6_B713_346F_41D6_C8AE02637D50, this.camera_B04359CF_BB09_D5C1_41B5_F453A2096C30); this.mainPlayList.set('selectedIndex', 1)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": -93.84,
              "hfov": 38.22,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 797,
                 "width": 733,
                 "url": "media/panorama_98EC368E_95B6_8BC9_4161_A0810B0176FC_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -0.47
             }
            ]
           },
           {
            "useHandCursor": true,
            "enabledInCardboard": true,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "levels": [
                {
                 "height": 170,
                 "width": 200,
                 "url": "media/panorama_98EC368E_95B6_8BC9_4161_A0810B0176FC_0_HS_1_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 80.92,
              "hfov": 41.77,
              "pitch": -8.38
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_98387D6D_95BA_994B_41D6_7EE4B75B4294",
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_973B0CBE_986D_73DC_41DB_E6B12F5EC8B6, this.camera_B05559E2_BB09_D5C3_41E3_045B38156DE0); this.mainPlayList.set('selectedIndex', 4)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": 80.92,
              "hfov": 41.77,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 691,
                 "width": 810,
                 "url": "media/panorama_98EC368E_95B6_8BC9_4161_A0810B0176FC_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -8.38
             }
            ]
           }
          ]
         }
        ],
        "hfovMax": 120,
        "label": "IMG_20201016_102124_362",
        "vfov": 180
       },
       "yaw": 170.86,
       "distance": 1,
       "class": "AdjacentPanorama"
      }
     ],
     "class": "Panorama",
     "thumbnailUrl": "media/panorama_BC1F40E6_B713_346F_41D6_C8AE02637D50_t.jpg",
     "hfov": 360,
     "pitch": 0,
     "partial": false,
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_BC1F40E6_B713_346F_41D6_C8AE02637D50_t.jpg",
       "sphere": {
        "levels": [
         {
          "height": 3456,
          "width": 6912,
          "url": "media/panorama_BC1F40E6_B713_346F_41D6_C8AE02637D50_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_BC1F40E6_B713_346F_41D6_C8AE02637D50.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "overlays": [
        {
         "useHandCursor": true,
         "enabledInCardboard": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "height": 164,
              "width": 200,
              "url": "media/panorama_BC1F40E6_B713_346F_41D6_C8AE02637D50_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 1.59,
           "hfov": 42.59,
           "pitch": -9.42
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_BC1F70E7_B713_346D_41CC_73CC24D35A8A",
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_9BE2321F_95B7_8AC7_41E1_BF9B7E732A1E, this.camera_B0D6A8AE_BB09_D243_41E2_800BD69A5694); this.mainPlayList.set('selectedIndex', 2)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": 1.59,
           "hfov": 42.59,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 680,
              "width": 828,
              "url": "media/panorama_BC1F40E6_B713_346F_41D6_C8AE02637D50_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -9.42
          }
         ]
        },
        {
         "useHandCursor": true,
         "enabledInCardboard": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "height": 169,
              "width": 200,
              "url": "media/panorama_BC1F40E6_B713_346F_41D6_C8AE02637D50_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 170.86,
           "hfov": 37.89,
           "pitch": -5.92
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_BC1C80E7_B713_346D_41C4_8318BA8BF3C6",
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_98EC368E_95B6_8BC9_4161_A0810B0176FC, this.camera_B0E0A8C1_BB09_D3C1_41E2_924FFDF2341A); this.mainPlayList.set('selectedIndex', 3)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": 170.86,
           "hfov": 37.89,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 618,
              "width": 731,
              "url": "media/panorama_BC1F40E6_B713_346F_41D6_C8AE02637D50_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -5.92
          }
         ]
        },
        {
         "useHandCursor": true,
         "enabledInCardboard": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "height": 200,
              "width": 177,
              "url": "media/panorama_BC1F40E6_B713_346F_41D6_C8AE02637D50_0_HS_3_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -95.48,
           "hfov": 50.47,
           "pitch": -12.54
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_BC1CB0E8_B713_3463_41E0_E04C7DF63DAE",
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_A81980FD_A30C_F1C9_41BF_0445CEE13069, this.camera_B0C42899_BB09_D241_41CA_A5B9D1DDDF9C); this.mainPlayList.set('selectedIndex', 0)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": -95.48,
           "hfov": 50.47,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 1121,
              "width": 992,
              "url": "media/panorama_BC1F40E6_B713_346F_41D6_C8AE02637D50_0_HS_3_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -12.54
          }
         ]
        }
       ]
      }
     ],
     "hfovMax": 120,
     "label": "IMG_20201016_102055_361",
     "vfov": 180
    },
    "yaw": 103.49,
    "distance": 1,
    "class": "AdjacentPanorama"
   },
   {
    "backwardYaw": 11.21,
    "panorama": "this.panorama_AF27EF00_A314_D037_41DC_267C5941F319",
    "yaw": -139.17,
    "distance": 1,
    "class": "AdjacentPanorama"
   }
  ],
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_A81980FD_A30C_F1C9_41BF_0445CEE13069_t.jpg",
  "hfov": 360,
  "pitch": 0,
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_A81980FD_A30C_F1C9_41BF_0445CEE13069_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 750,
       "width": 1500,
       "url": "media/panorama_A81980FD_A30C_F1C9_41BF_0445CEE13069_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "height": 63,
           "width": 58,
           "url": "media/panorama_A81980FD_A30C_F1C9_41BF_0445CEE13069_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 103.49,
        "hfov": 27.54,
        "pitch": 9.72
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_A81860FF_A30C_F1C9_41D1_6DC5D46657D4",
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_BC1F40E6_B713_346F_41D6_C8AE02637D50, this.camera_B7384939_BB09_D241_41D5_59F2F3A063EF); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 103.49,
        "hfov": 27.54,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 127,
           "width": 116,
           "url": "media/panorama_A81980FD_A30C_F1C9_41BF_0445CEE13069_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 9.72
       }
      ]
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "height": 55,
           "width": 57,
           "url": "media/panorama_A81980FD_A30C_F1C9_41BF_0445CEE13069_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 8.45,
        "hfov": 27.54,
        "pitch": -2.28
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_A8187100_A30C_F037_41D3_8013FEAA99F7",
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_AE933D86_A30D_F03B_41C0_D69513F3FE47, this.camera_B72A2924_BB09_D247_41C0_196109835259); this.mainPlayList.set('selectedIndex', 6)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 8.45,
        "hfov": 27.54,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 110,
           "width": 114,
           "url": "media/panorama_A81980FD_A30C_F1C9_41BF_0445CEE13069_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -2.28
       }
      ]
     },
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "height": 65,
           "width": 70,
           "url": "media/panorama_A81980FD_A30C_F1C9_41BF_0445CEE13069_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -139.17,
        "hfov": 34.03,
        "pitch": 0.48
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_A8182100_A30C_F037_41E2_8520DC87355D",
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_AF27EF00_A314_D037_41DC_267C5941F319, this.camera_B7424952_BB09_D2C3_41C7_FA7160D49F08); this.mainPlayList.set('selectedIndex', 8)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -139.17,
        "hfov": 34.03,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 130,
           "width": 141,
           "url": "media/panorama_A81980FD_A30C_F1C9_41BF_0445CEE13069_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.48
       }
      ]
     }
    ]
   }
  ],
  "hfovMax": 120,
  "label": "IMG_20201016_101514_354",
  "vfov": 180
 },
 {
  "mouseControlMode": "drag_rotation",
  "displayPlaybackBar": true,
  "gyroscopeVerticalDraggingEnabled": true,
  "class": "PanoramaPlayer",
  "id": "MainViewerPanoramaPlayer",
  "preloadEnabled": false,
  "viewerArea": "this.MainViewer",
  "touchControlMode": "drag_rotation",
  "gyroscopeEnabled": true
 },
 {
  "idleSequence": {
   "restartMovementOnUserInteraction": true,
   "movements": [
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 62.48,
     "targetPitch": 6,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 87.05,
     "targetPitch": 11.33,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 114.86,
     "targetPitch": 11.52,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 143.43,
     "targetPitch": 10.95,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 168.38,
     "targetPitch": 8.29,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "hfovSpeed": 33.25,
     "targetPitch": -0.86,
     "targetYaw": -144,
     "targetHfov": 90,
     "pitchSpeed": 17.05,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "restartMovementDelay": 5000,
   "id": "sequence_85102B17_95AA_9AC7_41D4_B39D94C3DCDC",
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 42.42,
   "pitch": 0.17
  },
  "automaticZoomSpeed": 10,
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "initialSequence": "this.sequence_85102B17_95AA_9AC7_41D4_B39D94C3DCDC",
  "id": "panorama_A81980FD_A30C_F1C9_41BF_0445CEE13069_camera"
 },
 "this.panorama_BC1F40E6_B713_346F_41D6_C8AE02637D50",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 84.39,
   "pitch": 0.13
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 112.95,
     "targetPitch": -27.33,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 146.29,
     "targetPitch": -3.33,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 168.19,
     "targetPitch": -0.48,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 3.62,
     "targetPitch": -1.24,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -56.95,
     "targetPitch": -7.14,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_BC1F40E6_B713_346F_41D6_C8AE02637D50_camera"
 },
 "this.panorama_9BE2321F_95B7_8AC7_41E1_BF9B7E732A1E",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -154.1,
   "pitch": -37.85
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -122.1,
     "targetPitch": -37.43,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -94.29,
     "targetPitch": -17.43,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -91.43,
     "targetPitch": -56.86,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -67.81,
     "targetPitch": -34.57,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 12,
     "targetPitch": -34.38,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 86.29,
     "targetPitch": -28.1,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_9BE2321F_95B7_8AC7_41E1_BF9B7E732A1E_camera"
 },
 "this.panorama_98EC368E_95B6_8BC9_4161_A0810B0176FC",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -93.39,
   "pitch": 0.63
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -63.05,
     "targetPitch": -2.19,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -42.86,
     "targetPitch": -26.38,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -12.57,
     "targetPitch": -6.95,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 24.19,
     "targetPitch": -28.1,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 54.1,
     "targetPitch": -9.81,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 83.05,
     "targetPitch": -9.43,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_98EC368E_95B6_8BC9_4161_A0810B0176FC_camera"
 },
 "this.panorama_973B0CBE_986D_73DC_41DB_E6B12F5EC8B6",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 78.27,
   "pitch": -15.44
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -106.67,
     "targetPitch": -4.86,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -84.19,
     "targetPitch": -31.33,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -33.9,
     "targetPitch": -17.24,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -2.67,
     "targetPitch": -46.38,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 44.57,
     "targetPitch": -18.38,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_973B0CBE_986D_73DC_41DB_E6B12F5EC8B6_camera"
 },
 "this.panorama_986ADE67_95BF_9B47_41C9_732D217DCD56",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -32.29,
   "pitch": -24.38
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -4.38,
     "targetPitch": -10.76,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 26.29,
     "targetPitch": 4.67,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 56.57,
     "targetPitch": -28.29,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 102.1,
     "targetPitch": 1.62,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 153.33,
     "targetPitch": -0.86,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -142.1,
     "targetPitch": -4.48,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_986ADE67_95BF_9B47_41C9_732D217DCD56_camera"
 },
 "this.panorama_AE933D86_A30D_F03B_41C0_D69513F3FE47",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 34.21,
   "pitch": -0.51
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_AE933D86_A30D_F03B_41C0_D69513F3FE47_camera"
 },
 "this.panorama_A8CEFB75_A30C_D0D8_41E0_D10E12556340",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 82.61,
   "pitch": -10.08
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_A8CEFB75_A30C_D0D8_41E0_D10E12556340_camera"
 },
 "this.panorama_AF27EF00_A314_D037_41DC_267C5941F319",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 40.37,
   "pitch": 1.28
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_AF27EF00_A314_D037_41DC_267C5941F319_camera"
 },
 {
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_A81980FD_A30C_F1C9_41BF_0445CEE13069_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_A81980FD_A30C_F1C9_41BF_0445CEE13069"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_BC1F40E6_B713_346F_41D6_C8AE02637D50_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_BC1F40E6_B713_346F_41D6_C8AE02637D50"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "camera": "this.panorama_9BE2321F_95B7_8AC7_41E1_BF9B7E732A1E_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_9BE2321F_95B7_8AC7_41E1_BF9B7E732A1E"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "camera": "this.panorama_98EC368E_95B6_8BC9_4161_A0810B0176FC_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_98EC368E_95B6_8BC9_4161_A0810B0176FC"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "camera": "this.panorama_973B0CBE_986D_73DC_41DB_E6B12F5EC8B6_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_973B0CBE_986D_73DC_41DB_E6B12F5EC8B6"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "camera": "this.panorama_986ADE67_95BF_9B47_41C9_732D217DCD56_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_986ADE67_95BF_9B47_41C9_732D217DCD56"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "camera": "this.panorama_AE933D86_A30D_F03B_41C0_D69513F3FE47_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AE933D86_A30D_F03B_41C0_D69513F3FE47"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "camera": "this.panorama_A8CEFB75_A30C_D0D8_41E0_D10E12556340_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_A8CEFB75_A30C_D0D8_41E0_D10E12556340"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 0)",
    "camera": "this.panorama_AF27EF00_A314_D037_41DC_267C5941F319_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AF27EF00_A314_D037_41DC_267C5941F319"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 {
  "idleSequence": {
   "restartMovementOnUserInteraction": true,
   "movements": [
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 184.63,
     "pitchSpeed": 92.39,
     "targetYaw": 42.42,
     "targetPitch": 0.17,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 62.48,
     "targetPitch": 6,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 87.05,
     "targetPitch": 11.33,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 114.86,
     "targetPitch": 11.52,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 143.43,
     "targetPitch": 10.95,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 168.38,
     "targetPitch": 8.29,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "hfovSpeed": 33.25,
     "targetPitch": -0.86,
     "targetYaw": -144,
     "targetHfov": 90,
     "pitchSpeed": 17.05,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "restartMovementDelay": 5000,
   "id": "sequence_B0C43899_BB09_D241_41D6_B85CD86867F0",
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -76.51,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "initialSequence": "this.sequence_B0C43899_BB09_D241_41D6_B85CD86867F0",
  "id": "camera_B0C42899_BB09_D241_41CA_A5B9D1DDDF9C"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -88.79,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 77.06,
     "pitchSpeed": 38.85,
     "targetYaw": -154.1,
     "targetPitch": -37.85,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -122.1,
     "targetPitch": -37.43,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -94.29,
     "targetPitch": -17.43,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -91.43,
     "targetPitch": -56.86,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -67.81,
     "targetPitch": -34.57,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 12,
     "targetPitch": -34.38,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 86.29,
     "targetPitch": -28.1,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_B0D6A8AE_BB09_D243_41E2_800BD69A5694"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 86.16,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 191.02,
     "pitchSpeed": 95.57,
     "targetYaw": -93.39,
     "targetPitch": 0.63,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -63.05,
     "targetPitch": -2.19,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -42.86,
     "targetPitch": -26.38,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -12.57,
     "targetPitch": -6.95,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 24.19,
     "targetPitch": -28.1,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 54.1,
     "targetPitch": -9.81,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 83.05,
     "targetPitch": -9.43,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_B0E0A8C1_BB09_D3C1_41E2_924FFDF2341A"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -168.6,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_B70CB8E9_BB09_D3C1_41D9_6B94E6819802"
 },
 {
  "idleSequence": {
   "restartMovementOnUserInteraction": true,
   "movements": [
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 3.47,
     "pitchSpeed": 2.23,
     "targetYaw": 42.42,
     "targetPitch": 0.17,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 62.48,
     "targetPitch": 6,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 87.05,
     "targetPitch": 11.33,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 114.86,
     "targetPitch": 11.52,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 143.43,
     "targetPitch": 10.95,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 168.38,
     "targetPitch": 8.29,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "hfovSpeed": 33.25,
     "targetPitch": -0.86,
     "targetYaw": -144,
     "targetHfov": 90,
     "pitchSpeed": 17.05,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "restartMovementDelay": 5000,
   "id": "sequence_B70098FE_BB09_D3C3_41E0_AA381E5E0B6E",
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 40.83,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "initialSequence": "this.sequence_B70098FE_BB09_D3C3_41E0_AA381E5E0B6E",
  "id": "camera_B700B8FE_BB09_D3C3_41C0_72E8CC7D4BEC"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -38.03,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_B72A2924_BB09_D247_41C0_196109835259"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 84.52,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 1.15,
     "pitchSpeed": 1.07,
     "targetYaw": 84.39,
     "targetPitch": 0.13,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 112.95,
     "targetPitch": -27.33,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 146.29,
     "targetPitch": -3.33,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 168.19,
     "targetPitch": -0.48,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 3.62,
     "targetPitch": -1.24,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -56.95,
     "targetPitch": -7.14,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_B7384939_BB09_D241_41D5_59F2F3A063EF"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -168.79,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_B7424952_BB09_D2C3_41C7_FA7160D49F08"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -178.41,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 214.89,
     "pitchSpeed": 107.45,
     "targetYaw": 84.39,
     "targetPitch": 0.13,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 112.95,
     "targetPitch": -27.33,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 146.29,
     "targetPitch": -3.33,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 168.19,
     "targetPitch": -0.48,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 3.62,
     "targetPitch": -1.24,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -56.95,
     "targetPitch": -7.14,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_B752E95B_BB09_D2C1_41D0_40B74975E286"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -99.08,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 7.06,
     "pitchSpeed": 4.01,
     "targetYaw": -93.39,
     "targetPitch": 0.63,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -63.05,
     "targetPitch": -2.19,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -42.86,
     "targetPitch": -26.38,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -12.57,
     "targetPitch": -6.95,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 24.19,
     "targetPitch": -28.1,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 54.1,
     "targetPitch": -9.81,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 83.05,
     "targetPitch": -9.43,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_B775196F_BB09_D2C1_41C7_ABEB7B238AED"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 38.45,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 78.7,
     "pitchSpeed": 39.67,
     "targetYaw": -32.29,
     "targetPitch": -24.38,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -4.38,
     "targetPitch": -10.76,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 26.29,
     "targetPitch": 4.67,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 56.57,
     "targetPitch": -28.29,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 102.1,
     "targetPitch": 1.62,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 153.33,
     "targetPitch": -0.86,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -142.1,
     "targetPitch": -4.48,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_B79B9982_BB09_D243_41C8_FDEA3FC85DA8"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -39.55,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_B04D79B1_BB09_D241_41C8_A7156904029F"
 },
 {
  "idleSequence": {
   "restartMovementOnUserInteraction": true,
   "movements": [
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 216,
     "pitchSpeed": 108,
     "targetYaw": 42.42,
     "targetPitch": 0.17,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 62.48,
     "targetPitch": 6,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 87.05,
     "targetPitch": 11.33,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 114.86,
     "targetPitch": 11.52,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 143.43,
     "targetPitch": 10.95,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 168.38,
     "targetPitch": 8.29,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "hfovSpeed": 33.25,
     "targetPitch": -0.86,
     "targetYaw": -144,
     "targetHfov": 90,
     "pitchSpeed": 17.05,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "restartMovementDelay": 5000,
   "id": "sequence_B04909BC_BB09_D247_419F_795B511117F2",
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -171.55,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "initialSequence": "this.sequence_B04909BC_BB09_D247_419F_795B511117F2",
  "id": "camera_B04939BB_BB09_D241_41CA_00BB8461C77F"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -9.14,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 77.13,
     "pitchSpeed": 38.89,
     "targetYaw": 84.39,
     "targetPitch": 0.13,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 112.95,
     "targetPitch": -27.33,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 146.29,
     "targetPitch": -3.33,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 168.19,
     "targetPitch": -0.48,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 3.62,
     "targetPitch": -1.24,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -56.95,
     "targetPitch": -7.14,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_B04359CF_BB09_D5C1_41B5_F453A2096C30"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 75.21,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 3.74,
     "pitchSpeed": 2.36,
     "targetYaw": 78.27,
     "targetPitch": -15.44,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -106.67,
     "targetPitch": -4.86,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -84.19,
     "targetPitch": -31.33,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -33.9,
     "targetPitch": -17.24,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -2.67,
     "targetPitch": -46.38,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 44.57,
     "targetPitch": -18.38,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_B05559E2_BB09_D5C3_41E3_045B38156DE0"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 151.78,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_B06959F3_BB09_D5C1_41AE_3D39A7E56127"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -84.41,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_B06719FD_BB09_D5C1_41C8_F48DD6122A3A"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -103.74,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 32.8,
     "pitchSpeed": 16.83,
     "targetYaw": 78.27,
     "targetPitch": -15.44,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -106.67,
     "targetPitch": -4.86,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -84.19,
     "targetPitch": -31.33,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -33.9,
     "targetPitch": -17.24,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -2.67,
     "targetPitch": -46.38,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 44.57,
     "targetPitch": -18.38,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_B0785A08_BB09_D64F_41D7_327D693656F9"
 }
], "children": [
 {
  "transitionMode": "blending",
  "toolTipTextShadowBlurRadius": 3,
  "paddingRight": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarBorderRadius": 0,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipPaddingBottom": 4,
  "shadow": false,
  "paddingBottom": 0,
  "playbackBarHeadBorderRadius": 0,
  "toolTipOpacity": 1,
  "toolTipShadowVerticalLength": 0,
  "progressLeft": 0,
  "toolTipTextShadowOpacity": 0,
  "width": "100%",
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarProgressOpacity": 1,
  "paddingTop": 0,
  "toolTipShadowSpread": 0,
  "height": "100%",
  "playbackBarBorderSize": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipPaddingRight": 6,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarBackgroundOpacity": 1,
  "playbackBarLeft": 0,
  "toolTipFontStyle": "normal",
  "paddingLeft": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadHeight": 15,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarHeadBorderSize": 0,
  "progressRight": 0,
  "progressOpacity": 1,
  "progressBarBorderColor": "#000000",
  "toolTipFontColor": "#606060",
  "progressBarBackgroundColorDirection": "vertical",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipFontWeight": "normal",
  "toolTipFontFamily": "Arial",
  "id": "MainViewer",
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadOpacity": 1,
  "playbackBarHeadShadow": true,
  "toolTipBorderSize": 1,
  "progressBackgroundColorDirection": "vertical",
  "class": "ViewerArea",
  "toolTipPaddingTop": 4,
  "progressBackgroundOpacity": 1,
  "minHeight": 50,
  "playbackBarBottom": 5,
  "toolTipPaddingLeft": 6,
  "toolTipShadowOpacity": 1,
  "playbackBarOpacity": 1,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "borderRadius": 0,
  "progressBorderColor": "#000000",
  "progressBarOpacity": 1,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBottom": 0,
  "minWidth": 100,
  "progressHeight": 10,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarHeight": 10,
  "toolTipBorderRadius": 3,
  "toolTipFontSize": 12,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBorderSize": 0,
  "playbackBarHeadWidth": 6,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipTextShadowColor": "#000000",
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarRight": 0,
  "progressBorderRadius": 0,
  "progressBarBorderRadius": 0,
  "toolTipShadowBlurRadius": 3,
  "borderSize": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "progressBarBorderSize": 0,
  "playbackBarProgressBorderRadius": 0,
  "toolTipBorderColor": "#767676",
  "toolTipShadowColor": "#333333"
 }
], 
 "start": "this.mainPlayList.set('selectedIndex', 0)",
 "id": "rootPlayer",
 "scripts": {
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "unregisterKey": function(key){  delete window[key]; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getKey": function(key){  return window[key]; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "registerKey": function(key, value){  window[key] = value; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "existsKey": function(key){  return key in window; }
 },
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "class": "Player",
 "gap": 10,
 "minHeight": 20,
 "shadow": false,
 "backgroundPreloadEnabled": true,
 "horizontalAlign": "left",
 "borderRadius": 0,
 "vrPolyfillScale": 0.5,
 "paddingBottom": 0,
 "contentOpaque": false,
 "verticalAlign": "top",
 "overflow": "visible",
 "minWidth": 20,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "paddingTop": 0,
 "height": "100%",
 "paddingLeft": 0,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "mouseWheelEnabled": true
})