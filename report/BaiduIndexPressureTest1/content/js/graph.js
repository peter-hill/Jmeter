/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 20.0, "minX": 0.0, "maxY": 21004.0, "series": [{"data": [[0.0, 20.0], [0.1, 22.0], [0.2, 23.0], [0.3, 23.0], [0.4, 23.0], [0.5, 24.0], [0.6, 24.0], [0.7, 24.0], [0.8, 24.0], [0.9, 24.0], [1.0, 25.0], [1.1, 25.0], [1.2, 25.0], [1.3, 25.0], [1.4, 25.0], [1.5, 25.0], [1.6, 26.0], [1.7, 26.0], [1.8, 26.0], [1.9, 26.0], [2.0, 26.0], [2.1, 26.0], [2.2, 26.0], [2.3, 26.0], [2.4, 26.0], [2.5, 26.0], [2.6, 27.0], [2.7, 27.0], [2.8, 27.0], [2.9, 27.0], [3.0, 27.0], [3.1, 27.0], [3.2, 27.0], [3.3, 27.0], [3.4, 27.0], [3.5, 27.0], [3.6, 27.0], [3.7, 28.0], [3.8, 28.0], [3.9, 28.0], [4.0, 28.0], [4.1, 28.0], [4.2, 28.0], [4.3, 28.0], [4.4, 28.0], [4.5, 28.0], [4.6, 28.0], [4.7, 29.0], [4.8, 29.0], [4.9, 29.0], [5.0, 29.0], [5.1, 29.0], [5.2, 29.0], [5.3, 29.0], [5.4, 29.0], [5.5, 29.0], [5.6, 29.0], [5.7, 29.0], [5.8, 30.0], [5.9, 30.0], [6.0, 30.0], [6.1, 30.0], [6.2, 30.0], [6.3, 30.0], [6.4, 30.0], [6.5, 30.0], [6.6, 30.0], [6.7, 30.0], [6.8, 30.0], [6.9, 30.0], [7.0, 30.0], [7.1, 31.0], [7.2, 31.0], [7.3, 31.0], [7.4, 31.0], [7.5, 31.0], [7.6, 31.0], [7.7, 31.0], [7.8, 31.0], [7.9, 31.0], [8.0, 31.0], [8.1, 31.0], [8.2, 31.0], [8.3, 32.0], [8.4, 32.0], [8.5, 32.0], [8.6, 32.0], [8.7, 32.0], [8.8, 32.0], [8.9, 32.0], [9.0, 32.0], [9.1, 32.0], [9.2, 32.0], [9.3, 32.0], [9.4, 33.0], [9.5, 33.0], [9.6, 33.0], [9.7, 33.0], [9.8, 33.0], [9.9, 33.0], [10.0, 33.0], [10.1, 33.0], [10.2, 33.0], [10.3, 33.0], [10.4, 33.0], [10.5, 33.0], [10.6, 33.0], [10.7, 34.0], [10.8, 34.0], [10.9, 34.0], [11.0, 34.0], [11.1, 34.0], [11.2, 34.0], [11.3, 34.0], [11.4, 34.0], [11.5, 34.0], [11.6, 34.0], [11.7, 34.0], [11.8, 34.0], [11.9, 35.0], [12.0, 35.0], [12.1, 35.0], [12.2, 35.0], [12.3, 35.0], [12.4, 35.0], [12.5, 35.0], [12.6, 35.0], [12.7, 35.0], [12.8, 35.0], [12.9, 35.0], [13.0, 35.0], [13.1, 35.0], [13.2, 36.0], [13.3, 36.0], [13.4, 36.0], [13.5, 36.0], [13.6, 36.0], [13.7, 36.0], [13.8, 36.0], [13.9, 36.0], [14.0, 36.0], [14.1, 36.0], [14.2, 36.0], [14.3, 37.0], [14.4, 37.0], [14.5, 37.0], [14.6, 37.0], [14.7, 37.0], [14.8, 37.0], [14.9, 37.0], [15.0, 37.0], [15.1, 37.0], [15.2, 37.0], [15.3, 38.0], [15.4, 38.0], [15.5, 38.0], [15.6, 38.0], [15.7, 38.0], [15.8, 38.0], [15.9, 38.0], [16.0, 38.0], [16.1, 38.0], [16.2, 38.0], [16.3, 38.0], [16.4, 39.0], [16.5, 39.0], [16.6, 39.0], [16.7, 39.0], [16.8, 39.0], [16.9, 39.0], [17.0, 39.0], [17.1, 39.0], [17.2, 39.0], [17.3, 40.0], [17.4, 40.0], [17.5, 40.0], [17.6, 40.0], [17.7, 40.0], [17.8, 40.0], [17.9, 40.0], [18.0, 40.0], [18.1, 40.0], [18.2, 40.0], [18.3, 41.0], [18.4, 41.0], [18.5, 41.0], [18.6, 41.0], [18.7, 41.0], [18.8, 41.0], [18.9, 41.0], [19.0, 41.0], [19.1, 41.0], [19.2, 42.0], [19.3, 42.0], [19.4, 42.0], [19.5, 42.0], [19.6, 42.0], [19.7, 42.0], [19.8, 42.0], [19.9, 42.0], [20.0, 43.0], [20.1, 43.0], [20.2, 43.0], [20.3, 43.0], [20.4, 43.0], [20.5, 43.0], [20.6, 43.0], [20.7, 43.0], [20.8, 44.0], [20.9, 44.0], [21.0, 44.0], [21.1, 44.0], [21.2, 44.0], [21.3, 44.0], [21.4, 44.0], [21.5, 44.0], [21.6, 45.0], [21.7, 45.0], [21.8, 45.0], [21.9, 45.0], [22.0, 45.0], [22.1, 45.0], [22.2, 45.0], [22.3, 46.0], [22.4, 46.0], [22.5, 46.0], [22.6, 46.0], [22.7, 46.0], [22.8, 46.0], [22.9, 46.0], [23.0, 47.0], [23.1, 47.0], [23.2, 47.0], [23.3, 47.0], [23.4, 47.0], [23.5, 47.0], [23.6, 47.0], [23.7, 48.0], [23.8, 48.0], [23.9, 48.0], [24.0, 48.0], [24.1, 48.0], [24.2, 48.0], [24.3, 48.0], [24.4, 49.0], [24.5, 49.0], [24.6, 49.0], [24.7, 49.0], [24.8, 49.0], [24.9, 50.0], [25.0, 50.0], [25.1, 50.0], [25.2, 50.0], [25.3, 50.0], [25.4, 50.0], [25.5, 51.0], [25.6, 51.0], [25.7, 51.0], [25.8, 51.0], [25.9, 51.0], [26.0, 52.0], [26.1, 52.0], [26.2, 52.0], [26.3, 52.0], [26.4, 52.0], [26.5, 53.0], [26.6, 53.0], [26.7, 53.0], [26.8, 53.0], [26.9, 53.0], [27.0, 53.0], [27.1, 54.0], [27.2, 54.0], [27.3, 54.0], [27.4, 54.0], [27.5, 54.0], [27.6, 54.0], [27.7, 55.0], [27.8, 55.0], [27.9, 55.0], [28.0, 55.0], [28.1, 55.0], [28.2, 55.0], [28.3, 56.0], [28.4, 56.0], [28.5, 56.0], [28.6, 56.0], [28.7, 56.0], [28.8, 56.0], [28.9, 57.0], [29.0, 57.0], [29.1, 57.0], [29.2, 57.0], [29.3, 57.0], [29.4, 58.0], [29.5, 58.0], [29.6, 58.0], [29.7, 58.0], [29.8, 58.0], [29.9, 59.0], [30.0, 59.0], [30.1, 59.0], [30.2, 59.0], [30.3, 59.0], [30.4, 60.0], [30.5, 60.0], [30.6, 60.0], [30.7, 60.0], [30.8, 61.0], [30.9, 61.0], [31.0, 61.0], [31.1, 61.0], [31.2, 61.0], [31.3, 62.0], [31.4, 62.0], [31.5, 62.0], [31.6, 62.0], [31.7, 63.0], [31.8, 63.0], [31.9, 63.0], [32.0, 63.0], [32.1, 64.0], [32.2, 64.0], [32.3, 64.0], [32.4, 64.0], [32.5, 65.0], [32.6, 65.0], [32.7, 65.0], [32.8, 65.0], [32.9, 66.0], [33.0, 66.0], [33.1, 66.0], [33.2, 66.0], [33.3, 67.0], [33.4, 67.0], [33.5, 67.0], [33.6, 67.0], [33.7, 68.0], [33.8, 68.0], [33.9, 68.0], [34.0, 69.0], [34.1, 69.0], [34.2, 69.0], [34.3, 70.0], [34.4, 70.0], [34.5, 70.0], [34.6, 70.0], [34.7, 71.0], [34.8, 71.0], [34.9, 71.0], [35.0, 71.0], [35.1, 72.0], [35.2, 72.0], [35.3, 72.0], [35.4, 73.0], [35.5, 73.0], [35.6, 73.0], [35.7, 74.0], [35.8, 74.0], [35.9, 74.0], [36.0, 75.0], [36.1, 75.0], [36.2, 76.0], [36.3, 76.0], [36.4, 76.0], [36.5, 77.0], [36.6, 77.0], [36.7, 77.0], [36.8, 78.0], [36.9, 78.0], [37.0, 78.0], [37.1, 79.0], [37.2, 79.0], [37.3, 79.0], [37.4, 80.0], [37.5, 80.0], [37.6, 80.0], [37.7, 81.0], [37.8, 81.0], [37.9, 81.0], [38.0, 82.0], [38.1, 82.0], [38.2, 83.0], [38.3, 83.0], [38.4, 84.0], [38.5, 84.0], [38.6, 85.0], [38.7, 85.0], [38.8, 86.0], [38.9, 86.0], [39.0, 87.0], [39.1, 87.0], [39.2, 88.0], [39.3, 88.0], [39.4, 89.0], [39.5, 89.0], [39.6, 90.0], [39.7, 90.0], [39.8, 91.0], [39.9, 92.0], [40.0, 92.0], [40.1, 93.0], [40.2, 93.0], [40.3, 94.0], [40.4, 94.0], [40.5, 95.0], [40.6, 95.0], [40.7, 96.0], [40.8, 96.0], [40.9, 97.0], [41.0, 97.0], [41.1, 98.0], [41.2, 98.0], [41.3, 99.0], [41.4, 100.0], [41.5, 101.0], [41.6, 101.0], [41.7, 102.0], [41.8, 102.0], [41.9, 103.0], [42.0, 104.0], [42.1, 104.0], [42.2, 104.0], [42.3, 105.0], [42.4, 106.0], [42.5, 107.0], [42.6, 107.0], [42.7, 108.0], [42.8, 109.0], [42.9, 109.0], [43.0, 110.0], [43.1, 111.0], [43.2, 112.0], [43.3, 112.0], [43.4, 113.0], [43.5, 113.0], [43.6, 114.0], [43.7, 115.0], [43.8, 115.0], [43.9, 116.0], [44.0, 117.0], [44.1, 118.0], [44.2, 118.0], [44.3, 119.0], [44.4, 119.0], [44.5, 120.0], [44.6, 121.0], [44.7, 122.0], [44.8, 123.0], [44.9, 123.0], [45.0, 124.0], [45.1, 125.0], [45.2, 126.0], [45.3, 127.0], [45.4, 128.0], [45.5, 129.0], [45.6, 130.0], [45.7, 131.0], [45.8, 132.0], [45.9, 133.0], [46.0, 135.0], [46.1, 135.0], [46.2, 136.0], [46.3, 137.0], [46.4, 138.0], [46.5, 139.0], [46.6, 140.0], [46.7, 141.0], [46.8, 142.0], [46.9, 142.0], [47.0, 144.0], [47.1, 145.0], [47.2, 147.0], [47.3, 147.0], [47.4, 149.0], [47.5, 150.0], [47.6, 151.0], [47.7, 152.0], [47.8, 154.0], [47.9, 155.0], [48.0, 156.0], [48.1, 158.0], [48.2, 159.0], [48.3, 160.0], [48.4, 161.0], [48.5, 163.0], [48.6, 165.0], [48.7, 166.0], [48.8, 168.0], [48.9, 169.0], [49.0, 170.0], [49.1, 172.0], [49.2, 172.0], [49.3, 174.0], [49.4, 176.0], [49.5, 178.0], [49.6, 180.0], [49.7, 182.0], [49.8, 184.0], [49.9, 185.0], [50.0, 186.0], [50.1, 188.0], [50.2, 189.0], [50.3, 191.0], [50.4, 192.0], [50.5, 195.0], [50.6, 196.0], [50.7, 198.0], [50.8, 200.0], [50.9, 202.0], [51.0, 206.0], [51.1, 207.0], [51.2, 210.0], [51.3, 212.0], [51.4, 215.0], [51.5, 216.0], [51.6, 219.0], [51.7, 222.0], [51.8, 224.0], [51.9, 225.0], [52.0, 228.0], [52.1, 230.0], [52.2, 232.0], [52.3, 233.0], [52.4, 234.0], [52.5, 235.0], [52.6, 235.0], [52.7, 236.0], [52.8, 236.0], [52.9, 236.0], [53.0, 237.0], [53.1, 237.0], [53.2, 238.0], [53.3, 238.0], [53.4, 238.0], [53.5, 239.0], [53.6, 239.0], [53.7, 240.0], [53.8, 240.0], [53.9, 241.0], [54.0, 241.0], [54.1, 241.0], [54.2, 241.0], [54.3, 242.0], [54.4, 242.0], [54.5, 242.0], [54.6, 243.0], [54.7, 243.0], [54.8, 244.0], [54.9, 244.0], [55.0, 244.0], [55.1, 245.0], [55.2, 245.0], [55.3, 246.0], [55.4, 246.0], [55.5, 247.0], [55.6, 247.0], [55.7, 247.0], [55.8, 248.0], [55.9, 249.0], [56.0, 249.0], [56.1, 250.0], [56.2, 250.0], [56.3, 251.0], [56.4, 251.0], [56.5, 252.0], [56.6, 252.0], [56.7, 253.0], [56.8, 253.0], [56.9, 254.0], [57.0, 255.0], [57.1, 255.0], [57.2, 256.0], [57.3, 257.0], [57.4, 257.0], [57.5, 258.0], [57.6, 258.0], [57.7, 259.0], [57.8, 260.0], [57.9, 260.0], [58.0, 261.0], [58.1, 262.0], [58.2, 263.0], [58.3, 263.0], [58.4, 264.0], [58.5, 265.0], [58.6, 265.0], [58.7, 267.0], [58.8, 267.0], [58.9, 268.0], [59.0, 269.0], [59.1, 270.0], [59.2, 271.0], [59.3, 272.0], [59.4, 272.0], [59.5, 273.0], [59.6, 274.0], [59.7, 275.0], [59.8, 276.0], [59.9, 277.0], [60.0, 278.0], [60.1, 279.0], [60.2, 281.0], [60.3, 282.0], [60.4, 283.0], [60.5, 284.0], [60.6, 285.0], [60.7, 287.0], [60.8, 288.0], [60.9, 289.0], [61.0, 289.0], [61.1, 291.0], [61.2, 292.0], [61.3, 293.0], [61.4, 295.0], [61.5, 296.0], [61.6, 298.0], [61.7, 299.0], [61.8, 300.0], [61.9, 301.0], [62.0, 302.0], [62.1, 303.0], [62.2, 305.0], [62.3, 305.0], [62.4, 307.0], [62.5, 307.0], [62.6, 309.0], [62.7, 310.0], [62.8, 312.0], [62.9, 313.0], [63.0, 315.0], [63.1, 317.0], [63.2, 317.0], [63.3, 319.0], [63.4, 320.0], [63.5, 322.0], [63.6, 323.0], [63.7, 325.0], [63.8, 325.0], [63.9, 327.0], [64.0, 329.0], [64.1, 331.0], [64.2, 332.0], [64.3, 333.0], [64.4, 335.0], [64.5, 337.0], [64.6, 339.0], [64.7, 340.0], [64.8, 343.0], [64.9, 345.0], [65.0, 347.0], [65.1, 351.0], [65.2, 353.0], [65.3, 355.0], [65.4, 357.0], [65.5, 360.0], [65.6, 363.0], [65.7, 365.0], [65.8, 367.0], [65.9, 370.0], [66.0, 373.0], [66.1, 376.0], [66.2, 380.0], [66.3, 383.0], [66.4, 384.0], [66.5, 387.0], [66.6, 391.0], [66.7, 396.0], [66.8, 399.0], [66.9, 403.0], [67.0, 408.0], [67.1, 411.0], [67.2, 418.0], [67.3, 423.0], [67.4, 434.0], [67.5, 437.0], [67.6, 445.0], [67.7, 452.0], [67.8, 462.0], [67.9, 466.0], [68.0, 472.0], [68.1, 481.0], [68.2, 488.0], [68.3, 492.0], [68.4, 495.0], [68.5, 497.0], [68.6, 498.0], [68.7, 500.0], [68.8, 502.0], [68.9, 504.0], [69.0, 506.0], [69.1, 507.0], [69.2, 510.0], [69.3, 512.0], [69.4, 513.0], [69.5, 516.0], [69.6, 520.0], [69.7, 523.0], [69.8, 525.0], [69.9, 528.0], [70.0, 531.0], [70.1, 534.0], [70.2, 537.0], [70.3, 543.0], [70.4, 547.0], [70.5, 551.0], [70.6, 555.0], [70.7, 560.0], [70.8, 564.0], [70.9, 567.0], [71.0, 573.0], [71.1, 578.0], [71.2, 583.0], [71.3, 592.0], [71.4, 601.0], [71.5, 610.0], [71.6, 622.0], [71.7, 630.0], [71.8, 635.0], [71.9, 637.0], [72.0, 639.0], [72.1, 641.0], [72.2, 642.0], [72.3, 643.0], [72.4, 645.0], [72.5, 647.0], [72.6, 649.0], [72.7, 652.0], [72.8, 655.0], [72.9, 658.0], [73.0, 660.0], [73.1, 662.0], [73.2, 664.0], [73.3, 668.0], [73.4, 672.0], [73.5, 675.0], [73.6, 677.0], [73.7, 681.0], [73.8, 686.0], [73.9, 690.0], [74.0, 693.0], [74.1, 696.0], [74.2, 698.0], [74.3, 700.0], [74.4, 703.0], [74.5, 706.0], [74.6, 710.0], [74.7, 712.0], [74.8, 717.0], [74.9, 722.0], [75.0, 726.0], [75.1, 730.0], [75.2, 735.0], [75.3, 740.0], [75.4, 745.0], [75.5, 749.0], [75.6, 754.0], [75.7, 763.0], [75.8, 774.0], [75.9, 785.0], [76.0, 793.0], [76.1, 796.0], [76.2, 801.0], [76.3, 810.0], [76.4, 819.0], [76.5, 836.0], [76.6, 853.0], [76.7, 879.0], [76.8, 893.0], [76.9, 912.0], [77.0, 925.0], [77.1, 943.0], [77.2, 957.0], [77.3, 980.0], [77.4, 1009.0], [77.5, 1023.0], [77.6, 1025.0], [77.7, 1025.0], [77.8, 1027.0], [77.9, 1027.0], [78.0, 1028.0], [78.1, 1028.0], [78.2, 1029.0], [78.3, 1029.0], [78.4, 1030.0], [78.5, 1031.0], [78.6, 1032.0], [78.7, 1032.0], [78.8, 1033.0], [78.9, 1033.0], [79.0, 1034.0], [79.1, 1034.0], [79.2, 1035.0], [79.3, 1035.0], [79.4, 1036.0], [79.5, 1036.0], [79.6, 1037.0], [79.7, 1038.0], [79.8, 1038.0], [79.9, 1039.0], [80.0, 1039.0], [80.1, 1040.0], [80.2, 1041.0], [80.3, 1042.0], [80.4, 1042.0], [80.5, 1043.0], [80.6, 1044.0], [80.7, 1044.0], [80.8, 1045.0], [80.9, 1046.0], [81.0, 1046.0], [81.1, 1047.0], [81.2, 1048.0], [81.3, 1049.0], [81.4, 1049.0], [81.5, 1050.0], [81.6, 1051.0], [81.7, 1053.0], [81.8, 1054.0], [81.9, 1054.0], [82.0, 1056.0], [82.1, 1056.0], [82.2, 1058.0], [82.3, 1059.0], [82.4, 1060.0], [82.5, 1061.0], [82.6, 1062.0], [82.7, 1063.0], [82.8, 1064.0], [82.9, 1066.0], [83.0, 1068.0], [83.1, 1069.0], [83.2, 1071.0], [83.3, 1072.0], [83.4, 1075.0], [83.5, 1076.0], [83.6, 1078.0], [83.7, 1080.0], [83.8, 1081.0], [83.9, 1082.0], [84.0, 1084.0], [84.1, 1086.0], [84.2, 1088.0], [84.3, 1090.0], [84.4, 1091.0], [84.5, 1094.0], [84.6, 1096.0], [84.7, 1100.0], [84.8, 1105.0], [84.9, 1107.0], [85.0, 1110.0], [85.1, 1114.0], [85.2, 1118.0], [85.3, 1120.0], [85.4, 1123.0], [85.5, 1125.0], [85.6, 1128.0], [85.7, 1132.0], [85.8, 1137.0], [85.9, 1141.0], [86.0, 1144.0], [86.1, 1148.0], [86.2, 1153.0], [86.3, 1157.0], [86.4, 1163.0], [86.5, 1167.0], [86.6, 1169.0], [86.7, 1173.0], [86.8, 1178.0], [86.9, 1181.0], [87.0, 1186.0], [87.1, 1189.0], [87.2, 1195.0], [87.3, 1199.0], [87.4, 1203.0], [87.5, 1207.0], [87.6, 1211.0], [87.7, 1221.0], [87.8, 1226.0], [87.9, 1230.0], [88.0, 1234.0], [88.1, 1236.0], [88.2, 1237.0], [88.3, 1239.0], [88.4, 1241.0], [88.5, 1242.0], [88.6, 1244.0], [88.7, 1245.0], [88.8, 1247.0], [88.9, 1249.0], [89.0, 1251.0], [89.1, 1253.0], [89.2, 1255.0], [89.3, 1260.0], [89.4, 1265.0], [89.5, 1269.0], [89.6, 1273.0], [89.7, 1278.0], [89.8, 1283.0], [89.9, 1287.0], [90.0, 1289.0], [90.1, 1292.0], [90.2, 1295.0], [90.3, 1298.0], [90.4, 1302.0], [90.5, 1306.0], [90.6, 1311.0], [90.7, 1314.0], [90.8, 1318.0], [90.9, 1323.0], [91.0, 1331.0], [91.1, 1339.0], [91.2, 1344.0], [91.3, 1353.0], [91.4, 1363.0], [91.5, 1375.0], [91.6, 1384.0], [91.7, 1393.0], [91.8, 1404.0], [91.9, 1410.0], [92.0, 1423.0], [92.1, 1432.0], [92.2, 1442.0], [92.3, 1449.0], [92.4, 1455.0], [92.5, 1463.0], [92.6, 1476.0], [92.7, 1489.0], [92.8, 1496.0], [92.9, 1499.0], [93.0, 1507.0], [93.1, 1512.0], [93.2, 1526.0], [93.3, 1533.0], [93.4, 1543.0], [93.5, 1552.0], [93.6, 1566.0], [93.7, 1575.0], [93.8, 1588.0], [93.9, 1611.0], [94.0, 1627.0], [94.1, 1637.0], [94.2, 1641.0], [94.3, 1647.0], [94.4, 1654.0], [94.5, 1662.0], [94.6, 1674.0], [94.7, 1682.0], [94.8, 1689.0], [94.9, 1698.0], [95.0, 1706.0], [95.1, 1715.0], [95.2, 1732.0], [95.3, 1748.0], [95.4, 1773.0], [95.5, 1808.0], [95.6, 1874.0], [95.7, 1927.0], [95.8, 1965.0], [95.9, 2017.0], [96.0, 2049.0], [96.1, 2254.0], [96.2, 2445.0], [96.3, 2476.0], [96.4, 2514.0], [96.5, 2623.0], [96.6, 3026.0], [96.7, 3030.0], [96.8, 3034.0], [96.9, 3037.0], [97.0, 3042.0], [97.1, 3049.0], [97.2, 3056.0], [97.3, 3062.0], [97.4, 3070.0], [97.5, 3079.0], [97.6, 3087.0], [97.7, 3112.0], [97.8, 3119.0], [97.9, 3133.0], [98.0, 3158.0], [98.1, 3185.0], [98.2, 3215.0], [98.3, 3239.0], [98.4, 3246.0], [98.5, 3258.0], [98.6, 3275.0], [98.7, 3307.0], [98.8, 3349.0], [98.9, 3417.0], [99.0, 3509.0], [99.1, 3641.0], [99.2, 3707.0], [99.3, 3944.0], [99.4, 4205.0], [99.5, 6312.0], [99.6, 7040.0], [99.7, 7086.0], [99.8, 7241.0], [99.9, 8450.0]], "isOverall": false, "label": "BaiduIndexRequest", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 7705.0, "series": [{"data": [[0.0, 7705.0], [600.0, 537.0], [700.0, 359.0], [800.0, 118.0], [900.0, 101.0], [1000.0, 1366.0], [1100.0, 490.0], [1200.0, 561.0], [1300.0, 261.0], [1400.0, 221.0], [1500.0, 173.0], [1600.0, 198.0], [1700.0, 109.0], [1800.0, 23.0], [1900.0, 49.0], [2000.0, 30.0], [2200.0, 24.0], [2400.0, 35.0], [2500.0, 25.0], [2600.0, 6.0], [2700.0, 5.0], [2800.0, 1.0], [3000.0, 205.0], [3100.0, 96.0], [3300.0, 36.0], [3200.0, 95.0], [3400.0, 16.0], [3500.0, 23.0], [3700.0, 16.0], [3600.0, 17.0], [3800.0, 3.0], [3900.0, 6.0], [4000.0, 7.0], [4100.0, 10.0], [4300.0, 3.0], [4200.0, 6.0], [4400.0, 2.0], [4500.0, 2.0], [4600.0, 2.0], [6000.0, 1.0], [6300.0, 6.0], [6200.0, 1.0], [6400.0, 3.0], [7000.0, 37.0], [7100.0, 8.0], [7200.0, 9.0], [7300.0, 3.0], [7400.0, 1.0], [7600.0, 5.0], [7500.0, 1.0], [7900.0, 1.0], [8000.0, 2.0], [8500.0, 1.0], [8400.0, 2.0], [15000.0, 11.0], [15200.0, 2.0], [15100.0, 1.0], [21000.0, 2.0], [100.0, 1755.0], [200.0, 2047.0], [300.0, 944.0], [400.0, 343.0], [500.0, 508.0]], "isOverall": false, "label": "BaiduIndexRequest", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 21000.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 12805.0, "series": [{"data": [[0.0, 12805.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 4513.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1316.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 58.9865933771284, "minX": 1.5910038E12, "maxY": 80.0, "series": [{"data": [[1.59100386E12, 80.0], [1.5910038E12, 58.9865933771284], [1.59100392E12, 64.42160493827164]], "isOverall": false, "label": "jp@gc - Stepping Thread Group (deprecated)", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59100392E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 40.90625000000001, "minX": 1.0, "maxY": 5047.666666666667, "series": [{"data": [[2.0, 1104.0], [3.0, 51.18181818181818], [4.0, 121.07999999999998], [5.0, 48.082758620689646], [6.0, 80.60606060606062], [7.0, 40.90625000000001], [8.0, 46.446808510638306], [9.0, 136.0689655172414], [10.0, 61.257777777777804], [11.0, 75.71428571428571], [12.0, 231.2], [13.0, 88.2666666666667], [14.0, 179.17142857142858], [15.0, 115.65340909090907], [16.0, 182.75], [17.0, 116.23999999999997], [18.0, 215.86666666666662], [19.0, 292.04347826086956], [20.0, 141.61691542288563], [21.0, 162.81250000000003], [22.0, 110.05000000000001], [23.0, 159.8705882352941], [24.0, 160.5384615384616], [25.0, 173.52976190476178], [26.0, 455.5151515151515], [27.0, 188.00000000000003], [28.0, 372.4814814814816], [29.0, 442.3243243243243], [30.0, 200.13939393939395], [31.0, 261.6470588235294], [32.0, 214.79166666666674], [33.0, 194.54999999999998], [34.0, 370.7777777777777], [35.0, 251.79775280898875], [36.0, 274.15384615384613], [37.0, 253.16666666666663], [38.0, 328.3611111111111], [39.0, 330.4181818181819], [40.0, 376.6783216783219], [41.0, 491.4666666666666], [42.0, 461.66666666666663], [43.0, 292.60256410256403], [44.0, 304.2894736842105], [45.0, 370.4241071428572], [46.0, 399.96666666666664], [47.0, 313.4615384615385], [48.0, 283.04347826086956], [49.0, 401.92452830188677], [50.0, 445.6413043478262], [51.0, 595.1304347826087], [52.0, 266.85185185185185], [53.0, 359.5666666666667], [54.0, 558.5675675675676], [55.0, 496.36153846153826], [56.0, 562.6351351351354], [57.0, 263.58974358974365], [58.0, 557.4285714285714], [59.0, 356.0], [60.0, 539.2395209580841], [61.0, 744.5588235294118], [62.0, 621.6], [63.0, 579.409090909091], [64.0, 403.8518518518518], [65.0, 529.0], [66.0, 533.9324324324325], [67.0, 596.1428571428571], [68.0, 533.3047619047618], [69.0, 349.2812499999999], [70.0, 540.5536723163841], [71.0, 507.21978021978026], [72.0, 601.820895522388], [73.0, 684.2068965517241], [74.0, 656.3157894736843], [75.0, 610.1818181818184], [76.0, 547.6999999999998], [77.0, 478.4715447154472], [78.0, 447.17241379310343], [79.0, 438.8780487804878], [80.0, 607.9312878787881], [1.0, 5047.666666666667]], "isOverall": false, "label": "BaiduIndexRequest", "isController": false}, {"data": [[68.88103670315581, 531.5149710238214]], "isOverall": false, "label": "BaiduIndexRequest-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 80.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 6372.0, "minX": 1.5910038E12, "maxY": 330318.75, "series": [{"data": [[1.59100386E12, 330318.75], [1.5910038E12, 310418.7166666667], [1.59100392E12, 134838.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.59100386E12, 15605.5], [1.5910038E12, 14669.366666666667], [1.59100392E12, 6372.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59100392E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 452.1791124815653, "minX": 1.5910038E12, "maxY": 603.0122212422832, "series": [{"data": [[1.59100386E12, 603.0122212422832], [1.5910038E12, 452.1791124815653], [1.59100392E12, 539.0126543209873]], "isOverall": false, "label": "BaiduIndexRequest", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59100392E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 444.1165035527557, "minX": 1.5910038E12, "maxY": 589.7480156230305, "series": [{"data": [[1.59100386E12, 589.7480156230305], [1.5910038E12, 444.1165035527557], [1.59100392E12, 529.0092592592605]], "isOverall": false, "label": "BaiduIndexRequest", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59100392E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 304.5983375787644, "minX": 1.5910038E12, "maxY": 384.5090084414742, "series": [{"data": [[1.59100386E12, 384.5090084414742], [1.5910038E12, 304.5983375787644], [1.59100392E12, 346.76759259259336]], "isOverall": false, "label": "BaiduIndexRequest", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59100392E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 20.0, "minX": 1.5910038E12, "maxY": 15279.0, "series": [{"data": [[1.59100386E12, 15114.0], [1.5910038E12, 15279.0], [1.59100392E12, 15058.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.59100386E12, 27.0], [1.5910038E12, 24.0], [1.59100392E12, 24.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.59100386E12, 27.0], [1.5910038E12, 24.0], [1.59100392E12, 24.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.59100386E12, 27.0], [1.5910038E12, 24.0], [1.59100392E12, 24.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.59100386E12, 22.0], [1.5910038E12, 20.0], [1.59100392E12, 22.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.59100386E12, 271.0], [1.5910038E12, 66.0], [1.59100392E12, 179.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59100392E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 32.0, "minX": 4.0, "maxY": 21004.0, "series": [{"data": [[4.0, 8085.5], [23.0, 32.0], [27.0, 75.0], [40.0, 91.0], [43.0, 1053.0], [52.0, 808.0], [54.0, 565.0], [74.0, 246.5], [72.0, 795.0], [75.0, 238.0], [89.0, 139.0], [91.0, 152.0], [88.0, 93.0], [95.0, 40.0], [99.0, 317.0], [100.0, 271.0], [103.0, 104.0], [107.0, 267.0], [106.0, 882.0], [105.0, 727.0], [110.0, 65.0], [113.0, 66.0], [114.0, 91.5], [115.0, 65.0], [112.0, 250.5], [117.0, 52.0], [118.0, 247.0], [116.0, 506.0], [123.0, 116.0], [121.0, 286.5], [120.0, 299.5], [122.0, 116.5], [125.0, 53.0], [126.0, 231.5], [124.0, 277.0], [127.0, 116.5], [133.0, 68.0], [134.0, 243.0], [132.0, 107.0], [129.0, 221.0], [135.0, 249.0], [130.0, 225.0], [128.0, 84.0], [138.0, 47.0], [136.0, 74.5], [139.0, 75.0], [140.0, 143.0], [143.0, 143.0], [137.0, 305.0], [141.0, 109.0], [151.0, 214.5], [146.0, 238.5], [144.0, 116.5], [148.0, 154.0], [150.0, 137.0], [147.0, 249.5], [145.0, 232.0], [152.0, 180.5], [155.0, 245.0], [153.0, 250.5], [158.0, 134.5], [154.0, 113.0], [159.0, 262.0], [173.0, 72.0], [171.0, 57.0], [208.0, 202.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[150.0, 21004.0], [151.0, 21001.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 208.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 4.0, "maxY": 8085.5, "series": [{"data": [[4.0, 8085.5], [23.0, 32.0], [27.0, 75.0], [40.0, 91.0], [43.0, 1053.0], [52.0, 808.0], [54.0, 565.0], [74.0, 246.5], [72.0, 795.0], [75.0, 238.0], [89.0, 139.0], [91.0, 152.0], [88.0, 93.0], [95.0, 40.0], [99.0, 317.0], [100.0, 271.0], [103.0, 104.0], [107.0, 267.0], [106.0, 882.0], [105.0, 727.0], [110.0, 65.0], [113.0, 66.0], [114.0, 91.5], [115.0, 65.0], [112.0, 250.5], [117.0, 52.0], [118.0, 247.0], [116.0, 506.0], [123.0, 116.0], [121.0, 286.5], [120.0, 299.5], [122.0, 116.5], [125.0, 53.0], [126.0, 231.5], [124.0, 277.0], [127.0, 116.5], [133.0, 68.0], [134.0, 243.0], [132.0, 107.0], [129.0, 221.0], [135.0, 249.0], [130.0, 225.0], [128.0, 84.0], [138.0, 47.0], [136.0, 74.5], [139.0, 75.0], [140.0, 143.0], [143.0, 143.0], [137.0, 305.0], [141.0, 109.0], [151.0, 214.5], [146.0, 238.5], [144.0, 116.5], [148.0, 154.0], [150.0, 137.0], [147.0, 249.5], [145.0, 232.0], [152.0, 180.5], [155.0, 245.0], [153.0, 250.5], [158.0, 134.5], [154.0, 113.0], [159.0, 262.0], [173.0, 72.0], [171.0, 57.0], [208.0, 202.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[150.0, 0.0], [151.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 208.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 52.666666666666664, "minX": 1.5910038E12, "maxY": 132.28333333333333, "series": [{"data": [[1.59100386E12, 132.28333333333333], [1.5910038E12, 125.65], [1.59100392E12, 52.666666666666664]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59100392E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.5910038E12, "maxY": 132.25, "series": [{"data": [[1.59100386E12, 132.25], [1.5910038E12, 124.31666666666666], [1.59100392E12, 54.0]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.59100386E12, 0.03333333333333333]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59100392E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.5910038E12, "maxY": 132.25, "series": [{"data": [[1.59100386E12, 132.25], [1.5910038E12, 124.31666666666666], [1.59100392E12, 54.0]], "isOverall": false, "label": "BaiduIndexRequest-success", "isController": false}, {"data": [[1.59100386E12, 0.03333333333333333]], "isOverall": false, "label": "BaiduIndexRequest-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59100392E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.5910038E12, "maxY": 132.25, "series": [{"data": [[1.59100386E12, 132.25], [1.5910038E12, 124.31666666666666], [1.59100392E12, 54.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.59100386E12, 0.03333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59100392E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

