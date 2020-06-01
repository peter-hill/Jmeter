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
        data: {"result": {"minY": 22.0, "minX": 0.0, "maxY": 21014.0, "series": [{"data": [[0.0, 22.0], [0.1, 28.0], [0.2, 31.0], [0.3, 34.0], [0.4, 36.0], [0.5, 38.0], [0.6, 40.0], [0.7, 41.0], [0.8, 42.0], [0.9, 44.0], [1.0, 45.0], [1.1, 45.0], [1.2, 46.0], [1.3, 46.0], [1.4, 47.0], [1.5, 48.0], [1.6, 48.0], [1.7, 49.0], [1.8, 49.0], [1.9, 50.0], [2.0, 50.0], [2.1, 51.0], [2.2, 51.0], [2.3, 52.0], [2.4, 52.0], [2.5, 53.0], [2.6, 53.0], [2.7, 53.0], [2.8, 54.0], [2.9, 54.0], [3.0, 54.0], [3.1, 55.0], [3.2, 55.0], [3.3, 55.0], [3.4, 56.0], [3.5, 56.0], [3.6, 56.0], [3.7, 56.0], [3.8, 57.0], [3.9, 57.0], [4.0, 57.0], [4.1, 57.0], [4.2, 58.0], [4.3, 58.0], [4.4, 58.0], [4.5, 58.0], [4.6, 59.0], [4.7, 59.0], [4.8, 59.0], [4.9, 59.0], [5.0, 59.0], [5.1, 60.0], [5.2, 60.0], [5.3, 60.0], [5.4, 60.0], [5.5, 60.0], [5.6, 60.0], [5.7, 61.0], [5.8, 61.0], [5.9, 61.0], [6.0, 61.0], [6.1, 61.0], [6.2, 61.0], [6.3, 62.0], [6.4, 62.0], [6.5, 62.0], [6.6, 62.0], [6.7, 62.0], [6.8, 62.0], [6.9, 62.0], [7.0, 63.0], [7.1, 63.0], [7.2, 63.0], [7.3, 63.0], [7.4, 63.0], [7.5, 63.0], [7.6, 63.0], [7.7, 64.0], [7.8, 64.0], [7.9, 64.0], [8.0, 64.0], [8.1, 64.0], [8.2, 64.0], [8.3, 64.0], [8.4, 64.0], [8.5, 65.0], [8.6, 65.0], [8.7, 65.0], [8.8, 65.0], [8.9, 65.0], [9.0, 65.0], [9.1, 65.0], [9.2, 65.0], [9.3, 66.0], [9.4, 66.0], [9.5, 66.0], [9.6, 66.0], [9.7, 66.0], [9.8, 66.0], [9.9, 66.0], [10.0, 66.0], [10.1, 66.0], [10.2, 67.0], [10.3, 67.0], [10.4, 67.0], [10.5, 67.0], [10.6, 67.0], [10.7, 67.0], [10.8, 67.0], [10.9, 67.0], [11.0, 67.0], [11.1, 67.0], [11.2, 67.0], [11.3, 68.0], [11.4, 68.0], [11.5, 68.0], [11.6, 68.0], [11.7, 68.0], [11.8, 68.0], [11.9, 68.0], [12.0, 68.0], [12.1, 68.0], [12.2, 68.0], [12.3, 68.0], [12.4, 69.0], [12.5, 69.0], [12.6, 69.0], [12.7, 69.0], [12.8, 69.0], [12.9, 69.0], [13.0, 69.0], [13.1, 69.0], [13.2, 69.0], [13.3, 69.0], [13.4, 69.0], [13.5, 69.0], [13.6, 70.0], [13.7, 70.0], [13.8, 70.0], [13.9, 70.0], [14.0, 70.0], [14.1, 70.0], [14.2, 70.0], [14.3, 70.0], [14.4, 70.0], [14.5, 70.0], [14.6, 70.0], [14.7, 71.0], [14.8, 71.0], [14.9, 71.0], [15.0, 71.0], [15.1, 71.0], [15.2, 71.0], [15.3, 71.0], [15.4, 71.0], [15.5, 71.0], [15.6, 71.0], [15.7, 71.0], [15.8, 71.0], [15.9, 71.0], [16.0, 71.0], [16.1, 72.0], [16.2, 72.0], [16.3, 72.0], [16.4, 72.0], [16.5, 72.0], [16.6, 72.0], [16.7, 72.0], [16.8, 72.0], [16.9, 72.0], [17.0, 72.0], [17.1, 72.0], [17.2, 72.0], [17.3, 72.0], [17.4, 72.0], [17.5, 72.0], [17.6, 73.0], [17.7, 73.0], [17.8, 73.0], [17.9, 73.0], [18.0, 73.0], [18.1, 73.0], [18.2, 73.0], [18.3, 73.0], [18.4, 73.0], [18.5, 73.0], [18.6, 73.0], [18.7, 73.0], [18.8, 73.0], [18.9, 73.0], [19.0, 73.0], [19.1, 74.0], [19.2, 74.0], [19.3, 74.0], [19.4, 74.0], [19.5, 74.0], [19.6, 74.0], [19.7, 74.0], [19.8, 74.0], [19.9, 74.0], [20.0, 74.0], [20.1, 74.0], [20.2, 74.0], [20.3, 74.0], [20.4, 74.0], [20.5, 74.0], [20.6, 74.0], [20.7, 75.0], [20.8, 75.0], [20.9, 75.0], [21.0, 75.0], [21.1, 75.0], [21.2, 75.0], [21.3, 75.0], [21.4, 75.0], [21.5, 75.0], [21.6, 75.0], [21.7, 75.0], [21.8, 75.0], [21.9, 75.0], [22.0, 75.0], [22.1, 75.0], [22.2, 75.0], [22.3, 75.0], [22.4, 75.0], [22.5, 76.0], [22.6, 76.0], [22.7, 76.0], [22.8, 76.0], [22.9, 76.0], [23.0, 76.0], [23.1, 76.0], [23.2, 76.0], [23.3, 76.0], [23.4, 76.0], [23.5, 76.0], [23.6, 76.0], [23.7, 76.0], [23.8, 76.0], [23.9, 76.0], [24.0, 76.0], [24.1, 76.0], [24.2, 76.0], [24.3, 77.0], [24.4, 77.0], [24.5, 77.0], [24.6, 77.0], [24.7, 77.0], [24.8, 77.0], [24.9, 77.0], [25.0, 77.0], [25.1, 77.0], [25.2, 77.0], [25.3, 77.0], [25.4, 77.0], [25.5, 77.0], [25.6, 77.0], [25.7, 77.0], [25.8, 77.0], [25.9, 77.0], [26.0, 77.0], [26.1, 77.0], [26.2, 78.0], [26.3, 78.0], [26.4, 78.0], [26.5, 78.0], [26.6, 78.0], [26.7, 78.0], [26.8, 78.0], [26.9, 78.0], [27.0, 78.0], [27.1, 78.0], [27.2, 78.0], [27.3, 78.0], [27.4, 78.0], [27.5, 78.0], [27.6, 78.0], [27.7, 78.0], [27.8, 78.0], [27.9, 78.0], [28.0, 78.0], [28.1, 78.0], [28.2, 79.0], [28.3, 79.0], [28.4, 79.0], [28.5, 79.0], [28.6, 79.0], [28.7, 79.0], [28.8, 79.0], [28.9, 79.0], [29.0, 79.0], [29.1, 79.0], [29.2, 79.0], [29.3, 79.0], [29.4, 79.0], [29.5, 79.0], [29.6, 79.0], [29.7, 79.0], [29.8, 79.0], [29.9, 79.0], [30.0, 79.0], [30.1, 79.0], [30.2, 79.0], [30.3, 80.0], [30.4, 80.0], [30.5, 80.0], [30.6, 80.0], [30.7, 80.0], [30.8, 80.0], [30.9, 80.0], [31.0, 80.0], [31.1, 80.0], [31.2, 80.0], [31.3, 80.0], [31.4, 80.0], [31.5, 80.0], [31.6, 80.0], [31.7, 80.0], [31.8, 80.0], [31.9, 80.0], [32.0, 80.0], [32.1, 80.0], [32.2, 80.0], [32.3, 80.0], [32.4, 80.0], [32.5, 80.0], [32.6, 80.0], [32.7, 81.0], [32.8, 81.0], [32.9, 81.0], [33.0, 81.0], [33.1, 81.0], [33.2, 81.0], [33.3, 81.0], [33.4, 81.0], [33.5, 81.0], [33.6, 81.0], [33.7, 81.0], [33.8, 81.0], [33.9, 81.0], [34.0, 81.0], [34.1, 81.0], [34.2, 81.0], [34.3, 81.0], [34.4, 81.0], [34.5, 81.0], [34.6, 81.0], [34.7, 81.0], [34.8, 81.0], [34.9, 82.0], [35.0, 82.0], [35.1, 82.0], [35.2, 82.0], [35.3, 82.0], [35.4, 82.0], [35.5, 82.0], [35.6, 82.0], [35.7, 82.0], [35.8, 82.0], [35.9, 82.0], [36.0, 82.0], [36.1, 82.0], [36.2, 82.0], [36.3, 82.0], [36.4, 82.0], [36.5, 82.0], [36.6, 82.0], [36.7, 82.0], [36.8, 82.0], [36.9, 82.0], [37.0, 82.0], [37.1, 82.0], [37.2, 82.0], [37.3, 83.0], [37.4, 83.0], [37.5, 83.0], [37.6, 83.0], [37.7, 83.0], [37.8, 83.0], [37.9, 83.0], [38.0, 83.0], [38.1, 83.0], [38.2, 83.0], [38.3, 83.0], [38.4, 83.0], [38.5, 83.0], [38.6, 83.0], [38.7, 83.0], [38.8, 83.0], [38.9, 83.0], [39.0, 83.0], [39.1, 83.0], [39.2, 83.0], [39.3, 83.0], [39.4, 83.0], [39.5, 84.0], [39.6, 84.0], [39.7, 84.0], [39.8, 84.0], [39.9, 84.0], [40.0, 84.0], [40.1, 84.0], [40.2, 84.0], [40.3, 84.0], [40.4, 84.0], [40.5, 84.0], [40.6, 84.0], [40.7, 84.0], [40.8, 84.0], [40.9, 84.0], [41.0, 84.0], [41.1, 84.0], [41.2, 84.0], [41.3, 84.0], [41.4, 84.0], [41.5, 84.0], [41.6, 84.0], [41.7, 84.0], [41.8, 85.0], [41.9, 85.0], [42.0, 85.0], [42.1, 85.0], [42.2, 85.0], [42.3, 85.0], [42.4, 85.0], [42.5, 85.0], [42.6, 85.0], [42.7, 85.0], [42.8, 85.0], [42.9, 85.0], [43.0, 85.0], [43.1, 85.0], [43.2, 85.0], [43.3, 85.0], [43.4, 85.0], [43.5, 85.0], [43.6, 85.0], [43.7, 85.0], [43.8, 85.0], [43.9, 86.0], [44.0, 86.0], [44.1, 86.0], [44.2, 86.0], [44.3, 86.0], [44.4, 86.0], [44.5, 86.0], [44.6, 86.0], [44.7, 86.0], [44.8, 86.0], [44.9, 86.0], [45.0, 86.0], [45.1, 86.0], [45.2, 86.0], [45.3, 86.0], [45.4, 86.0], [45.5, 86.0], [45.6, 86.0], [45.7, 86.0], [45.8, 86.0], [45.9, 86.0], [46.0, 87.0], [46.1, 87.0], [46.2, 87.0], [46.3, 87.0], [46.4, 87.0], [46.5, 87.0], [46.6, 87.0], [46.7, 87.0], [46.8, 87.0], [46.9, 87.0], [47.0, 87.0], [47.1, 87.0], [47.2, 87.0], [47.3, 87.0], [47.4, 87.0], [47.5, 87.0], [47.6, 87.0], [47.7, 87.0], [47.8, 87.0], [47.9, 87.0], [48.0, 87.0], [48.1, 87.0], [48.2, 88.0], [48.3, 88.0], [48.4, 88.0], [48.5, 88.0], [48.6, 88.0], [48.7, 88.0], [48.8, 88.0], [48.9, 88.0], [49.0, 88.0], [49.1, 88.0], [49.2, 88.0], [49.3, 88.0], [49.4, 88.0], [49.5, 88.0], [49.6, 88.0], [49.7, 88.0], [49.8, 88.0], [49.9, 88.0], [50.0, 88.0], [50.1, 88.0], [50.2, 88.0], [50.3, 89.0], [50.4, 89.0], [50.5, 89.0], [50.6, 89.0], [50.7, 89.0], [50.8, 89.0], [50.9, 89.0], [51.0, 89.0], [51.1, 89.0], [51.2, 89.0], [51.3, 89.0], [51.4, 89.0], [51.5, 89.0], [51.6, 89.0], [51.7, 89.0], [51.8, 89.0], [51.9, 89.0], [52.0, 89.0], [52.1, 89.0], [52.2, 89.0], [52.3, 90.0], [52.4, 90.0], [52.5, 90.0], [52.6, 90.0], [52.7, 90.0], [52.8, 90.0], [52.9, 90.0], [53.0, 90.0], [53.1, 90.0], [53.2, 90.0], [53.3, 90.0], [53.4, 90.0], [53.5, 90.0], [53.6, 90.0], [53.7, 90.0], [53.8, 90.0], [53.9, 90.0], [54.0, 90.0], [54.1, 90.0], [54.2, 91.0], [54.3, 91.0], [54.4, 91.0], [54.5, 91.0], [54.6, 91.0], [54.7, 91.0], [54.8, 91.0], [54.9, 91.0], [55.0, 91.0], [55.1, 91.0], [55.2, 91.0], [55.3, 91.0], [55.4, 91.0], [55.5, 91.0], [55.6, 91.0], [55.7, 91.0], [55.8, 91.0], [55.9, 92.0], [56.0, 92.0], [56.1, 92.0], [56.2, 92.0], [56.3, 92.0], [56.4, 92.0], [56.5, 92.0], [56.6, 92.0], [56.7, 92.0], [56.8, 92.0], [56.9, 92.0], [57.0, 92.0], [57.1, 92.0], [57.2, 92.0], [57.3, 92.0], [57.4, 92.0], [57.5, 92.0], [57.6, 92.0], [57.7, 93.0], [57.8, 93.0], [57.9, 93.0], [58.0, 93.0], [58.1, 93.0], [58.2, 93.0], [58.3, 93.0], [58.4, 93.0], [58.5, 93.0], [58.6, 93.0], [58.7, 93.0], [58.8, 93.0], [58.9, 93.0], [59.0, 93.0], [59.1, 93.0], [59.2, 93.0], [59.3, 94.0], [59.4, 94.0], [59.5, 94.0], [59.6, 94.0], [59.7, 94.0], [59.8, 94.0], [59.9, 94.0], [60.0, 94.0], [60.1, 94.0], [60.2, 94.0], [60.3, 94.0], [60.4, 94.0], [60.5, 94.0], [60.6, 94.0], [60.7, 94.0], [60.8, 94.0], [60.9, 95.0], [61.0, 95.0], [61.1, 95.0], [61.2, 95.0], [61.3, 95.0], [61.4, 95.0], [61.5, 95.0], [61.6, 95.0], [61.7, 95.0], [61.8, 95.0], [61.9, 95.0], [62.0, 95.0], [62.1, 95.0], [62.2, 95.0], [62.3, 95.0], [62.4, 96.0], [62.5, 96.0], [62.6, 96.0], [62.7, 96.0], [62.8, 96.0], [62.9, 96.0], [63.0, 96.0], [63.1, 96.0], [63.2, 96.0], [63.3, 96.0], [63.4, 96.0], [63.5, 96.0], [63.6, 96.0], [63.7, 96.0], [63.8, 96.0], [63.9, 97.0], [64.0, 97.0], [64.1, 97.0], [64.2, 97.0], [64.3, 97.0], [64.4, 97.0], [64.5, 97.0], [64.6, 97.0], [64.7, 97.0], [64.8, 97.0], [64.9, 97.0], [65.0, 97.0], [65.1, 97.0], [65.2, 97.0], [65.3, 97.0], [65.4, 98.0], [65.5, 98.0], [65.6, 98.0], [65.7, 98.0], [65.8, 98.0], [65.9, 98.0], [66.0, 98.0], [66.1, 98.0], [66.2, 98.0], [66.3, 98.0], [66.4, 98.0], [66.5, 98.0], [66.6, 98.0], [66.7, 99.0], [66.8, 99.0], [66.9, 99.0], [67.0, 99.0], [67.1, 99.0], [67.2, 99.0], [67.3, 99.0], [67.4, 99.0], [67.5, 99.0], [67.6, 99.0], [67.7, 99.0], [67.8, 99.0], [67.9, 99.0], [68.0, 100.0], [68.1, 100.0], [68.2, 100.0], [68.3, 100.0], [68.4, 100.0], [68.5, 100.0], [68.6, 100.0], [68.7, 100.0], [68.8, 100.0], [68.9, 100.0], [69.0, 100.0], [69.1, 100.0], [69.2, 100.0], [69.3, 101.0], [69.4, 101.0], [69.5, 101.0], [69.6, 101.0], [69.7, 101.0], [69.8, 101.0], [69.9, 101.0], [70.0, 101.0], [70.1, 101.0], [70.2, 101.0], [70.3, 101.0], [70.4, 101.0], [70.5, 102.0], [70.6, 102.0], [70.7, 102.0], [70.8, 102.0], [70.9, 102.0], [71.0, 102.0], [71.1, 102.0], [71.2, 102.0], [71.3, 102.0], [71.4, 102.0], [71.5, 102.0], [71.6, 103.0], [71.7, 103.0], [71.8, 103.0], [71.9, 103.0], [72.0, 103.0], [72.1, 103.0], [72.2, 103.0], [72.3, 103.0], [72.4, 103.0], [72.5, 103.0], [72.6, 104.0], [72.7, 104.0], [72.8, 104.0], [72.9, 104.0], [73.0, 104.0], [73.1, 104.0], [73.2, 104.0], [73.3, 104.0], [73.4, 104.0], [73.5, 105.0], [73.6, 105.0], [73.7, 105.0], [73.8, 105.0], [73.9, 105.0], [74.0, 105.0], [74.1, 105.0], [74.2, 105.0], [74.3, 105.0], [74.4, 106.0], [74.5, 106.0], [74.6, 106.0], [74.7, 106.0], [74.8, 106.0], [74.9, 106.0], [75.0, 106.0], [75.1, 106.0], [75.2, 106.0], [75.3, 107.0], [75.4, 107.0], [75.5, 107.0], [75.6, 107.0], [75.7, 107.0], [75.8, 107.0], [75.9, 107.0], [76.0, 108.0], [76.1, 108.0], [76.2, 108.0], [76.3, 108.0], [76.4, 108.0], [76.5, 108.0], [76.6, 108.0], [76.7, 109.0], [76.8, 109.0], [76.9, 109.0], [77.0, 109.0], [77.1, 109.0], [77.2, 109.0], [77.3, 110.0], [77.4, 110.0], [77.5, 110.0], [77.6, 110.0], [77.7, 110.0], [77.8, 110.0], [77.9, 110.0], [78.0, 111.0], [78.1, 111.0], [78.2, 111.0], [78.3, 111.0], [78.4, 111.0], [78.5, 111.0], [78.6, 112.0], [78.7, 112.0], [78.8, 112.0], [78.9, 112.0], [79.0, 112.0], [79.1, 112.0], [79.2, 113.0], [79.3, 113.0], [79.4, 113.0], [79.5, 113.0], [79.6, 113.0], [79.7, 113.0], [79.8, 114.0], [79.9, 114.0], [80.0, 114.0], [80.1, 114.0], [80.2, 114.0], [80.3, 115.0], [80.4, 115.0], [80.5, 115.0], [80.6, 115.0], [80.7, 116.0], [80.8, 116.0], [80.9, 116.0], [81.0, 116.0], [81.1, 116.0], [81.2, 117.0], [81.3, 117.0], [81.4, 117.0], [81.5, 117.0], [81.6, 118.0], [81.7, 118.0], [81.8, 118.0], [81.9, 118.0], [82.0, 119.0], [82.1, 119.0], [82.2, 119.0], [82.3, 119.0], [82.4, 119.0], [82.5, 120.0], [82.6, 120.0], [82.7, 120.0], [82.8, 121.0], [82.9, 121.0], [83.0, 121.0], [83.1, 121.0], [83.2, 122.0], [83.3, 122.0], [83.4, 122.0], [83.5, 123.0], [83.6, 123.0], [83.7, 123.0], [83.8, 124.0], [83.9, 124.0], [84.0, 124.0], [84.1, 124.0], [84.2, 125.0], [84.3, 125.0], [84.4, 125.0], [84.5, 126.0], [84.6, 126.0], [84.7, 126.0], [84.8, 127.0], [84.9, 127.0], [85.0, 128.0], [85.1, 128.0], [85.2, 129.0], [85.3, 129.0], [85.4, 130.0], [85.5, 130.0], [85.6, 130.0], [85.7, 131.0], [85.8, 131.0], [85.9, 132.0], [86.0, 132.0], [86.1, 133.0], [86.2, 133.0], [86.3, 134.0], [86.4, 134.0], [86.5, 135.0], [86.6, 135.0], [86.7, 136.0], [86.8, 137.0], [86.9, 137.0], [87.0, 138.0], [87.1, 139.0], [87.2, 139.0], [87.3, 140.0], [87.4, 140.0], [87.5, 141.0], [87.6, 141.0], [87.7, 142.0], [87.8, 143.0], [87.9, 143.0], [88.0, 144.0], [88.1, 145.0], [88.2, 145.0], [88.3, 146.0], [88.4, 147.0], [88.5, 148.0], [88.6, 149.0], [88.7, 150.0], [88.8, 150.0], [88.9, 151.0], [89.0, 152.0], [89.1, 153.0], [89.2, 153.0], [89.3, 155.0], [89.4, 156.0], [89.5, 157.0], [89.6, 158.0], [89.7, 159.0], [89.8, 160.0], [89.9, 161.0], [90.0, 162.0], [90.1, 163.0], [90.2, 164.0], [90.3, 165.0], [90.4, 167.0], [90.5, 169.0], [90.6, 171.0], [90.7, 173.0], [90.8, 175.0], [90.9, 176.0], [91.0, 178.0], [91.1, 179.0], [91.2, 181.0], [91.3, 183.0], [91.4, 185.0], [91.5, 187.0], [91.6, 189.0], [91.7, 191.0], [91.8, 192.0], [91.9, 195.0], [92.0, 197.0], [92.1, 199.0], [92.2, 201.0], [92.3, 203.0], [92.4, 205.0], [92.5, 206.0], [92.6, 208.0], [92.7, 210.0], [92.8, 212.0], [92.9, 214.0], [93.0, 216.0], [93.1, 219.0], [93.2, 222.0], [93.3, 227.0], [93.4, 232.0], [93.5, 237.0], [93.6, 247.0], [93.7, 251.0], [93.8, 255.0], [93.9, 263.0], [94.0, 272.0], [94.1, 285.0], [94.2, 292.0], [94.3, 293.0], [94.4, 296.0], [94.5, 298.0], [94.6, 300.0], [94.7, 301.0], [94.8, 304.0], [94.9, 306.0], [95.0, 310.0], [95.1, 314.0], [95.2, 319.0], [95.3, 326.0], [95.4, 332.0], [95.5, 337.0], [95.6, 341.0], [95.7, 346.0], [95.8, 350.0], [95.9, 353.0], [96.0, 356.0], [96.1, 360.0], [96.2, 366.0], [96.3, 371.0], [96.4, 377.0], [96.5, 380.0], [96.6, 384.0], [96.7, 389.0], [96.8, 394.0], [96.9, 397.0], [97.0, 400.0], [97.1, 404.0], [97.2, 407.0], [97.3, 412.0], [97.4, 424.0], [97.5, 473.0], [97.6, 493.0], [97.7, 501.0], [97.8, 522.0], [97.9, 590.0], [98.0, 699.0], [98.1, 805.0], [98.2, 1023.0], [98.3, 1058.0], [98.4, 1067.0], [98.5, 1073.0], [98.6, 1078.0], [98.7, 1081.0], [98.8, 1084.0], [98.9, 1087.0], [99.0, 1090.0], [99.1, 1093.0], [99.2, 1098.0], [99.3, 1101.0], [99.4, 1107.0], [99.5, 1114.0], [99.6, 1128.0], [99.7, 1145.0], [99.8, 1219.0], [99.9, 1399.0], [100.0, 21014.0]], "isOverall": false, "label": "BaiduIndexRequest", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 49913.0, "series": [{"data": [[0.0, 49913.0], [600.0, 59.0], [700.0, 67.0], [3000.0, 15.0], [3100.0, 3.0], [200.0, 1795.0], [800.0, 56.0], [3200.0, 1.0], [3300.0, 2.0], [900.0, 19.0], [1000.0, 775.0], [1100.0, 397.0], [300.0, 1766.0], [1200.0, 38.0], [21000.0, 36.0], [1300.0, 43.0], [20900.0, 3.0], [1400.0, 10.0], [100.0, 17720.0], [400.0, 508.0], [7000.0, 1.0], [1800.0, 1.0], [1900.0, 1.0], [500.0, 174.0]], "isOverall": false, "label": "BaiduIndexRequest", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 21000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 73403.0, "minX": 3.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 73403.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 73403.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 13.746938775510205, "minX": 1.59100296E12, "maxY": 78.25865747099554, "series": [{"data": [[1.59100308E12, 75.62115148776907], [1.59100302E12, 78.25865747099554], [1.59100296E12, 38.13655224443613], [1.59100314E12, 13.746938775510205]], "isOverall": false, "label": "jp@gc - Stepping Thread Group (deprecated)", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59100314E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 32.56756756756757, "minX": 1.0, "maxY": 21014.0, "series": [{"data": [[3.0, 21007.0], [4.0, 1713.3076923076924], [5.0, 254.93457943925236], [6.0, 146.5263157894737], [7.0, 69.52631578947368], [8.0, 71.4090909090909], [9.0, 68.70769230769233], [10.0, 61.985000000000014], [11.0, 32.56756756756757], [12.0, 65.9074074074074], [13.0, 283.0], [14.0, 69.17592592592595], [15.0, 64.65357142857137], [16.0, 66.47727272727273], [17.0, 71.25925925925927], [18.0, 69.92924528301887], [19.0, 71.87500000000003], [20.0, 67.47953216374277], [21.0, 79.78688524590164], [22.0, 76.10236220472444], [23.0, 83.70833333333333], [24.0, 97.01960784313722], [25.0, 74.4017094017094], [26.0, 126.61842105263156], [27.0, 73.3270777479892], [28.0, 96.26666666666667], [29.0, 75.45121951219514], [30.0, 84.82800982800988], [31.0, 79.46268656716418], [32.0, 90.63369963369966], [33.0, 139.9186046511628], [34.0, 97.78645833333337], [35.0, 90.84665226781854], [36.0, 83.475], [37.0, 109.74485596707818], [38.0, 89.25142857142862], [39.0, 116.5925925925926], [40.0, 80.63039399624776], [41.0, 78.0588235294118], [42.0, 154.87589498806673], [43.0, 67.45112781954886], [44.0, 104.43037974683546], [45.0, 87.4010989010989], [46.0, 150.33333333333334], [47.0, 134.6666666666667], [48.0, 110.3459459459459], [49.0, 98.64052287581697], [50.0, 110.94493783303744], [51.0, 119.26415094339623], [52.0, 91.18539325842698], [53.0, 86.92920353982299], [54.0, 80.86666666666667], [55.0, 81.71135430916547], [56.0, 82.74736842105268], [57.0, 104.97214484679668], [58.0, 154.4579831932774], [59.0, 80.64516129032258], [60.0, 86.19582850521434], [61.0, 298.37305699481874], [62.0, 214.43181818181816], [63.0, 78.13245033112588], [64.0, 100.67027027027028], [65.0, 76.02463054187186], [66.0, 114.85512367491172], [67.0, 177.88732394366198], [68.0, 80.68571428571427], [69.0, 78.10843373493977], [70.0, 84.93235294117632], [71.0, 101.2309582309582], [72.0, 133.12987012987017], [73.0, 88.14285714285721], [74.0, 80.20000000000002], [75.0, 99.55807365439097], [76.0, 102.11602209944752], [77.0, 148.14049586776864], [78.0, 98.10191082802544], [79.0, 104.01587301587303], [80.0, 145.55916371729896], [1.0, 21014.0]], "isOverall": false, "label": "BaiduIndexRequest", "isController": false}, {"data": [[72.58283721373743, 135.55891448578416]], "isOverall": false, "label": "BaiduIndexRequest-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 80.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.59100296E12, "maxY": 1495416.95, "series": [{"data": [[1.59100308E12, 1354170.1], [1.59100302E12, 1495416.95], [1.59100296E12, 347549.68333333335], [1.59100314E12, 10729.3]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.59100308E12, 0.0], [1.59100302E12, 0.0], [1.59100296E12, 0.0], [1.59100314E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59100314E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 83.51640890230095, "minX": 1.59100296E12, "maxY": 591.7020408163264, "series": [{"data": [[1.59100308E12, 145.22819983218199], [1.59100302E12, 135.63274788859846], [1.59100296E12, 83.51640890230095], [1.59100314E12, 591.7020408163264]], "isOverall": false, "label": "BaiduIndexRequest", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59100314E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.59100296E12, "maxY": 4.9E-324, "series": [{"data": [[1.59100308E12, 0.0], [1.59100302E12, 0.0], [1.59100296E12, 0.0], [1.59100314E12, 0.0]], "isOverall": false, "label": "BaiduIndexRequest", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59100314E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 83.49440462718455, "minX": 1.59100296E12, "maxY": 591.6775510204081, "series": [{"data": [[1.59100308E12, 145.21096624281847], [1.59100302E12, 135.61761009965196], [1.59100296E12, 83.49440462718455], [1.59100314E12, 591.6775510204081]], "isOverall": false, "label": "BaiduIndexRequest", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59100314E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1.7976931348623157E308, "minX": 1.7976931348623157E308, "maxY": 4.9E-324, "series": [{"data": [], "isOverall": false, "label": "Max", "isController": false}, {"data": [], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "Min", "isController": false}, {"data": [], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 4.9E-324, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 43.0, "minX": 1.0, "maxY": 21007.0, "series": [{"data": [[4.0, 21007.0], [28.0, 63.0], [81.0, 43.0], [83.0, 67.0], [80.0, 63.0], [95.0, 719.0], [132.0, 65.0], [139.0, 65.0], [140.0, 493.0], [159.0, 795.0], [176.0, 333.0], [195.0, 336.0], [194.0, 412.0], [204.0, 387.0], [211.0, 305.0], [223.0, 86.0], [222.0, 49.0], [231.0, 57.0], [233.0, 59.0], [244.0, 309.0], [246.0, 309.0], [255.0, 71.0], [265.0, 75.0], [268.0, 81.0], [274.0, 75.0], [295.0, 62.0], [305.0, 69.0], [332.0, 84.0], [333.0, 81.0], [350.0, 96.0], [344.0, 216.0], [365.0, 78.0], [362.0, 109.0], [376.0, 192.5], [397.0, 83.0], [392.0, 80.0], [405.0, 77.0], [400.0, 75.0], [401.0, 108.0], [410.0, 149.5], [406.0, 126.0], [408.0, 138.0], [412.0, 55.0], [427.0, 152.0], [420.0, 87.0], [435.0, 74.0], [433.0, 80.0], [440.0, 91.0], [441.0, 150.0], [432.0, 146.0], [452.0, 121.0], [449.0, 99.0], [457.0, 101.0], [466.0, 80.0], [469.0, 106.0], [472.0, 97.0], [490.0, 127.0], [488.0, 107.0], [491.0, 103.0], [486.0, 90.0], [487.0, 79.0], [500.0, 77.0], [509.0, 93.0], [519.0, 82.0], [514.0, 84.0], [524.0, 60.0], [537.0, 92.0], [525.0, 95.0], [528.0, 96.0], [532.0, 107.0], [572.0, 90.0], [558.0, 96.0], [567.0, 65.0], [563.0, 88.0], [553.0, 103.0], [569.0, 92.0], [561.0, 107.0], [559.0, 98.0], [544.0, 100.0], [605.0, 81.0], [585.0, 82.0], [584.0, 92.0], [596.0, 102.0], [581.0, 93.0], [599.0, 83.0], [577.0, 93.0], [603.0, 98.0], [592.0, 87.0], [583.0, 92.0], [635.0, 82.0], [627.0, 85.0], [628.0, 93.0], [617.0, 101.0], [634.0, 93.0], [632.0, 86.0], [638.0, 92.0], [626.0, 88.0], [636.0, 81.5], [614.0, 84.0], [609.0, 80.0], [671.0, 91.0], [664.0, 93.0], [667.0, 94.0], [644.0, 88.0], [659.0, 95.0], [662.0, 84.5], [646.0, 85.0], [701.0, 76.0], [676.0, 82.0], [673.0, 90.0], [685.0, 88.0], [683.0, 85.0], [699.0, 91.0], [684.0, 87.0], [698.0, 86.0], [730.0, 79.0], [712.0, 82.0], [708.0, 86.5], [704.0, 92.5], [719.0, 85.0], [714.0, 79.0], [725.0, 88.0], [739.0, 81.0], [737.0, 67.0], [763.0, 88.0], [765.0, 91.0], [760.0, 90.0], [795.0, 63.0], [796.0, 87.0], [777.0, 85.0], [817.0, 77.0], [802.0, 83.0], [806.0, 89.0], [1.0, 21002.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 817.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 4.9E-324, "series": [{"data": [[4.0, 0.0], [28.0, 0.0], [81.0, 0.0], [83.0, 0.0], [80.0, 0.0], [95.0, 0.0], [132.0, 0.0], [139.0, 0.0], [140.0, 0.0], [159.0, 0.0], [176.0, 0.0], [195.0, 0.0], [194.0, 0.0], [204.0, 0.0], [211.0, 0.0], [223.0, 0.0], [222.0, 0.0], [231.0, 0.0], [233.0, 0.0], [244.0, 0.0], [246.0, 0.0], [255.0, 0.0], [265.0, 0.0], [268.0, 0.0], [274.0, 0.0], [295.0, 0.0], [305.0, 0.0], [332.0, 0.0], [333.0, 0.0], [350.0, 0.0], [344.0, 0.0], [365.0, 0.0], [362.0, 0.0], [376.0, 0.0], [397.0, 0.0], [392.0, 0.0], [405.0, 0.0], [400.0, 0.0], [401.0, 0.0], [410.0, 0.0], [406.0, 0.0], [408.0, 0.0], [412.0, 0.0], [427.0, 0.0], [420.0, 0.0], [435.0, 0.0], [433.0, 0.0], [440.0, 0.0], [441.0, 0.0], [432.0, 0.0], [452.0, 0.0], [449.0, 0.0], [457.0, 0.0], [466.0, 0.0], [469.0, 0.0], [472.0, 0.0], [490.0, 0.0], [488.0, 0.0], [491.0, 0.0], [486.0, 0.0], [487.0, 0.0], [500.0, 0.0], [509.0, 0.0], [519.0, 0.0], [514.0, 0.0], [524.0, 0.0], [537.0, 0.0], [525.0, 0.0], [528.0, 0.0], [532.0, 0.0], [572.0, 0.0], [558.0, 0.0], [567.0, 0.0], [563.0, 0.0], [553.0, 0.0], [569.0, 0.0], [561.0, 0.0], [559.0, 0.0], [544.0, 0.0], [605.0, 0.0], [585.0, 0.0], [584.0, 0.0], [596.0, 0.0], [581.0, 0.0], [599.0, 0.0], [577.0, 0.0], [603.0, 0.0], [592.0, 0.0], [583.0, 0.0], [635.0, 0.0], [627.0, 0.0], [628.0, 0.0], [617.0, 0.0], [634.0, 0.0], [632.0, 0.0], [638.0, 0.0], [626.0, 0.0], [636.0, 0.0], [614.0, 0.0], [609.0, 0.0], [671.0, 0.0], [664.0, 0.0], [667.0, 0.0], [644.0, 0.0], [659.0, 0.0], [662.0, 0.0], [646.0, 0.0], [701.0, 0.0], [676.0, 0.0], [673.0, 0.0], [685.0, 0.0], [683.0, 0.0], [699.0, 0.0], [684.0, 0.0], [698.0, 0.0], [730.0, 0.0], [712.0, 0.0], [708.0, 0.0], [704.0, 0.0], [719.0, 0.0], [714.0, 0.0], [725.0, 0.0], [739.0, 0.0], [737.0, 0.0], [763.0, 0.0], [765.0, 0.0], [760.0, 0.0], [795.0, 0.0], [796.0, 0.0], [777.0, 0.0], [817.0, 0.0], [802.0, 0.0], [806.0, 0.0], [1.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 817.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.783333333333333, "minX": 1.59100296E12, "maxY": 570.65, "series": [{"data": [[1.59100308E12, 515.4], [1.59100302E12, 570.65], [1.59100296E12, 133.55], [1.59100314E12, 3.783333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59100314E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.59100296E12, "maxY": 570.1, "series": [{"data": [[1.59100308E12, 516.05], [1.59100302E12, 570.1], [1.59100296E12, 132.53333333333333], [1.59100314E12, 3.9833333333333334]], "isOverall": false, "label": "Non HTTP response code: javax.net.ssl.SSLException", "isController": false}, {"data": [[1.59100308E12, 0.35], [1.59100302E12, 0.2], [1.59100314E12, 0.1]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}, {"data": [[1.59100308E12, 0.03333333333333333], [1.59100302E12, 0.016666666666666666], [1.59100296E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59100314E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.083333333333333, "minX": 1.59100296E12, "maxY": 570.3166666666667, "series": [{"data": [[1.59100308E12, 516.4333333333333], [1.59100302E12, 570.3166666666667], [1.59100296E12, 132.55], [1.59100314E12, 4.083333333333333]], "isOverall": false, "label": "BaiduIndexRequest-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59100314E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.083333333333333, "minX": 1.59100296E12, "maxY": 570.3166666666667, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.59100308E12, 516.4333333333333], [1.59100302E12, 570.3166666666667], [1.59100296E12, 132.55], [1.59100314E12, 4.083333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59100314E12, "title": "Total Transactions Per Second"}},
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

